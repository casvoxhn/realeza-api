// poses/single/otros.js — V2.2
// V2.1: "ledge" removido del framing
// V2.2: BODY_ANCHOR + BODY_LANGUAGE agregados a O1, O2, O3
//       O4 caballo reescrito — recostado sobre cojín (no parado)

const { pick } = require('../../../utils/pick');

// Línea universal de anclaje — aplica a poses recostadas
const BODY_ANCHOR = `Chest visibly pressed against the cushion surface — body weight fully anchored.
The entire body rests fully ON the cushion —
chest, belly AND hindquarters all in contact with the cushion surface.
The hindquarters are NOT hanging off the edge or touching the floor.
The cushion visibly sags and deforms under the animal's full body weight.
The animal's body rests naturally on the cushion — never stretched or compressed to fill it.
The animal looks settled and completely at ease — not propped up.
If the animal wears a cape or garment, it drapes OVER a clearly defined body.
The body mass beneath any clothing is always visible — never hidden or merged with the cushion.`;

// Lenguaje corporal — relajado y digno
const BODY_LANGUAGE = `The animal's body language is relaxed, natural and dignified.
Muscles soft — no tension, no stiffness, no forced symmetry.
The weight feels heavy and settled — gravity pulling the body into the cushion.
The limbs fall naturally — composed but never rigid.
The overall feeling is calm and noble — alive, never posed or taxidermic.`;

const POSES = [

  // O1 — Recostado natural (conejos, reptiles, roedores pequeños)
  `STEP 2 — POSE:
Study the animal in Image 1 and identify its species.
This pose works for animals that naturally rest lying down
(rabbits, reptiles, guinea pigs, hamsters, ferrets, etc.)

The animal rests naturally on the cushion.
${BODY_ANCHOR}
${BODY_LANGUAGE}
Front limbs extended forward or tucked naturally.
The pose respects this species' natural anatomy completely.
The head rises naturally — face exactly as locked in Step 1.

If the full body is visible in Image 1 — show full body.
If only face/chest visible — generate body coherently
using the visible fur/scale color as reference.

Paint the tail only if clearly visible in Image 1 —
same color as the body. If not visible, omit it.

FRAMING:
Wide open composition — full body visible.
The animal occupies the upper 55% of the canvas.
The cushion occupies the lower 45%.
Generous breathing room on all sides.`,

  // O2 — Sentado erguido (conejos, roedores medianos)
  `STEP 2 — POSE:
Study the animal in Image 1 and identify its species.
This pose works for animals that naturally sit upright
(rabbits, guinea pigs, chinchillas, etc.)

The animal sits upright and dignified on the cushion.
${BODY_ANCHOR}
${BODY_LANGUAGE}
Body facing slightly to one side — not perfectly frontal.
Front limbs rest naturally at the front of the body.
The full body is visible — head, torso and lower body.
The posture looks natural for this specific species —
never forced into a pose unnatural for this animal.
The head rises naturally — face exactly as locked in Step 1.

Paint the tail only if clearly visible in Image 1 —
same color as the body. If not visible, omit it.

FRAMING:
Wide open composition — full body visible.
The animal occupies the upper 60% of the canvas.
The cushion occupies the lower 40%.
Generous breathing room on all sides.`,

  // O3 — Perchado/parado (aves: loros, cacatúas, etc.)
  `STEP 2 — POSE:
Study the animal in Image 1 and identify its species.
This pose works for birds (parrots, cockatoos, canaries, etc.)

The bird stands upright and dignified on the cushion surface.
Body facing slightly to one side — natural bird posture.
Wings folded naturally against the body.
Feet grip the cushion surface naturally.
Tail feathers visible and natural.
The head is upright — face exactly as locked in Step 1.
The posture is proud and alert — natural for this bird species.
${BODY_LANGUAGE}

FRAMING:
The bird occupies the upper 60% of the canvas.
The cushion prominent below — full cushion visible with tassel.
Generous breathing room on all sides.`,

  // O4 — Caballo recostado sobre el cojín
  `STEP 2 — POSE:
Study the animal in Image 1 and identify its species.
This pose works for horses and large animals.

The horse lies naturally reclined on the cushion.
Chest resting on the cushion surface.
${BODY_ANCHOR}
${BODY_LANGUAGE}
Both front legs extended forward, hooves resting naturally
on the cushion surface or just at the front edge.
The hindquarters settle naturally to one side behind.
The body is proportional and natural — never compressed.
The head rises naturally and turns toward the viewer —
face direction exactly as locked in Step 1.
The pose feels organic — powerful but completely at ease.

If the horse wears a cape or mantle, it drapes naturally
over the back and to one side — the full body mass is
always visible beneath it.

Paint the tail only if clearly visible in Image 1 —
same color and fur as the body. If not visible, omit it.

FRAMING:
Wide open composition — full body visible.
The animal occupies the upper 60% of the canvas.
The cushion occupies the lower 40%.
Generous breathing room on all sides.`,

];

module.exports = () => {
  return `Study the animal species in Image 1 carefully.
Choose the most natural and dignified pose for this specific species:

FOR BIRDS (parrots, cockatoos, canaries, etc.):
${POSES[2]}

FOR HORSES or very large animals:
${POSES[3]}

FOR RABBITS, GUINEA PIGS, CHINCHILLAS or similar:
${pick([POSES[0], POSES[1]])}

FOR REPTILES, FERRETS or other animals:
${POSES[0]}`;
};
