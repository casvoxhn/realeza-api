// styles/v2/prompts/poses/single/ninos.js — V1.0
// Poses para un niño solo — retratos individuales de estilo real
// Preserva escala, energía e inocencia natural del niño

const { pick } = require('../../../utils/pick');

// Lenguaje corporal — natural, infantil, digno
const BODY_LANGUAGE = `The child's body language is natural, relaxed and age-appropriate.
A slight natural energy is visible — children are never perfectly still.
The posture is dignified but soft — never forced into adult rigidity.
The overall feeling is innocent, genuine and alive.
Never stiff, never theatrical, never like a miniature adult.`;

const POSES = [

  // N1 — Sentado, postura natural infantil
  `STEP 2 — POSE:
The child sits naturally on a stone ledge or low cushioned seat.
Body facing slightly to one side — not perfectly frontal.
The chest is open and visible facing the viewer.
Both hands rest naturally in the lap or at the sides —
small, proportionally sized hands, never adult-sized.
The legs dangle naturally if the seat is high,
or rest with feet on the floor if low.
${BODY_LANGUAGE}
The full figure is visible — head, torso and lower body.
The child's head is proportionally larger relative to body —
natural child proportions, never adult proportions.
The head rises naturally — face exactly as locked in Step 1.
FRAMING:
Wide open composition — full figure visible.
The child occupies the upper 65% of the canvas.
Generous breathing room on all sides.`,

  // N2 — De pie, ligeramente apoyado
  `STEP 2 — POSE:
The child stands in a natural, slightly informal position.
Body turned slightly to one side — not perfectly frontal.
One hand rests lightly on a surface beside them —
a chair, ledge, or similar — for natural support.
The other hand rests naturally at the side.
The weight shifts slightly — a child's natural stance,
never the rigid contrapposto of an adult portrait.
${BODY_LANGUAGE}
The full figure is visible — head, torso and full legs.
The child's proportions are natural —
slightly larger head, softer features, rounder face.
The head rises naturally — face exactly as locked in Step 1.
FRAMING:
Wide open composition — full standing figure visible.
The child occupies the upper 75% of the canvas.
Generous breathing room on all sides.`,

  // N3 — Sentado en el suelo o escalón, pose informal
  `STEP 2 — POSE:
The child sits on a low stone step or directly on a cushion —
a naturally informal, childlike position.
Body slightly angled — not perfectly frontal.
Both hands rest on the knees or in the lap.
The legs are naturally folded or extended in front —
whatever feels most natural for a child sitting low.
${BODY_LANGUAGE}
The full figure is visible — head, torso and lower body.
The pose feels completely natural — like the child
simply sat down and the painter captured the moment.
The head rises naturally — face exactly as locked in Step 1.
FRAMING:
Wide open composition — full figure visible.
The child occupies the upper 60% of the canvas.
Generous breathing room on all sides.`,

  // N4 — De pie con mascota o prop natural
  `STEP 2 — POSE:
The child stands naturally, slightly turned to one side.
If a pet is present — the child's hand rests gently
near or on the pet, a natural childlike gesture of affection.
If no pet — one hand holds a natural period-appropriate prop
(a small bouquet, a toy, a book) or rests at the side.
The other hand rests naturally at the side.
The child's posture is open and natural —
a slight forward lean of curiosity or warmth.
${BODY_LANGUAGE}
The full figure is visible — head, torso and full legs.
The head rises naturally — face exactly as locked in Step 1.
FRAMING:
Wide open composition — full standing figure visible.
The child occupies the upper 75% of the canvas.
Generous breathing room on all sides.`,

];

module.exports = () => pick(POSES);
