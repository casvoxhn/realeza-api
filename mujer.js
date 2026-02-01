// ARCHIVO: mujer.js
// Lógica V81: IDENTIDAD BLINDADA + EMBELLECIMIENTO COSMÉTICO (Cero cambios de cara)

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. REGLAS DE ORO: ELLA ES LA ESTRELLA Y DEBE SER ELLA ---
    const baseInstructions = `
    **CRITICAL CORE INSTRUCTIONS - IDENTITY LOCK:**
    1.  **ABSOLUTE FACE FIDELITY (PRIORITY #1):** You MUST preserve the EXACT facial structure, nose shape, eye shape, and jawline of the woman. **DO NOT CHANGE HER FACE to look like a generic model.** It must be recognized instantly as the person in the photo.
    2.  **COSMETIC BEAUTIFICATION ONLY:** "Beautify" by improving **skin texture, lighting, and hair volume**, NOT by altering facial features. Think of it as professional makeup and studio lighting, not plastic surgery.
    3.  **INCLUDE EVERYONE FAITHFULLY:** Detect and include **ALL** subjects (children, pets, partners) retaining their **EXACT LIKENESS**. Do not replace the user's specific dog with a generic dog.
    4.  **HIERARCHY:** The woman is the Queen/Goddess. Pose others lovingly around her.
    `;

    let promptStyle = "";
    let framingOverride = "";

    // --- ESTILO 1: LA MUSA (Pintura Mágica - Identidad Soñadora) ---
    if (style === 'musa') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** **Fantasy Oil Painting** (Pre-Raphaelite style). Artistic brushstrokes but with a **photorealistic face likeness**.
        **SETTING:** A magical garden straight out of a fantasy novel. Glowing flowers, floating petals, soft mist.
        **ATTIRE:** Flowing, semi-sheer chiffon robes in pastel colors (Rose Gold, Lilac, Soft Blue). Flower crowns in the hair.
        **MOOD:** Mystical, soft, enchanting.
        **LIGHTING:** **Magical Glow.** Soft, diffused light that smooths the skin tone without changing the facial structure.
        `;
        framingOverride = "**FRAMING:** Dynamic. If alone: Close-Up (Focus on HER eyes). If with others: Medium Shot to embrace them.";
    } 
    
    // --- ESTILO 2: LA REINA (Cuento de Hadas - Identidad Real) ---
    else if (style === 'realeza') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** **Fairytale Royal Portrait** (Disney-esque Realism). Vibrant, colorful, crisp.
        **SETTING:** A bright, airy palace balcony or ballroom. Bright marble, golden railings, blue skies.
        **ATTIRE:** **Pompous, Voluminous Ballgown.** Satin and tulle in vibrant feminine colors (Royal Pink, Sky Blue, Emerald). A sparkling tiara is mandatory.
        **MOOD:** Proud, happy, majestic.
        **LIGHTING:** **Sparkling Daylight.** Bright, cheerful light. Use highlights to make her eyes sparkle, but keep the eye shape exactly as the input.
        `;
        framingOverride = "**FRAMING:** Dynamic. If alone: Medium Shot (Waist Up) to show the jewels/dress. If with others: Zoom out slightly for the royal family.";
    } 
    
    // --- ESTILO 3: EMPODERADA (Foto de Estudio - Identidad Definida) ---
    else if (style === 'empoderada') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** **High-End Historical Studio Photography** (Vogue 1920s style). Sharp focus, realistic texture.
        **SETTING:** A luxurious studio background. Dark velvet curtains, textured backdrop in deep burgundy or black.
        **ATTIRE:** Sophisticated, structured fashion. Black velvet, deep red silk, form-fitting silhouettes. Statement jewelry.
        **MOOD:** Magnetic, seductive, powerful. Strong eye contact.
        **LIGHTING:** **Studio Beauty Lighting.** A "Butterfly Lighting" scheme that sculpts HER specific cheekbones and defines HER specific face shape perfectly.
        `;
        framingOverride = "**FRAMING:** Dynamic. If alone: Medium Close-Up (Intense). If with others: Posed artistically around her like a fashion editorial.";
    }

    // --- ESTRUCTURA FINAL DEL PROMPT ---
    return `
    You are a Master Artist creating a portrait that looks EXACTLY like the user but in a historical style.
    **INSTRUCTIONS:**
    1.  **Analyze** the input image(s). **LOCK ON TO THE FACIAL FEATURES.** Do not deviate.
    2.  **Count** every single person and pet. **PAINT THEM ALL EXACTLY AS THEY ARE.**
    3.  **Transform** the scene (clothes/background) into the style below, but keep the heads/faces true to reality.
    
    ${promptStyle}
    
    **CRITICAL TECHNICAL SPECS:**
    **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
    ${framingOverride}
    **NEGATIVE CONSTRAINTS (STRICT):** **DO NOT CHANGE THE FACE**, do not look like a different person, no missing family members, no missing pets, no masculine energy, no sadness, no boring colors.
    `;
};
