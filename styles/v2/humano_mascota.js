// styles/v2/humano_mascota.js — V1.0
// Assembler para retratos mixtos — humano(s) + mascota(s)
// El humano tiene presencia principal, la mascota es compañera

const faceCheck    = require('./prompts/core/face_check');
const sujetoHumano = require('./prompts/sujetos/humanos');
const sujetoNino   = require('./prompts/sujetos/ninos');

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

const { pick } = require('./utils/pick');

const ESCENAS_HUMANO_MASCOTA = [

  // Humano sentado, mascota en el regazo o al lado
  `STEP 2 — COMPOSITION:
The person sits in a grand chair or on a stone ledge —
body turned slightly to one side, posture dignified and natural.
The pet rests naturally on the person's lap or beside them
on the same surface — wherever feels most natural
for this specific animal's size and species.
Small animals (cats, small dogs): rest on the lap or arm of the chair.
Large animals (large dogs): rest beside the person, front paws forward.
The person's hand rests naturally near or gently on the pet —
a warm, genuine gesture, never forced or theatrical.
The person is the primary subject — the pet is the companion.
Both faces clearly visible and prominent.
The pet wears its own royal costume — independent from the person's.
The composition feels like a genuine bond — noble and alive.`,

  // Humano de pie, mascota a sus pies o en pedestal
  `STEP 2 — COMPOSITION:
The person stands in a dignified 3/4 position —
body slightly angled, chest open toward the viewer.
One hand rests naturally at the side or on a surface.
The pet sits or rests at the person's feet or on a low cushioned pedestal
beside them — naturally present, not an afterthought.
Small animals: sit upright and alert beside the person's feet.
Large animals: lie relaxed beside the person, head raised.
The person looks toward the viewer with natural dignity.
The pet's face is clearly visible — turned naturally toward the viewer.
The person is the primary subject — the pet is the noble companion.
Both subjects rendered with equal care and detail.`,

];

module.exports = function humanomascota(estilo, numSujetos, isGroup, genero, ninos = []) {
  const numSubjects = numSujetos || 2;
  const styleKey    = (estilo || 'barroco').toLowerCase().replace(/\s+/g, '_');
  const styleFn     = styleMap[styleKey] || barrocoHumano;
  const styleBlock  = styleFn(numSubjects, isGroup, genero);

  // Identifica humanos y mascotas por índice
  // Por convención: los humanos vienen primero, las mascotas después
  // Ej: [humano, gato] → índice 1 = humano, índice 2 = mascota
  const humanCount  = ninos.length > 0
    ? ninos.length + (numSubjects - ninos.length > 0 ? 1 : 0)
    : 1;

  // Bloque de identidad del humano
  const esNinoSolo  = ninos.includes(1);
  const sujetoBlock = esNinoSolo ? sujetoNino(1) : sujetoHumano(1);

  const faceFirst = `STEP 1 — IDENTITY FIRST — MOST CRITICAL:
Study Image 1 carefully — this is the PERSON.
${sujetoBlock}

ANIMAL COMPANION:
Study Image 2 carefully — this is the PET.
Extract and transfer exactly:
- Exact fur color, markings and texture — LOCKED
- Exact eye shape, color and gaze direction
- Exact facial features and expression
- Preserve the animal's natural personality completely
The pet wears its own independent royal costume —
a velvet cape with ermine border and gold chain pendant.
The pet is a noble companion — never a prop.`;

  const poseBlock = pick(ESCENAS_HUMANO_MASCOTA);

  const faceCheckCustom = `STEP 3 — IDENTITY CHECK:
Compare the painted person against Image 1 — must be immediately recognizable.
Compare the painted pet against Image 2 — must be immediately recognizable.
Correct any drift in either subject.
4:5 portrait. 4K. High thinking mode.`;

  return [faceFirst, poseBlock, styleBlock, faceCheckCustom].join('\n\n');
};
