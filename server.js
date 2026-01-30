const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { createClient } = require('@supabase/supabase-js'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '100mb' })); 

// CONFIGURACIÓN SUPABASE
const supabaseUrl = process.env.SUPABASE_URL; 
const supabaseKey = process.env.SUPABASE_ANON_KEY; 
const supabase = createClient(supabaseUrl, supabaseKey);

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// FUNCIÓN AUXILIAR PARA SUBIR A SUPABASE
async function uploadToSupabase(base64Image, prefix) {
    const cleanBase64 = base64Image.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(cleanBase64, 'base64');
    const fileName = `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}.jpg`;

    const { error } = await supabase
        .storage
        .from('generated-art')
        .upload(fileName, buffer, { contentType: 'image/jpeg' });

    if (error) throw error;

    const { data } = supabase.storage.from('generated-art').getPublicUrl(fileName);
    return data.publicUrl;
}

app.post('/generate', async (req, res) => {
    try {
        const { images, style } = req.body;
        console.log(`🎨 Procesando ${images.length} imagenes. Estilo: ${style}`);

        // 1. SUBIR FOTOS ORIGINALES A SUPABASE (AUDITORÍA)
        // Usamos Promise.all para subirlas todas en paralelo
        const originalUrls = await Promise.all(
            images.map((img, index) => uploadToSupabase(img, `original_${index + 1}`))
        );
        console.log("✅ Fotos originales guardadas:", originalUrls);

        // 2. GENERAR CON GEMINI
        const model = genAI.getGenerativeModel({ model: "gemini-3-pro-image-preview" });
        
        const imageParts = images.map(img => ({
            inlineData: {
                data: img.replace(/^data:image\/\w+;base64,/, ""),
                mimeType: "image/jpeg"
            }
        }));

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

        const result = await model.generateContent([ ...imageParts, masterPrompt ]);
        const response = await result.response;
        
        if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
            
            // 3. SUBIR OBRA MAESTRA A SUPABASE
            const rawBase64 = response.candidates[0].content.parts[0].inlineData.data;
            const finalUrl = await uploadToSupabase(rawBase64, 'MASTERPIECE');
            
            console.log("✅ Obra Maestra guardada:", finalUrl);

            // 4. DEVOLVER TODO AL FRONTEND (Link Final + Links Originales)
            res.json({ 
                success: true, 
                imageUrl: finalUrl,
                originalUrls: originalUrls // <--- Aquí enviamos la lista de originales
            });

        } else {
            throw new Error("La IA no generó imagen válida.");
        }

    } catch (error) {
        console.error('⚠️ Error:', error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V34 (Auditoría Completa) listo en puerto ${PORT}`);
});
