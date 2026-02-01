// ARCHIVO: mujer.js
// V106: MASTER SELLER ENGINE + PELO BLINDADO (Identidad Total)

module.exports = function(style, numSubjects, isGroup) {

    // --- 0. MOTOR DE ALEATORIEDAD (Variedad Infinita) ---
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // --- 1. CONFIGURACIÓN DINÁMICA DE ESTILOS ---
    let styleDetails = "";

    if (style === 'musa') {
        const scenes = [
            "a mysterious Ancient Forest with dappled sunlight",
            "a serene Crystal Lake at twilight with reflections",
            "a crumbling Marble Balcony overrun with ivy and roses",
            "a Secret Garden filled with magical mist and blooming hydrangeas",
            "a Golden Wheat Field under a dramatic soft sunset"
        ];
        const fabrics = ["Sheer Chiffon", "Flowing Silk", "Antique Lace", "Soft Velvet"];
        const colors = ["Dusty Rose & Gold", "Deep Emerald & Silver", "Ethereal White & Pearl", "Lavender & Cream", "Sapphire Blue"];
        
        styleDetails = `
        **ARTISTIC VISION:** **The Mythical Muse (Pre-Raphaelite Masterpiece).**
        **INSPIRATION:** John William Waterhouse / Dante Gabriel Rossetti.
        **SCENE:** ${pick(scenes)}.
        **ATTIRE:** A gown made of ${pick(fabrics)} in ${pick(colors)}. Adorned with delicate vintage jewelry.
        **HEAD:** You may add a flower crown gently, but **DO NOT HIDE THE HAIR**.
        **MOOD:** Dreamy, poetic, connected to nature.
        **LIGHTING:** **"Sfumato" Technique.** Soft edges, magical glowing skin, flattering soft light.
        `;
    } 
    else if (style === 'realeza') {
        const scenes = [
            "a Grand Hall of Mirrors with crystal chandeliers",
            "a Royal Terrace overlooking a vast empire",
            "an Opulent Palace Throne Room with marble columns",
            "a Luxurious Private Royal Garden with statues"
        ];
        const colors = ["Royal Blue & Diamonds", "Crimson Velvet & Gold", "Champagne Silk & Rubies", "Deep Purple & Amethyst", "Emerald Green & Gold Thread"];
        
        styleDetails = `
        **ARTISTIC VISION:** **The Absolute Monarch (Grand Manner Portrait).**
        **INSPIRATION:** Franz Xaver Winterhalter / Vigée Le Brun.
        **SCENE:** ${pick(scenes)}.
        **ATTIRE:** A massive, architectural Ballgown in ${pick(colors)}. **MANDATORY:** A Sparkling Tiara and heavy Statement Necklace.
        **HEAD:** The Tiara must sit on her **ACTUAL HAIRSTYLE**.
        **MOOD:** Unapologetic wealth, maximum status, elegance.
        **LIGHTING:** **"Rembrandt" or High-Key Luxury.** Crisp, bright, making the jewelry and eyes sparkle intensely.
        `;
    } 
    else if (style === 'empoderada') {
        const scenes = [
            "a Luxurious Renaissance Library with globes and maps",
            "a Grand Stone Staircase in a bright palace",
            "a Venetian Balcony overlooking the canal",
            "an Opulent Painting Studio with art in the background"
        ];
        const outfits = [
            "a Structured Gold Brocade Gown with a high Medici collar",
            "a Deep Red Velvet dress with pearls and gold embroidery",
            "a Rich Navy Blue Silk gown with a dramatic cape",
            "a Renaissance gown with puffed sleeves and intricate corset work"
        ];
        const vibes = ["Chin up, commanding gaze", "Hand on hip, owning the space", "Looking down with a confident smile", "Standing tall with regal posture"];

        styleDetails = `
        **ARTISTIC VISION:** **The Renaissance Powerhouse (The Matriarch).**
        **INSPIRATION:** Bronzino / Titian / High Renaissance.
        **SCENE:** ${pick(scenes)}.
        **ATTIRE:** ${pick(outfits)}. **NO MODERN CLOTHES.** Everything must look historical, expensive, and structured.
        **MOOD:** **EGO & POWER.** ${pick(vibes)}. She is not sad; she is powerful and elegant.
        **LIGHTING:** **Dramatic but Flattering.** Sculpted light that highlights the face structure and the richness of the fabric.
        `;
    }

    // --- 2. ENCUADRE INTELIGENTE (INCLUSIVO) ---
    let framingInstruction = "";
    
    if (numSubjects > 1) {
        framingInstruction = `
        **COMPOSITION:** **DYNASTY GROUP PORTRAIT.**
        - **INCLUSION MANDATE:** You MUST paint ALL ${numSubjects} subjects found in the input. 
          - If there are **MEN**: Paint them as Kings/Dukes/Princes matching the woman's style.
          - If there are **PETS**: Paint them as Royal Pets (high detail fur).
        - **FRAMING:** Medium Shot (Waist Up) or Three-Quarter. Zoom out to fit everyone comfortably.
        - **HIERARCHY:** The Main Woman is the **CENTERPIECE**. She gets the best light. Everyone else revolves around her.
        `;
    } else {
        framingInstruction = `
        **COMPOSITION:** **THE BEST SELLER PORTRAIT.**
        - **Intelligent Framing:** Analyze the input.
          - If the face/hair is the focus -> **Close-Up Portrait** (Focus on eyes/jewelry).
          - If the pose is strong -> **Medium Shot** (Focus on the dress/posture).
        - **Goal:** Make her fall in love with her own image. Flattering angles only.
        `;
    }

    // --- 3. PROMPT MAESTRO (EL CEREBRO) ---
    return `
    You are a Master Portrait Painter creating a **MUSEUM-QUALITY OIL PAINTING**.

    **🔴 TECHNICAL REQUIREMENT:**
    **ASPECT RATIO:** **VERTICAL 4:5**. DO NOT MAKE IT SQUARE.

    **STEP 1: THE SUBJECTS (IDENTITY & HAIR LOCK)**
    - Input: **${numSubjects} subject(s)**. **PAINT EVERY SINGLE ONE.**
    - **FACIAL FIDELITY:** Preserve the **EXACT facial features** (nose, eyes, mouth, jawline).
    - **HAIR FIDELITY (CRITICAL):** **DO NOT CHANGE THE HAIRSTYLE.** Keep the original **Length, Texture, and Cut** of the hair.
      - If she has short hair, KEEP IT SHORT.
      - If she has curly hair, KEEP IT CURLY.
      - Do NOT put a generic wig on her. Integrate the accessories (Tiara/Flowers) onto her **REAL HAIR**.
    - **BEAUTIFICATION:** Improve skin texture (Oil Glazing) and lighting, but do NOT morph the person.
    - **MEN & PETS:** Stylize them historically but keep their identity/breed recognizable.

    **STEP 2: THE SCENE & STYLE (DYNAMIC)**
    ${styleDetails}
    
    **STEP 3: EXECUTION (THE SALE)**
    ${framingInstruction}
    - **Medium:** 100% Oil on Canvas.
    - **Brushwork:** Visible, confident, artistic brushstrokes. NO digital blur.
    - **Transformation:** Eliminate all modern clothing/backgrounds. Replace with the requested Luxury Historical setting.

    **⛔ NEGATIVE CONSTRAINTS:**
    - **DO NOT CHANGE THE HAIR LENGTH OR STYLE.**
    - **DO NOT CHANGE THE FACE IDENTITY.**
    - **DO NOT REMOVE PEOPLE OR PETS.**
    - NO MODERN CLOTHING (No t-shirts, no glasses).
    - NO CARTOON, NO 3D RENDER.
    - NO PICTURE FRAMES.
    `;
};
