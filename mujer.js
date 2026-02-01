// ARCHIVO: mujer.js
// V103: FIDELIDAD BIOMÉTRICA TEXTUAL + JERARQUÍA + MASCOTAS/GRUPOS

module.exports = function(style, numSubjects, isGroup) {

    // --- 1. DEFINICIÓN DE ESTILOS ---
    let stylePrompt = "";

    if (style === 'musa') {
        stylePrompt = `
        **ARTISTIC VISION:** **The Ethereal Muse.**
        **STYLE:** Pre-Raphaelite Oil Painting (Waterhouse). Soft, romantic.
        **THE LOOK:** Goddess of nature.
        **ATTIRE:** Flowing silk robes, soft drapes, flower accents. Colors: Deep Emerald, Dusty Rose, or Gold.
        **LIGHTING:** **Magical Sfumato.** Soft, glowing light.
        **BACKGROUND:** A blurred, artistic garden or twilight lake.
        `;
    } 
    else if (style === 'realeza') {
        stylePrompt = `
        **ARTISTIC VISION:** **The Absolute Queen.**
        **STYLE:** Royal Grand Manner Portrait (Winterhalter). Detailed, sharp.
        **THE LOOK:** Ruler of an empire. Maximum status.
        **ATTIRE:** Heavy Royal Ballgown (Satin/Velvet). Tiara is MANDATORY.
        **LIGHTING:** **Luxurious Daylight.** Bright, crisp lighting.
        **BACKGROUND:** An opulent palace interior.
        `;
    } 
    else if (style === 'empoderada') {
        stylePrompt = `
        **ARTISTIC VISION:** **The Iron Lady (Vogue Historical).**
        **STYLE:** High-Fashion Dramatic Portrait (Boldini / Sargent). Energetic.
        **THE LOOK:** She owns the room. Unstoppable confidence.
        **ATTIRE:** Structured Power-Fashion. Black Velvet, Deep Red Silk.
        **LIGHTING:** **Dramatic Chiaroscuro.** High contrast studio light.
        **BACKGROUND:** Dark, luxurious abstract or heavy curtains.
        `;
    }

    // --- 2. ENCUADRE Y JERARQUÍA ---
    let framing = "";
    
    if (numSubjects > 1) {
        framing = `
        **FRAMING & HIERARCHY:** **GROUP PORTRAIT.**
        - **INCLUSION:** Paint ALL ${numSubjects} subjects found in the input (friends, children, pets). Do not ignore anyone.
        - **COMPOSITION:** Use a **Medium Shot (Waist Up)**. Zoom out to fit everyone.
        - **HIERARCHY:** The Main Woman is the **PROTAGONIST**. Give her the best lighting and central position. Pets/Partners complement her.
        `;
    } else {
        framing = `
        **FRAMING:** **SOLO PORTRAIT.**
        - Use **Best Aesthetic Choice**: Close-Up for emotion, Medium Shot for fashion. 
        - **Goal:** Make her look like the most important person in the world.
        `;
    }

    // --- 3. PROMPT MAESTRO (CON CANDADO BIOMÉTRICO) ---
    return `
    You are a Master Portrait Painter creating a **MUSEUM-QUALITY OIL PAINTING**.

    **🔴 TECHNICAL:** ASPECT RATIO **VERTICAL 4:5**. DO NOT MAKE IT SQUARE.

    **STEP 1: THE SUBJECTS (IDENTITY LOCK)**
    - Input: **${numSubjects} subject(s)**. **PAINT EVERY SINGLE ONE.**
    - **BIOMETRIC FIDELITY:** You must keep the **EXACT facial features** (nose, eyes, mouth) of the source photo. The person must be instantly recognizable.
    - **BEAUTIFICATION:** Improve skin texture and lighting, but do NOT change the facial structure to look generic.
    - **PETS:** If there is a pet, paint it with high-detail realism. Do not ignore it.

    **STEP 2: THE SCENE**
    ${stylePrompt}
    ${framing}

    **STEP 3: EXECUTION**
    - **Medium:** 100% Oil on Canvas.
    - **Brushwork:** Visible, artistic brushstrokes. NO digital smoothing.
    - **Transformation:** Replace boring clothes with the requested Historical/Royal attire.

    **⛔ NEGATIVE CONSTRAINTS:**
    - **DO NOT CHANGE THE FACE.** (Identity is priority #1).
    - **DO NOT REMOVE ANY PERSON OR PET.**
    - NO UGLY POSES.
    - NO CARTOON, NO 3D.
    `;
};
