const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '100mb' }));

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function uploadBufferToSupabase(buffer, prefix) {
    const fileName = `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}.jpg`;
    const { error } = await supabase.storage.from('generated-art').upload(fileName, buffer, { contentType: 'image/jpeg' });
    if (error) throw error;
    const { data } = supabase.storage.from('generated-art').getPublicUrl(fileName);
    return data.publicUrl;
}

app.post('/generate', async (req, res) => {
    try {
        const { images, style } = req.body;
        // LOG PARA CONFIRMAR QUE USAMOS EL MODELO CORRECTO
        const MODEL_ID = "gemini-3-pro-image-preview"; 
        console.log(`🎨 INICIANDO NANO BANANA PRO (${MODEL_ID}). Estilo: ${style}`);

        // 1. SUBIR REFERENCIAS
        const originalUrls = await Promise.all(images.map(async (img, i) => {
            const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            return await uploadBufferToSupabase(buffer, `ref_${i}`);
        }));

        // 2. CONEXIÓN AL MODELO SUPREMO
        // Usamos exactamente el ID de tu captura
        const model = genAI.getGenerativeModel({ model: MODEL_ID });

        let promptStyle = "";
        // TUS REGLAS DE ESTILO + CALIDAD MUSEO
        if (style === 'rey') {
            promptStyle = `
            **STYLE:** Northern Renaissance (Holbein).
            **OUTFIT:** Royal velvet robes, fur collar.
            **RULE:** Keep animal's face realistic. NO human skin.
            **VIBE:** Majestic, museum lighting.
            `;
        } else if (style === 'renacimiento') {
            promptStyle = `
            **STYLE:** Baroque Oil Painting (Rembrandt).
            **OUTFIT:** Dark historical clothing (black doublet, ruff).
            **RULE:** Dramatic lighting (chiaroscuro). Natural animal pose.
            **VIBE:** Soulful, master painter technique.
            `;
        } else if (style === 'barroco') {
            promptStyle = `
            **STYLE:** High Baroque Opulence (Rigaud).
            **OUTFIT:** Massive GOLD CROWN and RED VELVET CAPE.
            **RULE:** Animal looks like a wealthy King/Queen.
            **VIBE:** Gold sparkles, dark expensive background.
            `;
        }

        const masterPrompt = `
        Generate a state-of-the-art photorealistic oil painting.
        **MODEL:** Use full Gemini 3 capabilities for texture and lighting.
        **INPUT:** Use the provided image for the Subject's Identity.
        **INSTRUCTION:** Paint the subject into this setting: ${promptStyle}
        **FORMAT:** Vertical Portrait. 
        **QUALITY:** Ultra-high resolution, visible brushstrokes.
        `;
        
        const imageParts = images.map(img => ({ inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }}));
        
        const result = await model.generateContent([ ...imageParts, masterPrompt ]);
        const response = await result.response;
        
        if (!response.candidates || !response.candidates[0].content) {
             throw new Error("El modelo Gemini 3 no devolvió datos.");
        }

        const base64Gemini = response.candidates[0].content.parts[0].inlineData.data;
        const imageBuffer = Buffer.from(base64Gemini, 'base64');
        
        // 3. SUBIR RESULTADO
        const finalUrl = await uploadBufferToSupabase(imageBuffer, 'MASTER_GEMINI3');
        
        console.log("✅ ÉXITO CON NANO BANANA:", finalUrl);

        res.json({ success: true, imageUrl: finalUrl, originalUrls: originalUrls });

    } catch (error) {
        console.error('⚠️ ERROR NANO BANANA:', error);
        
        // Si falla por permisos (404/403), el log nos dirá por qué.
        // Posible causa: Tu API Key necesita tener facturación habilitada para usar este modelo "Paid".
        res.status(500).json({ 
            success: false, 
            error: error.message || "Error al conectar con Gemini 3 Pro." 
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V47 (Nano Banana Pro / Gemini 3) listo en puerto ${PORT}`);
});
