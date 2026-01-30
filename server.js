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
        const { images, style } = req.body;
        const numSubjects = images.length;
        const isGroup = numSubjects > 1;
        const isLargeGroup = numSubjects > 2;

        console.log(`🎨 V65 (NO FRAMES FIX). Estilo: ${style} | Sujetos: ${numSubjects}`);

        const originalUrls = await Promise.all(images.map(async (img, i) => {
            const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            return await uploadBufferToSupabase(buffer, `ref_${i}`);
        }));

        const model = genAI.getGenerativeModel({ model: MODEL_ID });

        let promptStyle = "";

        // --- VARIABLES DINÁMICAS ---
        const identityInstruction = isGroup
            ? `Capture the unique characteristics and likeness of **EVERY SINGLE ONE of the ${numSubjects} SUBJECTS** (humans and/or animals) provided.`
            : "Capture the unique characteristics and overall likeness of the subject.";

        // --- ESTILO 1: RENACIMIENTO (ROMÁNTICO/ELEGANTE) ---
        if (style === 'renacimiento') {
            promptStyle = `
            **STYLE:** 18th/19th Century Romantic Royal Portrait (Winterhalter/Sargent style).
            **VIBE:** Luxurious, Soft, Elegant, Majestic.

            **1. IDENTITY (CRITICAL):**
            - ${identityInstruction}
            - Maintain exact facial features for humans and breed/markings for pets.

            **2. INTELLIGENT SUBJECT HANDLING:**
            --- **IF SUBJECT IS A PET:** ---
            - **POSE:** Reclining or sitting regally on a massive antique velvet cushion.
            - **ATTIRE:** Heavy brocade mantle/capelet **draped open at the front** (V-shape) to reveal neck fur.
            - **FASTENING:** Connected by an opulent jeweled clasp/chain across the chest.

            --- **IF SUBJECT IS A HUMAN:** ---
            - **POSE:** Seated gracefully on a luxurious sofa, throne, or standing elegantly.
            - **ATTIRE (GOWNS NOT BLACK):** Use **Opulent Royal Gowns/Robes**. Colors: Royal Blue, Deep Emerald, Rich Burgundy, Gold, or Rose.
            - **Vibe:** A queen or princess in her palace.

            --- **IF MIXED GROUP (Humans + Pets):** ---
            - **COMPOSITION:** A wider "Family Portrait" scene. The Human is the anchor. Pets are arranged naturally (lap, feet, stool).

            **3. SETTING & LIGHTING:**
            - **BACKGROUND:** A palace interior with depth (drapery, columns).
            - **LIGHTING:** Soft, flattering, golden-hour museum light.
            `;
        } 
        // --- ESTILO 2: REY / REINA (OPULENCIA REAL) ---
        else if (style === 'rey') {
            promptStyle = `
            **STYLE:** High Renaissance & Baroque Royal Coronation Portrait.
            **VIBE:** Majestic, Opulent, Imposing, Luxurious, Gold-drenched.

            **1. IDENTITY (CRITICAL):**
            - ${identityInstruction}
            - Maintain exact facial features/markings. Expression should be dignified.

            **2. INTELLIGENT SUBJECT HANDLING:**
            --- **IF SUBJECT IS A PET:** ---
            - **POSE:** Reclining on a gilded royal dais or cushion with gold tassels.
            - **ATTIRE:** Deep royal velvet mantles trimmed with ermine fur. Massive jeweled clasps.

            --- **IF SUBJECT IS A HUMAN:** ---
            - **POSE:** Seated imposingly on a Golden Throne under a canopy.
            - **ATTIRE (MANDATORY CROWNS):** A grand **Imperial Crown** is MUST. Heavily embroidered coronation robes, goldwork, ermine collars. Holding scepter and orb. Color palette: Purple, Crimson, Gold.

            --- **IF MIXED GROUP:** ---
            - **COMPOSITION:** Formal Royal Family portrait. Monarch on throne, pets acting as guardians at the feet.

            **3. SETTING & LIGHTING:**
            - **BACKGROUND:** Throne Room. Gilded columns, heraldic tapestries.
            - **LIGHTING:** Bright, glorious, majestic light.
            `;
        } 
        // --- ESTILO 3: BARROCO (DRAMA Y LUJO EXTREMO) ---
        else if (style === 'barroco') {
             promptStyle = `
            **STYLE:** High Baroque Opulence & Theatricality.
            **VIBE:** Dramatic, Intense, "More is More", Deep shadows meets blinding gold.

            **1. IDENTITY (CRITICAL):**
            - ${identityInstruction}
            - Maintain exact facial features. Expressions should be intense or noble.

            **2. INTELLIGENT SUBJECT HANDLING:**
            --- **IF SUBJECT IS A PET:** ---
            - **POSE:** Dynamic pose on a dark velvet cushion.
            - **ATTIRE:** **A Gold Crown is MANDATORY.** Flowing Deep Red or Black Velvet Capes. Excessive gold ornamentation.

            --- **IF SUBJECT IS A HUMAN:** ---
            - **POSE:** Dramatic, theatrical stance or seated with overflowing fabric.
            - **ATTIRE:** **Gold Baroque Crowns**. Armor with gold filigree or corset gowns with massive hips. A massive **Red or Black velvet drape** flowing around them.

            --- **IF MIXED GROUP:** ---
            - **COMPOSITION:** Opera scene. Highly staged. Human is center, pets are part of the scenery. Unifying colors: Deep Red, Gold, Black.

            **3. SETTING & LIGHTING:**
            - **BACKGROUND:** Dark palace interiors, heavy curtains, storm clouds.
            - **LIGHTING:** Extreme Chiaroscuro (Caravaggio style) - Deep darkness vs bright golden light.
            `;
        }

        const masterPrompt = `
        You are a Master Painter creating a museum-quality oil painting.
        **INSTRUCTIONS:**
        1. Analyze the ${numSubjects} input image(s) to determine if they are humans, pets, or a mix.
        2. Create a cohesive composition applying the "INTELLIGENT SUBJECT HANDLING" rules below.
        3. Apply a rich oil painting texture.
        
        ${promptStyle}
        
        **CRITICAL TECHNICAL SPECS:**
        **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
        **FRAMING:** **Three-Quarter Shot (Knees Up or Full Seated Body).** Open the frame to show the beautiful attire and full arrangement. Do NOT crop too tight on the face.

        **NEGATIVE CONSTRAINTS (WHAT NOT TO DRAW):**
        - **DO NOT INCLUDE A PICTURE FRAME.** The image must be the painting itself, edge-to-edge canvas, with NO external border, mount, or gold frame generated around it.
        `;
        
        const imageParts = images.map(img => ({ inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }}));
        
        const result = await model.generateContent([ ...imageParts, masterPrompt ]);
        const response = await result.response;
        
        if (!response.candidates || !response.candidates[0].content) throw new Error("Fallo en generación.");

        const base64Gemini = response.candidates[0].content.parts[0].inlineData.data;
        const imageBuffer = Buffer.from(base64Gemini, 'base64');
        const finalUrl = await uploadBufferToSupabase(imageBuffer, 'MASTER_V65_NO_FRAME');
        
        console.log("✅ Resultado V65:", finalUrl);
        res.json({ success: true, imageUrl: finalUrl, originalUrls: originalUrls });

    } catch (error) {
        console.error('⚠️ ERROR:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V65 (No Frames Fix) listo en ${PORT}`);
});
