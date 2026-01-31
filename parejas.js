// ARCHIVO: parejas.js
// Lógica Especializada: Romance, Química y Roles de Género Clásicos

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. REGLAS DE ORO: QUÍMICA DE PAREJA ---
    const couplesBase = `
    **1. IDENTITY & CHEMISTRY (CRITICAL):**
    - You MUST maintain the exact facial features of both subjects.
    - **CONNECTION:** They are not strangers standing together. They are lovers/spouses.
    - **Visual Language of Love:** Create a unified silhouette. They should lean slightly towards each other.

    **2. MALE ROLE (The Protector):**
    - Posture: Upright, broad, protective.
    - Interaction: Hand on her waist, standing slightly behind or offering an arm.
    - Vibe: Gallant, Masculine, Stoic but loving.

    **3. FEMALE ROLE (The Muse):**
    - Posture: Elegant, graceful, trusting.
    - Interaction: Hand on his chest, holding his arm, or resting head near his shoulder.
    - Vibe: Sophisticated, Soft, Radiating beauty.
    `;

    let promptStyle = "";
    let framingOverride = "";

    // --- ESTILO 1: RENACIMIENTO (ROMANCE DE NOVELA / BRIDGERTON) ---
    // Basado en tu foto de la pareja con tonos verdes/azules y bebé
    if (style === 'renacimiento') {
        promptStyle = `
        ${couplesBase}
        **STYLE:** 19th Century Romantic Portrait (Winterhalter / Lawrence).
        **VIBE:** Soft, Dreamy, Tender, Aristocratic Romance. "A love story in a garden."
        **ATTIRE:**
        - **Men:** Regency tailcoats (Navy/Black), crisp high collars, silk cravats.
        - **Women:** Flowing Empire waist gowns (Silk/Satin), lace shawls, delicate curls.
        **SETTING:** A sunlit drawing room with large windows or a romantic English garden.
        **LIGHTING:** Soft, diffused, "Golden Hour" light. Very flattering.
        `;
        framingOverride = "**FRAMING:** **Medium-Three Quarter.** Close enough to feel the intimacy.";
    } 
    
    // --- ESTILO 2: REY / REINA (PODER Y LEALTAD / MILITAR) ---
    // Basado en tu foto del oficial de rojo y la dama
    else if (style === 'rey') {
        promptStyle = `
        ${couplesBase}
        **STYLE:** Royal Military & Court Portrait (Napoleonic / Victorian Era).
        **VIBE:** Power Couple, Loyalty, Strength, Majestic. "Rulers of the Empire."
        **ATTIRE:**
        - **Men:** **Gala Military Uniform** (Hussar style) with gold braiding, epaulettes, and medals. OR Royal Robes.
        - **Women:** Grand Court Dress (Velvet/Heavy Satin), **Tiara or small Crown**, Sash of an order.
        **SETTING:** Palace Balcony with columns or Throne Room with red velvet drapes.
        **LIGHTING:** Dramatic, directional light highlighting gold textures and connection.
        `;
        framingOverride = "**FRAMING:** **Three-Quarter Shot.** To show the military details and the gown's volume.";
    } 
    
    // --- ESTILO 3: BARROCO (AMOR ETERNO / GÓTICO) ---
    // Basado en tu foto oscura dramática
    else if (style === 'barroco') {
        promptStyle = `
        ${couplesBase}
        **STYLE:** Dark Romanticism / Dutch Golden Age (Rembrandt / Moody Victorian).
        **VIBE:** Intense, Soulful, "Till Death Do Us Part", Mysterious.
        **ATTIRE:**
        - **Men:** Black velvet frock coats, dark cravats, stern elegance.
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
