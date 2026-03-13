// SECCIÓN 4 — POSES v8
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

const perro_global = `CRITICAL — PRESERVE EXACT ANATOMY, EXPRESSION & PHYSICAL MASS: Study the reference photo carefully. You MUST perfectly preserve the specific bone structure, leg thickness, leg length, and chest width of the reference animal. If the dog has short, extremely thick, muscular legs and a massive wide chest, the generated body and paws MUST match this exact heavy, thickset anatomy in the new pose. Do not substitute with generic dog proportions. Flesh, jowls, and thick muscular limbs must obey gravity, looking heavy and three-dimensional. Transform this specific anatomical reality into a classical oil painting.`;
const gato_global = `CRITICAL — PRESERVE EXACT ANATOMY, FLUIDITY & MASS: Study the reference photo carefully. You MUST perfectly preserve the specific bone structure, limb thickness, and proportions of THIS specific cat. Do not substitute with a generic feline body. The feline body carries undeniable physical weight, sinking luxuriously and organically into the cushion. The pose must feel relaxed, sovereign, and sculptural. Never perfectly symmetrical.`;

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
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX RIGHT: The cat rests with aristocratic ease. The CHEST is lowered, sinking deeply into the velvet cushion. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the right with a relaxed, organic curve. The HEAD is held high with sovereign dignity. NO tail visible. ${miradas.gato_offlens}`,
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX RIGHT: The cat rests with aristocratic ease. The CHEST is lowered, sinking deeply into the velvet cushion. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the right with a relaxed, organic curve. The HEAD is held high with sovereign dignity. NO tail visible. ${miradas.gato_lateral}`,
      ]
    },

    // G1b — Sphinx izquierda
    {
      id: 'G1b',
      variantes: [
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX LEFT: The cat rests with aristocratic ease. The CHEST is lowered, sinking deeply into the velvet cushion. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the left with a relaxed, organic curve. The HEAD is held high with sovereign dignity. NO tail visible. ${miradas.gato_offlens}`,
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX LEFT: The cat rests with aristocratic ease. The CHEST is lowered, sinking deeply into the velvet cushion. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the left with a relaxed, organic curve. The HEAD is held high with sovereign dignity. NO tail visible. ${miradas.gato_lateral}`,
      ]
    },

    // NUEVA G1c — Paw Drape (Pata Colgante)
    {
      id: 'G1c',
      variantes: [
        `${framings.portrait} ${gato_global} POSE — RELAXED PAW DRAPE: The cat reclines luxuriously. While the body sinks into the cushion, ONE FRONT PAW is draped lazily over the front edge of the cushion, hanging down with heavy, relaxed gravity. Supreme aristocratic indifference. ${miradas.gato_indiferente}`,
        `${framings.portrait} ${gato_global} POSE — RELAXED PAW DRAPE: The cat reclines luxuriously. While the body sinks into the cushion, ONE FRONT PAW is draped lazily over the front edge of the cushion, hanging down with heavy, relaxed gravity. Supreme aristocratic indifference. ${miradas.gato_lateral}`,
      ]
    },

    // G2 — Upright asimétrico
    {
      id: 'G2',
      variantes: [
        `${framings.close_crop} ${gato_global} POSE — SEATED SOVEREIGN: The cat's HINDQUARTERS are anchored deeply into the cushion's tufts. The FRONT PAWS rest elegantly on the surface, one paw slightly ahead of the other, breaking perfect symmetry. The spine follows a graceful, natural line, not stiff. The weight is distributed organically. The TAIL wraps loosely around the body. ${miradas.gato_frontal}`,
        `${framings.close_crop} ${gato_global} POSE — SEATED SOVEREIGN: The cat's HINDQUARTERS are anchored deeply into the cushion's tufts. The FRONT PAWS rest elegantly on the surface, one paw slightly ahead of the other, breaking perfect symmetry. The spine follows a graceful, natural line, not stiff. The weight is distributed organically. The TAIL wraps loosely around the body. ${miradas.gato_lateral}`,
      ]
    },

    // G3 — Three quarter
    {
      id: 'G3',
      noJuntoA: ['G2'],
      variantes: [
        `${framings.portrait} ${gato_global} POSE — THREE QUARTER TURN: The cat's HINDQUARTERS sink into the cushion. The BODY is turned 3/4 away, revealing the graceful curve of the flank and spine. The HEAD is turned back toward the viewer over the shoulder — a sharp, confident neck rotation with organic folds. ${miradas.gato_offlens}`,
        `${framings.portrait} ${gato_global} POSE — THREE QUARTER TURN: The cat's HINDQUARTERS sink into the cushion. The BODY is turned 3/4 away, revealing the graceful curve of the flank and spine. The HEAD is turned back toward the viewer over the shoulder — a sharp, confident neck rotation with organic folds. ${miradas.gato_lateral}`,
      ]
    },

    // NUEVA G7 — Royal Nest (Interacción con la capa)
    {
      id: 'G7',
      variantes: [
        `${framings.portrait} ${gato_global} POSE — ROYAL NEST: The cat reclines deeply. Crucially, ONE FRONT PAW rests heavily directly ON TOP OF the thick folds of its own velvet mantle, pressing the rich fabric into the cushion. The animal and its royal garments are physically intertwined. ${miradas.gato_offlens}`,
        `${framings.portrait} ${gato_global} POSE — ROYAL NEST: The cat reclines deeply. Crucially, ONE FRONT PAW rests heavily directly ON TOP OF the thick folds of its own velvet mantle, pressing the rich fabric into the cushion. The animal and its royal garments are physically intertwined. ${miradas.gato_elevada}`,
      ]
    },

    // G4 — Loaf
    {
      id: 'G4',
      variantes: [
        `${framings.close_crop} ${gato_global} POSE — SCULPTURAL LOAF: The cat rests as a compact, heavy, volumetric mass directly on the deeply indented cushion. FRONT PAWS are completely tucked and hidden. The body is an organic mound of fur shifting naturally to one side. NO tail visible. NO paws visible. Supreme comfort and density. ${miradas.gato_headtilt}`,
        `${framings.close_crop} ${gato_global} POSE — SCULPTURAL LOAF: The cat rests as a compact, heavy, volumetric mass directly on the deeply indented cushion. FRONT PAWS are completely tucked and hidden. The body is an organic mound of fur shifting naturally to one side. NO tail visible. NO paws visible. Supreme comfort and density. ${miradas.gato_lateral}`,
      ]
    },

    // G5a / G5b / G6... (Se mantienen igual)
    { id: 'G5a', variantes: [`${framings.close_crop} ${gato_global} POSE — ALIGNED LEFT: The cat's BODY and HEAD flow together to the left. Anchored heavy hindquarters on the cushion. Front paws rest organically, one draped slightly ahead of the other. ${miradas.gato_frontal}`] },
    { id: 'G5b', variantes: [`${framings.close_crop} ${gato_global} POSE — ALIGNED RIGHT: The cat's BODY and HEAD flow together to the right. Anchored heavy hindquarters on the cushion. Front paws rest organically, one draped slightly ahead of the other. ${miradas.gato_frontal}`] },
    { id: 'G6', naturalistic: true, variantes: [`${framings.portrait} ${gato_global} POSE — NATURALISTIC: Faithfully recreate the cat's natural pose from the reference photo. Preserve the exact organic body position, limb placement, and weight distribution. Transform into a royal oil painting while keeping the physical truth of the animal 100% faithful.`] },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PERRO GRANDE
  // ═══════════════════════════════════════════════════════════════════════════
  perro_grande: [

    // PG1 — Landseer Recline
    {
      id: 'PG1',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — MAJESTIC RECLINE: The massive dog lies at ease, its broad chest resting heavily in the deep indentation of the cushion. Both front legs extend forward, paws draped naturally and asymmetrically. The body weight is clearly visibly supported by the yielding velvet. Head held up with noble calm. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — MAJESTIC RECLINE: The massive dog lies at ease, its broad chest resting heavily in the deep indentation of the cushion. Both front legs extend forward, paws draped naturally and asymmetrically. The body weight is clearly visibly supported by the yielding velvet. Head held up with noble calm. ${miradas.perro_girada}`,
      ]
    },

    // NUEVA PG1b — Paw Drape (Pata Colgante)
    {
      id: 'PG1b',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — RELAXED PAW DRAPE: The heavy dog reclines with immense, relaxed power. ONE FRONT LEG is draped lazily over the front edge of the cushion, the heavy paw hanging down. The other paw rests tucked. Extreme organic asymmetry and physical ease. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — RELAXED PAW DRAPE: The heavy dog reclines with immense, relaxed power. ONE FRONT LEG is draped lazily over the front edge of the cushion, the heavy paw hanging down. The other paw rests tucked. Extreme organic asymmetry and physical ease. ${miradas.perro_headtilt}`,
      ]
    },

    // PG2 — Sphinx Noble
    {
      id: 'PG2',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — SPHINX COMMANDING: The heavy chest is lowered, embedding deeply into the cushion. Front legs extend powerfully forward, one paw planted firmly ahead of the other. The neck is thick and organic, head held high with absolute authority. Gravity pulls beautifully on jowls and loose skin. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — SPHINX COMMANDING: The heavy chest is lowered, embedding deeply into the cushion. Front legs extend powerfully forward, one paw planted firmly ahead of the other. The neck is thick and organic, head held high with absolute authority. Gravity pulls beautifully on jowls and loose skin. ${miradas.perro_directo}`,
      ]
    },

    // PG3 — Seated Proud
    {
      id: 'PG3',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — SEATED POWER: The dog sits upright, anchoring its heavy hindquarters deep into the cushion. The broad chest pushes forward naturally, not stiffly. One front paw is planted slightly ahead of the other, creating dynamic volume. A majestic, organic posture. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — SEATED POWER: The dog sits upright, anchoring its heavy hindquarters deep into the cushion. The broad chest pushes forward naturally, not stiffly. One front paw is planted slightly ahead of the other, creating dynamic volume. A majestic, organic posture. ${miradas.perro_girada}`,
      ]
    },

    // PG4 — Three Quarter
    {
      id: 'PG4',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — THREE QUARTER MASS: The dog's heavy body is turned 3/4 to the side, revealing its massive flank. The head turns powerfully back over the shoulder toward the viewer, skin folding organically at the neck. Dynamic, three-dimensional presence. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — THREE QUARTER MASS: The dog's heavy body is turned 3/4 to the side, revealing its massive flank. The head turns powerfully back over the shoulder toward the viewer, skin folding organically at the neck. Dynamic, three-dimensional presence. ${miradas.perro_directo}`,
      ]
    },

    // NUEVA PG6 — Dramatic Turn (Giro dramático extremo sobre el hombro)
    {
      id: 'PG6',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — DRAMATIC SHOULDER TURN: The dog's body faces almost completely away from the viewer, showing the heavy drape of the velvet mantle on its back. The thick, muscular neck turns sharply back over the shoulder, creating profound, heavy skin folds. A masterful, sculptural pose showing immense volume. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — DRAMATIC SHOULDER TURN: The dog's body faces almost completely away from the viewer, showing the heavy drape of the velvet mantle on its back. The thick, muscular neck turns sharply back over the shoulder, creating profound, heavy skin folds. A masterful, sculptural pose showing immense volume. ${miradas.perro_directo}`,
      ]
    },

    // NUEVA PG7 — Royal Nest (La Pata sobre la Capa)
    {
      id: 'PG7',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — ROYAL NEST: The dog reclines heavily. ONE FRONT PAW rests directly ON TOP OF the thick folds of its own velvet mantle, pressing the fabric down into the cushion. The animal interacts physically with its royal garments. Deep, organic embedding. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — ROYAL NEST: The dog reclines heavily. ONE FRONT PAW rests directly ON TOP OF the thick folds of its own velvet mantle, pressing the fabric down into the cushion. The animal interacts physically with its royal garments. Deep, organic embedding. ${miradas.perro_girada}`,
      ]
    },

    // PG5 — Naturalistic
    { id: 'PG5', naturalistic: true, variantes: [`${framings.portrait} ${perro_global} POSE — NATURALISTIC: Faithfully recreate the dog's natural pose from the reference photo. Preserve exact organic body position, physical weight distribution, and authentic expression. Transform into a heavy, royal oil painting.`] },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PERRO MEDIANO
  // ═══════════════════════════════════════════════════════════════════════════
  perro_mediano: [
    {
      id: 'PM1',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — RELAXED RECLINE: The dog lies comfortably, chest sinking into the proportional cushion. Front legs extended naturally, paws overlapping with organic asymmetry. Head held with noble dignity. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — RELAXED RECLINE: The dog lies comfortably, chest sinking into the proportional cushion. Front legs extended naturally, paws overlapping with organic asymmetry. Head held with noble dignity. ${miradas.perro_girada}`,
      ]
    },

    // NUEVA PM1b — Paw Drape (Pata Colgante)
    {
      id: 'PM1b',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — RELAXED PAW DRAPE: The dog reclines comfortably. ONE FRONT LEG is draped lazily over the front edge of the cushion, hanging down with natural gravity. Supreme organic asymmetry and relaxed elegance. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — RELAXED PAW DRAPE: The dog reclines comfortably. ONE FRONT LEG is draped lazily over the front edge of the cushion, hanging down with natural gravity. Supreme organic asymmetry and relaxed elegance. ${miradas.perro_headtilt}`,
      ]
    },

    {
      id: 'PM2',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — SEATED NOBLE: The dog sits upright, weight anchored nicely into the cushion. Chest forward naturally, one paw planted slightly ahead. A confident, breathing posture, not rigid. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — SEATED NOBLE: The dog sits upright, weight anchored nicely into the cushion. Chest forward naturally, one paw planted slightly ahead. A confident, breathing posture, not rigid. ${miradas.perro_girada}`,
      ]
    },
    {
      id: 'PM3',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — THREE QUARTER GRACE: Body turned elegantly 3/4. Head turns back to the viewer with natural skin folds at the neck. Weight distributed asymmetrically. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — THREE QUARTER GRACE: Body turned elegantly 3/4. Head turns back to the viewer with natural skin folds at the neck. Weight distributed asymmetrically. ${miradas.perro_directo}`,
      ]
    },

    // NUEVA PM6 — Royal Nest (La Pata sobre la Capa)
    {
      id: 'PM6',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — ROYAL NEST: The dog reclines nicely. ONE FRONT PAW rests directly ON TOP OF the folds of its own velvet mantle, pressing the fabric down into the cushion. The animal interacts physically with its royal garments. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — ROYAL NEST: The dog reclines nicely. ONE FRONT PAW rests directly ON TOP OF the folds of its own velvet mantle, pressing the fabric down into the cushion. The animal interacts physically with its royal garments. ${miradas.perro_headtilt}`,
      ]
    },

    { id: 'PM4', variantes: [`${framings.portrait} ${perro_global} POSE — SEATED ANGLED: Seated with body naturally angled 20 degrees, creating depth. Weight clearly rests on the rear. One paw placed casually ahead. ${miradas.perro_offlens}`] },
    { id: 'PM5', naturalistic: true, variantes: [`${framings.portrait} ${perro_global} POSE — NATURALISTIC: Faithfully recreate the dog's natural pose from the reference photo. Preserve exact physical weight distribution and authentic expression. Transform into a classical oil painting.`] },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PERRO PEQUEÑO, CONEJO, AVE, CABALLO, REPTIL, PEQUEÑO
  // ═══════════════════════════════════════════════════════════════════════════
  perro_pequeno: [
    { id: 'PP1', variantes: [`${framings.portrait} ${perro_global} POSE — SEATED UPRIGHT FORMAL: The small dog sits proudly, its small body nestled into the grand velvet cushion. Chest forward, weight resting deeply. One paw slightly ahead. Immense dignity in a small frame. ${miradas.perro_offlens}`] },
    { id: 'PP2', variantes: [`${framings.portrait} ${perro_global} POSE — SEATED ANGLED: The small dog sits angled 20 degrees, creating sculptural volume. Anchored firmly on the cushion. ${miradas.perro_offlens}`] },
    { id: 'PP3', variantes: [`${framings.close_crop_strong} ${perro_global} POSE — CLOSE CROP PORTRAIT: The small dog's deeply volumetric face and chest fill the frame, emerging dramatically from the heavy royal mantle. ${miradas.perro_offlens}`] },
    { id: 'PP4', variantes: [`${framings.portrait} ${perro_global} POSE — THREE QUARTER DYNAMIC: The small dog's body is turned 3/4. Head turned organically back over the shoulder. Deeply embedded in the cushion. ${miradas.perro_offlens}`] },
    { id: 'PP5', naturalistic: true, variantes: [`${framings.portrait} ${perro_global} POSE — NATURALISTIC: Faithfully recreate the small dog's natural pose. Preserve organic weight distribution. Transform into a classical oil painting.`] },
  ],
  conejo: [
    { id: 'CO1', variantes: [`${framings.full_body} POSE — SEATED ALERT: The rabbit sits upright, its weight sinking naturally into the plush cushion. Ears tall, one paw placed organically ahead of the other.`] },
    { id: 'CO2', variantes: [`${framings.half_body} POSE — LOAF REGAL: The rabbit rests as a compact, heavy mass in the cushion. Paws tucked deeply. A sculptural, regal mound of fur.`] },
    { id: 'CO3', variantes: [`${framings.full_body} POSE — THREE QUARTER: Body turned 3/4, anchored in the velvet. Head facing viewer. Natural, living volume.`] },
    { id: 'CO4', naturalistic: true, variantes: [`${framings.full_body} POSE — NATURALISTIC: Faithfully recreate the rabbit's natural volumetric pose and weight distribution.`] },
  ],
  ave: [
    { id: 'AV1', variantes: [`${framings.full_body} POSE — PERCHED UPRIGHT: The bird perches with majestic posture, talons gripping the heavy velvet organically. Wings folded naturally to the body's volume.`] },
    { id: 'AV2', variantes: [`${framings.full_body} POSE — STANDING FORMAL: The bird stands with its weight balanced naturally on the cushion. Feathers painted with sculptural thickness.`] },
    { id: 'AV3', variantes: [`${framings.full_body} POSE — THREE QUARTER PERCH: 3/4 profile, gripping the velvet organically. Head turned to face viewer. Sculptural and composed.`] },
    { id: 'AV4', naturalistic: true, variantes: [`${framings.full_body} POSE — NATURALISTIC: Faithfully recreate the bird's natural pose, preserving organic feather volume and stance.`] },
  ],
  caballo: [
    { id: 'CA1', variantes: [`${framings.full_body_monumental} POSE — PROUD SQUARE STANCE: The horse stands with massive, monumental weight. All four hooves planted firmly, showing immense physical power and anatomical volume. 3/4 angle.`] },
    { id: 'CA2', variantes: [`${framings.full_body_monumental} POSE — PROFILE NOBLE: Deep, heavy profile stance. The royal mantle drapes with profound gravity across the powerful back.`] },
    { id: 'CA3', variantes: [`${framings.full_body_monumental} POSE — THREE QUARTER DYNAMIC: 3/4 angle. Legs staggered organically, suggesting massive weight shifting. Dynamic, breathing volume.`] },
    { id: 'CA4', naturalistic: true, variantes: [`${framings.full_body_monumental} POSE — NATURALISTIC: Faithfully recreate the horse's natural massive pose. Preserve exact sculptural weight distribution.`] },
  ],
  reptil: [
    { id: 'RE1', variantes: [`${framings.full_body} POSE — SPHINX REGAL: The reptile rests its heavy, cold-blooded mass deeply into the velvet cushion. Sculptural scales, ancient posture.`] },
    { id: 'RE2', variantes: [`${framings.full_body} POSE — ELEVATED ALERT: Upright on front legs, the heavy belly resting organically. Dignified, ancient, three-dimensional.`] },
    { id: 'RE3', variantes: [`${framings.full_body} POSE — THREE QUARTER REST: 3/4 position, heavy tail dragging naturally. Thick, tactile scales.`] },
    { id: 'RE4', naturalistic: true, variantes: [`${framings.full_body} POSE — NATURALISTIC: Faithfully recreate the reptile's natural heavy pose. Preserve organic weight and sculptural scales.`] },
  ],
  pequeno: [
    { id: 'AN1', variantes: [`${framings.full_body} POSE — SEATED REGAL: The small animal sits upright, its tiny body sinking organically into the immense plush cushion.`] },
    { id: 'AN2', variantes: [`${framings.close_crop} POSE — ALERT FRONTAL: Sits alert, weight anchored naturally. Small but possessing dense, living volume.`] },
    { id: 'AN3', variantes: [`${framings.full_body} POSE — THREE QUARTER: 3/4 angle. The small body creates a deep, natural indentation in the velvet throne.`] },
    { id: 'AN4', naturalistic: true, variantes: [`${framings.full_body} POSE — NATURALISTIC: Faithfully recreate the animal's natural pose. Preserve organic weight resting on the surface.`] },
  ],
  default: [
    { id: 'DF1', variantes: [`${framings.portrait} POSE: The animal rests heavily and organically on the cushion. The body yields naturally to gravity, distributing its weight deeply into the surface. Noble, sculptural, and asymmetrical.`] },
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
