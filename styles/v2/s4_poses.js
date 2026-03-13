// SECCIÓN 4 — POSES (V_CLEAN_MASTER)
// Encuadres cerrados y poses orgánicas sin asfixiar a la IA.

const framings = {
  bust_portrait: `FRAMING: Tight, heroic bust portrait. The camera is zoomed in closely. The majestic chest, royal garments, and face completely fill the canvas. The velvet cushion is heavily cropped, acting only as a subtle anchor at the bottom edge. ZERO floor.`,
  contrast_scale: `FRAMING: Extreme scale contrast. The small animal is seated in the center of a MASSIVE, over-sized velvet cushion that fills the lower half of the frame. ZERO floor.`,
};

const globales = `The posture is proud, breathing, and completely natural, avoiding rigid symmetry.`;

const poses = {
  gato: [
    { id: 'G1', variantes: [`${framings.bust_portrait} POSE: The cat rests with elegant, aristocratic ease. ${globales}`] },
    { id: 'G2', variantes: [`${framings.bust_portrait} POSE — THE HAUGHTY SNOB: The cat sits upright. The chin is tilted slightly upward in a gesture of serene aristocratic superiority.`] },
    { id: 'G3', variantes: [`${framings.bust_portrait} POSE — THE INNOCENT TILT: The cat sits gracefully. The head is tilted adorably to one side, projecting sweet vulnerability.`] }
  ],
  perro_grande: [
    { id: 'PG1', variantes: [`${framings.bust_portrait} POSE: The dog sits powerfully upright, broad chest pushing forward naturally. ${globales}`] },
    { id: 'PG2', variantes: [`${framings.bust_portrait} POSE — THE COMMANDER: The dog lies comfortably but powerfully. Front legs extend forward with highly organic, relaxed asymmetry.`] },
    { id: 'PG3', variantes: [`${framings.bust_portrait} POSE — THE INNOCENT TILT: The dog sits with an adorable head tilt. The chest leans slightly forward as if seeking a caress. Pure, unconditional love.`] }
  ],
  perro_mediano: [
    { id: 'PM1', variantes: [`${framings.bust_portrait} POSE: The dog sits with a tall spine and proud chest. ${globales}`] },
    { id: 'PM2', variantes: [`${framings.bust_portrait} POSE — THE HAUGHTY SNOB: The dog sits upright. The chin is tilted upward in a distinct gesture of elegant arrogance.`] },
    { id: 'PM3', variantes: [`${framings.bust_portrait} POSE — THE INNOCENT TILT: The dog sits gracefully with an adorable head tilt. Sweet vulnerability.`] }
  ],
  perro_pequeno: [
    { id: 'PP1', variantes: [`${framings.contrast_scale} POSE — THE MICRO-MONARCH: The tiny dog sits proudly in the center of an immense velvet cushion. Adorable but regal.`] },
    { id: 'PP2', variantes: [`${framings.bust_portrait} POSE — THE INNOCENT TILT: The small dog sits with an adorable head tilt, projecting immense soulfulness.`] }
  ],
  default: [
    { id: 'DF1', variantes: [`${framings.bust_portrait} POSE: The animal rests organically with a proud, elevated posture. ${globales}`] }
  ]
};

function detectarCategoria(especie, raza) {
  const e = (especie || '').toLowerCase();
  const r = (raza || '').toLowerCase();

  if (e.includes('cat') || e.includes('gato')) return 'gato';
  if (e.includes('dog') || e.includes('perro')) {
    const razasPequenas = ['chihuahua', 'yorkshire', 'pug', 'french bulldog', 'pomeranian', 'corgi'];
    const razasGrandes = ['doberman', 'golden', 'labrador', 'german shepherd', 'husky', 'mastiff'];
    if (razasGrandes.some(x => r.includes(x))) return 'perro_grande';
    if (razasPequenas.some(x => r.includes(x))) return 'perro_pequeno';
    return 'perro_mediano';
  }
  return 'default';
}

function asignarPose(especie, raza) {
  const categoria = detectarCategoria(especie, raza);
  const pool = poses[categoria] || poses.default;
  const poseSeleccionada = pool[Math.floor(Math.random() * pool.length)];
  return poseSeleccionada.variantes[0];
}

module.exports = { asignarPose, poses, detectarCategoria };
