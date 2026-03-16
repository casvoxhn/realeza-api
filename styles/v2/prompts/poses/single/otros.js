// poses/single/otros.js — V2.1
// Poses para otras especies: conejos, aves, reptiles, caballos, roedores, etc.
// V2.1: "ledge" removido del framing — ya no existe ledge en los estilos

const { pick } = require('../../../utils/pick');

const POSES = [

  // O1 — Recostado natural (conejos, reptiles, roedores pequeños)
  `STEP 2 — POSE:
Study the animal in Image 1 and identify its species.
This pose works for animals that naturally rest lying down
(rabbits, reptiles, guinea pigs, hamsters, ferrets, etc.)

The animal rests naturally on the cushion.
Body settled comfortably — weight on the chest and lower body.
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

FRAMING:
The bird occupies the upper 60% of the canvas.
The cushion prominent below — full cushion visible with tassel.
Generous breathing room on all sides.`,

  // O4 — Caballo (composición especial — animal grande)
  `STEP 2 — POSE:
Study the animal in Image 1 and identify its species.
This pose works for horses and large animals.

The horse stands in a dignified 3/4 profile position.
Body turned slightly — the powerful flank visible to the viewer.
The head turns naturally to face the viewer —
face direction exactly as locked in Step 1.
All four legs visible and naturally positioned.
The tail falls naturally behind.

NOTE: For horses the cushion becomes a decorative element
at the base — the horse stands beside or in front of it.
The composition is wider to accommodate the full body.

FRAMING:
Wide horizontal composition — full body visible.
The horse occupies 70% of the canvas height.
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
