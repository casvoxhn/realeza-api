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
// Modelo Supremo (Nano Banana Pro)
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
        console.log(`🎨 V50 (IDENTITY LOCK). Estilo: ${style} | Modelo: ${MODEL_ID}`);

        const originalUrls = await Promise.all(images.map(async (img, i) => {
            const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            return await uploadBufferToSupabase(buffer, `ref_${i}`);
        }));

        const model = genAI.getGenerativeModel({ model: MODEL_ID });

        let promptStyle = "";

        // --- ESTILO 1: RENACIMIENTO (ÓLEO NATURAL) ---
        if (style === 'renacimiento') {
            promptStyle = `
            **ARTISTIC STYLE:** Dutch Golden Age / Baroque Oil Painting (Rembrandt style). Deep, rich tones.

            **CRITICAL PRIORITY: FACIAL IDENTITY LOCK**
            - **The face, eyes, and EXACT expression from the input image MUST be preserved perfectly.**
            - If the pet has its mouth open, the painting MUST show the mouth open exactly the same way.
            - Do not alter facial structure or markings. Apply oil texture *over* the features, don't change them.

            **SETTING (NATURAL & NOBLE):**
            - **NO CLOTHING:** The animal is sitting or lying naturally (naked fur).
            - **PROPS:** Resting regally on a luxurious antique velvet cushion or heavy brocade rug.
            - **BACKGROUND:** Dark, moody, atmospheric museum background (abstract shadows, rich wood).
            - **LIGHTING:** Dramatic "Rembrandt lighting" focusing solely on the face and eyes to highlight the likeness.
            `;
        } 
        // --- ESTILO 2: REY (CLÁSICO) ---
        else if (style === 'rey') {
            promptStyle = `
            **STYLE:** Northern Renaissance Royal Portrait.
            **IDENTITY:** Preserve exact facial features and expression.
            **OUTFIT:** Animal is in a natural pose, perhaps with a rich royal mantle draped loosely over the body (not fitted clothing), surrounded by royal artifacts.
            `;
        } 
        // --- ESTILO 3: BARROCO (FANTASÍA) ---
        else if (style === 'barroco') {
             promptStyle = `
             **STYLE:** High Baroque Opulence.
             **IDENTITY:** Preserve exact facial features.
             **OUTFIT:** Massive GOLD CROWN on head and RED VELVET CAPE. The animal looks powerful.
             `;
        }

        const masterPrompt = `
        You are a Master Painter creating a commissioned portrait.
        
        **THE MOST IMPORTANT RULE: The likeness must be perfect.** The client needs to recognize their specific pet's face and expression instantly.

        **INSTRUCTIONS:**
        1. Take the subject's face/head from the image and paint it exactly as it is.
        2. Integrate that head seamlessly into the following scene:
        ${promptStyle}
        
        **FORMAT:** Vertical Portrait, Museum Quality Oil Painting.
        `;
        
        const imageParts = images.map(img => ({ inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }}));
        
        const result = await model.generateContent([ ...imageParts, masterPrompt ]);
        const response = await result.response;
        
        if (!response.candidates || !response.candidates[0].content) throw new Error("Fallo en generación.");

        const base64Gemini = response.candidates[0].content.parts[0].inlineData.data;
        const imageBuffer = Buffer.from(base64Gemini, 'base64');
        const finalUrl = await uploadBufferToSupabase(imageBuffer, 'MASTER_V50_IDENTITY');
        
        console.log("✅ Resultado V50:", finalUrl);
        res.json({ success: true, imageUrl: finalUrl, originalUrls: originalUrls });

    } catch (error) {
        console.error('⚠️ ERROR:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V50 (Identity Lock) listo en ${PORT}`);
});
