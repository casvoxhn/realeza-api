// mascotas.js — V18.0
// Vestuario independiente por animal, composición adaptada a cantidad
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
    "gazes with quiet self-possession, naturally",
    "looks slightly away — into the middle distance, thoughtful",
  ];

  // Ángulos de cámara
  const cameraAngles = [
    "Camera slightly elevated, centered — classic formal portrait angle.",
    "Camera at eye level, gentle 30-degree angle to one side — three-quarter view.",
    "Camera slightly elevated, angled 30 degrees — adds depth and dimension.",
  ];

  // Paletas complementarias para multi — garantizan que los colores no choquen
  const complementaryPalettes = [
    ["crimson", "deep teal"],
    ["forest green", "burgundy"],
    ["royal blue", "warm gold"],
    ["deep purple", "burnt orange"],
    ["charcoal", "rose"],
  ];

  // Gemas complementarias por animal
  const gems = ["ruby", "emerald", "sapphire", "topaz", "amethyst", "pearl"];

  const totalAnimals = Math.max(numSubjects || 1, isGroup ? 2 : 1);
  const camera = pick(cameraAngles);

  // ── CASO 1: UN SOLO ANIMAL ───────────────────────────────────────────────
  if (totalAnimals === 1) {
    const S = buildStyle(gender);
    const gaze = pick(gazes);
    const framingInstruction = [
      `Look at the photo and identify the animal.`,
      `If it is a dog: it ${pick(poses_dog)}`,
      `If it is a cat: it ${pick(poses_cat)}`,
      `The animal ${gaze}. Preserve exact appearance, proportions and expression from the photo.`,
      `Cushion visible and prominent at the bottom of the frame — large, plump, luxurious.`,
      `${camera} Aspect ratio 4:5 vertical.`
    ].join(' ');
    return masterPrompt(1, S.role, framingInstruction);
  }

  // ── CASO 2+: MÚLTIPLES ANIMALES ─────────────────────────────────────────
  // Generar vestuario independiente para cada animal
  const palette = pick(complementaryPalettes);
  const usedGems = [...gems].sort(() => Math.random() - 0.5);

  // Construir descripción de cada animal con su propia ropa
  const animalDescriptions = [];
  for (let i = 0; i < Math.min(totalAnimals, 4); i++) {
    const S = buildStyle(null); // gender null para máxima variedad
    // Reemplazar color dominante con el de la paleta complementaria
    const colorizedRole = S.role.replace(
      /(crimson|burgundy|forest-green|emerald|blue|charcoal|black|dark)/i,
      palette[i % palette.length]
    );
    const gem = usedGems[i % usedGems.length];
    const label = i === 0 ? "The largest or first animal" : i === 1 ? "The second animal" : `Animal ${i + 1}`;
    const dogPose = pick(poses_dog);
    const catPose = pick(poses_cat);
    const gaze = pick(gazes);

    animalDescriptions.push(
      `${label}: if dog it ${dogPose} if cat it ${pick(poses_cat)} It ${gaze}. ` +
      `It wears its own independent royal garment in ${palette[i % palette.length]} velvet with ermine trim — ` +
      `draped around its body, chest visible. A single elegant ${gem} pendant on a thin gold chain.`
    );
  }

  // Composición según cantidad
  const compositions = {
    2: "The two animals rest together on the same large cushion — bodies close, naturally touching or leaning slightly toward each other. The larger animal slightly behind or beside the smaller one.",
    3: "The three animals share a wide royal cushion — arranged in a natural triangle. The largest in the center-back, the other two flanking in front. All faces visible.",
    4: "The four animals share a grand wide cushion — two slightly behind, two in front. Pyramid composition. All faces clearly visible.",
  };

  const compositionKey = Math.min(totalAnimals, 4).toString();
  const composition = compositions[compositionKey] || compositions["2"];

  const framingInstruction = [
    `Look at ALL photos provided. Identify and count EVERY animal visible across all images — paint ALL of them. No animal left out.`,
    `Each animal has its own independent royal garment — they do NOT share a cape or robe.`,
    animalDescriptions.join(' '),
    composition,
    `Preserve the exact appearance and proportions of each animal from the photos.`,
    `The cushion is very large, plump and luxurious — prominently visible, all animals rest on it comfortably.`,
    `${camera} Aspect ratio 4:5 vertical.`
  ].join(' ');

  // Para el styleDescription en multi usamos el rol base del estilo (fondo, luz, atmósfera)
  const baseStyle = buildStyle(gender);
  // Solo tomamos la parte de fondo/luz/atmósfera — no la ropa (esa la definimos arriba por animal)
  const bgOnly = baseStyle.role
    .replace(/The animal wears[^.]+\./gi, '')
    .replace(/On its head[^.]+\./gi, '')
    .replace(/It rests on[^.]+\./gi, '')
    .trim();

  return masterPrompt(totalAnimals, bgOnly, framingInstruction);
};
