// mascotas.js — V18.4
// Actualizado: imports apuntan a nuevos archivos de estilos + intelligent en styleMap

const masterPrompt      = require('./masterPrompt');
const { pick }          = require('./utils/pick');
const renacimientoStyle = require('./styles/renacimiento');
const realezaStyle      = require('./styles/realeza');
const barrocoStyle      = require('./styles/barroco');

module.exports = function mascotas(style, numSubjects, isGroup, gender) {

  // ── MAPA DE ESTILOS ────────────────────────────────────────────────────
  // intelligent se resuelve en buildPrompt.js antes de llegar aquí.
  // Lo dejamos como fallback de seguridad apuntando a renacimiento.
  const styleMap = {
    renacimiento:        renacimientoStyle,
    realeza:             realezaStyle,
    barroco:             barrocoStyle,
    rey:                 realezaStyle,
    // Nombres nuevos del frontend
    the_elegant_portrait: renacimientoStyle,
    the_classic_portrait: barrocoStyle,
    the_royal_portrait:   realezaStyle,
    // Nombres legacy (compatibilidad)
    museum_elegance:      renacimientoStyle,
    imperial_coronation:  realezaStyle,
    baroque_drama:        barrocoStyle,
    // Fallback si llega intelligent sin resolver
    intelligent:          renacimientoStyle,
  };

  const styleKey  = style?.toLowerCase().replace(/\s+/g, '_') || 'renacimiento';
  const buildStyle = styleMap[styleKey] || renacimientoStyle;

  // ── VARIANTES DE COMPOSICIÓN ───────────────────────────────────────────
  const gazes = [
    "looks directly and calmly into the viewer's eyes",
    "gazes with quiet self-possession",
    "looks slightly away — thoughtful and self-contained",
  ];

  const cameraAngles = [
    "Camera slightly elevated, centered — classic formal portrait angle.",
    "Camera at eye level, gentle 30-degree angle to one side — three-quarter view.",
    "Camera slightly elevated, angled 30 degrees — adds depth and dimension.",
  ];

  // ── ESCENAS MULTI ──────────────────────────────────────────────────────

  const scenes_2 = [
    "Both animals lie resting on the cushion — bodies low and horizontal, weight on chest and elbows, front paws extended forward. The larger one lies slightly behind and to one side, the smaller one lies in front beside it. Both faces raised and clearly visible. Both animals rest directly on the cushion — no animal stands outside it.",
    "Both animals sit together on the cushion — upright but relaxed, bodies naturally angled slightly toward each other. The larger one sits slightly behind, the smaller one beside and in front. Front paws resting down on the cushion. Both faces clearly visible. Both animals rest directly on the cushion — no animal stands outside it.",
  ];

  const scenes_3 = [
    "Two animals lie resting in front on the cushion — bodies low, chest down, paws extended forward. The third sits upright on the cushion behind them, slightly elevated, centered between the two. All naturally facing forward. All animals rest directly on the cushion. All faces clearly visible.",
    "Three animals rest on the grand cushion — the largest lies in the center, body low and horizontal. The other two recline on each side, bodies angled slightly inward. All at ease, all on the cushion, all faces raised and clearly visible.",
    "One animal lies resting in front on the cushion — body low, paws extended forward. Two animals sit on the cushion behind it on each side — upright and relaxed. A natural triangle. All three on the cushion. All faces clearly visible.",
  ];

  const scenes_4 = [
    "Two animals lie in front on the cushion — bodies low, paws extended forward. Two animals sit behind them on the cushion, slightly elevated — upright and relaxed. All four on the cushion. All four faces clearly visible.",
    "Four animals rest on the grand cushion — two slightly in front, two slightly behind, all bodies low and horizontal, paws forward. All four on the cushion. All four faces clearly visible.",
  ];

  const complementaryPalettes = [
    ["deep crimson", "dark teal"],
    ["forest green", "deep burgundy"],
    ["royal blue", "warm crimson"],
    ["deep purple", "forest green"],
    ["dark burgundy", "midnight blue"],
  ];

  const gems = ["ruby", "emerald", "sapphire", "topaz", "amethyst"];

  const totalAnimals = Math.max(numSubjects || 1, isGroup ? 2 : 1);
  const camera       = pick(cameraAngles);

  // ── CASO 1: UN SOLO ANIMAL ─────────────────────────────────────────────
  if (totalAnimals === 1) {
    const S    = buildStyle(gender);
    const gaze = pick(gazes);
    const framingInstruction = [
      `The animal ${gaze}. Preserve exact appearance, proportions and expression from the photo.`,
      `Cushion prominent at the bottom of the frame.`,
      `${camera} Aspect ratio 4:5 vertical.`
    ].join(' ');
    return masterPrompt(1, S.role, framingInstruction);
  }

  // ── CASO 2+: MÚLTIPLES ANIMALES ───────────────────────────────────────
  const S = buildStyle(gender);

  const bgOnly = S.role
    .replace(/The animal wears[^.]+\./gi, '')
    .replace(/On its head[^.]+\./gi, '')
    .replace(/It rests on[^.]+\./gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();

  const palette      = pick(complementaryPalettes);
  const shuffledGems = [...gems].sort(() => Math.random() - 0.5);

  const scenePool = totalAnimals === 2 ? scenes_2
    : totalAnimals === 3 ? scenes_3
    : scenes_4;
  const scene = pick(scenePool);

  const framingInstruction = [
    `This portrait contains ${totalAnimals} animals from the photos provided. Paint every single one of them — no animal may be omitted.`,
    `IMPORTANT: Each animal wears its own completely independent royal mantle. They do NOT share any garment. Each mantle is draped dramatically behind and to one side — studio arranged, falling away from the animal with natural weight.`,
    `Animal 1 wears: a ${palette[0]} velvet royal mantle with white ermine border — draped dramatically behind and to one side, as if arranged by a studio painter. The fabric falls away from the animal with natural weight, not around it. A gold brooch with a ${shuffledGems[0]} gemstone fastens the two ermine lapels together at the center of the chest.`,
    `Animal 2 wears: a ${palette[1]} velvet royal mantle with white ermine border — draped dramatically behind and to one side, studio arranged. The velvet falls away naturally. A gold brooch with a ${shuffledGems[1]} gemstone fastens the ermine at the chest.`,
    totalAnimals >= 3 ? `Animal 3 wears: a deep gold velvet royal mantle with ermine — draped behind and to one side, studio arranged. A gold brooch with a ${shuffledGems[2]} gemstone fastens the ermine at the chest.` : '',
    totalAnimals >= 4 ? `Animal 4 wears: a midnight blue velvet royal mantle with ermine — draped behind and to one side, studio arranged. A gold brooch with a ${shuffledGems[3]} gemstone fastens the ermine at the chest.` : '',
    scene,
    `Preserve the exact face, markings, fur color and expression of each animal from the photos.`,
    `${camera} Aspect ratio 4:5 vertical.`
  ].filter(Boolean).join(' ');

  return masterPrompt(totalAnimals, bgOnly, framingInstruction);
};
