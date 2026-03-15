// mascotas.js — V20.2
// Poses inteligentes: Gemini lee la foto y elige la pose correcta por especie/tamaño

const { pick } = require('./utils/pick');
const renacimientoStyle = require('./styles/renacimiento');
const realezaStyle      = require('./styles/realeza');
const barrocoStyle      = require('./styles/barroco');

// ─── MAPA DE ESTILOS ──────────────────────────────────────────────────────────
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

// ─── POSE INTELIGENTE — Gemini decide según la foto ───────────────────────────
const POSE_BLOCK = `STEP 2 — POSE:
Study the animal in Image 1 carefully and choose
the most natural and dignified pose:

IF the animal is a CAT:
→ Choose one naturally:
   - Lying with front paws tucked under the body — loaf position, most elegant
   - Lying with front paws extended forward resting on cushion edge
   - Sitting upright, body angled slightly to one side, full body visible

IF the animal is a LARGE DOG (golden, labrador, shepherd, husky, etc):
→ Lying down, chest resting on cushion.
   Front paws extended forward hanging over the front edge.
   Head raised naturally.

IF the animal is a MEDIUM or SMALL DOG, puppy, or other animal:
→ Choose naturally between:
   - Lying down, chest on cushion, front paws over the front edge
   - Sitting upright, full body visible, dignified

FOR ALL POSES:
The animal looks completely natural — never stiff or forced.
Head raised facing the viewer with quiet authority.

FRAMING:
Wide open composition — full body visible.
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
Remove any collar or leash.`;

// ─── FACE CHECK ───────────────────────────────────────────────────────────────
const FACE_CHECK = `STEP 3 — FACE CHECK:
Compare the painted face against Image 1.
Head angle, facial features and expression must match exactly.
Tongue out if it was out. Eyes exact. Markings exact.
If anything drifted — correct it before finalizing.
The owner must recognize their pet immediately.

4:5 portrait. 4K. High thinking mode.`;

// ─── MULTI ANIMAL ─────────────────────────────────────────────────────────────
const scenes_2 = [
  "Both animals rest on the cushion — bodies low and natural, front paws extended forward hanging over the front edge. The larger one slightly behind and to one side, the smaller one in front beside it. Both faces raised and clearly visible.",
  "Both animals rest together on the cushion — bodies natural and relaxed, angled slightly toward each other. Front paws over the front edge. Both faces clearly visible.",
];

const scenes_3 = [
  "Two animals rest in front on the cushion — bodies low, paws over the front edge. The third sits upright behind them, centered. All faces clearly visible. All on the cushion.",
  "Three animals rest on the grand cushion — the largest in the center, body low. The other two recline on each side, bodies angled slightly inward. All faces raised and clearly visible.",
];

const scenes_4 = [
  "Two animals rest in front on the cushion — paws over the front edge. Two sit behind them — upright and relaxed. All four on the cushion. All four faces clearly visible.",
  "Four animals rest on the grand cushion — two slightly in front, two slightly behind. All bodies natural and relaxed. All four faces clearly visible.",
];

const complementaryPalettes = [
  ["deep crimson", "dark teal"],
  ["forest green", "deep burgundy"],
  ["royal blue", "warm crimson"],
  ["deep purple", "forest green"],
  ["dark burgundy", "midnight blue"],
];

const gems = ["ruby", "emerald", "sapphire", "topaz", "amethyst"];

// ─── EXPORT PRINCIPAL ─────────────────────────────────────────────────────────
module.exports = function mascotas(estilo, numAnimales, isGroup, genero) {
  const numSubjects = Math.max(numAnimales || 1, isGroup ? 2 : 1);
  const styleKey    = (estilo || 'barroco').toLowerCase().replace(/\s+/g, '_');
  const styleFn     = styleMap[styleKey] || barrocoStyle;
  const styleBlock  = styleFn(numSubjects, isGroup, genero);

  // ── UN SOLO ANIMAL ────────────────────────────────────────────────────
  if (numSubjects === 1) {
    return [FACE_FIRST, POSE_BLOCK, styleBlock, FACE_CHECK].join('\n\n');
  }

  // ── MÚLTIPLES ANIMALES ────────────────────────────────────────────────
  const scenePool = numSubjects === 2 ? scenes_2
    : numSubjects === 3 ? scenes_3
    : scenes_4;

  const scene        = pick(scenePool);
  const palette      = pick(complementaryPalettes);
  const shuffledGems = [...gems].sort(() => Math.random() - 0.5);

  const multiPose = `STEP 2 — COMPOSITION (${numSubjects} animals):
${scene}
Preserve the exact face, markings, fur color and expression of each animal.
Each animal wears its own independent royal costume — they do NOT share garments.
Animal 1: ${palette[0]} velvet cape with white ermine border. Gold brooch with ${shuffledGems[0]}.
Animal 2: ${palette[1]} velvet cape with white ermine border. Gold brooch with ${shuffledGems[1]}.
${numSubjects >= 3 ? `Animal 3: deep gold velvet cape with ermine. Gold brooch with ${shuffledGems[2]}.` : ''}
${numSubjects >= 4 ? `Animal 4: midnight blue velvet cape with ermine. Gold brooch with ${shuffledGems[3]}.` : ''}

FRAMING:
Wide composition — all animals and full cushion visible.
Generous breathing room on all sides.`;

  const multiFaceFirst = `Paint ${numSubjects} animals from the photos in one unified oil painting from scratch.
Not composited. Not layered. One single painting.

STEP 1 — FACE FIRST:
Study each photo carefully. For each animal extract and transfer exactly:
- Exact facial features, markings, fur color and expression — LOCKED
- Exact eye shape, color and gaze direction
- Exact nose pattern and coloring
- Exact skin/fur tone and texture
- If tongue is out in photo — tongue is out in painting
- Preserve each animal's natural personality
Remove any collar or leash from all animals.`;

  const multiFaceCheck = `STEP 3 — FACE CHECK:
Compare each painted face against its source photo.
Every animal must be recognizable. Correct any drift before finalizing.

4:5 portrait. 4K. High thinking mode.`;

  return [multiFaceFirst, multiPose, styleBlock, multiFaceCheck].join('\n\n');
};
