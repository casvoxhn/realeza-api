// SECCIÓN 4 — POSES v7
// v7 — Reescritura escultural de poses. Transición de geometría rígida a física orgánica.
// Se incorpora peso, gravedad, curvas naturales y anclaje profundo en los cojines.

const framings = {
  portrait: `FRAMING: Portrait crop — the animal fills the frame with natural presence. Front paws and cushion visible at the bottom. Proportions anatomically correct throughout. Do NOT compress or shrink the body.`,
  close_crop: `FRAMING: Portrait crop — front paws and cushion visible at the bottom. Proportions anatomically correct throughout. Do NOT compress or shrink the body.`,
  close_crop_strong: `FRAMING: Close portrait crop — chest and front paws barely visible at bottom edge. Proportions anatomically correct throughout. Do NOT compress or shrink the body.`,
  full_body: `FRAMING: The complete body of the animal is fully visible from head to tail — full figure on the cushion or surface. Proportions anatomically correct throughout. Do NOT crop the body.`,
  full_body_monumental: `FRAMING: The complete body of the horse fills the canvas — monumental composition from head to tail. Anatomically correct and powerful throughout.`,
  half_body: `FRAMING: The animal shown from head to mid-body — front paws and chest visible, body naturally cropped at the cushion. Proportions anatomically correct throughout.`,
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

const perro_global = `CRITICAL — PRESERVE NATURAL EXPRESSION & PHYSICAL MASS: Study the dog's expression in the reference. The portrait must feel like THIS specific dog, carrying real physical weight and volume. Flesh, jowls, and wrinkles must obey gravity, looking heavy and three-dimensional, never perfectly symmetrical. If the mouth is open, preserve it. Transform it into a heavy, breathing subject embedded in a classical oil painting.`;

const gato_global = `CRITICAL — PRESERVE FELINE FLUIDITY & MASS: The portrait must feel like THIS specific cat. The feline body is liquid but carries undeniable physical weight, sinking luxuriously and organically into the cushion's tufts. The pose must feel relaxed, sovereign, and sculptural, with a natural curve to the spine. Never stiff, never perfectly symmetrical.`;

// ─── POSES ───────────────────────────────────────────────────────────────────

const poses = {

  // ═══════════════════════════════════════════════════════════════════════════
  // GATO
  // ═══════════════════════════════════════════════════════════════════════════
  gato: [
    // G1a — Sphinx derecha — portrait
    {
      id: 'G1a',
      variantes: [
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX RIGHT: The cat rests with aristocratic ease. The CHEST is lowered, sinking deeply into the velvet cushion. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the right with a relaxed, organic curve. The HEAD is held high with sovereign dignity. NO tail visible. ${miradas.gato_offlens}`,
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX RIGHT: The cat rests with aristocratic ease. The CHEST is lowered, sinking deeply into the velvet cushion. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the right with a relaxed, organic curve. The HEAD is held high with sovereign dignity. NO tail visible. ${miradas.gato_lateral}`,
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX RIGHT: The cat rests with aristocratic ease. The CHEST is lowered, sinking deeply into the velvet cushion. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the right with a relaxed, organic curve. The HEAD is held high with sovereign dignity. NO tail visible. ${miradas.gato_elevada}`,
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX RIGHT: The cat rests with aristocratic ease. The CHEST is lowered, sinking deeply into the velvet cushion. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the right with a relaxed, organic curve. The HEAD is held high with sovereign dignity. NO tail visible. ${miradas.gato_indiferente}`,
      ]
    },

    // G1b — Sphinx izquierda — portrait
    {
      id: 'G1b',
      variantes: [
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX LEFT: The cat rests with aristocratic ease. The CHEST is lowered, sinking deeply into the velvet cushion. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the left with a relaxed, organic curve. The HEAD is held high with sovereign dignity. NO tail visible. ${miradas.gato_offlens}`,
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX LEFT: The cat rests with aristocratic ease. The CHEST is lowered, sinking deeply into the velvet cushion. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the left with a relaxed, organic curve. The HEAD is held high with sovereign dignity. NO tail visible. ${miradas.gato_lateral}`,
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX LEFT: The cat rests with aristocratic ease. The CHEST is lowered, sinking deeply into the velvet cushion. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the left with a relaxed, organic curve. The HEAD is held high with sovereign dignity. NO tail visible. ${miradas.gato_elevada}`,
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX LEFT: The cat rests with aristocratic ease. The CHEST is lowered, sinking deeply into the velvet cushion. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the left with a relaxed, organic curve. The HEAD is held high with sovereign dignity. NO tail visible. ${miradas.gato_indiferente}`,
      ]
    },

    // G2 — Upright asimétrico
    {
      id: 'G2',
      variantes: [
        `${framings.close_crop} ${gato_global} POSE — SEATED SOVEREIGN: The cat's HINDQUARTERS are anchored deeply into the cushion's tufts. The FRONT PAWS rest elegantly on the surface, one paw slightly ahead of the other, breaking perfect symmetry. The spine follows a graceful, natural line, not stiff. The weight is distributed organically. The TAIL wraps loosely around the body. ${miradas.gato_frontal}`,
        `${framings.close_crop} ${gato_global} POSE — SEATED SOVEREIGN: The cat's HINDQUARTERS are anchored deeply into the cushion's tufts. The FRONT PAWS rest elegantly on the surface, one paw slightly ahead of the other, breaking perfect symmetry. The spine follows a graceful, natural line, not stiff. The weight is distributed organically. The TAIL wraps loosely around the body. ${miradas.gato_lateral}`,
        `${framings.close_crop} ${gato_global} POSE — SEATED SOVEREIGN: The cat's HINDQUARTERS are anchored deeply into the cushion's tufts. The FRONT PAWS rest elegantly on the surface, one paw slightly ahead of the other, breaking perfect symmetry. The spine follows a graceful, natural line, not stiff. The weight is distributed organically. The TAIL wraps loosely around the body. ${miradas.gato_indiferente}`,
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

    // G4 — Loaf
    {
      id: 'G4',
      variantes: [
        `${framings.close_crop} ${gato_global} POSE — SCULPTURAL LOAF: The cat rests as a compact, heavy, volumetric mass directly on the deeply indented cushion. FRONT PAWS are completely tucked and hidden. The body is an organic mound of fur shifting naturally to one side. NO tail visible. NO paws visible. Supreme comfort and density. ${miradas.gato_headtilt}`,
        `${framings.close_crop} ${gato_global} POSE — SCULPTURAL LOAF: The cat rests as a compact, heavy, volumetric mass directly on the deeply indented cushion. FRONT PAWS are completely tucked and hidden. The body is an organic mound of fur shifting naturally to one side. NO tail visible. NO paws visible. Supreme comfort and density. ${miradas.gato_lateral}`,
        `${framings.close_crop} ${gato_global} POSE — SCULPTURAL LOAF: The cat rests as a compact, heavy, volumetric mass directly on the deeply indented cushion. FRONT PAWS are completely tucked and hidden. The body is an organic mound of fur shifting naturally to one side. NO tail visible. NO paws visible. Supreme comfort and density. ${miradas.gato_elevada}`,
        `${framings.close_crop} ${gato_global} POSE — SCULPTURAL LOAF: The cat rests as a compact, heavy, volumetric mass directly on the deeply indented cushion. FRONT PAWS are completely tucked and hidden. The body is an organic mound of fur shifting naturally to one side. NO tail visible. NO paws visible. Supreme comfort and density. ${miradas.gato_indiferente}`,
      ]
    },

    // G5a — Alineado izquierda
    {
      id: 'G5a',
      variantes: [
        `${framings.close_crop} ${gato_global} POSE — ALIGNED LEFT: The cat's BODY and HEAD flow together to the left. Anchored heavy hindquarters on the cushion. Front paws rest organically, one draped slightly ahead of the other. ${miradas.gato_frontal}`,
      ]
    },

    // G5b — Alineado derecha
    {
      id: 'G5b',
      variantes: [
        `${framings.close_crop} ${gato_global} POSE — ALIGNED RIGHT: The cat's BODY and HEAD flow together to the right. Anchored heavy hindquarters on the cushion. Front paws rest organically, one draped slightly ahead of the other. ${miradas.gato_frontal}`,
      ]
    },

    // G6 — Naturalistic
    {
      id: 'G6',
      naturalistic: true,
      variantes: [
        `${framings.portrait} ${gato_global} POSE — NATURALISTIC: Faithfully recreate the cat's natural pose from the reference photo. Preserve the exact organic body position, limb placement, and weight distribution. Transform into a royal oil painting while keeping the physical truth of the animal 100% faithful.`,
      ]
    },
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
        `${framings.portrait} ${perro_global} POSE — MAJESTIC RECLINE: The massive dog lies at ease, its broad chest resting heavily in the deep indentation of the cushion. Both front legs extend forward, paws draped naturally and asymmetrically. The body weight is clearly visibly supported by the yielding velvet. Head held up with noble calm. ${miradas.perro_headtilt}`,
        `${framings.portrait} ${perro_global} POSE — MAJESTIC RECLINE: The massive dog lies at ease, its broad chest resting heavily in the deep indentation of the cushion. Both front legs extend forward, paws draped naturally and asymmetrically. The body weight is clearly visibly supported by the yielding velvet. Head held up with noble calm. ${miradas.perro_directo}`,
      ]
    },

    // PG2 — Sphinx Noble
    {
      id: 'PG2',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — SPHINX COMMANDING: The heavy chest is lowered, embedding deeply into the cushion. Front legs extend powerfully forward, one paw planted firmly ahead of the other. The neck is thick and organic, head held high with absolute authority. Gravity pulls beautifully on jowls and loose skin. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — SPHINX COMMANDING: The heavy chest is lowered, embedding deeply into the cushion. Front legs extend powerfully forward, one paw planted firmly ahead of the other. The neck is thick and organic, head held high with absolute authority. Gravity pulls beautifully on jowls and loose skin. ${miradas.perro_girada}`,
        `${framings.portrait} ${perro_global} POSE — SPHINX COMMANDING: The heavy chest is lowered, embedding deeply into the cushion. Front legs extend powerfully forward, one paw planted firmly ahead of the other. The neck is thick and organic, head held high with absolute authority. Gravity pulls beautifully on jowls and loose skin. ${miradas.perro_headtilt}`,
        `${framings.portrait} ${perro_global} POSE — SPHINX COMMANDING: The heavy chest is lowered, embedding deeply into the cushion. Front legs extend powerfully forward, one paw planted firmly ahead of the other. The neck is thick and organic, head held high with absolute authority. Gravity pulls beautifully on jowls and loose skin. ${miradas.perro_directo}`,
      ]
    },

    // PG3 — Seated Proud
    {
      id: 'PG3',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — SEATED POWER: The dog sits upright, anchoring its heavy hindquarters deep into the cushion. The broad chest pushes forward naturally, not stiffly. One front paw is planted slightly ahead of the other, creating dynamic volume. A majestic, organic posture. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — SEATED POWER: The dog sits upright, anchoring its heavy hindquarters deep into the cushion. The broad chest pushes forward naturally, not stiffly. One front paw is planted slightly ahead of the other, creating dynamic volume. A majestic, organic posture. ${miradas.perro_girada}`,
        `${framings.portrait} ${perro_global} POSE — SEATED POWER: The dog sits upright, anchoring its heavy hindquarters deep into the cushion. The broad chest pushes forward naturally, not stiffly. One front paw is planted slightly ahead of the other, creating dynamic volume. A majestic, organic posture. ${miradas.perro_headtilt}`,
        `${framings.portrait} ${perro_global} POSE — SEATED POWER: The dog sits upright, anchoring its heavy hindquarters deep into the cushion. The broad chest pushes forward naturally, not stiffly. One front paw is planted slightly ahead of the other, creating dynamic volume. A majestic, organic posture. ${miradas.perro_directo}`,
      ]
    },

    // PG4 — Three Quarter
    {
      id: 'PG4',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — THREE QUARTER MASS: The dog's heavy body is turned 3/4 to the side, revealing its massive flank. The head turns powerfully back over the shoulder toward the viewer, skin folding organically at the neck. Dynamic, three-dimensional presence. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — THREE QUARTER MASS: The dog's heavy body is turned 3/4 to the side, revealing its massive flank. The head turns powerfully back over the shoulder toward the viewer, skin folding organically at the neck. Dynamic, three-dimensional presence. ${miradas.perro_headtilt}`,
        `${framings.portrait} ${perro_global} POSE — THREE QUARTER MASS: The dog's heavy body is turned 3/4 to the side, revealing its massive flank. The head turns powerfully back over the shoulder toward the viewer, skin folding organically at the neck. Dynamic, three-dimensional presence. ${miradas.perro_directo}`,
      ]
    },

    // PG5 — Naturalistic
    {
      id: 'PG5',
      naturalistic: true,
      variantes: [
        `${framings.portrait} ${perro_global} POSE — NATURALISTIC: Faithfully recreate the dog's natural pose from the reference photo. Preserve exact organic body position, physical weight distribution, and authentic expression. Transform into a heavy, royal oil painting.`,
      ]
    },
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
        `${framings.portrait} ${perro_global} POSE — RELAXED RECLINE: The dog lies comfortably, chest sinking into the proportional cushion. Front legs extended naturally, paws overlapping with organic asymmetry. Head held with noble dignity. ${miradas.perro_headtilt}`,
        `${framings.portrait} ${perro_global} POSE — RELAXED RECLINE: The dog lies comfortably, chest sinking into the proportional cushion. Front legs extended naturally, paws overlapping with organic asymmetry. Head held with noble dignity. ${miradas.perro_directo}`,
      ]
    },
    {
      id: 'PM2',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — SEATED NOBLE: The dog sits upright, weight anchored nicely into the cushion. Chest forward naturally, one paw planted slightly ahead. A confident, breathing posture, not rigid. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — SEATED NOBLE: The dog sits upright, weight anchored nicely into the cushion. Chest forward naturally, one paw planted slightly ahead. A confident, breathing posture, not rigid. ${miradas.perro_girada}`,
        `${framings.portrait} ${perro_global} POSE — SEATED NOBLE: The dog sits upright, weight anchored nicely into the cushion. Chest forward naturally, one paw planted slightly ahead. A confident, breathing posture, not rigid. ${miradas.perro_headtilt}`,
        `${framings.portrait} ${perro_global} POSE — SEATED NOBLE: The dog sits upright, weight anchored nicely into the cushion. Chest forward naturally, one paw planted slightly ahead. A confident, breathing posture, not rigid. ${miradas.perro_directo}`,
      ]
    },
    {
      id: 'PM3',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — THREE QUARTER GRACE: Body turned elegantly 3/4. Head turns back to the viewer with natural skin folds at the neck. Weight distributed asymmetrically. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — THREE QUARTER GRACE: Body turned elegantly 3/4. Head turns back to the viewer with natural skin folds at the neck. Weight distributed asymmetrically. ${miradas.perro_headtilt}`,
        `${framings.portrait} ${perro_global} POSE — THREE QUARTER GRACE: Body turned elegantly 3/4. Head turns back to the viewer with natural skin folds at the neck. Weight distributed asymmetrically. ${miradas.perro_directo}`,
      ]
    },
    {
      id: 'PM4',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — SEATED ANGLED: Seated with body naturally angled 20 degrees, creating depth. Weight clearly rests on the rear. One paw placed casually ahead. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — SEATED ANGLED: Seated with body naturally angled 20 degrees, creating depth. Weight clearly rests on the rear. One paw placed casually ahead. ${miradas.perro_girada}`,
        `${framings.portrait} ${perro_global} POSE — SEATED ANGLED: Seated with body naturally angled 20 degrees, creating depth. Weight clearly rests on the rear. One paw placed casually ahead. ${miradas.perro_headtilt}`,
        `${framings.portrait} ${perro_global} POSE — SEATED ANGLED: Seated with body naturally angled 20 degrees, creating depth. Weight clearly rests on the rear. One paw placed casually ahead. ${miradas.perro_directo}`,
      ]
    },
    {
      id: 'PM5',
      naturalistic: true,
      variantes: [
        `${framings.portrait} ${perro_global} POSE — NATURALISTIC: Faithfully recreate the dog's natural pose from the reference photo. Preserve exact physical weight distribution and authentic expression. Transform into a classical oil painting.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PERRO PEQUEÑO
  // ═══════════════════════════════════════════════════════════════════════════
  perro_pequeno: [
    {
      id: 'PP1',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — SEATED UPRIGHT FORMAL: The small dog sits proudly, its small body nestled into the grand velvet cushion. Chest forward, weight resting deeply. One paw slightly ahead. Immense dignity in a small frame. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — SEATED UPRIGHT FORMAL: The small dog sits proudly, its small body nestled into the grand velvet cushion. Chest forward, weight resting deeply. One paw slightly ahead. Immense dignity in a small frame. ${miradas.perro_girada}`,
        `${framings.portrait} ${perro_global} POSE — SEATED UPRIGHT FORMAL: The small dog sits proudly, its small body nestled into the grand velvet cushion. Chest forward, weight resting deeply. One paw slightly ahead. Immense dignity in a small frame. ${miradas.perro_headtilt}`,
        `${framings.portrait} ${perro_global} POSE — SEATED UPRIGHT FORMAL: The small dog sits proudly, its small body nestled into the grand velvet cushion. Chest forward, weight resting deeply. One paw slightly ahead. Immense dignity in a small frame. ${miradas.perro_directo}`,
      ]
    },
    {
      id: 'PP2',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — SEATED ANGLED: The small dog sits angled 20 degrees, creating sculptural volume. Anchored firmly on the cushion. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — SEATED ANGLED: The small dog sits angled 20 degrees, creating sculptural volume. Anchored firmly on the cushion. ${miradas.perro_girada}`,
        `${framings.portrait} ${perro_global} POSE — SEATED ANGLED: The small dog sits angled 20 degrees, creating sculptural volume. Anchored firmly on the cushion. ${miradas.perro_headtilt}`,
        `${framings.portrait} ${perro_global} POSE — SEATED ANGLED: The small dog sits angled 20 degrees, creating sculptural volume. Anchored firmly on the cushion. ${miradas.perro_directo}`,
      ]
    },
    {
      id: 'PP3',
      variantes: [
        `${framings.close_crop_strong} ${perro_global} POSE — CLOSE CROP PORTRAIT: The small dog's deeply volumetric face and chest fill the frame, emerging dramatically from the heavy royal mantle. ${miradas.perro_offlens}`,
        `${framings.close_crop_strong} ${perro_global} POSE — CLOSE CROP PORTRAIT: The small dog's deeply volumetric face and chest fill the frame, emerging dramatically from the heavy royal mantle. ${miradas.perro_girada}`,
        `${framings.close_crop_strong} ${perro_global} POSE — CLOSE CROP PORTRAIT: The small dog's deeply volumetric face and chest fill the frame, emerging dramatically from the heavy royal mantle. ${miradas.perro_headtilt}`,
        `${framings.close_crop_strong} ${perro_global} POSE — CLOSE CROP PORTRAIT: The small dog's deeply volumetric face and chest fill the frame, emerging dramatically from the heavy royal mantle. ${miradas.perro_directo}`,
      ]
    },
    {
      id: 'PP4',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — THREE QUARTER DYNAMIC: The small dog's body is turned 3/4. Head turned organically back over the shoulder. Deeply embedded in the cushion. ${miradas.perro_offlens}`,
        `${framings.portrait} ${perro_global} POSE — THREE QUARTER DYNAMIC: The small dog's body is turned 3/4. Head turned organically back over the shoulder. Deeply embedded in the cushion. ${miradas.perro_headtilt}`,
        `${framings.portrait} ${perro_global} POSE — THREE QUARTER DYNAMIC: The small dog's body is turned 3/4. Head turned organically back over the shoulder. Deeply embedded in the cushion. ${miradas.perro_directo}`,
      ]
    },
    {
      id: 'PP5',
      naturalistic: true,
      variantes: [
        `${framings.portrait} ${perro_global} POSE — NATURALISTIC: Faithfully recreate the small dog's natural pose. Preserve organic weight distribution. Transform into a classical oil painting.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // CONEJO, AVE, CABALLO, REPTIL, PEQUEÑO
  // ═══════════════════════════════════════════════════════════════════════════
  conejo: [
    {
      id: 'CO1',
      variantes: [
        `${framings.full_body} POSE — SEATED ALERT: The rabbit sits upright, its weight sinking naturally into the plush cushion. Ears tall, one paw placed organically ahead of the other.`,
        `${framings.full_body} POSE — SEATED ALERT: The rabbit sits upright, body resting heavily. Head turned 15 degrees with organic, alert curiosity.`,
      ]
    },
    {
      id: 'CO2',
      variantes: [
        `${framings.half_body} POSE — LOAF REGAL: The rabbit rests as a compact, heavy mass in the cushion. Paws tucked deeply. A sculptural, regal mound of fur.`,
        `${framings.half_body} POSE — LOAF REGAL: The rabbit rests deeply in a loaf position. Head tilted organically with genuine presence.`,
      ]
    },
    {
      id: 'CO3',
      variantes: [
        `${framings.full_body} POSE — THREE QUARTER: Body turned 3/4, anchored in the velvet. Head facing viewer. Natural, living volume.`,
        `${framings.full_body} POSE — THREE QUARTER: Body 3/4, anchored deeply. Head facing viewer with gentle organic presence.`,
      ]
    },
    {
      id: 'CO4',
      naturalistic: true,
      variantes: [
        `${framings.full_body} POSE — NATURALISTIC: Faithfully recreate the rabbit's natural volumetric pose and weight distribution.`,
      ]
    },
  ],

  ave: [
    {
      id: 'AV1',
      variantes: [
        `${framings.full_body} POSE — PERCHED UPRIGHT: The bird perches with majestic posture, talons gripping the heavy velvet organically. Wings folded naturally to the body's volume.`,
        `${framings.full_body} POSE — PERCHED UPRIGHT: Perched organically. Head turned 20 degrees, one bright eye deeply set and observant.`,
      ]
    },
    {
      id: 'AV2',
      variantes: [
        `${framings.full_body} POSE — STANDING FORMAL: The bird stands with its weight balanced naturally on the cushion. Feathers painted with sculptural thickness.`,
        `${framings.full_body} POSE — STANDING FORMAL: Standing organically, weight shifted subtly. Head tilted with sharp, living curiosity.`,
      ]
    },
    {
      id: 'AV3',
      variantes: [
        `${framings.full_body} POSE — THREE QUARTER PERCH: 3/4 profile, gripping the velvet organically. Head turned to face viewer. Sculptural and composed.`,
        `${framings.full_body} POSE — THREE QUARTER PERCH: 3/4 profile. Powerful, volumetric presence on the cushion.`,
      ]
    },
    {
      id: 'AV4',
      naturalistic: true,
      variantes: [
        `${framings.full_body} POSE — NATURALISTIC: Faithfully recreate the bird's natural pose, preserving organic feather volume and stance.`,
      ]
    },
  ],

  caballo: [
    {
      id: 'CA1',
      variantes: [
        `${framings.full_body_monumental} POSE — PROUD SQUARE STANCE: The horse stands with massive, monumental weight. All four hooves planted firmly, showing immense physical power and anatomical volume. 3/4 angle.`,
        `${framings.full_body_monumental} POSE — PROUD SQUARE STANCE: Monumental weight. 3/4 angle. Head held high, muscles painted with thick sculptural impasto.`,
      ]
    },
    {
      id: 'CA2',
      variantes: [
        `${framings.full_body_monumental} POSE — PROFILE NOBLE: Deep, heavy profile stance. The royal mantle drapes with profound gravity across the powerful back.`,
        `${framings.full_body_monumental} POSE — PROFILE NOBLE: Massive profile. Head turned confidently to the viewer. Undeniable physical presence.`,
      ]
    },
    {
      id: 'CA3',
      variantes: [
        `${framings.full_body_monumental} POSE — THREE QUARTER DYNAMIC: 3/4 angle. Legs staggered organically, suggesting massive weight shifting. Dynamic, breathing volume.`,
        `${framings.full_body_monumental} POSE — THREE QUARTER DYNAMIC: 3/4 angle, weight shifted organically. Sculptural mane and muscles.`,
      ]
    },
    {
      id: 'CA4',
      naturalistic: true,
      variantes: [
        `${framings.full_body_monumental} POSE — NATURALISTIC: Faithfully recreate the horse's natural massive pose. Preserve exact sculptural weight distribution.`,
      ]
    },
  ],

  reptil: [
    {
      id: 'RE1',
      variantes: [
        `${framings.full_body} POSE — SPHINX REGAL: The reptile rests its heavy, cold-blooded mass deeply into the velvet cushion. Sculptural scales, ancient posture.`,
        `${framings.full_body} POSE — SPHINX REGAL: Heavy body anchored in the velvet. Head elevated, gaze turned with sovereign, volumetric presence.`,
      ]
    },
    {
      id: 'RE2',
      variantes: [
        `${framings.full_body} POSE — ELEVATED ALERT: Upright on front legs, the heavy belly resting organically. Dignified, ancient, three-dimensional.`,
        `${framings.full_body} POSE — ELEVATED ALERT: Upright, weight distributed naturally. Ancient sculptural authority.`,
      ]
    },
    {
      id: 'RE3',
      variantes: [
        `${framings.full_body} POSE — THREE QUARTER REST: 3/4 position, heavy tail dragging naturally. Thick, tactile scales.`,
        `${framings.full_body} POSE — THREE QUARTER REST: 3/4 position, massive and deeply embedded in the scene.`,
      ]
    },
    {
      id: 'RE4',
      naturalistic: true,
      variantes: [
        `${framings.full_body} POSE — NATURALISTIC: Faithfully recreate the reptile's natural heavy pose. Preserve organic weight and sculptural scales.`,
      ]
    },
  ],

  pequeno: [
    {
      id: 'AN1',
      variantes: [
        `${framings.full_body} POSE — SEATED REGAL: The small animal sits upright, its tiny body sinking organically into the immense plush cushion.`,
        `${framings.full_body} POSE — SEATED REGAL: Sits upright, nestled deeply in the velvet. Organic asymmetry in paw placement.`,
      ]
    },
    {
      id: 'AN2',
      variantes: [
        `${framings.close_crop} POSE — ALERT FRONTAL: Sits alert, weight anchored naturally. Small but possessing dense, living volume.`,
        `${framings.close_crop} POSE — ALERT FRONTAL: Anchored organically in the cushion. Head turned with quick, breathing curiosity.`,
      ]
    },
    {
      id: 'AN3',
      variantes: [
        `${framings.full_body} POSE — THREE QUARTER: 3/4 angle. The small body creates a deep, natural indentation in the velvet throne.`,
        `${framings.full_body} POSE — THREE QUARTER: 3/4 angle. A small, heavy sovereign anchored in its cushion.`,
      ]
    },
    {
      id: 'AN4',
      naturalistic: true,
      variantes: [
        `${framings.full_body} POSE — NATURALISTIC: Faithfully recreate the animal's natural pose. Preserve organic weight resting on the surface.`,
      ]
    },
  ],

  default: [
    {
      id: 'DF1',
      variantes: [
        `${framings.portrait} POSE: The animal rests heavily and organically on the cushion. The body yields naturally to gravity, distributing its weight deeply into the surface. Noble, sculptural, and asymmetrical.`,
        `${framings.half_body} POSE: The animal sits or reclines with tangible physical mass. Head raised, breathing and present.`,
      ]
    },
  ],
};

// ─── DETECCIÓN DE CATEGORÍA Y ASIGNACIÓN (SIN CAMBIOS) ───────────────────────
// (Mantén tus funciones detectarCategoria y asignarPose exactamente como estaban)
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
