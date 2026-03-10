// server.js — V12.0
// Cambios vs V8:
// - Prompt narrativo puro (mascotas V12)
// - imageConfig: 2K + 4:5 aspect ratio
// - Imágenes de referencia de estilo pasadas al modelo
// - Módulos congelados preservados

const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// ─── MÓDULO ACTIVO ────────────────────────────────────────────────────────────
const getMascotasPrompt = require('./mascotas');

// ─── MÓDULOS CONGELADOS ───────────────────────────────────────────────────────
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

// ─── CARGAR IMÁGENES DE REFERENCIA DE ESTILO ─────────────────────────────────
function loadReferenceImages() {
  const refs = [];
  const refDir = path.join(__dirname, 'references');
  
  if (!fs.existsSync(refDir)) return refs;
  
  const files = ['ref_dachshunds.jpg', 'ref_poodle.jpg'];
  for (const file of files) {
    const filePath = path.join(refDir, file);
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath).toString('base64');
      refs.push({
        inlineData: {
          data,
          mimeType: 'image/jpeg'
        }
      });
    }
  }
  
  console.log(`📸 Referencias de estilo cargadas: ${refs.length}`);
  return refs;
}

const STYLE_REFERENCES = loadReferenceImages();

// ─── SUPABASE UPLOAD ──────────────────────────────────────────────────────────
async function uploadBufferToSupabase(buffer, prefix) {
  const fileName = `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}.jpg`;
  const { error } = await supabase.storage
    .from('generated-art')
    .upload(fileName, buffer, { contentType: 'image/jpeg' });
  if (error) throw error;
  const { data } = supabase.storage.from('generated-art').getPublicUrl(fileName);
  return data.publicUrl;
}

// ─── GENERATE ENDPOINT ───────────────────────────────────────────────────────
app.post('/generate', async (req, res) => {
  try {
    const { images, style, category, gender } = req.body;

    const numSubjects = images.length;
    const isGroup = numSubjects > 1;
    const currentCategory = category || 'mascota';
    const hasGender = gender && (gender === 'masculine' || gender === 'feminine');

    console.log(`🎨 V12.0 | Category: ${currentCategory} | Style: ${style} | Gender: ${hasGender ? gender : 'neutral'} | Subjects: ${numSubjects}`);

    // ─── 1. SUBIR IMÁGENES ORIGINALES ───────────────────────────────────────
    const originalUrls = await Promise.all(
      images.map(async (img, i) => {
        const buffer = Buffer.from(
          img.replace(/^data:image\/\w+;base64,/, ""),
          'base64'
        );
        return await uploadBufferToSupabase(buffer, `ref_${i}`);
      })
    );

    // ─── 2. CONSTRUIR PROMPT ─────────────────────────────────────────────────
    let masterPromptText = "";

    if (currentCategory === 'mujer') {
      masterPromptText = getMujerPrompt(style, numSubjects, isGroup);
    } else if (currentCategory === 'retratos') {
      masterPromptText = getRetratosPrompt(style, numSubjects, isGroup);
    } else if (currentCategory === 'parejas') {
      masterPromptText = getParejasPrompt(style, numSubjects, isGroup);
    } else if (currentCategory === 'ninos') {
      masterPromptText = getNinosPrompt(style, numSubjects, isGroup);
    } else if (currentCategory === 'familia') {
      masterPromptText = getFamiliaPrompt(style, numSubjects, isGroup);
    } else {
      masterPromptText = getMascotasPrompt(
        style,
        numSubjects,
        isGroup,
        hasGender ? gender : null
      );
    }

    // ─── 3. PREPARAR PARTES: REFERENCIAS + FOTO DEL CLIENTE ─────────────────
    // Orden: referencias de estilo primero, luego la foto del cliente, luego el prompt
    const styleRefParts = currentCategory === 'mascota' || !currentCategory 
      ? STYLE_REFERENCES 
      : [];

    const clientImageParts = images.map(img => ({
      inlineData: {
        data: img.replace(/^data:image\/\w+;base64,/, ""),
        mimeType: "image/jpeg"
      }
    }));

    // Texto introductorio para las referencias
    const refIntroText = styleRefParts.length > 0
      ? { text: "The following images are style references showing the target aesthetic quality, composition, and painting style. Study them carefully — this is the visual quality to achieve:" }
      : null;

    const clientIntroText = { text: "This is the photo of the client's pet. Transform it into a portrait matching the style reference quality above:" };

    const allParts = [
      ...(refIntroText ? [refIntroText] : []),
      ...styleRefParts,
      clientIntroText,
      ...clientImageParts,
      { text: masterPromptText }
    ];

    // ─── 4. LLAMAR A GEMINI ──────────────────────────────────────────────────
    const model = genAI.getGenerativeModel({
      model: MODEL_ID,
      generationConfig: {
        responseModalities: ["IMAGE", "TEXT"],
      }
    });

    const result = await model.generateContent({
      contents: [{ role: "user", parts: allParts }],
      generationConfig: {
        responseModalities: ["IMAGE", "TEXT"],
        imageConfig: {
          aspectRatio: "4:5",
          imageSize: "2K"
        }
      }
    });

    const response = await result.response;

    if (!response.candidates || !response.candidates[0]?.content) {
      throw new Error("Gemini devolvió respuesta vacía — sin candidatos.");
    }

    // ─── 5. EXTRAER IMAGEN ───────────────────────────────────────────────────
    const parts = response.candidates[0].content.parts;
    const imagePart = parts.find(p => p.inlineData?.data);

    if (!imagePart) {
      throw new Error("Gemini no devolvió imagen en la respuesta.");
    }

    const base64Gemini = imagePart.inlineData.data;
    const imageBuffer = Buffer.from(base64Gemini, 'base64');

    // ─── 6. SUBIR A SUPABASE ─────────────────────────────────────────────────
    const styleLabel = style?.toUpperCase().replace(/\s+/g, '_') || 'UNKNOWN';
    const genderLabel = hasGender ? `_${gender.toUpperCase()}` : '';
    const prefix = `V12_${currentCategory.toUpperCase()}_${styleLabel}${genderLabel}`;

    const finalUrl = await uploadBufferToSupabase(imageBuffer, prefix);

    console.log(`✅ V12.0 OK | ${prefix} | URL: ${finalUrl}`);

    res.json({
      success: true,
      imageUrl: finalUrl,
      originalUrls: originalUrls
    });

  } catch (error) {
    console.error('⚠️ ERROR V12.0:', error.message);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ─── HEALTH CHECK ────────────────────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: 'V12.0', model: MODEL_ID });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor V12.0 listo en puerto ${PORT}`);
  console.log(`📦 Modelo: ${MODEL_ID}`);
  console.log(`🎨 Categoría activa: MASCOTAS | 2K | 4:5`);
  console.log(`📸 Referencias de estilo: ${STYLE_REFERENCES.length} imágenes`);
});
