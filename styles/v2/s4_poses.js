// SECCIÓN 4 — POSES (V_RESET_DIVERSITY)
// Recupera variedad real sin perder calidad comercial.

const framings = {
  monumental_bust: `FRAMING: Monumental bust portrait. The head and upper chest dominate, but anatomy remains natural and breed-accurate. The face feels powerful and painterly, not oversized or toy-like.`,

  classic_half: `FRAMING: Classic half-length portrait. The head, chest, and front paws are visible. The body feels substantial and proportionate. This must read like a museum portrait, not a cropped pet snapshot.`,

  three_quarter: `FRAMING: Refined three-quarter portrait. The head, chest, torso, and front paws are visible with more breathing room around the subject. The composition feels elegant, noble, and varied.`,

  seated_fullish: `FRAMING: Graceful seated portrait. The full seated posture is visible, including chest, torso, front paws, and enough of the body to preserve natural breed silhouette. The image still feels painterly and premium, not too zoomed out.`,

  reclined: `FRAMING: Noble reclining portrait. The animal rests in a dignified reclined posture on the cushion, with clear readability of head, chest, front legs, and torso. The layout must feel like a historic painted composition, not a casual pet photo.`
};

const eyeLocks = {
  direct: `GAZE: The eyes look directly at the viewer with calm presence, emotional connection, and noble stillness.`,
  nearDirect: `GAZE: The head is mostly frontal or slightly turned, while the eyes maintain strong near-direct engagement with the viewer.`,
  slightTurn: `GAZE: The head turns modestly to one side, creating elegance and variety, but the expression remains composed and emotionally readable.`
};

const proportionLock = `CRITICAL PROPORTION LOCK:
Maintain natural breed-accurate anatomical proportion between head, neck, chest, torso, and front legs.
Do NOT create oversized-head distortion.
Do NOT miniaturize the torso.
Do NOT flatten the body beneath the face.
The breed silhouette must remain believable and attractive.`;

const styleLock = `POSE RULES:
Avoid exaggerated comedy, goofy tilts, meme-like expressions, or awkward asymmetry.
The subject must feel noble, calm, emotionally readable, and compositionally stable.
The pose must look intentional, painterly, and premium.
${proportionLock}`;

const poses = {
  gato: [
    {
      id: 'G1',
      text: `${framings.classic_half} ${eyeLocks.direct} POSE: The cat sits upright with elegant stillness, centered chest, and composed paws. ${styleLock}`
    },
    {
      id: 'G2',
      text: `${framings.three_quarter} ${eyeLocks.nearDirect} POSE: The cat sits in a refined three-quarter arrangement, with subtle aristocratic turn and graceful vertical posture. ${styleLock}`
    },
    {
      id: 'G3',
      text: `${framings.seated_fullish} ${eyeLocks.slightTurn} POSE: The cat sits with poised formality, long body clearly readable, tail integrated naturally, and noble historical presence. ${styleLock}`
    }
  ],

  perro_grande: [
    {
      id: 'PG1',
      text: `${framings.classic_half} ${eyeLocks.direct} POSE: The dog sits powerfully upright with broad chest, stable front paws, and calm commanding presence. ${styleLock}`
    },
    {
      id: 'PG2',
      text: `${framings.monumental_bust} ${eyeLocks.direct} POSE: Monumental royal portrait with strong face presence, but chest and shoulder mass remain clearly substantial and believable. ${styleLock}`
    },
    {
      id: 'PG3',
      text: `${framings.three_quarter} ${eyeLocks.nearDirect} POSE: The dog sits in a noble three-quarter pose with balanced body mass and painterly elegance. ${styleLock}`
    },
    {
      id: 'PG4',
      text: `${framings.reclined} ${eyeLocks.slightTurn} POSE: The dog reclines with aristocratic ease, front legs naturally arranged, head elevated, and body weight clearly readable. ${styleLock}`
    }
  ],

  perro_mediano: [
    {
      id: 'PM1',
      text: `${framings.classic_half} ${eyeLocks.direct} POSE: The dog sits with proud chest, visible paws, and centered noble presence. ${styleLock}`
    },
    {
      id: 'PM2',
      text: `${framings.three_quarter} ${eyeLocks.nearDirect} POSE: The dog sits in a balanced three-quarter portrait with natural body structure and elegant restraint. ${styleLock}`
    },
    {
      id: 'PM3',
      text: `${framings.seated_fullish} ${eyeLocks.slightTurn} POSE: The dog sits fully and gracefully on the cushion, with breed silhouette clearly readable and painterly dignity. ${styleLock}`
    }
  ],

  perro_pequeno: [
    {
      id: 'PP1',
      text: `${framings.classic_half} ${eyeLocks.direct} POSE: The small dog sits upright with visible front paws, compact but believable chest, and strong emotional connection. ${styleLock}`
    },
    {
      id: 'PP2',
      text: `${framings.three_quarter} ${eyeLocks.nearDirect} POSE: The small dog is shown in an elegant three-quarter seated portrait, preserving body shape and avoiding toy-like distortion. ${styleLock}`
    },
    {
      id: 'PP3',
      text: `${framings.seated_fullish} ${eyeLocks.slightTurn} POSE: The small dog sits fully on the cushion with body clearly readable, refined posture, and noble visual rhythm. ${styleLock}`
    }
  ],

  default: [
    {
      id: 'DF1',
      text: `${framings.classic_half} ${eyeLocks.direct} POSE: The animal is portrayed with calm, centered nobility and believable anatomical mass. ${styleLock}`
    },
    {
      id: 'DF2',
      text: `${framings.three_quarter} ${eyeLocks.nearDirect} POSE: The animal is shown in a refined three-quarter composition with painterly dignity and readable body structure. ${styleLock}`
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

  // Rotación simple pseudoaleatoria para no caer siempre en la primera.
  const idx = Math.floor(Math.random() * pool.length);
  return pool[idx].text;
}

module.exports = {
  poses,
  detectarCategoria,
  elegirPoseControlada
};
