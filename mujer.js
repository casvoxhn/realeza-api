// ARCHIVO: mujer.js
// Lógica V87: ENCUADRE CONTEXTUAL INTELIGENTE (La IA decide el mejor ángulo según la foto)

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. LÓGICA DE ENCUADRE (Ahora es INTELIGENTE, no Rígida) ---
    let framingInstruction = "";
    
    if (numSubjects > 1) {
        // SEGURIDAD GRUPAL: Si hay más de 1, priorizamos que quepan todos.
        framingInstruction = "**FRAMING PRIORITY:** COMPOSITION SAFETY. Use a **Medium Shot (Waist Up) or Three-Quarter Shot**. You MUST zoom out enough to include ALL subjects (children/pets) comfortably alongside the main woman.";
    } else {
        // MODO SMART (1 Persona): La IA analiza y decide.
        framingInstruction = `
        **FRAMING PRIORITY:** **SMART AESTHETIC DECISION.**
        - **Analyze the input pose:** If she has a strong posture, hands on hips, or a beautiful outfit, use a **Medium Shot** or **Three-Quarter Shot** to show it off.
        - **Analyze the face:** If the expression is the key, use a **Close-Up Portrait**.
        - **DO NOT BE RIGID.** Choose the angle that makes her look most beautiful and powerful in this specific style. 
        - **CRITICAL:** Even in wider shots, the face must be detailed and high quality.
        `;
    }

    // --- 2. ESTILOS DE MUSEO (Optimizados para flexibilidad) ---
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
        **ATTIRE:** Pompous Royal Ballgown (show the volume if the framing allows). Sparkling Tiara.
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

    // --- 3. PROMPT FINAL (Cero Rigidez) ---
    return `
    You are a Master Painter (Old Master) creating a **MUSEUM-QUALITY OIL PAINTING**.
    
    **STEP 1: SUBJECT FIDELITY & COUNT**
    - Input: **${numSubjects} subject(s)**. **PAINT THEM ALL.**
    - **IDENTITY LOCK:** Keep the exact facial structure. Do not change the nose/eyes. Beautify via lighting, not plastic surgery.

    **STEP 2: SMART COMPOSITION (THE ARTIST'S EYE)**
    - Look at the input image posture. Look at the chosen style.
    - **DECIDE THE BEST FRAMING** for this specific combination.
    ${framingInstruction}
    - Ensure the composition feels balanced and expensive.

    **STEP 3: STYLE EXECUTION**
    - **MEDIUM:** 100% OIL ON CANVAS. Realistic texture.
    ${stylePrompt}

    **NEGATIVE CONSTRAINTS:**
    - **NO PICTURE FRAMES, NO BORDERS.**
    - **NO CARTOON, NO 3D, NO ANIME.**
    - No missing people/pets.
    - No distorted faces in wider shots.
    `;
};
