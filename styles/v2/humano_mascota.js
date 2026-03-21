// styles/v2/humano_mascota.js — V1.3
// V1.0: estructura base
// V1.1: más escenas, orden dinámico
// V1.2: instrucción de pintura desde cero — no fotomontaje
// V1.3: tamaño real del animal — nunca miniaturizado

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

const PAINTING_FROM_SCRATCH = `CRITICAL — PAINT FROM SCRATCH:
Paint a completely NEW original oil painting from scratch.
Do NOT composite, layer or combine the source photos in any way.
Do NOT preserve any background from any photo — replace completely.
Do NOT photocopy or trace any photo element — paint everything.
The background must be the natural landscape described in the style.
Every element — person, animal, clothing, background — must be painted.
This is one unified oil painting. Nothing photographic survives.

ANIMAL SIZE — CRITICAL:
Paint the animal at its TRUE REAL-WORLD SIZE relative to the person.
Study the animal's breed carefully in the photo before painting.
A large dog (german shepherd, golden retriever, labrador, husky, rottweiler):
  its head reaches a seated child's chest or a standing adult's waist.
  Its body is massive and present — it dominates its portion of the canvas.
A medium dog (beagle, corgi, bulldog, border collie):
  reaches a child's knee or an adult's mid-thigh when sitting.
A small dog (chihuahua, yorkshire, pomeranian) or cat:
  fits naturally on a lap — but still painted with full presence.
NEVER miniaturize the animal to make the composition easier.
NEVER make a large breed look like a puppy or toy.
NEVER shrink the animal to fit — adjust the composition instead.
If the animal is large — let it be large. The composition adapts to reality.`;

const ESCENAS_ADULTO_MASCOTA = [

  `STEP 2 — COMPOSITION:
The person sits in a grand ornate chair — body turned slightly,
posture dignified and natural, face toward the viewer.
For small animals (cats, small dogs, rabbits):
  the pet rests naturally on the person's lap —
  the person's hand rests gently on the pet.
For large animals (large dogs):
  the pet lies beside the chair at full natural size, front paws forward,
  head raised and looking toward the viewer —
  its head reaching the person's arm or shoulder level.
The person is the primary subject — the pet is the noble companion.
Both faces clearly visible and prominent.
The composition feels warm and genuine — a real bond, not a prop.`,

  `STEP 2 — COMPOSITION:
The person sits naturally on a stone ledge or low seat —
body turned slightly, posture dignified and open.
The pet sits or lies beside the person at its true natural size.
For large animals: the pet's body fills the foreground beside the person —
  its head at the person's chest or shoulder level when both are seated.
For small animals: the pet rests on the lap or on a surface beside the person.
The person's hand rests naturally on or near the pet.
Both faces clearly visible — person prominent, pet fully present.
The composition feels like a genuine bond.`,

  `STEP 2 — COMPOSITION:
The person stands in a dignified 3/4 position —
body slightly angled, chest open toward the viewer.
One hand rests naturally at the side.
The other hand drops naturally toward the pet beside them.
The pet sits or rests at the person's side at its true natural size —
upright and alert, face toward the viewer.
For large animals: the pet sits and its head reaches the person's waist or hip.
For small animals: the pet sits on a low surface at a natural height.
Both subjects clearly visible at their correct natural proportions.`,

  `STEP 2 — COMPOSITION:
The pet lies naturally in the foreground at its full real-world size —
front paws extended forward, head raised toward the viewer.
The person sits or stands behind and slightly to one side —
body visible, posture dignified and open.
The person's face is prominent above and behind the pet.
For large animals: the pet's body fills the lower portion of the canvas —
  massive, present and naturally proportioned.
Natural depth — pet in front, person behind.
Both faces clearly visible at their correct natural proportions.`,

];

const ESCENAS_NINO_MASCOTA = [

  `STEP 2 — COMPOSITION:
The child sits naturally on a stone ledge or low cushioned seat.
The pet is beside or in front of the child at its true natural size.
For small animals: the pet rests on the child's lap or nestled beside them.
For large animals: the pet sits beside the child —
  its head reaching the child's shoulder or chest level when both are seated.
  The child's arm rests naturally on the pet's back — not squeezing or lifting.
The child's face turns naturally toward the viewer.
The pet's face is clearly visible — turned toward the viewer.
The child's natural energy and innocence is preserved.
Both subjects at their correct natural proportions — the large dog is large.`,

  `STEP 2 — COMPOSITION:
The child stands naturally beside the pet at its true natural size.
For large animals: the pet sits beside the child —
  its head at the child's chest or shoulder level.
  The child's hand rests naturally on the pet's head or back.
For small animals: the child bends slightly toward the pet —
  a natural childlike curiosity and warmth.
Both faces turn naturally toward the viewer.
The child's scale is natural — the animal's scale is equally natural.
Neither subject is miniaturized to fit.`,

  `STEP 2 — COMPOSITION:
The child sits informally on a low stone step or cushion.
The pet rests beside or slightly in front of the child at full natural size.
For large animals: the pet lies relaxed — its body as large as the child's —
  front paws extended, head turned toward the viewer.
  The child leans naturally against the pet — a genuine bond.
For small animals: the pet rests in the child's arms or lap.
Both faces clearly visible — intimate and warm.
Neither subject is shrunk to make the other look bigger.`,

];

module.exports = function humanomascota(estilo, numSujetos, isGroup, genero, ninos, subjects) {
  const numSubjects = numSujetos || 2;
  const styleKey    = (estilo || 'barroco').toLowerCase().replace(/\s+/g, '_');
  const styleFn     = styleMap[styleKey] || barrocoHumano;
  const styleBlock  = styleFn(numSubjects, isGroup, genero);

  // ── Determina orden real basado en subjects detectados ─────────────────
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
    esNinoFlag = Array.isArray(ninos) && ninos.includes(1);
  }

  // ── Bloque de identidad ────────────────────────────────────────────────
  const sujetoBlock = esNinoFlag
    ? sujetoNino(humanIndex)
    : sujetoHumano(humanIndex);

  const faceFirst = `${PAINTING_FROM_SCRATCH}

STEP 1 — IDENTITY FIRST — MOST CRITICAL:

PERSON — Image ${humanIndex}:
Study Image ${humanIndex} carefully — this is the PERSON.
${sujetoBlock}

ANIMAL COMPANION — Image ${animalIndex}:
Study Image ${animalIndex} carefully — this is the PET.
Extract and transfer exactly:
- Exact breed, fur color, markings and texture — LOCKED
- Exact eye shape, color and gaze direction — LOCKED
- Exact facial features, nose and expression — LOCKED
- Exact real-world size of this breed — preserved at true proportions
- Preserve the animal's natural personality completely
- If tongue is out in photo — tongue is out in painting
The pet wears its own independent royal costume —
a velvet cape with ermine border and gold chain pendant.
The pet is a noble companion — never a prop, never miniaturized.`;

  const poseBlock = esNinoFlag
    ? pick(ESCENAS_NINO_MASCOTA)
    : pick(ESCENAS_ADULTO_MASCOTA);

  const faceCheckCustom = `STEP 3 — IDENTITY AND QUALITY CHECK:
Compare the painted person against Image ${humanIndex} — must be immediately recognizable.
Compare the painted pet against Image ${animalIndex} — must be immediately recognizable.
Verify the animal is painted at its correct real-world size — not miniaturized.
Correct any drift in either subject.
${esNinoFlag ? 'The child must still look like a child — not aged up.' : ''}
Confirm: is this a unified oil painting? No photographic elements should remain.
4:5 portrait. 4K. High thinking mode.`;

  return [faceFirst, poseBlock, styleBlock, faceCheckCustom].join('\n\n');
};
