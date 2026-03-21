// server.js — V16.7
// Fix: timeout 180s + referencias eliminadas
// Fix V16.5: deduplicación, timeout Express, keep-alive
// Fix V16.6: in-memory job queue — soporta usuarios simultáneos sin Redis
// Fix V16.7: humanos ruteados a buildPrompt — archivos legacy eliminados

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

// ── HELPERS ───────────────────────────────────────────────────────────────────
function isMascotasCategory(cat) {
  return !cat || cat === 'mascota' || cat === 'mascotas';
}

function isHumanosCategory(cat) {
  return (
    cat === 'humanos'  ||
    cat === 'humano'   ||
    cat === 'mujer'    ||
    cat === 'hombre'   ||
    cat === 'retratos' ||
    cat === 'parejas'  ||
    cat === 'familia'  ||
    cat === 'ninos'    ||
    cat === 'niños'
  );
}

// ── WORKER ────────────────────────────────────────────────────────────────────
async function processJob(jobId, { images, style, category, gender, ninos }) {
  const startTotal = Date.now();
  const imgHash    = hashImagen(images[0]);

  jobs.set(jobId, { ...jobs.get(jobId), status: 'processing' });

  try {
    const numSubjects     = images.length;
    const isGroup         = numSubjects > 1;
    const currentCategory = category || 'mascota';
    const hasGender       = gender && (gender === 'masculine' || gender === 'feminine');

    console.log(`\n${'='.repeat(60)}`);
    console.log(`🚀 V16.7 START | job:${jobId} | hash:${imgHash} | cat:${currentCategory} | style:${style} | sujetos:${numSubjects}`);

    const originalUrls = await Promise.all(
      images.map(async (img, i) => {
        const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
        return await uploadBufferToSupabase(buffer, `ref_${i}`);
      })
    );

    let promptText = "";

    if (isMascotasCategory(currentCategory)) {
      // ── MASCOTAS — exactamente igual que V16.6 ──────────────────────────
      promptText = buildPrompt({
        estilo:      style || 'intelligent',
        numAnimales: numSubjects,
        especie:     '',
        genero:      hasGender ? gender : null,
        imgHash,
      });
    } else if (isHumanosCategory(currentCategory)) {
      // ── HUMANOS — sistema nuevo ──────────────────────────────────────────
      promptText = buildPrompt({
        estilo:      style || 'intelligent',
        numAnimales: numSubjects,
        especie:     '',
        genero:      hasGender ? gender : null,
        categoria:   currentCategory,
        ninos:       ninos || [],
        imgHash,
      });
    }

    console.log(`\n📝 PROMPT | hash:${imgHash}\n${'─'.repeat(40)}\n${promptText}\n${'─'.repeat(40)}\n`);

    const parts = [
      ...images.map(img => ({
        inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }
      })),
      { text: promptText }
    ];

    const model   = genAI.getGenerativeModel({ model: MODEL_ID }, { timeout: 180000 });
    const tGemini = Date.now();

    const result = await model.generateContent({
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
    const prefix      = `V167_${currentCategory.toUpperCase()}_${(style || 'intelligent').toUpperCase().replace(/\s+/g, '_')}${hasGender ? `_${gender.toUpperCase()}` : ''}`;
    const finalUrl    = await uploadBufferToSupabase(imageBuffer, prefix);

    const totalMs = Date.now() - startTotal;
    console.log(`✅ V16.7 OK | job:${jobId} | hash:${imgHash} | gemini:${geminiMs}ms | total:${totalMs}ms`);
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
    console.error(`❌ V16.7 ERROR | job:${jobId} | ${totalMs}ms | ${error.message}`);
    jobs.set(jobId, { ...jobs.get(jobId), status: 'error', error: error.message });
  }
}

// ── POST /generate ─────────────────────────────────────────────────────────────
app.post('/generate', (req, res) => {
  const { images, style, category, gender, ninos } = req.body;

  if (!images || images.length === 0) {
    return res.status(400).json({ success: false, error: 'No images provided.' });
  }

  const jobId = generateJobId();
  jobs.set(jobId, { status: 'pending', createdAt: Date.now() });

  processJob(jobId, { images, style, category, gender, ninos });

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
    status:    'ok',
    version:   'V16.7',
    model:     MODEL_ID,
    uptime:    process.uptime(),
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
  console.log(`🚀 V16.7 | Puerto:${PORT} | Modelo:${MODEL_ID} | Queue: in-memory`);
});
