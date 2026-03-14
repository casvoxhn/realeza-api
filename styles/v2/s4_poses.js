// SECCIÓN 4 — POSES (V_CONVERSION_MASTER)
// Poses y encuadres diseñados para vender más: conexión visual, nobleza, claridad, consistencia.

const framings = {
  imperial_bust: `FRAMING: Tight aristocratic bust portrait. The head, upper chest, and royal garments dominate the composition. The face is large in frame. The lower cushion appears only as a cropped anchor near the bottom edge. ZERO visible floor. ZERO full-body composition.`,
  noble_half: `FRAMING: Refined half-length portrait. The head, chest, and front paws are visible, but the face remains dominant. The composition feels like a museum oil portrait, not a pet photo.`,
};

const eyeLocks = {
  direct: `GAZE: The eyes look directly at the viewer with emotional presence and aristocratic authority.`,
  nearDirect: `GAZE: The face is mostly frontal with strong near-direct eye contact toward the viewer.`,
  slightTurn: `GAZE: The head turns only slightly, but the expression still feels connected and intentional, not distracted.`
};

const poseRules = `
POSE RULES:
Avoid exaggerated head tilts, comedic angles, excessive asymmetry, or casual modern pet-photo poses.
The animal must feel dignified, noble, calm, and compositionally stable.
Favor centered or near-centered head placement.
The final result must read as a historical painted portrait that sells emotionally.
`.trim();

const poses = {
  gato: [
    {
      id: 'G1',
      text: `${framings.imperial_bust} ${eyeLocks.direct} POSE: The cat sits upright with serene aristocratic stillness. The head is centered, the chin slightly elevated, and the chest presented with quiet authority. ${poseRules}`
    },
    {
      id: 'G2',
      text: `${framings.imperial_bust} ${eyeLocks.nearDirect} POSE: The cat sits elegantly with a subtle noble turn of the head, preserving strong facial symmetry and regal calm. ${poseRules}`
    }
  ],
  perro_grande: [
    {
      id: 'PG1',
      text: `${framings.noble_half} ${eyeLocks.direct} POSE: The dog sits powerfully upright with a broad chest and calm authority. The head is centered or nearly centered. The front paws rest naturally and clearly. ${poseRules}`
    },
    {
      id: 'PG2',
      text: `${framings.imperial_bust} ${eyeLocks.direct} POSE: Monumental royal bust portrait. The face dominates the image. The chest rises proudly beneath the mantle. The expression is calm, noble, and deeply present. ${poseRules}`
    },
    {
      id: 'PG3',
      text: `${framings.noble_half} ${eyeLocks.nearDirect} POSE: The dog rests in a composed half-length pose with the head only slightly turned, preserving emotional connection and noble stillness. ${poseRules}`
    }
  ],
  perro_mediano: [
    {
      id: 'PM1',
      text: `${framings.imperial_bust} ${eyeLocks.direct} POSE: The dog sits with a proud chest and centered head. The expression feels intimate, noble, and emotionally engaging. ${poseRules}`
    },
    {
      id: 'PM2',
      text: `${framings.noble_half} ${eyeLocks.direct} POSE: The dog sits elegantly with a balanced body axis, calm paws, and a strong portrait presence. ${poseRules}`
    }
  ],
  perro_pequeno: [
    {
      id: 'PP1',
      text: `${framings.imperial_bust} ${eyeLocks.direct} POSE: The small dog is portrayed as a miniature monarch. The face is large in frame, direct, soulful, and highly engaging. ${poseRules}`
    },
    {
      id: 'PP2',
      text: `${framings.noble_half} ${eyeLocks.nearDirect} POSE: The dog sits proudly on a luxurious cushion, preserving a centered noble portrait structure. ${poseRules}`
    }
  ],
  default: [
    {
      id: 'DF1',
      text: `${framings.imperial_bust} ${eyeLocks.direct} POSE: The animal is portrayed with centered nobility, clear facial emphasis, and calm historical dignity. ${poseRules}`
    }
  ]
};

function detectarCategoria(especie, raza) {
  const e = (especie || '').toLowerCase();
  const r = (raza || '').toLowerCase();

  if (e.includes('cat') || e.includes('gato')) return 'gato';

  if (e.includes('dog') || e.includes('perro')) {
    const razasPequenas = ['chihuahua', 'yorkshire', 'pug', 'french bulldog', 'pomeranian', 'corgi', 'dachshund'];
    const razasGrandes = ['doberman', 'golden', 'labrador', 'german shepherd', 'husky', 'mastiff', 'rottweiler', 'great dane'];
