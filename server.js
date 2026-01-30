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
// Usamos el Modelo Supremo (Nano Banana Pro / Gemini 3)
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const MODEL_ID = "gemini-3-pro-image-preview";

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
        console.log(`🎨 V56 (PRESENCIA Y 4:5). Estilo: ${style} | Modelo: ${MODEL_ID}`);

        const originalUrls = await Promise.all(images.map(async (img, i) => {
            const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            return await uploadBufferToSupabase(buffer, `ref_${i}`);
        }));

        const model = genAI.getGenerativeModel({ model: MODEL_ID });

        let promptStyle = "";

        // --- ESTILO 1: RENACIMIENTO (VERSIÓN FINAL CON PRESENCIA) ---
        if (style === 'renacimiento') {
            promptStyle = `
            **STYLE:** 17th Century Dutch/Flemish Baroque Oil Painting (Titian/Van Dyck style).

            **COMPOSITION GOAL:** A powerful, closer-cropped noble portrait with dramatic lighting.

            **1. THE SUBJECT (IDENTITY LOCK):**
            - Capture the unique characteristics and overall likeness of the subject from the input photo, including key features like fur color and patterns, eye shape and color, breed-specific traits, markings, and body proportions.
Maintain a strong resemblance to the original subject to make it recognizable as the same pet/person, but allow for artistic variations in facial expression, pose, and subtle details to fit the Renaissance style.

            **2. THE POSE & SETTING (CLOSER FRAMING):**
            - **POSE:** The animal is sitting or lying regally.
            - **FRAMING ADAPTATION:** Since the shot is closer, focus on the subject resting on the *top part* of a massive, luxurious antique velvet cushion. We see less floor, more subject.
            - **VARIETY RULE (CUSHION COLOR):** The AI must choose a different rich historical color for the cushion in every generation (e.g., forest green, deep blue, old gold, crimson).
            - **BACKGROUND:** The clean, uncluttered, textured plaster wall in neutral, deep tones is closer behind the subject, creating depth.

            **3. THE "ROPITA" (NOBLE DRAPERY - More prominent now):**
            Dress the subject in full Renaissance noble finery adapted for a majestic pet/person: heavy layered drapery, rich velvet mantles cascading over the shoulders and back for royal prestige. Place one or several necklaces loaded with jewels—pearls, rubies, emeralds, and gold—adding pendants, chains, or brooches to provide extra sparkle and a sense of grandeur.

Use heavy fabrics: deep crimson velvet, midnight-blue brocade, emerald green with metallic threads, black with golden accents—mix textures to add depth (the sheen of velvet vs. the matte of brocade vs. glossy satin).

Include subtle royal accessories such as a small crown, jeweled headpiece, or a gem-studded feather if it fits naturally into the composition.

Emphasize pomp and variety: make the attire feel extravagant, with multiple layers and an extremely rich level of detail to enhance the “noble portrait” quality, especially visible in close-up shots.
 
            
            **4. LIGHTING (DRAMATIC CHIAROSCURO):**
            - Strong, dramatic light from the upper left, spotlighting the face and textures, letting the background fall into rich shadow.
            `;
        } 
        // --- OTROS ESTILOS (Pendientes) ---
        else if (style === 'rey') {
            promptStyle = `**STYLE:** Northern Renaissance Royal Portrait. **IDENTITY:** Keep exact face. **COMPOSITION:** Dignified sitting pose on a throne-like chair. Soft, bright light.`;
        } 
        else if (style === 'barroco') {
             promptStyle = `**STYLE:** High Baroque Opulence. **IDENTITY:** Keep exact face. **COMPOSITION:** Dramatic pose with GOLD CROWN and RED CAPE.`;
        }

        const masterPrompt = `
        You are a Master Painter creating a museum-quality oil portrait.
        **INSTRUCTIONS:**
        1. Take the subject's head/face from the image and paint it exactly as it is (Identity Lock).
        2. Create the specific composition described below.
        3. Apply a rich oil painting texture.
        
        ${promptStyle}
        
        **CRITICAL TECHNICAL SPECS:**
        **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
        **FRAMING:** Medium Close-Up (Chest Up). Fill the frame with the subject to create presence and importance.
        `;
        
        const imageParts = images.map(img => ({ inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }}));
        
        const result = await model.generateContent([ ...imageParts, masterPrompt ]);
        const response = await result.response;
        
        if (!response.candidates || !response.candidates[0].content) throw new Error("Fallo en generación.");

        const base64Gemini = response.candidates[0].content.parts[0].inlineData.data;
        const imageBuffer = Buffer.from(base64Gemini, 'base64');
        const finalUrl = await uploadBufferToSupabase(imageBuffer, 'MASTER_V56_4x5_PRESENCE');
        
        console.log("✅ Resultado V56 (4:5):", finalUrl);
        res.json({ success: true, imageUrl: finalUrl, originalUrls: originalUrls });

    } catch (error) {
        console.error('⚠️ ERROR:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V56 (Presencia y Formato 4:5) listo en ${PORT}`);
});





