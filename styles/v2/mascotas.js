// mascotas.js — V21.0
// Conectado a la nueva estructura modular de prompts/
// Poses separadas por especie + core reutilizable

const { pick } = require('./utils/pick');
const faceFirst  = require('./prompts/core/face_first');
const faceCheck  = require('./prompts/core/face_check');
const posasGatos = require('./prompts/poses/single/gatos');
const posasPerros = require('./prompts/poses/single/perros');
const posasOtros = require('./prompts/poses/single/otros');
const poseMulti  = require('./prompts/poses/multi/mascotas');

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

// ─── DETECCIÓN DE ESPECIE POR PROMPT ─────────────────────────────────────────
// Gemini lee la foto y elige el pool correcto
const SPECIES_DETECTION = `Before choosing the pose, identify the species in Image 1:
- If it is a CAT → use a cat pose
- If it is a DOG → use a dog pose  
- If it is another animal → use a natural pose appropriate for this species`;

// ─── ERMINE BOUNDARY — aplica a todas las poses ───────────────────────────────
const ERMINE_BLOCK = `ERMINE MANTLE:
Sits on the shoulders only — does NOT compress the body.
Drapes naturally with weight and softness.
The animal's chest and front are fully visible below.
White fur with small evenly-distributed black spots.
Pink and gold lace trim along the visible border.
The ermine is a SEPARATE garment — distinct from the animal's own coat.

CAPE:
Large dramatic velvet cape — falls ONLY behind and to one side.
Creates rich backdrop of deep color.
NOT in front. NOT on the sides. ONLY behind.
Deep dramatic fold shadows.

Double gold chain on chest against animal's own fur.`;

// ─── EXPORT PRINCIPAL ─────────────────────────────────────────────────────────
module.exports = function mascotas(estilo, numAnimales, isGroup, genero) {
  const numSubjects = Math.max(numAnimales || 1, isGroup ? 2 : 1);
  const styleKey    = (estilo || 'barroco').toLowerCase().replace(/\s+/g, '_');
  const styleFn     = styleMap[styleKey] || barrocoStyle;
  const styleBlock  = styleFn(numSubjects, isGroup, genero);

  // ── UN SOLO ANIMAL ────────────────────────────────────────────────────
  if (numSubjects === 1) {

    // El prompt detecta la especie y elige la pose apropiada
    const poseBlock = `${SPECIES_DETECTION}

IF CAT:
${posasGatos()}

IF DOG:
${posasPerros()}

IF OTHER ANIMAL:
${posasOtros()}`;

    return [faceFirst, poseBlock, ERMINE_BLOCK, styleBlock, faceCheck].join('\n\n');
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

  return [multiFaceFirst, multiPoseBlock, ERMINE_BLOCK, styleBlock, multiFaceCheck].join('\n\n');
};
