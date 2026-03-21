// styles/v2/humanos.js — V1.1
// Assembler para retratos de humanos — adultos, niños, grupos
// V1.0: estructura base
// V1.1: usa estilos humanos separados — sin cojín, setting correcto

const faceCheck    = require('./prompts/core/face_check');
const sujetoHumano = require('./prompts/sujetos/humanos');
const sujetoNino   = require('./prompts/sujetos/ninos');
const posaHumano   = require('./prompts/poses/single/humanos');
const posaNino     = require('./prompts/poses/single/ninos');
const poseMulti    = require('./prompts/poses/multi/humanos');

const renacimientoHumano = require('./styles/renacimiento_humano');
const barrocoHumano      = require('./styles/barroco_humano');
const realezaHumano      = require('./styles/realeza_humano');

const styleMap = {
  renacimiento:         renacimientoHumano,
  barroco:              barrocoHumano,
  realeza:              realezaHumano,
  rey:                  realezaHumano,
  the_elegant_portrait: renacimientoHumano,
  the_classic_portrait: barrocoHumano,
  the_royal_portrait:   realezaHumano,
  museum_elegance:      renacimientoHumano,
  imperial_coronation:  realezaHumano,
  baroque_drama:        barrocoHumano,
  intelligent:          barrocoHumano,
};

// Detecta si un índice corresponde a un niño
function esNino(index, ninos) {
  return Array.isArray(ninos) && ninos.includes(index);
}

module.exports = function humanos(estilo, numSujetos, isGroup, genero, ninos = []) {
  const numSubjects = Math.max(numSujetos || 1, isGroup ? 2 : 1);
  const styleKey    = (estilo || 'barroco').toLowerCase().replace(/\s+/g, '_');
  const styleFn     = styleMap[styleKey] || barrocoHumano;
  const styleBlock  = styleFn(numSubjects, isGroup, genero);

  // ── UN SOLO SUJETO ──────────────────────────────────────────────────────
  if (numSubjects === 1) {
    const esNinoSolo = esNino(1, ninos);
    const sujeto     = esNinoSolo ? sujetoNino()   : sujetoHumano();
    const poseBlock  = esNinoSolo ? posaNino()      : posaHumano();

    const faceFirst = `STEP 1 — IDENTITY FIRST — MOST CRITICAL:
Study Image 1 carefully before painting anything.
${sujeto}`;

    return [faceFirst, poseBlock, styleBlock, faceCheck].join('\n\n');
  }

  // ── MÚLTIPLES SUJETOS ───────────────────────────────────────────────────
  const identityBlocks = Array.from({ length: numSubjects }, (_, i) => {
    const idx = i + 1;
    return esNino(idx, ninos) ? sujetoNino(idx) : sujetoHumano(idx);
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
