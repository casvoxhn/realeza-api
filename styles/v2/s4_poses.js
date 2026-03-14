// SECCIÓN 4 — POSES (V_LIFE_OVER_RIGIDITY)
// Orientado a poses vivas, composición pictórica y variedad real.

const FRAMINGS = {
  relaxed_three_quarter: `FRAMING: Relaxed three-quarter portrait. The head, chest, torso, front paws, and rear body mass are all readable. The composition breathes naturally and avoids rigid centering.`,

  supported_rest: `FRAMING: Supported resting portrait. The animal rests naturally on the cushion with visible body weight, readable torso, clear front paws, and anatomically present hindquarters. The portrait feels alive, not staged.`,

  regal_recline: `FRAMING: Regal reclining portrait. The subject reclines with head elevated and body flowing naturally across the cushion. Head, chest, torso, front legs, hips, hindquarters, and tail connection remain readable.`,

  noble_half_body: `FRAMING: Noble half-body portrait. The face remains emotionally important, but enough of the body is visible to preserve believable anatomy and natural posture.`,

  seated_with_lean: `FRAMING: Seated portrait with natural lean. The animal sits upright but with a subtle organic lean or curve through the torso, avoiding statue-like symmetry. Full body mass remains readable.`
};

const GAZES = {
  direct: `GAZE: The eyes look directly at the viewer with calm presence and emotional connection.`,

  near_direct: `GAZE: The head is slightly turned or relaxed, while the eyes maintain a strong near-direct connection with the viewer.`,

  slightly_off: `GAZE: The head and gaze turn modestly off-center, creating elegance and painterly variety while preserving emotional readability.`
};

const GLOBAL_RULES = `GLOBAL POSE RULES:
The pose must feel alive, natural, and intentional.
Avoid statue-like stiffness, front-only mannequin posture, or perfectly symmetrical placement.
Avoid awkward meme-like tilts or cartoon energy.

BODY CONTINUITY LOCK:
The entire body must remain believable from head through hindquarters.
Do NOT let the rear body disappear into the cushion, cloak, or darkness.
Do NOT create front-half-only anatomy.

WEIGHT & CONTACT LOCK:
The body must visibly rest on the cushion with believable compression and body weight.
The subject must feel physically present, not pasted on top.`;

const POSES = {
  relaxed_seated_turn: `POSE: The animal sits in a relaxed three-quarter seated posture, with a soft turn through the torso and naturally placed front paws. The body silhouette remains elegant and complete.`,

  noble_resting_pose: `POSE: The animal rests with calm dignity, body supported by the cushion, chest lifted gently, and posture feeling natural rather than posed for a passport photo.`,

  aristocratic_recline: `POSE: The animal reclines with aristocratic ease, head elevated, front paws resting naturally, and body length flowing across the cushion in a painterly diagonal.`,

  seated_with_soft_curve: `POSE: The animal sits upright but with a slight curve or lean through the body, creating life and rhythm. The chest, torso, and hindquarters remain clearly readable.`,

  compact_supported_pose: `POSE: The animal sits compactly but naturally on the cushion, with the body fully present and weight visibly supported. Avoid toy-like distortion or rigid front-facing placement.`
};

const CATEGORY_CONFIG = {
  gato: {
    options: [
      { framing: 'relaxed_three_quarter', pose: 'relaxed_seated_turn', gaze: 'near_direct', weight: 30 },
      { framing: 'supported_rest', pose: 'noble_resting_pose', gaze: 'slightly_off', weight: 30 },
      { framing: 'seated_with_lean', pose: 'seated_with_soft_curve', gaze: 'near_direct', weight: 25 },
      { framing: 'noble_half_body', pose: 'compact_supported_pose', gaze: 'direct', weight: 15 }
    ]
  },

  perro_grande: {
    options: [
      { framing: 'regal_recline', pose: 'aristocratic_recline', gaze: 'near_direct', weight: 35 },
      { framing: 'supported_rest', pose: 'noble_resting_pose', gaze: 'direct', weight: 25 },
      { framing: 'relaxed_three_quarter', pose: 'relaxed_seated_turn', gaze: 'near_direct', weight: 20 },
      { framing: 'seated_with_lean', pose: 'seated_with_soft_curve', gaze: 'slightly_off', weight: 20 }
    ]
  },

  perro_mediano: {
    options: [
      { framing: 'supported_rest', pose: 'noble_resting_pose', gaze: 'near_direct', weight: 30 },
      { framing: 'relaxed_three_quarter', pose: 'relaxed_seated_turn', gaze: 'near_direct', weight: 30 },
      { framing: 'seated_with_lean', pose: 'seated_with_soft_curve', gaze: 'direct', weight: 20 },
      { framing: 'noble_half_body', pose: 'compact_supported_pose', gaze: 'direct', weight: 20 }
    ]
  },

  perro_pequeno: {
    options: [
      { framing: 'supported_rest', pose: 'compact_supported_pose', gaze: 'near_direct', weight: 30 },
      { framing: 'relaxed_three_quarter', pose: 'relaxed_seated_turn', gaze: 'near_direct', weight: 30 },
      { framing: 'seated_with_lean', pose: 'seated_with_soft_curve', gaze: 'direct', weight: 20 },
      { framing: 'noble_half_body', pose: 'compact_supported_pose', gaze: 'slightly_off', weight: 20 }
    ]
  },

  default: {
    options: [
      { framing: 'supported_rest', pose: 'noble_resting_pose', gaze: 'near_direct', weight: 35 },
      { framing: 'relaxed_three_quarter', pose: 'relaxed_seated_turn', gaze: 'near_direct', weight: 30 },
      { framing: 'seated_with_lean', pose: 'seated_with_soft_curve', gaze: 'direct', weight: 20 },
      { framing: 'noble_half_body', pose: 'compact_supported_pose', gaze: 'direct', weight: 15 }
    ]
  }
};

function detectarCategoria(especie, raza) {
  const e = (especie || '').toLowerCase();
  const r = (raza || '').toLowerCase();

  if (e.includes('cat') || e.includes('gato')) return 'gato';

  if (e.includes('dog') || e.includes('perro')) {
    const razasPequenas = [
      'chihuahua', 'yorkshire', 'pug', 'french bulldog', 'pomeranian',
      'corgi', 'dachshund', 'mini pinscher', 'miniature pinscher',
      'shih tzu', 'maltese', 'papillon', 'toy poodle'
    ];

    const razasGrandes = [
      'doberman', 'golden', 'labrador', 'german shepherd', 'husky',
      'mastiff', 'rottweiler', 'great dane', 'bernese',
      'saint bernard', 'malamute', 'akita'
    ];

    if (razasGrandes.some(x => r.includes(x))) return 'perro_grande';
    if (razasPequenas.some(x => r.includes(x))) return 'perro_pequeno';
    return 'perro_mediano';
  }

  return 'default';
}

function weightedPick(items) {
  const total = items.reduce((sum, item) => sum + (item.weight || 1), 0);
  let roll = Math.random() * total;

  for (const item of items) {
    roll -= (item.weight || 1);
    if (roll <= 0) return item;
  }

  return items[items.length - 1];
}

function buildText(option) {
  const framingText = FRAMINGS[option.framing] || '';
  const gazeText = GAZES[option.gaze] || '';
  const poseText = POSES[option.pose] || '';

  return [framingText, gazeText, poseText, GLOBAL_RULES]
    .filter(Boolean)
    .join(' ');
}

function elegirPoseControlada({ especie, raza, heroPose = null }) {
  const categoria = detectarCategoria(especie, raza);
  const config = CATEGORY_CONFIG[categoria] || CATEGORY_CONFIG.default;
  const pool = config.options;

  if (Number.isInteger(heroPose) && heroPose >= 0 && heroPose < pool.length) {
    return buildText(pool[heroPose]);
  }

  const choice = weightedPick(pool);
  return buildText(choice);
}

module.exports = {
  FRAMINGS,
  GAZES,
  POSES,
  detectarCategoria,
  elegirPoseControlada
};
