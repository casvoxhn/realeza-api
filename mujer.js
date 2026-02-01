// ARCHIVO: mujer.js
// Lógica V83: REALISMO DE MUSEO (Cero Caricatura) + FORMATO VERTICAL 4:5 + FIDELIDAD

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. LÓGICA DE ENCUADRE AUTOMÁTICA (Mantiene lo que funciona) ---
    let framingInstruction = "";
    
    if (numSubjects > 1) {
        // Más de 1 persona: Plano Medio/Abierto para que quepan todos.
        framingInstruction = "**FRAMING:** MEDIUM SHOT (Waist Up) or THREE-QUARTER SHOT. Zoom out to include ALL subjects comfortably. Do not cut anyone off.";
    } else {
        // Solo ella: Retrato o Plano Medio (pero con aire, elegante).
        framingInstruction = "**FRAMING:** Classic Portrait Framing. Elegant and balanced.";
    }

    // --- 2. ESTILOS DE MUSEO (Realismo Pictórico, no Digital) ---
    let stylePrompt = "";

    if (style === 'musa') {
        stylePrompt = `
        **STYLE:** **Pre-Raphaelite Masterpiece** (John William Waterhouse style). Oil on Canvas.
        **TEXTURE:** Visible oil brushstrokes, realistic skin texture (pores, natural flush), soft natural lighting. NOT digital art.
        **ATMOSPHERE:** A romantic, lush garden or nature setting.
        **ATTIRE:** Renaissance-inspired silk robes, soft textures, natural flower details.
        **LIGHTING:** Soft, diffused natural light (Sfumato technique).
        `;
    } 
    else if (style === 'realeza') {
        stylePrompt = `
        **STYLE:** **Grand Manner Portraiture** (Franz Xaver Winterhalter / Velázquez style). Oil on Canvas.
        **TEXTURE:** Hyper-realistic fabrics (satin sheen, velvet depth), realistic jewelry reflection. Museum quality.
        **ATMOSPHERE:** A grand palace interior with architectural depth.
        **ATTIRE:** Historical Royal Gown (rich colors: Royal Blue, Crimson, or Emerald). Detailed Tiara.
        **LIGHTING:** Chiaroscuro. Directional light that creates volume and realism.
        `;
    } 
    else if (style === 'empoderada') {
        stylePrompt = `
        **STYLE:** **19th Century Realism** (John Singer Sargent / Giovanni Boldini style). Oil on Canvas.
        **TEXTURE:** Bold, confident brushwork but with highly realistic faces. Elegant and sharp.
        **ATMOSPHERE:** A dark, sophisticated studio background.
        **ATTIRE:** High-fashion black velvet, pearls, elegant silhouette.
        **LIGHTING:** Dramatic studio lighting, highlighting the face features realistically.
        `;
    }

    // --- 3. PROMPT FINAL BLINDADO (Formato 4:5 + Realismo) ---
    return `
    You are a Master Painter (Old Master) creating a **MUSEUM-QUALITY OIL PAINTING**.
    
    **STEP 1: SUBJECT FIDELITY (CRITICAL)**
    - Input contains: **${numSubjects} subject(s)**.
    - **PAINT EXACTLY ${numSubjects} SUBJECTS.** Do not ignore children or pets.
    - **FACE FIDELITY:** Keep the exact facial structure and features of the source photos. Do not turn them into cartoons. They must look like REAL people painted in oil.

    **STEP 2: ARTISTIC EXECUTION**
    - **MEDIUM:** 100% OIL ON CANVAS. Use glazing, impasto, and realistic shading.
    - **NO CARTOONS:** The skin must look like skin, not plastic. The hair must look like hair, not solid shapes.
    
    **STEP 3: STYLE & COMPOSITION**
    ${stylePrompt}
    
    ${framingInstruction}
    
    **TECHNICAL SPECS:**
    - **ASPECT RATIO:** **Vertical 4:5** (ALWAYS).
    - **COMPOSITION:** Classical, balanced, museum-worthy.

    **NEGATIVE CONSTRAINTS:**
    - **NO CARTOON, NO 3D RENDER, NO ILLUSTRATION STYLE, NO ANIME.**
    - No plastic skin, no airbrushed look.
    - DO NOT REMOVE PEOPLE OR PETS.
    - No modern clothing (t-shirts, glasses).
    `;
};
