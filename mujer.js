// ARCHIVO: mujer.js
// Lógica V86: FIX RETRATOS CERCANOS (Obligar a la IA a hacer zoom) + Variedad Musa

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. LÓGICA DE ENCUADRE BLINDADA ---
    let framingInstruction = "";
    
    if (numSubjects > 1) {
        // Si hay gente, abrimos plano para que quepan.
        framingInstruction = "**FRAMING:** MEDIUM SHOT (Waist Up) or THREE-QUARTER SHOT. You MUST zoom out enough to include ALL subjects comfortably. Do not cut anyone off.";
    } else {
        // --- CAMBIO CLAVE AQUÍ: FORZAR RETRATOS CERCANOS ---
        // Si está sola, le prohibimos quedarse siempre lejos.
        framingInstruction = `
        **FRAMING (CRITICAL):** **VARIETY REQUIRED.**
        - Frequently create **CLOSE-UP PORTRAITS (Head & Shoulders)**. Focus intensely on the face, eyes, and jewelry details.
        - Occasionally use **Medium Shots**, but **DO NOT** make every image a medium shot.
        - **ZOOM IN** to show the beauty.
        `;
    }

    // --- 2. ESTILOS DE MUSEO (Musa Variada + Reina + Empoderada) ---
    let stylePrompt = "";

    if (style === 'musa') {
        stylePrompt = `
        **STYLE:** **Pre-Raphaelite & Romanticism Masterpiece** (Waterhouse / Rossetti influence). Oil on Canvas.
        **VARIETY INSTRUCTION:** VARY the palette. Use Deep Crimson, Emerald Green, or Rich Gold, not just pastel pinks.
        **ATMOSPHERE:** **VARIED ROMANTIC SETTINGS.** A serene lakeside, an ancient stone balcony, a deep mysterious forest, or a golden wheat field.
        **ATTIRE:** **VARIED ETHEREAL FASHION.** Flowing robes, velvet bodices, or sheer silk. Flower crowns or jeweled headpieces.
        **TEXTURE:** Visible artistic brushstrokes, but with realistic, glowing skin.
        **LIGHTING:** Soft, atmospheric light. Dappled sunlight or twilight glow.
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
        **TEXTURE:** Dynamic brushwork full of movement. Luxurious fabrics.
        **ATMOSPHERE:** **OPULENT and DRAMATIC.** Grand staircase, luxurious salon, or dramatic balcony.
        **ATTIRE:** **VARIETY of powerful fashion.** Deep jewel tones, gold brocades, dramatic capes.
        **MOOD & POSE:** **EGO and POWER.** Chin up, commanding gaze. She owns the room.
        **LIGHTING:** Dramatic theatrical lighting.
        `;
    }

    // --- 3. PROMPT FINAL ---
    return `
    You are a Master Painter (Old Master) creating a **MUSEUM-QUALITY OIL PAINTING**.
    
    **STEP 1: SUBJECT FIDELITY (CRITICAL)**
    - Input contains: **${numSubjects} subject(s)**.
    - **PAINT EXACTLY ${numSubjects} SUBJECTS.** Do not ignore children or pets.
    - **FACE FIDELITY:** Keep the exact facial structure. Do not change the nose or eyes.

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
    - **NO PICTURE FRAMES, NO PAINTED BORDERS.**
    - **NO CARTOON, NO 3D RENDER, NO ANIME.**
    - DO NOT REMOVE PEOPLE OR PETS.
    - No gloominess, no sad expressions.
    `;
};
