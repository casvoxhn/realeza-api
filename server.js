const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '100mb' })); // Límite alto para varias fotos

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

app.post('/generate', async (req, res) => {
    try {
        const { images, style } = req.body;
        console.log(`🍌 Procesando ${images.length} imagenes. Estilo: ${style}`);

        const model = genAI.getGenerativeModel({ model: "gemini-3-pro-image-preview" });

        // Preparar imágenes
        const imageParts = images.map(img => ({
            inlineData: {
                data: img.replace(/^data:image\/\w+;base64,/, ""),
                mimeType: "image/jpeg"
            }
        }));

        // --- LÓGICA MAESTRA CONDICIONAL (AQUÍ ESTÁ LA MAGIA) ---
        // Le decimos a Gemini cómo comportarse según los sujetos detectados.
        
        let styleInstruction = "";
        if (style === 'rey') {
            styleInstruction = "Renaissance Royal Portrait. Red velvet robes, gold crowns, intricate details, oil painting style.";
        } else if (style === 'astronauta') {
            styleInstruction = "NASA Astronaut Portrait. Realistic space suits, cinematic lighting, space background, highly detailed.";
        } else if (style === 'renacimiento') {
            styleInstruction = "Classic Rembrandt Style Portrait. Dramatic chiaroscuro lighting, dark background, museum quality oil painting.";
        }

        const smartPrompt = `
        You are an expert artist creating a masterpiece from these reference photos.
        Follow these STRICT rules based on the subjects found in the images:

        1. **IF ONLY ANIMALS ARE PRESENT:**
           - Create an ANTHROPOMORPHIC portrait. 
           - The animal should have a human-like body posture wearing the costume defined below.
           - Keep the animal's head/face exactly as it is in the photo.

        2. **IF ONLY HUMANS ARE PRESENT:**
           - Create a royal/heroic portrait.
           - Replace their clothing with the costume defined below.
           - Keep their face and identity exactly as in the photo.

        3. **IF BOTH HUMANS AND ANIMALS ARE PRESENT (The Priority Rule):**
           - The HUMAN is the main subject (King/Queen/Commander). They wear the costume.
           - The ANIMAL is the loyal COMPANION. The animal must look NATURAL (walking on 4 legs, sitting on lap, or held). 
           - DO NOT put clothes on the animal in this mixed case. The animal stays as a natural pet.
           - Composition: Human dominating the frame, animal close to them interacting naturally.

        **STYLE TO APPLY:** ${styleInstruction}
        **GOAL:** High fidelity to the original faces. Seamless blending. timeless masterpiece.
        `;

        // Generación
        const result = await model.generateContent([
            ...imageParts,
            smartPrompt
        ]);

        const response = await result.response;
        
        // Extracción segura
        if (response.candidates && 
            response.candidates[0].content && 
            response.candidates[0].content.parts && 
            response.candidates[0].content.parts[0].inlineData) {
            
            const rawBase64 = response.candidates[0].content.parts[0].inlineData.data;
            const finalImage = `data:image/jpeg;base64,${rawBase64}`;
            console.log("✅ Imagen generada con lógica inteligente.");
            res.json({ success: true, imageUrl: finalImage });

        } else {
            throw new Error("La IA no devolvió imagen.");
        }

    } catch (error) {
        console.error('⚠️ Error:', error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor Lógica Maestra listo en puerto ${PORT}`);
});
