// styles/v2/humanos.js — V1.2
// V1.0: estructura base
// V1.1: estilos humanos separados — sin cojín
// V1.2: PAINTING_FROM_SCRATCH — no fotomontajes, fondo reemplazado

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

const PAINTING_FROM_SCRATCH = `CRITICAL — PAINT FROM SCRATCH:
Paint a completely NEW original oil painting from scratch.
Do NOT composite, layer or combine the source photos in any way.
Do NOT preserve any background from any photo — replace completely.
Do NOT photocopy or trace any photo element — paint everything.
The background must be the natural landscape described in the style.
Every element — people, clothing, background — must be painted.
This is one unified oil painting. Nothing photographic survives.
Modern clothing is replaced by period costume.
Modern backgrounds are replaced by the natural landscape setting.`;

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
    const sujeto     = esNinoSolo ? sujetoNino()  : sujetoHumano();
    const poseBlock  = esNinoSolo ? posaNino()     : posaHumano();

    const faceFirst = `${PAINTING_FROM_SCRATCH}

STEP 1 — IDENTITY FIRST — MOST CRITICAL:
Study Image 1 carefully before painting anything.
${sujeto}`;

    const faceCheckCustom = `STEP 3 — IDENTITY AND QUALITY CHECK:
Compare the painted face against Image 1 — must be immediately recognizable.
Correct any drift.
${esNinoSolo ? 'The child must still look like a child — not aged up.' : ''}
Confirm: is this a unified oil painting? No photographic elements should remain.
Modern clothing and backgrounds must be fully replaced.
4:5 portrait. 4K. High thinking mode.`;

    return [faceFirst, poseBlock, styleBlock, faceCheckCustom].join('\n\n');
  }

  // ── MÚLTIPLES SUJETOS ───────────────────────────────────────────────────
  const identityBlocks = Array.from({ length: numSubjects }, (_, i) => {
    const idx = i + 1;
    return esNino(idx, ninos) ? sujetoNino(idx) : sujetoHumano(idx);
  }).join('\n\n');

  const multiFaceFirst = `${PAINTING_FROM_SCRATCH}

Paint ${numSubjects} people from the photos in one unified oil painting.
Not composited. Not layered. One single painting.

STEP 1 — IDENTITY FIRST — MOST CRITICAL:
Study each photo carefully before painting anything.
Each person must be immediately recognizable from their photo.

${identityBlocks}`;

  const multiPoseBlock = poseMulti(numSubjects);

  const multiFaceCheck = `STEP 3 — IDENTITY AND QUALITY CHECK:
Compare each painted face against its source photo.
Every person must be immediately recognizable. Correct any drift.
Children must still look like children — not aged up.
Confirm: is this a unified oil painting? No photographic elements should remain.
Modern clothing and backgrounds must be fully replaced.
4:5 portrait. 4K. High thinking mode.`;

  return [multiFaceFirst, multiPoseBlock, styleBlock, multiFaceCheck].join('\n\n');
};
