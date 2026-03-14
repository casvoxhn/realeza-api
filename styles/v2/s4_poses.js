// SECCIÓN 4 — POSES v10.0 (MUSEUM GRADE & PYRAMID COMPOSITION)
// Optimizadas para Nano Banana 2: Foco en asimetría orgánica, proporciones estrictas y cero "look IA".

const framings = {
  portrait: `FRAMING: Medium-close portrait crop. PYRAMID COMPOSITION: The animal's head is the apex. The cushion MUST sit exactly at the absolute bottom edge of the canvas, bleeding off the bottom and sides. ZERO floor visible. ZERO stone ledge. This anchors the image heavily. The animal's chest and head stretch naturally upward filling the top 80% of the frame. Do NOT compress or shrink the body.`,
  close_crop: `FRAMING: Close portrait crop. Anchor the cushion firmly off the absolute bottom edge of the canvas. ZERO floor visible. Allow the animal's chest and body to fill the vertical space proudly. Proportions anatomically correct throughout.`,
  close_crop_strong: `FRAMING: Extreme close portrait crop. ZERO floor visible. The cushion bleeds off the bottom edge. Body is massive and uncompressed, chest filling the lower frame, face dominant and highly detailed.`,
  full_body: `FRAMING: Full figure. The cushion bleeds entirely off the bottom edge of the frame. ZERO floor visible. Maximum vertical room for the animal's natural height. Anatomically correct 1:1 scale.`,
};

const miradas = {
  // GATOS
  gato_offlens:     `EYES: Upper eyelid slightly overlaps the iris. Deep, crystal-clear liquid cornea. Soft, diffused ambient catchlight (NO sharp white dots). Gaze directed slightly off-camera, breathing, alive, and PRISTINELY CLEAN. Zero tear staining.`,
  gato_lateral:     `EYES: Upper eyelid slightly overlaps the iris. Deep crystal-clear liquid volume. Eyes directed lazily to the side. Aristocratic indifference. Pristinely clean.`,
  gato_elevada:     `EYES: Upper eyelid slightly overlaps the iris. Deep crystal-clear liquid volume. Eyes directed slightly upward — contemplative, carrying ancient intelligence. Pristinely clean.`,
  gato_frontal:     `EYES: Upper eyelid slightly overlaps the iris. Deep crystal-clear liquid cornea. Pupils are sharp. Piercing, confident, direct soul-to-soul connection. Pristinely clean.`,
  gato_headtilt:    `EYES: Upper eyelid slightly overlaps the iris. Deep crystal-clear liquid volume. Head faces viewer with a subtle, organic tilt. A rare moment of feline curiosity. Pristinely clean.`,

  // PERROS
  perro_offlens:  `EYES: Warm, loyal, and liquid. Cornea is crystal-clear with zero discharge. Upper lid creates a soft shadow over the iris. Soft, diffused catchlight. Gaze directed just slightly off the camera lens. Pristinely clean.`,
  perro_girada:   `EYES: Warm, loyal, liquid, and crystal-clear. Upper lid creates a soft shadow. Head turned naturally, eyes following. Natural, relaxed. Pristinely clean.`,
  perro_headtilt: `EYES: Warm, loyal, liquid. Cornea is crystal-clear. Head tilted adorably, eyes directed at the viewer with genuine curiosity and deep soulfulness. Pristinely clean.`,
  perro_directo:  `EYES: Powerful direct gaze. Wet, crystal-clear, and alive with a soft diffused catchlight. Upper lid shadows the iris. Confident, direct connection. Pristinely clean.`,
};

const anti_ai_physics = `ANTI-AI PHYSICS (CRITICAL): Strictly avoid "glassy", "taxidermy", or "plastic" eyes. Treat the eye as a biological organ. NO perfect white dot reflections. NEVER perfectly symmetrical; capture the organic asymmetry of a real living creature. Faces must be PRISTINELY CLEAN, zero invented dirt or tear stains. Maintain strict 1:1 anatomical scale with the reference — DO NOT elongate necks, shrink heads, or distort proportions.`;

const perro_global = `CRITICAL — PRESERVE EXACT ANATOMY & MASS: Study the reference photo forensically. You MUST perfectly preserve the specific bone structure, leg thickness, snout length, and chest width of THIS exact dog. Transform this specific anatomical reality into a classical royal oil painting with visible, tactile brushwork. ${anti_ai_physics}`;

const gato_global = `CRITICAL — PRESERVE EXACT ANATOMY & FLUIDITY: Study the reference photo forensically. You MUST perfectly preserve the specific bone structure, snout shape, ear placement, and proportions of THIS exact cat. The body carries undeniable physical weight, resting organically. Never perfectly symmetrical. Let natural fur volume flow organically. ${anti_ai_physics}`;

const poses = {
  gato: [
    { id: 'G1a', variantes: [`${framings.portrait} ${gato_global} POSE — ROYAL SPHINX: Chest held proudly, resting naturally on the cushion. Front paws extended forward, crossed elegantly with natural asymmetry. Body shifts slightly to one side. ${miradas.gato_offlens}`] },
    { id: 'G1c', variantes: [`${framings.portrait} ${gato_global} POSE — RELAXED PAW DRAPE: Reclines luxuriously with a proud spine. ONE FRONT PAW is draped lazily over the front edge of the cushion, hanging down. ${miradas.gato_lateral}`] },
    { id: 'G2', variantes: [`${framings.close_crop} ${gato_global} POSE — SEATED SOVEREIGN: Sits upright. Front paws rest elegantly, one slightly ahead of the other breaking symmetry. Proud, upward spine. ${miradas.gato_frontal}`] },
    { id: 'G3', variantes: [`${framings.portrait} ${gato_global} POSE — THREE QUARTER TURN: Body is turned 3/4 away, revealing the graceful curve of the flank. Head turns back toward the viewer over the shoulder with organic neck folds. ${miradas.gato_offlens}`] },
    { id: 'G7', variantes: [`${framings.portrait} ${gato_global} POSE — ROYAL NEST: Reclines proudly. Crucially, ONE FRONT PAW rests elegantly directly ON TOP OF the thick folds of its own velvet mantle. ${miradas.gato_elevada}`] },
    { id: 'G4', variantes: [`${framings.close_crop} ${gato_global} POSE — SCULPTURAL LOAF: Compact, volumetric mass. Front paws are tucked and hidden. The body is an organic mound of fur shifting naturally to one side. ${miradas.gato_headtilt}`] },
    
    // Poses Emocionales (Awww)
    { id: 'G8', variantes: [`${framings.close_crop} ${gato_global} POSE — INNOCENT TILT: Head is tilted naturally and adorably to one side, projecting sweet vulnerability. Front paws tucked neatly. Pure, wide-eyed affection. ${miradas.gato_headtilt}`] },
    { id: 'G9', variantes: [`${framings.portrait} ${gato_global} POSE — SWEET DEMURE: ONE FRONT PAW is delicately placed over the other in a sweet, demure gesture. Beloved, pampered companion offering gentle affection. ${miradas.gato_frontal}`] },
  ],

  perro_grande: [
    { id: 'PG1', variantes: [`${framings.portrait} ${perro_global} POSE — MAJESTIC RECLINE: Broad chest resting proudly. Both front legs extend forward, paws draped asymmetrically. Noble calm. ${miradas.perro_offlens}`] },
    { id: 'PG1b', variantes: [`${framings.portrait} ${perro_global} POSE — RELAXED PAW DRAPE: ONE FRONT LEG is draped lazily over the front edge of the cushion, paw hanging down. Extreme organic asymmetry. ${miradas.perro_offlens}`] },
    { id: 'PG2', variantes: [`${framings.portrait} ${perro_global} POSE — SPHINX COMMANDING: Chest held proudly. Front legs extend powerfully, one planted firmly ahead of the other. Thick, organic neck. ${miradas.perro_directo}`] },
    { id: 'PG4', variantes: [`${framings.portrait} ${perro_global} POSE — THREE QUARTER MASS: Heavy body turned 3/4 to the side. Head turns powerfully back over the shoulder. Dynamic, highly dignified. ${miradas.perro_offlens}`] },
    { id: 'PG7', variantes: [`${framings.portrait} ${perro_global} POSE — ROYAL NEST: ONE FRONT PAW rests directly ON TOP OF the thick folds of its own velvet mantle. Regal ease. ${miradas.perro_girada}`] },
    
    // Poses Emocionales (Awww)
    { id: 'PG8', variantes: [`${framings.close_crop} ${perro_global} POSE — THE LOYAL TILT: Adorable, pronounced head tilt to one side. Chest leans slightly forward seeking a caress. Pure, unconditional love. ${miradas.perro_headtilt}`] },
    { id: 'PG9', variantes: [`${framings.close_crop} ${perro_global} POSE — SWEET CHIN REST: Ultimate devotion. Heavy head rests flat directly ON TOP OF its crossed front paws on the cushion. Immense soulfulness looking up. ${miradas.perro_offlens}`] },
  ],

  perro_mediano: [
    { id: 'PM1', variantes: [`${framings.portrait} ${perro_global} POSE — RELAXED RECLINE: Chest resting proudly. Paws overlapping with organic asymmetry. High noble dignity. ${miradas.perro_offlens}`] },
    { id: 'PM1b', variantes: [`${framings.portrait} ${perro_global} POSE — RELAXED PAW DRAPE: ONE FRONT LEG is draped lazily over the front edge, hanging down with natural gravity. ${miradas.perro_headtilt}`] },
    { id: 'PM2', variantes: [`${framings.portrait} ${perro_global} POSE — SEATED NOBLE: Sits upright with a proud, tall spine. One paw planted slightly ahead. Majestic, breathing posture. ${miradas.perro_directo}`] },
    { id: 'PM6', variantes: [`${framings.portrait} ${perro_global} POSE — ROYAL NEST: ONE FRONT PAW rests directly ON TOP OF the folds of its own velvet mantle. ${miradas.perro_offlens}`] },
    
    // Poses Emocionales (Awww)
    { id: 'PM8', variantes: [`${framings.close_crop} ${perro_global} POSE — THE LOYAL TILT: Adorable, pronounced head tilt. Posture drops its aggressive majesty to reveal pure innocence. ${miradas.perro_headtilt}`] },
    { id: 'PM9', variantes: [`${framings.close_crop} ${perro_global} POSE — SWEET CHIN REST: Head rests flat directly ON TOP OF crossed front paws. Looking up from this low, vulnerable position. ${miradas.perro_offlens}`] },
  ],

  perro_pequeno: [
    { id: 'PP1', variantes: [`${framings.portrait} ${perro_global} POSE — SEATED UPRIGHT FORMAL: Sits proudly, small body nestled into the grand cushion but keeping a very upright, confident spine. ${miradas.perro_offlens}`] },
    { id: 'PP3', variantes: [`${framings.close_crop_strong} ${perro_global} POSE — CLOSE CROP PORTRAIT: Deeply volumetric face and chest fill the frame, emerging dramatically from the mantle. ${miradas.perro_offlens}`] },
    
    // Poses Emocionales (Awww)
    { id: 'PP8', variantes: [`${framings.close_crop} ${perro_global} POSE — THE LOYAL TILT: Adorable head tilt. Tiny chest leans slightly forward. Immense soulfulness in a small frame. ${miradas.perro_headtilt}`] },
    { id: 'PP9', variantes: [`${framings.close_crop_strong} ${perro_global} POSE — SWEET CHIN REST: Head rests flat directly ON TOP OF tiny crossed front paws. Sweet emotional dependency. ${miradas.perro_offlens}`] },
  ],
  default: [
    { id: 'DF1', variantes: [`${framings.portrait} POSE: Rests organically on the cushion. Noble, sculptural, and organically asymmetrical.`] },
  ],
};

function detectarCategoria(especie, raza) {
  const e = (especie || '').toLowerCase();
  const r = (raza || '').toLowerCase();
  if (e.includes('cat') || e.includes('gato') || e.includes('feline')) return 'gato';
  if (e.includes('dog') || e.includes('perro') || e.includes('canine')) {
    const razasGrandes = ['doberman', 'dalmatian', 'golden', 'labrador', 'german shepherd', 'husky', 'rottweiler', 'great dane', 'saint bernard', 'mastiff', 'bernese', 'boxer', 'weimaraner', 'pointer', 'greyhound', 'akita', 'malamute'];
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
  let poseSeleccionada = (poseIndex !== null && poseIndex < heroPool.length) ? heroPool[poseIndex] : heroPool[Math.floor(Math.random() * heroPool.length)];
  const variantes = poseSeleccionada.variantes;
  return (varianteIndex !== null && varianteIndex < variantes.length) ? variantes[varianteIndex] : variantes[Math.floor(Math.random() * variantes.length)];
}

module.exports = { asignarPose, poses, detectarCategoria };
