// SECCIÓN 4 — POSES (V_BODY_COMPLETE_BALANCED)
// Variedad útil + cuerpo completo legible + sin cabezón.

const framings = {
  seated_full: `FRAMING: Full seated portrait. The entire seated body is visible and readable, including head, chest, torso, front paws, hindquarters, and tail base where appropriate. The composition still feels premium and painterly, not zoomed out or casual.`,

  noble_three_quarter: `FRAMING: Three-quarter seated portrait. The full body mass remains readable from head through hindquarters, while the face still carries emotional weight. The composition must feel elegant and historical.`,

  regal_recline: `FRAMING: Full reclining portrait. The subject reclines with the entire body clearly present and anatomically complete. Head, chest, torso, front legs, hindquarters, and tail connection must remain believable and visible.`
};

const eyeLocks = {
  direct: `GAZE: The eyes look directly at the viewer with calm presence, emotional connection, and noble stillness.`,
  nearDirect: `GAZE: The head is mostly frontal or slightly turned, while the eyes maintain strong near-direct engagement with the viewer.`,
  slightTurn: `GAZE: The head turns modestly to one side, creating elegance and variety, but the expression remains composed and emotionally readable.`
};

const anatomyRules = `CRITICAL ANATOMY & VISIBILITY RULES:
Maintain natural breed-accurate anatomical proportion between head, neck, chest, torso, front legs, hindquarters, and tail base.
Do NOT create oversized-head distortion.
Do NOT miniaturize the torso.
Do NOT let the rear body disappear into shadow, cushion folds, or drapery.
Do NOT create a front-half-only animal.
The full body must remain readable, complete, and believable.`;

const styleLock = `POSE RULES:
Avoid exaggerated comedy, goofy tilts, meme-like expressions, or awkward asymmetry.
The subject must feel noble, calm, emotionally readable, and compositionally stable.
The pose must look intentional, painterly, premium, and anatomically complete.
${anatomyRules}`;

const poses = {
  gato: [
    {
      id: 'G1',
      text: `${framings.seated_full} ${eyeLocks.direct} POSE: The cat sits upright with elegant stillness, tail integrated naturally, paws composed, and the full seated body clearly visible. ${styleLock}`
    },
    {
      id: 'G2',
      text: `${framings.noble_three_quarter} ${eyeLocks.nearDirect} POSE: The cat sits in a refined three-quarter arrangement with graceful posture and full body silhouette clearly preserved. ${styleLock}`
    }
  ],

  perro_grande: [
    {
      id: 'PG1',
      text: `${framings.seated_full} ${eyeLocks.direct} POSE: The dog sits powerfully upright with broad chest, stable front paws, visible hindquarters, and complete body mass. ${styleLock}`
    },
    {
      id: 'PG2',
      text: `${framings.noble_three_quarter} ${eyeLocks.nearDirect} POSE: The dog sits in a noble three-quarter pose with balanced body mass, readable hips, and complete seated structure. ${styleLock}`
    },
    {
      id: 'PG3',
      text: `${framings.regal_recline} ${eyeLocks.slightTurn} POSE: The dog reclines with aristocratic ease, front legs naturally arranged, body length clearly visible, and hindquarters fully present. ${styleLock}`
    }
  ],

  perro_mediano: [
    {
      id: 'PM1',
      text: `${framings.seated_full} ${eyeLocks.direct} POSE: The dog sits with proud chest, visible front paws, readable torso, and complete rear body presence. ${styleLock}`
    },
    {
      id: 'PM2',
      text: `${framings.noble_three_quarter} ${eyeLocks.nearDirect} POSE: The dog sits elegantly in a balanced three-quarter portrait with full seated anatomy preserved. ${styleLock}`
    }
  ],

  perro_pequeno: [
    {
      id: 'PP1',
      text: `${framings.seated_full} ${eyeLocks.direct} POSE: The small dog sits upright with compact but complete body structure, visible paws, readable hindquarters, and a refined premium posture. ${styleLock}`
    },
    {
      id: 'PP2',
      text: `${framings.noble_three_quarter} ${eyeLocks.nearDirect} POSE: The small dog sits in a graceful three-quarter arrangement with full body silhouette preserved and no toy-like distortion. ${styleLock}`
    }
  ],

  default: [
    {
      id: 'DF1',
      text: `${framings.seated_full} ${eyeLocks.direct} POSE: The animal is portrayed with calm, centered nobility and full-body anatomical completeness. ${styleLock}`
    },
    {
      id: 'DF2',
      text: `${framings.noble_three_quarter} ${eyeLocks.nearDirect} POSE: The animal is shown in a refined three-quarter composition with full body mass preserved and clear premium portrait structure. ${styleLock}`
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

  const idx = Math.floor(Math.random() * pool.length);
  return pool[idx].text;
}

module.exports = {
  poses,
  detectarCategoria,
  elegirPoseControlada
};
