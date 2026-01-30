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

        console.log(`🎨 V64 (ESTILO SURREALISM/ROMÁNTICO). Estilo: ${style} | Sujetos: ${numSubjects}`);

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

        // --- ESTILO 1: RENACIMIENTO (AHORA CON "VIBE" ROMÁNTICO/SURREALISTA) ---
        if (style === 'renacimiento') {
            promptStyle = `
            **STYLE:** 18th/19th Century Romantic Royal Portrait (Winterhalter/Sargent style).
            **VIBE:** Luxurious, Soft, Elegant, Majestic.

            **1. IDENTITY (CRITICAL):**
            - ${identityInstruction}
            - Maintain exact facial features for humans. Maintain exact breed/markings for pets.

            **2. INTELLIGENT SUBJECT HANDLING (THE NEW RULES):**

            --- **IF SUBJECT IS A PET (Dog, Cat, etc.):** ---
            - **POSE:** Reclining or sitting regally on a massive antique velvet cushion.
            - **ATTIRE:** Heavy brocade mantle/capelet **draped open at the front** (V-shape) to reveal neck fur.
            - **FASTENING:** Connected by an opulent jeweled clasp/chain across the chest.

            --- **IF SUBJECT IS A HUMAN (THE FIX):** ---
            - **POSE:** Seated gracefully on a luxurious sofa, throne, or standing elegantly.
            - **ATTIRE (GOWNS NOT BLACK):** Use **Opulent Royal Gowns/Robes**.
                - **Colors:** Royal Blue, Deep Emerald, Rich Burgundy, Gold, or Rose. **AVOID PLAIN BLACK.**
                - **Style:** Off-shoulder or lace necklines, silk fabrics, ermine trim. **NO STIFF RUFFS.**
                - **Vibe:** A queen or princess in her palace.

            --- **IF MIXED GROUP (Humans + Pets) - THE SURREALISM STYLE:** ---
            - **COMPOSITION:** A wider "Family Portrait" scene.
            - **ARRANGEMENT:** The Human is the center anchor (seated on a sofa/throne).
            - **PET PLACEMENT:** The pets are arranged naturally around the human:
                - Sitting on the human's lap.
                - Sitting on the floor at the human's feet (on a rug).
                - Sitting on a velvet stool beside the human.
            - **INTERACTION:** Gentle touching (hand on the pet) or close proximity.

            **3. SETTING & LIGHTING:**
            - **BACKGROUND:** A palace interior with depth (drapery, columns, or a painted landscape in the distance).
            - **LIGHTING:** Soft, flattering, golden-hour museum light. Not too dark.
            `;
        } 
        // (Otros estilos pendientes)
        // --- ESTILO 2: REY / REINA (OPULENCIA REAL) ---
        else if (style === 'rey') {
            promptStyle = `
            **STYLE:** High Renaissance & Baroque Royal Coronation Portrait.
            **VIBE:** Majestic, Opulent, Imposing, Luxurious, Gold-drenched. Think Henry VIII or Elizabeth I coronation splendor.

            **1. IDENTITY (CRITICAL):**
            - ${identityInstruction}
            - Maintain exact facial features for humans and breed/markings for pets. Expression should be dignified and commanding.

            **2. INTELLIGENT SUBJECT HANDLING (THE ROYAL RULES):**

            --- **IF SUBJECT IS A PET:** ---
            - **POSE:** Reclining regally on a **gilded royal dais or a cushion with heavy gold tassels and embroidery**.
            - **ATTIRE:** Deep royal velvet mantles (Purple, Crimson, Royal Blue) trimmed with **white ermine fur with black spots** (the fur of royalty).
            - **FASTENING:** Massive, imposing jeweled clasps featuring motifs like crowns or lions.

            --- **IF SUBJECT IS A HUMAN:** ---
            - **POSE:** Seated imposingly on a **Golden Throne** under a velvet canopy, or standing with absolute authority holding royal regalia.
            - **ATTIRE (MANDATORY CROWNS):**
                - **HEAD:** A grand, jeweled **Imperial Crown** is MUST for every human subject.
                - **BODY:** Heavily embroidered coronation robes, layers of goldwork, massive ermine collars, heavy gold chains. Holding a **scepter and orb** is encouraged.
                - **COLORS:** Royal Purple, Deep Crimson Red, Heavy Gold.

            --- **IF MIXED GROUP (The Royal House):** ---
            - **COMPOSITION:** A formal Royal Family portrait.
            - **ARRANGEMENT:** The Human Monarch sits on the throne as the centerpiece.
            - **PET PLACEMENT:** The pets are positioned at the foot of the throne on velvet cushions, acting as royal guardians, or seated proudly on a velvet-covered pedestal next to the monarch.

            **3. SETTING & LIGHTING:**
            - **BACKGROUND:** Inside a palace Throne Room. Gilded columns, heavy heraldic tapestries, marble floors, grand architecture.
            - **LIGHTING:** Bright, glorious, majestic light that makes gold and jewels sparkle. Less shadowy than the Renacimiento style.
            `;
        }
        // --- ESTILO 3: BARROCO (DRAMA Y LUJO EXTREMO) ---
        else if (style === 'barroco') {
             promptStyle = `
            **STYLE:** High Baroque Opulence & Theatricality (Rubens/Velázquez/Bernini influence).
            **VIBE:** Dramatic, Intense, "More is More", Deep shadows meets blinding gold, Emotional & Grandiose.

            **1. IDENTITY (CRITICAL):**
            - ${identityInstruction}
            - Maintain exact facial features. Expressions should be intense or haughtily noble.

            **2. INTELLIGENT SUBJECT HANDLING (THE DRAMATIC RULES):**

            --- **IF SUBJECT IS A PET:** ---
            - **POSE:** Striking dynamic pose on a dark velvet cushion with gold tassels.
            - **ATTIRE:** **A Gold Crown is MANDATORY.**
            - **CLOTHING:** Flowing **Deep Red or Black Velvet Capes** with massive gold embroidery. The fabric should look heavy and expensive.
            - **DETAILS:** Pearls, rubies, and excessive gold ornamentation.

            --- **IF SUBJECT IS A HUMAN:** ---
            - **POSE:** Dramatic, theatrical stance or seated with overflowing fabric. Not stiff, but commanding.
            - **ATTIRE:**
                - **HEAD:** **Gold Laurel Wreaths or Baroque Crowns**.
                - **BODY:** Armor with gold filigree (for men) or corset gowns with massive hips and lace (for women).
                - **KEY ELEMENT:** A massive **Red or Black velvet drape** flowing around them like a theatrical curtain.

            --- **IF MIXED GROUP (The Baroque Dynasty):** ---
            - **COMPOSITION:** A painting that looks like a scene from an opera.
            - **ARRANGEMENT:** Highly staged. The Human is the dramatic center.
            - **PET PLACEMENT:** The pets are part of the scenery, perhaps one sitting on a table looking at the viewer, another at the feet.
            - **UNIFYING ELEMENT:** All subjects (human and pet) share the same palette of **Deep Red, Gold, and Black**.

            **3. SETTING & LIGHTING:**
            - **BACKGROUND:** Dark, moody palace interiors, heavy curtains, storm clouds in a window, or dark oak shadows.
            - **LIGHTING:** Extreme Chiaroscuro (Caravaggio style) - Deep darkness contrasted with bright golden light hitting the faces and the gold jewelry.
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
        **FRAMING (THE FIX):** **Three-Quarter Shot (Knees Up or Full Seated Body).**
        - Open the frame to show the beautiful dresses and the full arrangement of pets on the floor/lap.
        - Do NOT crop too tight on the face.
        `;
        
        const imageParts = images.map(img => ({ inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }}));
        
        const result = await model.generateContent([ ...imageParts, masterPrompt ]);
        const response = await result.response;
        
        if (!response.candidates || !response.candidates[0].content) throw new Error("Fallo en generación.");

        const base64Gemini = response.candidates[0].content.parts[0].inlineData.data;
        const imageBuffer = Buffer.from(base64Gemini, 'base64');
        const finalUrl = await uploadBufferToSupabase(imageBuffer, 'MASTER_V64_SURREALISM_STYLE');
        
        console.log("✅ Resultado V64:", finalUrl);
        res.json({ success: true, imageUrl: finalUrl, originalUrls: originalUrls });

    } catch (error) {
        console.error('⚠️ ERROR:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V64 (Estilo Surrealism/Romántico) listo en ${PORT}`);
});


