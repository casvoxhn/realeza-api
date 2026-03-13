// SECCIÓN 4 — POSES v8.3
// v8.3 — Reversión de cola forzada: Se elimina el requisito estricto de mostrar la cola completa para evitar composiciones artificiales y problemas con fotos recortadas.
// v8.1 — Ajuste de Autoestima: Poses más erguidas, torsos orgullosos.

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
  gato_offlens:     `EYES: The upper eyelid slightly overlaps the top of the iris. Deep liquid volume in the cornea. Soft, diffused catchlight. Eyes directed just slightly off the camera lens — sovereign and alive.`,
  gato_lateral:     `EYES: The upper eyelid slightly overlaps the top of the iris. Deep liquid volume. Head stays forward, but eyes directed lazily to the side. Aristocratic indifference.`,
  gato_elevada:     `EYES: The upper eyelid slightly overlaps the top of the iris. Deep liquid volume. Eyes directed slightly upward and to the side — contemplative, carrying ancient intelligence.`,
  gato_indiferente: `EYES: The upper eyelid slightly overlaps the top of the iris. Deep liquid volume. Eyes directed very slightly downward. Total indifference and regal ease.`,
  gato_frontal:     `EYES: The upper eyelid slightly overlaps the top of the iris. Deep liquid volume. Pupils are sharp. Eyes look directly at the viewer — piercing, confident and direct.`,
  gato_headtilt:    `EYES: The upper eyelid slightly overlaps the top of the iris. Deep liquid volume. Head faces viewer with a subtle tilt. Eyes look directly at the viewer — a rare moment of feline curiosity.`,

  // PERROS
  perro_offlens:  `EYES: Warm, loyal, and liquid. The upper lid creates a soft shadow over the iris. Soft, diffused catchlight reflecting ambient light. Eyes directed just slightly off the camera lens.`,
  perro_girada:   `EYES: Warm, loyal, and liquid. The upper lid creates a soft shadow over the iris. Head turned naturally, eyes following. Natural, relaxed, confident.`,
  perro_headtilt: `EYES: Warm, loyal, and liquid. The upper lid creates a soft shadow over the iris. Head tilted, eyes directed at the viewer with genuine curiosity — highly expressive, alive.`,
  perro_directo:  `EYES: Powerful direct gaze. Wet and alive with a soft catchlight. The upper lid creates a soft shadow over the iris. Confident, direct soul-to-soul connection.`,
};

// ─── INSTRUCCIONES GLOBALES DE FÍSICA Y MASA ─────────────────────────────────

const eye_physics = `EYE PHYSICS (CRITICAL): Strictly avoid "glassy", "taxidermy", or "plastic" eyes. The eye is a biological organ: transparent wet cornea, fibrous iris, deep pupil. The upper eyelid MUST slightly obscure the top of the iris to avoid a startled/bug-eyed look. Reflections must be muted, organic, and diffused. NO perfect white dots.`;

const perro_global = `CRITICAL — PRESERVE EXACT ANATOMY, EXPRESSION & PHYSICAL MASS: Study the reference photo carefully. You MUST perfectly preserve the specific bone structure, leg thickness, leg length, and chest width of the reference animal. The generated body and paws MUST match this exact anatomy, but presented in its most proud, majestic, and elevated posture. Flesh and thick muscular limbs must look three-dimensional and natural, but the core posture remains confident and upright. ${eye_physics} Transform this specific anatomical reality into a classical royal oil painting.`;

const gato_global = `CRITICAL — PRESERVE EXACT ANATOMY, FLUIDITY & MASS: Study the reference photo carefully. You MUST perfectly preserve the specific bone structure, limb thickness, and proportions of THIS specific cat. The feline body carries undeniable physical weight, resting organically on the cushion but maintaining a proud, slightly elevated, and sovereign posture. The pose must feel relaxed yet aristocratic and sculptural. Never perfectly symmetrical. Let the natural fur volume and features (like the tail) flow organically IF present in the reference, without forcing elements that aren't visible. ${eye_physics}`;

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
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX RIGHT: The cat rests with aristocratic ease. The CHEST is held proudly, slightly elevated and resting naturally on the velvet cushion without sinking deeply. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the right with a relaxed, upright curve. The HEAD is held high with supreme sovereign dignity. The tail wraps or rests naturally if visible. ${miradas.gato_offlens}`,
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX RIGHT: The cat rests with aristocratic ease. The CHEST is held proudly, slightly elevated and resting naturally on the velvet cushion without sinking deeply. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the right with a relaxed, upright curve. The HEAD is held high with supreme sovereign dignity. The tail wraps or rests naturally if visible. ${miradas.gato_lateral}`,
      ]
    },

    // G1b — Sphinx izquierda
    {
      id: 'G1b',
      variantes: [
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX LEFT: The cat rests with aristocratic ease. The CHEST is held proudly, slightly elevated and resting naturally on the velvet cushion without sinking deeply. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the left with a relaxed, upright curve. The HEAD is held high with supreme sovereign dignity. The tail wraps or rests naturally if visible. ${miradas.gato_offlens}`,
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX LEFT: The cat rests with aristocratic ease. The CHEST is held proudly, slightly elevated and resting naturally on the velvet cushion without sinking deeply. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the left with a relaxed, upright curve. The HEAD is held high with supreme sovereign dignity. The tail wraps or rests naturally if visible. ${miradas.gato_lateral}`,
      ]
    },

    // G1c — Paw Drape (Pata Colgante)
    {
      id: 'G1c',
      variantes: [
        `${framings.portrait} ${gato_global} POSE — RELAXED PAW DRAPE: The cat reclines luxuriously with a proud spine. While the body rests organically on the cushion, ONE FRONT PAW is draped lazily over the front edge of the cushion, hanging down. Supreme aristocratic indifference. ${miradas.gato_indiferente}`,
        `${framings.portrait} ${gato_global} POSE — RELAXED PAW DRAPE: The cat reclines luxuriously with a proud spine. While the body rests organically on the cushion, ONE FRONT PAW is draped lazily over the front edge of the cushion, hanging down. Supreme aristocratic indifference. ${miradas.gato_lateral}`,
      ]
    },

    // G2 — Upright asimétrico
    {
      id: 'G2',
      variantes: [
        `${framings.close_crop} ${gato_global} POSE — SEATED SOVEREIGN: The cat sits upright, anchoring nicely into the cushion's tufts without compressing the body. The FRONT PAWS rest elegantly on the surface, one paw slightly ahead of the other, breaking perfect symmetry. The spine follows a graceful, proud, upward line. The weight is distributed organically. ${miradas.gato_frontal}`,
        `${framings.close_crop} ${gato_global} POSE — SEATED SOVEREIGN: The cat sits upright, anchoring nicely into the cushion's tufts without compressing the body. The FRONT PAWS rest elegantly on the surface, one paw slightly ahead of the other, breaking perfect symmetry. The spine follows a graceful, proud, upward line. The weight is distributed organically. ${miradas.gato_lateral}`,
      ]
    },

    // G3 — Three quarter
    {
      id: 'G3',
      noJuntoA: ['G2'],
      variantes: [
        `${framings.portrait} ${gato_global} POSE — THREE QUARTER TURN: The cat rests proudly on the cushion. The BODY is turned 3/4 away, revealing the graceful, elevated curve of the flank and spine. The HEAD is turned back toward the viewer over the shoulder — a sharp, confident neck rotation with organic folds. ${miradas.gato_offlens}`,
        `${framings.portrait} ${gato_global} POSE — THREE QUARTER TURN: The cat rests proudly on the cushion. The BODY is turned 3/4 away, revealing the graceful, elevated curve of the flank and spine. The HEAD is turned back toward the viewer over the shoulder — a sharp, confident neck rotation with organic folds. ${miradas.gato_lateral}`,
      ]
    },

    // G7 — Royal Nest (Interacción con la capa)
    {
      id: 'G7',
      variantes: [
        `${framings.portrait} ${gato_global} POSE — ROYAL NEST: The cat reclines proudly. Crucially, ONE FRONT PAW rests elegantly directly ON TOP OF the thick folds of its own velvet mantle. The animal and its royal garments are physically intertwined, projecting high self-esteem. ${miradas.gato_offlens}`,
        `${framings.portrait} ${gato_global} POSE — ROYAL NEST: The cat reclines proudly. Crucially, ONE FRONT PAW rests elegantly directly ON TOP OF the thick folds of its own velvet mantle. The animal and its royal garments are physically intertwined, projecting high self-esteem. ${miradas.gato_elevada}`,
      ]
    },

    // G4 — Loaf
    {
      id: 'G4',
      variantes: [
        `${framings.close_crop} ${gato_global} POSE — SCULPTURAL LOAF: The cat rests as a compact, volumetric mass on the cushion, but keeping the chest and head confidently elevated. FRONT PAWS are completely tucked and hidden. The body is an organic mound of fur shifting naturally to one side. Supreme comfort and regal dignity. ${miradas.gato_headtilt}`,
        `${framings.close_crop} ${gato_global} POSE — SCULPTURAL LOAF: The cat rests as a compact, volumetric mass on the cushion, but keeping the chest and head confidently elevated. FRONT PAWS are completely tucked and hidden. The body is an organic mound of fur shifting naturally to one side. Supreme comfort and regal dignity. ${miradas.gato_lateral}`,
      ]
    },

    // G5a / G5b / G6... 
    { id: 'G5a', variantes: [`${framings.close_crop} ${gato_global} POSE — ALIGNED LEFT: The cat's BODY and HEAD flow proudly to the left. Anchored heavy hindquarters on the cushion, but upright posture. Front paws rest organically, one draped slightly ahead of the other. ${miradas.gato_frontal}`] },
    { id: 'G5b', variantes: [`${framings.close_crop} ${gato_global} POSE — ALIGNED RIGHT: The cat's BODY and HEAD flow proudly to the right. Anchored heavy hindquarters on the cushion, but upright posture. Front paws rest organically, one draped slightly ahead of the other. ${miradas.gato_frontal}`] },
    { id: 'G6', naturalistic: true, variantes: [`${framings.portrait} ${gato_global} POSE — NATURALISTIC: Faithfully recreate the cat's natural pose from the reference photo, but slightly enhance the posture to look more upright, proud, and majestic. Transform into a royal oil painting while keeping the physical truth of the animal faithful.`] },
  ],
