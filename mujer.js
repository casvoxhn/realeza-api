// ARCHIVO: mujer.js
// Lógica V88: FORMATO 4:5 FORZADO AL INICIO + Encuadre Inteligente + Variedad

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. LÓGICA DE ENCUADRE INTELIGENTE ---
    let framingInstruction = "";
    
    if (numSubjects > 1) {
        framingInstruction = "**FRAMING PRIORITY:** COMPOSITION SAFETY. Use a **Medium Shot (Waist Up) or Three-Quarter Shot**. You MUST zoom out enough to include ALL subjects (children/pets) comfortably alongside the main woman within the vertical frame.";
    } else {
        framingInstruction = `
        **FRAMING PRIORITY:** **SMART AESTHETIC DECISION (VERTICAL).**
        - **Analyze the input pose:** If she has a strong posture or outfit, use a **Medium Shot** or **Three-Quarter Shot**.
        - **Analyze the face:** If the expression is key, use a **Close-Up Portrait**.
        - **DO NOT BE RIGID.** Choose the angle that makes her look most beautiful in this style.
        - **CRITICAL:** Even in wider shots, the face must be detailed and high quality.
        `;
    }

    // --- 2. ESTILOS DE MUSEO ---
    let stylePrompt = "";

    if (style === 'musa') {
        stylePrompt = `
        **STYLE:** **Pre-Raphaelite Masterpiece** (Waterhouse / Rossetti). Oil on Canvas.
        **ATMOSPHERE:** A magical, romantic setting (Lakeside, Balcony, Forest, or Garden).
        **ATTIRE:** Flowing silk robes, soft textures, pastel or deep jewel tones.
        **LIGHTING:** Soft, magical glow. Ethereal.
        `;
    } 
    else if (style === 'realeza') {
        stylePrompt = `
        **STYLE:** **Grand Manner Royal Portrait** (Winterhalter). Oil on Canvas.
        **ATMOSPHERE:** A bright, opulent palace interior or balcony.
        **ATTIRE:** Pompous Royal Ballgown. Sparkling Tiara.
        **LIGHTING:** Bright, sparkling daylight showing wealth and status.
        `;
    } 
    else if (style === 'empoderada') {
        stylePrompt = `
        **STYLE:** **High-Fashion Historical Drama** (Boldini / Vogue 1920s). Oil on Canvas.
        **ATMOSPHERE:** Luxurious theatrical background (Velvet, Abstract dark tones).
        **ATTIRE:** Structured, powerful fashion. Black velvet, pearls, dramatic silhouettes.
        **LIGHTING:** Dramatic Studio Lighting. High contrast and confident.
        `;
    }

    // --- 3. PROMPT FINAL (CON FORMATO 4:5 PRIORITARIO) ---
    return `
    You are a Master Painter creating a **MUSEUM-QUALITY OIL PAINTING**.

    **CRITICAL TECHNICAL REQUIREMENT (MUST FOLLOW):**
    **ASPECT RATIO:** **VERTICAL 4:5 PORTRAIT (4 parts width, 5 parts height).** DO NOT CREATE A SQUARE IMAGE.

    **STEP 1: SUBJECT FIDELITY & COUNT**
    - Input: **${numSubjects} subject(s)**. **PAINT THEM ALL.**
    - **IDENTITY LOCK:** Keep the exact facial structure. Beautify via lighting, not plastic surgery.

    **STEP 2: SMART COMPOSITION**
    - **DECIDE THE BEST VERTICAL FRAMING** based on the input pose and style.
    ${framingInstruction}

    **STEP 3: STYLE EXECUTION**
    - **MEDIUM:** 100% OIL ON CANVAS. Realistic texture.
    ${stylePrompt}

    **NEGATIVE CONSTRAINTS:**
    - **NO SQUARE FORMAT, NO 1:1 ASPECT RATIO.**
    - **NO PICTURE FRAMES, NO BORDERS.**
    - **NO CARTOON, NO 3D, NO ANIME.**
    - No missing people/pets.
    - No distorted faces.
    `;
};
