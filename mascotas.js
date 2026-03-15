// mascotas.js — V20.3
// Cara SIEMPRE primero — el cuerpo se construye alrededor de la cara
// 7 variantes de pose que parten de la cara, no al revés

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

const POSE_RULE = `CRITICAL RULE: The face from Image 1 is LOCKED and placed first.
The body is built AROUND the face — never the opposite.
The body pose adapts naturally to support this head position.
The face and head angle remain exactly as in Image 1 — unchanged.`;

const POSES = [

  // 1 — Recostado, cuerpo derecha
  `STEP 2 — POSE:
${POSE_RULE}
The animal lies naturally on the cushion, body oriented to the RIGHT.
Chest resting on cushion. Front paws extended forward over the front edge.
FRAMING: Wide — full body visible. Animal 55% top, cushion 45% bottom.`,

  // 2 — Recostado, cuerpo izquierda
  `STEP 2 — POSE:
${POSE_RULE}
The animal lies naturally on the cushion, body oriented to the LEFT.
Chest resting on cushion. Front paws extended forward over the front edge.
FRAMING: Wide — full body visible. Animal 55% top, cushion 45% bottom.`,

  // 3 — Loaf, patas metidas, encuadre cerrado
  `STEP 2 — POSE:
${POSE_RULE}
The animal rests in a compact elegant position — front paws tucked
under the chest (loaf position). Body compact and serene on the cushion.
FRAMING: Closer — face fills more canvas. Animal 60% top, cushion 40% bottom.`,

  // 4 — Recostado, encuadre muy abierto
  `STEP 2 — POSE:
${POSE_RULE}
The animal lies naturally on the cushion, chest down, paws over the front edge.
FRAMING: Very wide — cushion dominates. Animal 45% top, cushion 55% bottom.
More breathing room. The cushion, ledge and tassel are prominent.`,

  // 5 — Cuerpo de perfil, cara al espectador
  `STEP 2 — POSE:
${POSE_RULE}
The animal's body is turned to the side in 3/4 profile on the cushion.
The head turns naturally to look directly at the viewer.
Front paws visible on the cushion edge.
FRAMING: Wide — full body and turned pose visible. Animal 55%, cushion 45%.`,

  // 6 — Encuadre heroico, cara grande
  `STEP 2 — POSE:
${POSE_RULE}
Close heroic portrait — the face dominates the composition.
The face fills approximately 60% of the canvas height.
Only upper chest and front of body visible below.
The ermine mantle frames the face from below — prominent and luxurious.
FRAMING: Tight — face and chest 65% top. Top of cushion barely visible at bottom.`,

  // 7 — Sentado, cuerpo completo visible
  `STEP 2 — POSE:
${POSE_RULE}
The animal sits upright and dignified on the cushion.
Full body clearly visible — chest, front legs, and hindquarters
all within the composition, never cropped or cut off.
Front paws resting naturally on the cushion edge.
The body is scaled to fit completely within the canvas.
FRAMING: Wide — full sitting body visible. Animal 60% top, cushion 40% bottom.`,

];

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

const scenes_2 = [
  "Both animals rest on the cushion — bodies low and natural, front paws over the front edge. The larger one slightly behind, the smaller one in front. Both faces clearly visible.",
  "Both animals rest together on the cushion — bodies relaxed, angled slightly toward each other. Front paws over the front edge. Both faces clearly visible.",
];

const scenes_3 = [
  "Two animals rest in front on the cushion, paws over the front edge. The third sits upright behind them, centered. All faces clearly visible.",
  "Three animals rest on the grand cushion — the largest in the center, body low. The other two recline on each side. All faces raised and clearly visible.",
];

const scenes_4 = [
  "Two animals rest in front, paws over the front edge. Two sit behind — upright and relaxed. All four on the cushion. All four faces clearly visible.",
  "Four animals rest on the grand cushion — two in front, two behind. All bodies natural. All four faces clearly visible.",
];

const complementaryPalettes = [
  ["deep crimson", "dark teal"],
  ["forest green", "deep burgundy"],
  ["royal blue", "warm crimson"],
  ["deep purple", "forest green"],
  ["dark burgundy", "midnight blue"],
];

const gems = ["ruby", "emerald", "sapphire", "topaz", "amethyst"];

module.exports = function mascotas(estilo, numAnimales, isGroup, genero) {
  const numSubjects = Math.max(numAnimales || 1, isGroup ? 2 : 1);
  const styleKey    = (estilo || 'barroco').toLowerCase().replace(/\s+/g, '_');
  const styleFn     = styleMap[styleKey] || barrocoStyle;
  const styleBlock  = styleFn(numSubjects, isGroup, genero);

  if (numSubjects === 1) {
    const poseBlock = pick(POSES);
    return [FACE_FIRST, poseBlock, styleBlock, FACE_CHECK].join('\n\n');
  }

  const scenePool    = numSubjects === 2 ? scenes_2 : numSubjects === 3 ? scenes_3 : scenes_4;
  const scene        = pick(scenePool);
  const palette      = pick(complementaryPalettes);
  const shuffledGems = [...gems].sort(() => Math.random() - 0.5);

  const multiPose = `STEP 2 — COMPOSITION (${numSubjects} animals):
CRITICAL RULE: Each animal's face from the photos is LOCKED.
Bodies are built AROUND each face — never the opposite.

${scene}
Each animal wears its own independent royal costume.
Animal 1: ${palette[0]} velvet cape with white ermine border. Gold brooch with ${shuffledGems[0]}.
Animal 2: ${palette[1]} velvet cape with white ermine border. Gold brooch with ${shuffledGems[1]}.
${numSubjects >= 3 ? `Animal 3: deep gold velvet cape with ermine. Gold brooch with ${shuffledGems[2]}.` : ''}
${numSubjects >= 4 ? `Animal 4: midnight blue velvet cape with ermine. Gold brooch with ${shuffledGems[3]}.` : ''}
FRAMING: Wide composition — all animals and full cushion visible.`;

  const multiFaceFirst = `Paint ${numSubjects} animals from the photos in one unified oil painting from scratch.
Not composited. Not layered. One single painting.

STEP 1 — FACE FIRST:
For each animal extract and transfer exactly:
- Exact facial features, markings, fur color and expression — LOCKED
- Exact eye shape, color and gaze direction
- Exact nose pattern and coloring
- Exact skin/fur tone and texture
- If tongue is out in photo — tongue is out in painting
Each face is LOCKED. Bodies are built around each face.
Remove any collar or leash.`;

  const multiFaceCheck = `STEP 3 — FACE CHECK:
Compare each painted face against its source photo.
Every animal must be recognizable. Correct any drift.

4:5 portrait. 4K. High thinking mode.`;

  return [multiFaceFirst, multiPose, styleBlock, multiFaceCheck].join('\n\n');
};
