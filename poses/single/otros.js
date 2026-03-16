// poses/single/otros.js
// Fallback para otras especies — conejos, aves, reptiles, etc.

const { pick } = require('../../../utils/pick');

const POSES = [

  // O1 — Recostado natural
  `STEP 2 — POSE:
Study the animal in Image 1 and choose the most natural
dignified pose for this specific species.
The animal rests naturally on the cushion.
The pose respects the animal's natural anatomy — 
never force a pose that is unnatural for this species.
The face and head angle from Image 1 are preserved exactly.

If the full body is visible in Image 1 — show the full body.
If only face/chest is visible — generate the body coherently
using the visible fur color as reference.

Paint the tail only if clearly visible in Image 1 —
same color and fur as the body. If not visible, omit it.

FRAMING:
Wide open composition.
The animal occupies the upper 55% of the canvas.
The cushion and ledge occupy the lower 45%.
Generous breathing room on all sides.`,

];

module.exports = () => pick(POSES);
