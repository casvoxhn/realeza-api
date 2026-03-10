// mascotas.js — V18.1
// Prompt multi simplificado y narrativo — sin condicionales if/dog/cat
const masterPrompt = require('./masterPrompt');
const { pick } = require('./utils/pick');
const renacimientoStyle = require('./styles/renacimiento');
const realezaStyle = require('./styles/realeza');
const barrocoStyle = require('./styles/barroco');

module.exports = function mascotas(style, numSubjects, isGroup, gender) {
  const styleMap = {
    renacimiento: renacimientoStyle,
    realeza: realezaStyle,
    barroco: barrocoStyle,
    rey: realezaStyle,
    museum_elegance: renacimientoStyle,
    imperial_coronation: realezaStyle,
    baroque_drama: barrocoStyle,
  };

  const styleKey = style?.toLowerCase().replace(/\s+/g, '_') || 'renacimiento';
  const buildStyle = styleMap[styleKey] || renacimientoStyle;

  // Poses — perros (6)
  const poses_dog = [
    "lies relaxed, chest down, front paws extended loosely forward — completely at ease.",
    "sits naturally — upright but relaxed, front paws down, body at ease.",
    "reclines with quiet confidence — one paw tucked, one extended, head slightly turned.",
    "lies with body low and comfortable, head raised, paws loosely forward.",
    "is alert and poised — slightly raised, attentive but calm.",
    "lounges deeply — body sprawled with complete ease, almost drowsy.",
  ];

  // Poses — gatos (6)
  const poses_cat = [
    "lies with paws tucked neatly under its body — the classic loaf position.",
    "sits upright — compact, composed, front paws together.",
    "reclines chest down, one paw tucked in and one extended — naturally asymmetric.",
    "lounges with body low, head resting gently on its front paws — drowsy and soft.",
    "sits alert — ears up, body poised, quietly attentive.",
    "sits asymmetrically — one paw forward, one tucked, body slightly turned.",
  ];

  // Miradas
  const gazes = [
    "looks directly and calmly into the viewer's eyes",
    "gazes with quiet self-possession",
    "looks slightly away — thoughtful and self-contained",
  ];

  // Ángulos de cámara
  const cameraAngles = [
    "Camera slightly elevated, centered — classic formal portrait angle.",
    "Camera at eye level, gentle 30-degree angle to one side — three-quarter view.",
    "Camera slightly elevated, angled 30 degrees — adds depth and dimension.",
  ];

  // Paletas complementarias garantizadas — colores distintos y elegantes
  const complementaryPalettes = [
    ["deep crimson", "dark teal"],
    ["forest green", "deep burgundy"],
    ["royal blue", "warm crimson"],
    ["deep purple", "forest green"],
    ["dark burgundy", "midnight blue"],
  ];

  const gems = ["ruby", "emerald", "sapphire", "topaz", "amethyst"];

  const totalAnimals = Math.max(numSubjects || 1, isGroup ? 2 : 1);
  const camera = pick(cameraAngles);

  // ── CASO 1: UN SOLO ANIMAL ───────────────────────────────────────────────
  if (totalAnimals === 1) {
    const S = buildStyle(gender);
    const gaze = pick(gazes);
    const framingInstruction = [
      `If the subject is a dog: it ${pick(poses_dog)}`,
      `If the subject is a cat: it ${pick(poses_cat)}`,
      `The animal ${gaze}. Preserve exact appearance, proportions and expression from the photo.`,
      `Cushion visible and prominent at the bottom of the frame — large, plump, luxurious, with tassels.`,
      `${camera} Aspect ratio 4:5 vertical.`
    ].join(' ');
    return masterPrompt(1, S.role, framingInstruction);
  }

  // ── CASO 2+: MÚLTIPLES ANIMALES ─────────────────────────────────────────
  const S = buildStyle(gender);
  
  // Extraer solo fondo/luz del estilo — sin descripción de ropa
  const bgOnly = S.role
    .replace(/The animal wears[^.]+\./gi, '')
    .replace(/On its head[^.]+\./gi, '')
    .replace(/It rests on[^.]+\./gi, '')
    .trim();

  const palette = pick(complementaryPalettes);
  const shuffledGems = [...gems].sort(() => Math.random() - 0.5);

  // Composición según cantidad — sin "touching" que causa que se suban encima
  const compositions = {
    2: "side by side on the cushion — the larger animal on the left, the smaller on the right. They are close but each in their own space. Both faces fully visible.",
    3: "arranged on the wide cushion — largest in the center-back, the other two in front on each side. All faces clearly visible.",
    4: "arranged on the grand cushion — two slightly behind, two in front. Pyramid composition. All faces clearly visible.",
  };

  const compositionKey = Math.min(totalAnimals, 4).toString();
  const composition = compositions[compositionKey] || compositions["2"];

  // Prompt narrativo directo — sin if/dog/cat, el modelo ya ve las fotos
  const framingInstruction = [
    `This portrait contains ${totalAnimals} animals from the photos provided. Paint every single one of them — no animal may be omitted.`,
    `IMPORTANT: Each animal wears its own completely independent royal garment. They do NOT share a cape, robe or any clothing.`,
    `Animal 1 wears: a ${palette[0]} velvet royal robe with white ermine trim — draped behind its shoulders and to the sides, chest fully visible. A single thin gold chain with a ${shuffledGems[0]} pendant.`,
    `Animal 2 wears: a ${palette[1]} velvet royal robe with white ermine trim — draped behind its shoulders and to the sides, chest fully visible. A single thin gold chain with a ${shuffledGems[1]} pendant.`,
    totalAnimals >= 3 ? `Animal 3 wears: a deep gold velvet royal robe with ermine trim — draped behind its shoulders, chest visible. A single thin gold chain with a ${shuffledGems[2]} pendant.` : '',
    totalAnimals >= 4 ? `Animal 4 wears: a midnight blue velvet royal robe with ermine trim — draped behind its shoulders, chest visible. A single thin gold chain with a ${shuffledGems[3]} pendant.` : '',
    `The animals are ${composition}`,
    `Each animal's pose is natural and independent. Preserve the exact face, markings, fur color and expression of each animal from the photos.`,
    `A single very large, plump, luxurious velvet cushion with gold tassels fills the lower portion of the frame — all animals rest on it comfortably with space for each.`,
    `${camera} Aspect ratio 4:5 vertical.`
  ].filter(Boolean).join(' ');

  return masterPrompt(totalAnimals, bgOnly, framingInstruction);
};
