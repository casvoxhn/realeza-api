// SECCIÓN 4 — POSES
// 29 poses pre-definidas. El modelo NO decide la pose.
// Asignadas automáticamente por especie y raza.

const poses = {

  // ─── PERRO RAZA GRANDE ───────────────────────────────────────────────────
  perro_grande: [
    // P1 — El Monarca Reclinado
    `POSE: The dog lies reclined — chest down, weight resting on the sternum, both front legs extended forward on the cushion, parallel and symmetrical. Head fully erect, chin slightly raised, gaze directed straight at the viewer. Ears in natural position. Tail not visible. Body is horizontal and low.`,

    // P2 — El General
    `POSE: The dog lies reclined — chest down, left front leg extended forward, right front leg slightly retracted. Head turned 3/4 toward the viewer — not fully frontal. A slight natural asymmetry in the body. Eyes meeting the viewer with calm authority.`,

    // P5 — La Esfinge Noble
    `POSE: The dog lies in sphinx position — chest slightly elevated off the cushion, front legs extended forward with one paw crossed lightly over the other. Head erect, gaze forward. The posture radiates relaxed authority.`,

    // P7 — El Reposo Real
    `POSE: The dog lies fully reclined — chest down, body long and horizontal, both front paws extended forward. Head raised and turned slightly to one side — 20 degrees off center — gaze returning to meet the viewer. A pose of complete ease and dominance.`
  ],

  // ─── PERRO RAZA MEDIANA ──────────────────────────────────────────────────
  perro_mediano: [
    // P1
    `POSE: The dog lies reclined — chest down, both front legs extended forward on the cushion. Head fully erect, gaze directed straight at the viewer. Body low and horizontal.`,

    // P3 — El Duque Sentado
    `POSE: The dog sits upright — back straight, both front paws perpendicular to the cushion, placed neatly together. Head elevated slightly. Gaze directed straight at the viewer. A dignified, composed sitting posture.`,

    // P4 — El Almirante
    `POSE: The dog sits upright — body turned 3/4 to the left, head turned back to face the viewer directly. Left front paw slightly more forward than the right. Classic aristocratic portrait tension between body direction and gaze.`,

    // P6 — El Canciller
    `POSE: The dog sits — body in 3/4 profile facing right, head turned completely to face the viewer. The tension between the body's direction and the direct gaze creates drama. Front paws neatly placed.`
  ],

  // ─── PERRO RAZA PEQUEÑA ──────────────────────────────────────────────────
  perro_pequeno: [
    // P3
    `POSE: The dog sits upright — back perfectly straight, both front paws placed neatly together on the cushion. Head slightly elevated. Gaze directed straight at the viewer with calm confidence.`,

    // P4
    `POSE: The dog sits upright — body turned 3/4, head turned to face the viewer directly. One front paw slightly forward. Aristocratic and composed.`,

    // P5 — Esfinge pequeña
    `POSE: The dog lies in sphinx position — chest slightly elevated, front legs extended forward, one paw lightly over the other. Head erect, gaze forward. Compact and regal.`,

    // P6
    `POSE: The dog sits — body in 3/4 profile, head turned completely to face the viewer. Direct, confident gaze. Front paws neatly placed on the cushion.`
  ],

  // ─── GATO ────────────────────────────────────────────────────────────────
  gato: [
    // G1 — La Reina Sentada
    `POSE: The cat sits perfectly upright — back straight, both front paws placed neatly together and perpendicular to the cushion. Tail curled around the front paws or tucked to one side. Head level, gaze directed straight at the viewer with calm feline superiority. The posture is immaculate — the cat is fully aware of being observed and has decided to allow it.`,

    // G2 — El Faraón
    `POSE: The cat lies in sphinx position — chest slightly raised, both front legs extended forward on the cushion, parallel. Head fully erect, chin level, gaze directed straight at the viewer. One front paw placed very slightly ahead of the other. The posture is ancient and authoritative.`,

    // G3 — La China
    `POSE: The cat sits upright — both front paws placed perfectly together and aligned, tail wrapped neatly around the front feet. Body facing forward. Head turned very slightly — 10 degrees — giving a composed, evaluating gaze. Maximum feline elegance.`,

    // G4 — El Observador
    `POSE: The cat sits — body turned 3/4 to the right, head turned back to face the viewer directly. One front paw slightly forward. The posture of a cat that has just decided you are worth its attention.`,

    // G6 — La Emperatriz
    `POSE: The cat sits perfectly upright — front paws together, back straight. Head tilted very slightly to one side — no more than 8 degrees. Gaze direct and penetrating. The slight tilt gives a sense of quiet judgment.`,

    // G7 — El Reposo del Sabio
    `POSE: The cat lies in loaf position — front paws tucked completely under the chest, body compact and round. Head erect, chin level, gaze directed straight at the viewer. Maximum authority with minimum effort. The cat does not need to extend its paws to dominate the frame.`
  ]
};

// Asignación automática por especie y raza
function asignarPose(especie, raza, indexHero = null) {
  let pool;

  if (especie === 'gato') {
    pool = poses.gato;
  } else {
    // Detectar tamaño por nombre de raza
    const razasGrandes = ['doberman', 'dalmatian', 'golden', 'labrador', 'german shepherd',
      'husky', 'rottweiler', 'great dane', 'saint bernard', 'mastiff',
      'bernese', 'boxer', 'weimaraner', 'vizsla', 'pointer', 'setter'];
    const razasPequenas = ['chihuahua', 'yorkshire', 'yorkie', 'maltese', 'pomeranian',
      'shih tzu', 'dachshund', 'miniature', 'toy', 'papillon',
      'pug', 'french bulldog', 'boston terrier', 'cavalier'];

    const razaLower = (raza || '').toLowerCase();
    const esGrande = razasGrandes.some(r => razaLower.includes(r));
    const esPequeno = razasPequenas.some(r => razaLower.includes(r));

    if (esGrande) pool = poses.perro_grande;
    else if (esPequeno) pool = poses.perro_pequeno;
    else pool = poses.perro_mediano;
  }

  // Si se especifica un índice hero, usarlo. Si no, pick aleatorio.
  if (indexHero !== null && indexHero < pool.length) {
    return pool[indexHero];
  }
  return pool[Math.floor(Math.random() * pool.length)];
}

module.exports = { asignarPose, poses };
