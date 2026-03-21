// poses/single/gatos.js — V2.5
// Fix: proporciones naturales agregadas a todas las poses
// Fix P3: eliminados bloques de capa/armiño duplicados (ya están en los estilos)
// V2.1: "ledge" removido del framing — ya no existe ledge en los estilos
// V2.2: body anchor fix en P1 y P1B — cuerpo no desaparece bajo capa
// V2.3: body anchor expandido — cuartos traseros sobre cojín, cojín se hunde bajo el peso
// V2.4: body language agregado — relajado, digno, nunca taxidérmico + P4 lateral
// V2.5: anti-compresión — PROPORTIONS al inicio, body anchor corregido para gatos, framing ajustado
const { pick } = require('../../../utils/pick');

// Línea universal de proporciones — aplica a todas las poses
const PROPORTIONS = `Paint the cat with its natural body proportions from Image 1 —
slender, elegant and true to this specific cat's build.
Do NOT exaggerate the body size or roundness.
Do NOT stretch or compress the body to fill the canvas or cushion.`;

// Línea universal de anclaje — aplica a poses recostadas
const BODY_ANCHOR = `Chest visibly pressed against the cushion surface — body weight fully anchored.
The entire body rests fully ON the cushion —
chest, belly AND hindquarters all in contact with the cushion surface.
The hindquarters are NOT hanging off the edge or touching the floor.
The cushion visibly sags and deforms under the cat's full body weight.
The cat's body rests naturally on the cushion — never stretched or compressed to fill it.
The cat looks settled and completely at ease — not propped up.
If the cat wears a cape or garment, it drapes OVER a clearly defined body.
The body mass beneath any clothing is always visible — never hidden or merged with the cushion.`;

// Lenguaje corporal — relajado y digno
const BODY_LANGUAGE = `The animal's body language is relaxed, natural and dignified.
Muscles soft — no tension, no stiffness, no forced symmetry.
The weight feels heavy and settled — gravity pulling the body into the cushion.
The limbs fall naturally — composed but never rigid.
The overall feeling is calm and noble — alive, never posed or taxidermic.`;

const POSES = [
  // P1 — Recostado 3/4 diagonal izquierda
  `STEP 2 — POSE:
${PROPORTIONS}
The cat rests in a natural diagonal position on the cushion.
Body weight on lower chest and elbows.
${BODY_ANCHOR}
${BODY_LANGUAGE}
Body oriented slightly to the LEFT — right flank toward viewer.
Both front paws extend naturally forward, resting on cushion surface.
Hindquarters settle naturally to the left and slightly behind.
The cat looks completely natural and at ease.
Paint the tail only if clearly visible in Image 1 —
same color and fur as the body. If not visible, omit it.
FRAMING:
Wide open composition — full body visible.
The animal occupies the upper 50% of the canvas.
The cushion occupies the lower 50%.
Generous breathing room on all sides.`,

  // P1B — Cuerpo opuesto a la dirección de la cara
  `STEP 2 — POSE:
${PROPORTIONS}
First study the face direction in Image 1.
Identify which direction the face is looking.
Then place the body in the OPPOSITE direction.
The body rests diagonally on the cushion — oriented to the
OPPOSITE side from where the face looks in Image 1.
Body weight on lower chest and elbows.
${BODY_ANCHOR}
${BODY_LANGUAGE}
Hindquarters extend naturally to that opposite side.
Both front paws extend forward resting on the cushion.
The head turns naturally back over the shoulder toward the viewer.
Do NOT change the face to match the body direction.
The face is fixed. The body adapts.
Paint the tail only if clearly visible in Image 1 —
same color and fur as the body. If not visible, omit it.
FRAMING:
Wide open composition — full body visible.
The animal occupies the upper 50% of the canvas.
The cushion occupies the lower 50%.
Generous breathing room on all sides.`,

  // P2 — Sentado erguido 3/4 (sin cambios)
  `STEP 2 — POSE:
${PROPORTIONS}
The cat sits upright and dignified on the cushion.
Body angled slightly — not perfectly frontal.
Chest open and visible facing the viewer.
Both front paws rest side by side on the cushion surface,
pointing forward — neat and composed.
Hindquarters settled beneath the body.
Full body visible — chest, front legs and lower body seen.
The posture is elegant and composed — never stiff.
Paint the tail only if clearly visible in Image 1 —
same color and fur as the body. If not visible, omit it.
FRAMING:
Wide open composition — full sitting body visible.
The animal occupies the upper 60% of the canvas.
The cushion occupies the lower 40%.
Generous breathing room on all sides.`,

  // P3 — Loaf (sin cambios)
  `STEP 2 — POSE:
${PROPORTIONS}
The cat rests in a natural loaf position on the cushion.
Body turned slightly to one side — 3/4 toward the viewer.
Front paws tucked under the chest, just the tips visible.
The body has its natural cat shape — slightly elongated,
chest wider than hindquarters.
The cat looks completely relaxed, settled and at ease.
The head rises naturally, face toward the viewer.
The body may extend slightly beyond the cushion edges —
nothing is compressed or forced to fit.
Paint the tail only if clearly visible in Image 1 —
same color and fur as the body. If not visible, omit it.
FRAMING:
The face occupies the upper portion of the canvas.
The body and cushion fill the lower portion naturally.
The body may extend slightly beyond the frame edges.
Do NOT compress the composition.`,

  // P4 — Recostado lateral, patas completamente sobre el cojín
  `STEP 2 — POSE:
${PROPORTIONS}
The cat lies in a natural lateral position on the cushion.
The body is angled — more to the side than frontal.
The viewer can clearly see the cat's flank and body depth.
${BODY_ANCHOR}
${BODY_LANGUAGE}
Both front paws rest COMPLETELY FLAT on the cushion surface —
not draping over the edge, not hanging down.
The paws are fully supported by the cushion at all times.
The hindquarters rest fully on the cushion — visible and settled.
The head rises naturally and turns toward the viewer —
face direction exactly as locked in Step 1.
The pose feels organic — like the cat naturally settled here.
Paint the tail only if clearly visible in Image 1 —
same color and fur as the body. If not visible, omit it.
FRAMING:
Wide open composition — full body visible.
The animal occupies the upper 50% of the canvas.
The cushion occupies the lower 50%.
Generous breathing room on all sides.`,
];

module.exports = () => pick(POSES);
