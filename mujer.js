// ARCHIVO: mujer.js
// V102: INCLUSIÓN TOTAL + JERARQUÍA (Ella es la protagonista, los demás acompañan)

module.exports = function(style, numSubjects, isGroup) {

    // --- 1. DEFINICIÓN DE ESTILOS (Musa, Reina, Empoderada) ---
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

    // --- 2. ENCUADRE Y JERARQUÍA (La Lógica Clave) ---
    let framing = "";
    
    if (numSubjects > 1) {
        // LÓGICA DE GRUPO: TODOS DENTRO, ELLA AL MANDO
        framing = `
        **FRAMING & HIERARCHY:** **GROUP PORTRAIT.**
        - **INCLUSION IS MANDATORY:** You must paint ALL ${numSubjects} subjects found in the input. Do not ignore children, friends, or pets.
        - **COMPOSITION:** Use a **Medium Shot (Waist Up)** or **Three-Quarter Shot**. Zoom out to fit everyone comfortably.
        - **VISUAL HIERARCHY:** The Main Woman is the PROTAGONIST. Place her centrally or give her the brightest lighting. The others (partners, kids, pets) should surround her lovingly, but **SHE MUST BE THE VISUAL FOCUS.**
        `;
    } else {
        // LÓGICA INDIVIDUAL
        framing = `
        **FRAMING:** **SOLO PORTRAIT.**
        - Analyze the pose. If the face is the power, do a **Close-Up**. 
        - If the dress is the power, do a **Medium Shot**. 
        - **Goal:** Make her look like the most important person in the world.
        `;
    }

    // --- 3. PROMPT MAESTRO ---
    return `
    You are a Master Portrait Painter creating a **MUSEUM-QUALITY OIL PAINTING**.

    **🔴 TECHNICAL:** ASPECT RATIO **VERTICAL 4:5**. DO NOT MAKE IT SQUARE.

    **STEP 1: THE CAST (NO ONE LEFT BEHIND)**
    - Input: **${numSubjects} subject(s)**. **PAINT EVERY SINGLE ONE.**
    - **CHECK:** Count the heads in the source photo. If there are 3, paint 3. If there is a dog, paint the dog.
    - **IDENTITY:** Preserve the **EXACT facial features** of the main woman. She must recognize herself instantly.
    - **PETS:** Paint pets with high-detail realism (fur texture, bright eyes). They are part of the family.

    **STEP 2: THE SCENE**
    ${stylePrompt}
    ${framing}

    **STEP 3: EXECUTION**
    - **Medium:** 100% Oil on Canvas.
    - **Brushwork:** Visible, artistic brushstrokes. NO digital smoothing.
    - **Transformation:** Replace boring clothes with the requested Historical/Royal attire for everyone.

    **⛔ NEGATIVE CONSTRAINTS:**
    - **DO NOT REMOVE ANY PERSON OR PET.**
    - DO NOT CHANGE THE MAIN WOMAN'S FACE.
    - NO UGLY POSES.
    - NO CARTOON, NO 3D.
    `;
};
