// ARCHIVO: server.js
// V73 - Arquitectura Modular con Código de Usuario Validado

const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// --- IMPORTAMOS LOS MÓDULOS ---
const getMascotasPrompt = require('./mascotas');
const getFamiliaPrompt = require('./familia'); // Asegúrate de tener el archivo familia.js también

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '100mb' }));

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const MODEL_ID = "gemini-3-pro-image-preview";

async function uploadBufferToSupabase(buffer, prefix) {
    const fileName = `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}.jpg`;
    const { error } = await supabase.storage.from('generated-art').upload(fileName, buffer, { contentType: 'image/jpeg' });
    if (error) throw error;
    const { data } = supabase.storage.from('generated-art').getPublicUrl(fileName);
    return data.publicUrl;
}

app.post('/generate', async (req, res) => {
    try {
        const { images, style, category } = req.body;
        const numSubjects = images.length;
        const isGroup = numSubjects > 1;
        const currentCategory = category || 'mascota'; 

        console.log(`🛡️ V73 (USER VALIDATED PROMPTS). Cat: ${currentCategory} | Estilo: ${style}`);

        const originalUrls = await Promise.all(images.map(async (img, i) => {
            const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            return await uploadBufferToSupabase(buffer, `ref_${i}`);
        }));

        const model = genAI.getGenerativeModel({ model: MODEL_ID });

        let masterPrompt = "";

        // === EL CEREBRO SELECTOR ===
        if (currentCategory === 'familia') {
            // Carga la lógica de FAMILIA (que definimos en el archivo familia.js)
            // Nota: Aquí asumimos que familia.js devuelve solo las reglas, así que añadimos el encabezado.
            // Si actualizas familia.js para devolver el texto completo como mascotas.js, puedes quitar el encabezado aquí.
            const baseInstruction = `You are a Master Painter creating a museum-quality oil painting. Analyze the ${numSubjects} input image(s). Create a cohesive composition applying the rules below. Apply a rich oil painting texture.`;
            const familyRules = getFamiliaPrompt(style, numSubjects, isGroup);
            masterPrompt = `${baseInstruction}\n${familyRules}`;
        } 
        else {
            // Carga la lógica de MASCOTAS (Tu código exacto desde mascotas.js)
            // Como tu código ya incluye "You are a Master Painter...", lo usamos directo.
            masterPrompt = getMascotasPrompt(style, numSubjects, isGroup);
        }
        
        const imageParts = images.map(img => ({ inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }}));
        
        const result = await model.generateContent([ ...imageParts, masterPrompt ]);
        const response = await result.response;
        
        if (!response.candidates || !response.candidates[0].content) throw new Error("Fallo en generación.");

        const base64Gemini = response.candidates[0].content.parts[0].inlineData.data;
        const imageBuffer = Buffer.from(base64Gemini, 'base64');
        const finalUrl = await uploadBufferToSupabase(imageBuffer, `MASTER_V73_${currentCategory.toUpperCase()}`);
        
        console.log(`✅ Resultado V73 OK (${currentCategory})`);
        res.json({ success: true, imageUrl: finalUrl, originalUrls: originalUrls });

    } catch (error) {
        console.error('⚠️ ERROR:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V73 (Mascotas Blindado + Familia Modular) listo en ${PORT}`);
});
