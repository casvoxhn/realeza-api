// poses/single/gatos.js — V2.6
// V2.5: anti-compresión — PROPORTIONS al inicio, framing ajustado
// V2.6: anatomical substructure — cuerpo visible bajo capa, volumen de cadera

const { pick } = require('../../../utils/pick');

const PROPORTIONS = `Paint the cat with its natural body proportions from Image 1 —
slender, elegant and true to this specific cat's build.
Do NOT exaggerate the body size or roundness.
Do NOT stretch or compress the body to fill the canvas or cushion.`;

const BODY_ANCHOR = `ANATOMICAL SUBSTRUCTURE — CRITICAL:
The cat's entire skeletal and muscular frame must be established first.
Even when covered by a cape or garment, the volume of the ribcage,
the curve of the lower back, and the bulk of the hindquarters
MUST be clearly discernible beneath the fabric.
The animal is NOT a floating head on a pile of fabric.
The body has 3D depth and occupies real physical space on the cushion.
The hindquarters are firmly planted ON the cushion surface —
creating a clear silhouette of hips and rear legs.
The cushion visibly sags and deforms specifically under the weight
of the hips and rear legs — this confirms they are there.
The body mass is ALWAYS visible —
clothing must drape OVER the body, never replace it.
If the cat wears a cape or garment, it drapes OVER a clearly defined body.
The protrusion of the hindquarters and the curve of the spine
MUST be visible beneath the fabric — the fabric reveals mass and volume.
Realistic folds form where the fabric passes over the hips and spine —
these folds confirm the body is beneath them.
Chest visibly pressed against the cushion surface — body weight fully anchored.
The entire body rests fully ON the cushion —
chest, belly AND hindquarters all in contact with the cushion surface.
The hindquarters are NOT hanging off the edge or touching the floor.
The cat's body rests naturally on the cushion — never stretched or compressed to fill it.
The cat looks settled and completely at ease — not propped up.`;

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

  // P2 — Sentado erguido 3/4
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

  // P3 — Loaf
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
