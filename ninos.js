// ARCHIVO: ninos.js
// Lógica Especializada: Inocencia Noble, Fidelidad de Sujetos y Cero Alucinaciones

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. REGLAS DE ORO: LA ESENCIA INFANTIL Y FIDELIDAD ---
    // Se han añadido reglas estrictas para contar sujetos y prohibir elementos inventados.
    const baseInstructions = `
    **CRITICAL CORE INSTRUCTIONS FOR CHILD SUBJECTS:**
    1.  **SUBJECT COUNT FIDELITY (MOST IMPORTANT):** You must accurately assess the number of children present in the input images. **If the input shows TWO children (e.g., sisters), the output painting MUST contain TWO children.** Do not merge or omit subjects. Maintain their relative ages and likenesses.
    2.  **NO HALLUCINATIONS:** Do NOT add any elements not present in the input or explicitly requested by the style. **ABSOLUTELY NO extra pets, dogs, cats, animals, or modern toys that are not in the source photos.**
    3.  **THE SUBJECT IS A CHILD:** Approx age 3-10. Maintain childlike facial proportions, innocence, and curiosity. No adultifying faces or bodies.
    4.  **NO HEAVY CROWNS:** Children do not wear giant adult crowns. Use delicate circlets, ribbons, or nothing on the head.
    5.  **STUDIO PORTRAIT FEEL:** This is a posed painting session in a master painter's studio.
    `;

    let promptStyle = "";
    let framingOverride = "";

    // --- ESTILO 1: RENACIMIENTO (BOSQUE ENCANTADO / ESTUDIO MÁGICO) ---
    if (style === 'renacimiento') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** High Renaissance Oil Portrait (Raphael / Botticelli influence). Soft, ethereal, magical.
        **SUBJECT:** The noble child(ren) posed gently. Innocence and wonder in their eyes.
        **SETTING:** A painted studio backdrop of a **magical, dappled forest clearing** or an overgrown ancient garden with soft, natural elements like leaves and flowers.
        **ATTIRE:** Rich but gentle fabrics. Silk velvets in earthy tones (moss green, soft blue, cream gold), embroidered with natural motifs.
        **PROPS:** (Optional and subtle) Holding a small antique book or a single flower. **Do not add animals.**
        **LIGHTING:** Soft, golden "Golden Hour" light filtering through imaginary trees.
        `;
        framingOverride = "**FRAMING:** Medium Shot (Waist Up). Focus on the child(ren) interacting gently with the environment.";
    } 
    
    // --- ESTILO 2: PRÍNCIPE / PRINCESA (NOBLEZA INFANTIL) ---
    // Se eliminó la referencia a mascotas en "PROPS".
    else if (style === 'principe') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** Grand Manner Portraiture (Van Dyck / Velázquez royal children). Elegant, noble, yet youthful.
        **SUBJECT:** The **young son(s)/daughter(s) of a monarch**. They possess innate dignity but childlike softness.
        **NO HEAVY CROWNS:** Use a simple thin gold circlet or a fine silk ribbon if headwear is needed.
        **ATTIRE:** "Junior" Royal attire. Fine brocades, lace collars, miniature satin sashes. Luxurious but not overwhelming.
        **SETTING:** A royal nursery terrace or a palace garden with a distant castle view. A luxurious rug on the floor.
        **PROPS:** A fine heirloom quality antique toy (like a porcelain doll or wooden horse) ONLY if it fits naturally. **NO pets or live animals.**
        **LIGHTING:** Bright, flattering daylight highlighting the rich textures of the clothing.
        `;
        framingOverride = "**FRAMING:** Full Body or Three-Quarter Shot to show the elegant miniature outfits.";
    } 
    
    // --- ESTILO 3: BARROCO CLÁSICO (ESTUDIO INTENSO) ---
    else if (style === 'barroco') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** Dutch Golden Age / Baroque (Rembrandt style). Intense, moody, soulful.
        **SUBJECT:** Serious, contemplative child(ren) with deep eyes. A "deep soul" look.
        **NO ROYAL REGALIA:** No crowns, no scepters. The focus is strictly on the faces and intensity.
        **ATTIRE:** Dark, rich, textured fabrics. Black velvet, deep burgundy, dark lace collars that frame the face.
        **SETTING:** A dark, shadowy painter's studio background. Vague forms of antique furniture hidden in deep shadow.
        **LIGHTING:** **Extreme Chiaroscuro (Dramatic Studio Lighting).** A single strong light source illuminates the faces against a very dark background.
        `;
        framingOverride = "**FRAMING:** **Medium Close-Up (Chest Up).** The faces must dominate the composition.";
    }

    // --- ESTRUCTURA FINAL DEL PROMPT ---
    // Se reforzaron los NEGATIVE CONSTRAINTS.
    return `
    You are a Master Painter creating a museum-quality oil painting of child subject(s).
    **INSTRUCTIONS:**
    1.  **Analyze** the input image(s) to count the exact number of subjects and capture their likeness features exactly.
    2.  **Transform** the subject(s) into the historical style defined below, adhering strictly to the "CRITICAL CORE INSTRUCTIONS".
    3.  **Apply** a rich, detailed oil painting texture (visible brushstrokes).
    
    ${promptStyle}
    
    **CRITICAL TECHNICAL SPECS:**
    **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
    ${framingOverride}
    **NEGATIVE CONSTRAINTS (STRICT):** No extra people not in input, **NO PETS, NO DOGS, NO CATS, NO ANIMALS (unless specifically asked by style)**, no modern toys, no picture frames, no adult bodies on children, no distorted faces, no modern clothing.
    `;
};
