// server.js — V16.2
// Fix: timeout explícito de 120s para Gemini (default SDK = 10s → fetch failed)

const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
require('dotenv').config();

const buildPrompt       = require('./styles/v2/buildPrompt');
const getFamiliaPrompt  = require('./familia');
const getNinosPrompt    = require('./ninos');
const getParejasPrompt  = require('./parejas');
const getRetratosPrompt = require('./retratos');
const getMujerPrompt    = require('./mujer');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '100mb' }));

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// ── FIX: timeout de 120 segundos — Gemini necesita 60-120s para generar ──────
const genAI  = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const MODEL_ID = "gemini-3.1-flash-image-preview";

const REF_FILES = {
  gato:  ['ref_cat_1.jpg',  'ref_cat_2.jpg',    'ref_cat_3.jpg',  'ref_cat_4.jpg'],
  perro: ['ref_golden.jpg', 'ref_doberman.jpg', 'ref_poodle.jpg', 'ref_dachshunds.jpg'],
};

function loadReferenceImages(especie) {
  const refs   = [];
  const e      = (especie || '').toLowerCase();
  const isGato = e.includes('cat') || e.includes('gato') || e.includes('feline');
  const subdir = isGato ? 'gatos' : 'perros';
  const key    = isGato ? 'gato' : 'perro';
  const files  = REF_FILES[key];
  const refDir = path.join(__dirname, 'references', subdir);
  if (!fs.existsSync(refDir)) { console.warn(`⚠️ REFS | No encontrado: references/${subdir}`); return refs; }
  for (const file of files) {
    const fp = path.join(refDir, file);
    if (fs.existsSync(fp)) refs.push({ inlineData: { data: fs.readFileSync(fp).toString('base64'), mimeType: 'image/jpeg' } });
  }
  console.log(`📸 REFS | especie:${especie} | cargadas:${refs.length}/${files.length}`);
  return refs;
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

app.post('/generate', async (req, res) => {
  const startTotal = Date.now();
  try {
    const { images, style, category, gender } = req.body;
    const numSubjects     = images.length;
    const isGroup         = numSubjects > 1;
    const currentCategory = category || 'mascota';
    const hasGender       = gender && (gender === 'masculine' || gender === 'feminine');
    const imgHash         = hashImagen(images[0]);

    console.log(`\n${'='.repeat(60)}`);
    console.log(`🚀 V16.2 START | hash:${imgHash} | cat:${currentCategory} | style:${style} | gender:${hasGender ? gender : 'neutral'} | sujetos:${numSubjects}`);

    const originalUrls = await Promise.all(
      images.map(async (img, i) => {
        const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
        return await uploadBufferToSupabase(buffer, `ref_${i}`);
      })
    );

    const isMascotas = !currentCategory || currentCategory === 'mascota' || currentCategory === 'mascotas';
    let promptText = "";
    let styleRefs  = [];

    if (isMascotas) {
      promptText = buildPrompt({
        estilo:      style || 'intelligent',
        numAnimales: numSubjects,
        especie:     '',
        genero:      hasGender ? gender : null,
        imgHash,
      });

      console.log(`\n📝 PROMPT COMPLETO | hash:${imgHash}`);
      console.log(`${'─'.repeat(40)}`);
      console.log(promptText);
      console.log(`${'─'.repeat(40)}\n`);

      styleRefs = loadReferenceImages('perro');

    } else {
      if (currentCategory === 'mujer')         promptText = getMujerPrompt(style, numSubjects, isGroup);
      else if (currentCategory === 'retratos') promptText = getRetratosPrompt(style, numSubjects, isGroup);
      else if (currentCategory === 'parejas')  promptText = getParejasPrompt(style, numSubjects, isGroup);
      else if (currentCategory === 'ninos')    promptText = getNinosPrompt(style, numSubjects, isGroup);
      else if (currentCategory === 'familia')  promptText = getFamiliaPrompt(style, numSubjects, isGroup);
    }

    const parts = [];
    if (isMascotas && styleRefs.length > 0) {
      parts.push({ text: "STYLE REFERENCE IMAGES — study these for: how the royal mantle falls behind and to one side (never wrapping the body), the cushion volume and fringe, the dark atmospheric background, the craquelure on the canvas, and the overall oil painting quality. Do not copy the specific animals, colors, or accessories shown:" });
      parts.push(...styleRefs);
      parts.push({ text: "CLIENT PET PHOTO — paint this specific animal in the style shown above:" });
    }

    parts.push(...images.map(img => ({
      inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }
    })));
    parts.push({ text: promptText });

    // ── FIX CLAVE: timeout de 120s explícito ─────────────────────────────────
    const model   = genAI.getGenerativeModel(
      { model: MODEL_ID },
      { timeout: 120000 }   // ← 120 segundos — Gemini necesita 60-120s
    );
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
    const prefix      = `V162_${currentCategory.toUpperCase()}_${(style || 'intelligent').toUpperCase().replace(/\s+/g, '_')}${hasGender ? `_${gender.toUpperCase()}` : ''}`;
    const finalUrl    = await uploadBufferToSupabase(imageBuffer, prefix);

    const totalMs = Date.now() - startTotal;
    console.log(`✅ V16.2 OK | hash:${imgHash} | ${prefix} | gemini:${geminiMs}ms | total:${totalMs}ms`);
    console.log(`${'='.repeat(60)}\n`);

    res.json({ success: true, imageUrl: finalUrl, originalUrls });

  } catch (error) {
    const totalMs = Date.now() - startTotal;
    console.error(`❌ V16.2 ERROR | ${totalMs}ms | ${error.message}`);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: 'V16.2', model: MODEL_ID, uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`🚀 V16.2 | Puerto:${PORT} | Modelo:${MODEL_ID}`);
});
