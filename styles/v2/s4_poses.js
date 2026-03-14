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
      text: `${framings.noble_half} ${eyeLocks.nearDirect} POSE: The cat sits elegantly with a subtle noble turn of the head, preserving facial symmetry, calm presence, and believable body proportion. ${poseRules}`
    }
  ],

  perro_grande: [
    {
      id: 'PG1',
      text: `${framings.noble_half} ${eyeLocks.direct} POSE: The dog sits powerfully upright with a broad chest and calm authority. The head is centered or nearly centered. The front paws rest naturally and clearly. ${poseRules}`
    },
    {
      id: 'PG2',
      text: `${framings.imperial_bust} ${eyeLocks.direct} POSE: Monumental royal portrait. The face is prominent, but the chest beneath it must feel broad, weighty, and proportionally correct. The expression is calm, noble, and deeply present. ${poseRules}`
    },
    {
      id: 'PG3',
      text: `${framings.noble_half} ${eyeLocks.nearDirect} POSE: The dog rests in a composed half-length pose with the head only slightly turned, preserving emotional connection, noble stillness, and believable body scale. ${poseRules}`
    }
  ],

  perro_mediano: [
    {
      id: 'PM1',
      text: `${framings.noble_half} ${eyeLocks.direct} POSE: The dog sits with a proud chest and centered head. The expression feels intimate, noble, and emotionally engaging. The front paws remain visible and naturally proportioned. ${poseRules}`
    },
    {
      id: 'PM2',
      text: `${framings.noble_half} ${eyeLocks.nearDirect} POSE: The dog sits elegantly with a balanced body axis, calm paws, and a strong portrait presence. Head, chest, and torso must remain naturally proportioned. ${poseRules}`
    }
  ],

  perro_pequeno: [
    {
      id: 'PP1',
      text: `${framings.noble_half} ${eyeLocks.direct} POSE: The small dog sits upright on the cushion with proud chest and balanced posture. Front paws rest naturally and clearly visible. The body must appear compact but substantial beneath the head. ${poseRules}`
    },
    {
      id: 'PP2',
      text: `${framings.noble_half} ${eyeLocks.nearDirect} POSE: The dog sits comfortably with a slight noble head turn. Chest, shoulders, and paws remain visible and proportional. The portrait must feel refined, not toy-like. ${poseRules}`
    }
  ],

  default: [
    {
      id: 'DF1',
      text: `${framings.noble_half} ${eyeLocks.direct} POSE: The animal is portrayed with centered nobility, clear facial emphasis, visible chest, and believable anatomical proportion. ${poseRules}`
    }
  ]
};

function detectarCategoria(especie, raza) {
  const e = (especie || '').toLowerCase();
  const r = (raza || '').toLowerCase();

  if (e.includes('cat') || e.includes('gato')) return 'gato';

  if (e.includes('dog') || e.includes('perro')) {
    const razasPequenas = [
      'chihuahua',
      'yorkshire',
      'pug',
      'french bulldog',
      'pomeranian',
      'corgi',
      'dachshund'
    ];

    const razasGrandes = [
      'doberman',
      'golden',
      'labrador',
      'german shepherd',
      'husky',
      'mastiff',
      'rottweiler',
      'great dane'
    ];

    if (razasGrandes.some(x => r.includes(x))) return 'perro_grande';
    if (razasPequenas.some(x => r.includes(x))) return 'perro_pequeno';

    return 'perro_mediano';
  }

  return 'default';
}

function elegirPoseControlada({ especie, raza, heroPose = null }) {
  const categoria = detectarCategoria(especie, raza);
  const pool = poses[categoria] || poses.default;

  if (Number.isInteger(heroPose) && heroPose >= 0 && heroPose < pool.length) {
    return pool[heroPose].text;
  }

  return pool[0].text;
}

module.exports = {
  poses,
  detectarCategoria,
  elegirPoseControlada
};
