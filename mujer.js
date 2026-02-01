// ARCHIVO: mujer.js
// Lógica V79: PLANOS CERRADOS (CLOSE-UPS), FIDELIDAD EXTREMA Y BELLEZA

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. REGLAS DE ORO: LA CARA LO ES TODO ---
    const baseInstructions = `
    **CRITICAL CORE INSTRUCTIONS FOR FEMALE PORTRAITS:**
    1.  **FACE FOCUS (THE MONEY SHOT):** The face must be the absolute center of attention. Capture the exact likeness but with a "Historical Beauty Filter" (glowing skin, sparkling eyes).
    2.  **EXTREME FEMININITY:** Soft lighting, delicate features, graceful necklines.
    3.  **CLOSE-UP FRAMING:** We want intimate portraits, not full-body scenes.
    4.  **STATUS & LUXURY:** Even in close-ups, use jewelry (earrings, necklaces, tiaras) to show wealth.
    5.  **NO BOOKS/INTELLECTUAL PROPS:** Use fans, flowers, jewelry, or mirrors instead.
    `;

    let promptStyle = "";
    let framingOverride = "";

    // --- ESTILO 1: LA MUSA (Primer Plano Etéreo) ---
    // Objetivo: Cara de ángel, flores en el pelo, mirada soñadora.
    if (style === 'musa') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** Pre-Raphaelite / Romanticism Close-Up (Waterhouse style).
        **SETTING:** Soft background of blurred roses or golden light (Bokeh).
        **ATTIRE:** Delicate neckline. Sheer silk or lace that looks soft against the skin. A flower crown or jewels woven into loose, wavy hair.
        **POSE:** **Head and Shoulders Portrait.** Face slightly tilted, lips slightly parted (breathless beauty). Maybe a delicate hand touching a flower near the face.
        **LIGHTING:** **Heavenly Glow.** Soft, diffused light that makes the eyes sparkle and skin look flawless/porcelain.
        `;
        framingOverride = "**FRAMING:** Close-Up (Head & Shoulders). The face and hair fill the frame.";
    } 
    
    // --- ESTILO 2: LA REINA (Busto Real - Joyas y Corona) ---
    // Objetivo: La corona y la cara. Poder y riqueza en primer plano.
    else if (style === 'realeza') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** Winterhalter / Royal Portrait (Bust).
        **SETTING:** Blurred palace background (gold and red blurry tones).
        **ATTIRE:** A majestic diamond tiara (essential) and a massive statement necklace. Rich satin neckline (Royal Blue or Ruby Red). Heavy earrings.
        **POSE:** **Royal Bust Portrait.** Chin up, proud, looking down slightly or directly at the viewer with absolute confidence.
        **LIGHTING:** **Studio Glamour.** Bright, crisp light that makes the diamonds in the tiara and necklace blind the viewer with sparkles.
        `;
        framingOverride = "**FRAMING:** Bust Portrait (Chest Up). Focus on the face, the crown, and the neckline jewelry.";
    } 
    
    // --- ESTILO 3: EMPODERADA (Plano Intenso - Femme Fatale) ---
    // Objetivo: La mirada que mata. Seducción y misterio.
    else if (style === 'empoderada') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** Belle Époque Glamour (Sargent / Boldini style).
        **SETTING:** Dark, rich velvet background (Black or Deep Burgundy) to make the face pop.
        **ATTIRE:** Black velvet choker or elegant high collar. Long pearl earrings. A dark, sophisticated gown neckline.
        **POSE:** **Medium Close-Up.** Intense eye contact. A mysterious half-smile. Perhaps a gloved hand resting near the chin or neck.
        **LIGHTING:** **Dramatic Beauty.** High contrast. Shadow on one side of the face, bright highlight on the other cheekbone and eye.
        `;
        framingOverride = "**FRAMING:** Medium Close-Up (Chest Up). Focus on the intense gaze and elegant neck.";
    }

    // --- ESTRUCTURA FINAL DEL PROMPT ---
    return `
    You are a Master Painter creating a stunning CLOSE-UP oil painting of a woman.
    **INSTRUCTIONS:**
    1.  **Analyze** the input image(s) to capture the subject's beauty and likeness primarily in the face.
    2.  **Transform** her into the specific style below, focusing on a flattering portrait.
    3.  **Apply** a rich, glossy oil painting texture.
    
    ${promptStyle}
    
    **CRITICAL TECHNICAL SPECS:**
    **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
    ${framingOverride}
    **NEGATIVE CONSTRAINTS (STRICT):** **No full body shots**, no distant shots, no books, no masculine clothing, no sad expressions, no distorted faces. The image must be BEAUTIFUL and INTIMATE.
    `;
};
