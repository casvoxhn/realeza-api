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
        const currentCategory = category || 'mascota'; 

        console.log(`👑 V69 (FIX: POWERFUL REALISTIC KING + CLOSE RENAISSANCE). Cat: ${currentCategory} | Estilo: ${style}`);

        const originalUrls = await Promise.all(images.map(async (img, i) => {
            const buffer = Buffer.from(img.replace(/^data:image\/\w+;base64,/, ""), 'base64');
            return await uploadBufferToSupabase(buffer, `ref_${i}`);
        }));

        const model = genAI.getGenerativeModel({ model: MODEL_ID });
        let promptStyle = "";
        let framingOverride = ""; 
        
        // ==========================================================================================
        // 👨‍👩‍👧‍👦 LÓGICA MÓDULO FAMILIA (V69)
        // ==========================================================================================
        if (currentCategory === 'familia') {
            
            // BASE: IDENTIDAD Y JERARQUÍA
            const familyBase = `
            **IDENTITY (THE MOST CRITICAL INSTRUCTION):** - You MUST maintain the exact facial features and likeness of EVERY person from the input photos. Do NOT generate generic faces.

            **SUBJECTS & HIERARCHY:** A cohesive historical FAMILY Group Portrait.
            - **ADULT MEN (Fathers):** Dominant, masculine, powerful posture. The anchor of the composition.
            - **ADULT WOMEN (Mothers):** Graceful, maternal, often seated.
            - **TEENAGERS:** Youthful, subordinate roles.
            - **BABIES:** MUST be held securely by an adult.

            **INTERACTION:** Strong family bonds. Gentle physical contact appropriate for the era.
            `;

            if (style === 'renacimiento') {
                promptStyle = `
                ${familyBase}
                **STYLE:** 19th Century Romantic Portrait (Neoclassical elegance).
                **VIBE:** Aristocratic, Sophisticated, Sentimental but realistic.
                **ATTIRE:** High-society fashion. Tailcoats for men, elegant silk gowns for women.
                **SETTING:** Drawing room or manor garden.
                **LIGHTING:** Soft, flattering natural light.
                `;
            } else if (style === 'rey') {
                // CAMBIO V69: REY PODEROSO Y REALISTA (NO CARICATURA)
                promptStyle = `
                ${familyBase}
                **STYLE:** **Museum-Quality Hyper-Realistic Oil Painting** of Royal Power (e.g., Velázquez royal portraits).
                **VIBE:** Imposing, Majestic, Serious, Somber Opulence. **Not cartoonish or overly colorful.**
                **THE KING (Man):** Must look **powerful, imposing, and dominant**. A stern, majestic expression. He is the central pillar of power.
                **ATTIRE:** Heavy gold IMPERIAL CROWNS. Deep, rich velvet robes (crimson, navy) with heavy ermine. Recreate the weight and texture of real gold and fur.
                **SETTING:** Grand Palace Throne Room. Dark wood, heavy tapestries.
                **LIGHTING:** Dramatic, directional indoor light (chiaroscuro) emphasizing textures. Not evenly bright.
                `;
            } else if (style === 'barroco') {
                promptStyle = `
                ${familyBase}
                **STYLE:** High Baroque / Dutch Golden Age (Rembrandt).
                **VIBE:** Dramatic, Intense, Painterly, Deep shadows, serious mood.
                **ATTIRE:** Rich dark velvets, stiff ruffs, heavy brocades.
                **SETTING:** Dark, atmospheric interior.
                **LIGHTING:** Strong Chiaroscuro (dramatic contrast).
                `;
            }

            // CAMBIO V69: ENCUADRE MÁS CERCANO PARA BARROCO Y RENACIMIENTO
            if (style === 'barroco' || style === 'renacimiento') {
                 framingOverride = "**FRAMING:** **Medium Shot (Waist Up).** Tighter framing (closer than usual) to emphasize facial likeness, expressions, and family interaction.";
            }
        } 
        
        // ==========================================================================================
        // 🐶 LÓGICA MÓDULO MASCOTAS (CLÁSICO - SIN CAMBIOS)
        // ==========================================================================================
        else {
            const identityInstruction = isGroup
                ? `Capture the unique characteristics and likeness of **EVERY SINGLE ONE of the ${numSubjects} SUBJECTS**.`
                : "Capture the unique characteristics and overall likeness of the subject.";

            if (style === 'renacimiento') {
                promptStyle = `**STYLE:** 18th/19th Century Romantic Royal Portrait. VIBE: Luxurious, Soft. **1. IDENTITY:** ${identityInstruction} **2. HANDLING:** Pets on cushion, humans in gowns. **3. SETTING:** Palace interior, soft light.`;
            } else if (style === 'rey') {
                promptStyle = `**STYLE:** High Renaissance & Baroque Royal Coronation. VIBE: Majestic, Gold-drenched. **1. IDENTITY:** ${identityInstruction} **2. HANDLING:** **Imperial Crown MANDATORY**. Coronation robes. **3. SETTING:** Throne Room. Bright light.`;
            } else if (style === 'barroco') {
                 promptStyle = `**STYLE:** High Baroque Opulence. VIBE: Dramatic. **1. IDENTITY:** ${identityInstruction} **2. HANDLING:** **Gold Crown MANDATORY**. Dark Velvet Capes. **3. SETTING:** Dark palace, Chiaroscuro.`;
            }
        }

        // DEFINIR EL ENCUADRE FINAL
        const defaultFraming = "**FRAMING:** **Three-Quarter Shot (Knees Up or Full Seated Body).** Open the frame to show attire and interaction. Do NOT crop too tight.";
        const finalFramingInstruction = framingOverride || defaultFraming;

        const masterPrompt = `
        You are a Master Painter creating a **museum-quality oil painting**.
        **INSTRUCTIONS:**
        1. Analyze the ${numSubjects} input image(s) focusing on FACIAL IDENTITY.
        2. Create a cohesive composition applying the style rules below.
        3. Apply a rich, realistic oil painting texture.
        
        ${promptStyle}
        
        **CRITICAL TECHNICAL SPECS:**
        **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
        ${finalFramingInstruction}

        **NEGATIVE CONSTRAINTS:**
        - **DO NOT generate generic faces. Likeness is paramount.**
        - DO NOT INCLUDE A PICTURE FRAME around the canvas.
        - (For King style): DO NOT look like a cartoon or fantasy illustration. Must be serious, heavy oil painting.
        `;
        
        const imageParts = images.map(img => ({ inlineData: { data: img.replace(/^data:image\/\w+;base64,/, ""), mimeType: "image/jpeg" }}));
        
        const result = await model.generateContent([ ...imageParts, masterPrompt ]);
        const response = await result.response;
        
        if (!response.candidates || !response.candidates[0].content) throw new Error("Fallo en generación.");

        const base64Gemini = response.candidates[0].content.parts[0].inlineData.data;
        const imageBuffer = Buffer.from(base64Gemini, 'base64');
        const finalUrl = await uploadBufferToSupabase(imageBuffer, `MASTER_V69_${currentCategory.toUpperCase()}`);
        
        console.log(`✅ Resultado V69 (${currentCategory}):`, finalUrl);
        res.json({ success: true, imageUrl: finalUrl, originalUrls: originalUrls });

    } catch (error) {
        console.error('⚠️ ERROR:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor V69 (Fix: Rey Poderoso Realista + Renacimiento Plano Medio) listo en ${PORT}`);
});
