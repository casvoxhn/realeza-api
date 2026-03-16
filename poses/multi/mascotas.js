// poses/multi/mascotas.js
// Composiciones para 2, 3 o 4 mascotas — PENDIENTE DE PRUEBA

const { pick } = require('../../../utils/pick');

const SCENES_2 = [
  `Both animals rest naturally on the cushion together.
The larger one slightly behind, the smaller one in front beside it.
Both faces raised and clearly visible.
Each animal's body generated coherently from its visible fur color.
Both animals look natural and at ease — never forced or stiff.`,

  `Both animals rest together on the cushion —
bodies natural and relaxed, angled slightly toward each other.
Both faces clearly visible and prominent.`,
];

const SCENES_3 = [
  `Three animals rest on the grand cushion —
the largest in the center, the others on each side.
All faces clearly visible. All natural and at ease.`,

  `Two animals rest in front on the cushion.
The third sits upright behind them, centered.
All faces clearly visible.`,
];

const SCENES_4 = [
  `Four animals on the grand cushion —
two slightly in front, two slightly behind.
All faces clearly visible. All natural and relaxed.`,
];

const complementaryPalettes = [
  ["deep crimson", "dark teal"],
  ["forest green", "deep burgundy"],
  ["royal blue", "warm crimson"],
  ["deep purple", "forest green"],
  ["dark burgundy", "midnight blue"],
];

const gems = ["ruby", "emerald", "sapphire", "topaz", "amethyst"];

module.exports = (numSubjects) => {
  const { pick } = require('../../../utils/pick');

  const scenePool = numSubjects === 2 ? SCENES_2
    : numSubjects === 3 ? SCENES_3
    : SCENES_4;

  const scene        = pick(scenePool);
  const palette      = pick(complementaryPalettes);
  const shuffledGems = [...gems].sort(() => Math.random() - 0.5);

  return `STEP 2 — COMPOSITION (${numSubjects} animals):
CRITICAL RULE: Each animal's face is LOCKED from its photo.
Bodies are built around faces — never the opposite.
For body parts not visible in source photos: use the animal's
visible fur color and species as reference — no invented markings.

${scene}

Each animal wears its own independent royal costume.
Animal 1: ${palette[0]} velvet cape with white ermine border. Gold brooch with ${shuffledGems[0]}.
Animal 2: ${palette[1]} velvet cape with white ermine border. Gold brooch with ${shuffledGems[1]}.
${numSubjects >= 3 ? `Animal 3: deep gold velvet cape with ermine. Gold brooch with ${shuffledGems[2]}.` : ''}
${numSubjects >= 4 ? `Animal 4: midnight blue velvet cape with ermine. Gold brooch with ${shuffledGems[3]}.` : ''}

FRAMING: Wide — all animals and cushion visible. Generous breathing room.`;
};
