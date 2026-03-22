// poses/multi/mascotas.js — V3.3 
// V3.0: composiciones multi-mascota
// V3.1: BODY_ANCHOR + BODY_LANGUAGE en MULTI_RULES, patas corregidas, cojín se hunde
// V3.2: underside tastefully obscured + anatomical substructure
// V3.3: gaze composition — variedad natural de miradas, no todos mirando directo

const { pick } = require('../../../utils/pick');

const MULTI_RULES = `CRITICAL RULES — apply to every animal:
- Each animal's face is LOCKED from its source photo — never reinvented
- Bodies are built around faces — never the opposite
- For body parts not visible in source photos: use visible fur color as reference
- Each animal wears its own INDEPENDENT royal costume — never shared
- All faces must be clearly visible, recognizable and prominent
- Animals feel naturally at ease together — never forced or stiff
- Every animal's chest is visibly pressed against the cushion — fully anchored
- No paws hang over edges — all limbs rest completely ON the cushion surface
- The cushion sags and deforms naturally under the combined weight of all animals
- Every animal's body language is relaxed, natural and dignified — never rigid or taxidermic
- If any animal wears a cape or garment, it drapes OVER a clearly defined body —
  the body mass beneath is always visible, never hidden or merged with the cushion
- The protrusion of each animal's hindquarters and curve of the spine
  MUST be visible beneath any fabric — clothing reveals body mass, never replaces it
- Realistic folds form where fabric passes over hips and spine —
  these folds confirm the body is beneath them
- Every animal's hindquarters and underside are always tastefully obscured —
  by the natural position of the legs, the cape, or the cushion surface

GAZE COMPOSITION — CRITICAL:
The dominant animal (largest or most central) looks directly at the viewer —
confident, noble and fully engaged.
Secondary animals have slight natural variation in their gaze —
one may look very slightly to one side, another with eyes softly angled.
No two animals share the exact same gaze direction.
This variety creates a living, breathing composition —
like a natural moment caught by the painter, not a stiff lineup.
All faces remain clearly visible and prominent despite the gaze variation.
The variation is subtle — never dramatic. No animal looks completely away.`;

// ─── 2 ANIMALES ───────────────────────────────────────────────────────────────
const SCENES_2 = [

  `SCENE — Natural hierarchy (2 animals):
Animal 1 (the larger or more dominant) rests slightly behind
and elevated — chest on the cushion, body turned slightly
to one side, head raised and facing the viewer directly.
Animal 2 (the smaller) rests in front of Animal 1 —
nestled naturally at the base, slightly to the opposite side.
Animal 2's gaze is very slightly off-axis — naturally alert,
as if aware of both the viewer and its companion.
Both animals' front paws rest completely flat on the cushion surface —
fully supported, never hanging over the edge.
The two animals are close but not touching — naturally comfortable.
The composition creates depth: foreground and background animal.
Both faces clearly visible at different heights.`,

  `SCENE — Side by side, turned toward each other (2 animals):
Both animals rest on the cushion side by side.
Animal 1 on the left, body angled slightly to the RIGHT —
gaze directed toward the viewer with quiet confidence.
Animal 2 on the right, body angled slightly to the LEFT —
gaze very slightly softer, angled just a touch toward Animal 1's direction.
Their bodies angle naturally toward each other — warm and connected.
Both animals' front paws rest completely flat on the cushion surface —
fully supported, never hanging over the edge.
The composition is balanced and harmonious — like two companions.
Both faces clearly visible at a similar height.`,

  `SCENE — Resting and guardian (2 animals):
Animal 1 lies relaxed in the foreground of the cushion —
chest down, front paws resting completely flat on the cushion surface.
Animal 1's gaze is soft and direct — calm, looking toward the viewer.
Animal 2 sits upright behind Animal 1, slightly to one side —
like a guardian watching over the first.
Animal 2's head is raised with quiet authority —
gaze directed slightly above and past the viewer, noble and alert.
The composition has natural depth and emotional warmth.
Both faces clearly visible at different heights and angles.`,

];

// ─── 3 ANIMALES ───────────────────────────────────────────────────────────────
const SCENES_3 = [

  `SCENE — Classic triangle composition (3 animals):
Animal 1 (largest) rests in the center and slightly behind —
body low on the cushion, chest pressed against the surface.
Animal 1 is the dominant subject — gaze directed fully and directly
at the viewer with regal confidence.
Animal 2 sits or rests to the front LEFT, body angled inward —
gaze directed toward the viewer but very slightly to the right,
naturally aware of the composition.
Animal 3 sits or rests to the front RIGHT, body angled inward —
gaze directed toward the viewer but very slightly to the left,
creating a subtle convergence toward the center.
All three animals' front paws rest completely flat on the cushion —
fully supported, never hanging over the edge.
The three animals form a natural triangle —
the apex (Animal 1) slightly higher and behind,
the base (Animals 2 and 3) lower and in front.
All three faces clearly visible at different depths.`,

  `SCENE — Depth line composition (3 animals):
Animal 1 (largest) rests at the back of the cushion —
body slightly elevated, chest pressed against the cushion.
Animal 1 is the anchor — gaze directed fully at the viewer,
authoritative and central.
Animal 2 rests in the middle ground — slightly in front of Animal 1,
offset to one side. Gaze directed toward the viewer with
a very slight upward tilt — naturally alert and curious.
Animal 3 (smallest) rests in the foreground —
closest to the viewer, front paws resting completely flat.
Animal 3's gaze is soft and slightly angled downward toward the viewer —
the most intimate and close of the three.
The three animals create natural depth from foreground to background.
Each face is at a different height and depth — all clearly visible.`,

];

// ─── 4 ANIMALES ───────────────────────────────────────────────────────────────
const SCENES_4 = [

  `SCENE — Two rows, natural depth (4 animals):
FRONT ROW: Animals 1 and 2 rest in the foreground —
both lying with front paws resting completely flat on the cushion surface.
Animal 1 on the left — gaze directed softly toward the viewer,
slightly angled inward.
Animal 2 on the right — gaze directed toward the viewer,
very slightly angled inward from the opposite side.
BACK ROW: Animals 3 and 4 sit upright behind the front pair —
elevated above them, faces visible over the front animals.
Animal 3 — the dominant gaze, looking directly and fully at the viewer.
Animal 4 — gaze very slightly off-axis, naturally noble and alert.
All four faces clearly visible — front row lower, back row higher.
The cushion is grand and generous to fit all four naturally.`,

  `SCENE — Pyramid composition (4 animals):
Animal 1 (largest) rests centered at the back — the apex.
Body low on the cushion, chest pressed against the surface.
Animal 1 is the dominant subject — gaze directed fully and directly
at the viewer with supreme regal confidence.
Animals 2 and 3 rest on each side in the middle ground —
offset left and right, angled inward toward Animal 1.
Animal 2 — gaze directed toward the viewer, slightly angled left.
Animal 3 — gaze directed toward the viewer, slightly angled right.
Animal 4 (smallest) rests in the front center foreground —
closest to the viewer, front paws resting completely flat.
Animal 4's gaze is soft and intimate — slightly upward toward the viewer.
The four animals form a natural pyramid.
All faces visible at four different depths and heights.`,

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
The protrusion of each animal's hindquarters MUST be visible beneath the cape —
the fabric reveals body mass and volume, never replaces it.

CUSHION:
A grand, generously sized gold ochre velvet cushion —
wide and plump enough to comfortably hold all the animals.
The cushion visibly sags and deforms under the combined weight of all animals.
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
