// ARCHIVO: ninos.js
// Lógica V1.0 (Inocencia, Terciopelo, Naturaleza Romántica)

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. REGLAS BASE PARA NIÑOS ---
    const kidsBase = `
    **1. IDENTITY (CRITICAL):**
    - You MUST maintain the exact facial features and likeness of the child/children.
    - Keep the innocence and specific age of the subject. Do NOT age them up.
    - **SKIN TEXTURE:** Soft, angelic, porcelain-like skin typical of classical child portraits (like Bouguereau paintings).

    **2. ATTIRE & VIBE (THE VICTORIAN CHILD):**
    - **BOYS:** Velvet suits (Forest Green, Burgundy, or Deep Blue), white ruffled collars, knickerbockers or breeches.
    - **GIRLS:** Silk or velvet dresses with lace trims, satin sashes, hair ribbons.
    - **BABIES:** White christening gowns with intricate embroidery or soft swaddling clothes.

    **3. INTERACTION:**
    - If multiple children: They should look like siblings. Gentle interaction, holding hands, or leaning on each other.
    - **PETS:** If a pet is present, it acts as a gentle guardian or playmate.
    `;

    let promptStyle = "";
    let framingOverride = "";

    // --- ESTILO 1: RENACIMIENTO (EL BOSQUE ENCANTADO) ---
    // Basado en tus fotos de los niños en el bosque
    if (style === 'renacimiento') {
        promptStyle = `
        ${kidsBase}
        **STYLE:** 19th Century Romanticism / Pre-Raphaelite Child Portrait (e.g., John Everett Millais, William-Adolphe Bouguereau).
        **VIBE:** Nostalgic, Dreamy, Innocent, Timeless.
        **SETTING:** A magical, slightly overgrown garden or a forest edge with soft dappled sunlight. Nature background is key.
        **LIGHTING:** Soft, golden-hour natural light. Magical glow.
        `;
        framingOverride = "**FRAMING:** **Full Body or Three-Quarter.** To show the interaction with the environment.";
    } 
    
    // --- ESTILO 2: REY / REINA (EL PEQUEÑO HEREDERO) ---
    else if (style === 'rey') {
        promptStyle = `
        ${kidsBase}
        **STYLE:** Royal Princely Portrait (Velázquez / Van Dyck style).
        **VIBE:** Noble, Precious, "The Little Prince/Princess".
        **ATTIRE:** - Delicate **Small Gold Circlet/Crowns** (Not heavy adult crowns, but delicate royal headpieces).
        - Royal velvet capes (Miniature versions).
        - Holding a small orb or a vintage toy/flower like a sceptre.
        **SETTING:** Palace Nursery or beside a velvet curtain and column.
        **LIGHTING:** Bright, luxurious indoor light.
        `;
        framingOverride = "**FRAMING:** **Three-Quarter Shot.** Focusing on the outfit and the royal posture.";
    } 
    
    // --- ESTILO 3: BARROCO (CLÁSICO DE ESTUDIO) ---
    // Basado en tus fotos de fondo oscuro
    else if (style === 'barroco') {
        promptStyle = `
        ${kidsBase}
        **STYLE:** Dutch Golden Age / Dark Romantic Studio.
        **VIBE:** Serious, Artistic, Soulful, Museum Masterpiece.
        **ATTIRE:** Rich dark velvets, stiff lace collars.
        **SETTING:** Dark, atmospheric background (Deep browns, blacks). No distractions.
        **LIGHTING:** **Chiaroscuro.** Soft light hitting the child's face against the dark background.
        `;
        framingOverride = "**FRAMING:** **Medium Shot (Waist Up).** Intense focus on the soulful eyes and expression.";
    }

    return `
    You are a Master Painter creating a museum-quality oil painting of a child.
    **INSTRUCTIONS:**
    1. Analyze the ${numSubjects} input image(s).
    2. Create a cohesive composition applying the rules below.
    3. Apply a rich oil painting texture.
    
    ${promptStyle}
    
    **CRITICAL TECHNICAL SPECS:**
    **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
    ${framingOverride || "**FRAMING:** Three-Quarter Shot."}

    **NEGATIVE CONSTRAINTS:**
    - **DO NOT INCLUDE A PICTURE FRAME.** Edge-to-edge canvas.
    - **NO SCARY ELEMENTS.** Keep it sweet and nostalgic.
    - **NO DISTORTED FACES.**
    `;
};
