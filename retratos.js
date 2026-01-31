// ARCHIVO: retratos.js
// Lógica V1.0 (Ego, Estatus, Plano Medio, Belleza Clásica)

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. REGLAS BASE DE AUTO-RETRATO ---
    const portraitBase = `
    **1. IDENTITY (CRITICAL):**
    - You MUST maintain the exact facial features and likeness of the subject.
    - **EGO BOOST:** The subject must look their absolute best. dignified, confident, and powerful.
    - **EYES:** The gaze should be engaging and soulful. Direct eye contact with the viewer is preferred for a powerful connection.

    **2. COMPOSITION (CLOSE & PERSONAL):**
    - **Focus:** The subject is the absolute center of the world. No distractions.
    - **Pose:** - *Men:* Broad shoulders, upright posture, hand on a lapel or holding an artifact (book, sword, glove).
        - *Women:* Elegant neck curve, graceful hands, confident poise.

    **3. ROLES:**
    - Elevate the status. Even if the photo is casual, the painting must look like a wealthy aristocrat or intellectual.
    `;

    let promptStyle = "";
    let framingOverride = "";

    // --- ESTILO 1: RENACIMIENTO (EL INTELECTUAL / ROMÁNTICO) ---
    // Basado en la foto del hombre leyendo o en el jardín
    if (style === 'renacimiento') {
        promptStyle = `
        ${portraitBase}
        **STYLE:** 19th Century Romantic Portrait (Lord Byron / Jane Austen character).
        **VIBE:** Intellectual, Poetic, Sophisticated, Dreamy.
        **ATTIRE:**
        - **Men:** High-collar shirts, silk cravats, velvet waistcoats, tailored tailcoats.
        - **Women:** Delicate muslin or silk gowns, floral details, soft hairstyles.
        **SETTING:** A library with old books, a writing desk, or a lush English garden.
        **LIGHTING:** Soft, diffused, natural window light (Vermeer style).
        `;
        framingOverride = "**FRAMING:** **Medium Shot (Waist Up).** Close enough to see the texture of the skin and the intelligence in the eyes.";
    } 
    
    // --- ESTILO 2: REY / REINA (EL GOBERNANTE SUPREMO) ---
    else if (style === 'rey') {
        promptStyle = `
        ${portraitBase}
        **STYLE:** Royal Coronation Portrait (Hyacinthe Rigaud / Winterhalter).
        **VIBE:** Absolute Power, Wealth, Majesty, Intimidatingly Expensive.
        **ATTIRE:**
        - **MANDATORY:** **Golden Crown/Tiara**.
        - **Clothing:** Heavy Coronation Robes (Crimson/Blue Velvet) with spotted Ermine fur lining.
        - **Accessories:** Scepter, Orb, or a Sword of State. Heavy gold chains/jewelry.
        **SETTING:** Throne Room with red velvet drapery and marble columns.
        **LIGHTING:** Dramatic, glorious, golden light emphasizing the jewelry and power.
        `;
        framingOverride = "**FRAMING:** **Medium-Three Quarter.** Showing the crown and the torso with the royal regalia.";
    } 
    
    // --- ESTILO 3: BARROCO (EL ALMA INTENSA) ---
    // Basado en la foto del hombre de rojo oscuro
    else if (style === 'barroco') {
        promptStyle = `
        ${portraitBase}
        **STYLE:** Dutch Golden Age / Dark Romanticism (Rembrandt / Caravaggio).
        **VIBE:** Intense, Mysterious, Serious, Timeless, "The Masterpiece".
        **ATTIRE:**
        - **Men:** Black or deep burgundy velvet doublets, stiff ruffs or lace collars.
        - **Women:** Rich dark satin dresses, pearl necklaces, lace collars.
        **SETTING:** Dark, undefined atmospheric background (Black/Brown void). Focus purely on the person.
        **LIGHTING:** **Extreme Chiaroscuro.** One side of the face illuminated, the other in shadow. Dramatic and moody.
        `;
        framingOverride = "**FRAMING:** **Medium Shot (Chest Up).** Very intimate and dramatic. Focus on the face.";
    }

    return `
    You are a Master Painter creating a museum-quality self-portrait.
    **INSTRUCTIONS:**
    1. Analyze the input image to capture the exact likeness.
    2. Elevate the subject's status according to the style below.
    3. Apply a rich oil painting texture.
    
    ${promptStyle}
    
    **CRITICAL TECHNICAL SPECS:**
    **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
    ${framingOverride || "**FRAMING:** Medium Shot (Waist Up)."}

    **NEGATIVE CONSTRAINTS:**
    - **DO NOT INCLUDE A PICTURE FRAME.** Edge-to-edge canvas.
    - **NO OTHER PEOPLE.** This is a solo portrait.
    - **NO CARTOONISH FEATURES.** High realism only.
    `;
};
