// poses/single/perros.js — V2.4
// Fix: proporciones y anclaje de cuerpo
// V2.1: patas corregidas — nunca "slightly below"
// V2.2: body anchor fix — cuerpo completo sobre cojín, cojín se hunde bajo el peso
// V2.3: body language — relajado, digno, nunca taxidérmico
// V2.4: PD4 agregado — lateral, patas completamente sobre el cojín
const { pick } = require('../../../utils/pick');

// Línea universal de anclaje — aplica a poses recostadas
const BODY_ANCHOR = `Chest visibly pressed against the cushion surface — body weight fully anchored.
The entire body rests fully ON the cushion —
chest, belly AND hindquarters all in contact with the cushion surface.
The hindquarters are NOT hanging off the edge or touching the floor.
The cushion visibly sags and deforms under the dog's full body weight.
The dog's body spreads naturally across the full width of the cushion.
The dog looks heavy, settled and completely at ease — not propped up.
If the dog wears a cape or garment, it drapes OVER a clearly defined body.
The body mass beneath any clothing is always visible — never hidden or merged with the cushion.`;

// Lenguaje corporal — relajado y digno
const BODY_LANGUAGE = `The animal's body language is relaxed, natural and dignified.
Muscles soft — no tension, no stiffness, no forced symmetry.
The weight feels heavy and settled — gravity pulling the body into the cushion.
The limbs fall naturally — composed but never rigid.
The overall feeling is calm and noble — alive, never posed or taxidermic.`;

const POSES = [
  // PD1 — Recostado, cabeza derecha
  `STEP 2 — POSE:
The dog lies naturally on the cushion.
${BODY_ANCHOR}
${BODY_LANGUAGE}
Both front legs extended forward, paws resting naturally on the cushion surface
or draping softly over the front edge — wherever feels most natural
for the body weight. Relaxed and organic, never forced.
The dog's weight settles heavily and naturally.
Head raised, looking slightly to the RIGHT.
The body is proportional and natural — never compressed.
Paint the tail only if clearly visible in Image 1 —
same color and fur as the body. If not visible, omit it.
FRAMING:
Wide open composition — full body visible.
The animal occupies the upper 55% of the canvas.
The cushion and ledge occupy the lower 45%.
Generous breathing room on all sides.`,

  // PD2 — Recostado diagonal, cuerpo opuesto a la cara
  `STEP 2 — POSE:
First study the face direction in Image 1.
The body is placed in the OPPOSITE direction from the face.
The dog lies in a natural diagonal position on the cushion.
Body oriented to one side — the opposite side from the face direction.
${BODY_ANCHOR}
${BODY_LANGUAGE}
Both front paws rest naturally on the cushion surface or drape softly
over the front edge — wherever feels most natural for the body weight.
Never forced or stiff.
The hindquarters extend naturally to the side behind.
The head rises naturally and turns toward the viewer —
face direction exactly as locked in Step 1.
The pose feels organic — like the dog settled naturally here.
Paint the tail only if clearly visible in Image 1 —
same color and fur as the body. If not visible, omit it.
FRAMING:
Wide open composition — full body visible.
The animal occupies the upper 55% of the canvas.
The cushion and ledge occupy the lower 45%.
Generous breathing room on all sides.`,

  // PD3 — Sentado erguido
  `STEP 2 — POSE:
The dog sits upright and dignified on the cushion.
Body angled slightly to one side — not perfectly frontal.
The chest is open and visible facing the viewer.
Both front paws rest naturally on the cushion surface,
side by side, pointing forward — composed and natural.
The hindquarters are settled beneath the body.
The full body is visible — chest, front legs and lower body.
The posture is dignified and natural — never stiff or forced.
The head rises naturally — face exactly as locked in Step 1.
Paint the tail only if clearly visible in Image 1 —
same color and fur as the body. If not visible, omit it.
FRAMING:
Wide open composition — full sitting body visible.
The animal occupies the upper 60% of the canvas.
The cushion and ledge occupy the lower 40%.
Generous breathing room on all sides.`,

  // PD4 — Recostado lateral, patas completamente sobre el cojín
  `STEP 2 — POSE:
The dog lies in a natural lateral position on the cushion.
The body is angled — more to the side than frontal.
The viewer can clearly see the dog's flank and body depth.
${BODY_ANCHOR}
${BODY_LANGUAGE}
Both front paws rest COMPLETELY FLAT on the cushion surface —
not draping over the edge, not hanging down.
The paws are fully supported by the cushion at all times.
The hindquarters rest fully on the cushion — visible and settled.
The body spreads wide and occupies the full cushion surface.
The head rises naturally and turns toward the viewer —
face direction exactly as locked in Step 1.
The pose feels organic — like the dog naturally settled here.
Paint the tail only if clearly visible in Image 1 —
same color and fur as the body. If not visible, omit it.
FRAMING:
Wide open composition — full body visible.
The animal occupies the upper 55% of the canvas.
The cushion and ledge occupy the lower 45%.
Generous breathing room on all sides.`,
];

module.exports = () => pick(POSES);
