// styles/v2/prompts/poses/single/humanos.js — V1.0
// Poses para un adulto solo — retratos individuales de estilo real

const { pick } = require('../../../utils/pick');

// Lenguaje corporal — digno y natural
const BODY_LANGUAGE = `The person's body language is relaxed, natural and dignified.
Muscles soft — no tension, no stiffness, no forced symmetry.
The posture feels lived-in and genuine — noble but never theatrical.
The overall feeling is calm and regal — alive, never posed or stiff.`;

const POSES = [

  // H1 — Sentado en trono, 3/4
  `STEP 2 — POSE:
The person sits in a grand ornate chair or throne.
Body turned slightly to one side — not perfectly frontal.
The chest is open and visible facing the viewer.
One hand rests naturally on the armrest.
The other hand rests naturally in the lap or on the opposite armrest.
The legs are naturally positioned — one slightly forward.
${BODY_LANGUAGE}
The full figure is visible — head, torso and lower body.
The posture is dignified and open — never slumped or rigid.
The head rises naturally — face exactly as locked in Step 1.
FRAMING:
Wide open composition — full figure visible.
The person occupies the upper 70% of the canvas.
Generous breathing room on all sides.`,

  // H2 — De pie, 3/4
  `STEP 2 — POSE:
The person stands in a dignified 3/4 position.
Body turned slightly to one side — not perfectly frontal.
The chest is open and visible.
One hand rests naturally at the side.
The other hand rests on a surface, holds a prop naturally,
or rests at the chest — whatever feels most natural.
The weight shifts slightly to one leg — a natural contrapposto.
${BODY_LANGUAGE}
The full figure is visible — head, torso and full legs.
The head rises naturally — face exactly as locked in Step 1.
FRAMING:
Wide open composition — full standing figure visible.
The person occupies the upper 80% of the canvas.
Generous breathing room on all sides.`,

  // H3 — Sentado, cuerpo hacia un lado, cara hacia el espectador
  `STEP 2 — POSE:
The person sits on a stone ledge or low chair.
The body is turned significantly to one side —
the shoulder line angled, flank visible to the viewer.
The head turns back naturally toward the viewer —
face direction exactly as locked in Step 1.
One hand rests on the knee or thigh.
The other hand rests behind on the surface.
${BODY_LANGUAGE}
The full figure is visible — head, torso and lower body.
The pose feels organic — like the person settled naturally here.
FRAMING:
Wide open composition — full figure visible.
The person occupies the upper 75% of the canvas.
Generous breathing room on all sides.`,

];

module.exports = () => pick(POSES);
