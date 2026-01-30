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
        const numSubjects = images.length;
        const isGroup = numSubjects > 1;
        const isLargeGroup = numSubjects > 2;

        console.log(`🎨 V61 (POSTURAS VARIADAS/ACOSTADOS). Estilo: ${style} | Sujetos: ${numSubjects}`);

        const originalUrls = await Promise.all(images.map(async (img, i) => {
            const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            return await uploadBufferToSupabase(buffer, `ref_${i}`);
        }));

        const model = genAI.getGenerativeModel({ model: MODEL_ID });

        let promptStyle = "";

        // --- VARIABLES DINÁMICAS AVANZADAS ---
        const subjectText = isGroup ? "subjects" : "subject";
        
        // Lógica de Pose Diferenciada (V61 - ÉNFASIS EN ACOSTADOS/VARIEDAD)
        let poseText = "";
        if (!isGroup) {
            // 1 Mascota: Damos opciones explícitas de acostado para que no solo siente
            poseText = `**POSE VARIETY:** The animal is posed regally on the cushion. It should NOT always be sitting straight up. **Encourage varied noble postures:** reclining elegantly, lying down in a sphinx-like pose, or rested comfortably looking dignified.`;
        } else if (!isLargeGroup) {
            // 2 Mascotas (Dúo): Mezcla de posturas
            poseText = `**DUO POSE:** The two animals are posed TOGETHER on the cushion. They should display a **mix of natural noble postures**: for example, one sitting upright watching over the other who is lying down or reclining next to it.`;
        } else {
            // 3+ Mascotas (Grupo Grande): Mezcla orgánica
            poseText = `**LARGE GROUP COMPOSITION:** The animals are arranged in a cohesive, clustered group portrait on the large surface. **Crucial: Allow for a variety of natural postures.** Some subjects should be sitting, while others are lying down or reclining naturally among the group. Each must have distinct body space.`;
        }
        
        const identityInstruction = isGroup
            ? `Capture the unique characteristics and likeness of **EVERY SINGLE ONE of the ${numSubjects} SUBJECTS** provided. Do not leave anyone out.`
            : "Capture the unique characteristics and overall likeness of the subject.";

        // --- ESTILO 1: RENACIMIENTO (ADAPTADO) ---
        if (style === 'renacimiento') {
            promptStyle = `
            **STYLE:** 17th Century Dutch/Flemish Baroque Oil Painting (Titian/Van Dyck style).

            **COMPOSITION GOAL:** A powerful ${isGroup ? "GROUP portrait" : "portrait"} with dramatic lighting.

            **1. THE SUBJECTS (IDENTITY & ADAPTATION):**
            - ${identityInstruction}
            - Maintain a strong resemblance, allowing for artistic variations to fit the style.

            **2. THE POSE & SETTING:**
            - ${poseText}
            - **SETTING:** They rest on a massive, luxurious antique velvet structure (cushion or dais).
            - **VARIETY RULE (COLOR):** Choose a different rich historical color for the velvet in every generation.
            - **BACKGROUND:** Clean, textured plaster wall in neutral, deep tones.

            **3. THE "ROPITA" (OPEN NECKLINE):**
            - **CRITICAL: OPEN NECK STYLE.** Do NOT use high, closed collars.
            - Heavy velvet/brocade mantles/capelets must be **draped open at the front**, revealing the neck fur/chest of EACH animal.
            - Prominent jeweled collars on each.

            **4. LIGHTING:**
            - Strong, dramatic Chiaroscuro light from the upper left.
            `;
        } 
        else if (style === 'rey') { promptStyle = `**STYLE:** Royal Portrait. **IDENTITY:** Keep likeness. **POSE:** Varied noble poses (sitting or reclining) on throne/cushion. **ATTIRE:** Open robes.`; } 
        else if (style === 'barroco') { promptStyle = `**STYLE:** High Baroque. **IDENTITY:** Keep likeness. **POSE:** Dramatic varied poses. **ATTIRE:** Crowns & open red capes.`; }

        const masterPrompt = `
        You are a Master Painter creating a museum-quality oil painting.
        **INSTRUCTIONS:**
        1. Analyze the ${numSubjects} input image(s).
        2. Create a cohesive composition including **ALL ${numSubjects} SUBJECTS**.
        3. Apply a rich oil painting texture.
        
        ${promptStyle}
        
        **CRITICAL TECHNICAL SPECS:**
        **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
        **FRAMING:** ${isLargeGroup ? "Medium Shot (wider to fit all)." : "Medium Close-Up (Chest Up)."}
        `;
        
        const imageParts = images.map(img => ({ inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }}));
        
        const result = await model.generateContent([ ...imageParts, masterPrompt ]);
        const response = await result.response;
        
        if (!response.candidates || !response.candidates[0].content) throw new Error("Fallo en generación.");

        const base64Gemini = response.candidates[0].content.parts[0].inlineData.data;
        const imageBuffer = Buffer.from(base64Gemini, 'base64');
        const finalUrl = await uploadBufferToSupabase(imageBuffer, 'MASTER_V61_LYING_DOWN_FIX');
        
        console.log("✅ Resultado V61:", finalUrl);
        res.json({ success: true, imageUrl: finalUrl, originalUrls: originalUrls });

    } catch (error) {
        console.error('⚠️ ERROR:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V61 (Posturas Variadas/Acostados) listo en ${PORT}`);
});
