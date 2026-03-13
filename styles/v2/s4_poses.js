// SECCIÓN 4 — POSES v10 (ULTIMATE CONVERSION MASTER)
// v10 — Inyección de encuadres cerrados (bust_portrait) estilo competidor.
// v10 — Poses Manipuladoras ("Awww" triggers) y de Alto Estatus (Haughty Snob, Chin Rest, Innocent Tilt).
// v10 — Eliminación de poses problemáticas (mirando de espaldas, close crops extremos).

const framings = {
  // EL "MONEY MAKER" - Encuadre cerrado estilo competidor
  bust_portrait: `FRAMING: Tight, heroic bust portrait (chest and head only). The camera is zoomed in closely. The animal's majestic chest, royal garments, and face are MASSIVE, completely filling 85% of the canvas. Do NOT show the full body or hind legs. The velvet cushion is heavily cropped, acting only as a subtle anchor at the absolute bottom edge. ZERO floor.`,
  
  // EL "PEQUEÑO REY" - Vende escala y ternura para mascotas chicas
  contrast_scale: `FRAMING: Full figure shot with extreme scale contrast. The small animal is seated proudly in the center of a MASSIVE, over-sized velvet cushion that fills the entire lower half of the frame. The visual contrast creates an adorable, highly regal composition. ZERO floor.`,

  portrait: `FRAMING: Medium-close portrait crop. The cushion MUST sit exactly at the absolute bottom edge of the canvas, bleeding off the bottom. ZERO floor visible. The animal's chest and head stretch naturally upward filling the top 80% of the frame.`,
  
  close_crop: `FRAMING: Close portrait crop. Anchor the cushion firmly off the absolute bottom edge of the canvas. ZERO floor visible. Face and chest dominant.`,
  
  full_body: `FRAMING: Full figure. The cushion bleeds off the bottom edge of the frame. ZERO floor visible.`,
  
  full_body_monumental: `FRAMING: Monumental composition from head to tail. The cushion anchors completely at the bottom border, bleeding off. ZERO floor visible.`,
};

const miradas = {
  // GATOS
  gato_offlens:     `EYES: The upper eyelid slightly overlaps the top of the iris. Deep, CRYSTAL-CLEAR transparency. Reflected light is soft, NOT a bright white dot. Gaze directed slightly off-camera. PRISTINELY CLEAN. Zero tear staining.`,
  gato_lateral:     `EYES: The upper eyelid slightly overlaps the top of the iris. Deep crystal-clear liquid volume. Aristocratic indifference. Pristinely clean.`,
  gato_elevada:     `EYES: The upper eyelid slightly overlaps the top of the iris. Eyes directed slightly upward and to the side. Pristinely clean.`,
  gato_frontal:     `EYES: The upper eyelid slightly overlaps the top of the iris. Pupils are sharp. Eyes look directly at the viewer — piercing, confident. Pristinely clean.`,
  gato_headtilt:    `EYES: The upper eyelid slightly overlaps the top of the iris. Head faces viewer with a subtle tilt. Eyes look directly at the viewer. Pristinely clean.`,

  // PERROS
  perro_offlens:  `EYES: Warm, loyal, and liquid. Cornea is crystal-clear with zero discharge. The upper lid creates a soft shadow over the iris. Soft catchlight. Gaze directed just slightly off-camera. Pristinely clean.`,
  perro_girada:   `EYES: Warm, loyal, and liquid. Cornea is crystal-clear. Head turned naturally, eyes following. Pristinely clean.`,
  perro_headtilt: `EYES: Warm, loyal, and liquid. Cornea is crystal-clear. Head tilted, eyes directed at the viewer with genuine curiosity. Pristinely clean.`,
  perro_directo:  `EYES: Powerful direct gaze. Wet, crystal-clear, and alive with a soft catchlight. Confident, direct soul-to-soul connection. Pristinely clean.`,
};

const eye_physics = `EYE PHYSICS (CRITICAL): Strictly avoid "glassy", "taxidermy", or "plastic" eyes. Treat as a biological organ: transparent, CRYSTAL-CLEAR wet cornea. The upper eyelid MUST slightly obscure the top of the iris. Reflections must be muted, organic. NO perfect white dots. ZERO TOLERANCE for invented tear stains, reddish-brown discharge, or dirt. Faces must be PRISTINELY CLEAN.`;

const perro_global = `CRITICAL — PRESERVE EXACT ANATOMY & MASS: Study the reference photo carefully. You MUST perfectly preserve the specific bone structure, leg thickness, and chest width. The generated body MUST match this exact anatomy, but presented in the NEW specific posture instructed below. ${eye_physics}`;

const gato_global = `CRITICAL — PRESERVE EXACT ANATOMY & MASS: Study the reference photo carefully. You MUST perfectly preserve the specific bone structure and proportions of THIS specific cat. The feline body carries undeniable physical weight. ${eye_physics}`;

// ─── POSES DE ALTA CONVERSIÓN ────────────────────────────────────────────────

const poses = {

  gato: [
    { id: 'G1', variantes: [`${framings.bust_portrait} ${gato_global} POSE — ROYAL SPHINX: The cat rests with aristocratic ease. The CHEST is held proudly. The FRONT PAWS are extended forward organically. Supreme sovereign dignity. ${miradas.gato_offlens}`] },
    { id: 'G2', variantes: [`${framings.bust_portrait} ${gato_global} POSE — SEATED SOVEREIGN: The cat sits upright. The FRONT PAWS rest elegantly on the surface, breaking perfect symmetry. The spine follows a graceful, proud line. ${miradas.gato_frontal}`] },
    { id: 'G4', variantes: [`${framings.bust_portrait} ${gato_global} POSE — SCULPTURAL LOAF (UPGRADED): The cat rests as a compact mass. All paws tucked. Crucially, the royal velvet mantle envelops the body entirely, creating a seamless sculptural mound of fabric and fur, like an ancient statue. ${miradas.gato_frontal}`] },
    
    // POSES EMOCIONALES Y DE ESTATUS (GATOS)
    { id: 'G10', variantes: [`${framings.bust_portrait} ${gato_global} POSE — THE HAUGHTY SNOB: The cat sits upright. The CHIN is tilted dramatically upward in a distinct gesture of aristocratic superiority. The eyes look slightly downward at the viewer with serene arrogance. The chest is puffed out proudly. ${miradas.gato_elevada}`] },
    { id: 'G11', variantes: [`${framings.bust_portrait} ${gato_global} POSE — THE INNOCENT TILT: The cat sits gracefully. The HEAD is tilted naturally and adorably to one side, completely melting the viewer's heart. Posture is soft, projecting sweet vulnerability. ${miradas.gato_headtilt}`] },
    { id: 'G12', variantes: [`${framings.bust_portrait} ${gato_global} POSE — THE DEMURE SUPPLICANT: The cat reclines with deep emotional warmth. ONE FRONT PAW is delicately and timidly placed over the other in a sweet, demure gesture. A beloved companion seeking affection. ${miradas.gato_frontal}`] },
  ],

  perro_grande: [
    { id: 'PG1', variantes: [`${framings.bust_portrait} ${perro_global} POSE — MAJESTIC RECLINE: The massive dog lies at ease, its broad chest resting proudly. Both front legs extend forward organically. Head held up with confident, noble calm. ${miradas.perro_offlens}`] },
    { id: 'PG3', variantes: [`${framings.bust_portrait} ${perro_global} POSE — SEATED POWER: The dog sits upright, anchoring nicely into the cushion. The broad chest pushes forward naturally with high confidence. A commanding posture. ${miradas.perro_directo}`] },
    
    // POSES EMOCIONALES Y DE ESTATUS (PERROS GRANDES)
    { id: 'PG10', variantes: [`${framings.bust_portrait} ${perro_global} POSE — THE COMMANDER'S RECLINE: The dog lies powerfully on the cushion. Front legs extend forward with highly organic asymmetry: one leg straight, the other casually folded. Breathing, statuesque presence. ${miradas.perro_directo}`] },
    { id: 'PG11', variantes: [`${framings.close_crop} ${perro_global} POSE — SWEET CHIN REST: The ultimate expression of devotion. The dog lies down and rests its heavy head flat directly ON TOP OF its crossed front paws. The eyes project immense soulfulness and emotional dependency. Heart-melting composition. ${miradas.perro_offlens}`] },
    { id: 'PG12', variantes: [`${framings.bust_portrait} ${perro_global} POSE — THE LOYAL TILT: The dog sits with an adorable, pronounced head tilt. The ears reflect sweet curiosity. The chest leans slightly forward as if seeking a caress. Pure, unconditional love. ${miradas.perro_headtilt}`] },
  ],

  perro_mediano: [
    { id: 'PM1', variantes: [`${framings.bust_portrait} ${perro_global} POSE — RELAXED RECLINE: The dog lies comfortably, chest resting proudly. Front legs extended naturally, paws overlapping with organic asymmetry. ${miradas.perro_offlens}`] },
    { id: 'PM2', variantes: [`${framings.bust_portrait} ${perro_global} POSE — SEATED NOBLE: The dog sits upright, tall spine. Chest forward naturally with confidence. A majestic, breathing posture. ${miradas.perro_directo}`] },
    
    // POSES EMOCIONALES Y DE ESTATUS (PERROS MEDIANOS)
    { id: 'PM10', variantes: [`${framings.bust_portrait} ${perro_global} POSE — THE HAUGHTY SNOB: The dog sits upright. The CHIN is tilted upward in a distinct gesture of aristocratic superiority. The chest is puffed out proudly. Organic, elegant arrogance. ${miradas.perro_offlens}`] },
    { id: 'PM11', variantes: [`${framings.close_crop} ${perro_global} POSE — SWEET CHIN REST: The ultimate expression of devotion. The dog rests its head flat directly ON TOP OF its crossed front paws. Absolute comfort and surrender. ${miradas.perro_offlens}`] },
    { id: 'PM12', variantes: [`${framings.bust_portrait} ${perro_global} POSE — THE INNOCENT TILT: The dog sits gracefully. The HEAD is tilted naturally and adorably to one side. Posture is soft, projecting sweet vulnerability. ${miradas.perro_headtilt}`] },
  ],

  perro_pequeno: [
    { id: 'PP1', variantes: [`${framings.bust_portrait} ${perro_global} POSE — SEATED UPRIGHT FORMAL: The small dog sits proudly, keeping a very upright, confident spine. Chest forward. Immense dignity in a small frame. ${miradas.perro_offlens}`] },
    
    // POSES EMOCIONALES Y DE ESTATUS (PERROS PEQUEÑOS)
    { id: 'PP10', variantes: [`${framings.contrast_scale} ${perro_global} POSE — THE MICRO-MONARCH: The tiny dog sits proudly in the center of an IMMENSE, over-sized velvet cushion. The vast scale highlights the animal's noble heart. Adorable but regal. ${miradas.perro_directo}`] },
    { id: 'PP11', variantes: [`${framings.bust_portrait} ${perro_global} POSE — THE INNOCENT TILT: The small dog sits with an adorable head tilt. The tiny chest leans slightly forward as if seeking a caress. Projects immense soulfulness. ${miradas.perro_headtilt}`] },
    { id: 'PP12', variantes: [`${framings.close_crop} ${perro_global} POSE — SWEET CHIN REST: The small dog lies down and rests its head flat ON TOP OF its tiny crossed front paws. The eyes project immense soulfulness and sweet emotional dependency. ${miradas.perro_offlens}`] },
  ],

  conejo: [
    { id: 'CO1', variantes: [`${framings.contrast_scale} POSE — THE MICRO-MONARCH: The rabbit sits upright in the center of an IMMENSE, over-sized velvet cushion. Adorable scale contrast. Ears tall, proud posture.`] },
    { id: 'CO2', variantes: [`${framings.bust_portrait} POSE — THE INNOCENT TILT: The rabbit sits gracefully, head tilted adorably to one side. Sweet vulnerability.`] },
  ],
  ave: [
    { id: 'AV1', variantes: [`${framings.bust_portrait} POSE — THE PERCHED SOVEREIGN: The bird stands high with supreme aristocratic pride. One claw grips the heavy velvet mantle organically. Majestic and composed.`] },
  ],
  caballo: [
    { id: 'CA1', variantes: [`${framings.full_body_monumental} POSE — PROUD SQUARE STANCE: The horse stands with massive weight and supreme aristocratic pride. Immense physical power and anatomical volume.`] },
  ],
  reptil: [
    { id: 'RE1', variantes: [`${framings.contrast_scale} POSE — THE MICRO-MONARCH: The reptile rests its heavy mass into an IMMENSE velvet cushion. Sculptural scales, ancient aristocratic posture.`] },
  ],
  pequeno: [
    { id: 'AN1', variantes: [`${framings.contrast_scale} POSE — THE MICRO-MONARCH: The tiny figure stands proudly square in the center of an IMMENSE, over-sized velvet cushion. The vast scale highlights the animal's noble heart.`] },
  ],
  default: [
    { id: 'DF1', variantes: [`${framings.bust_portrait} POSE: The animal rests organically on the cushion with a distinctly proud and elevated posture. Noble, sculptural, and asymmetrical.`] },
  ],
};

// ─── DETECCIÓN DE CATEGORÍA Y ASIGNACIÓN ───────────────────────
function detectarCategoria(especie, raza) {
  const e = (especie || '').toLowerCase();
  const r = (raza || '').toLowerCase();

  if (e.includes('cat') || e.includes('gato') || e.includes('feline')) return 'gato';
  if (e.includes('rabbit') || e.includes('conejo') || e.includes('bunny')) return 'conejo';
  if (e.includes('bird') || e.includes('ave') || e.includes('parrot') || e.includes('loro')) return 'ave';
  if (e.includes('horse') || e.includes('caballo') || e.includes('pony')) return 'caballo';
  if (e.includes('reptile') || e.includes('reptil') || e.includes('lizard') || e.includes('iguana') || e.includes('snake')) return 'reptil';
  if (e.includes('hamster') || e.includes('guinea') || e.includes('ferret') || e.includes('mouse')) return 'pequeno';

  if (e.includes('dog') || e.includes('perro') || e.includes('canine')) {
    const razasGrandes = ['doberman', 'dalmatian', 'golden', 'labrador', 'german shepherd', 'husky', 'rottweiler', 'great dane', 'saint bernard', 'mastiff', 'boxer', 'greyhound', 'akita', 'malamute'];
    const razasPequenas = ['chihuahua', 'yorkshire', 'yorkie', 'maltese', 'pomeranian', 'shih tzu', 'dachshund', 'toy', 'pug', 'french bulldog', 'boston terrier', 'corgi', 'beagle'];

    if (razasGrandes.some(x => r.includes(x))) return 'perro_grande';
    if (razasPequenas.some(x => r.includes(x))) return 'perro_pequeno';
    return 'perro_mediano';
  }

  return 'default';
}

function asignarPose(especie, raza, esNaturalistic = false, poseIndex = null, varianteIndex = null) {
  const categoria = detectarCategoria(especie, raza);
  const pool = poses[categoria] || poses.default;

  const heroPool = pool.filter(p => !p.naturalistic);

  let poseSeleccionada;
  if (poseIndex !== null && poseIndex < heroPool.length) {
    poseSeleccionada = heroPool[poseIndex];
  } else {
    poseSeleccionada = heroPool[Math.floor(Math.random() * heroPool.length)];
  }

  const variantes = poseSeleccionada.variantes;
  if (varianteIndex !== null && varianteIndex < variantes.length) {
    return variantes[varianteIndex];
  }
  return variantes[Math.floor(Math.random() * variantes.length)];
}

module.exports = { asignarPose, poses, detectarCategoria };
