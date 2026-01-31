// ARCHIVO: server.js
// V76 - Soporte Total (Mascotas, Familia, Niños, Parejas, RETRATOS)

const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// --- IMPORTAMOS LOS MÓDULOS ---
const getMascotasPrompt = require('./mascotas');
const getFamiliaPrompt = require('./familia');
const getNinosPrompt = require('./ninos');
const getParejasPrompt = require('./parejas');
const getRetratosPrompt = require('./retratos'); // <--- NUEVO IMPORT

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
        
        // Default a mascota si no se especifica
        const currentCategory = category || 'mascota'; 

        console.log(`👤 V76 (PORTRAITS ADDED). Cat: ${currentCategory} | Estilo: ${style}`);

        const originalUrls = await Promise.all(images.map(async (img, i) => {
            const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            return await uploadBufferToSupabase(buffer, `ref_${i}`);
        }));

        const model = genAI.getGenerativeModel({ model: MODEL_ID });

        let masterPrompt = "";
        const baseInstruction = `You are a Master Painter creating a museum-quality oil painting. Analyze the ${numSubjects} input image(s). Create a cohesive composition applying the rules below. Apply a rich oil painting texture.`;

        // === EL CEREBRO SELECTOR ===
        if (currentCategory === 'retratos') {
            // Lógica RETRATOS (Auto-retratos)
            const retratosRules = getRetratosPrompt(style, numSubjects, isGroup);
            masterPrompt = `${baseInstruction}\n${retratosRules}`;
        }
        else if (currentCategory === 'parejas') {
            const parejasRules = getParejasPrompt(style, numSubjects, isGroup);
            masterPrompt = `${baseInstruction}\n${parejasRules}`;
        }
        else if (currentCategory === 'ninos') {
            const ninosRules = getNinosPrompt(style, numSubjects, isGroup);
            masterPrompt = `${baseInstruction}\n${ninosRules}`;
        } 
        else if (currentCategory === 'familia') {
            const familyRules = getFamiliaPrompt(style, numSubjects, isGroup);
            masterPrompt = `${baseInstruction}\n${familyRules}`;
        } 
        else {
            // Lógica MASCOTAS (Default)
            const identityInstruction = isGroup
                ? `Capture the unique characteristics and likeness of **EVERY SINGLE ONE of the ${numSubjects} SUBJECTS**.`
                : "Capture the unique characteristics and overall likeness of the subject.";
            const petRules = getMascotasPrompt(style, numSubjects, isGroup, identityInstruction);
            masterPrompt = `${baseInstruction}\n${petRules}`;
        }
        
        const imageParts = images.map(img => ({ inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }}));
        
        const result = await model.generateContent([ ...imageParts, masterPrompt ]);
        const response = await result.response;
        
        if (!response.candidates || !response.candidates[0].content) throw new Error("Fallo en generación.");

        const base64Gemini = response.candidates[0].content.parts[0].inlineData.data;
        const imageBuffer = Buffer.from(base64Gemini, 'base64');
        const finalUrl = await uploadBufferToSupabase(imageBuffer, `MASTER_V76_${currentCategory.toUpperCase()}`);
        
        console.log(`✅ Resultado V76 OK (${currentCategory})`);
        res.json({ success: true, imageUrl: finalUrl, originalUrls: originalUrls });

    } catch (error) {
        console.error('⚠️ ERROR:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V76 (Retratos + Parejas + Niños + Familia + Mascotas) listo en ${PORT}`);
});
