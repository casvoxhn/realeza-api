// SECCIÓN 4 — POSES (V_ART_DIRECTION_MATRIX)
// Arquitectura real de dirección de arte:
// framing + pose + gaze + reglas anatómicas por categoría

const FRAMINGS = {
  hero_bust: `FRAMING: Hero bust portrait. The head, neck, and upper chest are dominant, but anatomy must remain breed-accurate and believable. The head must never feel oversized or toy-like relative to the chest and shoulders. This is an intense premium portrait, not a caricature.`,

  royal_half: `FRAMING: Royal half-length portrait. The head, chest, torso, and front paws are clearly visible. The portrait feels balanced, premium, and classically composed. The body must remain substantial and readable.`,

  noble_three_quarter: `FRAMING: Noble three-quarter portrait. The head, chest, torso, front paws, and part of the rear body mass are visible. The composition must feel elegant, varied, and historically painted, with enough breathing room to avoid repetition.`,

  full_seated_premium: `FRAMING: Full seated premium portrait. The complete seated body is visible and readable, including head, chest, torso, front paws, hindquarters, and tail base where appropriate. The portrait must still feel premium and intimate, not zoomed out or casual.`,

  regal_recline: `FRAMING: Regal reclining portrait. The subject reclines with the full body clearly present and anatomically complete. Head, chest, torso, front legs, hindquarters, and tail connection must remain believable and visible.`
};

const GAZES = {
  direct: `GAZE: The eyes look directly at the viewer with calm presence, emotional connection, and noble stillness.`,

  near_direct: `GAZE: The head is mostly frontal or slightly turned, while the eyes maintain strong near-direct engagement with the viewer. This creates elegance without losing connection.`,

  slight_turn: `GAZE: The head turns modestly to one side, creating artistic variety and aristocratic elegance, while the expression remains emotionally readable and composed.`
};

const GLOBAL_RULES = `GLOBAL POSE RULES:
Avoid exaggerated comedy, awkward asymmetry, meme-like expressions, goofy head tilts, or casual modern pet-photo energy.
The subject must feel noble, calm, premium, intentional, and painterly.

CRITICAL ANATOMY LOCK:
Maintain natural breed-accurate anatomical proportion between head, neck, chest, torso, front legs, hindquarters, and tail base.
Do NOT create oversized-head distortion.
Do NOT miniaturize the torso.
Do NOT flatten the body beneath the face.
Do NOT let the rear body disappear into cushion folds, drapery, or shadow.
The full animal must remain a believable living body, even in tighter portraits.`;

const POSES = {
  formal_seated_center: `POSE: Formal seated center pose. The subject sits upright with composed dignity, visible front paws, stable chest, and a premium symmetrical rhythm.`,
  three_quarter_seated: `POSE: Three-quarter seated pose. The body turns slightly for variety, while the silhouette remains elegant, stable, and fully readable.`,
  compact_throne_pose: `POSE: Compact throne pose. The subject sits proudly and neatly on the cushion, with clear body structure, visible paws, and contained regal energy.`,
  regal_recline_pose: `POSE: Regal reclining pose. The subject reclines with aristocratic ease, head elevated, front legs arranged naturally, and body length clearly readable.`,
  soft_intimate_seated: `POSE: Soft intimate seated pose. The subject sits naturally but nobly, with gentle emotional presence, refined posture, and no casual slouching.`
};

const CATEGORY_CONFIG = {
  gato: {
    options: [
      { framing: 'royal_half', pose: 'formal_seated_center', gaze: 'direct', weight: 30 },
      { framing: 'noble_three_quarter', pose: 'three_quarter_seated', gaze: 'near_direct', weight: 30 },
      { framing: 'full_seated_premium', pose: 'soft_intimate_seated', gaze: 'slight_turn', weight: 25 },
      { framing: 'hero_bust', pose: 'formal_seated_center', gaze: 'near_direct', weight: 15 }
    ]
  },

  perro_grande: {
    options: [
      { framing: 'royal_half', pose: 'formal_seated_center', gaze: 'direct', weight: 30 },
      { framing: 'noble_three_quarter', pose: 'three_quarter_seated', gaze: 'near_direct', weight: 25 },
      { framing: 'hero_bust', pose: 'formal_seated_center', gaze: 'direct', weight: 20 },
      { framing: 'regal_recline', pose: 'regal_recline_pose', gaze: 'slight_turn', weight: 15 },
      { framing: 'full_seated_premium', pose: 'formal_seated_center', gaze: 'near_direct', weight: 10 }
    ]
  },

  perro_mediano: {
    options: [
      { framing: 'royal_half', pose: 'formal_seated_center', gaze: 'near_direct', weight: 35 },
      { framing: 'noble_three_quarter', pose: 'three_quarter_seated', gaze: 'near_direct', weight: 30 },
      { framing: 'full_seated_premium', pose: 'soft_intimate_seated', gaze: 'direct', weight: 20 },
      { framing: 'hero_bust', pose: 'formal_seated_center', gaze: 'direct', weight: 15 }
    ]
  },

  perro_pequeno: {
    options: [
      { framing: 'full_seated_premium', pose: 'compact_throne_pose', gaze: 'near_direct', weight: 30 },
      { framing: 'noble_three_quarter', pose: 'three_quarter_seated', gaze: 'near_direct', weight: 30 },
      { framing: 'royal_half', pose: 'soft_intimate_seated', gaze: 'direct', weight: 25 },
      { framing: 'full_seated_premium', pose: 'soft_intimate_seated', gaze: 'slight_turn', weight: 15 }
    ]
  },

  default: {
    options: [
      { framing: 'royal_half', pose: 'formal_seated_center', gaze: 'near_direct', weight: 40 },
      { framing: 'noble_three_quarter', pose: 'three_quarter_seated', gaze: 'near_direct', weight: 30 },
      { framing: 'full_seated_premium', pose: 'soft_intimate_seated', gaze: 'direct', weight: 20 },
      { framing: 'hero_bust', pose: 'formal_seated_center', gaze: 'direct', weight: 10 }
    ]
  }
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
      'dachshund',
      'mini pinscher',
      'miniature pinscher',
      'shih tzu',
      'maltese',
      'papillon',
      'toy poodle'
    ];

    const razasGrandes = [
      'doberman',
      'golden',
      'labrador',
      'german shepherd',
      'husky',
      'mastiff',
      'rottweiler',
      'great dane',
      'bernese',
      'saint bernard',
      'malamute',
      'akita'
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
