// poses/single/gatos.js — V2.1
// Fix: proporciones naturales agregadas a todas las poses
// Fix P3: eliminados bloques de capa/armiño duplicados (ya están en los estilos)
// V2.1: "ledge" removido del framing — ya no existe ledge en los estilos

const { pick } = require('../../../utils/pick');

// Línea universal de proporciones — aplica a todas las poses
const PROPORTIONS = `Paint the cat with its natural body proportions from Image 1 —
slender, elegant and true to this specific cat's build.
Do NOT exaggerate the body size or roundness.`;

const POSES = [

  // P1 — Recostado 3/4 diagonal izquierda
  `STEP 2 — POSE:
The cat rests in a natural diagonal position on the cushion.
Body weight on lower chest and elbows.
Body oriented slightly to the LEFT — right flank toward viewer.
Both front paws extend naturally forward, resting on cushion surface.
Hindquarters settle naturally to the left and slightly behind.
The cat looks completely natural and at ease.
${PROPORTIONS}
Paint the tail only if clearly visible in Image 1 —
same color and fur as the body. If not visible, omit it.
FRAMING:
Wide open composition — full body visible.
The animal occupies the upper 55% of the canvas.
The cushion occupies the lower 45%.
Generous breathing room on all sides.`,

  // P1B — Cuerpo opuesto a la dirección de la cara
  `STEP 2 — POSE:
First study the face direction in Image 1.
Identify which direction the face is looking.
Then place the body in the OPPOSITE direction.
The body rests diagonally on the cushion — oriented to the
OPPOSITE side from where the face looks in Image 1.
Body weight on lower chest and elbows.
Hindquarters extend naturally to that opposite side.
Both front paws extend forward resting on the cushion.
The head turns naturally back over the shoulder toward the viewer.
Do NOT change the face to match the body direction.
The face is fixed. The body adapts.
${PROPORTIONS}
Paint the tail only if clearly visible in Image 1 —
same color and fur as the body. If not visible, omit it.
FRAMING:
Wide open composition — full body visible.
The animal occupies the upper 55% of the canvas.
The cushion occupies the lower 45%.
Generous breathing room on all sides.`,

  // P2 — Sentado erguido 3/4
  `STEP 2 — POSE:
The cat sits upright and dignified on the cushion.
Body angled slightly — not perfectly frontal.
Chest open and visible facing the viewer.
Both front paws rest side by side on the cushion surface,
pointing forward — neat and composed.
Hindquarters settled beneath the body.
Full body visible — chest, front legs and lower body seen.
The posture is elegant and composed — never stiff.
${PROPORTIONS}
Paint the tail only if clearly visible in Image 1 —
same color and fur as the body. If not visible, omit it.
FRAMING:
Wide open composition — full sitting body visible.
The animal occupies the upper 60% of the canvas.
The cushion occupies the lower 40%.
Generous breathing room on all sides.`,

  // P3 — Loaf
  `STEP 2 — POSE:
The cat rests in a natural loaf position on the cushion.
Body turned slightly to one side — 3/4 toward the viewer.
Front paws tucked under the chest, just the tips visible.
The body has its natural cat shape — slightly elongated,
chest wider than hindquarters.
The cat looks completely relaxed, settled and at ease.
The head rises naturally, face toward the viewer.
The body may extend slightly beyond the cushion edges —
nothing is compressed or forced to fit.
${PROPORTIONS}
Paint the tail only if clearly visible in Image 1 —
same color and fur as the body. If not visible, omit it.
FRAMING:
The face occupies the upper portion of the canvas.
The body and cushion fill the lower portion naturally.
The body may extend slightly beyond the frame edges.
Do NOT compress the composition.`,

];

module.exports = () => pick(POSES);
