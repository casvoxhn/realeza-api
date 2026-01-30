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
        console.log(`🎨 Generando V43 (Lógica Híbrida). Estilo: ${style} | Sujetos: ${images.length}`);

        // 1. GUARDAR ORIGINALES
        const originalUrls = await Promise.all(images.map(async (img, i) => {
            const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            return await uploadBufferToSupabase(buffer, `ref_${i}`);
        }));

        // 2. CONFIGURACIÓN DEL PROMPT SEGÚN TUS REGLAS
        let styleEnvironment = "";
        let humanCostume = "";
        let animalInstruction = "";

        if (style === 'rey') {
             // Lógica: Natural pero Real
             styleEnvironment = "**STYLE:** Northern Renaissance (Holbein style). Soft, diffused studio light. Background: Blurred palace interior with heavy drapes.";
             humanCostume = "wearing elegant renaissance royal robes, velvet and fur.";
             animalInstruction = "**NO HUMAN CLOTHES.** The animal must be in a NATURAL POSE (sitting/standing) on a luxurious rug or velvet cushion. Majestic but realistic.";
        
        } else if (style === 'renacimiento') {
             // Lógica: Rembrandt Oscuro y Natural
             styleEnvironment = "**STYLE:** Baroque Oil Painting (Rembrandt style). Dramatic Chiaroscuro lighting (light face, dark edges). Background: Dark, moody, abstract brown/black.";
             humanCostume = "wearing dark, historical period clothing (black doublet, white ruff collar).";
             animalInstruction = "**NO HUMAN CLOTHES.** The animal must be in a NATURAL POSE. Focus on the lighting hitting the animal's face and fur texture. Soulful look.";
        
        } else if (style === 'barroco') {
             // Lógica: Fantasía Total (Tu regla de Corona y Capa)
             styleEnvironment = "**STYLE:** Maximum Opulence Baroque (Rigaud style). Theatrical glowing lighting. Background: Dark atmospheric with floating gold sparkles.";
             humanCostume = "wearing massive golden crowns and heavy red velvet royal capes.";
             animalInstruction = "**HUMANIZATION:** The animal MUST wear a ROYAL GOLD CROWN on its head and a DEEP RED VELVET CAPE on its shoulders. Pose: Proud and dominant.";
        }

        // 3. EL SUPER PROMPT FUSIONADO
        const masterPrompt = `
        You are a Master Painter composing a high-resolution group portrait.
        
        **CORE INSTRUCTION: INCLUDE EVERY SINGLE SUBJECT FROM THE SOURCE IMAGES.**
        If there are multiple animals/people, paint them ALL together in a cohesive composition.

        **SCENARIO A: IF HUMANS ARE PRESENT**
        * Humans: ${humanCostume}
        * Animals: ${animalInstruction} (Accompaning the human).

        **SCENARIO B: IF ONLY ANIMALS ARE PRESENT**
        * Treat them as the Absolute Monarchs of the painting.
        * **CLOTHING RULE:** ${animalInstruction}

        ${styleEnvironment}

        **TECHNICAL CONSTRAINTS:**
        * **Format:** Vertical Portrait (High Resolution).
        * **Technique:** Oil painting, visible brushstrokes, glazing.
        * **Identity:** Keep the faces recognizable.
        * **Negative Prompt:** NO text, NO watermarks, NO distortions, NO extra limbs, NO cartoon 3D render.
        `;

        // 4. GENERAR
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
        const imageParts = images.map(img => ({ inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }}));
        
        const result = await model.generateContent([ ...imageParts, masterPrompt ]);
        const response = await result.response;
        const base64Gemini = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        
        if (!base64Gemini) throw new Error("Error en generación.");

        // 5. GUARDAR
        const imageBuffer = Buffer.from(base64Gemini, 'base64');
        const finalUrl = await uploadBufferToSupabase(imageBuffer, 'MASTER_ART');
        
        console.log("✅ Arte Generado:", finalUrl);

        res.json({ success: true, imageUrl: finalUrl, originalUrls: originalUrls });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Error de arte." });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V43 (Reglas Ariel + Calidad Museo) listo en puerto ${PORT}`);
});
