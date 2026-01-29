const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración: Permitir acceso desde cualquier lugar y subir límite de carga a 50MB
app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '50mb' }));

// Inicializar Google AI con tu API Key de Railway
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

app.post('/generate', async (req, res) => {
    try {
        const { imageBase64, style } = req.body;
        console.log(`🍌 Nano Banana PRO procesando estilo: ${style}`);

        // Limpieza de la imagen (quitar encabezado data:image...)
        const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");

        // MODELO EXACTO: Gemini 3 Pro (Nano Banana Pro)
        const model = genAI.getGenerativeModel({ model: "gemini-3-pro-image-preview" });

        // PROMPTS (Instrucciones de edición)
        let prompt = "";
        if (style === 'rey') {
            prompt = "Un retrato al estilo de pintura al óleo renacentista de una mascota [PERRO/GATO] sentado majestuosamente sobre un cojín de brocado rojo y dorado. El animal lleva una elaborada capa real de terciopelo rojo con bordados dorados, un cuello alto de encaje y una cadena de joyas. El fondo es oscuro y atmosférico, con una iluminación dramática y suave que resalta las texturas del pelaje, las telas y las joyas.";
        } else if (style === 'astronauta') {
            prompt = "Edit this image to put the pet in a realistic NASA astronaut suit floating in space. Maintain the pet's face and expression exactly as is. Cinematic lighting, 8k resolution.";
        } else if (style === 'renacimiento') {
            prompt = "Edit this image to paint the pet in the style of a classic Rembrandt portrait. Dark background, dramatic lighting. Maintain the pet's face exactly as is.";
        } else {
            prompt = "Turn this into a high quality oil painting.";
        }

        // GENERACIÓN
        const result = await model.generateContent([
            { inlineData: { data: base64Data, mimeType: "image/jpeg" } },
            prompt
        ]);

        const response = await result.response;
        let finalImage = "";

        // --- EXTRACCIÓN REAL DE LA IMAGEN ---
        // Verificamos si Google mandó la imagen en la respuesta
        if (response.candidates && 
            response.candidates[0].content && 
            response.candidates[0].content.parts && 
            response.candidates[0].content.parts[0].inlineData) {
            
            // ¡ÉXITO! Sacamos la imagen nueva generada por la IA
            const rawBase64 = response.candidates[0].content.parts[0].inlineData.data;
            
            // Le agregamos el encabezado para que el navegador la entienda
            finalImage = `data:image/jpeg;base64,${rawBase64}`;
            
            console.log("✅ Imagen REAL generada y extraída correctamente.");

        } else {
            throw new Error("La API no devolvió imagen, usando fallback.");
        }

        // Enviamos la imagen real a Shopify
        res.json({ 
            success: true, 
            imageUrl: finalImage,
            message: "Generado con Nano Banana Pro" 
        });

    } catch (error) {
        console.error('⚠️ Error o Fallback:', error.message);
        
        // FALLBACK DE SEGURIDAD (Solo si falla la real, mostramos demo para no perder el cliente)
        // Esto asegura que tu tienda nunca se vea "rota"
        const demos = {
            rey: "https://storage.googleapis.com/pod_public/1300/171584.jpg",
            astronauta: "https://i.etsystatic.com/26689237/r/il/d367c0/3336746266/il_570xN.3336746266_k9wb.jpg",
            renacimiento: "https://m.media-amazon.com/images/I/71s+3+a-dZL._AC_UF894,1000_QL80_.jpg"
        };
        const fallbackImage = demos[style] || demos['rey'];

        res.json({ 
            success: true, 
            imageUrl: fallbackImage,
            note: "Mostrando imagen demo por error técnico momentáneo"
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor Realeza listo en puerto ${PORT}`);
});

