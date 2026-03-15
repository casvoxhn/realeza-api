// mascotas.js — V20.0
// Compatible con estilos V4.0 (retornan string, no objeto)
// Pose pool con 4 variantes aprobadas + patas sobre borde frontal

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
  intelligent:           barrocoStyle, // fallback seguro
};

// ─── POOL DE POSES APROBADAS ──────────────────────────────────────────────────
// Regla crítica en todas: patas sobre el BORDE FRONTAL, no sobre la superficie
const POSES = [

  // Pose 1 — Recostado, cabeza derecha
  `STEP 2 — POSE:
Animal lying down naturally on the cushion.
Chest resting on cushion surface.
Front paws extended forward and hanging naturally
over the FRONT EDGE of the cushion — the paws drape
down over the front lip, slightly below the cushion surface.
The paws do NOT rest flat on top of the cushion.
They fall over the front edge — relaxed, natural weight.
Head raised, looking slightly to the RIGHT.
Full body visible in the composition.
The animal looks completely natural and at ease.

FRAMING:
Wide open composition — full body visible.
The animal occupies the upper 55% of the canvas.
The cushion and ledge occupy the lower 45%.
Generous breathing room on all sides.`,

  // Pose 2 — Recostado, cabeza izquierda
  `STEP 2 — POSE:
Animal lying down naturally on the cushion.
Chest resting on cushion surface.
Front paws extended forward and hanging naturally
over the FRONT EDGE of the cushion — the paws drape
down over the front lip, slightly below the cushion surface.
The paws do NOT rest flat on top of the cushion.
They fall over the front edge — relaxed, natural weight.
Head raised, looking slightly to the LEFT.
Full body visible in the composition.
The animal looks completely natural and at ease.

FRAMING:
Wide open composition — full body visible.
The animal occupies the upper 55% of the canvas.
The cushion and ledge occupy the lower 45%.
Generous breathing room on all sides.`,

  // Pose 3 — Sentado, 3/4 derecha
  `STEP 2 — POSE:
Animal sitting upright and dignified on the cushion.
Body angled slightly to the RIGHT — natural 3/4 angle.
Front paws resting side by side, hanging gently over
the FRONT EDGE of the cushion — paws drape down over
the front lip, natural and relaxed, not stiff or flat.
Head turned to look toward the viewer.
The animal fills the composition naturally.

FRAMING:
Wide open composition — full body visible.
The animal occupies the upper 55% of the canvas.
The cushion and ledge occupy the lower 45%.
Generous breathing room on all sides.`,

  // Pose 4 — Sentado, 3/4 izquierda
  `STEP 2 — POSE:
Animal sitting upright and dignified on the cushion.
Body angled slightly to the LEFT — natural 3/4 angle.
Front paws resting side by side, hanging gently over
the FRONT EDGE of the cushion — paws drape down over
the front lip, natural and relaxed, not stiff or flat.
Head turned to look toward the viewer.
The animal fills the composition naturally.

FRAMING:
Wide open composition — full body visible.
The animal occupies the upper 55% of the canvas.
The cushion and ledge occupy the lower 45%.
Generous breathing room on all sides.`,

];

// ─── BLOQUES FIJOS ────────────────────────────────────────────────────────────
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

const FACE_CHECK = `STEP 3 — FACE CHECK:
Compare the painted face against Image 1.
Head angle, facial features and expression must match exactly.
Tongue out if it was out. Eyes exact. Markings exact.
If anything drifted — correct it before finalizing.
The owner must recognize their pet immediately.

4:5 portrait. 4K. High thinking mode.`;

// ─── BLOQUES MULTI-ANIMAL ─────────────────────────────────────────────────────
const scenes_2 = [
  "Both animals lie resting on the cushion — bodies low and horizontal, weight on chest and elbows, front paws extended forward hanging over the front edge. The larger one lies slightly behind and to one side, the smaller one lies in front beside it. Both faces raised and clearly visible.",
  "Both animals sit together on the cushion — upright but relaxed, bodies naturally angled slightly toward each other. Front paws hanging over the front edge of the cushion. Both faces clearly visible.",
];

const scenes_3 = [
  "Two animals lie resting in front on the cushion — bodies low, chest down, paws over the front edge. The third sits upright behind them, centered. All faces clearly visible. All on the cushion.",
  "Three animals rest on the grand cushion — the largest lies in the center, body low and horizontal. The other two recline on each side, bodies angled slightly inward. All faces raised and clearly visible.",
];

const scenes_4 = [
  "Two animals lie in front on the cushion — paws over the front edge. Two animals sit behind them — upright and relaxed. All four on the cushion. All four faces clearly visible.",
  "Four animals rest on the grand cushion — two slightly in front, two slightly behind, all bodies low. All four faces clearly visible.",
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

  // Los estilos V4.0 retornan un string directo
  const styleBlock = styleFn(numSubjects, isGroup, genero);

  // ── UN SOLO ANIMAL ────────────────────────────────────────────────────
  if (numSubjects === 1) {
    const poseBlock = pick(POSES);
    return [FACE_FIRST, poseBlock, styleBlock, FACE_CHECK].join('\n\n');
  }

  // ── MÚLTIPLES ANIMALES ────────────────────────────────────────────────
  const scenePool = numSubjects === 2 ? scenes_2
    : numSubjects === 3 ? scenes_3
    : scenes_4;

  const scene          = pick(scenePool);
  const palette        = pick(complementaryPalettes);
  const shuffledGems   = [...gems].sort(() => Math.random() - 0.5);

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
- Preserve each animal's natural personality
Remove any collar or leash from all animals.`;

  const multiFaceCheck = `STEP 3 — FACE CHECK:
Compare each painted face against its source photo.
Every animal must be recognizable. Correct any drift before finalizing.

4:5 portrait. 4K. High thinking mode.`;

  return [multiFaceFirst, multiPose, styleBlock, multiFaceCheck].join('\n\n');
};
