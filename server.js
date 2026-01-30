const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { createClient } = require('@supabase/supabase-js'); // Importamos Supabase
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
// Aumentamos límite para recibir varias fotos
app.use(express.json({ limit: '100mb' })); 

// 1. CONFIGURACIÓN DE SUPABASE
const supabaseUrl = process.env.SUPABASE_URL; 
const supabaseKey = process.env.SUPABASE_ANON_KEY; 
const supabase = createClient(supabaseUrl, supabaseKey);

// Configuración de Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

app.post('/generate', async (req, res) => {
    try {
        const { images, style } = req.body;
        console.log(`🎨 Procesando ${images.length} imagenes. Estilo: ${style}`);

        const model = genAI.getGenerativeModel({ model: "gemini-3-pro-image-preview" });

        // Preparar imágenes para Gemini
        const imageParts = images.map(img => ({
            inlineData: {
                data: img.replace(/^data:image\/\w+;base64,/, ""),
                mimeType: "image/jpeg"
            }
        }));

        // --- DEFINICIÓN DE ESTILOS ---
        let styleEnvironment = "";
        let humanCostume = "";
        let animalInstruction = "";

        if (style === 'rey') {
             styleEnvironment = "in a well-lit classic renaissance palace, beige and gold tones, soft luxury.";
             humanCostume = "wearing elegant renaissance royal robes.";
             animalInstruction = "NO CLOTHES. Natural pet pose on a rug or cushion.";
        } else if (style === 'renacimiento') {
             styleEnvironment = "in a classic baroque studio with dramatic chiaroscuro lighting (Rembrandt style), dark background.";
             humanCostume = "wearing dark, historical period clothing.";
             animalInstruction = "NO CLOTHES. Natural pet pose, artistic lighting.";
        } else if (style === 'barroco') {
             styleEnvironment = "in a dark, dramatic throne room with intense spotlighting. Background is dark with sparkling gold dust and heavy deep red velvet curtains.";
             humanCostume = "wearing the most expensive, heavy Baroque Royal robes, massive jewels, and a large golden crown.";
             animalInstruction = "The animal MUST wear a ROYAL GOLD CROWN and a DEEP RED VELVET CAPE. BUT keep the body NATURAL (quadruped/sitting).";
        }

        // --- PROMPT DIRECTOR ---
        const masterPrompt = `
        You are a Master Painter composing a group portrait.
        **CRITICAL: INCLUDE EVERY SINGLE SUBJECT.**
        
        **SCENARIO A: HUMANS + ANIMALS**
        * Humans: ${humanCostume}
        * Animals: ${animalInstruction}

        **SCENARIO B: ONLY ANIMALS**
        * Animals are Absolute Monarchs.
        * ${style === 'barroco' ? 'Give them a GOLD CROWN and RED CAPE.' : 'NO HUMANIZATION.'}
        
        **STYLE:** ${styleEnvironment}
        **FORMAT:** High Resolution, Vertical Portrait.
        `;

        // Generar con IA
        const result = await model.generateContent([ ...imageParts, masterPrompt ]);
        const response = await result.response;
        
        if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
            
            // 2. OBTENER LA IMAGEN BASE64 DE GEMINI
            const rawBase64 = response.candidates[0].content.parts[0].inlineData.data;
            
            // 3. SUBIR A SUPABASE STORAGE
            // Convertimos base64 a buffer (archivo real)
            const buffer = Buffer.from(rawBase64, 'base64');
            // Creamos un nombre único
            const fileName = `art_${Date.now()}_${Math.random().toString(36).substr(2, 9)}.jpg`;

            // Subida al bucket 'generated-art'
            const { data, error } = await supabase
                .storage
                .from('generated-art') // ¡Asegúrate de haber creado este bucket en Supabase!
                .upload(fileName, buffer, {
                    contentType: 'image/jpeg',
                    upsert: false
                });

            if (error) {
                console.error("Error subiendo a Supabase:", error);
                throw error;
            }

            // 4. OBTENER URL PÚBLICA PARA SHOPIFY
            const { data: publicUrlData } = supabase
                .storage
                .from('generated-art')
                .getPublicUrl(fileName);

            const finalUrl = publicUrlData.publicUrl;
            console.log("✅ Imagen guardada y link generado:", finalUrl);

            // 5. DEVOLVER LA URL (LINK) AL WIDGET
            res.json({ success: true, imageUrl: finalUrl });

        } else {
            throw new Error("La IA no generó imagen válida.");
        }

    } catch (error) {
        console.error('⚠️ Error:', error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor listo en puerto ${PORT}`);
});
