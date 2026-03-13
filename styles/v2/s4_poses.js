// SECCIÓN 4 — POSES v8.2
// v8.2 — Refuerzo anti-corte trasero: full tail/hindquarters visibility, nuevo framing portrait_tail_safe, cola fuerte en todas las variantes de gato
const framings = {
  portrait: `FRAMING: Medium-close portrait crop — the animal fills the frame beautifully. The bottom of the cushion is positioned very close to the bottom edge of the image, with only a tiny sliver of base visible. Allow the body to stretch naturally upwards. Proportions anatomically correct throughout. Do NOT compress or shrink the body.`,
  close_crop: `FRAMING: Close portrait crop. Anchor the cushion near the absolute bottom edge of the canvas. Allow the animal's chest and body to fill the vertical space proudly. Proportions anatomically correct throughout. Do NOT compress or shrink the body.`,
  close_crop_strong: `FRAMING: Extreme close portrait crop — chest and front paws barely visible at bottom edge. Zero floor visible. Body is massive and uncompressed, filling the frame.`,
  full_body: `FRAMING: Full figure on the cushion. The cushion rests very low in the frame to give maximum vertical room for the animal's natural height. Do NOT compress the torso. Proportions anatomically correct throughout.`,
  full_body_monumental: `FRAMING: Monumental composition from head to tail. The base anchors firmly at the bottom border. Anatomically correct, uncompressed, and powerful throughout.`,
  half_body: `FRAMING: The animal shown from head to mid-body. The cushion forms the bottom edge of the frame. The spine and chest expand naturally upwards without vertical compression.`,
  // NUEVO: Framing seguro para poses con wardrobe/manto
  portrait_tail_safe: `FRAMING: Three-quarter length aristocratic portrait — the full animal from head to tail tip fills the frame naturally. Head, chest, mid-body, hindquarters, rear legs and bushy tail all clearly visible and uncropped. The cushion is positioned low in the frame to preserve complete lower body proportions and tail extension. No compression, no truncation, anatomically correct throughout.`
};

const miradas = {
  // GATOS (sin cambios)
  gato_offlens: `Eyes directed just slightly off the camera lens — as if looking at the painter standing beside the easel. Natural, alive, sovereign.`,
  gato_lateral: `Eyes directed lazily to the side — natural, as if a minor movement caught the cat's attention. Head stays forward, only the eyes move with aristocratic indifference.`,
  gato_elevada: `Eyes directed slightly upward and to the side — contemplative, detached, carrying ancient intelligence.`,
  gato_indiferente: `Eyes directed very slightly downward. The cat has more important things to think about than the viewer. Total indifference and regal ease.`,
  gato_frontal: `Eyes look directly at the viewer — straight ahead, piercing, confident and direct.`,
  gato_headtilt: `Head faces viewer with a subtle, organic tilt to one side. Eyes look directly at the viewer — a rare moment of feline curiosity.`,
  // PERROS (sin cambios)
  perro_offlens: `Eyes directed just slightly off the camera lens — as if looking at the master standing beside the painter. Warm, loyal, breathing.`,
  perro_girada: `Head turned naturally to one side — the heavy folds of the neck shifting organically. Natural, relaxed, confident.`,
  perro_headtilt: `Head tilted slightly to one side, eyes directed at the viewer with genuine curiosity — tender, highly expressive, alive.`,
  perro_directo: `Eyes looking straight at the viewer — confident, powerful, direct soul-to-soul connection.`,
};

// ─── INSTRUCCIONES GLOBALES DE FÍSICA Y MASA ─────────────────────────────────
const perro_global = `CRITICAL — PRESERVE EXACT ANATOMY, EXPRESSION & PHYSICAL MASS: Study the reference photo carefully. You MUST perfectly preserve the specific bone structure, leg thickness, leg length, and chest width of the reference animal. The generated body and paws MUST match this exact anatomy, but presented in its most proud, majestic, and elevated posture. Flesh and thick muscular limbs must look three-dimensional and natural, but the core posture remains confident and upright. Transform this specific anatomical reality into a classical royal oil painting.`;

const gato_global = `CRITICAL — PRESERVE EXACT ANATOMY, FLUIDITY, MASS & COMPLETE BODY: Study the reference photo carefully. You MUST perfectly preserve the specific bone structure, limb thickness, proportions, AND FULL LENGTH from head to tail tip of THIS specific cat. The feline body carries undeniable physical weight, resting organically on the cushion but maintaining a proud, slightly elevated, and sovereign posture. The pose must feel relaxed yet aristocratic and sculptural. Never perfectly symmetrical. FULL HINDQUARTERS, REAR LEGS AND BUSHY TAIL MUST REMAIN VISIBLE, DETAILED AND UNCROPPED — no part of the lower body, hind legs or tail may disappear into shadow, velvet folds, frame edge or background.`;

// ─── POSES ───────────────────────────────────────────────────────────────────
const poses = {
  // GATOS (solo muestro las modificadas; las demás se mantienen iguales pero con cola fuerte)
  gato: [
    // G1a — Sphinx derecha (cola reforzada)
    {
      id: 'G1a',
      variantes: [
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX RIGHT: The cat rests with aristocratic ease. The CHEST is held proudly, slightly elevated and resting naturally on the velvet cushion without sinking deeply. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the right with a relaxed, upright curve. The HEAD is held high with supreme sovereign dignity. The full voluminous bushy tail is clearly visible, extending naturally and curling elegantly into view. ${miradas.gato_offlens}`,
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX RIGHT: The cat rests with aristocratic ease. The CHEST is held proudly, slightly elevated and resting naturally on the velvet cushion without sinking deeply. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the right with a relaxed, upright curve. The HEAD is held high with supreme sovereign dignity. The full voluminous bushy tail is clearly visible, extending naturally and curling elegantly into view. ${miradas.gato_lateral}`,
      ]
    },
    // G1b — Sphinx izquierda (similar)
    {
      id: 'G1b',
      variantes: [
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX LEFT: The cat rests with aristocratic ease. The CHEST is held proudly, slightly elevated and resting naturally on the velvet cushion without sinking deeply. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the left with a relaxed, upright curve. The HEAD is held high with supreme sovereign dignity. The full voluminous bushy tail is clearly visible, extending naturally and curling elegantly into view. ${miradas.gato_offlens}`,
        `${framings.portrait} ${gato_global} POSE — ROYAL SPHINX LEFT: The cat rests with aristocratic ease. The CHEST is held proudly, slightly elevated and resting naturally on the velvet cushion without sinking deeply. The FRONT PAWS are extended forward, resting heavily or crossed elegantly with natural asymmetry. The BODY shifts slightly to the left with a relaxed, upright curve. The HEAD is held high with supreme sovereign dignity. The full voluminous bushy tail is clearly visible, extending naturally and curling elegantly into view. ${miradas.gato_lateral}`,
      ]
    },
    // G7 — Royal Nest (la clave, con framing seguro y cola full)
    {
      id: 'G7',
      variantes: [
        `${framings.portrait_tail_safe} ${gato_global} POSE — ROYAL NEST: The cat reclines proudly with its complete body fully displayed from head to tail tip. Crucially, ONE FRONT PAW rests elegantly directly ON TOP OF the thick folds of its own velvet mantle. The animal and its royal garments are physically intertwined, projecting high self-esteem. The full voluminous bushy tail extends visibly and naturally to the viewer's left or behind, completely shown with natural flow and volume, partially resting among or beside the pooling velvet folds but never obscured, hidden or cropped. ${miradas.gato_offlens}`,
        `${framings.portrait_tail_safe} ${gato_global} POSE — ROYAL NEST: The cat reclines proudly with its complete body fully displayed from head to tail tip. Crucially, ONE FRONT PAW rests elegantly directly ON TOP OF the thick folds of its own velvet mantle. The animal and its royal garments are physically intertwined, projecting high self-esteem. The full voluminous bushy tail extends visibly and naturally to the viewer's left or behind, completely shown with natural flow and volume, partially resting among or beside the pooling velvet folds but never obscured, hidden or cropped. ${miradas.gato_elevada}`,
      ]
    },
    // G4 — Loaf (mejorado, aunque sigue ocultando patas delanteras, cola más visible)
    {
      id: 'G4',
      variantes: [
        `${framings.portrait} ${gato_global} POSE — SCULPTURAL LOAF: The cat rests as a compact, volumetric mass on the cushion, but keeping the chest and head confidently elevated. FRONT PAWS are completely tucked and hidden. The body is an organic mound of fur shifting naturally to one side. The full voluminous bushy tail is clearly visible, curling naturally nearby with elegant volume. Supreme comfort and regal dignity. ${miradas.gato_headtilt}`,
        `${framings.portrait} ${gato_global} POSE — SCULPTURAL LOAF: The cat rests as a compact, volumetric mass on the cushion, but keeping the chest and head confidently elevated. FRONT PAWS are completely tucked and hidden. The body is an organic mound of fur shifting naturally to one side. The full voluminous bushy tail is clearly visible, curling naturally nearby with elegant volume. Supreme comfort and regal dignity. ${miradas.gato_lateral}`,
      ]
    },
    // ... (las demás poses de gato como G2, G3, G5a/b, G6 mantienen su estructura original, solo cambia la descripción de cola a "full voluminous bushy tail..." si quieres máxima consistencia)
  ],
  // PERROS y otras categorías → sin cambios importantes por ahora (el problema es más fuerte en gatos persas con manto)
  // Mantén las secciones perro_grande, perro_mediano, etc. tal como estaban
  // ...

  default: [
    { id: 'DF1', variantes: [`${framings.portrait_tail_safe} POSE: The animal rests organically on the cushion with a distinctly proud and elevated posture. Noble, sculptural, and asymmetrical. Full body and tail clearly visible.`] },
  ],
};

// ─── DETECCIÓN DE CATEGORÍA Y ASIGNACIÓN ───────────────────────
// (sin cambios, mantén igual)

function detectarCategoria(especie, raza) {
  // ... igual que antes
}

function asignarPose(especie, raza, esNaturalistic = false, poseIndex = null, varianteIndex = null) {
  // ... igual que antes
}

module.exports = { asignarPose, poses, detectarCategoria };
