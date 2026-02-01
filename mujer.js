// ARCHIVO: mujer.js
// V117: STRICT SUBJECT COUNT (NO EXTRAS EVER) + EMPODERADA RENACENTISTA FEMENINA (VENDIBLE)
// Nano Banana Pro: reglas duras para evitar sujetos inventados + empoderada dramática pero elegante.

module.exports = function(style, numSubjects, isGroup) {

    // --- 0. MOTOR DE MICRO-VARIACIONES ---
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const wowDetails = pick([
        "museum-grade oil glazing on skin and velvet highlights",
        "ultra-detailed gemstone reflections (premium, not flashy)",
        "controlled chiaroscuro with luminous facial planes",
        "soft atmospheric depth behind subjects (no haze on faces)",
        "gold-leaf accents in palace ornament (subtle, expensive)",
        "sfumato edges around hair and cheeks (no distortion)"
    ]);

    const brushwork = pick([
        "layered glazing + gentle impasto highlights",
        "visible confident brushstrokes on fabrics, ultra-refined faces",
        "old-master textured canvas grain with fine paint buildup",
        "collector-grade finish: crisp eyes, painterly surroundings"
    ]);

    // --- 0.1 STRICT COUNT ENGINE (mata extras + mata gente de fondo) ---
    const strictCountEngine = `
    **STRICT SUBJECT COUNT ENGINE — NON-NEGOTIABLE:**
    - Depict **EXACTLY ${numSubjects} human subject(s)** from the reference photo. **NO MORE, NO LESS.**
    - If there is a pet in the reference, include it (and any pets) — do not ignore pets.
    - **ABSOLUTELY NO EXTRA PEOPLE:** No background figures, no servants, no crowd silhouettes, no extra faces in paintings, mirrors, windows, or shadows.
    - **NO RECAST:** Do not invent new faces. Do not replace a person with a different-looking person.
    - **NO DUPLICATION:** Do not duplicate one person to “create” another.
    - **NO MERGING:** Do not merge faces.
    - If composition feels too tight: **zoom out / widen framing**. Never add or remove people.
    `;

    // --- 0.2 IDENTIDAD BLINDADA ---
    const identityLock = `
    **IDENTITY LOCK (PRIORITY #1):**
    - Preserve the **EXACT facial features** for each person (eye shape/spacing, nose, mouth, jawline, cheekbones).
    - Must be instantly recognizable. No “beauty-face replacement”.
    - Beautify only via lighting and subtle skin refinement — never change facial structure.
    - **HAIR LOCK:** Preserve haircut, length, hairline, texture. No new bangs. No major style change.
    `;

    // --- 0.3 POSE ENGINE (puede cambiar pose, NO la cara) ---
    const poseEngine = `
    **POSE ENGINE — WOW (FACE UNCHANGED):**
    - You may reinterpret body posture into a noble, flattering museum pose.
    - Improve posture: elongated spine, open shoulders, regal neckline.
    - Keep head angle recognizable; do not alter face shape.
    - Avoid awkward hands; keep hands elegant and natural.
    `;

    // --- 0.4 CONTEXT / PETS ---
    const contextEngine = `
    **CONTEXT INTELLIGENCE (READ PHOTO, DO NOT INVENT):**
    - Infer relationship ONLY from the reference (friends / family / couple).
    - Express it with tasteful body language and composition.
    - No cheesy posing. No exaggeration.
    `;

    const petEngine = `
    **PET RULES:**
    - Include ALL pets from the reference.
    - Place pet clearly visible (foreground or beside subjects).
    - Hyper-realistic fur texture and correct markings.
    `;

    // --- 1. ESTILOS (alta conversión, vendibles) ---
    let stylePrompt = "";

    if (style === 'musa') {
        const scenes = [
            "Twilight Lakeside with soft reflections",
            "Misty Forest at Dawn with gentle glow",
            "Ancient Garden with fireflies",
            "Rose Terrace at Sunset"
        ];
        const fabrics = ["flowing silk", "sheer chiffon", "antique lace", "soft satin"];
        const colors = ["Ivory & Champagne", "Lavender & Pearl", "Dusty Rose & Gold", "Sky Blue & Cream"];

        stylePrompt = `
        **STYLE:** Mythical Muse (fine-art, ethereal, poetic).
        **SCENE:** ${pick(scenes)}.
        **WARDROBE:** ${pick(fabrics)} gown in ${pick(colors)}.
        **LIGHTING:** soft sfumato glow.
        **WOW DETAIL:** ${wowDetails}.
        `;
    } 
    else if (style === 'realeza') {
        const scenes = [
            "Opulent Throne Room with chandeliers and gilded carvings",
            "Grand Hall of Mirrors with gold ornament",
            "Royal Gallery with tapestries and gilded frames",
            "Private Palace Chamber with velvet drapery and marble columns"
        ];
        const colors = ["Crimson Velvet & Gold Leaf", "Royal Blue & Diamonds", "Emerald & Gold", "Black Velvet & Diamonds"];
        const gowns = [
            "imperial brocade court gown with cathedral train",
            "velvet ballgown with ermine-trimmed mantle",
            "architectural grand gown with jeweled sash and embroidered cape"
        ];
        const regalia = [
            "a tall jeweled crown + heavy heirloom necklace",
            "an imperial diadem + layered pearl-and-gem collar",
            "a sparkling tiara + chandelier earrings + jeweled brooch"
        ];

        stylePrompt = `
        **STYLE:** Absolute Monarch (grand manner, maximum opulence).
        **SCENE:** ${pick(scenes)}.
        **WARDROBE:** ${pick(gowns)} in ${pick(colors)}.
        **MANDATORY REGALIA:** ${pick(regalia)}.
        **OPULENCE:** throne presence, gold leaf ornament, chandeliers, tapestries, marble columns.
        **LIGHTING:** luxury clarity; jewels and eyes sparkle.
        **WOW DETAIL:** ${wowDetails}.
        `;
    } 
    else if (style === 'empoderada') {
        // ✅ FIX: Empoderada renacentista femenina, dramática, vendible. Sin collarines feos.
        const scenes = [
            "Renaissance library with candlelight and rich wood",
            "Court chamber with velvet drapery and subtle heraldic motifs",
            "Stone hall with warm torchlight and deep shadows",
            "Elegant palace interior with carved chairs and tapestries"
        ];

        const feminineRenaissanceLooks = [
            "a Renaissance court gown with a **square neckline**, structured bodice, and refined puff sleeves (elegant, feminine)",
            "a velvet Renaissance noble dress with **clean high collar (no ruff)**, gold embroidery, and a fitted waist",
            "a brocade Renaissance gown with dramatic sleeves, jeweled belt, and flowing skirt (premium, flattering)",
            "a satin-and-velvet court dress with embroidered panels and delicate lace trim (tasteful, not costume)"
        ];

        const colors = [
            "Deep Oxblood Red & Antique Gold",
            "Midnight Blue & Gold Embroidery",
            "Dark Emerald & Warm Gold",
            "Obsidian Black & Champagne-Gold"
        ];

        const jewelry = [
            "a single heirloom pendant + refined earrings (premium minimal)",
            "layered delicate gold chains (tasteful, not bulky)",
            "a jeweled brooch on the bodice (classic, elegant)",
            "a pearl-and-gem necklace (balanced, not oversized)"
        ];

        const powerProps = [
            "a sealed letter and signet ring (authority)",
            "a richly bound book (intellect and control)",
            "a small ornate hand fan (court confidence)",
            "a subtle ceremonial sash (discipline)"
        ];

        stylePrompt = `
        **STYLE:** Renaissance Power Woman (feminine, dramatic, SELLABLE).
        **VIBE:** elegant dominance, magnetic presence, luxury control — not weird, not costume.
        **SCENE:** ${pick(scenes)}.
        **WARDROBE:** ${pick(feminineRenaissanceLooks)} in ${pick(colors)}.
        **JEWELRY:** ${pick(jewelry)}.
        **POWER PROP (SUBTLE):** ${pick(powerProps)}.
        **RULES:** No modern clothing. No exaggerated ruff collars. Avoid clownish neck pieces.
        **LIGHTING:** controlled chiaroscuro; sculpted face, expensive velvet shadows.
        **WOW DETAIL:** ${wowDetails}.
        `;
    } else {
        // fallback
        stylePrompt = `
        **STYLE:** Museum-grade classical portrait.
        **VIBE:** premium, collectible, elegant.
        **WOW DETAIL:** ${wowDetails}.
        `;
    }

    // --- 2. ENCUADRE Y JERARQUÍA ---
    let framing = "";
    
    if (numSubjects > 1) {
        const groupFraming = pick([
            "Wide Three-Quarter Group Portrait (recommended)",
            "Three-Quarter Length Group Portrait",
            "Medium Shot Group Portrait (only if everyone fits comfortably)"
        ]);

        framing = `
        **FRAMING:** GROUP DYNASTY.
        - Use **${groupFraming}**. Zoom out if needed.
        - Keep all heads fully visible inside the frame.
        - Keep the same left-to-right ordering as the reference.
        - The main woman gets best light and central emphasis, but everyone remains fully visible and recognizable.
        ${contextEngine}
        ${petEngine}
        `;
    } else {
        const soloFraming = pick([
            "Waist-Up Portrait (face + outfit balance)",
            "Three-Quarter Length Portrait (grand presence)",
            "Head & Shoulders Portrait (maximum emotional impact)"
        ]);

        framing = `
        **FRAMING:** ICONIC SOLO.
        - Use **${soloFraming}**.
        - Focus on eyes and face; museum presence.
        `;
    }

    // --- 3. PROMPT MAESTRO ---
    return `
    You are a Master Portrait Painter creating a **MUSEUM-QUALITY OIL PAINTING**.

    **TECHNICAL:**
    - **ASPECT RATIO:** vertical 4:5 (never square).
    - Oil on canvas look. Collector-grade finish.

    ${strictCountEngine}

    ${identityLock}

    ${poseEngine}

    **PORTRAIT RULE (IMPORTANT):**
    This must read as a portrait. Crisp eyes. Elegant proportions. No wide-angle distortion.

    **STYLE TRANSFORMATION:**
    ${stylePrompt}

    **COMPOSITION:**
    ${framing}

    **EXECUTION:**
    - Brushwork: ${brushwork}.
    - Make it feel like an expensive framed living-room masterpiece.

    **NEGATIVES:**
    - No extra people, no background silhouettes, no extra faces anywhere (mirrors/windows/paintings).
    - No missing subjects, no merged faces, no duplicated people.
    - No cartoon, no 3D, no anime.
    - No plastic skin, no over-smoothing.
    - No text, logos, watermarks, frames, UI.
    `;
};
