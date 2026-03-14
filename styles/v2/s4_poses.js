// SECCIÓN 4 — POSES (V_CONVERSION_MASTER_BALANCED)
// Equilibrio entre retrato premium, conexión emocional y proporción anatómica creíble.

const framings = {
  imperial_bust: `FRAMING: Refined aristocratic bust portrait. The head and upper chest are prominent, but anatomical proportions must remain natural and breed-accurate. The head must never appear oversized relative to the chest or shoulders. The torso must remain visually substantial and believable. The lower cushion may appear as a cropped anchor near the bottom edge. ZERO visible floor.`,

  noble_half: `FRAMING: Refined half-length portrait. The head, chest, and front paws are clearly visible. The face is important, but the body must retain natural scale and believable anatomy. The composition must feel like a museum oil portrait, not a distorted pet caricature.`
};

const eyeLocks = {
  direct: `GAZE: The eyes look directly at the viewer with emotional presence, calm dignity, and aristocratic authority.`,
  nearDirect: `GAZE: The face is mostly frontal with strong near-direct eye contact toward the viewer, preserving emotional connection and nobility.`,
  slightTurn: `GAZE: The head turns only slightly, while the expression remains connected, intentional, and composed.`
};

const poseRules = `POSE RULES:
Avoid exaggerated head tilts, comedic angles, excessive asymmetry, or casual modern pet-photo poses.
The animal must feel dignified, noble, calm, and compositionally stable.
Favor centered or near-centered head placement.

CRITICAL PROPORTION LOCK:
Maintain natural breed-accurate anatomical proportion between:
- head
- neck
- chest
- torso
- front legs

The head must NOT appear oversized relative to the chest or shoulders.
Do NOT create big-head small-body distortion.
Do NOT miniaturize the torso beneath an oversized face.
The chest and torso must feel physically substantial and believable beneath the head.

The final result must read as a historical painted portrait that sells emotionally.`;

const poses = {
  gato: [
    {
      id: 'G1',
      text: `${framings.imperial_bust} ${eyeLocks.direct} POSE: The cat sits upright with serene aristocratic stillness. The head is centered, the chin slightly elevated, and the chest presented with quiet authority. ${poseRules}`
    },
    {
      id: 'G2',
      text: `${fram
