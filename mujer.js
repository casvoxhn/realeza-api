// ARCHIVO: mujer.js
// V104: MASTERPIECE ENGINE (Variedad Infinita + Identidad Blindada + Neuromarketing Visual)

module.exports = function(style, numSubjects, isGroup) {

    // --- 0. MOTOR DE MICRO-VARIACIONES (Para que no parezca plantilla) ---
    // Esto inyecta "vida" y exclusividad a cada generación.
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // --- 1. DEFINICIÓN DE ESTILOS DE ALTO IMPACTO ---
    let stylePrompt = "";

    if (style === 'musa') {
        const scenes = ["Ancient Secret Garden with fireflies", "Twilight Lakeside with reflections", "Crumbling Marble Balcony with ivy", "Misty Forest at Dawn"];
        const fabrics = ["Sheer Chiffon", "Flowing Silk", "Antique Lace"];
        const colors = ["Dusty Rose & Gold", "Deep Emerald & Silver", "Ethereal White & Pearl", "Lavender & Cream"];
        
        stylePrompt = `
        **ARTISTIC VISION:** **The Mythical Muse (Pre-Raphaelite Masterpiece).**
        **INSPIRATION:** John William Waterhouse / Dante Gabriel Rossetti.
        **THE VIBE:** Ethereal, poetic, connected to nature. A dream.
        **SCENARIO:** ${pick(scenes)}.
        **ATTIRE:** A gown made of ${pick(fabrics)} in ${pick(colors)}. Adorned with a flower crown or delicate vintage jewelry.
        **LIGHTING:** **"Sfumato" Technique.** Soft edges, magical glowing skin, dreamy atmosphere.
        `;
    } 
    else if (style === 'realeza') {
        const scenes = ["Grand Hall of Mirrors", "Royal Terrace overlooking an Empire", "Opulent Palace Throne Room", "Luxurious Private Royal Garden"];
        const colors = ["Royal Blue & Diamonds", "Crimson Velvet & Gold", "Champagne Silk & Rubies", "Deep Purple & Amethyst"];
        
        stylePrompt = `
        **ARTISTIC VISION:** **The Absolute Monarch (Grand Manner Portrait).**
        **INSPIRATION:** Winterhalter / Vigée Le Brun.
        **THE VIBE:** Unapologetic wealth, power, and elegance.
        **SCENARIO:** ${pick(scenes)}.
        **ATTIRE:** A massive, architectural Ballgown in ${pick(colors)}. **MANDATORY:** A Sparkling Tiara and Statement Necklace.
        **LIGHTING:** **"Rembrandt" or High-Key Luxury.** Crisp, bright, making the jewelry and eyes sparkle intensely.
        `;
    } 
    else if (style === 'empoderada') {
        const scenes = ["Dramatic Opera Box", "Dark Luxurious Library", "High-Fashion Abstract Studio", "Grand Staircase at Night"];
        const outfits = ["Structured Black Velvet Tuxedo-Gown", "Deep Red Silk Power-Dress", "Gold Brocade High-Collar Outfit", "Dramatic Cape over Evening Gown"];
        
        stylePrompt = `
        **ARTISTIC VISION:** **The Iron Lady (Belle Époque / Vogue).**
        **INSPIRATION:** Giovanni Boldini / John Singer Sargent.
        **THE VIBE:** Kinetic energy, confidence, dominating the space.
        **SCENARIO:** ${pick(scenes)}.
        **ATTIRE:** ${pick(outfits)}. Sharp, expensive, fashion-forward.
        **LIGHTING:** **"Butterfly" Studio Lighting.** High contrast, sculpting the cheekbones. Dramatic and fierce.
        `;
    }

    // --- 2. ENCUADRE Y JERARQUÍA (Smart Framing) ---
    let framing = "";
    
    if (numSubjects > 1) {
        framing = `
        **FRAMING:** **GROUP/FAMILY DYNASTY.**
        - **INCLUSION:** You MUST paint ALL ${numSubjects} subjects (friends, partners, children, pets). NO ONE LEFT BEHIND.
        - **COMPOSITION:** Medium Shot (Waist Up) or Three-Quarter. Zoom out to fit everyone comfortably.
        - **HIERARCHY:** The Main Woman is the **QUEEN**. She gets the best light. The others surround her with love and admiration.
        `;
    } else {
        framing = `
        **FRAMING:** **THE ICONIC SOLO.**
        - **Dynamic Choice:** If the pose is emotional -> **Close-Up**. If the outfit is grand -> **Medium Shot**.
        - **Goal:** Make her look like the most important person in history.
        `;
    }

    // --- 3. PROMPT MAESTRO (EL CEREBRO) ---
    return `
    You are a Master Portrait Painter creating a **MUSEUM-QUALITY OIL PAINTING**.

    **🔴 TECHNICAL REQUIREMENT:**
    **ASPECT RATIO:** **VERTICAL 4:5**. DO NOT MAKE IT SQUARE.

    **STEP 1: THE SUBJECTS (IDENTITY IS SACRED)**
    - Input: **${numSubjects} subject(s)**. **PAINT EVERY SINGLE ONE.**
    - **FACE FIDELITY:** You must preserve the **EXACT facial features** (nose shape, eye shape, mouth, jawline) of the source photo.
    - **THE "WOW" FACTOR:** Do NOT change the face structure. Instead, use **Lighting and Skin Texture** to make her look radiant. 
    - **SKIN FINISH:** Use an "Oil Glazing" technique. The skin should look luminous and expensive, not plastic/smooth.
    - **PETS:** If there is a pet, paint it with **hyper-realistic fur texture**. Treat the pet like royalty.

    **STEP 2: THE TRANSFORMATIONAL ART**
    ${stylePrompt}
    ${framing}

    **STEP 3: EXECUTION**
    - **Medium:** 100% Oil on Canvas.
    - **Brushwork:** Visible, confident brushstrokes. No digital blur.
    - **Interpretation:** Take the original photo's pose and **ELEVATE IT**. Make it more graceful, more royal. Don't just copy a stiff selfie pose.

    **⛔ NEGATIVE CONSTRAINTS:**
    - **DO NOT CHANGE THE FACE IDENTITY.** (This is the #1 rule).
    - **DO NOT IGNORE PETS OR PEOPLE.**
    - NO BORING/STIFF POSES.
    - NO CARTOON, NO 3D, NO ANIME.
    - NO PICTURE FRAMES.
    `;
};
