// ARCHIVO: ninos.js
// Lógica V50.4: Estética Infantil pero INCLUSIVA (Padres y Mascotas permitidos)

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. REGLAS DE ORO: FLEXIBILIDAD Y FIDELIDAD ---
    const baseInstructions = `
    **CRITICAL CORE INSTRUCTIONS:**
    1.  **INCLUDE EVERYONE:** You must detect and include **ALL** subjects present in the input image. 
        - If there are parents/adults: Include them as noble guardians/kings/queens.
        - If there are pets: Include them faithfully.
        - If there are siblings: Include all of them.
        - **DO NOT REMOVE ANYONE.**
    
    2.  **THEME HIERARCHY:** The aesthetic is centered around the CHILD's innocence/magic, but adults must fit perfectly into that world (e.g., if the child is a Fairy, the mother is a Fairy Queen; if the child is a Prince, the father is a King).
    
    3.  **NO HALLUCINATIONS:** Do not *invent* new people or pets that are not in the photo. Only paint who is there.
    
    4.  **AGE APPROPRIATE:** Keep children looking like children (innocent faces, correct proportions). Keep adults looking like adults.
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
        - Adults (if present): Elegant, flowing robes or noble tunics that match the forest theme (Guardian of the Forest style).
        **LIGHTING:** Soft, golden "Golden Hour" light filtering through trees.
        **MOOD:** Protective, tender, magical.
        `;
        framingOverride = "**FRAMING:** Group composition (if multiple) or Portrait. Focus on the connection between subjects.";
    } 
    
    // --- ESTILO 2: PRÍNCIPE / PRINCESA (NOBLEZA REAL) ---
    else if (style === 'principe') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** Grand Manner Portraiture (Van Dyck / Velázquez). Elegant, noble, wealthy.
        **SETTING:** A royal palace terrace or luxurious nursery with a castle view.
        **ATTIRE:** - Children: "Junior" Royal attire. Fine brocades, lace collars, miniature sashes.
        - Adults (if present): King/Queen attire. Regalia, velvet capes, dignified stance.
        **PROPS:** (Optional) Heirloom toys for kids.
        **NO HEAVY CROWNS ON KIDS:** Use simple circlets for children. Adults can wear full crowns.
        **LIGHTING:** Bright, flattering daylight highlighting luxury fabrics.
        `;
        framingOverride = "**FRAMING:** Full Body or Three-Quarter Shot to show the elegant outfits.";
    } 
    
    // --- ESTILO 3: BARROCO CLÁSICO (ESTUDIO INTENSO) ---
    else if (style === 'barroco') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** Dutch Golden Age / Baroque (Rembrandt style). Intense, moody, soulful.
        **SETTING:** A dark, shadowy painter's studio background.
        **ATTIRE:** Dark, rich, textured fabrics. Black velvet, deep burgundy, intricate lace collars.
        **MOOD:** Serious, contemplative, deep family bond.
        **LIGHTING:** **Extreme Chiaroscuro.** Strong directional light on faces against a dark background.
        `;
        framingOverride = "**FRAMING:** Medium Close-Up. Focus on the expressions and eyes of all subjects.";
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
    **NEGATIVE CONSTRAINTS:** No missing people, no missing pets, no extra invented people, no modern clothing, no distorted faces, no sunglasses.
    `;
};
