// ARCHIVO: mujer.js
// Lógica V82: SIMPLIFICADA. Fidelidad Total + Encuadre Automático + Cero Rigidez.

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. LÓGICA DE ENCUADRE AUTOMÁTICA (No dejamos que la IA decida mal) ---
    let framingInstruction = "";
    
    if (numSubjects > 1) {
        // Si hay más de 1 (mujer + hijos/perro/amiga), forzamos plano abierto.
        framingInstruction = "**FRAMING:** MEDIUM SHOT or THREE-QUARTER SHOT. You MUST zoom out enough to include ALL subjects comfortably. Do not cut anyone off.";
    } else {
        // Si es solo ella, damos libertad entre retrato y medio cuerpo.
        framingInstruction = "**FRAMING:** Portrait or Medium Shot. Focus on her beauty, but keep the framing natural, not stiff.";
    }

    // --- 2. ESTILOS SIMPLIFICADOS (Ambiente y Ropa, no Poses Rígidas) ---
    let stylePrompt = "";

    if (style === 'musa') {
        stylePrompt = `
        **STYLE:** Magical Fantasy Oil Painting (Pre-Raphaelite style).
        **ATMOSPHERE:** Dreamy, soft, surrounded by nature and magic. A blooming garden or enchanted forest.
        **ATTIRE:** Flowing silk robes, pastel colors (rose, lilac, gold), flower crowns.
        **LIGHTING:** Soft, magical glow. Ethereal and romantic.
        `;
    } 
    else if (style === 'realeza') {
        stylePrompt = `
        **STYLE:** High-End Royal Portrait (Disney-esque Realism). Vibrant and Colorful.
        **ATMOSPHERE:** A bright, luxurious palace balcony or garden. Blue skies, white marble.
        **ATTIRE:** Pompous, colorful ballgown (Pink, Blue, Emerald). Sparkling Tiara and Jewels.
        **LIGHTING:** Bright daylight, happy and majestic.
        `;
    } 
    else if (style === 'empoderada') {
        stylePrompt = `
        **STYLE:** High-Fashion Historical Studio Photography (Vogue 1920s style).
        **ATMOSPHERE:** Luxurious dark studio background (Velvet curtains, abstract texture).
        **ATTIRE:** Elegant, structured fashion. Black velvet, deep red, pearls, sophisticated evening gowns.
        **LIGHTING:** Dramatic Studio Lighting. High contrast, elegant and sharp.
        `;
    }

    // --- 3. PROMPT FINAL BLINDADO ---
    return `
    You are a Master Artist creating a custom portrait.
    
    **STEP 1: SUBJECT CHECK (CRITICAL)**
    - You have received images containing **${numSubjects} subject(s)** (people/pets).
    - **YOU MUST PAINT EXACTLY ${numSubjects} SUBJECTS.** - **DO NOT IGNORE ANYONE.** If there is a dog, paint the dog. If there is a child, paint the child. If there is a friend, paint the friend.
    - **HIERARCHY:** The main woman is the focal point, but all other subjects must be present and interacting naturally with her.

    **STEP 2: IDENTITY & FACIAL FIDELITY**
    - **KEEP THE FACES EXACTLY AS THEY ARE.** Do not change features, nose, eyes, or expressions to look "generic". 
    - Beautify via **Lighting and Skin Texture**, NOT by changing bone structure.
    - The subjects must be instantly recognizable.

    **STEP 3: STYLE & COMPOSITION**
    ${stylePrompt}
    
    ${framingInstruction}
    
    **NEGATIVE CONSTRAINTS:**
    - DO NOT REMOVE PEOPLE OR PETS.
    - DO NOT CHANGE FACES.
    - NO STIFF/RIGID POSES.
    - No books, no glasses, no masculine clothes.
    - No sad expressions.
    `;
};
