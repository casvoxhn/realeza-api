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

        console.log(`🎨 V63 (CORRECCIÓN CIERRE/COLLAR). Estilo: ${style} | Sujetos: ${numSubjects}`);

        const originalUrls = await Promise.all(images.map(async (img, i) => {
            const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            return await uploadBufferToSupabase(buffer, `ref_${i}`);
        }));

        const model = genAI.getGenerativeModel({ model: MODEL_ID });

        let promptStyle = "";

        // --- VARIABLES DINÁMICAS ---
        const identityInstruction = isGroup
            ? `Capture the unique characteristics and likeness of **EVERY SINGLE ONE of the ${numSubjects} SUBJECTS** (humans and/or animals) provided.`
            : "Capture the unique characteristics and overall likeness of the subject.";

        // --- ESTILO 1: RENACIMIENTO (VERSIÓN HÍBRIDA + CORRECCIÓN DE CIERRE) ---
        if (style === 'renacimiento') {
            promptStyle = `
            **STYLE:** 17th Century Dutch/Flemish Baroque Oil Painting (Titian/Van Dyck/Rembrandt style).
            **COMPOSITION GOAL:** A powerful, museum-quality portrait with dramatic lighting.

            **1. IDENTITY (CRITICAL):**
            - ${identityInstruction}
            - Maintain exact facial features for humans. Maintain exact breed/markings for pets.

            **2. INTELLIGENT SUBJECT HANDLING (THE CORE RULES):**
            *Analyze each subject and apply the correct rules based on what they are.*

            --- **IF SUBJECT IS A PET (Dog, Cat, etc.):** ---
            - **POSE:** Reclining or sitting regally on a massive antique velvet cushion on the floor or a low dais. Encourage varied natural postures (lying down, sphinx pose).
            - **ATTIRE (THE FIX):** **NO HUMAN CLOTHES** (no jackets, no pants). Use a heavy, richly embroidered brocade mantle/capelet **draped open at the front** to reveal neck fur.
            - **FASTENING:** The open front of the mantle is connected across the chest by an **opulent jeweled clasp, chain, or ornate embroidered band**, serving as the fastening for the garment rather than a separate collar.

            --- **IF SUBJECT IS A HUMAN:** ---
            - **POSE:** Seated with immense dignity on a carved wooden armchair or throne-like seat. Posture is noble and upright.
            - **ATTIRE:** Full historical period clothing appropriate for high nobility. Examples: Dark velvet doublets, elaborate gowns, ruff collars (gorgueras) or rich lace collars, heavy gold chains, fine fabrics with historical patterns.

            --- **IF MIXED GROUP (Humans + Pets):** ---
            - **INTERACTION:** Humans are seated on chairs/thrones. Pets are placed naturally near them—either sitting on a large cushion at the human's feet, or resting elegantly on the human's lap or on a table beside them. They should look like a cohesive noble family.

            **3. SETTING & LIGHTING:**
            - **BACKGROUND:** A deep, atmospheric, textured plaster wall or dark oak paneling. Minimal clutter to focus on the subjects.
            - **LIGHTING:** Strong, dramatic Chiaroscuro light from the upper left, spotlighting faces and rich textures.
            `;
        } 
        // (Otros estilos pendientes)
        else if (style === 'rey') { promptStyle = `**STYLE:** Royal Portrait. IDENTITY: Keep likeness. ATTIRE: Appropriate Royal robes.`; } 
        else if (style === 'barroco') { promptStyle = `**STYLE:** High Baroque. ATTIRE: Massive Crowns and Red Capes.`; }

        const masterPrompt = `
        You are a Master Painter creating a museum-quality oil painting.
        **INSTRUCTIONS:**
        1. Analyze the ${numSubjects} input image(s) to determine if they are humans, pets, or a mix.
        2. Create a cohesive composition applying the "INTELLIGENT SUBJECT HANDLING" rules below.
        3. Apply a rich oil painting texture.
        
        ${promptStyle}
        
        **CRITICAL TECHNICAL SPECS:**
        **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
        **FRAMING:** ${isLargeGroup ? "Medium Shot (wider to fit group)." : "Medium Close-Up (Chest Up to Waist Up for humans)."}
        `;
        
        const imageParts = images.map(img => ({ inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }}));
        
        const result = await model.generateContent([ ...imageParts, masterPrompt ]);
        const response = await result.response;
        
        if (!response.candidates || !response.candidates[0].content) throw new Error("Fallo en generación.");

        const base64Gemini = response.candidates[0].content.parts[0].inlineData.data;
        const imageBuffer = Buffer.from(base64Gemini, 'base64');
        const finalUrl = await uploadBufferToSupabase(imageBuffer, 'MASTER_V63_CLASP_FIX');
        
        console.log("✅ Resultado V63:", finalUrl);
        res.json({ success: true, imageUrl: finalUrl, originalUrls: originalUrls });

    } catch (error) {
        console.error('⚠️ ERROR:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V63 (Corrección de Cierre/Collar) listo en ${PORT}`);
});
