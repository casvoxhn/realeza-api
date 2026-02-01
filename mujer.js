// ARCHIVO: mujer.js
// V92 FINAL ENGINE: MOTOR DE ALEATORIEDAD + CALIDAD EXTREMA + IDENTIDAD BLINDADA

module.exports = function(style, numSubjects, isGroup) {

    // --- 0. MOTOR DE ALEATORIEDAD (El antídoto contra el aburrimiento) ---
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // --- 1. CONFIGURACIÓN DINÁMICA DE ESTILOS ---
    let styleDetails = "";

    if (style === 'musa') {
        const settings = [
            "a mysterious ancient forest with dappled sunlight",
            "a serene lakeside at twilight with reflection on the water",
            "a crumbling greek stone balcony overrun with ivy and roses",
            "a secret garden filled with glowing fireflies and mist",
            "a golden wheat field under a dramatic sunset"
        ];
        const colors = ["Dusty Rose and Gold", "Deep Emerald and Silver", "Ethereal White and Pearls", "Rich Lavender and Cream", "Sapphire Blue and Bronze"];
        const textures = ["sheer chiffon", "heavy velvet", "intricate lace", "flowing silk"];
        const poses = [
            "looking dreamily over her shoulder",
            "touching a flower delicately near her face",
            "reclining gracefully on a stone bench",
            "standing tall with wind blowing through her hair",
            "gazing upward with a look of longing"
        ];

        styleDetails = `
        **STYLE:** **Pre-Raphaelite Masterpiece** (Influence: Waterhouse, Rossetti, Leighton).
        **SCENE:** ${pick(settings)}.
        **ATTIRE:** A unique ${pick(colors)} gown made of ${pick(textures)}. adorned with flower crowns or subtle vintage jewelry.
        **POSE ACTION:** She is ${pick(poses)}. NO STIFFNESS. Fluid, organic movement.
        **LIGHTING:** **Ethereal Sfumato.** Soft, hazy, magical light that wraps around the subject.
        `;
    } 
    else if (style === 'realeza') {
        const settings = [
            "a grand Hall of Mirrors with crystal chandeliers",
            "a royal terrace overlooking a vast empire",
            "a private royal garden filled with white marble statues",
            "the grand staircase of a winter palace",
            "an opulent tea room with gold leaf walls"
        ];
        const colors = ["Royal Blue and Diamonds", "Crimson Red and Ermine Fur", "Emerald Green and Gold Embroidery", "Champagne Silk and Rubies", "Deep Purple and Amethyst"];
        const props = ["resting a hand on a velvet chair", "adjusting a diamond bracelet", "standing with regal posture holding the dress volume", "looking proudly at her domain"];
        
        styleDetails = `
        **STYLE:** **Grand Manner Royal Portrait** (Influence: Winterhalter, Vigée Le Brun).
        **SCENE:** ${pick(settings)}.
        **ATTIRE:** A Massive, Pompous Ballgown in ${pick(colors)}. **MANDATORY:** A spectacular Tiara and statement necklace.
        **POSE ACTION:** Majestic and proud, ${pick(props)}.
        **LIGHTING:** **Sparkling Daylight.** Crisp, high-end illumination that makes the jewelry blind the viewer with brilliance.
        `;
    } 
    else if (style === 'empoderada') {
        const settings = [
            "a luxurious private library with dark wood",
            "an opera box with heavy red velvet curtains",
            "a high-fashion studio with an abstract painted backdrop",
            "a dramatic balcony with a stormy sky background",
            "a sophisticated Parisian salon at night"
        ];
        const outfits = [
            "a structured black velvet tuxedo-style gown",
            "a daring deep red silk dress with gloves",
            "a gold brocade outfit with a high collar",
            "a dramatic cape over a fitted evening gown"
        ];
        const vibes = ["intense and challenging", "mysterious and seductive", "confident and owning the room", "intellectual and sharp"];

        styleDetails = `
        **STYLE:** **Belle Époque / Vogue Historical** (Influence: Giovanni Boldini, John Singer Sargent).
        **SCENE:** ${pick(settings)}.
        **ATTIRE:** ${pick(outfits)}. High-fashion, expensive, bold.
        **POSE ACTION:** ${pick(vibes)}. Dynamic brushwork, swishing fabrics, kinetic energy.
        **LIGHTING:** **Dramatic "Butterfly" Studio Light.** High contrast, sculpting the face, highlighting the eyes.
        `;
    }

    // --- 2. LÓGICA DE ENCUADRE INTELIGENTE ---
    let framingInstruction = "";
    if (numSubjects > 1) {
        framingInstruction = "**COMPOSITION:** GROUP SHOT. Use a **Medium Shot (Waist Up)** or **Three-Quarter Shot**. Zoom out to include ALL subjects (children/pets) comfortably. Create a cohesive connection between them.";
    } else {
        framingInstruction = `
        **COMPOSITION:** **BEST AESTHETIC CHOICE.**
        - **Analyze the Pose:** If the dress/outfit is massive, pull back to a Medium Shot.
        - **Analyze the Face:** If the expression is captivating, ZOOM IN for a Portrait.
        - **DO NOT DEFAULT TO THE SAME FRAMING.** Vary the distance based on what looks most expensive.
        `;
    }

    // --- 3. PROMPT MAESTRO (EL CEREBRO) ---
    return `
    You are a Master Painter creating a **MUSEUM-QUALITY OIL PAINTING**.

    **🔴 TECHNICAL REQUIREMENT:**
    **ASPECT RATIO:** **VERTICAL 4:5**. DO NOT MAKE IT SQUARE.

    **STEP 1: THE SUBJECT (IDENTITY LOCK)**
    - Input: **${numSubjects} subject(s)**. **PAINT THEM ALL.**
    - **BIOMETRIC FIDELITY:** You must keep the **EXACT facial features** (nose, eyes, mouth structure) of the source photo.
    - **TRANSFORMATION:** The person is the ACTOR. The face remains hers, but the **style, hair volume, skin texture, and lighting** must be elevated to "Goddess/Queen" levels.

    **STEP 2: THE SCENE (DYNAMIC GENERATION)**
    ${styleDetails}
    
    **STEP 3: EXECUTION**
    ${framingInstruction}
    - **TEXTURE:** Rich, visible oil brushstrokes. Impasto details on jewelry/flowers. Glazing on skin.
    - **QUALITY:** Hyper-detailed, award-winning art.

    **⛔ NEGATIVE CONSTRAINTS:**
    - **DO NOT REPEAT THE SAME POSE AS THE INPUT PHOTO.** ACT!
    - **DO NOT CHANGE THE FACIAL IDENTITY.**
    - NO PICTURE FRAMES, NO BORDERS.
    - NO CARTOON, NO 3D RENDER, NO PLASTIC SKIN.
    - NO RIGID/STIFF POSES.
    `;
};
