// mascotas.js — V19.0
// Pose pool updated: paws hang over FRONT EDGE of cushion — not flat on top

const masterPrompt = require('./masterPrompt');
const { pick, weightedPick } = require('./utils/pick');
const renacimientoStyle = require('./styles/renacimiento');
const realezaStyle = require('./styles/realeza');
const barrocoStyle = require('./styles/barroco');

// ─── POSE POOL ────────────────────────────────────────────────────────────────
// 4 safe approved poses. All share the same critical paw rule:
// paws hang over the FRONT EDGE — they do NOT rest flat on top of the cushion.

const POSES = [
  // Pose 1 — lying, head right
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

  // Pose 2 — lying, head left
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

  // Pose 3 — sitting, body right
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

  // Pose 4 — sitting, body left
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

// ─── STYLE MAP ────────────────────────────────────────────────────────────────
const styleMap = {
  renacimiento:            renacimientoStyle,
  barroco:                 barrocoStyle,
  realeza:                 realezaStyle,
  rey:                     realezaStyle,
  // frontend names
  the_elegant_portrait:    renacimientoStyle,
  the_classic_portrait:    barrocoStyle,
  the_royal_portrait:      realezaStyle,
  // legacy names
  museum_elegance:         renacimientoStyle,
  imperial_coronation:     realezaStyle,
  baroque_drama:           barrocoStyle,
  // intelligent fallback
  intelligent:             barrocoStyle,
};

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────
module.exports = function mascotas(estilo, numAnimales, isGroup, genero) {
  const numSubjects = numAnimales || 1;
  const styleKey    = (estilo || 'barroco').toLowerCase().replace(/\s+/g, '_');
  const styleFn     = styleMap[styleKey] || barrocoStyle;
  const styleBlock  = styleFn(numSubjects, isGroup, genero);

  // Pick a random pose from the approved pool
  const poseBlock = pick(POSES);

  const faceFirst = `Image 1: the pet photo — the only input.
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

  const faceCheck = `STEP 3 — FACE CHECK:
Compare the painted face against Image 1.
Head angle, facial features and expression must match exactly.
Tongue out if it was out. Eyes exact. Markings exact.
If anything drifted — correct it before finalizing.
The owner must recognize their pet immediately.

4:5 portrait. 4K. High thinking mode.`;

  return [faceFirst, poseBlock, styleBlock, faceCheck].join('\n\n');
};
