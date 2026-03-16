// poses/multi/mascotas.js — V2.0
// Composiciones inteligentes para 2, 3 y 4 mascotas
// Lógica: cada animal mantiene su cara LOCKED, cuerpos construidos alrededor

const { pick } = require('../../../utils/pick');

// ─── REGLAS UNIVERSALES MULTI ─────────────────────────────────────────────────
const MULTI_RULES = `CRITICAL RULES FOR ALL ANIMALS:
- Each animal's face is LOCKED from its source photo
- Bodies are built around faces — never the opposite
- For body parts not visible in source photos: use the animal's
  visible fur color as reference — never invent specific markings
- Each animal wears its own INDEPENDENT royal costume
- Animals do NOT share garments
- All faces must be clearly visible and recognizable`;

// ─── COMPOSICIONES PARA 2 ANIMALES ───────────────────────────────────────────
const SCENES_2 = [

  // C2A — Ambos recostados, uno detrás del otro
  `COMPOSITION — 2 animals:
Both animals rest naturally on the cushion together.
Animal 1 (larger or more prominent) lies slightly behind and to one side —
chest on cushion, front paws over the front edge.
Animal 2 lies in front beside Animal 1 —
also chest on cushion, front paws over the front edge.
Both faces raised and clearly visible.
The cushion is wide enough to support both naturally.
Neither animal looks forced or squeezed.`,

  // C2B — Uno recostado, otro sentado detrás
  `COMPOSITION — 2 animals:
Animal 1 lies relaxed in front on the cushion —
chest down, front paws over the front edge.
Animal 2 sits upright behind Animal 1, slightly elevated —
body angled naturally, facing the viewer.
Both faces clearly visible — Animal 2's face visible above Animal 1.
The composition creates natural depth and hierarchy.`,

  // C2C — Ambos sentados, lado a lado
  `COMPOSITION — 2 animals:
Both animals sit upright side by side on the cushion.
Animal 1 on the left, Animal 2 on the right.
Bodies angled slightly toward each other — natural and warm.
Both faces clearly visible, looking toward the viewer.
Front paws resting naturally on the cushion surface.
The composition is balanced and harmonious.`,

];

// ─── COMPOSICIONES PARA 3 ANIMALES ───────────────────────────────────────────
const SCENES_3 = [

  // C3A — Triángulo clásico
  `COMPOSITION — 3 animals:
Animal 1 (largest) lies in the center front of the cushion —
chest down, front paws over the front edge.
Animal 2 sits upright behind and to the LEFT of Animal 1.
Animal 3 sits upright behind and to the RIGHT of Animal 1.
The three animals form a natural triangle composition.
All three faces clearly visible — the two behind are slightly elevated.
Natural depth: front animal lower, back animals higher.`,

  // C3B — Fila natural
  `COMPOSITION — 3 animals:
All three animals rest naturally on the grand cushion.
Arranged in a natural row — largest in center, smaller ones on each side.
All resting with chests on cushion, front paws forward.
Bodies angled slightly inward toward the center.
All three faces raised and clearly visible.
The cushion is wide and generous to fit all three.`,

];

// ─── COMPOSICIONES PARA 4 ANIMALES ───────────────────────────────────────────
const SCENES_4 = [

  // C4A — Dos filas
  `COMPOSITION — 4 animals:
Two animals lie in front on the cushion —
chests down, front paws over the front edge.
Two animals sit upright behind them —
bodies visible above the front pair, faces clearly seen.
The four animals form two natural rows.
All four faces clearly visible.
The cushion is grand and generous to support all four.`,

  // C4B — Cuadro familiar
  `COMPOSITION — 4 animals:
All four animals rest on the grand cushion together.
Two slightly in front, two slightly behind.
All bodies natural and relaxed — no animal is forced or hidden.
All four faces clearly visible and recognizable.
The composition feels like a natural family portrait.`,

];

// ─── PALETAS Y JOYAS ─────────────────────────────────────────────────────────
const PALETTES = [
  ["deep crimson", "dark teal"],
  ["forest green", "deep burgundy"],
  ["royal blue", "warm crimson"],
  ["deep purple", "forest green"],
  ["dark burgundy", "midnight blue"],
  ["emerald green", "deep crimson"],
];

const GEMS = ["ruby", "emerald", "sapphire", "topaz", "amethyst", "pearl"];

// ─── EXPORT PRINCIPAL ─────────────────────────────────────────────────────────
module.exports = function multiMascotas(numSubjects) {

  const n = Math.min(Math.max(numSubjects || 2, 2), 4);

  const scenePool = n === 2 ? SCENES_2
    : n === 3 ? SCENES_3
    : SCENES_4;

  const scene        = pick(scenePool);
  const palette      = pick(PALETTES);
  const shuffledGems = [...GEMS].sort(() => Math.random() - 0.5);

  // Costumes individuales por animal
  const costumes = [
    `Animal 1: ${palette[0]} velvet cape with white ermine border. Gold brooch with ${shuffledGems[0]} gemstone.`,
    `Animal 2: ${palette[1]} velvet cape with white ermine border. Gold brooch with ${shuffledGems[1]} gemstone.`,
    n >= 3 ? `Animal 3: deep gold velvet cape with white ermine border. Gold brooch with ${shuffledGems[2]} gemstone.` : '',
    n >= 4 ? `Animal 4: midnight blue velvet cape with white ermine border. Gold brooch with ${shuffledGems[3]} gemstone.` : '',
  ].filter(Boolean).join('\n');

  return `STEP 2 — COMPOSITION (${n} animals):

${MULTI_RULES}

${scene}

INDIVIDUAL COSTUMES — each animal wears its own:
${costumes}

ERMINE FOR ALL:
Each ermine mantle sits on the shoulders only — does NOT compress the body.
White fur with small evenly-distributed black spots.
Pink and gold lace trim along each visible border.
Each animal's chest and front clearly visible below its ermine.

CUSHION:
The cushion is grand and generous — wide enough for all ${n} animals.
Gold ochre velvet, heavily stuffed, sides billow outward.
Braided rope trim along all edges.
Single large gold tassel at front center.
Simple flat grey stone ledge visible below.

FRAMING:
Wide open composition — all animals and full cushion visible.
All faces prominent and clearly recognizable.
Generous breathing room on all sides.
4:5 portrait. 4K. High thinking mode.`;
};
