// SECCIÓN 4 — POSES v8
// v8.1 — Ajuste de Autoestima: Poses más erguidas, torsos orgullosos, menos hundimiento en cojines y colas elegantes visibles en gatos.
// v8 — Añadidas 3 nuevas poses maestras (Paw Drape, Royal Nest, Dramatic Turn) para Gatos, Perros Grandes y Medianos.
// v7 — Reescritura escultural de poses. Transición de geometría rígida a física orgánica.

const framings = {
  portrait: `FRAMING: Medium-close portrait crop — the animal fills the frame beautifully. The bottom of the cushion is positioned very close to the bottom edge of the image, with only a tiny sliver of base visible. Allow the body to stretch naturally upwards. Proportions anatomically correct throughout. Do NOT compress or shrink the body.`,
  close_crop: `FRAMING: Close portrait crop. Anchor the cushion near the absolute bottom edge of the canvas. Allow the animal's chest and body to fill the vertical space proudly. Proportions anatomically correct throughout. Do NOT compress or shrink the body.`,
  close_crop_strong: `FRAMING: Extreme close portrait crop — chest and front paws barely visible at bottom edge. Zero floor visible. Body is massive and uncompressed, filling the frame.`,
  full_body: `FRAMING: Full figure on the cushion. The cushion rests very low in the frame to give maximum vertical room for the animal's natural height. Do NOT compress the torso. Proportions anatomically correct throughout.`,
  full_body_monumental: `FRAMING: Monumental composition from head to tail. The base anchors firmly at the bottom border. Anatomically correct, uncompressed, and powerful throughout.`,
  half_body: `FRAMING: The animal shown from head to mid-body. The cushion forms the bottom edge of the frame. The spine and chest expand naturally upwards without vertical compression.`,
};

const miradas = {
  // GATOS
  gato_offlens:     `Eyes directed just slightly off the camera lens — as if looking at the painter standing beside the easel. Natural, alive, sovereign.`,
  gato_lateral:     `Eyes directed lazily to the side — natural, as if a minor movement caught the cat's attention. Head stays forward, only the eyes move with aristocratic indifference.`,
  gato_elevada:     `Eyes directed slightly upward and to the side — contemplative, detached, carrying ancient intelligence.`,
  gato_indiferente: `Eyes directed very slightly downward. The cat has more important things to think about than the viewer. Total indifference and regal ease.`,
  gato_frontal:     `Eyes look directly at the viewer — straight ahead, piercing, confident and direct.`,
  gato_headtilt:    `Head faces viewer with a subtle, organic tilt to one side. Eyes look directly at the viewer — a rare moment of feline curiosity.`,

  // PERROS
  perro_offlens:  `Eyes directed just slightly off the camera lens — as if looking at the master standing beside the painter. Warm, loyal, breathing.`,
  perro_girada:   `Head turned naturally to one side — the heavy folds of the neck shifting organically. Natural, relaxed, confident.`,
  perro_headtilt: `Head tilted slightly to one side, eyes directed at the viewer with genuine curiosity — tender, highly expressive, alive.`,
  perro_directo:  `Eyes looking straight at the viewer — confident, powerful, direct soul-to-soul connection.`,
};

// ─── INSTRUCCIONES GLOBALES DE FÍSICA Y MASA ─────────────────────────────────

const perro_global = `CRITICAL — PRESERVE EXACT ANATOMY, EXPRESSION & PHYSICAL MASS: Study the reference photo carefully. You MUST perfectly preserve the specific bone structure, leg thickness, leg length, and chest width of the reference animal. The generated body and paws MUST match this exact anatomy, but presented in its most proud, majestic, and elevated posture. Flesh and thick muscular limbs must look three-dimensional and natural, but the core posture remains confident and upright. Transform this specific anatomical reality into a classical royal oil painting.`;
const gato_global = `CRITICAL — PRESERVE EXACT ANATOMY, FLUIDITY & MASS: Study the reference photo carefully. You MUST perfectly preserve the specific bone structure, limb thickness, and proportions of THIS specific cat. The feline body carries undeniable physical weight, resting organically on the cushion but maintaining a proud, slightly elevated, and sovereign posture. The pose must feel relaxed yet aristocratic and sculptural. Never perfectly symmetrical.`;

// ─── POSES ───────────────────────────────────────────────────────────────────

const poses = {

  // ═══════════════════════════════════════════════════════════════════════════
  // GATO
  // ═══════════════════════════════════════════════════════════════════════════
  gato: [
    // G1a — Sphinx derecha
    {
      id: 'G1a',
      variantes: [
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX RIGHT: The cat rests with aristocratic ease. The CHEST is held proudly, slightly elevated and resting naturally on the velvet cushion without sinking deeply. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the right with a relaxed, upright curve. The HEAD is held high with supreme sovereign dignity. A graceful portion of the fluffy TAIL curls elegantly into view. ${miradas.gato_offlens}`,
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX RIGHT: The cat rests with aristocratic ease. The CHEST is held proudly, slightly elevated and resting naturally on the velvet cushion without sinking deeply. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the right with a relaxed, upright curve. The HEAD is held high with supreme sovereign dignity. A graceful portion of the fluffy TAIL curls elegantly into view. ${miradas.gato_lateral}`,
      ]
    },

    // G1b — Sphinx izquierda
    {
      id: 'G1b',
      variantes: [
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX LEFT: The cat rests with aristocratic ease. The CHEST is held proudly, slightly elevated and resting naturally on the velvet cushion without sinking deeply. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the left with a relaxed, upright curve. The HEAD is held high with supreme sovereign dignity. A graceful portion of the fluffy TAIL curls elegantly into view. ${miradas.gato_offlens}`,
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX LEFT: The cat rests with aristocratic ease. The CHEST is held proudly, slightly elevated and resting naturally on the velvet cushion without sinking deeply. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the left with a relaxed, upright curve. The HEAD is held high with supreme sovereign dignity. A graceful portion of the fluffy TAIL curls elegantly into view. ${miradas.gato_lateral}`,
      ]
    },

    // G1c — Paw Drape (Pata Colgante)
    {
      id: 'G1c',
      variantes: [
        `${framings.portrait} ${gato_global} POSE — RELAXED PAW DRAPE: The cat reclines luxuriously with a proud spine. While the body rests organically on the cushion, ONE FRONT PAW is draped lazily over the front edge of the cushion, hanging down. Supreme aristocratic indifference. A hint of the elegant tail is visible. ${miradas.gato_indiferente}`,
        `${framings.portrait} ${gato_global} POSE — RELAXED PAW DRAPE: The cat reclines luxuriously with a proud spine. While the body rests organically on the cushion, ONE FRONT PAW is draped lazily over the front edge of the cushion, hanging down. Supreme aristocratic indifference. A hint of the elegant tail is visible. ${miradas.gato_lateral}`,
      ]
    },

    // G2 — Upright asimétrico
    {
      id: 'G2',
      variantes: [
        `${framings.close_crop} ${gato_global} POSE — SEATED SOVEREIGN: The cat sits upright, anchoring nicely into the cushion's tufts without compressing the body. The FRONT PAWS rest elegantly on the surface, one paw slightly ahead of the other, breaking perfect symmetry. The spine follows a graceful, proud, upward line. The weight is distributed organically. The TAIL wraps elegantly around the side of the body. ${miradas.gato_frontal}`,
        `${framings.close_crop} ${gato_global} POSE — SEATED SOVEREIGN: The cat sits upright, anchoring nicely into the cushion's tufts without compressing the body. The FRONT PAWS rest elegantly on the surface, one paw slightly ahead of the other, breaking perfect symmetry. The spine follows a graceful, proud, upward line. The weight is distributed organically. The TAIL wraps elegantly around the side of the body. ${miradas.gato_lateral}`,
      ]
    },

    // G3 — Three quarter
    {
      id: 'G3',
      noJuntoA: ['G2'],
      variantes: [
        `${framings.portrait} ${gato_global} POSE — THREE QUARTER TURN: The cat rests proudly on the cushion. The BODY is turned 3/4 away, revealing the graceful, elevated curve of the flank and spine. The HEAD is turned back toward the viewer over the shoulder — a sharp, confident neck rotation with organic folds. The majestic tail flows into the frame. ${miradas.gato_offlens}`,
        `${framings.portrait} ${gato_global} POSE — THREE QUARTER TURN: The cat rests proudly on the cushion. The BODY is turned 3/4 away, revealing the graceful, elevated curve of the flank and spine. The HEAD is turned back toward the viewer over the shoulder — a sharp, confident neck rotation with organic folds. The majestic tail flows into the frame. ${miradas.gato_lateral}`,
      ]
    },

    // G7 — Royal Nest (Interacción con la capa)
    {
      id: 'G7',
      variantes: [
        `${framings.portrait} ${gato_global} POSE — ROYAL NEST: The cat reclines proudly. Crucially, ONE FRONT PAW rests elegantly directly ON TOP OF the thick folds of its own velvet mantle. The animal and its royal garments are physically intertwined, projecting high self-esteem. A piece of the tail is visible blending with the velvet. ${miradas.gato_offlens}`,
        `${framings.portrait} ${gato_global} POSE — ROYAL NEST: The cat reclines proudly. Crucially, ONE FRONT PAW rests elegantly directly ON TOP OF the thick folds of its own velvet mantle. The animal and its royal garments are physically intertwined, projecting high self-esteem. A piece of the tail is visible blending with the velvet. ${miradas.gato_elevada}`,
      ]
    },

    // G4 — Loaf
    {
      id: 'G4',
      variantes: [
        `${framings.close_crop} ${gato_global} POSE — SCULPTURAL LOAF: The cat rests as a compact, volumetric mass on the cushion, but keeping the chest and head confidently elevated. FRONT PAWS are completely tucked and hidden. The body is an organic mound of fur shifting naturally to one side. A graceful tip of the tail curls nearby. Supreme comfort and regal dignity. ${miradas.gato_headtilt}`,
        `${framings.close_crop} ${gato_global} POSE — SCULPTURAL LOAF: The cat rests as a compact, volumetric mass on the cushion, but keeping the chest and head confidently elevated. FRONT PAWS are completely tucked and hidden. The body is an organic mound of fur shifting naturally to one side. A graceful tip of the tail curls nearby. Supreme comfort and regal dignity. ${miradas.gato_lateral}`,
      ]
    },

    // G5a / G5b / G6... 
    { id: 'G5a', variantes: [`${framings.close_crop} ${gato_global} POSE — ALIGNED LEFT: The cat's BODY and HEAD flow proudly to the left. Anchored heavy hindquarters on the cushion, but upright posture. Front paws rest organically, one draped slightly ahead of the other. ${miradas.gato_frontal}`] },
    { id: 'G5b', variantes: [`${framings.close_crop} ${gato_global} POSE — ALIGNED RIGHT: The cat's BODY and HEAD flow proudly to the right. Anchored heavy hindquarters on the cushion, but upright posture. Front paws rest organically, one draped slightly ahead of the other. ${miradas.gato_frontal}`] },
    { id: 'G6', naturalistic: true, variantes: [`${framings.portrait} ${gato_global} POSE — NATURALISTIC: Faithfully recreate the cat's natural pose from the reference photo, but slightly enhance the posture to look more upright, proud, and majestic. Transform into a royal oil painting while keeping the physical truth of the animal faithful.`] },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PERRO GRANDE
  // ═══════════════════════════════════════════════════════════════════════════
  perro_grande: [

    // PG1 — Landseer Recline
    {
      id: 'PG1',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — MAJESTIC RECLINE: The massive dog lies at ease, its broad chest resting proudly and slightly elevated on the cushion. Both front legs extend forward, paws draped naturally and asymmetrically. Head held up with a confident, noble calm. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — MAJESTIC RECLINE: The massive dog lies at ease, its broad chest resting proudly and slightly elevated on the cushion. Both front legs extend forward, paws draped naturally and asymmetrically. Head held up with a confident, noble calm. ${miradas.perro_girada}`,
      ]
    },

    // PG1b — Paw Drape (Pata Colgante)
    {
      id: 'PG1b',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — RELAXED PAW DRAPE: The heavy dog reclines with immense, proud power. ONE FRONT LEG is draped lazily over the front edge of the cushion, the heavy paw hanging down. The other paw rests tucked. Extreme organic asymmetry and confident physical ease. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — RELAXED PAW DRAPE: The heavy dog reclines with immense, proud power. ONE FRONT LEG is draped lazily over the front edge of the cushion, the heavy paw hanging down. The other paw rests tucked. Extreme organic asymmetry and confident physical ease. ${miradas.perro_headtilt}`,
      ]
    },

    // PG2 — Sphinx Noble
    {
      id: 'PG2',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — SPHINX COMMANDING: The chest is held proudly and resting naturally on the cushion without sinking deeply. Front legs extend powerfully forward, one paw planted firmly ahead of the other. The neck is thick and organic, head held high with absolute authority and self-esteem. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — SPHINX COMMANDING: The chest is held proudly and resting naturally on the cushion without sinking deeply. Front legs extend powerfully forward, one paw planted firmly ahead of the other. The neck is thick and organic, head held high with absolute authority and self-esteem. ${miradas.perro_directo}`,
      ]
    },

    // PG3 — Seated Proud
    {
      id: 'PG3',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — SEATED POWER: The dog sits upright, anchoring nicely into the cushion with a proud, elevated spine. The broad chest pushes forward naturally with high confidence. One front paw is planted slightly ahead of the other. A majestic, commanding posture. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — SEATED POWER: The dog sits upright, anchoring nicely into the cushion with a proud, elevated spine. The broad chest pushes forward naturally with high confidence. One front paw is planted slightly ahead of the other. A majestic, commanding posture. ${miradas.perro_girada}`,
      ]
    },

    // PG4 — Three Quarter
    {
      id: 'PG4',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — THREE QUARTER MASS: The dog's heavy body is turned 3/4 to the side with an upright, confident bearing. The head turns powerfully back over the shoulder toward the viewer. Dynamic, highly dignified presence. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — THREE QUARTER MASS: The dog's heavy body is turned 3/4 to the side with an upright, confident bearing. The head turns powerfully back over the shoulder toward the viewer. Dynamic, highly dignified presence. ${miradas.perro_directo}`,
      ]
    },

    // PG6 — Dramatic Turn 
    {
      id: 'PG6',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — DRAMATIC SHOULDER TURN: The dog's body faces almost completely away from the viewer, showing the heavy drape of the velvet mantle on its proud back. The thick, muscular neck turns sharply back over the shoulder. A masterful, confident pose. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — DRAMATIC SHOULDER TURN: The dog's body faces almost completely away from the viewer, showing the heavy drape of the velvet mantle on its proud back. The thick, muscular neck turns sharply back over the shoulder. A masterful, confident pose. ${miradas.perro_directo}`,
      ]
    },

    // PG7 — Royal Nest
    {
      id: 'PG7',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — ROYAL NEST: The dog reclines proudly. ONE FRONT PAW rests directly ON TOP OF the thick folds of its own velvet mantle. The animal interacts physically with its royal garments with an air of superiority and regal ease. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — ROYAL NEST: The dog reclines proudly. ONE FRONT PAW rests directly ON TOP OF the thick folds of its own velvet mantle. The animal interacts physically with its royal garments with an air of superiority and regal ease. ${miradas.perro_girada}`,
      ]
    },

    // PG5 — Naturalistic
    { id: 'PG5', naturalistic: true, variantes: [`${framings.portrait} ${perro_global} POSE — NATURALISTIC: Faithfully recreate the dog's natural pose from the reference photo, but slightly elevate the chest and posture to project more aristocratic confidence and pride. Transform into a heavy, royal oil painting.`] },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PERRO MEDIANO
  // ═══════════════════════════════════════════════════════════════════════════
  perro_mediano: [
    {
      id: 'PM1',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — RELAXED RECLINE: The dog lies comfortably, chest resting proudly and slightly elevated on the proportional cushion. Front legs extended naturally, paws overlapping with organic asymmetry. Head held with high noble dignity. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — RELAXED RECLINE: The dog lies comfortably, chest resting proudly and slightly elevated on the proportional cushion. Front legs extended naturally, paws overlapping with organic asymmetry. Head held with high noble dignity. ${miradas.perro_girada}`,
      ]
    },

    // PM1b — Paw Drape 
    {
      id: 'PM1b',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — RELAXED PAW DRAPE: The dog reclines comfortably with a proud bearing. ONE FRONT LEG is draped lazily over the front edge of the cushion, hanging down with natural gravity. Supreme organic asymmetry and relaxed, confident elegance. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — RELAXED PAW DRAPE: The dog reclines comfortably with a proud bearing. ONE FRONT LEG is draped lazily over the front edge of the cushion, hanging down with natural gravity. Supreme organic asymmetry and relaxed, confident elegance. ${miradas.perro_headtilt}`,
      ]
    },

    {
      id: 'PM2',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — SEATED NOBLE: The dog sits upright, weight anchored nicely into the cushion with a proud, tall spine. Chest forward naturally with confidence, one paw planted slightly ahead. A majestic, breathing posture, not rigid. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — SEATED NOBLE: The dog sits upright, weight anchored nicely into the cushion with a proud, tall spine. Chest forward naturally with confidence, one paw planted slightly ahead. A majestic, breathing posture, not rigid. ${miradas.perro_girada}`,
      ]
    },
    {
      id: 'PM3',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — THREE QUARTER GRACE: Body turned elegantly 3/4 with proud posture. Head turns back to the viewer with natural skin folds at the neck. Confident, aristocratic presence. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — THREE QUARTER GRACE: Body turned elegantly 3/4 with proud posture. Head turns back to the viewer with natural skin folds at the neck. Confident, aristocratic presence. ${miradas.perro_directo}`,
      ]
    },

    // PM6 — Royal Nest
    {
      id: 'PM6',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — ROYAL NEST: The dog reclines nicely but proudly. ONE FRONT PAW rests directly ON TOP OF the folds of its own velvet mantle. The animal interacts physically with its royal garments, showing high self-esteem. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — ROYAL NEST: The dog reclines nicely but proudly. ONE FRONT PAW rests directly ON TOP OF the folds of its own velvet mantle. The animal interacts physically with its royal garments, showing high self-esteem. ${miradas.perro_headtilt}`,
      ]
    },

    { id: 'PM4', variantes: [`${framings.portrait} ${perro_global} POSE — SEATED ANGLED: Seated with body naturally angled 20 degrees, displaying a proud, upright torso. One paw placed elegantly ahead. ${miradas.perro_offlens}`] },
    { id: 'PM5', naturalistic: true, variantes: [`${framings.portrait} ${perro_global} POSE — NATURALISTIC: Faithfully recreate the dog's natural pose from the reference photo, but adjust the posture slightly to be more upright, confident, and aristocratic. Transform into a classical oil painting.`] },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PERRO PEQUEÑO, CONEJO, AVE, CABALLO, REPTIL, PEQUEÑO
  // ═══════════════════════════════════════════════════════════════════════════
  perro_pequeno: [
    { id: 'PP1', variantes: [`${framings.portrait} ${perro_global} POSE — SEATED UPRIGHT FORMAL: The small dog sits proudly, its small body nestled into the grand velvet cushion but keeping a very upright, confident spine. Chest forward. Immense dignity and self-esteem in a small frame. ${miradas.perro_offlens}`] },
    { id: 'PP2', variantes: [`${framings.portrait} ${perro_global} POSE — SEATED ANGLED: The small dog sits angled 20 degrees with a proud, elevated posture, creating sculptural volume. Anchored firmly on the cushion. ${miradas.perro_offlens}`] },
    { id: 'PP3', variantes: [`${framings.close_crop_strong} ${perro_global} POSE — CLOSE CROP PORTRAIT: The small dog's deeply volumetric and proud face and chest fill the frame, emerging dramatically from the heavy royal mantle. ${miradas.perro_offlens}`] },
    { id: 'PP4', variantes: [`${framings.portrait} ${perro_global} POSE — THREE QUARTER DYNAMIC: The small dog's body is turned 3/4 with a highly confident bearing. Head turned organically back over the shoulder. ${miradas.perro_offlens}`] },
    { id: 'PP5', naturalistic: true, variantes: [`${framings.portrait} ${perro_global} POSE — NATURALISTIC: Faithfully recreate the small dog's natural pose, but enhance the posture to look noticeably more proud, upright, and royal. Transform into a classical oil painting.`] },
  ],
  conejo: [
    { id: 'CO1', variantes: [`${framings.full_body} POSE — SEATED ALERT: The rabbit sits upright with proud posture, its weight resting naturally into the plush cushion. Ears tall, one paw placed organically ahead of the other.`] },
    { id: 'CO2', variantes: [`${framings.half_body} POSE — LOAF REGAL: The rabbit rests as a compact mass in the cushion, but with a proud, elevated head. Paws tucked deeply. A regal mound of fur.`] },
    { id: 'CO3', variantes: [`${framings.full_body} POSE — THREE QUARTER: Body turned 3/4 with a dignified posture, anchored in the velvet. Head facing viewer. Natural, living volume.`] },
    { id: 'CO4', naturalistic: true, variantes: [`${framings.full_body} POSE — NATURALISTIC: Faithfully recreate the rabbit's natural volumetric pose, but ensure an elegant, proud bearing.`] },
  ],
  ave: [
    { id: 'AV1', variantes: [`${framings.full_body} POSE — PERCHED UPRIGHT: The bird perches with majestic, highly proud posture, talons gripping the heavy velvet organically. Wings folded naturally to the body's volume.`] },
    { id: 'AV2', variantes: [`${framings.full_body} POSE — STANDING FORMAL: The bird stands with immense dignity and elevated chest on the cushion. Feathers painted with sculptural thickness.`] },
    { id: 'AV3', variantes: [`${framings.full_body} POSE — THREE QUARTER PERCH: 3/4 profile with a sovereign posture, gripping the velvet organically. Head turned to face viewer. Sculptural and composed.`] },
    { id: 'AV4', naturalistic: true, variantes: [`${framings.full_body} POSE — NATURALISTIC: Faithfully recreate the bird's natural pose, elevating the posture slightly for a royal, proud stance.`] },
  ],
  caballo: [
    { id: 'CA1', variantes: [`${framings.full_body_monumental} POSE — PROUD SQUARE STANCE: The horse stands with massive, monumental weight and supreme aristocratic pride. All four hooves planted firmly, showing immense physical power and anatomical volume. 3/4 angle.`] },
    { id: 'CA2', variantes: [`${framings.full_body_monumental} POSE — PROFILE NOBLE: Deep, heavy profile stance with a highly elevated, proud neck. The royal mantle drapes with profound gravity across the powerful back.`] },
    { id: 'CA3', variantes: [`${framings.full_body_monumental} POSE — THREE QUARTER DYNAMIC: 3/4 angle. Legs staggered organically, suggesting massive weight shifting with regal confidence. Dynamic, breathing volume.`] },
    { id: 'CA4', naturalistic: true, variantes: [`${framings.full_body_monumental} POSE — NATURALISTIC: Faithfully recreate the horse's natural massive pose, but ensure the neck and chest project maximum royal pride and power.`] },
  ],
  reptil: [
    { id: 'RE1', variantes: [`${framings.full_body} POSE — SPHINX REGAL: The reptile rests its heavy, cold-blooded mass into the velvet cushion with a proud, elevated head. Sculptural scales, ancient aristocratic posture.`] },
    { id: 'RE2', variantes: [`${framings.full_body} POSE — ELEVATED ALERT: Upright proudly on front legs, the heavy belly resting organically. Dignified, ancient, confident.`] },
    { id: 'RE3', variantes: [`${framings.full_body} POSE — THREE QUARTER REST: 3/4 position with a sovereign aura, heavy tail dragging naturally. Thick, tactile scales.`] },
    { id: 'RE4', naturalistic: true, variantes: [`${framings.full_body} POSE — NATURALISTIC: Faithfully recreate the reptile's natural pose, enhancing the posture to look more dominant and royal.`] },
  ],
  pequeno: [
    { id: 'AN1', variantes: [`${framings.full_body} POSE — SEATED REGAL: The small animal sits upright with surprising pride and dignity, its tiny body resting organically into the immense plush cushion.`] },
    { id: 'AN2', variantes: [`${framings.close_crop} POSE — ALERT FRONTAL: Sits alert with a proud chest, weight anchored naturally. Small but possessing dense, confident volume.`] },
    { id: 'AN3', variantes: [`${framings.full_body} POSE — THREE QUARTER: 3/4 angle. The small body creates a natural indentation in the velvet throne, projecting aristocratic confidence.`] },
    { id: 'AN4', naturalistic: true, variantes: [`${framings.full_body} POSE — NATURALISTIC: Faithfully recreate the animal's natural pose, but give it a slightly more elevated, proud bearing.`] },
  ],
  default: [
    { id: 'DF1', variantes: [`${framings.portrait} POSE: The animal rests organically on the cushion with a distinctly proud and elevated posture. Noble, sculptural, and asymmetrical.`] },
  ],
};

// ─── DETECCIÓN DE CATEGORÍA Y ASIGNACIÓN ───────────────────────
function detectarCategoria(especie, raza) {
  const e = (especie || '').toLowerCase();
  const r = (raza || '').toLowerCase();

  if (e.includes('cat') || e.includes('gato') || e.includes('feline')) return 'gato';
  if (e.includes('rabbit') || e.includes('conejo') || e.includes('bunny')) return 'conejo';
  if (e.includes('bird') || e.includes('ave') || e.includes('parrot') ||
      e.includes('loro') || e.includes('canary') || e.includes('cockatiel') ||
      e.includes('parakeet')) return 'ave';
  if (e.includes('horse') || e.includes('caballo') || e.includes('pony') ||
      e.includes('mare') || e.includes('stallion')) return 'caballo';
  if (e.includes('reptile') || e.includes('reptil') || e.includes('lizard') ||
      e.includes('iguana') || e.includes('snake') || e.includes('serpiente') ||
      e.includes('gecko') || e.includes('tortoise') || e.includes('turtle') ||
      e.includes('chameleon')) return 'reptil';
  if (e.includes('hamster') || e.includes('guinea') || e.includes('cobaya') ||
      e.includes('gerbil') || e.includes('ferret') || e.includes('chinchilla') ||
      e.includes('rat') || e.includes('mouse') || e.includes('hedgehog')) return 'pequeno';

  if (e.includes('dog') || e.includes('perro') || e.includes('canine')) {
    const razasGrandes = ['doberman', 'dalmatian', 'golden', 'labrador', 'german shepherd',
      'husky', 'rottweiler', 'great dane', 'saint bernard', 'mastiff',
      'bernese', 'boxer', 'weimaraner', 'vizsla', 'pointer', 'setter',
      'greyhound', 'akita', 'malamute', 'newfoundland', 'leonberger'];
    const razasPequenas = ['chihuahua', 'yorkshire', 'yorkie', 'maltese', 'pomeranian',
      'shih tzu', 'dachshund', 'miniature', 'toy', 'papillon',
      'pug', 'french bulldog', 'boston terrier', 'cavalier', 'bichon',
      'schnauzer mini', 'jack russell', 'corgi', 'beagle'];

    if (razasGrandes.some(x => r.includes(x))) return 'perro_grande';
    if (razasPequenas.some(x => r.includes(x))) return 'perro_pequeno';
    return 'perro_mediano';
  }

  return 'default';
}

function asignarPose(especie, raza, esNaturalistic = false, poseIndex = null, varianteIndex = null) {
  const categoria = detectarCategoria(especie, raza);
  const pool = poses[categoria] || poses.default;

  if (esNaturalistic) {
    const natural = pool.find(p => p.naturalistic);
    if (natural) return natural.variantes[0];
  }

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
