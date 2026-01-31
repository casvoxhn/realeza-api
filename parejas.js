// ARCHIVO: parejas.js
// Lógica V1.0 (Romance, Química, Miradas, Elegancia)

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. REGLAS BASE DE PAREJAS ---
    const couplesBase = `
    **1. IDENTITY (CRITICAL):**
    - You MUST maintain the exact facial features and likeness of both subjects.
    - **CHEMISTRY:** The subjects must look like a couple in love (spouses/lovers). Connect them visually.

    **2. INTERACTION (THE LOOK OF LOVE):**
    - **Physical Touch:** Essential. Arms linked, holding hands, a protective hand on the waist, or leaning heads together.
    - **Gaze:** They should look confident together, or gazing softly at each other (depending on style).
    - **Pose:** Create a unified silhouette. They are a team.

    **3. ROLES:**
    - **Men:** Protective, masculine, gallant posture.
    - **Women:** Elegant, graceful, leaning slightly into the partner.
    - **Pets (if any):** Loyal companions sitting at their feet.
    `;

    let promptStyle = "";
    let framingOverride = "";

    // --- ESTILO 1: RENACIMIENTO (ROMANCE DE NOVELA) ---
    // Basado en la imagen de la pareja con el bebé y trajes azules/verdes
    if (style === 'renacimiento') {
        promptStyle = `
        ${couplesBase}
        **STYLE:** 19th Century Romantic Portrait (Bridgerton / Jane Austen style).
        **VIBE:** Soft, Dreamy, Tender, Aristocratic Romance.
        **ATTIRE:**
        - **Men:** Regency tailcoats, high collars, cravats, waistcoats.
        - **Women:** Empire waist gowns, silk, lace gloves, delicate jewelry.
        **SETTING:** A sunlit drawing room or a romantic garden with blooming roses.
        **LIGHTING:** Soft, diffused, "Golden Hour" light.
        `;
        framingOverride = "**FRAMING:** **Medium-Three Quarter.** Close enough to feel the intimacy.";
    } 
    
    // --- ESTILO 2: REY / REINA (PODER Y LEALTAD) ---
    // Basado en la imagen del Militar Rojo y la Dama de Amarillo
    else if (style === 'rey') {
        promptStyle = `
        ${couplesBase}
        **STYLE:** Royal Military & Court Portrait (Winterhalter / Napoleonic Era).
        **VIBE:** Power Couple, Loyalty, Strength, Majestic.
        **ATTIRE:**
        - **Men:** **Gala Military Uniform** (Hussar style) with gold braiding, epaulettes, and medals. OR Royal Robes.
        - **Women:** Grand Court Dress, velvet or heavy satin, **Tiara or small Crown**.
        **SETTING:** Palace Balcony or Throne Room with heavy red drapes.
        **LIGHTING:** Dramatic, directional light highlighting gold textures and connection.
        `;
        framingOverride = "**FRAMING:** **Three-Quarter Shot.** To show the military details and the gown's volume.";
    } 
    
    // --- ESTILO 3: BARROCO (AMOR ETERNO / GÓTICO) ---
    // Basado en la imagen oscura de la pareja con el bastón
    else if (style === 'barroco') {
        promptStyle = `
        ${couplesBase}
        **STYLE:** Dark Romanticism / Dutch Golden Age (Rembrandt / Moody Victorian).
        **VIBE:** Intense, Soulful, "Till Death Do Us Part", Mysterious.
        **ATTIRE:**
        - **Men:** Black velvet frock coats, dark cravats, holding a cane or gloves.
        - **Women:** Deep jewel tones (Dark Emerald, Burgundy, Midnight Blue) or Black lace.
        **SETTING:** Dark oak-paneled library or shadowy studio background.
        **LIGHTING:** **Strong Chiaroscuro.** Faces illuminated against deep shadows.
        `;
        framingOverride = "**FRAMING:** **Medium Shot (Waist Up).** Focus on the intensity of the faces and the embrace.";
    }

    return `
    You are a Master Painter creating a museum-quality oil painting of a couple.
    **INSTRUCTIONS:**
    1. Analyze the input images to capture the likeness of the couple.
    2. Create a cohesive romantic composition applying the rules below.
    3. Apply a rich oil painting texture.
    
    ${promptStyle}
    
    **CRITICAL TECHNICAL SPECS:**
    **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
    ${framingOverride || "**FRAMING:** Three-Quarter Shot."}

    **NEGATIVE CONSTRAINTS:**
    - **DO NOT INCLUDE A PICTURE FRAME.** Edge-to-edge canvas.
    - **NO DISTANT FIGURES.** They must be the focus.
    - **NO MODERN CLOTHING.**
    `;
};
