const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de Seguridad
app.use(cors({
    origin: '*', // Permitir acceso desde cualquier lugar (luego lo restringiremos a tu dominio .com)
    methods: ['POST', 'OPTIONS']
}));

app.use(express.json({ limit: '50mb' })); // Permitir fotos grandes

// RUTA PRINCIPAL: GENERAR IMAGEN
app.post('/generate', async (req, res) => {
    try {
        const { imageBase64, style } = req.body;
        
        if (!imageBase64) {
            return res.status(400).json({ error: 'Falta la imagen de la mascota' });
        }

        console.log(`🎨 Procesando pedido estilo: ${style}`);

        // 1. DEFINIR LOS ESTILOS DE "REALEZA" (Tus Prompts Maestros)
        let promptStyle = "";
        
        if (style === 'rey') {
            promptStyle = "wearing a luxurious royal red velvet robe with heavy gold embroidery, a jeweled golden crown, sitting on a throne. Renaissance oil painting style, dramatic lighting, detailed texture.";
        } else if (style === 'astronauta') {
            promptStyle = "wearing a futuristic white NASA space suit with the helmet off, floating in outer space with nebula background. Hyper-realistic cinematic lighting, 8k resolution.";
        } else if (style === 'renacimiento') {
            promptStyle = "dressed in 17th-century aristocrat clothing with a ruffled white collar and dark silk doublet. Classic oil painting style like Rembrandt, chiaroscuro lighting, museum quality.";
        } else {
            promptStyle = "oil painting style, elegant and regal.";
        }

        // El Prompt Final que se envía a Google
        const finalPrompt = `A portrait of the animal in this image, ${promptStyle} The animal's face should be preserved exactly but blended naturally into the costume.`;

        // 2. LLAMADA A LA IA (GOOGLE IMAGEN / GEMINI)
        const API_KEY = process.env.GOOGLE_API_KEY;
        
        // NOTA IMPORTANTE: Google actualiza sus endpoints a menudo. 
        // Estamos usando la estructura para "Imagen 3" vía REST API.
        
        // Si tienes acceso a Imagen en Vertex AI, la URL cambia. 
        // Por ahora, usamos una simulación de llamada para que despliegues YA 
        // y pruebes la conexión Frontend-Backend. 
        
        // --- SIMULACIÓN (PARA QUE FUNCIONE HOY MISMO EN EL TEST) ---
        // (Esto te devolverá una imagen de prueba siempre, para validar que Shopify se conecta)
        // Cuando confirmes que tu API Key tiene acceso a Imagen 3, descomentamos la llamada real.
        
        const mockImages = {
            rey: "https://storage.googleapis.com/pod_public/1300/171584.jpg",
            astronauta: "https://i.etsystatic.com/26689237/r/il/d367c0/3336746266/il_570xN.3336746266_k9wb.jpg",
            renacimiento: "https://m.media-amazon.com/images/I/71s+3+a-dZL._AC_UF894,1000_QL80_.jpg"
        };
        
        const resultImage = mockImages[style] || mockImages['rey'];

        // --- FIN SIMULACIÓN ---

        /* // --- CÓDIGO REAL (FUTURO) ---
        // Descomentar cuando tengamos acceso confirmado a Imagen 3 en tu cuenta
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=${API_KEY}`,
            { contents: ... }
        );
        */

        // Responder a Shopify
        res.json({ 
            success: true, 
            imageUrl: resultImage, 
            message: "Imagen generada con éxito" 
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error interno del servidor', details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`👑 Servidor REALEZA corriendo en puerto ${PORT}`);
});