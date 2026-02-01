// ARCHIVO: mujer.js
// V115: MASTERPIECE ENGINE (Inteligencia Contextual + Identidad Blindada + Inclusión Absoluta + WOW Enmarcable)
// Nano Banana Pro friendly: reglas claras, visuales, y con "Context Engine" para reflejar relaciones/persona/pets.

module.exports = function(style, numSubjects, isGroup) {

    // --- 0. MOTOR DE MICRO-VARIACIONES (Para que no parezca plantilla) ---
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const wowDetails = pick([
        "gold-leaf accents in ornamental details (subtle, premium)",
        "subtle atmospheric haze for cinematic depth (not foggy faces)",
        "museum-grade oil glazing on skin and fabric highlights",
        "ultra-detailed gemstone reflections and jewelry sparkle",
        "controlled chiaroscuro with luminous facial planes",
        "soft sfumato edges around cheeks and hair (no distortion)"
    ]);

    const brushwork = pick([
        "layered glazing + gentle impasto highlights",
        "visible confident brushstrokes on fabric, ultra-refined facial rendering",
        "old-master textured canvas grain with fine paint buildup",
        "museum conservator-level finish: crisp eyes, painterly surroundings"
    ]);

    // --- 0.1 CONTEXT ENGINE (Inteligencia contextual SIN inventar) ---
    // Esto instruye al modelo a leer la foto y reflejarlo visualmente.
    const contextEngine = `
    **CONTEXT INTELLIGENCE (READ THE PHOTO, DO NOT INVENT):**
    - Infer the relationship and context ONLY from the reference photo: friends / couple / family / siblings / colleagues.
    - Express it through **body language** (distance, touch, gaze direction, protective posture) and **composition**, not with text.
    - Keep it tasteful and premium. No cheesy poses.

    **RELATIONSHIP VISUAL RULES (choose what fits the photo):**
    - If they look like **two friends**: matching harmony, warm closeness, playful elegance, shared confidence; subtle mirroring posture.
    - If they look like **family/siblings**: protective arrangement, balanced closeness, dynasty vibe, gentle loyalty.
    - If they look like a **couple**: intimate but elegant; subtle touch (hand on arm/shoulder), shared gaze, romantic atmosphere (never explicit).
    - If they look like **colleagues**: confident spacing, mutual respect, “power duo” composition, calm authority.

    **PERSONALITY READ (from pose/outfit/energy):**
    - If she looks sweet/soft: keep her gentle, luminous, serene.
    - If she looks bold/strong: sharpen posture, chin slightly lifted, commanding gaze.
    - If she looks elegant: cleaner lines, refined jewelry, calm confidence.
    - Never stereotype. Use subtle cues only.

    **DO NOT CHANGE IDENTITY** while doing this.
    `;

    const petEngine = `
    **PET INTELLIGENCE (IF A PET EXISTS):**
    - Include ALL pets from the reference. Treat the pet as emotionally important.
    - Place the pet visibly (foreground or beside subjects), with correct markings and realistic fur texture.
    - If the pet is a dog: loyal guardian vibe (gentle, noble).
    - If the pet is a cat: regal elegance vibe (poised, mysterious).
    `;

    // --- 1. DEFINICIÓN DE ESTILOS DE ALTO IMPACTO (Variedad DENTRO del arquetipo) ---
    let stylePrompt = "";

    if (style === 'musa') {
        const scenes = [
            "Ancient Secret Garden with fireflies",
            "Twilight Lakeside with soft reflections",
            "Misty Forest at Dawn with glowing haze",
            "Rose Terrace at Sunset with warm blooms",
            "Moonlit Orchard with delicate fog"
        ];

        const fabrics = [
            "Sheer Chiffon",
            "Flowing Silk",
            "Antique Lace",
            "Soft Satin with gentle sheen"
        ];

        const colors = [
            "Dusty Rose & Antique Gold",
            "Lavender & Pearl White",
            "Sky Blue & Cream",
            "Ivory & Champagne",
            "Teal & Soft Bronze"
        ];

        const accessories = [
            "a delicate flower crown",
            "pearl hair ornaments placed on top of her existing hair",
            "vintage jewelry with subtle gemstones",
            "a thin gold laurel (subtle, not a crown)"
        ];

        stylePrompt = `
        **ARTISTIC VISION:** **The Mythical Muse (Pre-Raphaelite Masterpiece).**
        **INSPIRATION:** John William Waterhouse / Dante Gabriel Rossetti.
        **THE VIBE:** Ethereal, poetic, romantic, connected to nature. Collector-grade beauty.
        **SCENARIO:** ${pick(scenes)}.
        **ATTIRE:** A gown made of **${pick(fabrics)}** in **${pick(colors)}**, elevated couture drapery.
        **ACCESSORY:** ${pick(accessories)} (must NOT change haircut, only adorn existing hair).
        **LIGHTING:** **Sfumato Glow.** Soft edges, luminous skin, dreamy atmosphere.
        **WOW DETAIL:** ${wowDetails}.
        `;
    } 
    else if (style === 'realeza') {
        const scenes = [
            "Opulent Palace Throne Room with gilded carvings and chandeliers",
            "Grand Hall of Mirrors with gold ornament everywhere",
            "Royal Gallery Corridor lined with tapestries and gilded frames",
            "Private Audience Chamber with velvet drapery and marble columns",
            "Ceremonial Balcony overlooking an empire at sunset"
        ];

        const colors = [
            "Crimson Velvet & Gold Leaf",
            "Royal Blue & Diamonds",
            "Black Velvet & Diamond Highlights",
            "Emerald & Antique Gold",
            "Deep Purple & Amethyst with Gold Filigree",
            "Champagne Silk & Rubies"
        ];

        const gowns = [
            "a massive architectural court gown with a cathedral train",
            "a brocade ballgown with dense gold embroidery and layered skirts",
            "an imperial velvet gown with ermine-trimmed ceremonial mantle",
            "a grand gown with jeweled sash, embroidered cape, and ornate train"
        ];

        const crowns = [
            "a massive diamond crown",
            "an ornate imperial diadem",
            "a sparkling tiara with crown-like height",
            "a jewel-studded diadem with pearls"
        ];

        const jewels = [
            "a heavy statement necklace with rubies and diamonds",
            "layered pearl-and-gem collar chains",
            "chandelier earrings and a jeweled brooch",
            "gold filigree chest chains with gemstones"
        ];

        stylePrompt = `
        **ARTISTIC VISION:** **The Absolute Monarch (Grand Manner Portrait).**
        **INSPIRATION:** Winterhalter / Vigée Le Brun.
        **THE VIBE:** Unapologetic wealth, power, dynastic authority, maximum opulence.
        **SCENARIO:** ${pick(scenes)}.
        **ATTIRE:** ${pick(gowns)} in **${pick(colors)}**.
        **MANDATORY REGALIA:** **${pick(crowns)}** + **${pick(jewels)}** (must look heirloom-expensive).
        **OPULENCE RULE:** Add visible luxury: throne presence, gold leaf ornament, chandeliers, tapestries, marble columns.
        **LIGHTING:** High-Key Luxury or Rembrandt clarity — make jewels and eyes sparkle intensely.
        **WOW DETAIL:** ${wowDetails}.
        `;
    } 
    else if (style === 'empoderada') {
        // Empoderada = PODER RENACENTISTA (NO MODERNO)
        const scenes = [
            "Renaissance Council Chamber with dark wood and tapestries",
            "Royal Library / Map Room with candlelit authority",
            "Stone Hall with velvet drapery and heraldic motifs",
            "Court Interior with carved chairs and dramatic chiaroscuro",
            "Renaissance palace staircase at night with torchlight"
        ];

        const outfits = [
            "a Renaissance court gown with structured bodice, ornate ruff collar, and embroidered brocade panels",
            "a velvet Renaissance noble dress with slashed/puffed sleeves and layered gold chains",
            "a high-collared Renaissance outfit with heavy jewel trim and a jeweled sash",
            "a brocade Renaissance gown with dramatic sleeves, medallion jewelry, and a signet ring"
        ];

        const colors = [
            "Obsidian Black & Gold",
            "Deep Oxblood Red & Antique Gold",
            "Midnight Blue & Silver-Gold Embroidery",
            "Dark Emerald & Gold Filigree",
            "Espresso Brown & Bronze Highlights"
        ];

        const symbols = [
            "a signet ring and sealed letter (authority)",
            "a richly bound ledger/book (power through intellect)",
            "a jeweled medallion chain and brooch (command)",
            "court gloves and a ceremonial sash (discipline)"
        ];

        stylePrompt = `
        **ARTISTIC VISION:** **The Iron Lady (Renaissance Court Power).**
        **INSPIRATION:** Renaissance court portraiture + old-master drama.
        **THE VIBE:** Dominant, commanding, intimidating elegance — unmistakably noble power.
        **SCENARIO:** ${pick(scenes)}.
        **ATTIRE:** ${pick(outfits)} in **${pick(colors)}**.
        **POWER SYMBOL (SUBTLE):** ${pick(symbols)}.
        **NO MODERN RULE:** Absolutely no modern clothing, no tuxedo, no blazer, no contemporary fashion.
        **LIGHTING:** Controlled chiaroscuro — sculpted face, deep velvet shadows, regal intensity.
        **WOW DETAIL:** ${wowDetails}.
        `;
    }

    // --- 2. ENCUADRE Y JERARQUÍA (Smart Framing + Anti-Ignore) ---
    let framing = "";
    
    if (numSubjects > 1) {
        const groupFraming = pick([
            "Three-Quarter Length (recommended for inclusion)",
            "Wide Three-Quarter Group Portrait (dynasty composition)",
            "Medium Shot (Waist Up) only if everyone fits comfortably"
        ]);

        framing = `
        **FRAMING:** **GROUP/FAMILY DYNASTY (CONTEXT-AWARE).**
        - **INCLUSION:** You MUST paint ALL **${numSubjects}** human subjects. **NO ONE LEFT BEHIND.**
        - **PETS:** If pets exist in the reference, include **ALL pets**. Do not ignore them.
        - **STRICT COUNT:** Depict **EXACTLY ${numSubjects}** human subjects from the reference. No more, no less.
        - **COMPOSITION:** Use **${groupFraming}**. Zoom out if needed so everyone fits comfortably.
        - **SPATIAL RULE:** Keep the same left-to-right ordering as the reference. Keep all heads fully in frame.
        - **ANTI-OMISSION:** Do NOT omit, replace, duplicate, or merge any person. Every face must be clearly visible.
        - **HIERARCHY:** The main woman gets the best light and central emphasis, but all others remain fully visible and recognizable.
        ${contextEngine}
        ${petEngine}
        `;
    } else {
        const soloFraming = pick([
            "Close-Up (Head & Shoulders) for emotional impact",
            "Medium Shot (Waist Up) for face + outfit balance",
            "Three-Quarter Length for grandeur and presence"
        ]);

        framing = `
        **FRAMING:** **THE ICONIC SOLO (CONTEXT-AWARE).**
        - **CHOICE:** ${soloFraming}.
        - **Goal:** A powerful portrait that feels like a collectible masterpiece.
        ${contextEngine}
        `;
    }

    // --- 3. PROMPT MAESTRO (EL CEREBRO) ---
    return `
    You are a Master Portrait Painter creating a **MUSEUM-QUALITY OIL PAINTING**.

    **🔴 TECHNICAL REQUIREMENT:**
    **ASPECT RATIO:** **VERTICAL 4:5**. DO NOT MAKE IT SQUARE.

    **STEP 1: THE SUBJECTS (IDENTITY IS SACRED)**
    - Input: **${numSubjects} subject(s)**. **PAINT EVERY SINGLE ONE.**
    - **BIOMETRIC FIDELITY:** Preserve the **EXACT facial features** (eye shape/spacing, nose shape, mouth shape, jawline, cheekbones). Instantly recognizable.
    - **DO NOT RECAST:** Do not invent new faces. Do not “upgrade” the face into a different person.
    - **HAIR LOCK:** Keep the same haircut/length/texture as the reference. Do not change the cut. Do not add bangs.
    - **BEAUTIFICATION (SAFE):** Improve skin texture and lighting, but **DO NOT change facial structure**. No generic beauty face.
    - **SKIN FINISH:** Oil glazing — luminous, expensive, never plastic.
    - **PETS:** If there is a pet, paint it with hyper-realistic fur texture and correct markings. Treat the pet like royalty.

    **STEP 2: THE TRANSFORMATIONAL ART**
    ${stylePrompt}
    ${framing}

    **STEP 3: EXECUTION**
    - **Medium:** 100% Oil on Canvas.
    - **Brushwork:** ${brushwork}. No digital blur.
    - **Portrait Priority:** This must read as a portrait — crisp eyes, elegant proportions, no wide-angle distortion.
    - **Elevation:** Take the original pose and **ELEVATE IT** into a graceful, noble portrait (no stiff selfie vibe).
    - **Collector Finish:** The final image must feel like a framed living-room masterpiece.

    **⛔ NEGATIVE CONSTRAINTS:**
    - **DO NOT CHANGE THE FACE IDENTITY.**
    - **DO NOT IGNORE PETS OR PEOPLE.**
    - NO missing subjects. NO extra subjects. NO merged faces. NO replacing one person with another.
    - NO cartoon, NO 3D, NO anime.
    - NO plastic skin, no over-smoothing.
    - NO text, logos, watermarks, frames, UI.
    `;
};
