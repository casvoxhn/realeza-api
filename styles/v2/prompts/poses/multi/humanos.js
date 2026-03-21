// styles/v2/prompts/poses/multi/humanos.js — V1.0
// Composiciones para grupos de humanos — parejas, familias, grupos
// Incluye escenas mixtas con mascotas y niños

const { pick } = require('../../../utils/pick');

const MULTI_RULES = `CRITICAL RULES — apply to every person:
- Each person's face is LOCKED from their source photo — never reinvented
- Exact facial features, skin tone, hair color and texture — preserved exactly
- Exact eye shape, color and gaze direction — locked
- Bodies are built around faces — never the opposite
- Each person's natural personality and expression is preserved exactly
- All faces must be clearly visible, recognizable and prominent
- No two people share the exact same pose or gaze direction
- Every person feels naturally at ease — never stiff, forced or theatrical
- Body language is relaxed, dignified and natural — alive, never posed
- Children look like children — their scale, energy and innocence preserved
- Pets look like themselves — their species character fully intact`;

// ─── 2 PERSONAS ───────────────────────────────────────────────────────────────
const SCENES_2 = [

  // Pareja clásica — uno sentado, uno de pie
  `SCENE — Classic couple portrait (2 people):
Person 1 sits in a grand upholstered chair or throne —
body turned slightly to one side, not perfectly frontal.
Hands resting naturally in the lap or on the armrest.
Person 2 stands to one side of Person 1, slightly behind —
one hand resting naturally on Person 1's shoulder or chairback.
Person 2's body turns slightly inward toward Person 1.
Both faces turn naturally toward the viewer.
The composition has natural hierarchy and warmth.
Both faces clearly visible at different heights.
The standing figure is taller — natural proportions preserved.`,

  // Pareja lado a lado — mismo nivel
  `SCENE — Side by side couple (2 people):
Both people stand or sit side by side at the same depth.
Person 1 on the left, body angled slightly to the RIGHT.
Person 2 on the right, body angled slightly to the LEFT.
Their bodies angle naturally toward each other — warm and connected.
Both faces turn to look at the viewer.
The composition is balanced and harmonious.
A natural, relaxed closeness between them — dignified but warm.
Both faces clearly visible at the same height.`,

  // Humano con mascota — jerarquía natural
  `SCENE — Person with pet (person + animal):
The person sits in a grand chair or on a stone ledge —
body turned slightly, posture dignified and natural.
The pet rests on the person's lap, on an adjacent cushion,
or at the person's feet — wherever feels most natural
for this specific animal's size and species.
The person's hand rests naturally near or on the pet —
a gentle, natural gesture, never forced.
Both faces clearly visible — the person prominent,
the pet visible and recognizable beside them.
The composition feels like a genuine bond, not a prop.`,

];

// ─── 3 PERSONAS ───────────────────────────────────────────────────────────────
const SCENES_3 = [

  // Familia — dos adultos, un niño
  `SCENE — Family trio (2 adults + 1 child):
Adult 1 sits in a grand chair — body slightly angled,
posture dignified and natural, face toward the viewer.
Adult 2 stands to one side, slightly behind Adult 1 —
body turned inward, face toward the viewer.
The child stands or sits in front, between the two adults —
naturally positioned at the center foreground.
The child's scale is natural — visibly smaller than the adults.
The adults' hands rest naturally near the child —
a warm, protective gesture without being forced.
All three faces clearly visible at three different heights.
The composition feels like a genuine family — warm and natural.`,

  // Triángulo — tres adultos
  `SCENE — Classic triangle (3 adults):
Person 1 sits centered — the anchor of the composition.
Body slightly angled, posture open and dignified.
Person 2 stands to the LEFT of Person 1, slightly behind —
body turned inward toward the center.
Person 3 stands to the RIGHT of Person 1, slightly behind —
body turned inward toward the center.
All three faces turn naturally toward the viewer.
The three people form a natural triangle —
the seated figure lower at center,
the standing figures higher on each side.
All three faces clearly visible at different depths.`,

  // Grupo con mascota
  `SCENE — Two people with pet (2 people + 1 animal):
Person 1 sits in a grand chair or on a stone ledge —
body turned slightly, posture dignified and natural.
Person 2 stands to one side, slightly behind Person 1.
The pet rests on Person 1's lap, on an adjacent cushion,
or at their feet — wherever feels most natural
for this specific animal's size and species.
Both people's faces turn naturally toward the viewer.
The pet's face is clearly visible and prominent.
The composition feels warm and genuine — three subjects,
each with equal presence and recognition.`,

];

// ─── 4 PERSONAS ───────────────────────────────────────────────────────────────
const SCENES_4 = [

  // Familia clásica — dos adultos, dos niños
  `SCENE — Classic family portrait (2 adults + 2 children):
Adult 1 sits in a grand chair at center-left —
body slightly angled, posture dignified and open.
Adult 2 stands to the right, slightly behind —
body turned inward toward the family.
Child 1 stands or sits in front of Adult 1 —
naturally smaller, at ease, face toward the viewer.
Child 2 stands or sits in front of Adult 2 —
at a similar height to Child 1, face toward the viewer.
The adults frame the children naturally.
All four faces clearly visible at different heights.
The composition feels warm, genuine and balanced.
Children look like children — their natural scale preserved.`,

  // Cuatro adultos — dos filas
  `SCENE — Four adults, two rows:
FRONT ROW: Person 1 on the left and Person 2 on the right —
both seated or slightly lower, bodies angled inward.
BACK ROW: Person 3 behind Person 1 and Person 4 behind Person 2 —
both standing, elevated above the front row.
All four bodies angle slightly inward toward the center.
All four faces turn naturally toward the viewer.
Natural depth between rows — not all on the same flat plane.
All four faces clearly visible at different heights.
The composition is balanced, dignified and natural.`,

  // Familia con mascota
  `SCENE — Family with pet (3 people + 1 animal):
Adult 1 sits in a grand chair — the anchor of the composition.
Adult 2 stands to one side, slightly behind.
Child stands or sits in the foreground, closest to the viewer.
The pet rests on Adult 1's lap, beside the child,
or on an adjacent cushion — wherever feels most natural.
All three human faces clearly visible and prominent.
The pet's face is clearly visible and recognizable.
The composition feels like a genuine family moment —
warm, natural and dignified.
The child's scale is natural — visibly smaller than the adults.`,

];

// ─── VESTUARIO ────────────────────────────────────────────────────────────────
const ADULT_PALETTES = [
  ["deep crimson",  "midnight blue",  "forest green",  "deep burgundy"],
  ["royal blue",    "warm crimson",   "deep gold",     "dark teal"],
  ["deep purple",   "forest green",   "warm crimson",  "midnight blue"],
  ["dark burgundy", "royal blue",     "deep gold",     "forest green"],
];

const CHILD_PALETTES = [
  ["soft ivory",    "pale gold",      "blush rose",    "sky blue"],
  ["cream white",   "soft lavender",  "pale mint",     "warm ivory"],
];

const GEMS = ["ruby", "emerald", "sapphire", "topaz", "amethyst", "pearl", "garnet", "opal"];

// ─── EXPORT ───────────────────────────────────────────────────────────────────
module.exports = function multiHumanos(numSubjects) {

  const n = Math.min(Math.max(numSubjects || 2, 2), 4);

  const scenePool = n === 2 ? SCENES_2
    : n === 3 ? SCENES_3
    : SCENES_4;

  const scene         = pick(scenePool);
  const adultPalette  = pick(ADULT_PALETTES);
  const childPalette  = pick(CHILD_PALETTES);
  const shuffledGems  = [...GEMS].sort(() => Math.random() - 0.5);

  const costumes = Array.from({ length: n }, (_, i) => {
    const isChild = i >= 2;
    const palette = isChild ? childPalette[i - 2] : adultPalette[i];
    const gem     = shuffledGems[i];
    return isChild
      ? `Person ${i + 1} (child): ${palette} royal garment — delicate, scaled to their natural size. Small gold brooch with ${gem}.`
      : `Person ${i + 1}: ${palette} velvet royal robe with ermine trim. Gold chain with ${gem} pendant.`;
  }).join('\n');

  return `STEP 2 — COMPOSITION (${n} people):

${MULTI_RULES}

${scene}

INDIVIDUAL COSTUMES — each person wears their own independent costume:
${costumes}

SETTING:
A grand interior — warm atmospheric darkness in the background.
Stone architecture, heavy drapes, or painted backdrop behind the subjects.
A stone ledge or ornate floor anchors the composition at the base.
No furniture unless specified in the scene above.

LIGHTING:
Warm Rembrandt lighting — one side of each face slightly illuminated,
the other falling into warm shadow.
The faces are the brightest elements in the composition.
Deep shadows in the background — pure atmospheric warmth.

FRAMING:
Wide open composition — all people fully visible.
All faces prominent, recognizable and clearly visible.
Natural depth — not all subjects on the same flat plane.
Generous breathing room on all sides.
4:5 portrait. 4K. High thinking mode.`;
};
