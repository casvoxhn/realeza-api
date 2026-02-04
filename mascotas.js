// ARCHIVO: mascotas.js
// CATEGORÍA: Mascotas (PET-FIRST) - V3.3 (WOW + Child Identity Lock)
// Objetivo: seguir PET-FIRST, pero si hay niños/bebés en la foto, NO se permite cambiar cara/pelo.
// Cambio clave: añade HUMAN/CHILD IDENTITY LOCK + "human-safe lighting/backdrop" cuando haya humanos.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const weightedPick = (items) => {
    const total = items.reduce((sum, it) => sum + (it.weight || 1), 0);
    let r = Math.random() * total;
    for (const it of items) {
      r -= (it.weight || 1);
      if (r <= 0) return it.value;
    }
    return items[items.length - 1].value;
  };

  const isMulti = numSubjects > 1 || !!isGroup;

  // 0) HUMAN/CHILD IDENTITY LOCK (solo se "activa" si hay humanos/niños visibles en la imagen)
  const humanIdentityLock = `
========================
🔒 HUMAN / CHILD IDENTITY LOCK (ONLY IF A HUMAN CHILD/BABY IS PRESENT)
========================
- If any child/baby/human appears in the reference photo(s), preserve **exact identity**:
  - **Eye shape must NOT change** (no almonding, no lifting corners, no narrowing).
  - **Cheek volume must NOT slim down** (keep baby fat / natural fullness).
  - **Nose width/bridge, mouth/lips, chin/jawline, ear placement** must match.
  - **Hair must match**: same hairline, haircut/length, texture (curly/straight), bangs/part, and color. Do not restyle hair.
- Do NOT beautify, do NOT sculpt faces, do NOT “idealize” to fit the era.
- Apply the style to **materials/texture/lighting only**, never to facial anatomy.
- If style conflicts with likeness: **likeness wins**.
- The child’s face must be clearly visible and properly lit (no shadowy child).
`;

  // 1) Guardrails Pet + Modesty + Life + (añadimos reglas de humano/niño)
  const petGuardrails = `
**CATEGORY GUARDRAILS (PETS / HIGH-END MASTERPIECE):**
- **PET-FIRST:** The animal is the absolute king/queen of the image.
- **PET IDENTITY:** Preserve coat color, pattern, markings, and specific ear shape exactly.
- **AESTHETIC MODESTY (CRITICAL):** Use natural posing to conceal intimate areas. Use a crossed paw, the tail, cushion shadow, or draped cape fold naturally.
- **ALIVENESS:** Not taxidermy. Eyes wetness + catchlights. Posture shows weight sinking into cushion.
${humanIdentityLock}
`;

  // 2) Backdrops
  // Mantengo tus oscuros para “pet solo”, pero agrego opción human-safe si aparece niño.
  const darkBackdrops = [
    "a pitch-dark Master's studio background with minimal warm atmospheric haze",
    "a deep, dark baroque interior where the background fades into near-black shadow",
    "a rich, dark olive-brown museum backdrop, smooth and unfocused to make the subject pop",
    "a moody classical setting with deep shadows, emphasizing the light on the subject"
  ];

  const humanSafeBackdrops = [
    "a luminous warm-ivory museum backdrop with soft painterly gradient (airy depth, not dark)",
    "a refined warm neutral studio background with creamy bokeh and gentle haze (premium, uplifting)",
    "a soft sage/ivory classical backdrop with subtle atmospheric depth, bright and elegant",
    "a warm atelier ambiance with light-toned background and gentle tonal falloff (no black edges)"
  ];

  // 3) Props
  const props = [
    "a **massive, luxurious velvet cushion** (throne-like) with heavy gold tassels and deep button tufting",
    "a large, plush antique pillow with crushed velvet texture and gold braided trim",
    "a grand upholstered pedestal covered in heavy, draped fabrics that pool on the floor"
  ];

  // 4) Lighting
  // Mantengo tus dramáticas para pet solo, pero agrego human-safe si hay niño.
  const dramaticLighting = [
    "**DRAMATIC CHIAROSCURO:** Strong directional light from side-front. Illuminates the pet face and chest fur, leaving the rest in rich shadow.",
    "**PHOTOGRAPHIC STUDIO LIGHT:** Soft but directional lighting creating crisp catchlights in eyes and fur.",
    "**GOLDEN AGE DRAMA:** Focused beam on the pet head and chest, stronger falloff elsewhere.",
    "**HIGH-CONTRAST TEXTURE LIGHT:** Light placed to reveal fur micro-texture and velvet weave."
  ];

  const humanSafeLighting = [
    "**SOFT WINDOW DAYLIGHT:** Diffused natural window light, flattering and even on the child’s face; pet remains the hero.",
    "**BRIGHT SOFT STUDIO LIGHT:** Large soft source, smooth wrap, natural highlights (no glow).",
    "**WARM DAYLIGHT (SUBTLE):** Warm flattering light on faces with gentle falloff (no black edges).",
    "**GENTLE PAINTERLY VOLUME:** Mild contrast for depth while keeping child features accurate and visible."
  ];

  // 5) Poses (igual)
  const petLyingPoses = [
    "hero pet lying in a 'sphinx' pose on the cushion, front paws extended elegantly, chest puffed out and visible between the cape folds, head alert",
    "hero pet lying comfortably on its side, front paws crossed gracefully, head turned towards the viewer, the body sinking into the plush cushion",
    "hero pet lying with dynamic tension (ready to rise), head high and noble, cape flowing backwards over shoulders revealing the full chest",
    "hero pet settled deep into the cushion, one paw draping over the edge naturally, looking off-camera with a noble, wet-eyed gaze"
  ];

  const petSeatedPoses = [
    "hero pet seated regally, back straight, chest proud and visible (cape pushed back), tail wrapped around paws neatly",
    "hero pet seated with a slight lean, head cocked with intelligence, front paws placed firmly, confident and alive"
  ];

  const petSoloPoseWeighted = () =>
    weightedPick([
      { value: pick(petLyingPoses), weight: 70 },
      { value: pick(petSeatedPoses), weight: 30 }
    ]);

  // 6) Multi arrangements
  const multiPetArrangements = [
    "hero pet centered on the main cushion; secondary pets lounging naturally around/behind, forming a pyramid composition",
    "all pets sharing the massive cushion, arranged by size, with the hero pet slightly forward and brighter",
    "a cozy, organic pile of pets on the throne-cushion, heads distinct, bodies overlapping naturally"
  ];

  // 7) Humanos/Niños: aquí estaba tu fallo (los tratabas como “estilo”, no como “identidad”)
  // Ajuste: el niño SIEMPRE tiene cara visible, luz suave, pelo igual, y NO se “idealiza”.
  const humanWarmInteractions = [
    "**ADULT ROLE:** Noble guardian. Standing slightly behind or seated beside cushion. Hand resting on pet’s back. Adult detail stays minimal.",
    "**CHILD/BABY ROLE:** Innocent companion. Soft period clothing in warm creams/ivory. Child face fully visible and properly lit (identity locked).",
    "**CHILD/BABY POSE:** Child seated on the cushion beside the pet or gently hugging the pet. Eye-level with the animal. Natural affectionate connection. NO shadowy child."
  ];

  // 8) Anti-clone en grupos (igual, pero reforzamos que humanos NO copian estilo de mascota)
  const multiPetUniqueness = `
**MULTI-SUBJECT LOGIC:**
- If multiple pets: keep harmony but vary accessories slightly. NO CLONES.
- If humans present:
  - Adults: dignified, protective, minimal detail.
  - Children: softly lit, face clearly visible, identity locked; they frame the pet.
  - Humans do NOT wear the pet's cape. They complement the scene.
`;

  // 9) Estilos (igual)
  const STYLE_PRESETS = {
    renacimiento: {
      role: "**Bosque Encantado / Renacimiento** (Luz suave, mágico).",
      palette: [
        "Soft Emerald + Antique Gold + Warm Creams",
        "Dusty Rose + Champagne + Pearl White",
        "Nature tones: Moss Green + Earthy Browns + Soft Gold"
      ],
      wardrobe: [
        "a soft velvet cape **draped loosely over the shoulders and open at the front**, revealing the chest fur",
        "a renaissance mantle thrown back casually, showing the animal's neck and chest",
        "a delicate silk cloak pinned only at the shoulders, leaving the front body exposed and natural"
      ],
      accessories: ["a delicate pearl string (loose)", "a small nature-inspired brooch", "no heavy collar"],
      mood: `**STYLE SIGNATURE:** Ethereal, soft focus background but sharp fur. Magic light.`
    },

    realeza: {
      role: "**Pequeña Nobleza / Realeza** (Poder, Lujo, Orgullo).",
      palette: [
        "Deep Royal Blue + Heavy Gold + White Fur trim",
        "Rich Burgundy + Gold Bullion + Dark Shadows",
        "Purple Velvet + Diamond accents + Stark Contrast"
      ],
      wardrobe: [
        "a heavy royal velvet mantle with ermine trim, **draped wide open** to show the proud chest",
        "a king's cloak thrown over the back, pooling on the cushion behind, leaving the front unobstructed",
        "a brocade cape resting on the shoulders but unclasped to reveal the neck"
      ],
      accessories: ["a small, tasteful crown (optional) or jeweled chain", "a heavy gold medallion on the chest", "a thick royal collar"],
      mood: `**STYLE SIGNATURE:** Heavy, expensive fabrics. High contrast. The pet looks like a King/Queen.`
    },

    barroco: {
      role: "**Estudio Barroco** (Dramático, Museo, Oscuro).",
      palette: [
        "Onyx Black + Burnished Gold + Deep Red",
        "Dark Chocolate + Bronze + Warm Light",
        "Midnight Blue + Silver + Candlelight"
      ],
      wardrobe: [
        "a dark, textured velvet cloak **falling off the shoulders**, completely revealing the chest and neck texture",
        "a dramatic black and gold cape draped artistically around the back, not covering the front",
        "a heavy period costume jacket worn open, showing the fur texture underneath"
      ],
      accessories: ["a simple antique chain", "a dark jewel brooch", "minimal accessories to focus on the face"],
      mood: `**STYLE SIGNATURE:** Rembrandt lighting. Deepest shadows. Most realistic texture.`
    }
  };

  const preset = STYLE_PRESETS[style] || STYLE_PRESETS.renacimiento;

  // 10) Recipe (clave: incluimos instrucciones de “si hay humanos” para usar fondos/luces human-safe)
  const styleDescription = `
**ROLE:** ${preset.role}

**IF A HUMAN CHILD/BABY IS PRESENT:** Use a bright warm museum backdrop and soft flattering daylight (human-safe). Do not use near-black backgrounds on the child.
**IF ONLY PETS:** You may use darker dramatic museum backdrops for maximum fur contrast.

**BACKDROP (HUMAN-SAFE OPTION):** ${pick(humanSafeBackdrops)}.
**BACKDROP (DRAMATIC OPTION):** ${pick(darkBackdrops)}.

**STAGING:** ${pick(props)}.
**PALETTE:** ${pick(preset.palette)}.
**WARDROBE:** ${pick(preset.wardrobe)}. IMPORTANT: Fabric must look heavy and real, not floating.
**ACCESSORIES:** ${pick(preset.accessories)}.

**LIGHTING (HUMAN-SAFE):** ${pick(humanSafeLighting)}.
**LIGHTING (DRAMATIC):** ${pick(dramaticLighting)}.

${preset.mood}
${petGuardrails}
${isMulti ? multiPetUniqueness : ""}

**ULTRA-REALISTIC "SURREALUM" FINISH (THE WOW FACTOR):**
- Texture is King: fur must look touchable; stray hairs catching light.
- Material contrast: fur softness vs crushed velvet vs metallic gold/jewels.
- Photographic depth: clear subject separation; if child is present, keep the child face cleanly visible and correctly lit.
- Life in eyes: glossy depth + clear reflection of light source.
`;

  // 11) Composition logic (refuerza que el niño NO se “sacrifica” por el pet-first)
  const groupLogic = `
**GROUP SCENARIO:**
- IF MULTIPLE PETS: ${pick(multiPetArrangements)}.
- IF HUMAN(S) + PET: ${pick(humanWarmInteractions)}.
- COMPOSITION: 4:5 Vertical. Zoom out slightly to fit cushion and subjects comfortably.
- RULE: Pet is the hero, but if a child is present, the child face must remain accurate, visible, and identity-locked.
`;

  const framing =
    (isMulti
      ? groupLogic
      : `**SOLO COMPOSITION:** ${petSoloPoseWeighted()}. 4:5 Vertical. Eye-level view. Focus on texture.`) +
    `\n**FINAL TOUCH:** Feels like a priceless heirloom found in a castle.`;

  return masterPrompt(numSubjects, styleDescription, framing);
};
