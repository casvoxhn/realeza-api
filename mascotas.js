// ARCHIVO: mascotas.js
// CATEGORÍA: Mascotas (PET-FIRST) - V6.0 (HEIRLOOM WOW ENGINE)
// Objetivo: retrato "herencia familiar" listo para imprimirse grande y colgarse en sala.
// Prioridad: identidad exacta + jerarquía PET + composición limpia multi-sujetos + cero "AI look".

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isMulti = (numSubjects > 1) || !!isGroup;

  // ==============
  // 0) INTENCIÓN DE VENTA (para guiar decisiones)
  // ==============
  const commercialNorthStar = `
Create a MASTERPIECE that looks like an expensive, real oil painting photographed in a museum.
It must feel like a luxury heirloom portrait that people proudly hang in their living room.
NO gimmicks, NO fantasy costumes that look cheap, NO plastic AI gloss.
`;


  // ==============
  // 1) ANCLA FÍSICA (prop + interacción real)
  // ==============
  const throneProps = [
    "a large antique velvet cushion-throne with deep compression under the subject(s), visible weight, realistic folds and crushed pile",
    "a baroque brocade pillow on a low carved wooden dais, with heavy tassels and subtle wear, the subject(s) visibly sinking into it",
    "a layered arrangement of velvet + silk drapery on a ceremonial cushion, with natural wrinkles and gravity pulling fabric downward"
  ];

  // ==============
  // 2) ESCENARIOS (sala-museo: lujo sin kitsch)
  // ==============
  const environments = [
    "a dimly lit old-master studio interior with subtle architectural hints (arches, carved wood), background falling into warm darkness",
    "a museum-like backdrop with aged painted plaster texture, deep olive/umber tones, subtle vignetting, no distracting details",
    "an elegant palace corner suggested through soft shapes and shadow (no sharp background objects), purely atmospheric depth"
  ];

  // ==============
  // 3) LUZ (wow real: volumen + ojos vivos + materiales)
  // ==============
  const lighting = `
**LIGHTING (WOW HEIRLOOM):**
- One motivated key light from side-front (Rembrandt-like), plus a soft, faint fill from opposite side.
- Shadows are deep, warm, and rich (never dead black).
- Eyes are the selling point: glossy wet eyes, crisp catchlights, subtle tearline highlight.
- Subsurface scattering: ears / thinner skin / fur edges glow gently.
- Micro-contrast on fur, but smooth painterly transitions on skin and fabric.
`;

  // ==============
  // 4) ESTILOS (menos disfraces, más lujo real)
  // ==============
  const STYLE_PRESETS = {
    realeza: {
      label: "**Regal Heirloom Portrait**",
      wardrobe: [
        "a deep crimson velvet mantle with refined ermine trim (tasteful, not costume-like), naturally draped",
        "an imperial purple velvet cloak with subtle gold embroidery, heavy and realistic",
        "a burgundy brocade drape with antique gold accents, elegant and restrained"
      ],
      accessories: [
        "a refined antique gold chain with a small medallion (minimal, premium)",
        "a single jeweled brooch with realistic metal reflections (not oversized)",
        "no crown; if any regal cue, it is implied through fabric + composition"
      ],
      palette: "**Palette:** deep crimson, imperial purple, antique gold, warm shadows."
    },
    barroco: {
      label: "**Baroque Power Portrait**",
      wardrobe: [
        "a midnight-blue velvet drape with high-quality crushed pile and deep folds",
        "a black-and-gold brocade mantle (stiff, heavy, expensive-looking)",
        "a dark chocolate velvet cloak with antique bronze trims, subtle and premium"
      ],
      accessories: [
        "a dark gemstone brooch, small and luxurious",
        "a thin gold chain, understated",
        "no theatrical props"
      ],
      palette: "**Palette:** onyx, midnight blue, bronze, warm umber shadows."
    },
    renacimiento: {
      label: "**Renaissance Elegance Portrait**",
      wardrobe: [
        "a moss-green velvet drape with soft painterly folds, organic and elegant",
        "a terracotta mantle with delicate gold thread, refined not loud",
        "a champagne silk drape pinned with a small antique brooch"
      ],
      accessories: [
        "a subtle pearl strand (small scale, realistic)",
        "a simple aged gold medallion",
        "avoid heavy collars that distort identity"
      ],
      palette: "**Palette:** earthy greens, warm terracotta, antique gold, pearl highlights."
    }
  };

  const styleMapping = {
    realeza: 'realeza', rey: 'realeza', royal: 'realeza',
    barroco: 'barroco', baroque: 'barroco',
    renacimiento: 'renacimiento', renaissance: 'renacimiento'
  };

  const targetStyle = styleMapping[style] || 'realeza';
  const preset = STYLE_PRESETS[targetStyle];


  // ==============
  // 5) COMPOSICIÓN (esto es lo que te faltaba)
  // ==============
  const compositionSolo = pick([
    "a noble sphinx pose, chest forward, head slightly turned into the light",
    "seated upright like a statue, calm authority, eyes engaging the viewer",
    "lounging with dignified ease, weight sinking into the cushion, elegant silhouette"
  ]);

  const compositionGroup = `
**GROUP COMPOSITION (STRICT):**
- Build a clean triangle/pyramid composition.
- The main pet is centered and closest to camera (the monarch).
- Secondary pets slightly behind/side, touching naturally (no floating heads).
- Humans are behind the cushion/dais, supporting the story, never stealing focus.
- Ensure every subject is visible and recognizable (no cropped faces, no merged bodies).
`;

  const framing = isMulti
    ? "**FRAMING:** 4:5 Vertical. Medium-wide group portrait. Show full cushion/throne and enough negative space for a premium print."
    : "**FRAMING:** 4:5 Vertical. Classic portrait, eye-level, slightly wider than headshot to include mantle + cushion.";

  const poseLogic = isMulti ? compositionGroup : `**POSE:** ${compositionSolo}`;


  // ==============
  // 6) LÓGICA HUMANA / BEBÉS / NIÑOS (controlado, vendible)
  // ==============
  const humanLogic = `
**HUMANS / BABIES / KIDS (ONLY IF PRESENT):**
- Hierarchy: PET is the monarch (front/center). Humans are guardians/supporting cast.
- Adults wear subtle, dark, period-inspired clothing (no loud jewelry, no modern logos).
- Kids/babies wear soft cream/white linen/silk, minimal details, safe positioning.
- Interaction must feel real: gentle hand on the cushion edge, protective closeness, calm expressions.
- No one wears the pet’s mantle. No matching “costume party”.
`;


  // ==============
  // 7) FÍSICA DE MATERIALES (wow táctil)
  // ==============
  const materialPhysics = `
**MATERIAL PHYSICS (NON-NEGOTIABLE):**
1) Fur: individual strands, believable density, tactile softness. Preserve exact coat pattern and markings.
2) Velvet: heavy, crushed pile, absorbs light with deep gradients (not flat).
3) Gold/metal: sharp specular highlights, real reflections, no plastic shine.
4) Eyes: wet, glossy, lifelike with crisp catchlights and depth.
5) Gravity: everything must feel heavy and grounded. No floating subjects.
`;


  // ==============
  // 8) ANTI-IA LOOK + CONTROL DE CALIDAD (mata lo falso)
  // ==============
  const antiAi = `
**ANTI-AI LOOK (STRICT):**
- No extra limbs, no duplicated faces, no melted fur, no warped jewelry.
- No hyper-smooth skin, no plastic rendering, no neon colors, no cheap fantasy costume vibe.
- No text, no watermark, no frame, no UI, no collage, no stitched photos.
- Painterly realism: visible brushwork only in midtones, fine detail in eyes/fur/jewels.
- Must look like a real oil painting photographed under museum lighting with subtle varnish.
`;

  const guardrails = `
**GUARDRAILS:**
- Identity lock: preserve exact face structure, ear shape, coat pattern, and unique markings for every subject.
- Strict count: render exactly the provided number of subjects. Do NOT invent extra pets/people.
- Modesty for pets: use drapery/shadows/tail naturally; no explicit anatomy.
`;


  // ==============
  // 9) SALIDA FINAL (compacta + potente)
  // ==============
  const styleDescription = `
${commercialNorthStar}

**AESTHETIC:** 17th-century Dutch Golden Age oil painting (Rembrandt/Vermeer spirit) blended with museum-grade photographic documentation of a real painting (linen/canvas texture + subtle varnish).

**STYLE THEME:** ${preset.label}
**ANCHOR / THRONE:** ${pick(throneProps)}
**ENVIRONMENT:** ${pick(environments)}

**WARDROBE (PREMIUM):** ${pick(preset.wardrobe)}
**ACCESSORY (MINIMAL LUXURY):** ${pick(preset.accessories)}
**PALETTE:** ${preset.palette}

${lighting}
${materialPhysics}

${guardrails}
${antiAi}

${isMulti ? humanLogic : ""}

**FINAL CHECK (SELLING TEST):**
This must feel like a priceless family heirloom portrait with depth, emotion, and lifelike eyes.
If it looks like a digital render, it FAILS.
`;

  return masterPrompt(numSubjects, styleDescription, `${framing} ${poseLogic}`);
};
