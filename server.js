const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
// Límite alto para soportar 5 imágenes en alta calidad
app.use(express.json({ limit: '100mb' })); 

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

app.post('/generate', async (req, res) => {
    try {
        const { images, style } = req.body;
        console.log(`🍌 PROCESANDO ESCENA COMPLEXA: ${images.length} sujetos. Estilo: ${style}`);

        // Usamos el modelo más capaz para seguir instrucciones complejas
        const model = genAI.getGenerativeModel({ model: "gemini-3-pro-image-preview" });

        // Preparamos las imágenes
        const imageParts = images.map(img => ({
            inlineData: {
                data: img.replace(/^data:image\/\w+;base64,/, ""),
                mimeType: "image/jpeg"
            }
        }));

        // --- DEFINICIÓN DE ESTILOS ---
        let styleDetails = "";
        if (style === 'rey') {
            styleDetails = "Renaissance Royal Portrait. Luxurious red velvet robes, gold crowns, heavy jewelry, palace background.";
        } else if (style === 'astronauta') {
            styleDetails = "NASA Space Portrait. Realistic high-tech space suits, helmet under arm (if human), dramatic galaxy background.";
        } else if (style === 'renacimiento') {
            styleDetails = "Classic Rembrandt/Baroque Portrait. Dark background, dramatic chiaroscuro lighting, oil painting texture.";
        }

        // --- EL PROMPT "DIRECTOR DE ESCENA" ---
        const masterPrompt = `
        You are a Master Painter composing a complex group portrait based on the provided reference images.
        
        **CRITICAL INSTRUCTION: YOU MUST INCLUDE EVERY SINGLE SUBJECT FROM THE UPLOADED PHOTOS. COUNT THEM AND PLACE THEM ALL.**
        
        ### STEP 1: ANALYZE THE SUBJECTS
        Look at all the uploaded images. Determine:
        1. Are there humans?
        2. Are there animals?
        
        ### STEP 2: APPLY THE HIERARCHY RULE (Strict Logic)
        
        **SCENARIO A: MIXED GROUP (Humans + Animals)**
        * **The Human(s):** They are the Royalty/Main Character. They MUST wear the costume defined in the style. They should be sitting on a throne or standing proudly.
        * **The Animal(s):** They are LOYAL PETS. 
            * **DO NOT HUMANIZES ANIMALS** in this scenario. 
            * Keep them distinctively animals (on four legs, sitting naturally).
            * **Placement:** Place them logically—on the human's lap, sitting at their feet, or peeking from behind the throne.
            * **No clothes for animals** in this scenario (unless it's a simple collar).
        
        **SCENARIO B: ONLY ANIMALS (No Humans)**
        * **The Animals:** They are the Royalty.
        * **ACTION:** ANTHROPOMORPHIZE THEM. Give them human-like posture (bust or half-body) and dress them in the royal/space costumes.
        * **Placement:** Arrange them as a noble family portrait.
        
        ### STEP 3: EXECUTE STYLE: ${styleDetails}
        
        **FINAL REQUIREMENTS:**
        * **Likeness:** Preserve the exact faces/identity of all subjects (humans and pets).
        * **Composition:** Ensure no one is hidden. Balance the composition.
        * **Quality:** High-end oil painting finish. Timeless masterpiece.
        `;

        // Generación
        const result = await model.generateContent([
            ...imageParts, // Pasamos las 1, 2, 3, 4 o 5 fotos
            masterPrompt
        ]);

        const response = await result.response;
        
        if (response.candidates && 
            response.candidates[0].content && 
            response.candidates[0].content.parts && 
            response.candidates[0].content.parts[0].inlineData) {
            
            const rawBase64 = response.candidates[0].content.parts[0].inlineData.data;
            const finalImage = `data:image/jpeg;base64,${rawBase64}`;
            console.log("✅ Obra Maestra Multi-Sujeto generada.");
            res.json({ success: true, imageUrl: finalImage });

        } else {
            throw new Error("La IA no generó imagen válida.");
        }

    } catch (error) {
        console.error('⚠️ Error Fatal:', error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V10 (Lógica Director) listo en puerto ${PORT}`);
});
