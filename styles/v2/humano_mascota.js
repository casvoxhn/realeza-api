// styles/v2/humano_mascota.js — V1.1
// V1.0: estructura base — 2 escenas hardcodeadas
// V1.1: más escenas, orden dinámico, detección de tamaño de mascota

const faceCheck    = require('./prompts/core/face_check');
const sujetoHumano = require('./prompts/sujetos/humanos');
const sujetoNino   = require('./prompts/sujetos/ninos');
const { pick }     = require('./utils/pick');

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

// ── ESCENAS ────────────────────────────────────────────────────────────────────

const ESCENAS_ADULTO_MASCOTA = [

  // A1 — Adulto sentado, mascota en el regazo o al lado
  `STEP 2 — COMPOSITION:
The person sits in a grand ornate chair — body turned slightly,
posture dignified and natural, face toward the viewer.
For small animals (cats, small dogs, rabbits):
  the pet rests naturally on the person's lap —
  the person's hand rests gently on the pet.
For large animals (large dogs):
  the pet lies beside the chair, front paws forward,
  head raised and looking toward the viewer.
The person is the primary subject — the pet is the noble companion.
Both faces clearly visible and prominent.
The composition feels warm and genuine — a real bond, not a prop.`,

  // A2 — Adulto de pie, mascota sentada a su lado
  `STEP 2 — COMPOSITION:
The person stands in a dignified 3/4 position —
body slightly angled, chest open toward the viewer.
One hand rests naturally at the side.
The other hand drops naturally toward the pet beside them.
The pet sits or rests at the person's side —
upright and alert, face toward the viewer.
For small animals: sit on a low cushioned pedestal at waist height.
For large animals: sit or lie beside the person's feet, head raised.
Both subjects at different heights — natural and balanced.
The person looks toward the viewer with quiet dignity.
The pet's face is clearly visible and prominent.`,

  // A3 — Adulto sentado, mascota en pedestal al mismo nivel
  `STEP 2 — COMPOSITION:
The person sits in a grand chair slightly to one side of the canvas.
The pet sits or rests on an ornate cushioned pedestal
at the same height as the person — side by side.
Both subjects face the viewer — a formal double portrait.
The person's hand rests naturally on the armrest or toward the pet.
The composition is balanced and symmetrical —
two subjects of equal presence and dignity.
Both faces prominent, recognizable and clearly visible.`,

  // A4 — Adulto de pie detrás, mascota recostada al frente
  `STEP 2 — COMPOSITION:
The pet lies naturally in the foreground —
chest on a grand cushion, front paws extended forward,
head raised and looking toward the viewer.
The person stands behind and slightly to one side —
body visible from waist up, posture dignified and open.
One hand rests naturally on the back of the chair or surface beside them.
The person's face is prominent above and behind the pet.
The pet occupies the lower foreground — close to the viewer.
The composition has natural depth — pet in front, person behind.
Both faces clearly visible at different depths and heights.`,

];

const ESCENAS_NINO_MASCOTA = [

  // N1 — Niño sentado, mascota en el regazo
  `STEP 2 — COMPOSITION:
The child sits naturally on a stone ledge or low cushioned seat.
The pet rests on the child's lap or nestled beside them —
wherever feels most natural for the animal's size.
For small animals: curled or sitting on the lap.
For large animals: sitting beside the child, head at the child's shoulder level.
The child's arms wrap naturally around the pet —
a genuine childlike gesture of affection, never forced.
The child's face turns naturally toward the viewer.
The pet's face is clearly visible — turned toward the viewer.
The child's natural energy and innocence is preserved —
this is a real moment, not a formal pose.
Both faces clearly visible and prominent.`,

  // N2 — Niño de pie, mascota sentada a su lado
  `STEP 2 — COMPOSITION:
The child stands naturally beside the pet —
body slightly informal, one hand resting on the pet.
The pet sits upright beside the child —
at a natural height relative to the child's size.
For small animals: the child bends slightly toward the pet —
a natural childlike curiosity and warmth.
For large animals: the pet sits and its head reaches the child's chest —
the child's hand rests naturally on the pet's head or back.
Both faces turn naturally toward the viewer.
The child's scale is natural — visibly smaller than an adult would be.
The composition feels warm and alive — two companions.`,

  // N3 — Niño sentado en el suelo con mascota
  `STEP 2 — COMPOSITION:
The child sits informally on a low stone step or cushion —
a naturally childlike, relaxed position.
The pet rests beside or in front of the child —
both at a low, intimate height.
The child leans naturally toward the pet — engaged and warm.
One hand rests on the pet's back or reaches toward it.
The child's face turns naturally toward the viewer —
a slight natural smile or expression of warmth.
The pet's face is clearly visible — alert and present.
The composition is intimate and close — two small companions
together in their own world, painted with royal dignity.`,

];

// ── ASSEMBLER ──────────────────────────────────────────────────────────────────
module.exports = function humanomascota(estilo, numSujetos, isGroup, genero, ninos, subjects) {
  const numSubjects = numSujetos || 2;
  const styleKey    = (estilo || 'barroco').toLowerCase().replace(/\s+/g, '_');
  const styleFn     = styleMap[styleKey] || barrocoHumano;
  const styleBlock  = styleFn(numSubjects, isGroup, genero);

  // ── Determina orden real basado en subjects detectados ─────────────────
  // subjects = [{ type: 'human_adult' }, { type: 'cat' }] etc.
  let humanIndex  = 1;
  let animalIndex = 2;
  let esNinoFlag  = false;

  if (subjects && subjects.length >= 2) {
    const hi = subjects.findIndex(s =>
      s.type === 'human_adult' || s.type === 'human_child'
    );
    const ai = subjects.findIndex(s =>
      s.type === 'dog' || s.type === 'cat' || s.type === 'other_animal'
    );
    if (hi !== -1) humanIndex  = hi + 1;
    if (ai !== -1) animalIndex = ai + 1;
    if (hi !== -1) esNinoFlag  = subjects[hi].type === 'human_child';
  } else {
    // Fallback — usa ninos array
    esNinoFlag = Array.isArray(ninos) && ninos.includes(1);
  }

  // ── Bloque de identidad ────────────────────────────────────────────────
  const sujetoBlock = esNinoFlag
    ? sujetoNino(humanIndex)
    : sujetoHumano(humanIndex);

  const faceFirst = `STEP 1 — IDENTITY FIRST — MOST CRITICAL:

PERSON — Image ${humanIndex}:
Study Image ${humanIndex} carefully — this is the PERSON.
${sujetoBlock}

ANIMAL COMPANION — Image ${animalIndex}:
Study Image ${animalIndex} carefully — this is the PET.
Extract and transfer exactly:
- Exact fur/feather color, markings and texture — LOCKED
- Exact eye shape, color and gaze direction — LOCKED
- Exact facial features, nose and expression — LOCKED
- Preserve the animal's natural personality completely
The pet wears its own independent royal costume —
a velvet cape with ermine border and gold chain pendant.
The pet is a noble companion — never a prop or accessory.`;

  // ── Escena según tipo de humano ────────────────────────────────────────
  const poseBlock = esNinoFlag
    ? pick(ESCENAS_NINO_MASCOTA)
    : pick(ESCENAS_ADULTO_MASCOTA);

  const faceCheckCustom = `STEP 3 — IDENTITY CHECK:
Compare the painted person against Image ${humanIndex} — must be immediately recognizable.
Compare the painted pet against Image ${animalIndex} — must be immediately recognizable.
Correct any drift in either subject.
${esNinoFlag ? 'The child must still look like a child — not aged up.' : ''}
4:5 portrait. 4K. High thinking mode.`;

  return [faceFirst, poseBlock, styleBlock, faceCheckCustom].join('\n\n');
};
