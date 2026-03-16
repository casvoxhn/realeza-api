// poses/multi/mascotas.js — V3.0
// Composiciones basadas en principios de retrato profesional multi-mascota
// Investigado: jerarquía natural, profundidad, cuerpos angled, triángulo

const { pick } = require('../../../utils/pick');

const MULTI_RULES = `CRITICAL RULES — apply to every animal:
- Each animal's face is LOCKED from its source photo — never reinvented
- Bodies are built around faces — never the opposite
- For body parts not visible in source photos: use visible fur color as reference
- Each animal wears its own INDEPENDENT royal costume — never shared
- All faces must be clearly visible, recognizable and prominent
- Animals feel naturally at ease together — never forced or stiff`;

// ─── 2 ANIMALES ───────────────────────────────────────────────────────────────
const SCENES_2 = [

  // Jerarquía natural — grande detrás, pequeño al frente
  `SCENE — Natural hierarchy (2 animals):
Animal 1 (the larger or more dominant) rests slightly behind
and elevated — chest on the cushion, body turned slightly
to one side, head raised and facing the viewer.
Animal 2 (the smaller) rests in front of Animal 1 —
nestled naturally at the base, slightly to the opposite side.
Animal 2's face is fully visible and prominent.
The two animals are close but not touching — naturally comfortable.
The composition creates depth: foreground and background animal.
Both faces clearly visible at different heights.`,

  // Lado a lado, angled el uno hacia el otro
  `SCENE — Side by side, turned toward each other (2 animals):
Both animals rest on the cushion side by side.
Animal 1 on the left, body angled slightly to the RIGHT.
Animal 2 on the right, body angled slightly to the LEFT.
Their bodies angle naturally toward each other — warm and connected.
Both faces turn to look at the viewer — not at each other.
Front paws extended forward, resting naturally.
The composition is balanced and harmonious — like two companions.
Both faces clearly visible and at a similar height.`,

  // Uno recostado al frente, otro sentado detrás como guardián
  `SCENE — Resting and guardian (2 animals):
Animal 1 lies relaxed in the foreground of the cushion —
chest down, front paws extended over the cushion edge.
Animal 2 sits upright behind Animal 1, slightly to one side —
like a guardian watching over the first.
Animal 2's body is elevated above Animal 1, face fully visible.
Animal 1's face turns naturally upward toward the viewer.
The composition has natural depth and emotional warmth.
Both faces clearly visible at different heights and angles.`,

];

// ─── 3 ANIMALES ───────────────────────────────────────────────────────────────
const SCENES_3 = [

  // Triángulo clásico — el más natural y elegante
  `SCENE — Classic triangle composition (3 animals):
Animal 1 (largest) rests in the center and slightly behind —
body low on the cushion, face raised and prominent.
Animal 2 sits or rests to the front LEFT, body angled inward
toward the center — face visible and turned to the viewer.
Animal 3 sits or rests to the front RIGHT, body angled inward
toward the center — face visible and turned to the viewer.
The three animals form a natural triangle —
the apex (Animal 1) slightly higher and behind,
the base (Animals 2 and 3) lower and in front.
This is the most natural and elegant multi-pet composition.
All three faces clearly visible at different depths.`,

  // Línea con profundidad — grande al fondo, pequeños al frente
  `SCENE — Depth line composition (3 animals):
Animal 1 (largest) rests at the back of the cushion —
body slightly elevated, face prominent above the others.
Animal 2 rests in the middle ground — slightly in front of Animal 1,
offset to one side, face clearly visible.
Animal 3 (smallest) rests in the foreground —
closest to the viewer, front paws over the cushion edge.
The three animals create natural depth from foreground to background.
Each face is at a different height and depth — all clearly visible.
The composition feels like a natural family portrait.`,

];

// ─── 4 ANIMALES ───────────────────────────────────────────────────────────────
const SCENES_4 = [

  // Dos filas con profundidad — lo más natural para 4
  `SCENE — Two rows, natural depth (4 animals):
FRONT ROW: Animals 1 and 2 rest in the foreground of the cushion —
both lying with front paws extended forward over the cushion edge.
Animal 1 on the left, Animal 2 on the right.
Their bodies angle slightly inward toward each other.
BACK ROW: Animals 3 and 4 sit upright behind the front pair —
elevated above them, faces visible over the front animals.
Animal 3 behind Animal 1, Animal 4 behind Animal 2.
All four faces clearly visible — front row lower, back row higher.
The cushion is grand and generous to fit all four naturally.`,

  // Pirámide — composición más dinámica
  `SCENE — Pyramid composition (4 animals):
Animal 1 (largest) rests centered at the back — the apex.
Body low on the cushion, face prominent and elevated.
Animals 2 and 3 rest on each side in the middle ground —
offset left and right, angled inward toward Animal 1.
Animal 4 (smallest) rests in the front center foreground —
closest to the viewer, front paws over the cushion edge.
The four animals form a natural pyramid.
All faces visible at four different depths and heights.
The grand cushion supports all four with generous space.`,

];

// ─── PALETAS Y GEMAS ──────────────────────────────────────────────────────────
const PALETTES = [
  ["deep crimson",   "dark teal",      "forest green",  "midnight blue"],
  ["royal blue",     "warm crimson",   "deep gold",     "deep burgundy"],
  ["forest green",   "deep burgundy",  "royal blue",    "deep crimson"],
  ["deep purple",    "forest green",   "warm crimson",  "dark teal"],
  ["dark burgundy",  "midnight blue",  "deep gold",     "forest green"],
];

const GEMS = ["ruby", "emerald", "sapphire", "topaz", "amethyst", "pearl", "garnet", "opal"];

// ─── EXPORT ───────────────────────────────────────────────────────────────────
module.exports = function multiMascotas(numSubjects) {

  const n = Math.min(Math.max(numSubjects || 2, 2), 4);

  const scenePool = n === 2 ? SCENES_2
    : n === 3 ? SCENES_3
    : SCENES_4;

  const scene        = pick(scenePool);
  const palette      = pick(PALETTES);
  const shuffledGems = [...GEMS].sort(() => Math.random() - 0.5);

  const costumes = Array.from({ length: n }, (_, i) =>
    `Animal ${i + 1}: ${palette[i]} velvet cape with white ermine border. Gold brooch with ${shuffledGems[i]} gemstone.`
  ).join('\n');

  return `STEP 2 — COMPOSITION (${n} animals):

${MULTI_RULES}

${scene}

INDIVIDUAL COSTUMES — each animal wears its own independent costume:
${costumes}

ERMINE FOR ALL ANIMALS:
Each ermine mantle sits on the shoulders only — never compressing the body.
White fur with small evenly-distributed black spots.
Pink and gold lace trim along each visible border.
Each animal's chest and front clearly visible below its ermine.
Each cape falls ONLY behind its animal — never in front or to the sides.

CUSHION:
A grand, generously sized gold ochre velvet cushion —
wide and plump enough to naturally support all ${n} animals.
Sides billow outward generously.
Braided rope trim along all edges.
Single large gold tassel at front center.
Simple flat grey stone ledge visible below.

FRAMING:
Wide open composition — all animals and full cushion visible.
All faces prominent, recognizable and clearly visible.
Natural depth — not all animals on the same flat plane.
Generous breathing room on all sides.
4:5 portrait. 4K. High thinking mode.`;
};
