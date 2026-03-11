// mascotas.js — V18.2
// Sistema de poses para multi — 2, 3 y 4 animales con variedad narrativa
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

  // Poses — single (6 perros, 6 gatos)
  const poses_dog = [
    "lies relaxed, chest down, front paws extended loosely forward — completely at ease.",
    "sits naturally — upright but relaxed, front paws down, body at ease.",
    "reclines with quiet confidence — one paw tucked, one extended, head slightly turned.",
    "lies with body low and comfortable, head raised, paws loosely forward.",
    "is alert and poised — slightly raised, attentive but calm.",
    "lounges deeply — body sprawled with complete ease, almost drowsy.",
  ];
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

  // ── POSES MULTI — combinaciones narrativas completas ──────────────────────
  // Cada escena describe la postura de todos los animales juntos de forma natural

  const scenes_2 = [
    // Ambos recostados — el más natural y clásico
    "Both animals lie resting on the cushion — bodies low and horizontal, weight on chest and elbows, front paws extended forward. The larger one lies slightly behind and to one side, the smaller one lies in front beside it. Both faces raised and clearly visible. Their bodies are long and low — the cushion supports their full weight.",
    // Uno recostado adelante, el otro sentado detrás — da profundidad
    "One animal lies resting in front — body low, chest down, front paws extended forward on the cushion. The other sits upright behind it, slightly elevated — relaxed but composed. Both naturally angled toward each other. Both faces clearly visible.",
    // Ambos sentados — más formal, funciona para razas pequeñas
    "Both animals sit together on the cushion — upright but relaxed, bodies naturally angled slightly toward each other. The larger one sits slightly behind, the smaller one beside and in front. Front paws resting down. Both faces clearly visible.",
    // Uno recostado de lado, el otro sentado junto
    "One animal reclines naturally on its side — relaxed and comfortable, body low on the cushion, head raised. The other sits upright beside it — alert and composed. Both naturally facing the viewer. Both faces clearly visible.",
  ];

  const scenes_3 = [
    // Dos recostados adelante, uno sentado detrás — clásico pirámide
    "Two animals lie resting in front — bodies low, chest down, paws extended forward. The third sits upright behind them, slightly elevated, centered between the two. All naturally facing forward. All faces clearly visible.",
    // Todos recostados en diferentes niveles
    "Three animals rest on the grand cushion — the largest lies in the center, body low and horizontal. The other two recline on each side, bodies angled slightly inward toward the center animal. All at ease, all faces raised and clearly visible.",
    // Triángulo natural — uno adelante, dos detrás
    "One animal lies resting in front — body low, paws extended forward. Two animals sit behind it on each side — upright and relaxed, slightly elevated. A natural triangle composition. All three faces clearly visible.",
  ];

  const scenes_4 = [
    // Dos adelante recostados, dos detrás sentados
    "Two animals lie in front — bodies low, paws extended forward on the cushion. Two animals sit behind them, slightly elevated — upright and relaxed. A natural two-row composition. All four faces clearly visible.",
    // Todos recostados en composición amplia
    "Four animals rest on the grand cushion — two slightly in front, two slightly behind, all bodies low and horizontal, paws forward. Each naturally angled, the group feels like a family at rest. All four faces clearly visible.",
  ];

  // Paletas complementarias
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

  const bgOnly = S.role
    .replace(/The animal wears[^.]+\./gi, '')
    .replace(/On its head[^.]+\./gi, '')
    .replace(/It rests on[^.]+\./gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();

  const palette = pick(complementaryPalettes);
  const shuffledGems = [...gems].sort(() => Math.random() - 0.5);

  // Seleccionar escena según cantidad
  const scenePool = totalAnimals === 2 ? scenes_2
    : totalAnimals === 3 ? scenes_3
    : scenes_4;
  const scene = pick(scenePool);

  const framingInstruction = [
    `This portrait contains ${totalAnimals} animals from the photos provided. Paint every single one of them — no animal may be omitted.`,
    `IMPORTANT: Each animal wears its own completely independent royal mantle. They do NOT share any garment. The mantle falls behind the shoulders and drapes to each side — the animal's chest and belly are completely bare and uncovered. It is NOT a robe, NOT a coat, NOT a wrap. Think of it as a cape placed on top of the back, falling to the sides like wings, with the ermine border framing the open front.`,
    `Animal 1 wears: a ${palette[0]} velvet royal mantle — falling behind its shoulders, draping to each side, chest and front completely bare. White ermine border visible at the opening. A delicate antique gold chain with fine links and a small ${shuffledGems[0]} pendant.`,
    `Animal 2 wears: a ${palette[1]} velvet royal mantle — falling behind its shoulders, draping to each side, chest and front completely bare. White ermine border visible at the opening. A delicate antique gold chain with fine links and a small ${shuffledGems[1]} pendant.`,
    totalAnimals >= 3 ? `Animal 3 wears: a deep gold velvet royal mantle — falling behind its shoulders, draping to each side, chest completely bare. Ermine border at the opening. A delicate antique gold chain with a small ${shuffledGems[2]} pendant.` : '',
    totalAnimals >= 4 ? `Animal 4 wears: a midnight blue velvet royal mantle — falling behind its shoulders, draping to each side, chest completely bare. Ermine border at the opening. A delicate antique gold chain with a small ${shuffledGems[3]} pendant.` : '',
    scene,
    `Preserve the exact face, markings, fur color and expression of each animal from the photos.`,
    `A single very large, plump, luxurious velvet cushion with gold tassels fills the lower portion of the frame — all animals rest on it comfortably with space for each.`,
    `${camera} Aspect ratio 4:5 vertical.`
  ].filter(Boolean).join(' ');

  return masterPrompt(totalAnimals, bgOnly, framingInstruction);
};
