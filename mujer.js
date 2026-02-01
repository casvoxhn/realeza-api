// ARCHIVO: mujer.js
// V89 FINAL: Formato 4:5 + Identidad Blindada + Encuadre Inteligente + Texturas Reales

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. LÓGICA DE ENCUADRE INTELIGENTE (Smart Framing) ---
    // El objetivo es que la IA decida la mejor composición para VENDER la imagen.
    let framingInstruction = "";
    
    if (numSubjects > 1) {
        // GRUPOS (Seguridad): Alejar para que todos quepan.
        framingInstruction = "**COMPOSITION RULE:** GROUP SHOT. Use a **Medium Shot (Waist Up)** or **Three-Quarter Shot**. You MUST zoom out enough to include ALL subjects (children/pets) comfortably alongside the main woman. Create a cohesive family unit.";
    } else {
        // SOLA (Estética): La IA elige lo que mejor se vea.
        framingInstruction = `
        **COMPOSITION RULE:** **BEST AESTHETIC CHOICE.**
        - Look at the subject's pose and the style features.
        - **DECIDE:** 1. If the face expression is the key -> **Close-Up Portrait**.
          2. If the outfit/pose is powerful -> **Medium Shot** or **Three-Quarter Shot**.
        - **GOAL:** Make her look like the protagonist of a movie or a queen in a painting.
        `;
    }

    // --- 2. ESTILOS DE MUSEO (Optimizados para Neuromarketing) ---
    let stylePrompt = "";

    if (style === 'musa') {
        // Estilo: Magia, Sueño, Arte.
        stylePrompt = `
        **STYLE:** **Pre-Raphaelite Masterpiece** (Waterhouse / Rossetti style).
        **TYPE:** 100% Oil on Canvas with Sfumato technique (soft edges).
        **VARIETY:** VARY the settings. Could be a Twilight Lakeside, an Ancient Stone Balcony, or a Secret Garden.
        **ATTIRE:** Ethereal, flowing fabrics. Silk, Chiffon, Lace. Colors: Deep Jewel tones OR Soft Pastels (depending on what fits the face best).
        **LIGHTING:** **Magical Glow.** Soft, diffused, flatterring light. No harsh shadows. Porcelain skin effect.
        `;
    } 
    else if (style === 'realeza') {
        // Estilo: Disney, Lujo, Brillo.
        stylePrompt = `
        **STYLE:** **Royal Court Portrait** (Winterhalter / Disney-esque Realism).
        **TYPE:** High-finish Oil Painting. Crisp details on jewelry.
        **ATMOSPHERE:** A bright Palace Ballroom or Royal Terrace with blue sky. Bright and Optimistic.
        **ATTIRE:** **Maximum Opulance.** Pompous Ballgown (Satin/Tulle). Detailed Tiara and Diamond Necklace. Vibrant Colors (Royal Blue, Emerald, Crimson, Gold).
        **LIGHTING:** **Sparkling Daylight.** Bright, frontal lighting that makes eyes and diamonds sparkle.
        `;
    } 
    else if (style === 'empoderada') {
        // Estilo: Vogue 1920, Poder, Ego.
        stylePrompt = `
        **STYLE:** **High-Fashion Historical Portrait** (Giovanni Boldini / Sargent).
        **TYPE:** Dynamic Oil Painting. Bold brushstrokes on clothes, realistic face.
        **ATMOSPHERE:** Luxurious Dramatic Interior. Velvet curtains, Grand Staircase, or Opera Box. Deep colors (Burgundy, Black, Gold).
        **ATTIRE:** **Power Fashion.** Structured Velvet, Silk, Pearls. Form-fitting and elegant.
        **LIGHTING:** **Studio "Butterfly" Lighting.** High contrast but strictly flattering. Sculpted cheekbones, intensity in the eyes.
        `;
    }

    // --- 3. PROMPT MAESTRO (La Orden Final) ---
    return `
    You are a Master Painter (Old Master) creating a **MUSEUM-QUALITY OIL PAINTING**.

    **🔴 CRITICAL TECHNICAL REQUIREMENT:**
    **ASPECT RATIO:** **VERTICAL 4:5** (Portrait Orientation). DO NOT MAKE IT SQUARE.

    **STEP 1: THE SUBJECTS (FIDELITY LOCK)**
    - Input contains: **${numSubjects} subject(s)**.
    - **MANDATORY:** Paint EXACTLY ${numSubjects} subjects. If there is a dog, paint the dog. If there is a child, paint the child.
    - **FACE PRESERVATION:** Keep the **EXACT facial structure** (nose, eyes, jaw) of the source photos. 
    - **BEAUTIFICATION:** Beautify only via **Lighting** (glow), **Skin Texture** (smoothness), and **Hair Volume**. Do NOT change the person's identity.

    **STEP 2: COMPOSITION & FRAMING**
    ${framingInstruction}
    - Ensure the main woman is the visual center of attention (Hierarchy).

    **STEP 3: STYLE EXECUTION**
    ${stylePrompt}
    - **TEXTURE:** Use realistic oil painting textures (Canvas grain, Impasto touches). It must NOT look like a 3D render or a cartoon.

    **⛔ NEGATIVE CONSTRAINTS:**
    - **NO PICTURE FRAMES, NO BORDERS.**
    - **NO CARTOON, NO 3D RENDER, NO ANIME, NO ILLUSTRATION.**
    - NO GREY/DULL SKINTONES.
    - NO MISSING PEOPLE OR PETS.
    - NO DISTORTED FACES/HANDS.
    `;
};
