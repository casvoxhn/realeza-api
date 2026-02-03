// ARCHIVO: ninos.js
// CATEGORÍA: Niños - V4.0 (PURE SPOTLIGHT - Maximize WOW)
// Objetivo: Enfocar SOLO en el niño/mascota. Si hay adultos, mandarlos a la sombra.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isMulti = numSubjects > 1 || !!isGroup;

  // 1) Guardrails: ESTÉTICA PURA INFANTIL (Ignorando adultos)
  const categoryGuardrails = `
**CATEGORY GUARDRAILS (CHILDREN & PETS MASTERPIECE):**
- **MAIN SUBJECT FOCUS:** The artwork celebrates **Childhood Innocence**. The focus MUST be on the child/baby or pet.
- **THE "WOW" FACTOR (Living Porcelain):**
  - **Skin:** Translucent, rosy cheeks, "baby fat" preserved. Soft peach fuzz texture. High realism.
  - **Eyes:** The emotional center. Large, glossy, deep, with magical catchlights.
  - **Lighting:** **ANGELIC SPOTLIGHT.** The child's face is brightly lit; surroundings fade into deep shadow.
- **IDENTITY:** Facial features (nose, eye shape, mouth) MUST match the reference photos exactly.
- **HANDLING OTHERS:** If adults/parents are visible in the source, render them as **shadowy, out-of-focus background elements** or supporting figures in low light. Do not detail them.
`;

  // 2) Backdrops (Muy oscuros para resaltar al niño)
  const backdrops = [
    "a pitch-dark Master's studio background where the background is pure shadow",
    "a deep, dark baroque interior fading into blackness (Chiaroscuro)",
    "a rich, dark olive-brown museum backdrop, heavy vignette",
    "a moody setting where only the subject is lit, emerging from the void"
  ];

  // 3) Props (Escalados para niños)
  const props = [
    "an elegant **velvet-upholstered antique chair**",
    "a massive, plush velvet cushion with gold tassels (throne for a baby)",
    "a vintage wooden rocking horse (subtle, in shadow)",
    "no props, just the child emerging from the darkness"
  ];

  // 4) Iluminación (La clave del WOW)
  const lightingOptions = [
    "**DRAMATIC SPOTLIGHT:** A beam of soft light hits ONLY the child's face/hair. The rest of the scene falls into deep shadow.",
    "**REMBRANDT GLOW:** High contrast. The child glows against a nearly black background.",
    "**PEARLESCENT SOFTNESS:** Soft light wrapping the child's skin to make it look like porcelain.",
  ];

  // 5) Poses (Enfocadas en el niño)
  const soloPoses = [
    "baby/toddler: seated securely, looking forward with wide curious eyes, glowing in the light",
    "child: seated 3/4, holding a vintage book, face illuminated, body blending into shadow",
    "child: portrait focus, one hand near face, highlighting the skin texture and eyes",
    "child: angelic stance, looking calm and noble, emerging from the dark"
  ];

  // 6) Estilos
  const STYLE_PRESETS = {
    renacimiento: {
      role: "**Bosque Encantado / Renacimiento** (Luz suave, Mágico).",
      palettes: ["Sage Green + Gold", "Muted Emerald + Ivory", "Dusty Rose + Pearl White"],
      wardrobe: ["soft heavy velvet tunic with lace", "silk garment with embroidery"],
      mood: `**STYLE SIGNATURE:** Ethereal. Skin glows like a pearl.`
    },
    nobleza: {
      role: "**Pequeña Nobleza** (Orgullo, Lujo).",
      palettes: ["Royal Blue + Gold", "Deep Burgundy + Ivory"],
      wardrobe: ["heavy velvet royal doublet", "structured brocade outfit"],
      mood: `**STYLE SIGNATURE:** Opulence. The child looks like a little monarch.`
    },
    barroco: {
      role: "**Estudio Barroco** (Drama).",
      palettes: ["Deep Wine Red + Dark Shadows", "Midnight Blue + Silver"],
      wardrobe: ["dark velvet outfit merging with shadows", "heavy satin dress"],
      mood: `**STYLE SIGNATURE:** Maximum contrast. Deepest shadows.`
    }
  };

  const styleKey = (style === "nobleza" || style === "principe") ? "nobleza" : (style === "barroco" ? "barroco" : "renacimiento");
  const preset = STYLE_PRESETS[styleKey];

  // 7) Receta Final
  const styleDescription = `
**ROLE:** ${preset.role}
**BACKDROP:** ${pick(backdrops)}.
**PALETTE:** ${pick(preset.palettes)}.
**WARDROBE:** ${pick(preset.wardrobe)}. Fabric must look heavy and expensive.
**LIGHTING:** ${pick(lightingOptions)}.
${preset.mood}
${categoryGuardrails}
`;

  // 8) Composición (Instrucción de ignorar adultos aquí también)
  const framing = (() => {
    if (isMulti) {
       return `
       **GROUP COMPOSITION:** - **Focus:** The Children and Pets are the absolute heroes. They are in the light.
       - **Siblings:** Seated close together, warm connection (holding hands).
       - **Pets:** Sitting faithfully at knee level or on lap.
       - **Adults (If present):** Push them into the background/shadows. They are support only. Do not focus detail on them.
       - **Shot:** Medium shot. Eye-level with the children.
       `;
    } else {
       return `**SOLO COMPOSITION:** ${pick(soloPoses)}. Eye-level. Focus strictly on the child's eyes and skin texture.`;
    }
  })();

  return masterPrompt(numSubjects, styleDescription, framing);
};
