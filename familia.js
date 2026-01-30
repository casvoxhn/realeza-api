// ARCHIVO: familia.js
// Lógica V73 (Jerarquía Masculina, Bebés en Brazos, Rey Realista, Encuadre Cercano)

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. REGLAS BASE DE COMPOSICIÓN FAMILIAR ---
    const familyBase = `
    **1. IDENTITY (THE MOST CRITICAL INSTRUCTION):**
    - You MUST maintain the exact facial features and likeness of EVERY person from the input photos. 
    - Do NOT generate generic faces. The subjects in the painting must be recognizably the humans provided.

    **2. SUBJECTS & HIERARCHY (CRITICAL ROLES):**
    - Analyze the age and gender of the subjects to assign correct roles.
    - **ADULT MEN (Fathers/Patriarchs):** Must appear **powerful, masculine, and dominant**. Strong, upright posture, commanding presence. They are the visual anchor of power in the composition.
    - **ADULT WOMEN (Mothers):** Graceful, elegant, often seated centrally or standing with poise.
    - **TEENAGERS:** Distinctly youthful but not adults. They stand near parents in subordinate but dignified roles.
    - **BABIES & TODDLERS:** **MUST be held securely in the arms of an adult** (usually the mother or father). Do NOT place babies alone on furniture.

    **3. INTERACTION:**
    - Create a cohesive family unit with strong emotional bonds.
    - Gentle hands on shoulders, parents holding children firmly, bodies turned towards each other.
    - **PETS (If present):** A beloved family guardian at the feet or sitting loyally beside the owners.
    `;

    let promptStyle = "";
    let framingOverride = "";

    // --- ESTILO 1: RENACIMIENTO (ROMÁNTICO) ---
    if (style === 'renacimiento') {
        promptStyle = `
        ${familyBase}
        **STYLE:** 19th Century Romantic Portrait / Neoclassical (Ingres, Winterhalter, Sargent).
        **VIBE:** Aristocratic, Sophisticated, Soft, Sentimental but realistic.
        **ATTIRE:** - **Men:** Fine tailcoats, high collars, cravats, waistcoats (Regency/Victorian style).
        - **Women:** Elegant silk or satin gowns, lace details, fine jewelry.
        **SETTING:** A bright drawing room with tall windows or a manicured manor garden.
        **LIGHTING:** Soft, diffused, flattering natural daylight.
        `;
        // ENCUADRE CERCANO (Solicitud de usuario)
        framingOverride = "**FRAMING:** **Medium Shot (Waist Up).** Tighter framing to emphasize facial likeness and expressions.";
    } 
    
    // --- ESTILO 2: REY / REINA (PODER REALISTA - NO CARICATURA) ---
    else if (style === 'rey') {
        promptStyle = `
        ${familyBase}
        **STYLE:** **Museum-Quality Hyper-Realistic Oil Painting** of Royal Power (e.g., Velázquez, Hyacinthe Rigaud).
        **VIBE:** Imposing, Majestic, Serious, Somber Opulence. **NOT cartoonish. NOT fantasy bright.**
        **ATTIRE (MANDATORY):**
        - **Adults:** Heavy gold **IMPERIAL CROWNS** with real gemstones.
        - **Clothing:** Deep, rich velvet coronation robes (Deep Crimson, Navy Blue, Royal Purple) trimmed with heavy spotted ermine fur.
        - **Men:** Must look like a ruling Monarch. Holding a scepter or sword. Military royal uniform under the robe.
        **SETTING:** Grand Palace Throne Room. Dark wood, heavy velvet drapes, marble pillars.
        **LIGHTING:** **Dramatic Chiaroscuro.** Directional indoor light emphasizing the gold texture and deep shadows. Serious atmosphere.
        `;
        // Encuadre un poco más abierto para ver las túnicas y tronos
        framingOverride = "**FRAMING:** **Three-Quarter Shot (Knees Up).** To show the grandeur of the robes and the throne.";
    } 
    
    // --- ESTILO 3: BARROCO (DRAMÁTICO) ---
    else if (style === 'barroco') {
        promptStyle = `
        ${familyBase}
        **STYLE:** High Baroque / Dutch Golden Age (Rembrandt / Vermeer).
        **VIBE:** Dramatic, Intense, Painterly, "The Godfather" of historical portraits.
        **ATTIRE:** - Rich dark velvets, black satins, gold embroidery.
        - Stiff lace collars (ruffs) or heavy brocades.
        **SETTING:** Dark, atmospheric interior with a dark background (browns/blacks).
        **LIGHTING:** **Strong Chiaroscuro.** High contrast between the illuminated faces and the dark background.
        `;
        // ENCUADRE CERCANO (Solicitud de usuario)
        framingOverride = "**FRAMING:** **Medium Shot (Waist Up).** Tighter framing to emphasize dramatic facial expressions and the intense bond.";
    }

    // --- CONSTRUCTOR FINAL DEL PROMPT ---
    return `
    You are a Master Painter creating a museum-quality oil painting.
    **INSTRUCTIONS:**
    1. Analyze the ${numSubjects} input image(s) to determine if they are humans, pets, or a mix.
    2. Create a cohesive composition applying the rules below.
    3. Apply a rich oil painting texture.
    
    ${promptStyle}
    
    **CRITICAL TECHNICAL SPECS:**
    **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
    ${framingOverride || "**FRAMING:** Three-Quarter Shot (Knees Up)."}

    **NEGATIVE CONSTRAINTS (WHAT NOT TO DRAW):**
    - **DO NOT INCLUDE A PICTURE FRAME.** The image must be the painting itself, edge-to-edge canvas.
    - **NO CARTOONISH LOOKS.** Maintain high realism (Oil Painting).
    - **NO DISTORTED FACES.** Identity is key.
    `;
};
