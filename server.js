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
        console.log(`🎨 V51 (EQUILIBRIO MAESTRO). Estilo: ${style} | Modelo: ${MODEL_ID}`);

        const originalUrls = await Promise.all(images.map(async (img, i) => {
            const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            return await uploadBufferToSupabase(buffer, `ref_${i}`);
        }));

        const model = genAI.getGenerativeModel({ model: MODEL_ID });

        let promptStyle = "";

        // --- ESTILO 1: RENACIMIENTO (ÓLEO MEJORADO) ---
        if (style === 'renacimiento') {
            promptStyle = `
            **ARTISTIC STYLE:** Dutch Golden Age Oil Painting (Rembrandt/Vermeer style). Rich tones, master brushwork.

            **1. THE FACE (IDENTITY LOCK - CRITICAL):**
            - **Keep the EXACT facial features, eyes, and unique expression from the input photo.** The owner must instantly recognize their pet.

            **2. THE POSE & BODY (ARTISTIC IMPROVEMENT):**
            - **REPOSE THE ANIMAL:** Do NOT just copy the photo pose if it's awkward. Place the animal in a **dignified, natural, and elegant sitting or lying pose** suitable for a high-end portrait.
            - The body should look relaxed and noble, not rigid.

            **3. THE "ROPITA" (NOBLE ACCESSORIES):**
            - **Add rich, period-appropriate accessories.** Examples: A heavy velvet mantle or capelet draped elegantly over its shoulders, a decorative historical collar, or a fine chain.
            - **NO HUMAN SUITS:** Do not put them in full human standing clothes like jackets or pants. Keep it natural but noble.

            **4. SETTING & LIGHTING:**
            - **SETTING:** Placed on luxurious antique furniture (carved wood, heavy brocade fabrics) in a moody, atmospheric room.
            - **LIGHTING:** Dramatic, soft directional light (Chiaroscuro) that sculpts the face, fur texture, and fabric folds.
            `;
        } 
        // --- OTROS ESTILOS (Misma lógica de equilibrio) ---
        else if (style === 'rey') {
            promptStyle = `**STYLE:** Northern Renaissance Royal Portrait. **IDENTITY:** Keep exact face. **POSE & ATTIRE:** Dignified sitting pose wearing a rich velvet royal mantle with fur trim and a jeweled collar. **SETTING:** Palace interior.`;
        } 
        else if (style === 'barroco') {
             promptStyle = `**STYLE:** High Baroque Opulence. **IDENTITY:** Keep exact face. **POSE & ATTIRE:** Dramatic, powerful pose wearing a massive GOLD CROWN and flowing RED VELVET CAPE. **VIBE:** "The King".`;
        }

        const masterPrompt = `
        You are a Master Painter creating a museum-quality oil portrait.
        
        **MISSION:** Create a beautiful composition. The subject's face must be perfectly recognizable, but the pose, lighting, and attire should be artistically elevated.

        **INSTRUCTIONS:**
        1. Take the subject's head/face from the image and paint it exactly as it is.
        2. Create a new, elegant body and pose for it.
        3. Integrate it into this scene:
        ${promptStyle}
        
        **FORMAT:** Vertical Portrait, Highly Detailed Oil Painting.
        `;
        
        const imageParts = images.map(img => ({ inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }}));
        
        const result = await model.generateContent([ ...imageParts, masterPrompt ]);
        const response = await result.response;
        
        if (!response.candidates || !response.candidates[0].content) throw new Error("Fallo en generación.");

        const base64Gemini = response.candidates[0].content.parts[0].inlineData.data;
        const imageBuffer = Buffer.from(base64Gemini, 'base64');
        const finalUrl = await uploadBufferToSupabase(imageBuffer, 'MASTER_V51_BALANCE');
        
        console.log("✅ Resultado V51:", finalUrl);
        res.json({ success: true, imageUrl: finalUrl, originalUrls: originalUrls });

    } catch (error) {
        console.error('⚠️ ERROR:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V51 (Equilibrio Maestro) listo en ${PORT}`);
});
