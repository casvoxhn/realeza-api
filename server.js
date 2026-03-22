// server.js — V16.11
// Fix: timeout 180s + referencias eliminadas
// Fix V16.5: deduplicación, timeout Express, keep-alive
// Fix V16.6: in-memory job queue — soporta usuarios simultáneos sin Redis
// Fix V16.7: humanos ruteados a buildPrompt — archivos legacy eliminados
// Fix V16.8: detección automática de sujetos
// Fix V16.9: detección mejorada — niños nunca clasificados como animales
// Fix V16.10: subjects pasado a buildPrompt — orden dinámico humano/mascota
// Fix V16.11: detección de múltiples sujetos por foto — 2 personas + perro en 1 foto

const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { createClient } = require('@supabase/supabase-js');
const crypto = require('crypto');
require('dotenv').config();

const buildPrompt = require('./styles/v2/buildPrompt');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '100mb' }));

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
const genAI    = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const MODEL_ID = "gemini-3.1-flash-image-preview";

// ── JOB QUEUE ─────────────────────────────────────────────────────────────────
const jobs = new Map();

setInterval(() => {
  const cutoff = Date.now() - 30 * 60 * 1000;
  for (const [id, job] of jobs.entries()) {
    if (job.createdAt < cutoff) jobs.delete(id);
  }
}, 10 * 60 * 1000);

function generateJobId() {
  return crypto.randomBytes(12).toString('hex');
}

function hashImagen(base64) {
  return crypto.createHash('md5').update(base64.slice(0, 500)).digest('hex').slice(0, 8);
}

async function uploadBufferToSupabase(buffer, prefix) {
  const fileName = `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}.jpg`;
  const { error } = await supabase.storage.from('generated-art').upload(fileName, buffer, { contentType: 'image/jpeg' });
  if (error) throw error;
  const { data } = supabase.storage.from('generated-art').getPublicUrl(fileName);
  return data.publicUrl;
}

// ── DETECCIÓN AUTOMÁTICA DE SUJETOS ──────────────────────────────────────────
async function detectSubjects(images, model) {
  try {
    const parts = [
      ...images.map(img => ({
        inlineData: {
          data: img.replace(/^data:image\/\w+;base64,/, ""),
          mimeType: "image/jpeg"
        }
      })),
      { text: `Analyze these ${images.length} photos carefully.
Each photo may contain ONE OR MORE subjects.
List ALL subjects visible in each photo — do not skip anyone.

CRITICAL: Humans — including babies, toddlers, children and teenagers —
are ALWAYS "human_adult" or "human_child". NEVER classify a human as an animal.
A child is any person under approximately 12 years old.

Respond with ONLY a valid JSON array — no explanation, no markdown, no extra text.
One object per photo, each with a "subjects" array listing ALL subjects in that photo.
Valid types: "dog", "cat", "other_animal", "human_adult", "human_child"

Example for 1 photo with 2 adults and 1 dog:
[{"photo":1,"subjects":[{"type":"human_adult"},{"type":"human_adult"},{"type":"dog"}]}]

Example for 2 photos (1 child, 1 dog):
[{"photo":1,"subjects":[{"type":"human_child"}]},{"photo":2,"subjects":[{"type":"dog"}]}]

ONLY the JSON array. Nothing else.` }
    ];

    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig: { responseModalities: ["TEXT"] }
    });

    const text = result.response.candidates[0].content.parts
      .find(p => p.text)?.text?.trim();

    const clean = text.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(clean);

    // Aplanar todos los sujetos de todas las fotos en un array plano
    const allSubjects = [];
    for (const photoResult of parsed) {
      for (const subject of photoResult.subjects) {
        allSubjects.push(subject);
      }
    }

    return allSubjects;

  } catch (err) {
    console.error(`⚠️ detectSubjects failed: ${err.message} — fallback to mascotas`);
    return images.map(() => ({ type: 'dog' }));
  }
}

// ── RESUELVE CATEGORÍA A PARTIR DE LOS SUJETOS DETECTADOS ────────────────────
function resolveCategory(subjects) {
  const types = subjects.map(s => s.type);

  const hasHumanAdult = types.includes('human_adult');
  const hasHumanChild = types.includes('human_child');
  const hasHuman      = hasHumanAdult || hasHumanChild;
  const hasAnimal     = types.some(t => ['dog', 'cat', 'other_animal'].includes(t));

  const humanCount   = types.filter(t => t === 'human_adult' || t === 'human_child').length;
  const childIndices = types
    .map((t, i) => t === 'human_child' ? i + 1 : null)
    .filter(Boolean);

  if (!hasHuman && hasAnimal)
    return { categoria: 'mascotas', ninos: [], totalSubjects: subjects.length };

  if (hasHuman && !hasAnimal) {
    if (humanCount === 1 && hasHumanChild && !hasHumanAdult)
      return { categoria: 'ninos',    ninos: childIndices, totalSubjects: humanCount };
    if (humanCount === 1)
      return { categoria: 'retratos', ninos: [],           totalSubjects: humanCount };
    if (humanCount === 2)
      return { categoria: 'parejas',  ninos: childIndices, totalSubjects: humanCount };
    return   { categoria: 'familia',  ninos: childIndices, totalSubjects: humanCount };
  }

  if (hasHuman && hasAnimal)
    return { categoria: 'humano_mascota', ninos: childIndices, totalSubjects: subjects.length };

  return { categoria: 'mascotas', ninos: [], totalSubjects: subjects.length };
}

// ── WORKER ────────────────────────────────────────────────────────────────────
async function processJob(jobId, { images, style, category, gender }) {
  const startTotal = Date.now();
  const imgHash    = hashImagen(images[0]);

  jobs.set(jobId, { ...jobs.get(jobId), status: 'processing' });

  try {
    const numImages   = images.length;
    const isGroup     = numImages > 1;
    const hasGender   = gender && (gender === 'masculine' || gender === 'feminine');

    console.log(`\n${'='.repeat(60)}`);
    console.log(`🚀 V16.11 START | job:${jobId} | hash:${imgHash} | style:${style} | fotos:${numImages}`);

    // ── Subir originales ────────────────────────────────────────────────
    const originalUrls = await Promise.all(
      images.map(async (img, i) => {
        const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
        return await uploadBufferToSupabase(buffer, `ref_${i}`);
      })
    );

    // ── Detección automática ────────────────────────────────────────────
    const model    = genAI.getGenerativeModel({ model: MODEL_ID }, { timeout: 180000 });
    const tDetect  = Date.now();
    const subjects = await detectSubjects(images, model);
    const detected = resolveCategory(subjects);

    const finalCategory   = category && category !== 'mascota' && category !== 'mascotas'
      ? category
      : detected.categoria;
    const finalNinos      = detected.ninos;
    // Usar el total de sujetos detectados (no número de fotos)
    const finalNumSujetos = detected.totalSubjects || numImages;

    console.log(`🔍 DETECT | ${JSON.stringify(subjects)} → cat:${finalCategory} | sujetos:${finalNumSujetos} | ninos:[${finalNinos}] | ${Date.now() - tDetect}ms`);

    // ── Build prompt ────────────────────────────────────────────────────
    const promptText = buildPrompt({
      estilo:      style || 'intelligent',
      numAnimales: finalNumSujetos,
      especie:     '',
      genero:      hasGender ? gender : null,
      categoria:   finalCategory,
      ninos:       finalNinos,
      subjects:    subjects,
      imgHash,
    });

    console.log(`\n📝 PROMPT | hash:${imgHash}\n${'─'.repeat(40)}\n${promptText}\n${'─'.repeat(40)}\n`);

    // ── Generar imagen ──────────────────────────────────────────────────
    const parts = [
      ...images.map(img => ({
        inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }
      })),
      { text: promptText }
    ];

    const tGemini = Date.now();
    const result  = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig: {
        responseModalities: ["IMAGE", "TEXT"],
        imageConfig: { aspectRatio: "4:5", imageSize: "1K" }
      }
    });

    const geminiMs = Date.now() - tGemini;
    console.log(`⏱️ GEMINI | hash:${imgHash} | ${geminiMs}ms`);

    const response = await result.response;
    if (!response.candidates?.[0]?.content) throw new Error("Gemini devolvió respuesta vacía.");
    const imagePart = response.candidates[0].content.parts.find(p => p.inlineData?.data);
    if (!imagePart) throw new Error("Gemini no devolvió imagen.");

    const imageBuffer = Buffer.from(imagePart.inlineData.data, 'base64');
    const prefix      = `V1611_${finalCategory.toUpperCase()}_${(style || 'intelligent').toUpperCase().replace(/\s+/g, '_')}${hasGender ? `_${gender.toUpperCase()}` : ''}`;
    const finalUrl    = await uploadBufferToSupabase(imageBuffer, prefix);

    const totalMs = Date.now() - startTotal;
    console.log(`✅ V16.11 OK | job:${jobId} | hash:${imgHash} | gemini:${geminiMs}ms | total:${totalMs}ms`);
    console.log(`🖼️  RESULT  | ${finalUrl}`);
    originalUrls.forEach((url, i) => console.log(`📸 INPUT ${i+1}  | ${url}`));
    console.log(`${'='.repeat(60)}\n`);

    jobs.set(jobId, {
      ...jobs.get(jobId),
      status:       'done',
      imageUrl:     finalUrl,
      originalUrls: originalUrls,
    });

  } catch (error) {
    const totalMs = Date.now() - startTotal;
    console.error(`❌ V16.11 ERROR | job:${jobId} | ${totalMs}ms | ${error.message}`);
    jobs.set(jobId, { ...jobs.get(jobId), status: 'error', error: error.message });
  }
}

// ── POST /generate ─────────────────────────────────────────────────────────────
app.post('/generate', (req, res) => {
  const { images, style, category, gender } = req.body;

  if (!images || images.length === 0) {
    return res.status(400).json({ success: false, error: 'No images provided.' });
  }

  const jobId = generateJobId();
  jobs.set(jobId, { status: 'pending', createdAt: Date.now() });

  processJob(jobId, { images, style, category, gender });

  console.log(`📋 JOB CREATED | ${jobId}`);
  res.json({ success: true, jobId });
});

// ── GET /status/:jobId ─────────────────────────────────────────────────────────
app.get('/status/:jobId', (req, res) => {
  const { jobId } = req.params;
  const job = jobs.get(jobId);

  if (!job) {
    return res.status(404).json({ success: false, error: 'Job not found.' });
  }

  if (job.status === 'done') {
    return res.json({
      success:      true,
      status:       'done',
      imageUrl:     job.imageUrl,
      originalUrls: job.originalUrls,
    });
  }

  if (job.status === 'error') {
    return res.json({ success: false, status: 'error', error: job.error });
  }

  res.json({ success: true, status: job.status });
});

// ── GET /health ────────────────────────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({
    status:     'ok',
    version:    'V16.11',
    model:      MODEL_ID,
    uptime:     process.uptime(),
    activeJobs: [...jobs.values()].filter(j => j.status === 'processing').length,
    totalJobs:  jobs.size,
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('⚠️ SIGTERM recibido — limpiando jobs activos...');
  for (const [id, job] of jobs.entries()) {
    if (job.status === 'pending' || job.status === 'processing') {
      jobs.set(id, { ...job, status: 'error', error: 'Server restarted. Please try again.' });
    }
  }
  setTimeout(() => process.exit(0), 2000);
});

app.listen(PORT, () => {
  console.log(`🚀 V16.11 | Puerto:${PORT} | Modelo:${MODEL_ID} | Queue: in-memory`);
});
