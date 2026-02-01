// ARCHIVO: mujer.js
// Lógica V84: FIX MARCOS + EMPODERADA DRAMÁTICA (Poder, Color, Ego, Variedad)

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. LÓGICA DE ENCUADRE AUTOMÁTICA (Mantiene lo que funciona) ---
    let framingInstruction = "";
    
    if (numSubjects > 1) {
        // Más de 1 persona: Plano Medio/Abierto para que quepan todos.
        framingInstruction = "**FRAMING:** MEDIUM SHOT (Waist Up) or THREE-QUARTER SHOT. Zoom out to include ALL subjects comfortably. Do not cut anyone off.";
    } else {
        // Solo ella: Variedad de planos elegantes.
        framingInstruction = "**FRAMING:** VARIED ELEGANT FRAMING. Choose between a powerful Portrait, a dynamic Medium Shot, or a dramatic Three-Quarter shot to best showcase the pose and attire.";
    }

    // --- 2. ESTILOS DE MUSEO RENOVADOS (Más Poder y Color) ---
    let stylePrompt = "";

    if (style === 'musa') {
        stylePrompt = `
        **STYLE:** **Pre-Raphaelite Masterpiece** (John William Waterhouse style). Oil on Canvas.
        **TEXTURE:** Visible oil brushstrokes, realistic skin texture, soft natural lighting.
        **ATMOSPHERE:** A romantic, lush garden or nature setting. Dreamy.
        **ATTIRE:** Renaissance-inspired silk robes, soft textures, natural flower details, pastel tones.
        **LIGHTING:** Soft, diffused natural light (Sfumato technique).
        `;
    } 
    else if (style === 'realeza') {
        stylePrompt = `
        **STYLE:** **Grand Manner Portraiture** (Winterhalter / Velázquez style). Oil on Canvas.
        **TEXTURE:** Hyper-realistic fabrics (satin sheen, velvet depth), luxury jewelry reflection.
        **ATMOSPHERE:** A grand palace interior, bright and opulent.
        **ATTIRE:** Historical Royal Gown (rich colors: Royal Blue, Crimson, Emerald, Gold). Detailed Tiara.
        **LIGHTING:** Bright, luxurious light that highlights wealth.
        `;
    } 
    // --- CAMBIO MAYOR AQUÍ: EMPODERADA DRAMÁTICA ---
    else if (style === 'empoderada') {
        stylePrompt = `
        **STYLE:** **High-Fashion Historical Drama** (Giovanni Boldini / Vogue Historical Editorial style). Oil on Canvas.
        **TEXTURE:** Dynamic brushwork full of movement and energy. Luxurious fabrics that feel expensive.
        **ATMOSPHERE:** **OPULENT and DRAMATIC.** A grand staircase, a luxurious salon with heavy curtains, or a dramatic balcony at sunset. Not dark or gloomy.
        **ATTIRE:** **VARIETY of powerful, feminine fashion.** Deep jewel tones (Ruby Red, Emerald Green, Sapphire Blue), gold brocades, dramatic capes, confident silhouettes.
        **MOOD & POSE:** **EGO and POWER.** High confidence, dramatic feminine poses (chin up, hand on hip, commanding gaze, dynamic swirling fabric). She owns the room.
        **LIGHTING:** Dramatic theatrical lighting that highlights power and beauty.
        `;
    }

    // --- 3. PROMPT FINAL BLINDADO (No Marcos + Realismo) ---
    return `
    You are a Master Painter (Old Master) creating a **MUSEUM-QUALITY OIL PAINTING**.
    
    **STEP 1: SUBJECT FIDELITY (CRITICAL)**
    - Input contains: **${numSubjects} subject(s)**.
    - **PAINT EXACTLY ${numSubjects} SUBJECTS.** Do not ignore children or pets.
    - **FACE FIDELITY:** Keep the exact facial structure and features of the source photos. They must look like REAL people painted in oil.

    **STEP 2: ARTISTIC EXECUTION**
    - **MEDIUM:** 100% OIL ON CANVAS. Realistic texture and shading.
    - The skin must look like skin, not plastic.
    
    **STEP 3: STYLE & COMPOSITION**
    ${stylePrompt}
    
    ${framingInstruction}
    
    **TECHNICAL SPECS:**
    - **ASPECT RATIO:** **Vertical 4:5** (ALWAYS).
    - **COMPOSITION:** Powerful, dramatic, museum-worthy.

    **NEGATIVE CONSTRAINTS (STRICT):**
    - **NO PICTURE FRAMES, NO PAINTED BORDERS, NO PHYSICAL FRAMING ELEMENTS.**
    - **NO CARTOON, NO 3D RENDER, NO ANIME.**
    - DO NOT REMOVE PEOPLE OR PETS.
    - No gloominess, no sad expressions.
    `;
};
