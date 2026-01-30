const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '100mb' }));

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
// Usamos el Modelo Supremo (Nano Banana Pro / Gemini 3)
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
        const { images, style } = req.body;
        console.log(`🎨 V57 (TU EDICIÓN + ESTRUCTURA ESTABLE). Estilo: ${style}`);

        const originalUrls = await Promise.all(images.map(async (img, i) => {
            const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            return await uploadBufferToSupabase(buffer, `ref_${i}`);
        }));

        const model = genAI.getGenerativeModel({ model: MODEL_ID });

        let promptStyle = "";

        // --- ESTILO 1: RENACIMIENTO (CON TU MEJORA DE IDENTIDAD) ---
        if (style === 'renacimiento') {
            promptStyle = `
            **STYLE:** 17th Century Dutch/Flemish Baroque Oil Painting (Titian/Van Dyck style).

            **COMPOSITION GOAL:** A powerful, closer-cropped noble portrait with dramatic lighting.

            **1. THE SUBJECT (IDENTITY & ADAPTATION):**
            - **Capture the unique characteristics and overall likeness** of the subject from the input photo, including key features like fur color and patterns, eye shape and color, breed-specific traits, markings, and body proportions.
            - **Maintain a strong resemblance** to the original subject to make it recognizable as the same pet, but **allow for artistic variations** in facial expression, pose, and subtle details to fit the Renaissance style naturally.

            **2. THE POSE & SETTING (Medium Close-Up):**
            - **POSE:** The animal is sitting or lying regally.
            - **FRAMING:** Focus on the subject resting on the top part of a massive, luxurious antique velvet cushion.
            - **VARIETY RULE:** Choose a different rich historical color for the cushion in every generation (forest green, deep blue, old gold, crimson).
            - **BACKGROUND:** Clean, textured plaster wall in neutral, deep tones. No clutter.

            **3. THE "ROPITA" (NOBLE DRAPERY):**
            - A heavy, richly embroidered brocade or velvet mantle/capelet is draped artfully over the animal's back/shoulders.
            - A prominent jeweled collar.
            - **NO human jackets or pants.**

            **4. LIGHTING:**
            - Strong, dramatic Chiaroscuro light from the upper left. Spotlight the face/fur.
            `;
        } 
        // --- OTROS ESTILOS ---
        else if (style === 'rey') {
            promptStyle = `**STYLE:** Northern Renaissance Royal Portrait. **IDENTITY:** Maintain strong likeness but adapt expression to be noble. **COMPOSITION:** Dignified sitting pose on a throne-like chair. Soft, bright light.`;
        } 
        else if (style === 'barroco') {
             promptStyle = `**STYLE:** High Baroque Opulence. **IDENTITY:** Maintain strong likeness. **COMPOSITION:** Dramatic pose with GOLD CROWN and RED CAPE.`;
        }

        const masterPrompt = `
        You are a Master Painter creating a museum-quality oil portrait.
        **INSTRUCTIONS:**
        1. Analyze the input subject.
        2. Create the specific composition described below.
        3. Apply a rich oil painting texture.
        
        ${promptStyle}
        
        **CRITICAL TECHNICAL SPECS:**
        **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
        **FRAMING:** Medium Close-Up (Chest Up). Fill the frame with the subject.
        `;
        
        const imageParts = images.map(img => ({ inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }}));
        
        const result = await model.generateContent([ ...imageParts, masterPrompt ]);
        const response = await result.response;
        
        if (!response.candidates || !response.candidates[0].content) throw new Error("Fallo en generación.");

        const base64Gemini = response.candidates[0].content.parts[0].inlineData.data;
        const imageBuffer = Buffer.from(base64Gemini, 'base64');
        const finalUrl = await uploadBufferToSupabase(imageBuffer, 'MASTER_V57_CUSTOM');
        
        console.log("✅ Resultado V57:", finalUrl);
        res.json({ success: true, imageUrl: finalUrl, originalUrls: originalUrls });

    } catch (error) {
        console.error('⚠️ ERROR:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V57 (Tu Edición de Texto) listo en ${PORT}`);
});
