// ARCHIVO: ninos.js
// Lógica Especializada: Inocencia Noble, Magia y Retrato Clásico Infantil

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. REGLAS DE ORO: LA ESENCIA INFANTIL ---
    const baseInstructions = `
    **CRITICAL CORE INSTRUCTIONS FOR CHILD SUBJECTS:**
    - The subject is a **YOUNG CHILD** (approx age 3-10). Maintain childlike facial proportions, innocence, and curiosity.
    - **NO ADULTIFYING:** Do not give them adult bodies or expressions.
    - **NO HEAVY CROWNS:** Children do not wear giant adult crowns. Use delicate circlets, ribbons, or nothing on the head.
    - **STUDIO PORTRAIT FEEL:** This is a posed painting session in a master painter's studio, even if the background is fantastical.
    `;

    let promptStyle = "";
    let framingOverride = "";

    // --- ESTILO 1: RENACIMIENTO (BOSQUE ENCANTADO / ESTUDIO MÁGICO) ---
    // Corrección: Menos rey opulento, más retrato mágico en naturaleza.
    if (style === 'renacimiento') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** High Renaissance Oil Portrait (Raphael / Botticelli influence). Soft, ethereal, magical.
        **SUBJECT:** A noble child posed gently. Innocence and wonder in their eyes.
        **SETTING:** A painted studio backdrop of a **magical, dappled forest clearing** or an overgrown ancient garden. Not a throne room.
        **ATTIRE:** Rich but gentle fabrics. Silk velvets in earthy tones (moss green, soft blue, cream gold), embroidered with natural motifs (flowers, animals).
        **PROPS:** Holding something small and natural: a small bird, a glowing flower, or an antique book of fairytales.
        **LIGHTING:** Soft, golden "Golden Hour" light filtering through imaginary trees.
        `;
        framingOverride = "**FRAMING:** Medium Shot (Waist Up). Focus on the child interacting with the magical environment.";
    } 
    
    // --- ESTILO 2: PRÍNCIPE / PRINCESA (NOBLEZA INFANTIL) ---
    // Corrección: Hijos de reyes, no reyes adultos. Sin coronas pesadas.
    else if (style === 'principe') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** Grand Manner Portraiture (Van Dyck / Velázquez royal children). Elegant, noble, yet youthful.
        **SUBJECT:** The **young son/daughter of a monarch**. They possess innate dignity but childlike softness.
        **NO HEAVY CROWNS:** If headwear is needed, use a simple thin gold circlet or a fine silk ribbon.
        **ATTIRE:** "Junior" Royal attire. Fine brocades, lace collars, miniature satin sashes. Luxurious but not overwhelming.
        **SETTING:** A royal nursery terrace or a palace garden with a distant castle view. A luxurious rug on the floor.
        **PROPS:** A fine heirloom toy (porcelain doll, wooden horse) or a small pet (spaniel puppy).
        **LIGHTING:** Bright, flattering daylight highlighting the rich textures of the clothing.
        `;
        framingOverride = "**FRAMING:** Full Body or Three-Quarter Shot to show the elegant miniature outfit.";
    } 
    
    // --- ESTILO 3: BARROCO CLÁSICO (ESTUDIO INTENSO) ---
    // Corrección: Más cerca, tipo foto de estudio dramática. Sin elementos de rey.
    else if (style === 'barroco') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** Dutch Golden Age / Baroque (Rembrandt style). Intense, moody, soulful.
        **SUBJECT:** A serious, contemplative child with deep eyes. A "deep soul" look.
        **NO ROYAL REGALIA:** No crowns, no scepters. The focus is on the child's face and intensity.
        **ATTIRE:** Dark, rich, textured fabrics. Black velvet, deep burgundy, dark lace collars that frame the face.
        **SETTING:** A dark, shadowy painter's studio background. Vague forms of antique furniture hidden in the shadow.
        **LIGHTING:** **Extreme Chiaroscuro (Dramatic Studio Lighting).** A single strong light source illuminates the child's face against a very dark background.
        `;
        framingOverride = "**FRAMING:** **Medium Close-Up (Chest Up).** The face must dominate the composition.";
    }

    // --- ESTRUCTURA FINAL DEL PROMPT ---
    return `
    You are a Master Painter creating a museum-quality oil painting of a child.
    **INSTRUCTIONS:**
    1.  **Analyze** the input image to capture the child's likeness and features exactly.
    2.  **Transform** the subject into the historical style defined below, adhering strictly to the "CRITICAL CORE INSTRUCTIONS" for children.
    3.  **Apply** a rich, detailed oil painting texture (visible brushstrokes).
    
    ${promptStyle}
    
    **CRITICAL TECHNICAL SPECS:**
    **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
    ${framingOverride}
    **NEGATIVE CONSTRAINTS:** No picture frames, no adult bodies on children, no distorted faces, no modern clothing.
    `;
};
