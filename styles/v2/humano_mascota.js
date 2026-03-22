// styles/v2/humano_mascota.js — V1.4
// V1.0: estructura base
// V1.1: más escenas, orden dinámico
// V1.2: instrucción de pintura desde cero — no fotomontaje
// V1.3: tamaño real del animal — nunca miniaturizado
// V1.4: soporte para 2+ humanos + mascota, PAINTING_FROM_SCRATCH más agresivo

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

const PAINTING_FROM_SCRATCH = `CRITICAL — PAINT ENTIRELY FROM SCRATCH:
The source photos are REFERENCE ONLY — for faces and the animal's appearance.
Do NOT use any photo as a base layer or starting point.
Do NOT preserve ANY background from any photo.
Do NOT preserve modern clothing, grass, parks, walls or any setting from the photos.
Do NOT edit or filter the photos — start with a completely blank canvas.
IGNORE all backgrounds in the source photos completely.
Paint everything from imagination using the style description below.
The only elements taken from the photos are:
  - The exact faces and identity of each person
  - The exact appearance of the animal
Everything else — background, clothing, setting, props — is painted from scratch.
This is a NEW oil painting. Nothing photographic survives in the final result.

ANIMAL SIZE — CRITICAL:
Paint the animal at its TRUE REAL-WORLD SIZE relative to the people.
Study the animal's breed carefully in the photo before painting.
A large dog (german shepherd, golden retriever, bernese mountain dog,
labrador, husky, rottweiler) is a large animal —
its head reaches a seated person's chest or a standing adult's waist.
A medium dog (beagle, corgi, bulldog): reaches mid-thigh when sitting.
A small dog or cat: fits naturally on a lap.
NEVER miniaturize the animal. NEVER make it look like a toy or puppy
unless it clearly IS a puppy or small breed in the photo.
If the animal is large — let it be large. The composition adapts to reality.`;

// ── ESCENAS 1 HUMANO + MASCOTA ────────────────────────────────────────────────
const ESCENAS_ADULTO_MASCOTA = [

  `STEP 2 — COMPOSITION:
The person sits in a grand ornate chair — body turned slightly,
posture dignified and natural, face toward the viewer.
For small animals: the pet rests on the person's lap —
  the person's hand rests gently on the pet.
For large animals: the pet lies beside the chair at full natural size,
  front paws forward, head raised toward the viewer —
  its head reaching the person's arm or shoulder level.
Both faces clearly visible and prominent.
The composition feels warm and genuine — a real bond.`,

  `STEP 2 — COMPOSITION:
The person sits naturally on a stone ledge —
body turned slightly, posture dignified and open.
The pet sits or lies beside the person at its true natural size.
For large animals: the pet's head reaches the person's chest or shoulder.
For small animals: the pet rests on the lap or beside the person.
The person's hand rests naturally on or near the pet.
Both faces clearly visible — person prominent, pet fully present.`,

  `STEP 2 — COMPOSITION:
The person stands in a dignified 3/4 position —
body slightly angled, chest open toward the viewer.
The pet sits or rests at the person's side at its true natural size.
For large animals: the pet sits and its head reaches the person's waist or hip.
For small animals: the pet sits on a low surface at a natural height.
One hand drops naturally toward the pet — warm and genuine.
Both subjects clearly visible at their correct natural proportions.`,

  `STEP 2 — COMPOSITION:
The pet lies naturally in the foreground at its full real-world size —
front paws extended forward, head raised toward the viewer.
The person sits or stands behind and slightly to one side —
body visible, posture dignified and open.
The person's face is prominent above and behind the pet.
Natural depth — pet in front, person behind.
Both faces clearly visible at their correct natural proportions.`,

];

const ESCENAS_NINO_MASCOTA = [

  `STEP 2 — COMPOSITION:
The child sits naturally on a stone ledge or low cushioned seat.
The pet is beside or in front of the child at its true natural size.
For small animals: the pet rests on the child's lap or nestled beside them.
For large animals: the pet sits beside the child —
  its head reaching the child's shoulder or chest level.
  The child's arm rests naturally on the pet's back.
The child's face turns naturally toward the viewer.
The pet's face is clearly visible — turned toward the viewer.
Both subjects at their correct natural proportions.`,

  `STEP 2 — COMPOSITION:
The child stands naturally beside the pet at its true natural size.
For large animals: the pet sits — its head at the child's chest level.
  The child's hand rests naturally on the pet's head or back.
For small animals: the child bends slightly toward the pet — natural curiosity.
Both faces turn naturally toward the viewer.
Neither subject is miniaturized to fit.`,

  `STEP 2 — COMPOSITION:
The child sits informally on a low stone step or cushion.
The pet rests beside or slightly in front of the child at full natural size.
For large animals: the pet lies relaxed — its body as large as the child —
  front paws extended, head turned toward the viewer.
  The child leans naturally against the pet — a genuine bond.
For small animals: the pet rests in the child's arms or lap.
Both faces clearly visible — intimate and warm.`,

];

// ── ESCENAS 2 HUMANOS + MASCOTA ───────────────────────────────────────────────
const ESCENAS_DOS_HUMANOS_MASCOTA = [

  `STEP 2 — COMPOSITION:
Person 1 sits on a stone ledge or low seat — body turned slightly,
posture dignified, face toward the viewer.
Person 2 sits or stands beside Person 1 — body angled inward, warm and close.
The pet sits or lies in front of both people at its true natural size —
For large animals: the pet's body fills the foreground, front paws extended,
  head raised and looking toward the viewer.
For small animals: the pet rests between them or on Person 1's lap.
Both people's hands rest naturally near or on the pet.
All three faces clearly visible — people prominent, pet fully present.
The composition feels like a genuine family — two people and their companion.`,

  `STEP 2 — COMPOSITION:
Both people sit side by side on a stone ledge or low seat.
Person 1 on the left, body angled slightly RIGHT.
Person 2 on the right, body angled slightly LEFT.
Their bodies angle naturally toward each other — warm and connected.
The pet sits or lies in front of them at its true natural size —
  head raised and looking toward the viewer.
For large animals: the pet's body is massive and present in the foreground.
Both people's hands reach naturally toward the pet.
All three faces clearly visible at natural proportions.`,

  `STEP 2 — COMPOSITION:
Person 1 sits in a grand chair — body turned slightly, face toward the viewer.
Person 2 stands beside and slightly behind Person 1 —
  one hand resting naturally on Person 1's shoulder or chairback.
The pet sits or lies at Person 1's feet or beside the chair —
  at its true natural size, head raised toward the viewer.
All three faces clearly visible at different heights.
The composition has natural hierarchy — standing, seated, and animal.`,

];

// ── ASSEMBLER ──────────────────────────────────────────────────────────────────
module.exports = function humanomascota(estilo, numSujetos, isGroup, genero, ninos, subjects) {
  const numSubjects = numSujetos || 2;
  const styleKey    = (estilo || 'barroco').toLowerCase().replace(/\s+/g, '_');
  const styleFn     = styleMap[styleKey] || barrocoHumano;
  const styleBlock  = styleFn(numSubjects, isGroup, genero);

  // ── Detecta humanos y animales por índice ──────────────────────────────
  let humanIndices  = [];
  let animalIndices = [];
  let ninoFlags    = {};

  if (subjects && subjects.length > 0) {
    subjects.forEach((s, i) => {
      const idx = i + 1;
      if (s.type === 'human_adult' || s.type === 'human_child') {
        humanIndices.push(idx);
        if (s.type === 'human_child') ninoFlags[idx] = true;
      } else if (['dog', 'cat', 'other_animal'].includes(s.type)) {
        animalIndices.push(idx);
      }
    });
  } else {
    humanIndices  = [1];
    animalIndices = [2];
  }

  const humanCount  = humanIndices.length;
  const animalIndex = animalIndices[0] || 2;
  const esNinoFlag  = humanIndices.length === 1 && ninoFlags[humanIndices[0]];

  // ── Bloques de identidad ───────────────────────────────────────────────
  const humanBlocks = humanIndices.map((idx, i) => {
    const esNino = ninoFlags[idx];
    const bloque = esNino ? sujetoNino(idx) : sujetoHumano(idx);
    return `PERSON ${i + 1} — Image ${idx}:\nStudy Image ${idx} carefully — this is a PERSON.\n${bloque}`;
  }).join('\n\n');

  const faceFirst = `${PAINTING_FROM_SCRATCH}

STEP 1 — IDENTITY FIRST — MOST CRITICAL:

${humanBlocks}

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

  // ── Elige escena según número de humanos ──────────────────────────────
  let poseBlock;
  if (humanCount >= 2) {
    poseBlock = pick(ESCENAS_DOS_HUMANOS_MASCOTA);
  } else if (esNinoFlag) {
    poseBlock = pick(ESCENAS_NINO_MASCOTA);
  } else {
    poseBlock = pick(ESCENAS_ADULTO_MASCOTA);
  }

  // ── Vestuario ──────────────────────────────────────────────────────────
  const PALETTES = [
    { m: "deep forest green velvet frock coat with gold embroidery, white lace shirt",
      f: "deep crimson velvet gown with white lace collar" },
    { m: "deep burgundy velvet jacket with gold embroidery, white ruffled shirt",
      f: "warm amber silk gown with lace collar and embroidered bodice" },
    { m: "charcoal grey frock coat with subtle embroidery, white jabot",
      f: "forest green velvet gown with gold trim and white lace collar" },
  ];
  const palette  = PALETTES[Math.floor(Math.random() * PALETTES.length)];
  const costumes = humanIndices.map((idx, i) => {
    const isChild = ninoFlags[idx];
    if (isChild) return `Person ${i + 1}: navy blue velvet suit or crimson dress with white lace collar — scaled to child's natural size`;
    return i === 0
      ? `Person ${i + 1}: ${palette.m}`
      : `Person ${i + 1}: ${palette.f}`;
  }).join('\n');

  const costumeBlock = `COSTUMES:
${costumes}
White lace collars and cuffs — individual thread detail visible.
Gold jewelry — aged warm ochre, never bright yellow.`;

  const faceCheckCustom = `STEP 3 — IDENTITY AND QUALITY CHECK:
${humanIndices.map((idx, i) => `Compare Person ${i + 1} against Image ${idx} — must be immediately recognizable.`).join('\n')}
Compare the pet against Image ${animalIndex} — must be immediately recognizable.
Verify the animal is at its correct real-world size — not miniaturized.
${Object.keys(ninoFlags).length > 0 ? 'Children must still look like children — not aged up.' : ''}
Confirm: is this a unified oil painting?
No photographic backgrounds, no modern clothing, no photo elements remain.
4:5 portrait. 4K. High thinking mode.`;

  return [faceFirst, poseBlock, costumeBlock, styleBlock, faceCheckCustom].join('\n\n');
};
