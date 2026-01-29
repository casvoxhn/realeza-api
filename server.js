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
        console.log(`🍌 V11 PROCESANDO: ${images.length} sujetos. Estilo: ${style} (Modo Natural)`);

        const model = genAI.getGenerativeModel({ model: "gemini-3-pro-image-preview" });

        const imageParts = images.map(img => ({
            inlineData: {
                data: img.replace(/^data:image\/\w+;base64,/, ""),
                mimeType: "image/jpeg"
            }
        }));

        // --- DEFINICIÓN DE ESTILOS (Entorno) ---
        let styleEnvironment = "";
        let humanCostume = "";
        if (style === 'rey') {
            styleEnvironment = "in a luxurious renaissance palace throne room, surrounded by heavy red velvet, gold ornaments, and ancient tapestries.";
            humanCostume = "wearing elaborate renaissance royal robes and crowns.";
        } else if (style === 'astronauta') {
            styleEnvironment = "on the bridge of a high-tech spaceship with a galaxy view window.";
            humanCostume = "wearing realistic NASA space suits.";
        } else if (style === 'renacimiento') {
            styleEnvironment = "in a classic baroque studio with dramatic chiaroscuro lighting and dark, rich background tones.";
            humanCostume = "wearing dark, historical Rembrandt-style clothing.";
        }

        // --- EL PROMPT "DIRECTOR NATURAL" V11 ---
        const masterPrompt = `
        You are a Master Painter composed a group portrait based on the reference images.
        **CRITICAL: INCLUDE EVERY SINGLE SUBJECT FROM THE PHOTOS.**

        ### STEP 1: ANALYZE SUBJECTS
        - Count humans.
        - Count animals.

        ### STEP 2: APPLY STRICT HIERARCHY & POSE RULES

        **SCENARIO A: MIXED GROUP (Humans + Animals)**
        * **Humans:** They are the Royalty/Leaders. They MUST be ${humanCostume}. They are the main focus.
        * **Animals:** They are LOYAL COMPANIONS.
            * **NO HUMANIZATION.** Keep them as natural animals (on four legs, sitting naturally).
            * **NO CLOTHES** for animals.
            * **Placement:** On the human's lap, at their feet, or sitting on a cushion next to them.

        **SCENARIO B: ONLY ANIMALS (No Humans)**
        * **The Animals:** They are the subjects of a noble portrait.
        * **CRITICAL: NO HUMANIZATION. DO NOT put them on two legs or give them human bodies.**
        * **ACTION:** Keep them as natural animals, retaining their exact breed and pose from the photos.
        * **Placement:** Place them sitting or lying regally on ornate royal furniture (thrones, velvet sofas, silk cushions) within the environment described below. They should look comfortable and noble in their natural state.

        ### STEP 3: EXECUTE STYLE
        * **Environment:** The scene is set ${styleEnvironment}
        * **Medium:** High-end oil painting masterpiece.
        * **Likeness:** Perfect preservation of all faces.
        `;

        const result = await model.generateContent([
            ...imageParts,
            masterPrompt
        ]);

        const response = await result.response;
        
        if (response.candidates && 
            response.candidates[0].content && 
            response.candidates[0].content.parts && 
            response.candidates[0].content.parts[0].inlineData) {
            
            const rawBase64 = response.candidates[0].content.parts[0].inlineData.data;
            const finalImage = `data:image/jpeg;base64,${rawBase64}`;
            console.log("✅ Obra Maestra V11 generada.");
            res.json({ success: true, imageUrl: finalImage });

        } else {
            throw new Error("La IA no generó imagen válida.");
        }

    } catch (error) {
        console.error('⚠️ Error V11:', error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V11 (Natural Royal) listo en puerto ${PORT}`);
});
