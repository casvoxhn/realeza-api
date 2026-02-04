// ARCHIVO: mascotas.js
// CATEGORÍA: Mascotas (PET-FIRST) - V3.2 (WOW Factor + Child/Baby Logic)
// Objetivo: Texturas hiperrealistas + Capas abiertas + Lógica específica para Bebés vs Adultos.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  // Random helpers
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

  // 1) Guardrails: Identidad + MODESTIA + Vida
  const petGuardrails = `
**CATEGORY GUARDRAILS (PETS / HIGH-END MASTERPIECE):**
- **PET-FIRST:** The animal is the absolute king/queen of the image.
- **IDENTITY:** Preserve coat color, pattern, markings, and specific ear shape exactly.
- **AESTHETIC MODESTY (CRITICAL):** Use natural posing to conceal intimate areas. Use a crossed paw, the tail, the deep shadow of the cushion, or a draped fold of the cape to block the view of genitals/anus naturally. The result must be elegant and dignified.
- **ALIVENESS:** The pet must NOT look like a taxidermy statue. 
  - Eyes must have "wetness" and specular highlights (catchlights).
  - Posture must show "weight" (sinking slightly into the cushion).
`;

  // 2) Backdrops (Oscuros y ricos para contraste WOW)
  const backdrops = [
    "a pitch-dark Master's studio background with minimal warm atmospheric haze",
    "a deep, dark baroque interior where the background fades into near-black shadow",
    "a rich, dark olive-brown museum backdrop, smooth and unfocused to make the subject pop",
    "a moody classical setting with deep shadows, emphasizing the light on the subject"
  ];

  // 3) Props (El cojín pesado y lujoso es clave)
  const props = [
    "a **massive, luxurious velvet cushion** (throne-like) with heavy gold tassels and deep button tufting",
    "a large, plush antique pillow with crushed velvet texture and gold braided trim",
    "a grand upholstered pedestal covered in heavy, draped fabrics that pool on the floor"
  ];

  // 4) Iluminación (La clave del realismo fotográfico)
  const lightingOptions = [
    "**DRAMATIC CHIAROSCURO:** Strong, directional light from the side-front. Illuminates the face and chest fur, leaving the rest in rich shadow.",
    "**PHOTOGRAPHIC STUDIO LIGHT:** Soft but directional 'beauty dish' style lighting that creates sharp specular highlights in the eyes and fur.",
    "**GOLDEN AGE DRAMA:** A beam of light focusing strictly on the subject's head and open chest, fading to black at the edges.",
    "**HIGH-CONTRAST TEXTURE LIGHT:** Lighting specifically positioned to reveal the micro-texture of the fur and the weave of the velvet."
  ];

  // 5) Poses (Dinámicas + Modestia + Pecho Visible)
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

  // Weighted: 70% Acostado (Mejor para modestia y look "Surrealum"), 30% Sentado
  const petSoloPoseWeighted = () =>
    weightedPick([
      { value: pick(petLyingPoses), weight: 70 },
      { value: pick(petSeatedPoses), weight: 30 }
    ]);

  // 6) Multi-Subject Logic (Mascotas VS Humanos VS Niños)
  const multiPetArrangements = [
    "hero pet centered on the main cushion; secondary pets lounging naturally around/behind, forming a pyramid composition",
    "all pets sharing the massive cushion, arranged by size, with the hero pet slightly forward and brighter",
    "a cozy, organic pile of pets on the throne-cushion, heads distinct, bodies overlapping naturally"
  ];

  const humanWarmInteractions = [
    "**ADULT ROLE:** Noble guardian. Dark formal period attire. Standing slightly behind or seated next to cushion. Hand on pet's back.",
    "**CHILD/BABY ROLE:** Innocent companion or 'Little Prince/Princess'. Soft period clothing (creams, white, soft velvet).",
    "**CHILD/BABY POSE:** Child seated ON the cushion with the pet, or hugging the pet gently. Eye level with the animal. Angelic lighting on the child."
  ];

  // 7) Anti-clone en grupos
  const multiPetUniqueness = `
**MULTI-SUBJECT LOGIC:**
- **If multiple pets:** Keep harmony (same era materials) but vary accessories slightly (e.g., different collar styles). NO CLONES.
- **If Humans are present:** - Adults: Dignified, protective, dark/rich colors.
  - Children: Soft, angelic, lighter colors (cream/gold/pastel). 
  - Humans do NOT wear the pet's cape. They frame the pet.
`;

  // 8) Estilos (CAPAS ABIERTAS OBLIGATORIAS)
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
        "a heavy royal velvet mantle with ermine (spotted fur) trim, **draped wide open** to show the proud chest",
        "a king's cloak thrown over the back, pooling on the cushion behind, leaving the front unobstructed",
        "a brocade cape resting on the shoulders but unclasped or very loosely clasped to reveal the neck"
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

  // 9) La receta técnica para el "WOW"
  const styleDescription = `
**ROLE:** ${preset.role}
**BACKDROP:** ${pick(backdrops)}.
**STAGING:** ${pick(props)}.
**PALETTE:** ${pick(preset.palette)}.
**WARDROBE:** ${pick(preset.wardrobe)}. **IMPORTANT: Fabric must look heavy and real, not floating.**
**ACCESSORIES:** ${pick(preset.accessories)}.
**LIGHTING:** ${pick(lightingOptions)}.
${preset.mood}
${petGuardrails}
${isMulti ? multiPetUniqueness : ""}

**ULTRA-REALISTIC "SURREALUM" FINISH (THE WOW FACTOR):**
- **Texture is King:** The fur must look **touchable**. Paint individual stray hairs catching the light.
- **Material Contrast:** Contrast the softness of the fur against the heavy, crushed texture of the velvet cushion and the metallic shine of gold/jewels.
- **Photographic Depth:** The subject must pop out of the dark background. High contrast on the face.
- **Life in Eyes:** The eyes must be glossy, deep, and have a clear reflection of the light source.
`;

  // 10) Composición Inteligente (Humanos vs Mascotas vs Niños)
  const groupLogic = `
**GROUP SCENARIO:**
- **IF MULTIPLE PETS:** ${pick(multiPetArrangements)}. 
- **IF HUMAN(S) + PET:** ${pick(humanWarmInteractions)}.
- **COMPOSITION:** 4:5 Vertical fit. Zoom out slightly to fit the cushion and subjects comfortably.
`;

  const framing = (isMulti 
    ? groupLogic
    : `**SOLO COMPOSITION:** ${petSoloPoseWeighted()}. 4:5 Vertical. **Eye-level view**. Focus on texture.`) + 
    `\n**FINAL TOUCH:** The image must feel like a priceless heirloom found in a castle.`;

  return masterPrompt(numSubjects, styleDescription, framing);
};
