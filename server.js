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
        // AHORA RECIBIMOS "CATEGORY"
        const { images, style, category } = req.body;
        const numSubjects = images.length;
        const isGroup = numSubjects > 1;
        const isLargeGroup = numSubjects > 2;

        // Default a mascota si no se especifica
        const currentCategory = category || 'mascota'; 

        console.log(`🎨 V66 (MULTI-MODULE). Cat: ${currentCategory} | Estilo: ${style} | Sujetos: ${numSubjects}`);

        const originalUrls = await Promise.all(images.map(async (img, i) => {
            const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            return await uploadBufferToSupabase(buffer, `ref_${i}`);
        }));

        const model = genAI.getGenerativeModel({ model: MODEL_ID });

        let promptStyle = "";
        
        // ==========================================================================================
        // 👨‍👩‍👧‍👦 LÓGICA MÓDULO FAMILIA (NUEVO)
        // ==========================================================================================
        if (currentCategory === 'familia') {
            
            const familyBase = `
            **SUBJECTS:** A cohesive FAMILY Group Portrait.
            **INTERACTION:** The subjects must look connected. Use visual language of family bonds: gentle hands on shoulders, parents holding babies, siblings leaning towards each other, or sitting close.
            **PETS:** If a pet is present, it is a beloved family member. Place it at the feet, on a lap, or sitting faithfully beside the humans.
            **FACES:** Keep the exact likeness of all humans and pets.
            `;

            if (style === 'renacimiento') {
                promptStyle = `
                ${familyBase}
                **STYLE:** 19th Century Romantic Portrait / Neoclassical (Ingres, Winterhalter, Sargent).
                **VIBE:** Elegant, Soft, Aristocratic, Sentimental.
                **ATTIRE:** - **Men:** Fine tailcoats, cravats, waistcoats (Regency/Victorian style).
                - **Women:** Elegant silk or satin gowns (Empire waist or Victorian), lace details, shawls.
                - **Children:** Velvet suits for boys, white muslin dresses for girls.
                **SETTING:** A drawing room with a view of a garden, or a landscaped park with classical ruins.
                **LIGHTING:** Soft, diffused natural daylight.
                `;
            } else if (style === 'rey') {
                promptStyle = `
                ${familyBase}
                **STYLE:** Royal Family Coronation Portrait.
                **VIBE:** Majestic, Powerful, The Ruling Dynasty.
                **ATTIRE:** - **MANDATORY:** **Crowns or Tiaras** for adult humans.
                - **Clothing:** Heavy coronation robes, ermine fur, sashes of knighthood, military uniforms for men, excessive jewelry.
                **SETTING:** The Throne Room or a Palace Balcony with red velvet drapes.
                **LIGHTING:** Bright, golden, glorious light.
                `;
            } else if (style === 'barroco') {
                promptStyle = `
                ${familyBase}
                **STYLE:** High Baroque / Dutch Golden Age (Rembrandt/Velázquez).
                **VIBE:** Dramatic, Intense, Painterly, "The Godfather" of historical portraits.
                **ATTIRE:** dark velvets, stiff lace collars (ruffs), rich black/gold/red fabrics.
                **SETTING:** Dark atmospheric interior, shadowy background.
                **LIGHTING:** Strong Chiaroscuro (Contrast between light faces and dark background).
                `;
            }
        } 
        
        // ==========================================================================================
        // 🐶 LÓGICA MÓDULO MASCOTAS (EL CLÁSICO V65)
        // ==========================================================================================
        else {
            const identityInstruction = isGroup
                ? `Capture the unique characteristics and likeness of **EVERY SINGLE ONE of the ${numSubjects} SUBJECTS**.`
                : "Capture the unique characteristics and overall likeness of the subject.";

            // --- RENACIMIENTO (MASCOTAS) ---
            if (style === 'renacimiento') {
                promptStyle = `
                **STYLE:** 18th/19th Century Romantic Royal Portrait. VIBE: Luxurious, Soft.
                **1. IDENTITY:** ${identityInstruction}
                **2. HANDLING:**
                - **PETS:** Reclining on antique velvet cushion. Mantle draped open at front (V-shape). Jeweled clasp.
                - **HUMANS:** Royal Gowns/Robes (Blue/Emerald/Gold). Seated gracefully.
                - **GROUP:** Family portrait, human anchored, pets around.
                **3. SETTING:** Palace interior, soft lighting.
                `;
            } 
            // --- REY (MASCOTAS) ---
            else if (style === 'rey') {
                promptStyle = `
                **STYLE:** High Renaissance & Baroque Royal Coronation. VIBE: Majestic, Gold-drenched.
                **1. IDENTITY:** ${identityInstruction}
                **2. HANDLING:**
                - **PETS:** Gilded royal dais. Royal velvet mantles with ermine.
                - **HUMANS:** **Imperial Crown MANDATORY**. Coronation robes, scepter, orb.
                **3. SETTING:** Throne Room. Bright glorious light.
                `;
            } 
            // --- BARROCO (MASCOTAS) ---
            else if (style === 'barroco') {
                 promptStyle = `
                **STYLE:** High Baroque Opulence. VIBE: Dramatic, "More is More".
                **1. IDENTITY:** ${identityInstruction}
                **2. HANDLING:**
                - **PETS:** **Gold Crown MANDATORY**. Deep Red/Black Velvet Capes.
                - **HUMANS:** Gold Baroque Crowns. Red/Black velvet drapes. Theatrical pose.
                **3. SETTING:** Dark palace, Chiaroscuro lighting.
                `;
            }
        }

        const masterPrompt = `
        You are a Master Painter creating a museum-quality oil painting.
        **INSTRUCTIONS:**
        1. Analyze the ${numSubjects} input image(s).
        2. Create a cohesive composition applying the rules below.
        3. Apply a rich oil painting texture.
        
        ${promptStyle}
        
        **CRITICAL TECHNICAL SPECS:**
        **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
        **FRAMING:** **Three-Quarter Shot (Knees Up or Full Seated Body).** Open the frame to show attire and interaction. Do NOT crop too tight.

        **NEGATIVE CONSTRAINTS (WHAT NOT TO DRAW):**
        - **DO NOT INCLUDE A PICTURE FRAME.** The image must be the painting itself, edge-to-edge canvas, with NO external border, mount, or gold frame generated around it.
        `;
        
        const imageParts = images.map(img => ({ inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }}));
        
        const result = await model.generateContent([ ...imageParts, masterPrompt ]);
        const response = await result.response;
        
        if (!response.candidates || !response.candidates[0].content) throw new Error("Fallo en generación.");

        const base64Gemini = response.candidates[0].content.parts[0].inlineData.data;
        const imageBuffer = Buffer.from(base64Gemini, 'base64');
        const finalUrl = await uploadBufferToSupabase(imageBuffer, `MASTER_V66_${currentCategory.toUpperCase()}`);
        
        console.log("✅ Resultado V66:", finalUrl);
        res.json({ success: true, imageUrl: finalUrl, originalUrls: originalUrls });

    } catch (error) {
        console.error('⚠️ ERROR:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V66 (Multi-Módulo: Familia + Mascotas) listo en ${PORT}`);
});
