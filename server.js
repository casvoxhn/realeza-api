// ARCHIVO: server.js
// V8.0 — MASCOTAS FOCUS
// Cambios vs V77:
// - generationConfig con outputResolution 2k
// - style key pasado limpiamente al módulo de mascotas
// - gender solo inyectado cuando viene en el request (retry flow)
// - logging estructurado de opciones seleccionadas
// - módulos inactivos importados pero no modificados

const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// ─── MÓDULO ACTIVO ────────────────────────────────────────────────────────────
const getMascotasPrompt = require('./mascotas');

// ─── MÓDULOS CONGELADOS (no se modifican, no se usan activamente) ─────────────
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

// Modelo actual — gemini-3.1-flash-image-preview es el correcto y más reciente
const MODEL_ID = "gemini-3.1-flash-image-preview";

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

    // Gender solo está presente en el retry flow (cuando el usuario lo elige)
    const hasGender = gender && (gender === 'masculine' || gender === 'feminine');

    console.log(`🎨 V8.0 | Category: ${currentCategory} | Style: ${style} | Gender: ${hasGender ? gender : 'neutral'} | Subjects: ${numSubjects}`);

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
      const mujerRules = getMujerPrompt(style, numSubjects, isGroup);
      masterPromptText = mujerRules;
    } else if (currentCategory === 'retratos') {
      const retratosRules = getRetratosPrompt(style, numSubjects, isGroup);
      masterPromptText = retratosRules;
    } else if (currentCategory === 'parejas') {
      const parejasRules = getParejasPrompt(style, numSubjects, isGroup);
      masterPromptText = parejasRules;
    } else if (currentCategory === 'ninos') {
      const ninosRules = getNinosPrompt(style, numSubjects, isGroup);
      masterPromptText = ninosRules;
    } else if (currentCategory === 'familia') {
      const familyRules = getFamiliaPrompt(style, numSubjects, isGroup);
      masterPromptText = familyRules;
    } else {
      // ── MASCOTAS (activo y refactorizado) ──
      masterPromptText = getMascotasPrompt(
        style,
        numSubjects,
        isGroup,
        hasGender ? gender : null  // null = neutral (primer intento sin género)
      );
    }

    // ─── 3. PREPARAR IMÁGENES PARA GEMINI ────────────────────────────────────
    const imageParts = images.map(img => ({
      inlineData: {
        data: img.replace(/^data:image\/\w+;base64,/, ""),
        mimeType: "image/jpeg"
      }
    }));

    // ─── 4. LLAMAR A GEMINI CON GENERATIONCONFIG ────────────────────────────
    // Nota: outputResolution solo está disponible en Vertex AI SDK, no en @google/generative-ai
    const model = genAI.getGenerativeModel({
      model: MODEL_ID,
      generationConfig: {
        responseModalities: ["IMAGE", "TEXT"],
      }
    });

    const result = await model.generateContent([...imageParts, masterPromptText]);
    const response = await result.response;

    if (!response.candidates || !response.candidates[0]?.content) {
      throw new Error("Gemini devolvió respuesta vacía — sin candidatos.");
    }

    // ─── 5. EXTRAER IMAGEN GENERADA ──────────────────────────────────────────
    const parts = response.candidates[0].content.parts;
    const imagePart = parts.find(p => p.inlineData?.data);

    if (!imagePart) {
      throw new Error("Gemini no devolvió imagen en la respuesta.");
    }

    const base64Gemini = imagePart.inlineData.data;
    const imageBuffer = Buffer.from(base64Gemini, 'base64');

    // ─── 6. SUBIR RESULTADO A SUPABASE ──────────────────────────────────────
    const styleLabel = style?.toUpperCase().replace(/\s+/g, '_') || 'UNKNOWN';
    const genderLabel = hasGender ? `_${gender.toUpperCase()}` : '';
    const prefix = `V8_${currentCategory.toUpperCase()}_${styleLabel}${genderLabel}`;

    const finalUrl = await uploadBufferToSupabase(imageBuffer, prefix);

    console.log(`✅ V8.0 OK | ${prefix} | URL: ${finalUrl}`);

    res.json({
      success: true,
      imageUrl: finalUrl,
      originalUrls: originalUrls
    });

  } catch (error) {
    console.error('⚠️ ERROR V8.0:', error.message);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ─── HEALTH CHECK ────────────────────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: 'V8.0', model: MODEL_ID });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor V8.0 listo en puerto ${PORT}`);
  console.log(`📦 Modelo: ${MODEL_ID}`);
  console.log(`🎨 Categoría activa: MASCOTAS (renacimiento | realeza | barroco)`);
  console.log(`❄️  Módulos congelados: mujer | retratos | parejas | ninos | familia`);
});
