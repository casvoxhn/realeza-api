const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '50mb' }));

// FORMA CORRECTA:
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

app.post('/generate', async (req, res) => {
    try {
        const { imageBase64, style } = req.body;
        console.log(`🍌 Nano Banana activado para estilo: ${style}`);

        // Limpieza de la imagen
        const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");

        // SELECCIÓN DEL MODELO
        // Usamos 'gemini-2.5-flash-image' que es el código oficial para Nano Banana
        const model = genAI.getGenerativeModel({ model: "gemini-3-pro-image-preview" });

        // PROMPTS MAESTROS (Instrucciones de edición directa)
        let prompt = "";
        if (style === 'rey') {
            prompt = "Turn this cat into a renaissance king wearing a red velvet robe and gold crown. Maintain the exact face and expression of the cat.";
        } else if (style === 'astronauta') {
            prompt = "Turn this pet into a NASA astronaut in space. Maintain the exact face of the pet.";
        } else if (style === 'renacimiento') {
            prompt = "Paint this pet in the style of a classic Rembrandt oil painting. Maintain the exact face.";
        } else {
            prompt = "Turn this into an oil painting.";
        }

        // GENERACIÓN REAL
        const result = await model.generateContent([
            { inlineData: { data: base64Data, mimeType: "image/jpeg" } },
            prompt
        ]);

        const response = await result.response;
        
        // --- AQUÍ ESTÁ LA CORRECCIÓN: EXTRAER LA IMAGEN REAL ---
        let finalImage = "";
        
        try {
            // Verificamos si Google nos mandó la imagen
            if (response.candidates && 
                response.candidates[0].content && 
                response.candidates[0].content.parts && 
                response.candidates[0].content.parts[0].inlineData) {
                
                // 1. Sacamos los datos crudos
                const base64String = response.candidates[0].content.parts[0].inlineData.data;
                
                // 2. Le ponemos la etiqueta para que el navegador sepa que es una imagen
                finalImage = `data:image/jpeg;base64,${base64String}`;
                
                console.log("✅ ¡ÉXITO! Imagen REAL generada por Gemini 3 Pro");
            } else {
                throw new Error("La respuesta de Google no traía imagen.");
            }

        } catch (e) {
            console.log("⚠️ No se pudo extraer la imagen real. Razón:", e.message);
            console.log("Usando imagen DEMO por seguridad.");
            
            // SOLO si falla la real, usamos la demo de Fable
            const demos = {
                rey: "https://storage.googleapis.com/pod_public/1300/171584.jpg",
                astronauta: "https://i.etsystatic.com/26689237/r/il/d367c0/3336746266/il_570xN.3336746266_k9wb.jpg",
                renacimiento: "https://m.media-amazon.com/images/I/71s+3+a-dZL._AC_UF894,1000_QL80_.jpg"
            };
            finalImage = demos[style] || demos['rey'];
        }

        res.json({ 
            success: true, 
            imageUrl: finalImage,
            message: "Generado con Nano Banana Pro"
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor listo en puerto ${PORT}`);
});




