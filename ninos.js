// ARCHIVO: ninos.js
// CATEGORÍA: Niños - V3.8 (Hybrid: Rich Descriptions + Safe Logic)

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isMulti = numSubjects > 1 || !!isGroup;

  // 1) Guardrails: Identidad Blindada
  const categoryGuardrails = `
**CATEGORY GUARDRAILS (FAMILY MASTERPIECE):**
- **IDENTITY PRIORITY:** Facial features (nose, eyes, mouth) MUST match the reference photos exactly.
- **AGE & ROLE RULES:**
  1. **ADULTS (Parents/Grandparents):** Must look mature, elegant, and protective. Natural skin texture (pores/lines allowed). NO "baby filters" on adults. They are the pillar of the composition.
  2. **CHILDREN:** Look like "living porcelain" (translucent skin, rosy cheeks, large glossy eyes). They are the focus/hero.
  3. **PETS:** Rendered with hyper-realistic fur texture, engaging with the family.
- **WARDROBE:** Historical luxury. Heavy velvets, lace, silk. Deep rich colors for adults to frame the brighter children.
- **BACKGROUND:** Deep, dark, and low-detail (Museum style).
`;

  // 2) Backdrops (Ricos y Atmosféricos)
  const backdrops = [
    "a pitch-dark Master's studio background with soft warm atmospheric haze",
    "a deep, dark baroque interior where the background fades into near-black shadow",
    "a rich, dark olive-brown museum backdrop, smooth and unfocused",
    "a moody classical setting with deep shadows, creating a cocoon of light"
  ];

  // 3) Props
  const props = [
    "an elegant **velvet-upholstered antique chair**",
    "a massive, plush velvet cushion with gold tassels",
    "a vintage wooden rocking horse (subtle, in shadow)",
    "no props, just the subjects emerging from the dark void"
  ];

  // 4) Iluminación
  const lightingOptions = [
    "**ANGELIC CHIAROSCURO:** Strong but soft directional light. Illuminates faces like a halo.",
    "**PEARLESCENT STUDIO LIGHT:** Soft, wrapping light creating a 'pearl' sheen.",
    "**GOLDEN AGE WARMTH:** A focused beam of warm light hitting the faces.",
    "**PAINTERLY VOLUME:** High-contrast lighting emphasizing fabric folds."
  ];

  // 5) Poses Individuales (Ricas en detalle)
  const soloPoses = [
    "baby/toddler: seated securely on a massive velvet cushion, hands resting on knees, looking forward with wide curiosity",
    "child: seated 3/4 on an antique chair, back straight, holding a vintage book loosely",
    "child: half-body portrait, slight turn, one hand lightly touching a lace collar or fabric fold",
    "teen: standing with gentle posture, one hand resting on a chair back, head tilted slightly, confident"
  ];

  // 6) Estilos
  const STYLE_PRESETS = {
    renacimiento: {
      role: "**Bosque Encantado / Renacimiento** (Luz suave, Mágico).",
      palettes: ["Sage Green + Warm Cream + Gold", "Muted Emerald + Ivory", "Dusty Rose + Pearl White"],
      wardrobe: ["soft heavy velvet tunic with lace", "silk garment with embroidery", "layered vest and linen shirt"],
      accessories: ["silk ribbon", "tiny vintage brooch"],
      mood: `**STYLE SIGNATURE:** Ethereal softness. Skin glows like a pearl. Dreamy but realistic.`
    },
    nobleza: {
      role: "**Pequeña Nobleza** (Orgullo, Lujo).",
      palettes: ["Royal Blue + Ivory", "Deep Burgundy + Gold", "Champagne Silk + Pearls"],
      wardrobe: ["heavy velvet royal doublet", "structured brocade outfit", "miniature royal court attire"],
      accessories: ["small pendant", "refined buttons"],
      mood: `**STYLE SIGNATURE:** Opulence. Heavy fabrics. The child looks important.`
    },
    barroco: {
      role: "**Estudio Barroco** (Profundidad, Drama).",
      palettes: ["Deep Wine Red + Gold", "Midnight Blue + Silver", "Onyx Black + Lace"],
      wardrobe: ["dark velvet outfit merging with shadows", "heavy satin dress with deep folds", "Van Dyck style outfit"],
      accessories: ["pearl earring", "gold chain"],
      mood: `**STYLE SIGNATURE:** Rembrandt lighting. Deepest shadows. Most realistic texture.`
    }
  };

  const styleKey = (style === "nobleza" || style === "principe") ? "nobleza" : (style === "barroco" ? "barroco" : "renacimiento");
  const preset = STYLE_PRESETS[styleKey];

  // 7) Receta WOW
  const styleDescription = `
**ROLE:** ${preset.role}
**BACKDROP:** ${pick(backdrops)}.
**STAGING:** ${pick(props)}.
**PALETTE:** ${pick(preset.palettes)}.
**WARDROBE:** ${pick(preset.wardrobe)}. Fabric must look heavy, tactile, and expensive.
**LIGHTING:** ${pick(lightingOptions)}.
${preset.mood}
${categoryGuardrails}
`;

  // 8) Lógica de Composición (Aquí está la magia recuperada)
  const framing = (() => {
    if (isMulti) {
       // Recuperamos la riqueza descriptiva pero dentro de reglas condicionales
       return `
       **GROUP COMPOSITION:** Pyramidal or bench arrangement. Medium shot. Eye-level. ALL faces visible.
       
       **SCENARIO RULES (Dynamic Interaction):**
       1. **IF ADULTS PRESENT (The Guardians):** They stand slightly behind or sit supporting the child. They act as the noble protector. Their hands may gently rest on the child's shoulder or back. They look mature and elegant.
       2. **IF PETS PRESENT (The Companions):** Place them at knee level, on the lap, or sitting faithfully beside the subjects. Possible interaction: a gentle hand resting on the pet's fur.
       3. **IF SIBLINGS (The Bond):** Create a warm connection. Older siblings protecting younger ones. Hands lightly touching, arm-in-arm, or leaning slightly towards each other.
       
       **IMPORTANT:** Distinct ages must be clear. Adults = Authority/Protection. Children = Innocence/Focus.
       `;
    } else {
       return `**SOLO COMPOSITION:** ${pick(soloPoses)}. Eye-level. Focus on eyes/skin texture.`;
    }
  })();

  return masterPrompt(numSubjects, styleDescription, framing);
};
