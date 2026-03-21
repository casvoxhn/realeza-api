// styles/v2/prompts/poses/multi/humanos.js — V1.1
// V1.0: estructura base
// V1.1: vestuario por género y edad — coordinado en grupos, sin ermine

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

  `SCENE — Classic couple portrait (2 people):
Person 1 sits naturally on a stone ledge or low seat —
body turned slightly to one side, not perfectly frontal.
Hands resting naturally in the lap or at the side.
Person 2 sits or stands to one side of Person 1, slightly behind —
body turned naturally inward toward Person 1.
Both faces turn naturally toward the viewer.
The composition has natural warmth and hierarchy.
Both faces clearly visible at different heights.`,

  `SCENE — Side by side (2 people):
Both people sit or stand side by side at the same depth.
Person 1 on the left, body angled slightly to the RIGHT.
Person 2 on the right, body angled slightly to the LEFT.
Their bodies angle naturally toward each other — warm and connected.
Both faces turn to look at the viewer.
Natural, relaxed closeness — dignified but warm.
Both faces clearly visible at the same height.`,

  `SCENE — Person with pet (person + animal):
The person sits naturally on a stone ledge or low seat —
body turned slightly, posture dignified and natural.
The pet rests beside the person or on their lap —
wherever feels most natural for this animal's size.
The person's hand rests naturally near or on the pet.
Both faces clearly visible — person prominent, pet recognizable.
The composition feels like a genuine bond.`,

];

// ─── 3 PERSONAS ───────────────────────────────────────────────────────────────
const SCENES_3 = [

  `SCENE — Family trio (2 adults + 1 child):
Adult 1 sits on a stone ledge or low seat —
body slightly angled, posture natural and dignified.
Adult 2 sits or stands close beside Adult 1 —
body turned inward, face toward the viewer.
The child sits in front between the two adults —
naturally smaller, at ease, face toward the viewer.
The adults' hands rest naturally near the child — warm and protective.
All three faces clearly visible at three different heights.`,

  `SCENE — Classic triangle (3 people):
Person 1 sits centered — the anchor of the composition.
Person 2 sits or stands to the LEFT, slightly behind —
body turned inward toward the center.
Person 3 sits or stands to the RIGHT, slightly behind —
body turned inward toward the center.
All three faces turn naturally toward the viewer.
Natural triangle — seated figure lower, others framing.
All three faces clearly visible.`,

  `SCENE — Two people with pet:
Person 1 sits naturally — body turned slightly, face toward viewer.
Person 2 sits or stands beside Person 1.
The pet rests beside Person 1 or between the two people —
wherever feels most natural for this animal's size.
Both faces and the pet's face clearly visible.
The composition feels warm and genuine.`,

];

// ─── 4 PERSONAS ───────────────────────────────────────────────────────────────
const SCENES_4 = [

  `SCENE — Classic family portrait (2 adults + 2 children):
Adult 1 sits on a stone ledge — body slightly angled, open and dignified.
Adult 2 sits or stands beside Adult 1, turned inward.
Child 1 sits in front of Adult 1 — naturally smaller, face toward viewer.
Child 2 sits or stands in front of Adult 2 — similar height to Child 1.
The adults frame the children naturally.
All four faces clearly visible at different heights.
Warm, genuine and balanced — a real family.`,

  `SCENE — Four people, two rows:
FRONT ROW: Person 1 left and Person 2 right —
both seated, bodies angled inward.
BACK ROW: Person 3 behind Person 1, Person 4 behind Person 2 —
both standing, elevated above the front row.
All bodies angle slightly inward toward center.
All faces turn naturally toward the viewer.
Natural depth — not all on the same flat plane.`,

  `SCENE — Family with pet:
Adult 1 sits — the anchor of the composition.
Adult 2 sits or stands beside Adult 1.
Child sits or stands in the foreground, closest to the viewer.
The pet rests beside the child or at Adult 1's feet.
All faces clearly visible and prominent.
The composition feels like a genuine family moment.`,

];

// ─── PALETAS COORDINADAS ──────────────────────────────────────────────────────
const GROUP_PALETTES = [
  // Palette 1 — crimson + navy + green + brown
  {
    adult_m:  "deep forest green velvet frock coat with gold embroidery, white lace shirt",
    adult_f:  "deep crimson velvet gown with white lace collar",
    boy:      "navy blue velvet suit with white lace collar",
    girl:     "crimson red velvet dress with white lace collar",
    teen_m:   "dark brown tailcoat with white cravat",
    teen_f:   "forest green velvet gown with white lace trim",
  },
  // Palette 2 — burgundy + blue + amber
  {
    adult_m:  "deep burgundy velvet jacket with gold embroidery, white ruffled shirt",
    adult_f:  "warm amber silk gown with lace collar and embroidered bodice",
    boy:      "forest green velvet suit with white lace collar",
    girl:     "royal blue velvet dress with white lace collar",
    teen_m:   "navy blue tailcoat with white cravat",
    teen_f:   "deep crimson velvet gown with white lace trim",
  },
  // Palette 3 — green + crimson + blue
  {
    adult_m:  "charcoal grey frock coat with subtle embroidery, white jabot",
    adult_f:  "forest green velvet gown with gold trim and white lace collar",
    boy:      "deep burgundy velvet suit with white lace collar",
    girl:     "royal blue velvet dress with white lace collar",
    teen_m:   "deep green velvet jacket with gold buttons, white shirt",
    teen_f:   "warm amber gown with lace collar",
  },
];

// ─── EXPORT ───────────────────────────────────────────────────────────────────
module.exports = function multiHumanos(numSubjects) {

  const n = Math.min(Math.max(numSubjects || 2, 2), 4);

  const scenePool = n === 2 ? SCENES_2
    : n === 3 ? SCENES_3
    : SCENES_4;

  const scene   = pick(scenePool);
  const palette = pick(GROUP_PALETTES);

  const costumes = Array.from({ length: n }, (_, i) => {
    const idx = i + 1;
    if (i === 0) return `Person ${idx}: ${palette.adult_m}`;
    if (i === 1) return `Person ${idx}: ${palette.adult_f}`;
    if (i === 2) return `Person ${idx} (child): ${palette.girl} — scaled naturally to child's size`;
    return             `Person ${idx} (child): ${palette.boy} — scaled naturally to child's size`;
  }).join('\n');

  return `STEP 2 — COMPOSITION (${n} people):

${MULTI_RULES}

${scene}

INDIVIDUAL COSTUMES — each person wears their own period-appropriate costume:
${costumes}

COSTUME DETAILS FOR ALL:
White lace collars and cuffs — individual thread detail visible.
Velvet fabric has directional nap — highlight and shadow follow the nap.
Deep fold shadows in all fabric — real weight and gravity.
Gold jewelry is aged warm ochre — never bright yellow.
Children's costumes are scaled naturally — never miniature adult versions.

SETTING:
Natural landscape — forest edge, rocky outcrop or gentle hillside.
Warm atmospheric depth behind the subjects.
Soft golden light from one side — warm and natural.
The setting feels like a genuine outdoor portrait sitting.
No artificial studio backgrounds.

FRAMING:
Wide open composition — all people fully visible.
All faces prominent, recognizable and clearly visible.
Natural depth — not all subjects on the same flat plane.
Generous breathing room on all sides.
4:5 portrait. 4K. High thinking mode.`;
};
```

---

**Archivos a subir:**
```
styles/renacimiento_humano.js  ← V2.0
styles/barroco_humano.js       ← V2.0
styles/realeza_humano.js       ← V2.0
poses/multi/humanos.js         ← V1.1
