const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
// AUMENTAMOS EL LÍMITE DE CARGA PORQUE VARIAS FOTOS PESAN MÁS
app.use(express.json({ limit: '100mb' })); 

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

app.post('/generate', async (req, res) => {
    try {
        // AHORA RECIBIMOS 'images' (ARRAY) EN VEZ DE 'imageBase64' (STRING)
        const { images, style } = req.body;
        console.log(`🍌 Procesando ${images.length} imagenes. Estilo: ${style}`);

        const model = genAI.getGenerativeModel({ model: "gemini-3-pro-image-preview" });

        // 1. PREPARAMOS LAS IMÁGENES PARA GEMINI
        // Recorremos la lista y creamos el objeto para cada una
        const imageParts = images.map(img => ({
            inlineData: {
                data: img.replace(/^data:image\/\w+;base64,/, ""),
                mimeType: "image/jpeg"
            }
        }));

        // 2. PROMPTS (Gemini es listo, si ve varias fotos, entiende que debe fusionarlas o hacer grupo)
        let promptText = "";
        if (style === 'rey') {
            promptText = "Create a masterpiece portrait combining these subjects. Transform them into renaissance royalty (kings/queens). Wear red velvet robes and crowns. Maintain their exact faces and identities. Composition must look natural together. High quality oil painting.";
        } else if (style === 'astronauta') {
            promptText = "Create a masterpiece portrait of these subjects as a team of NASA astronauts in space. Realistic suits. Maintain exact faces. Cinematic lighting.";
        } else if (style === 'renacimiento') {
            promptText = "Create a classic group portrait in the style of Rembrandt. Dark background, dramatic lighting. Maintain exact faces and expressions.";
        } else {
            promptText = "Oil painting of these subjects together.";
        }

        // 3. ENVIAMOS TODO AL MODELO (Imágenes + Prompt)
        const result = await model.generateContent([
            ...imageParts, // Aquí van todas las fotos
            promptText
        ]);

        const response = await result.response;
        let finalImage = "";

        // Extracción de la imagen generada
        if (response.candidates && 
            response.candidates[0].content && 
            response.candidates[0].content.parts && 
            response.candidates[0].content.parts[0].inlineData) {
            
            const rawBase64 = response.candidates[0].content.parts[0].inlineData.data;
            finalImage = `data:image/jpeg;base64,${rawBase64}`;
            console.log("✅ Imagen Multi-Sujeto generada con éxito.");

        } else {
            throw new Error("No se generó imagen.");
        }

        res.json({ success: true, imageUrl: finalImage });

    } catch (error) {
        console.error('⚠️ Error:', error.message);
        // Fallback simple por si falla
        res.json({ 
            success: true, 
            imageUrl: "https://storage.googleapis.com/pod_public/1300/171584.jpg",
            note: "Fallback activado"
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor Multi-Upload listo en puerto ${PORT}`);
});
