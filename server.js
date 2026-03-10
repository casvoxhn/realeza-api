// server.js — V14.0

const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const getMascotasPrompt = require('./mascotas');
const getFamiliaPrompt = require('./familia');
const getNinosPrompt = require('./ninos');
const getParejasPrompt = require('./parejas');
const getRetratosPrompt = require('./retratos');
const getMujerPrompt = require('./mujer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '100mb' }));

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const MODEL_ID = "gemini-3.1-flash-image-preview";

// ─── CARGAR REFERENCIAS DE ESTILO ────────────────────────────────────────────
function loadReferenceImages() {
  const refs = [];
  const refDir = path.join(__dirname, 'references');
  if (!fs.existsSync(refDir)) return refs;
  for (const file of ['ref_golden.jpg', 'ref_doberman.jpg', 'ref_poodle.jpg', 'ref_dachshunds.jpg']) {
    const fp = path.join(refDir, file);
    if (fs.existsSync(fp)) {
      refs.push({
        inlineData: {
          data: fs.readFileSync(fp).toString('base64'),
          mimeType: 'image/jpeg'
        }
      });
    }
  }
  console.log(`📸 Referencias cargadas: ${refs.length}`);
  return refs;
}
const STYLE_REFS = loadReferenceImages();

async function uploadBufferToSupabase(buffer, prefix) {
  const fileName = `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}.jpg`;
  const { error } = await supabase.storage
    .from('generated-art')
    .upload(fileName, buffer, { contentType: 'image/jpeg' });
  if (error) throw error;
  const { data } = supabase.storage.from('generated-art').getPublicUrl(fileName);
  return data.publicUrl;
}

app.post('/generate', async (req, res) => {
  try {
    const { images, style, category, gender } = req.body;
    const numSubjects = images.length;
    const isGroup = numSubjects > 1;
    const currentCategory = category || 'mascota';
    const hasGender = gender && (gender === 'masculine' || gender === 'feminine');

    console.log(`🎨 V14.0 | ${currentCategory} | ${style} | ${hasGender ? gender : 'neutral'} | ${numSubjects} sujetos`);

    const originalUrls = await Promise.all(
      images.map(async (img, i) => {
        const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
        return await uploadBufferToSupabase(buffer, `ref_${i}`);
      })
    );

    // Construir prompt
    let promptText = "";
    if (currentCategory === 'mujer') promptText = getMujerPrompt(style, numSubjects, isGroup);
    else if (currentCategory === 'retratos') promptText = getRetratosPrompt(style, numSubjects, isGroup);
    else if (currentCategory === 'parejas') promptText = getParejasPrompt(style, numSubjects, isGroup);
    else if (currentCategory === 'ninos') promptText = getNinosPrompt(style, numSubjects, isGroup);
    else if (currentCategory === 'familia') promptText = getFamiliaPrompt(style, numSubjects, isGroup);
    else promptText = getMascotasPrompt(style, numSubjects, isGroup, hasGender ? gender : null);

    // Construir partes: [ref_intro, ref1, ref2, client_intro, client_img, prompt]
    const isMascotas = !currentCategory || currentCategory === 'mascota' || currentCategory === 'mascotas';
    
    const parts = [];

    if (isMascotas && STYLE_REFS.length > 0) {
      parts.push({ text: "STYLE REFERENCE IMAGES — study these for: how the royal robe falls open at the chest and drapes to the sides (never wrapping around the body), the cushion volume and shape, the dark atmospheric background, the craquelure pattern on the canvas surface, and the overall oil painting quality. Do not copy the specific animals, colors, or accessories shown:" });
      parts.push(...STYLE_REFS);
      parts.push({ text: "CLIENT PET PHOTO — paint this specific animal in the style shown above:" });
    }

    // Imágenes del cliente
    parts.push(...images.map(img => ({
      inlineData: {
        data: img.replace(/^data:image\/\w+;base64,/, ""),
        mimeType: "image/jpeg"
      }
    })));

    // Prompt
    parts.push({ text: promptText });

    // Llamar al modelo
    const model = genAI.getGenerativeModel({ model: MODEL_ID });

    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig: {
        responseModalities: ["IMAGE", "TEXT"],
        imageConfig: {
          aspectRatio: "4:5",
          imageSize: "1K"
        }
      }
    });

    const response = await result.response;

    if (!response.candidates?.[0]?.content) {
      throw new Error("Gemini devolvió respuesta vacía.");
    }

    const imagePart = response.candidates[0].content.parts.find(p => p.inlineData?.data);
    if (!imagePart) throw new Error("Gemini no devolvió imagen.");

    const imageBuffer = Buffer.from(imagePart.inlineData.data, 'base64');
    const prefix = `V14_${currentCategory.toUpperCase()}_${style?.toUpperCase().replace(/\s+/g, '_') || 'UNKNOWN'}${hasGender ? `_${gender.toUpperCase()}` : ''}`;
    const finalUrl = await uploadBufferToSupabase(imageBuffer, prefix);

    console.log(`✅ V14.0 OK | ${prefix} | ${finalUrl}`);
    res.json({ success: true, imageUrl: finalUrl, originalUrls });

  } catch (error) {
    console.error('⚠️ ERROR V14.0:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: 'V14.0', model: MODEL_ID, styleRefs: STYLE_REFS.length });
});

app.listen(PORT, () => {
  console.log(`🚀 V14.0 | Puerto ${PORT} | Modelo: ${MODEL_ID} | Refs: ${STYLE_REFS.length}`);
});
