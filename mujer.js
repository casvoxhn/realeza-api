// ARCHIVO: mujer.js
// Lógica V80: VARIEDAD DE PLANOS, MAGIA, CUENTO DE HADAS Y FOTO DE ESTUDIO + INCLUSIÓN TOTAL

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. REGLAS DE ORO: ELLA ES LA ESTRELLA, PERO NO ESTÁ SOLA ---
    const baseInstructions = `
    **CRITICAL CORE INSTRUCTIONS:**
    1.  **THE HIERARCHY (CRUCIAL):** The WOMAN is the absolute protagonist (The Queen/Goddess). She must have the best lighting and position.
    2.  **INCLUDE EVERYONE:** You MUST detect and include **ALL** subjects (children, pets, partners) from the input.
        - **Children:** Pose them lovingly next to her or holding her hand. They are her cherubs/heirs.
        - **Pets:** They are her royal companions. Do not remove them.
    3.  **BEAUTY FILTER:** Apply a "Historical Beauty" filter. Glowing skin, sparkling eyes, flattering angles. Make her look breathtaking.
    4.  **NO BOOKS/INTELLECTUAL PROPS:** Replace them with fans, mirrors, flowers, or jewelry. Visual pleasure only.
    `;

    let promptStyle = "";
    let framingOverride = "";

    // --- ESTILO 1: LA MUSA (Pintura Mágica y Etérea) ---
    // Enfoque: Fantasía pura, pincelada visible, sueño.
    if (style === 'musa') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** **Fantasy Oil Painting** (Pre-Raphaelite / Waterhouse style). Highly artistic, visible brushstrokes, dreamlike atmosphere.
        **SETTING:** A magical garden straight out of a fantasy novel. Glowing flowers, floating petals, soft mist, maybe a subtle magical aura.
        **ATTIRE:** Flowing, semi-sheer chiffon robes in pastel colors (Rose Gold, Lilac, Soft Blue). Flower crowns in the hair.
        **MOOD:** Mystical, soft, enchanting. She looks like a forest goddess or a fairy queen.
        **LIGHTING:** **Magical Glow.** Soft, diffused, iridescent light. No harsh shadows. The skin should look like porcelain.
        `;
        // Encuadre Dinámico
        framingOverride = "**FRAMING:** Dynamic. If alone: Close-Up (Face/Shoulders). If with kids/pets: Medium Shot to include everyone in a magical embrace.";
    } 
    
    // --- ESTILO 2: LA REINA (Cuento de Hadas / Disney Opulento) ---
    // Enfoque: Color, volumen, "Princesa", felicidad, lujo brillante.
    else if (style === 'realeza') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** **Fairytale Royal Portrait** (Winterhalter / Disney-esque Realism). Vibrant, colorful, crisp and polished.
        **SETTING:** A bright, airy palace balcony or ballroom. Not dark/moody. Bright marble, golden railings, blue skies.
        **ATTIRE:** **Pompous, Voluminous Ballgown.** Satin and tulle in vibrant feminine colors (Royal Pink, Sky Blue, Emerald). A sparkling tiara is mandatory.
        **MOOD:** Proud, happy, majestic. "I am the Queen of this story."
        **LIGHTING:** **Sparkling Daylight.** Bright, cheerful light that makes the jewelry and satin dress shine intensely.
        `;
        // Encuadre Dinámico
        framingOverride = "**FRAMING:** Dynamic. If alone: Medium Shot (Waist Up) to show the jewels/dress. If with kids/pets: Zoom out slightly to show the full royal family group.";
    } 
    
    // --- ESTILO 3: EMPODERADA (Foto de Estudio Dramática) ---
    // Enfoque: Editorial de moda, nitidez, negro/rojo, drama.
    else if (style === 'empoderada') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** **High-End Historical Studio Photography** (Vogue 1920s / Sargent Glamour). Sharp focus, realistic texture, dramatic contrast.
        **SETTING:** A luxurious studio background. Dark velvet curtains, an abstract textured backdrop in deep burgundy or black.
        **ATTIRE:** Sophisticated, structured fashion. Black velvet, deep red silk, form-fitting silhouettes. Statement jewelry (pearl chokers, diamonds).
        **MOOD:** Magnetic, seductive, powerful. "Femme Fatale" energy. Strong eye contact.
        **LIGHTING:** **Studio Beauty Lighting.** A "Beauty Dish" effect: sculpted cheekbones, highlight in the eyes, separation from the background.
        `;
        // Encuadre Dinámico
        framingOverride = "**FRAMING:** Dynamic. If alone: Medium Close-Up (Intense Portrait). If with kids/pets: They are posed artistically around her, like a fashion editorial group shot.";
    }

    // --- ESTRUCTURA FINAL DEL PROMPT ---
    return `
    You are a Master Artist creating a portrait designed to be loved by the female subject.
    **INSTRUCTIONS:**
    1.  **Analyze** the input image(s) to capture the woman's beauty and likeness perfectly.
    2.  **Count** every single person and pet in the input. **YOU MUST PAINT THEM ALL.**
    3.  **Transform** the scene into the specific style below.
    
    ${promptStyle}
    
    **CRITICAL TECHNICAL SPECS:**
    **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
    ${framingOverride}
    **NEGATIVE CONSTRAINTS (STRICT):** **No missing family members, no missing pets**, no masculine energy, no sadness, no boring colors, no distorted faces. The image must feel expensive and flattering.
    `;
};
