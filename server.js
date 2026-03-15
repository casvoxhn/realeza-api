// server.js — V16.4
// Fix: timeout 180s + referencias eliminadas (prompt ya es suficientemente descriptivo)

const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { createClient } = require('@supabase/supabase-js');
const crypto = require('crypto');
require('dotenv').config();

const buildPrompt       = require('./styles/v2/buildPrompt');
const getFamiliaPrompt  = require('./familia');
const getNinosPrompt    = require('./ninos');
const getParejasPrompt  = require('./parejas');
const getRetratosPrompt = require('./retratos');
const getMujerPrompt    = require('./mujer');

const app    = express();
const PORT   = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '100mb' }));

const supabase   = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
const genAI      = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const MODEL_ID   = "gemini-3.1-flash-image-preview";

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
    console.log(`🚀 V16.4 START | hash:${imgHash} | cat:${currentCategory} | style:${style} | gender:${hasGender ? gender : 'neutral'} | sujetos:${numSubjects}`);

    const originalUrls = await Promise.all(
      images.map(async (img, i) => {
        const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
        return await uploadBufferToSupabase(buffer, `ref_${i}`);
      })
    );

    const isMascotas = !currentCategory || currentCategory === 'mascota' || currentCategory === 'mascotas';
    let promptText = "";

    if (isMascotas) {
      promptText = buildPrompt({
        estilo:      style || 'intelligent',
        numAnimales: numSubjects,
        especie:     '',
        genero:      hasGender ? gender : null,
        imgHash,
      });
      console.log(`\n📝 PROMPT | hash:${imgHash}\n${'─'.repeat(40)}\n${promptText}\n${'─'.repeat(40)}\n`);

    } else {
      if (currentCategory === 'mujer')         promptText = getMujerPrompt(style, numSubjects, isGroup);
      else if (currentCategory === 'retratos') promptText = getRetratosPrompt(style, numSubjects, isGroup);
      else if (currentCategory === 'parejas')  promptText = getParejasPrompt(style, numSubjects, isGroup);
      else if (currentCategory === 'ninos')    promptText = getNinosPrompt(style, numSubjects, isGroup);
      else if (currentCategory === 'familia')  promptText = getFamiliaPrompt(style, numSubjects, isGroup);
    }

    // ── PARTES: solo la foto del cliente + el prompt ──────────────────────────
    const parts = [
      ...images.map(img => ({
        inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }
      })),
      { text: promptText }
    ];

    // ── GEMINI con timeout de 120s ────────────────────────────────────────────
    const model   = genAI.getGenerativeModel(
      { model: MODEL_ID },
      { timeout: 180000 }
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
    const prefix      = `V163_${currentCategory.toUpperCase()}_${(style || 'intelligent').toUpperCase().replace(/\s+/g, '_')}${hasGender ? `_${gender.toUpperCase()}` : ''}`;
    const finalUrl    = await uploadBufferToSupabase(imageBuffer, prefix);

    const totalMs = Date.now() - startTotal;
    console.log(`✅ V16.4 OK | hash:${imgHash} | ${prefix} | gemini:${geminiMs}ms | total:${totalMs}ms`);
    console.log(`${'='.repeat(60)}\n`);

    res.json({ success: true, imageUrl: finalUrl, originalUrls });

  } catch (error) {
    const totalMs = Date.now() - startTotal;
    console.error(`❌ V16.4 ERROR | ${totalMs}ms | ${error.message}`);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: 'V16.4', model: MODEL_ID, uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`🚀 V16.4 | Puerto:${PORT} | Modelo:${MODEL_ID}`);
});
