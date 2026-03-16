// poses/single/perros.js
// 3 poses aprobadas para perros — todas probadas y validadas

const { pick } = require('../../../utils/pick');

const POSES = [

  // PD1 — Recostado, cabeza derecha
  `STEP 2 — POSE:
The dog lies naturally on the cushion.
Chest resting on the cushion surface.
Both front legs extended forward, paws hanging naturally
over the FRONT EDGE of the cushion — slightly below
the cushion surface, relaxed and natural.
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
Weight resting on the chest and elbows — settled and heavy.
Both front paws extended forward, resting naturally on the cushion,
hanging slightly over the front edge.
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

];

module.exports = () => pick(POSES);
