// poses/single/perros.js
// 3 poses aprobadas para perros — todas probadas y validadas
const { pick } = require('../../../utils/pick');

const BODY_ANCHOR = `
ANATOMICAL SUBSTRUCTURE: The dog's entire skeletal and muscular frame must be rendered first.
Even if covered by a cape, the volume of the ribcage, the curve of the lower back, 
and the bulk of the hindquarters MUST be clearly discernible.
The animal is NOT a floating head; it has 3D depth and occupies physical space on the cushion.
The hindquarters are firmly planted ON the cushion surface, creating a clear silhouette.
The cushion visibly sags and deforms under the actual weight of the hips and rear legs.
The body mass is ALWAYS visible — clothing must drape OVER the legs and flanks securely, completely covering the back without leaving exposed gaps.`;

const BODY_LANGUAGE = `Relaxed, natural and dignified. Muscles soft — no tension.
The weight feels heavy and settled.`;

const POSES = [
  // PD1 — Recostado, cabeza derecha
  `STEP 2 — POSE:
The dog lies naturally on the cushion.
${BODY_ANCHOR}
${BODY_LANGUAGE}
Chest resting heavily on the cushion surface.
Both front legs extended forward, paws resting naturally on the cushion surface
or draping softly over the front edge.
Head raised, looking slightly to the RIGHT.
Paint the tail only if clearly visible in Image 1.
FRAMING: Wide open composition. Animal 55%, Cushion 45%.`,

  // PD2 — Recostado diagonal, cuerpo opuesto a la cara
  `STEP 2 — POSE:
First study the face direction in Image 1.
The body is placed in the OPPOSITE direction from the face.
The dog lies in a natural diagonal position on the cushion.
Body oriented to one side — the opposite side from the face direction.
${BODY_ANCHOR}
${BODY_LANGUAGE}
Weight resting on the chest and elbows — settled and heavy.
Both front paws rest naturally on the cushion surface or drape softly.
The hindquarters extend naturally to the side behind, fully covered by the drape.
The head rises naturally and turns toward the viewer.
Paint the tail only if clearly visible in Image 1.
FRAMING: Wide open composition. Animal 55%, Cushion 45%.`,

  // PD3 — Sentado erguido
  `STEP 2 — POSE:
The dog sits upright and dignified on the cushion.
Body angled slightly to one side — not perfectly frontal.
${BODY_ANCHOR}
${BODY_LANGUAGE}
The chest is open and visible facing the viewer.
Both front paws rest naturally on the cushion surface, side by side.
The hindquarters are settled beneath the body, creating a stable base.
The full body is visible — chest, front legs, and lower body wrapped securely in the garment.
The head rises naturally.
Paint the tail only if clearly visible in Image 1.
FRAMING: Wide sitting body visible. Animal 60%, Cushion 40%.`
];

module.exports = () => pick(POSES);
