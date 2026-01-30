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
        console.log(`🎨 V53 (LIMPIEZA Y LUZ). Estilo: ${style} | Modelo: ${MODEL_ID}`);

        const originalUrls = await Promise.all(images.map(async (img, i) => {
            const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            return await uploadBufferToSupabase(buffer, `ref_${i}`);
        }));

        const model = genAI.getGenerativeModel({ model: MODEL_ID });

        let promptStyle = "";

        // --- ESTILO 1: RENACIMIENTO (VERSIÓN LIMPIA Y LUMINOSA) ---
        if (style === 'renacimiento') {
            promptStyle = `
            **STYLE:** 17th Century Dutch Baroque Oil Painting (Van Dyck style). Rich colors but clearer illumination.

            **COMPOSITION GOAL:** A clean, noble, and well-illuminated pet portrait on the floor.

            **1. THE SUBJECT (IDENTITY LOCK):**
            - Keep the EXACT facial features and expression from the input photo.

            **2. THE POSE & SETTING (FLOOR & CLEAN WALL):**
            - **POSE:** The animal is sitting or lying regally on a large, plush antique velvet cushion (e.g., deep crimson or gold).
            - **PLACEMENT:** The cushion rests directly on a **polished antique stone floor or dark wooden planks**. NO TABLES.
            - **BACKGROUND:** A **clean, uncluttered, textured plaster wall** in neutral, warm tones (e.g., aged beige, soft grey). NO busy elements like shelves or heavy furniture in the background. Keep it simple to focus on the subject.

            **3. THE "ROPITA" (NOBLE DRAPERY):**
            - A heavy, richly embroidered brocade or velvet mantle/capelet is draped artfully *over* the animal's back.
            - A prominent jeweled collar.
            - **NO human jackets or pants.**

            **4. LIGHTING (BRIGHTER & SOFTER):**
            - **Soft, diffused daylight** coming from a large window on the left. The scene should be **well-illuminated and clear**, avoiding excessively dark shadows, while still maintaining a painterly texture.
            `;
        } 
        // --- OTROS ESTILOS (Pendientes de pulir) ---
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
        const finalUrl = await uploadBufferToSupabase(imageBuffer, 'MASTER_V53_CLEAN');
        
        console.log("✅ Resultado V53:", finalUrl);
        res.json({ success: true, imageUrl: finalUrl, originalUrls: originalUrls });

    } catch (error) {
        console.error('⚠️ ERROR:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V53 (Limpieza y Luz) listo en ${PORT}`);
});
