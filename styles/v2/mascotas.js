// mascotas.js — V20.6
// Fix: lógica inteligente para fotos de solo cara — el modelo sabe cómo es un animal

const { pick } = require('./utils/pick');
const renacimientoStyle = require('./styles/renacimiento');
const realezaStyle      = require('./styles/realeza');
const barrocoStyle      = require('./styles/barroco');

const styleMap = {
  renacimiento:          renacimientoStyle,
  barroco:               barrocoStyle,
  realeza:               realezaStyle,
  rey:                   realezaStyle,
  the_elegant_portrait:  renacimientoStyle,
  the_classic_portrait:  barrocoStyle,
  the_royal_portrait:    realezaStyle,
  museum_elegance:       renacimientoStyle,
  imperial_coronation:   realezaStyle,
  baroque_drama:         barrocoStyle,
  intelligent:           barrocoStyle,
};

// ─── POSE INTELIGENTE ─────────────────────────────────────────────────────────
const POSE_BLOCK = `STEP 2 — POSE:
CRITICAL RULE: The face from Image 1 is LOCKED and placed first.
The body is built AROUND the face — never the opposite.

First, analyze Image 1 to understand what is visible:

IF only the face, head or chest is visible in the photo:
→ Generate the full animal naturally — you know what this
  species looks like. Paint the complete body coherently.
→ For body parts not visible in the photo: use the general
  fur color and tone visible in the face as your reference.
  A black cat has a black body. An orange tabby has an
  orange tabby body. Match the visible fur — do not invent
  specific markings or patterns on areas not shown.
→ Choose a natural resting pose on the cushion.
  The royal costume drapes naturally over the body.

IF the full body is clearly visible in the photo:
→ You have all the information — use it faithfully.
  Choose naturally between these poses:

  POSE A — Lying, body to the right:
  Animal lies on cushion, body to the RIGHT.
  Chest on cushion. Front paws hang over the front edge.
  Full body including hindquarters and tail visible.

  POSE B — Lying, body to the left:
  Animal lies on cushion, body to the LEFT.
  Chest on cushion. Front paws hang over the front edge.
  Full body including hindquarters and tail visible.

  POSE C — 3/4 side view, tail visible:
  Body turned naturally to one side on the cushion.
  Flank, hindquarters and tail all visible.
  Front paws on cushion edge.
  Head turns naturally to face the viewer.

  POSE D — Loaf position (cats only):
  Front paws tucked neatly under the chest.
  Body compact and rounded. Tail may curl to one side.
  The cat looks serene and self-contained.

FOR ALL POSES:
The face and head angle remain exactly as in Image 1 — unchanged.
The animal looks completely natural — never stiff or forced.

FRAMING:
Wide open composition.
The animal occupies the upper 55% of the canvas.
The cushion and ledge occupy the lower 45%.
Generous breathing room on all sides.`;

// ─── FACE FIRST ───────────────────────────────────────────────────────────────
const FACE_FIRST = `Image 1: the pet photo — the only input.
Paint a completely NEW original oil painting from scratch.
Not composited. Not layered. One unified painting.

STEP 1 — FACE FIRST — MOST CRITICAL:
Study Image 1 carefully before painting anything.
Extract and transfer exactly:
- Exact head angle and rotation from the photo — LOCKED
- Exact head tilt direction and degree — LOCKED
- Do not straighten or repose the head in any way
- Exact facial features, markings and expression
- Exact eye shape, color and gaze direction
- Exact nose pattern and coloring
- Exact skin/fur tone and texture
- If tongue is out in photo — tongue is out in painting
- Preserve the animal's natural personality exactly
The face AND head angle are LOCKED from Image 1.
The body is always built around the face — never the opposite.
Remove any collar or leash.`;

const FACE_CHECK = `STEP 3 — FACE CHECK:
Compare the painted face against Image 1.
Head angle, facial features and expression must match exactly.
Tongue out if it was out. Eyes exact. Markings exact.
If anything drifted — correct it before finalizing.
The owner must recognize their pet immediately.

4:5 portrait. 4K. High thinking mode.`;

// ─── MULTI ANIMAL ─────────────────────────────────────────────────────────────
const scenes_2 = [
  "Both animals rest on the cushion naturally. For each animal: if full body was visible in photo, show it; if only face was visible, generate body coherently using face fur color as reference. Both faces clearly visible and prominent.",
  "Both animals rest together on the cushion. Bodies natural and relaxed. For body parts not visible in source photos, use the animal's visible fur color as reference — no invented markings. Both faces clearly visible.",
];
const scenes_3 = [
  "Three animals rest on the grand cushion — largest in center, others on each side. All faces clearly visible. Generate each body coherently based on visible fur color and species.",
  "Two animals rest in front, one sits behind — all on the cushion. All faces clearly visible. Bodies generated coherently from visible fur color.",
];
const scenes_4 = [
  "Four animals on the grand cushion — two in front, two behind. All faces clearly visible. Bodies generated coherently from visible fur color and species.",
  "Four animals rest naturally on the cushion. All faces prominent. Bodies natural and coherent with each animal's visible fur color.",
];

const complementaryPalettes = [
  ["deep crimson", "dark teal"],
  ["forest green", "deep burgundy"],
  ["royal blue", "warm crimson"],
  ["deep purple", "forest green"],
  ["dark burgundy", "midnight blue"],
];
const gems = ["ruby", "emerald", "sapphire", "topaz", "amethyst"];

// ─── EXPORT ───────────────────────────────────────────────────────────────────
module.exports = function mascotas(estilo, numAnimales, isGroup, genero) {
  const numSubjects = Math.max(numAnimales || 1, isGroup ? 2 : 1);
  const styleKey    = (estilo || 'barroco').toLowerCase().replace(/\s+/g, '_');
  const styleFn     = styleMap[styleKey] || barrocoStyle;
  const styleBlock  = styleFn(numSubjects, isGroup, genero);

  if (numSubjects === 1) {
    return [FACE_FIRST, POSE_BLOCK, styleBlock, FACE_CHECK].join('\n\n');
  }

  const scenePool    = numSubjects === 2 ? scenes_2
    : numSubjects === 3 ? scenes_3
    : scenes_4;
  const scene        = pick(scenePool);
  const palette      = pick(complementaryPalettes);
  const shuffledGems = [...gems].sort(() => Math.random() - 0.5);

  const multiPose = `STEP 2 — COMPOSITION (${numSubjects} animals):
CRITICAL RULE: Each animal's face is LOCKED from its photo.
Bodies are built around faces — never the opposite.
For body parts not visible in source photos: use the animal's
visible fur color and species as reference — no invented markings.

${scene}
Each animal wears its own independent royal costume — they do NOT share garments.
Animal 1: ${palette[0]} velvet cape with white ermine border. Gold brooch with ${shuffledGems[0]}.
Animal 2: ${palette[1]} velvet cape with white ermine border. Gold brooch with ${shuffledGems[1]}.
${numSubjects >= 3 ? `Animal 3: deep gold velvet cape with ermine. Gold brooch with ${shuffledGems[2]}.` : ''}
${numSubjects >= 4 ? `Animal 4: midnight blue velvet cape with ermine. Gold brooch with ${shuffledGems[3]}.` : ''}
FRAMING: Wide — all animals and cushion visible. Generous breathing room.`;

  const multiFaceFirst = `Paint ${numSubjects} animals from the photos in one unified oil painting.
Not composited. Not layered. One single painting.

STEP 1 — FACE FIRST:
For each animal extract and transfer exactly:
- Exact facial features, markings, fur color and expression — LOCKED
- Exact eye shape, color and gaze direction
- Exact nose pattern and coloring
- Exact skin/fur tone and texture
- If tongue is out — tongue is out in painting
- Preserve each animal's natural personality
Each face is LOCKED. Bodies are built around each face.
For body parts not visible: use visible fur color as reference.
Remove any collar or leash.`;

  const multiFaceCheck = `STEP 3 — FACE CHECK:
Compare each painted face against its source photo.
Every animal must be recognizable. Correct any drift.
4:5 portrait. 4K. High thinking mode.`;

  return [multiFaceFirst, multiPose, styleBlock, multiFaceCheck].join('\n\n');
};
