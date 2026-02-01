// ARCHIVO: mujer.js
// Lógica V85: MUSA ATEMPORAL CON VARIEDAD TOTAL (Colores, Escenarios, Telas)

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. LÓGICA DE ENCUADRE AUTOMÁTICA ---
    let framingInstruction = "";
    
    if (numSubjects > 1) {
        framingInstruction = "**FRAMING:** MEDIUM SHOT (Waist Up) or THREE-QUARTER SHOT. Zoom out to include ALL subjects comfortably. Do not cut anyone off.";
    } else {
        framingInstruction = "**FRAMING:** VARIED ELEGANT FRAMING. Choose between a powerful Portrait, a dynamic Medium Shot, or a dramatic Three-Quarter shot to best showcase the pose and attire.";
    }

    // --- 2. ESTILOS DE MUSEO (Con Variedad Inyectada) ---
    let stylePrompt = "";

    // --- MEJORA: VARIEDAD EN LA MUSA ---
    if (style === 'musa') {
        stylePrompt = `
        **STYLE:** **Pre-Raphaelite & Romanticism Masterpiece** (Waterhouse / Rossetti / Leighton influence). Oil on Canvas.
        **VARIETY INSTRUCTION (IMPORTANT):** **DO NOT always produce the same green garden or pink dress.** VARY the color palette and setting significantly.
        **ATMOSPHERE:** **VARIED ROMANTIC SETTINGS.** It could be a serene lakeside at twilight, an ancient stone balcony with climbing roses, a deep mysterious forest, or a golden wheat field. Dreamy and magical.
        **ATTIRE:** **VARIED ETHEREAL FASHION.** Flowing robes or structured bodices. Use a mix of colors: Deep Crimson, Emerald Green, Rich Gold, Sapphire Blue, OR Soft Pastels. Flower crowns or jeweled headpieces.
        **TEXTURE:** Visible artistic brushstrokes, but with realistic, glowing skin.
        **LIGHTING:** Soft, atmospheric light. Dappled sunlight, twilight glow, or warm golden hour.
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
    else if (style === 'empoderada') {
        stylePrompt = `
        **STYLE:** **High-Fashion Historical Drama** (Giovanni Boldini / Vogue Historical Editorial style). Oil on Canvas.
        **TEXTURE:** Dynamic brushwork full of movement and energy. Luxurious fabrics that feel expensive.
        **ATMOSPHERE:** **OPULENT and DRAMATIC.** A grand staircase, a luxurious salon with heavy curtains, or a dramatic balcony at sunset.
        **ATTIRE:** **VARIETY of powerful, feminine fashion.** Deep jewel tones (Ruby Red, Emerald Green, Sapphire Blue), gold brocades, dramatic capes, confident silhouettes.
        **MOOD & POSE:** **EGO and POWER.** High confidence, dramatic feminine poses (chin up, hand on hip, commanding gaze). She owns the room.
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
