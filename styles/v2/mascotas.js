// mascotas.js — V21.1
// Fix: eliminado ERMINE_BLOCK duplicado (ya está en los estilos)
// Fix: patas PD3 sentado menos rígidas

const { pick } = require('./utils/pick');
const faceFirst   = require('./prompts/core/face_first');
const faceCheck   = require('./prompts/core/face_check');
const posasGatos  = require('./prompts/poses/single/gatos');
const posasPerros = require('./prompts/poses/single/perros');
const posasOtros  = require('./prompts/poses/single/otros');
const poseMulti   = require('./prompts/poses/multi/mascotas');

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

module.exports = function mascotas(estilo, numAnimales, isGroup, genero) {
  const numSubjects = Math.max(numAnimales || 1, isGroup ? 2 : 1);
  const styleKey    = (estilo || 'barroco').toLowerCase().replace(/\s+/g, '_');
  const styleFn     = styleMap[styleKey] || barrocoStyle;
  const styleBlock  = styleFn(numSubjects, isGroup, genero);

  // ── UN SOLO ANIMAL ────────────────────────────────────────────────────
  if (numSubjects === 1) {
    const poseBlock = `Before choosing the pose, identify the species in Image 1:
- If it is a CAT → use a cat pose
- If it is a DOG → use a dog pose
- If it is another animal → use a natural pose for this species

IF CAT:
${posasGatos()}

IF DOG:
${posasPerros()}

IF OTHER ANIMAL:
${posasOtros()}`;

    // Orden limpio: face_first → pose → style → face_check
    return [faceFirst, poseBlock, styleBlock, faceCheck].join('\n\n');
  }

  // ── MÚLTIPLES ANIMALES ────────────────────────────────────────────────
  const multiPoseBlock = poseMulti(numSubjects);

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

  return [multiFaceFirst, multiPoseBlock, styleBlock, multiFaceCheck].join('\n\n');
};
