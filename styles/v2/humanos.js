// styles/v2/humanos.js — V1.0
// Assembler para retratos de humanos — adultos, niños, grupos
// Equivalente de mascotas.js para sujetos humanos

const faceCheck      = require('./prompts/core/face_check');
const sujetoHumano   = require('./prompts/sujetos/humanos');
const sujetoNino     = require('./prompts/sujetos/ninos');
const posaHumano     = require('./prompts/poses/single/humanos');
const posaNino       = require('./prompts/poses/single/ninos');
const poseMulti      = require('./prompts/poses/multi/humanos');

const renacimientoStyle = require('./styles/renacimiento');
const realezaStyle      = require('./styles/realeza');
const barrocoStyle      = require('./styles/barroco');

const styleMap = {
  renacimiento:         renacimientoStyle,
  barroco:              barrocoStyle,
  realeza:              realezaStyle,
  rey:                  realezaStyle,
  the_elegant_portrait: renacimientoStyle,
  the_classic_portrait: barrocoStyle,
  the_royal_portrait:   realezaStyle,
  museum_elegance:      renacimientoStyle,
  imperial_coronation:  realezaStyle,
  baroque_drama:        barrocoStyle,
  intelligent:          barrocoStyle,
};

// Detecta si un sujeto es niño basado en la categoría o flag
function isChild(categoria, index, ninos) {
  if (!ninos || !ninos.length) return false;
  return ninos.includes(index);
}

module.exports = function humanos(estilo, numSujetos, isGroup, genero, ninos = []) {
  const numSubjects = Math.max(numSujetos || 1, isGroup ? 2 : 1);
  const styleKey    = (estilo || 'barroco').toLowerCase().replace(/\s+/g, '_');
  const styleFn     = styleMap[styleKey] || barrocoStyle;
  const styleBlock  = styleFn(numSubjects, isGroup, genero);

  // ── UN SOLO SUJETO ────────────────────────────────────────────────────────
  if (numSubjects === 1) {
    const esNino    = ninos.includes(1);
    const sujeto    = esNino ? sujetoNino()    : sujetoHumano();
    const poseBlock = esNino ? posaNino()      : posaHumano();

    const faceFirst = `STEP 1 — IDENTITY FIRST — MOST CRITICAL:
Study Image 1 carefully before painting anything.
${sujeto}`;

    return [faceFirst, poseBlock, styleBlock, faceCheck].join('\n\n');
  }

  // ── MÚLTIPLES SUJETOS ─────────────────────────────────────────────────────
  const identityBlocks = Array.from({ length: numSubjects }, (_, i) => {
    const idx    = i + 1;
    const esNino = isChild(null, idx, ninos);
    return esNino ? sujetoNino(idx) : sujetoHumano(idx);
  }).join('\n\n');

  const multiFaceFirst = `Paint ${numSubjects} people from the photos in one unified oil painting.
Not composited. Not layered. One single painting.

STEP 1 — IDENTITY FIRST — MOST CRITICAL:
Study each photo carefully before painting anything.
Each person must be immediately recognizable from their photo.

${identityBlocks}`;

  const multiPoseBlock = poseMulti(numSubjects);

  const multiFaceCheck = `STEP 3 — IDENTITY CHECK:
Compare each painted face against its source photo.
Every person must be immediately recognizable. Correct any drift.
Children must still look like children — not aged up.
4:5 portrait. 4K. High thinking mode.`;

  return [multiFaceFirst, multiPoseBlock, styleBlock, multiFaceCheck].join('\n\n');
};
