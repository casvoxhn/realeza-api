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
        console.log(`🎨 V55 (VARIEDAD DE COLORES). Estilo: ${style} | Modelo: ${MODEL_ID}`);

        const originalUrls = await Promise.all(images.map(async (img, i) => {
            const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            return await uploadBufferToSupabase(buffer, `ref_${i}`);
        }));

        const model = genAI.getGenerativeModel({ model: MODEL_ID });

        let promptStyle = "";

        // --- ESTILO 1: RENACIMIENTO (VERSIÓN FINAL CON VARIEDAD) ---
        if (style === 'renacimiento') {
            promptStyle = `
            **STYLE:** 17th Century Dutch/Flemish Baroque Oil Painting (Titian/Van Dyck style). Rich, deep colors, master texture.

            **COMPOSITION GOAL:** A noble pet portrait on the floor with a clean background and dramatic lighting.

            **1. THE SUBJECT (IDENTITY LOCK):**
            - Keep the EXACT facial features and expression from the input photo.

            **2. THE POSE & SETTING (CLEAN FLOOR + VARIETY):**
            - **POSE:** The animal is sitting or lying regally on a large, plush antique velvet cushion.
            - **VARIETY RULE (CUSHION COLOR):** The AI must choose a different rich, deep historical color for the cushion in every generation to ensure variety (e.g., forest green, royal blue, old gold, burnt orange, or deep crimson). Do not always use red.
            - **PLACEMENT:** The cushion rests directly on a polished antique stone floor or dark wooden planks. NO TABLES.
            - **BACKGROUND:** A clean, uncluttered, textured plaster wall in neutral, deep tones. Keep it simple.

            **3. THE "ROPITA" (NOBLE DRAPERY):**
            - A heavy, richly embroidered brocade or velvet mantle/capelet is draped artfully *over* the animal's back. **COLOR: Complementary to the cushion but different.**
            - A prominent jeweled collar.
            - **NO human jackets or pants.**

            **4. LIGHTING (DRAMATIC CHIAROSCURO):**
            - Dramatic, strong Chiaroscuro light coming from the upper left.
            - The subject is spotlighted; the background fades into shadow.
            `;
        } 
        // --- OTROS ESTILOS (Pendientes) ---
        else if (style === 'rey') {
            promptStyle = `**STYLE:** Northern Renaissance Royal Portrait. **IDENTITY:** Keep exact face. **COMPOSITION:** Dignified sitting pose on a throne-like chair, wearing royal velvet robes. Soft, bright light.`;
        } 
        else if (style === 'barroco') {
             promptStyle = `**STYLE:** High Baroque Opulence. **IDENTITY:** Keep exact face. **COMPOSITION:** Dramatic pose wearing a massive GOLD CROWN and RED VELVET CAPE. **VIBE:** "The King".`;
        }

        const masterPrompt = `
        You are a Master Painter creating a museum-quality oil portrait.
        **INSTRUCTIONS:**
        1. Take the subject's head/face from the image and paint it exactly as it is (Identity Lock).
        2. Create the specific composition described below.
        3. Apply a rich oil painting texture.
        
        ${promptStyle}
        
        **FORMAT:** Vertical Portrait.
        `;
        
        const imageParts = images.map(img => ({ inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }}));
        
        const result = await model.generateContent([ ...imageParts, masterPrompt ]);
        const response = await result.response;
        
        if (!response.candidates || !response.candidates[0].content) throw new Error("Fallo en generación.");

        const base64Gemini = response.candidates[0].content.parts[0].inlineData.data;
        const imageBuffer = Buffer.from(base64Gemini, 'base64');
        const finalUrl = await uploadBufferToSupabase(imageBuffer, 'MASTER_V55_VARIETY');
        
        console.log("✅ Resultado V55:", finalUrl);
        res.json({ success: true, imageUrl: finalUrl, originalUrls: originalUrls });

    } catch (error) {
        console.error('⚠️ ERROR:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V55 (Variedad de Colores) listo en ${PORT}`);
});
