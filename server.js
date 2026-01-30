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
        const isGroup = images.length > 1;
        console.log(`🎨 V59 (CUELLO ABIERTO). Estilo: ${style} | Fotos: ${images.length}`);

        const originalUrls = await Promise.all(images.map(async (img, i) => {
            const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            return await uploadBufferToSupabase(buffer, `ref_${i}`);
        }));

        const model = genAI.getGenerativeModel({ model: MODEL_ID });

        let promptStyle = "";

        // --- VARIABLES DINÁMICAS (SINGULAR vs PLURAL) ---
        const subjectText = isGroup ? "subjects" : "subject";
        const poseText = isGroup 
            ? "**GROUP POSE:** The animals must be posed TOGETHER, side-by-side or slightly overlapping, interacting naturally like a noble family portrait. They share the same space/cushion." 
            : "**POSE:** The animal is sitting or lying regally.";
        
        const identityInstruction = isGroup
            ? "Capture the unique characteristics and likeness of **EVERY SINGLE SUBJECT** provided. Do not leave anyone out."
            : "Capture the unique characteristics and overall likeness of the subject.";

        // --- ESTILO 1: RENACIMIENTO (CON CUELLO ABIERTO) ---
        if (style === 'renacimiento') {
            promptStyle = `
            **STYLE:** 17th Century Dutch/Flemish Baroque Oil Painting (Titian/Van Dyck style).

            **COMPOSITION GOAL:** A powerful ${isGroup ? "GROUP portrait" : "portrait"} with dramatic lighting.

            **1. THE SUBJECTS (IDENTITY & ADAPTATION):**
            - ${identityInstruction}
            - Maintain a strong resemblance to the original ${subjectText}, but allow for artistic variations in facial expression and pose to fit the Renaissance style naturally.

            **2. THE POSE & SETTING (Medium Close-Up):**
            - ${poseText}
            - **FRAMING:** Focus on the ${subjectText} resting on the top part of a massive, luxurious antique velvet cushion.
            - **VARIETY RULE:** Choose a different rich historical color for the cushion in every generation.
            - **BACKGROUND:** Clean, textured plaster wall in neutral, deep tones. No clutter.

            **3. THE "ROPITA" (OPEN NECKLINE & NOBLE DRAPERY):**
            - **CRITICAL: OPEN NECK STYLE.** Do NOT use high, closed collars or tight ruffs that hide the neck.
            - The heavy velvet/brocade mantle or capelet must be **draped open at the front**, creating a wide V-shape or U-shape opening that **reveals the animal's neck fur** and chest.
            - A prominent jeweled collar sits directly on the visible neck fur.
            - **NO human jackets or pants.**

            **4. LIGHTING:**
            - Strong, dramatic Chiaroscuro light from the upper left. Spotlight the faces/fur.
            `;
        } 
        else if (style === 'rey') {
            promptStyle = `**STYLE:** Northern Renaissance Royal Portrait. **IDENTITY:** Maintain strong likeness for ALL subjects. **COMPOSITION:** Dignified sitting pose on a throne-like chair. **ATTIRE:** Open royal robes revealing neck fur. Soft, bright light.`;
        } 
        else if (style === 'barroco') {
             promptStyle = `**STYLE:** High Baroque Opulence. **IDENTITY:** Maintain strong likeness. **COMPOSITION:** Dramatic group pose with GOLD CROWNS and flowing RED CAPES (open front).`;
        }

        const masterPrompt = `
        You are a Master Painter creating a museum-quality oil painting.
        **INSTRUCTIONS:**
        1. Analyze the ${images.length} input image(s).
        2. Create a cohesive composition including **ALL ${images.length} SUBJECTS**.
        3. Apply a rich oil painting texture.
        
        ${promptStyle}
        
        **CRITICAL TECHNICAL SPECS:**
        **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
        **FRAMING:** Medium Close-Up. Fill the frame with the ${subjectText}.
        `;
        
        const imageParts = images.map(img => ({ inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }}));
        
        const result = await model.generateContent([ ...imageParts, masterPrompt ]);
        const response = await result.response;
        
        if (!response.candidates || !response.candidates[0].content) throw new Error("Fallo en generación.");

        const base64Gemini = response.candidates[0].content.parts[0].inlineData.data;
        const imageBuffer = Buffer.from(base64Gemini, 'base64');
        const finalUrl = await uploadBufferToSupabase(imageBuffer, 'MASTER_V59_OPEN_NECK');
        
        console.log("✅ Resultado V59:", finalUrl);
        res.json({ success: true, imageUrl: finalUrl, originalUrls: originalUrls });

    } catch (error) {
        console.error('⚠️ ERROR:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V59 (Estilo Cuello Abierto) listo en ${PORT}`);
});
