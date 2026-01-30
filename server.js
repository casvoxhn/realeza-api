const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '100mb' })); 

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

app.post('/generate', async (req, res) => {
    try {
        const { images, style } = req.body;
        console.log(`🍌 V28 PROCESANDO: ${images.length} sujetos. Estilo: ${style}`);

        const model = genAI.getGenerativeModel({ model: "gemini-3-pro-image-preview" });

        const imageParts = images.map(img => ({
            inlineData: {
                data: img.replace(/^data:image\/\w+;base64,/, ""),
                mimeType: "image/jpeg"
            }
        }));

        // --- DEFINICIÓN DE ESTILOS V28 ---
        let styleEnvironment = "";
        let humanCostume = "";
        let animalInstruction = "";

        if (style === 'rey') {
            // ESTILO 2: REY/REINA CLÁSICO (Luz equilibrada, palacio)
            styleEnvironment = "in a well-lit classic renaissance palace, beige and gold tones, soft luxury.";
            humanCostume = "wearing elegant renaissance royal robes.";
            animalInstruction = "NO CLOTHES. Natural pet pose on a rug or cushion.";
        
        } else if (style === 'renacimiento') {
            // ESTILO 1: RENACIMIENTO ÓLEO (Rembrandt, oscuro, arte puro)
            styleEnvironment = "in a classic baroque studio with dramatic chiaroscuro lighting (Rembrandt style), dark background.";
            humanCostume = "wearing dark, historical period clothing (not necessarily royal, more artistic).";
            animalInstruction = "NO CLOTHES. Natural pet pose, artistic lighting.";

        } else if (style === 'barroco') {
            // ESTILO 3: BARROCO DRAMÁTICO (El Nuevo - Opulencia Máxima)
            styleEnvironment = "in a dark, dramatic throne room with intense spotlighting. Background is dark with sparkling gold dust and heavy deep red velvet curtains. Maximum Opulence.";
            humanCostume = "wearing the most expensive, heavy Baroque Royal robes, massive jewels, and a large golden crown.";
            // AQUÍ LA EXCEPCIÓN: Mascota con Corona y Capa, pero cuerpo natural
            animalInstruction = "The animal MUST wear a ROYAL GOLD CROWN and a DEEP RED VELVET CAPE draped over its back. BUT keep the body NATURAL (quadruped/sitting), DO NOT give it a human body. Pose: Absolute Monarch.";
        }

        // --- PROMPT DIRECTOR DE ESCENA ---
        const masterPrompt = `
        You are a Master Painter composing a group portrait based on the reference images.
        **CRITICAL: INCLUDE EVERY SINGLE SUBJECT FROM THE PHOTOS.**

        ### STEP 1: HIERARCHY & ROLES
        
        **SCENARIO A: HUMANS + ANIMALS**
        * **Humans:** They are the Supreme Rulers. MUST be ${humanCostume}.
        * **Animals:** Loyal Companions. ${animalInstruction}

        **SCENARIO B: ONLY ANIMALS**
        * **The Animals:** They are the Absolute Monarchs.
        * **CRITICAL:** ${style === 'barroco' ? 'Give them a GOLD CROWN and RED CAPE, but keep body natural (4 legs).' : 'NO HUMANIZATION. Keep them as natural animals.'}
        * **Pose:** Sitting or lying regally on a throne or velvet sofa.
        
        ### STEP 3: EXECUTE STYLE
        * **Environment:** ${styleEnvironment}
        * **Medium:** High-end oil painting masterpiece.
        * **Likeness:** Perfect preservation of faces.
        * **Format:** High Resolution, Vertical Portrait (4:5 or 3:4).
        `;

        const result = await model.generateContent([
            ...imageParts,
            masterPrompt
        ]);

        const response = await result.response;
        
        if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
            const rawBase64 = response.candidates[0].content.parts[0].inlineData.data;
            const finalImage = `data:image/jpeg;base64,${rawBase64}`;
            console.log("✅ Obra Maestra V28 generada.");
            res.json({ success: true, imageUrl: finalImage });
        } else {
            throw new Error("La IA no generó imagen válida.");
        }

    } catch (error) {
        console.error('⚠️ Error V28:', error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V28 (Barroco Added) listo en puerto ${PORT}`);
});
