// ARCHIVO: mujer.js
// Lógica: Retratos Femeninos de Éxito, Poder y Belleza (Flexible a grupos/mascotas)

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. REGLAS DE ORO: FIDELIDAD Y FLEXIBILIDAD ---
    // La protagonista es ELLA, pero si sube fotos con otros, se incluyen en SU mundo.
    const baseInstructions = `
    **CRITICAL CORE INSTRUCTIONS:**
    1.  **MAIN SUBJECT FOCUS & FIDELITY:** The primary focus is the woman. Capture her exact facial features, hair color, and essence. She must look beautiful, powerful, and opulent.
    2.  **INCLUDE EVERYONE (FLEXIBILITY):** You must detect and include **ALL** subjects present in the input image.
        - If there are friends/partners: Include them as noble companions in her court.
        - If there are pets: Include them faithfully, adding to the luxury (e.g., a royal lap dog).
    3.  **THEME: SUCCESS & OPULENCE:** The overall mood must be one of high status, wealth, and historical success. Rich textures, jewelry, and confident poses are essential.
    4.  **NO HALLUCINATIONS:** Do not invent people or pets not in the input.
    `;

    let promptStyle = "";
    let framingOverride = "";

    // --- ESTILO 1: LA MUSA ATEMPORAL (Renacentista / Prerrafaelita) ---
    // Enfoque: Belleza etérea, inspiración artística, suavidad lujosa.
    if (style === 'musa') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** High Renaissance / Pre-Raphaelite Oil Portrait (Botticelli / Rossetti influence). Soft, dreamlike, incredibly beautiful.
        **SETTING:** An artistic, lush environment. A blooming ancient garden pavilion or a beautifully decorated artist's studio filled with flowers and art objects.
        **ATTIRE:** Flowing, rich fabrics. Silk velvets in deep jewel tones (sapphire, emerald) or cream/gold brocades, adorned with pearls and natural elements. Hair loosely styled with ribbons or flowers.
        **MOOD & POSE:** Dreamy, intellectual, inspiring. A gentle, confident gaze. Posed gracefully, perhaps holding a book, a musical instrument, or a single symbolic flower.
        **LIGHTING:** **Soft Golden Hour Light.** Flattering, warm, natural light that gives the skin a porcelain glow and highlights the silk textures.
        `;
        framingOverride = "**FRAMING:** Medium Portrait or Three-Quarter Shot. Focus on elegance and grace.";
    } 
    
    // --- ESTILO 2: LA REINA (Barroco / Rococó Imperial) ---
    // Enfoque: Poder absoluto, majestad, lujo extremo, "Mírenme".
    else if (style === 'realeza') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** Grand Manner Royal Portrait (Winterhalter / Velázquez influence). Majestic, imposing, opulent.
        **SETTING:** A grand palace throne room or the top of a dramatic staircase with heavy marble columns and rich drapery.
        **ATTIRE:** The height of royal fashion. Magnificent, heavy gowns with wide skirts, covered in gold embroidery, diamonds, and precious stones. A crown or elaborate tiara is essential. Rich furs (ermine).
        **MOOD & POSE:** Commanding, regal, confident. A direct, powerful gaze at the viewer. Standing tall with excellent posture, radiating authority.
        **LIGHTING:** **Dramatic Palace Lighting.** Bright, sparkling light from chandeliers that makes jewelry flash and silks shine theatrically.
        `;
        framingOverride = "**FRAMING:** Full Body or Deep Three-Quarter Shot to showcase the incredible grandeur of the gown and setting.";
    } 
    
    // --- ESTILO 3: MUJER EMPODERADA (Dama de Hierro Victoriana/Edwardiana) ---
    // Enfoque: Éxito independiente, fuerza, seriedad, control.
    else if (style === 'empoderada') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** 19th Century Power Portrait (John Singer Sargent influence). Sharp, strong, focused on character and success.
        **SETTING:** A luxurious, dark wood private library, a powerful estate office, or standing confidently on the grounds of a large manor.
        **ATTIRE:** Structured, powerful fashion. A tailored velvet riding habit, a dark silk gown with a strong silhouette, or a high-collared brocade jacket. Colors are deep: charcoal, navy, forest green, deep burgundy.
        **MOOD & POSE:** Independent, formidable, successful. A confident, perhaps slightly challenging gaze. Strong pose: hand on hip, leaning on a desk, holding riding gloves.
        **LIGHTING:** **Strong, Directional Chiaroscuro.** A single, powerful light source that sculpts the face and emphasizes strength and structure.
        `;
        framingOverride = "**FRAMING:** Medium Shot (Waist Up) or Medium Close-Up. Focus on the powerful expression and confident stance.";
    }

    // --- ESTRUCTURA FINAL DEL PROMPT ---
    return `
    You are a Master Painter creating a museum-quality oil painting of a powerful historical woman.
    **INSTRUCTIONS:**
    1.  **Analyze** the input image(s) to capture the exact likeness of the main female subject and include any other present subjects/pets.
    2.  **Transform** them into the historical style defined below, focusing on luxury and beauty.
    3.  **Apply** a rich, detailed oil painting texture.
    
    ${promptStyle}
    
    **CRITICAL TECHNICAL SPECS:**
    **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
    ${framingOverride}
    **NEGATIVE CONSTRAINTS (STRICT):** **No picture frames, no painted borders**, no modern clothing, no distorted faces, no sunglasses, no sad or weak expressions. The look must be one of success and beauty.
    `;
};
