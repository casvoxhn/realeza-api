// poses/single/perros.js
// Poses para perros — PENDIENTE DE PRUEBA Y APROBACIÓN
// Placeholder con poses base hasta completar pruebas

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

  // PD2 — Recostado, cabeza izquierda
  `STEP 2 — POSE:
The dog lies naturally on the cushion.
Chest resting on the cushion surface.
Both front legs extended forward, paws hanging naturally
over the FRONT EDGE of the cushion — slightly below
the cushion surface, relaxed and natural.
The dog's weight settles heavily and naturally.
Head raised, looking slightly to the LEFT.
The body is proportional and natural — never compressed.

Paint the tail only if clearly visible in Image 1 —
same color and fur as the body. If not visible, omit it.

FRAMING:
Wide open composition — full body visible.
The animal occupies the upper 55% of the canvas.
The cushion and ledge occupy the lower 45%.
Generous breathing room on all sides.`,

  // PD3 — Recostado 3/4 diagonal
  `STEP 2 — POSE:
The dog lies in a natural 3/4 diagonal position on the cushion.
Body oriented slightly to one side — not perfectly frontal.
Chest resting on cushion, front paws extended forward
hanging over the front edge naturally.
The hindquarters extend naturally to one side.
Head raised naturally, face toward the viewer.
The body is proportional — never compressed or forced.

Paint the tail only if clearly visible in Image 1 —
same color and fur as the body. If not visible, omit it.

FRAMING:
Wide open composition — full body visible.
The animal occupies the upper 55% of the canvas.
The cushion and ledge occupy the lower 45%.
Generous breathing room on all sides.`,

];

module.exports = () => pick(POSES);
