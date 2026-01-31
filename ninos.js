// ARCHIVO: ninos.js
// Lógica V50.5: Inclusión Total + MEJORA DEL BARROCO (Menos triste, más rico, plano medio)

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. REGLAS DE ORO: FLEXIBILIDAD Y FIDELIDAD ---
    const baseInstructions = `
    **CRITICAL CORE INSTRUCTIONS:**
    1.  **INCLUDE EVERYONE:** You must detect and include **ALL** subjects present in the input image. 
        - If there are parents/adults: Include them as noble guardians/kings/queens.
        - If there are pets: Include them faithfully.
        - If there are siblings: Include all of them.
        - **DO NOT REMOVE ANYONE.**
    
    2.  **THEME HIERARCHY:** The aesthetic is centered around the CHILD's innocence/magic, but adults must fit perfectly into that world.
    
    3.  **NO HALLUCINATIONS:** Do not *invent* new people or pets that are not in the photo. Only paint who is there.
    
    4.  **AGE APPROPRIATE:** Keep children looking like children. Keep adults looking like adults.
    `;

    let promptStyle = "";
    let framingOverride = "";

    // --- ESTILO 1: RENACIMIENTO (BOSQUE ENCANTADO / JARDÍN MÁGICO) ---
    if (style === 'renacimiento') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** High Renaissance Oil Portrait (Raphael / Botticelli). Soft, ethereal, magical.
        **SETTING:** A magical, dappled forest clearing or an ancient blooming garden.
        **ATTIRE:** - Children: Silk velvets in earthy tones (moss green, soft blue), flower crowns.
        - Adults (if present): Elegant, flowing robes or noble tunics that match the forest theme.
        **LIGHTING:** Soft, golden "Golden Hour" light filtering through trees.
        **MOOD:** Protective, tender, magical.
        `;
        framingOverride = "**FRAMING:** Group composition or Portrait. Focus on the connection between subjects.";
    } 
    
    // --- ESTILO 2: PRÍNCIPE / PRINCESA (NOBLEZA REAL) ---
    else if (style === 'principe') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** Grand Manner Portraiture (Van Dyck / Velázquez). Elegant, noble, wealthy.
        **SETTING:** A royal palace terrace or luxurious nursery with a castle view.
        **ATTIRE:** - Children: "Junior" Royal attire. Fine brocades, lace collars, miniature sashes.
        - Adults (if present): King/Queen attire. Regalia, velvet capes, dignified stance.
        **NO HEAVY CROWNS ON KIDS:** Use simple circlets for children. Adults can wear full crowns.
        **LIGHTING:** Bright, flattering daylight highlighting luxury fabrics.
        `;
        framingOverride = "**FRAMING:** Full Body or Three-Quarter Shot to show the elegant outfits.";
    } 
    
    // --- ESTILO 3: BARROCO CLÁSICO (MEJORADO V50.5) ---
    // Corrección: Menos triste, más rico, iluminación cálida, mejores poses, plano medio.
    else if (style === 'barroco') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** Flemish Baroque (Rubens / Van Dyck influence). Rich, opulent, dramatic but **full of life and nobility, NOT sad**.
        **SETTING:** An opulent, dimly lit study or library with heavy draped curtains and dark antique oak paneling.
        **ATTIRE:** Deep jewel tones dominate. Sapphire blues, emerald greens, rich burgundies, and heavy gold brocades. Silks that shimmer and intricate lace collars.
        **MOOD & POSES:** Noble, thoughtful, and impressive. Subjects have dynamic, grounded poses: a hand on a hip, holding a leather-bound book, gesturing towards a globe. If a group, they are interacting warmly but formally as a powerful dynasty.
        **LIGHTING:** **Dramatic Warm Chiaroscuro.** A strong, warm light source (like a large window or grand fireplace) makes the fabrics sparkle and skin glow healthily against the deep background shadows.
        `;
        // CAMBIO CLAVE DE ENCUADRE:
        framingOverride = "**FRAMING:** Medium Shot (Waist Up). Allow space for dynamic poses and show the richness of the attire and environment.";
    }

    // --- ESTRUCTURA FINAL DEL PROMPT ---
    return `
    You are a Master Painter creating a museum-quality oil painting.
    **INSTRUCTIONS:**
    1.  **Analyze** the input image to count EXACTLY how many people and pets are there.
    2.  **Transform** ALL detected subjects into the historical style defined below.
    3.  **Apply** a rich, detailed oil painting texture.
    
    ${promptStyle}
    
    **CRITICAL TECHNICAL SPECS:**
    **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
    ${framingOverride}
    **NEGATIVE CONSTRAINTS:** No missing people, no missing pets, no extra invented people, no modern clothing, no distorted faces, no sunglasses, no sad or depressed expressions.
    `;
};
