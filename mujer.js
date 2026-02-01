// ARCHIVO: mujer.js
// Lógica V90: FIDELIDAD BIOMÉTRICA (Cero cambios de cara) + Smart Framing + 4:5

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. LÓGICA DE ENCUADRE INTELIGENTE ---
    let framingInstruction = "";
    
    if (numSubjects > 1) {
        framingInstruction = "**COMPOSITION RULE:** GROUP SHOT. Use a **Medium Shot (Waist Up)** or **Three-Quarter Shot**. You MUST zoom out enough to include ALL subjects (children/pets) comfortably alongside the main woman.";
    } else {
        framingInstruction = `
        **COMPOSITION RULE:** **BEST AESTHETIC CHOICE.**
        - **Analyze the input:** If the expression is key -> **Close-Up**. If the pose/outfit is strong -> **Medium Shot**.
        - **Goal:** A flatterring, expensive-looking portrait that respects the subject's identity.
        `;
    }

    // --- 2. ESTILOS DE MUSEO ---
    let stylePrompt = "";

    if (style === 'musa') {
        stylePrompt = `
        **STYLE:** **Pre-Raphaelite Masterpiece** (Waterhouse style).
        **TYPE:** 100% Oil on Canvas.
        **SETTING:** Magical Garden, Twilight Lake, or Ancient Balcony.
        **ATTIRE:** Ethereal silk robes, flower crowns. Pastel or Jewel tones.
        **LIGHTING:** **Soft Magical Glow.** Use light to smooth the skin texture, but DO NOT alter the bone structure.
        `;
    } 
    else if (style === 'realeza') {
        stylePrompt = `
        **STYLE:** **Royal Court Portrait** (Winterhalter style).
        **TYPE:** High-finish Oil Painting.
        **SETTING:** Opulent Palace Interior or Bright Balcony.
        **ATTIRE:** Massive Royal Ballgown (Satin/Tulle), Tiara, Diamonds.
        **LIGHTING:** **Luxurious Daylight.** Bright and flattering, keeping facial features sharp and recognizable.
        `;
    } 
    else if (style === 'empoderada') {
        stylePrompt = `
        **STYLE:** **High-Fashion Historical Portrait** (Boldini / Vogue 1920s).
        **TYPE:** Dynamic Oil Painting.
        **SETTING:** Dramatic Studio or Luxurious Interior (Velvet/Gold).
        **ATTIRE:** Structured Power Fashion (Black Velvet, Red Silk, Pearls).
        **LIGHTING:** **Studio Beauty Lighting.** High contrast but flattering. Sculpt the face she HAS, do not invent a new one.
        `;
    }

    // --- 3. PROMPT MAESTRO (CON CANDADO DE IDENTIDAD) ---
    return `
    You are a Master Painter creating a **MUSEUM-QUALITY OIL PAINTING**.

    **🔴 CRITICAL TECHNICAL REQUIREMENT:**
    **ASPECT RATIO:** **VERTICAL 4:5** (Portrait Orientation). DO NOT MAKE IT SQUARE.

    **STEP 1: IDENTITY & FIDELITY (THE MOST IMPORTANT STEP)**
    - Input contains: **${numSubjects} subject(s)**. **PAINT THEM ALL.**
    - **BIOMETRIC FIDELITY:** You must preserve the **EXACT facial structure**, nose shape, eye shape, mouth shape, and jawline of the source photo.
    - **NO PLASTIC SURGERY:** Do NOT "fix" her features to look like a generic model. If she has distinctive features, KEEP THEM. The user must say "That is me!", not "Who is that?".
    - **COSMETIC IMPROVEMENT ONLY:** You may improve **skin texture** (remove blemishes), **lighting** (add glow), and **hair volume**. That is all.

    **STEP 2: COMPOSITION & FRAMING**
    ${framingInstruction}

    **STEP 3: STYLE EXECUTION**
    ${stylePrompt}
    - **TEXTURE:** Realistic Oil Painting.

    **⛔ NEGATIVE CONSTRAINTS:**
    - **DO NOT CHANGE THE FACE STRUCTURE.**
    - **NO GENERIC AI FACES.**
    - NO PICTURE FRAMES, NO BORDERS.
    - NO CARTOON, NO 3D RENDER.
    - NO MISSING PEOPLE OR PETS.
    `;
};
