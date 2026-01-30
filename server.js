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
        const { images, style, category } = req.body;
        const numSubjects = images.length;
        const isGroup = numSubjects > 1;

        // Default a mascota si no se especifica
        const currentCategory = category || 'mascota'; 

        console.log(`🎨 V67 (FAMILY HIERARCHY FIX). Cat: ${currentCategory} | Estilo: ${style} | Sujetos: ${numSubjects}`);

        const originalUrls = await Promise.all(images.map(async (img, i) => {
            const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            return await uploadBufferToSupabase(buffer, `ref_${i}`);
        }));

        const model = genAI.getGenerativeModel({ model: MODEL_ID });

        let promptStyle = "";
        // Variable para permitir que el Barroco tenga un encuadre diferente
        let framingOverride = ""; 
        
        // ==========================================================================================
        // 👨‍👩‍👧‍👦 LÓGICA MÓDULO FAMILIA (MEJORADO V67)
        // ==========================================================================================
        if (currentCategory === 'familia') {
            
            // BASE COMÚN CON JERARQUÍA Y ROLES DEFINIDOS
            const familyBase = `
            **SUBJECTS:** A cohesive historical FAMILY Group Portrait.
            
            **HIERARCHY & AGE ROLES (CRITICAL):**
            - Analyze ages intelligently to assign roles.
            - **ADULT MEN (Fathers/Patriarchs):** Must appear **powerful, masculine, and dominant**. Strong, upright posture, commanding presence. They are the clear head of the family composition.
            - **ADULT WOMEN (Mothers/Matriarchs):** Graceful, maternal, often seated centrally.
            - **TEENAGERS:** Distinctly youthful, not adults. They stand near parents but **do not assume parental authority poses**.
            - **BABIES & TODDLERS:** **MUST be held securely in the arms of an adult** (usually the mother or grandmother). They should not be placed alone on furniture.

            **INTERACTION:** Strong family bonds. Men standing protectively over seated women/children. Gentle hands on shoulders. Parents holding babies firmly.
            **PETS:** If present, beloved family member at feet or on a lap.
            **FACES:** Keep exact likeness of all subjects.
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
                **VIBE:** Dramatic, Intense, Painterly, Deep shadows, serious mood.
                **ATTIRE:** Rich dark velvets, stiff ruffs, heavy brocades.
                **SETTING:** Dark, atmospheric oak-paneled interior.
                **LIGHTING:** Strong Chiaroscuro (dramatic contrast).
                `;
                // CAMBIO 4: ENCUADRE MÁS CERCANO PARA BARROCO
                framingOverride = "**FRAMING:** **Medium Shot (Waist Up).** Tighter framing to emphasize dramatic facial expressions, textures, and the intense bond. Closer than usual portraits.";
            }
        } 
        
        // ==========================================================================================
        // 🐶 LÓGICA MÓDULO MASCOTAS (CLÁSICO)
        // ==========================================================================================
        else {
            const identityInstruction = isGroup
                ? `Capture the unique characteristics and likeness of **EVERY SINGLE ONE of the ${numSubjects} SUBJECTS**.`
                : "Capture the unique characteristics and overall likeness of the subject.";

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
            } else if (style === 'rey') {
                promptStyle = `
                **STYLE:** High Renaissance & Baroque Royal Coronation. VIBE: Majestic, Gold-drenched.
                **1. IDENTITY:** ${identityInstruction}
                **2. HANDLING:**
                - **PETS:** Gilded royal dais. Royal velvet mantles with ermine.
                - **HUMANS:** **Imperial Crown MANDATORY**. Coronation robes, scepter, orb.
                **3. SETTING:** Throne Room. Bright glorious light.
                `;
            } else if (style === 'barroco') {
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

        // DEFINIR EL ENCUADRE FINAL (Usar el override si existe, si no, el default)
        const defaultFraming = "**FRAMING:** **Three-Quarter Shot (Knees Up or Full Seated Body).** Open the frame to show attire and interaction. Do NOT crop too tight.";
        const finalFramingInstruction = framingOverride || defaultFraming;

        const masterPrompt = `
        You are a Master Painter creating a museum-quality oil painting.
        **INSTRUCTIONS:**
        1. Analyze the ${numSubjects} input image(s).
        2. Create a cohesive composition applying the rules below.
        3. Apply a rich oil painting texture.
        
        ${promptStyle}
        
        **CRITICAL TECHNICAL SPECS:**
        **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
        ${finalFramingInstruction}

        **NEGATIVE CONSTRAINTS (WHAT NOT TO DRAW):**
        - **DO NOT INCLUDE A PICTURE FRAME.** The image must be the painting itself, edge-to-edge canvas, with NO external border, mount, or gold frame generated around it.
        `;
        
        const imageParts = images.map(img => ({ inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }}));
        
        const result = await model.generateContent([ ...imageParts, masterPrompt ]);
        const response = await result.response;
        
        if (!response.candidates || !response.candidates[0].content) throw new Error("Fallo en generación.");

        const base64Gemini = response.candidates[0].content.parts[0].inlineData.data;
        const imageBuffer = Buffer.from(base64Gemini, 'base64');
        const finalUrl = await uploadBufferToSupabase(imageBuffer, `MASTER_V67_${currentCategory.toUpperCase()}`);
        
        console.log("✅ Resultado V67:", finalUrl);
        res.json({ success: true, imageUrl: finalUrl, originalUrls: originalUrls });

    } catch (error) {
        console.error('⚠️ ERROR:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V67 (Familia: Jerarquía Masculina + Bebés en brazos + Barroco Cercano) listo en ${PORT}`);
});
