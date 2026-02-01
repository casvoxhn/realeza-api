// ARCHIVO: mujer.js
// Lógica V78: NEUROMARKETING FEMENINO, EFECTO WOW, BELLEZA Y LUJO (Cero cosas aburridas)

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. REGLAS DE ORO: BELLEZA, STATUS Y DESEO ---
    const baseInstructions = `
    **CRITICAL CORE INSTRUCTIONS FOR FEMALE PORTRAITS:**
    1.  **THE "WOW" FACTOR (BEAUTY FILTER):** The main goal is to make the subject look BREATHTAKING. Use "Beauty Lighting" (soft, glowing skin, sparkling eyes). Flattering angles only.
    2.  **EXTREME FEMININITY:** Emphasize feminine grace, curves, elegance, and softness. NO masculine energy, NO stiff poses.
    3.  **STATUS & LUXURY:** Every element must scream "expensive." Silks, diamonds, flowers, gold.
    4.  **FIDELITY:** Keep her face recognizably hers, but elevated to her most beautiful historical version.
    5.  **NO BOOKS/NO INTELLECTUAL PROPS:** We want visual pleasure, not study. Use fans, flowers, jewelry, or mirrors instead.
    `;

    let promptStyle = "";
    let framingOverride = "";

    // --- ESTILO 1: LA MUSA (Diosa Etérea / Sueño Romántico) ---
    // Objetivo: Que se sienta como una obra de arte viviente. Suave, soñadora, irresistible.
    if (style === 'musa') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** Pre-Raphaelite / Romanticism (Waterhouse / Rossetti style). Ethereal, dreamy, hyper-feminine.
        **SETTING:** A magical, blooming rose garden at twilight or a fantasy balcony with floating petals. The background should be blurry and dreamy (Bokeh effect).
        **ATTIRE:** Flowing, semi-sheer chiffon or silk robes in pastel tones (Dusty Pink, Lilac, Soft Gold). The fabric should look like it's floating. Flower crown or jewels woven into loose, wavy hair.
        **POSE:** Sensual and relaxed. Looking over the shoulder, or touching a flower to her lips. Eyes half-closed or looking dreamily at the viewer.
        **LIGHTING:** **Ethereal Glow.** Soft, backlit "Halo" lighting that makes the hair shine and skin look porcelain and flawless.
        `;
        framingOverride = "**FRAMING:** Medium Close-Up. Focus on the face, hair texture, and the romantic mood.";
    } 
    
    // --- ESTILO 2: LA REINA (Alta Costura Real / Bridgerton Elevado) ---
    // Objetivo: Poder absoluto pero con moda explosiva. "Soy la dueña de todo".
    else if (style === 'realeza') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** Winterhalter / Rococo Royal Portrait. High Fashion History. Bright, colorful, opulent.
        **SETTING:** A spectacular palace ballroom with crystal chandeliers and golden mirrors. Bright and airy.
        **ATTIRE:** Massive, spectacular ballgown. Satin and lace in vibrant colors (Royal Blue, Emerald, or Ruby Red). A massive diamond tiara and necklace that sparkle intensely.
        **POSE:** Regal confidence. Standing tall, chin slightly up (proud), hands resting elegantly on the dress volume. A "Queen of the Ball" attitude.
        **LIGHTING:** **Sparkling Brilliance.** Bright, frontal lighting that highlights the jewelry sparkles and the sheen of the satin dress.
        `;
        framingOverride = "**FRAMING:** Three-Quarter Shot (Knees up). Show the incredible volume of the dress and the jewelry.";
    } 
    
    // --- ESTILO 3: EMPODERADA (Femme Fatale / Dama de Alta Sociedad) ---
    // Objetivo: Magnetismo, seducción elegante, misterio.
    else if (style === 'empoderada') {
        promptStyle = `
        ${baseInstructions}
        **STYLE:** Belle Époque Portrait (Boldini / Sargent style). Dynamic, swishing fabrics, magnetic personality.
        **SETTING:** A luxurious private boudoir or an opera box with red velvet curtains.
        **ATTIRE:** A stunning, form-fitting velvet gown in Deep Black or Burgundy. Long silk gloves. Statement jewelry (pearls or rubies).
        **POSE:** Confident and slightly seductive. Hand on hip, or adjusting a glove. Intense, direct eye contact that creates a connection. "I am the main character."
        **LIGHTING:** **Dramatic Glamour.** High contrast but flattering. Highlights on the cheekbones and collarbones.
        `;
        framingOverride = "**FRAMING:** Medium Shot. Focus on the silhouette, the posture, and the intense gaze.";
    }

    // --- ESTRUCTURA FINAL DEL PROMPT ---
    return `
    You are a Master Painter creating a stunning, commercially appealing oil painting of a woman.
    **INSTRUCTIONS:**
    1.  **Analyze** the input image(s) to capture the subject's beauty and likeness.
    2.  **Transform** her into the specific style below, maximizing beauty and femininity.
    3.  **Apply** a rich, glossy oil painting texture.
    
    ${promptStyle}
    
    **CRITICAL TECHNICAL SPECS:**
    **FORMAT:** Aspect Ratio 4:5 (Standard Portrait).
    ${framingOverride}
    **NEGATIVE CONSTRAINTS (STRICT):** **NO BOOKS, NO GLASSES, NO MASCULINE CLOTHING**, no boring backgrounds, no sad expressions, no distorted faces, no extra limbs. The image must be BEAUTIFUL and DESIRABLE.
    `;
};
