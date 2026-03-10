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
    .replace(/\s{2,}/g, ' ')
    .trim();

  const palette = pick(complementaryPalettes);
  const shuffledGems = [...gems].sort(() => Math.random() - 0.5);

  // Composición narrativa — natural, orgánica, sin coordenadas rígidas
  const compositions = {
    2: "Two noble animals rest together on the cushion — their bodies naturally angled and relaxed, the larger one slightly elevated and behind, the smaller one beside and slightly in front. The composition feels organic and alive, like a painted scene that always existed this way. Both faces clearly visible.",
    3: "Three noble animals share the grand cushion — their bodies naturally arranged, the largest slightly behind and central, the other two in front on each side. Each at their own angle, relaxed and organic. All faces clearly visible.",
    4: "Four noble animals rest on the grand cushion — naturally grouped, some slightly behind others, each at their own angle. Relaxed and organic, like a painted scene. All faces clearly visible.",
  };

  const compositionKey = Math.min(totalAnimals, 4).toString();
  const composition = compositions[compositionKey] || compositions["2"];

  // Prompt narrativo directo — sin if/dog/cat, el modelo ya ve las fotos
  const framingInstruction = [
    `This portrait contains ${totalAnimals} animals from the photos provided. Paint every single one of them — no animal may be omitted.`,
    `IMPORTANT: Each animal wears its own completely independent royal mantle. They do NOT share any garment. The mantle falls behind the shoulders and drapes to each side — the animal's chest and belly are completely bare and uncovered. It is NOT a robe, NOT a coat, NOT a wrap. Think of it as a cape placed on top of the back, falling to the sides like wings, with the ermine border framing the open front.`,
    `Animal 1 wears: a ${palette[0]} velvet royal mantle — falling behind its shoulders, draping to each side, chest and front completely bare. White ermine border visible at the opening. A delicate antique gold chain with fine links and a small ${shuffledGems[0]} pendant.`,
    `Animal 2 wears: a ${palette[1]} velvet royal mantle — falling behind its shoulders, draping to each side, chest and front completely bare. White ermine border visible at the opening. A delicate antique gold chain with fine links and a small ${shuffledGems[1]} pendant.`,
    totalAnimals >= 3 ? `Animal 3 wears: a deep gold velvet royal mantle — falling behind its shoulders, draping to each side, chest completely bare. Ermine border at the opening. A delicate antique gold chain with a small ${shuffledGems[2]} pendant.` : '',
    totalAnimals >= 4 ? `Animal 4 wears: a midnight blue velvet royal mantle — falling behind its shoulders, draping to each side, chest completely bare. Ermine border at the opening. A delicate antique gold chain with a small ${shuffledGems[3]} pendant.` : '',
    `The animals are ${composition}`,
    `Each animal's pose is natural and independent. Preserve the exact face, markings, fur color and expression of each animal from the photos.`,
    `A single very large, plump, luxurious velvet cushion with gold tassels fills the lower portion of the frame — all animals rest on it comfortably with space for each.`,
    `${camera} Aspect ratio 4:5 vertical.`
  ].filter(Boolean).join(' ');

  return masterPrompt(totalAnimals, bgOnly, framingInstruction);
};
