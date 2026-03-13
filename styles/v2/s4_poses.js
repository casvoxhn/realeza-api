// SECCIÓN 4 — POSES v8.3
// v8.3 — Emotional Awww Edition: nuevas poses tiernas/emocionales para gatos, perros grandes, medianos y PEQUEÑOS
// + Refuerzo total anti-corte de cola/trasero + framing seguro

const framings = {
  portrait: `FRAMING: Medium-close portrait crop — the animal fills the frame beautifully. The bottom of the cushion is positioned very close to the bottom edge of the image, with only a tiny sliver of base visible. Allow the body to stretch naturally upwards. Proportions anatomically correct throughout. Do NOT compress or shrink the body.`,
  close_crop: `FRAMING: Close portrait crop. Anchor the cushion near the absolute bottom edge of the canvas. Allow the animal's chest and body to fill the vertical space proudly. Proportions anatomically correct throughout. Do NOT compress or shrink the body.`,
  close_crop_strong: `FRAMING: Extreme close portrait crop — chest and front paws barely visible at bottom edge. Zero floor visible. Body is massive and uncompressed, filling the frame.`,
  full_body: `FRAMING: Full figure on the cushion. The cushion rests very low in the frame to give maximum vertical room for the animal's natural height. Do NOT compress the torso. Proportions anatomically correct throughout.`,
  full_body_monumental: `FRAMING: Monumental composition from head to tail. The base anchors firmly at the bottom border. Anatomically correct, uncompressed, and powerful throughout.`,
  half_body: `FRAMING: The animal shown from head to mid-body. The cushion forms the bottom edge of the frame. The spine and chest expand naturally upwards without vertical compression.`,
  // Framing seguro anti-corte (usado en todas las nuevas poses emocionales)
  portrait_tail_safe: `FRAMING: Three-quarter length aristocratic portrait — the full animal from head to tail tip fills the frame naturally. Head, chest, mid-body, hindquarters, rear legs and bushy tail all clearly visible and uncropped. The cushion is positioned low in the frame to preserve complete lower body proportions and tail extension. No compression, no truncation, anatomically correct throughout.`
};

const miradas = {
  // GATOS
  gato_offlens: `Eyes directed just slightly off the camera lens — as if looking at the painter standing beside the easel. Natural, alive, sovereign.`,
  gato_lateral: `Eyes directed lazily to the side — natural, as if a minor movement caught the cat's attention. Head stays forward, only the eyes move with aristocratic indifference.`,
  gato_elevada: `Eyes directed slightly upward and to the side — contemplative, detached, carrying ancient intelligence.`,
  gato_indiferente: `Eyes directed very slightly downward. The cat has more important things to think about than the viewer. Total indifference and regal ease.`,
  gato_frontal: `Eyes look directly at the viewer — straight ahead, piercing, confident and direct.`,
  gato_headtilt: `Head faces viewer with a subtle, organic tilt to one side. Eyes look directly at the viewer — a rare moment of feline curiosity.`,
  // PERROS
  perro_offlens: `Eyes directed just slightly off the camera lens — as if looking at the master standing beside the painter. Warm, loyal, breathing.`,
  perro_girada: `Head turned naturally to one side — the heavy folds of the neck shifting organically. Natural, relaxed, confident.`,
  perro_headtilt: `Head tilted slightly to one side, eyes directed at the viewer with genuine curiosity — tender, highly expressive, alive.`,
  perro_directo: `Eyes looking straight at the viewer — confident, powerful, direct soul-to-soul connection.`,
};

// ─── GLOBALES ─────────────────────────────────────────────────────────────────
const perro_global = `CRITICAL — PRESERVE EXACT ANATOMY, EXPRESSION & PHYSICAL MASS: Study the reference photo carefully. You MUST perfectly preserve the specific bone structure, leg thickness, leg length, and chest width of the reference animal. The generated body and paws MUST match this exact anatomy, but presented in its most proud, majestic, and elevated posture. Flesh and thick muscular limbs must look three-dimensional and natural, but the core posture remains confident and upright. Transform this specific anatomical reality into a classical royal oil painting.`;

const gato_global = `CRITICAL — PRESERVE EXACT ANATOMY, FLUIDITY, MASS & COMPLETE BODY: Study the reference photo carefully. You MUST perfectly preserve the specific bone structure, limb thickness, proportions, AND FULL LENGTH from head to tail tip of THIS specific cat. The feline body carries undeniable physical weight, resting organically on the cushion but maintaining a proud, slightly elevated, and sovereign posture. The pose must feel relaxed yet aristocratic and sculptural. Never perfectly symmetrical. FULL HINDQUARTERS, REAR LEGS AND BUSHY TAIL MUST REMAIN VISIBLE, DETAILED AND UNCROPPED — no part of the lower body, hind legs or tail may disappear into shadow, velvet folds, frame edge or background.`;

// ─── POSES ───────────────────────────────────────────────────────────────────
const poses = {
  // ═══════════════════════════════════════════════════════════════════════════
  // GATO — con nuevas poses emocionales (G8-G10)
  // ═══════════════════════════════════════════════════════════════════════════
  gato: [
    // ... (mantengo tus poses originales G1a, G1b, G1c, G2, G3, G4, G5a, G5b, G6, G7 con cola reforzada)
    // Solo muestro las nuevas + G7 actualizado para que sea fácil copiar

    // G7 — Royal Nest (ya mejorado en v8.2)
    {
      id: 'G7',
      variantes: [
        `${framings.portrait_tail_safe} ${gato_global} POSE — ROYAL NEST: The cat reclines proudly with its complete body fully displayed from head to tail tip. Crucially, ONE FRONT PAW rests elegantly directly ON TOP OF the thick folds of its own velvet mantle. The animal and its royal garments are physically intertwined, projecting high self-esteem. The full voluminous bushy tail extends visibly and naturally to the viewer's left or behind, completely shown with natural flow and volume, partially resting among or beside the pooling velvet folds but never obscured, hidden or cropped. ${miradas.gato_offlens}`,
        `${framings.portrait_tail_safe} ${gato_global} POSE — ROYAL NEST: The cat reclines proudly with its complete body fully displayed from head to tail tip. Crucially, ONE FRONT PAW rests elegantly directly ON TOP OF the thick folds of its own velvet mantle. The animal and its royal garments are physically intertwined, projecting high self-esteem. The full voluminous bushy tail extends visibly and naturally to the viewer's left or behind, completely shown with natural flow and volume, partially resting among or beside the pooling velvet folds but never obscured, hidden or cropped. ${miradas.gato_elevada}`,
      ]
    },

    // === NUEVAS POSES EMOCIONALES (AWWW) ===
    // G8 — Heart Tilt (la que más vende)
    {
      id: 'G8',
      variantes: [
        `${framings.portrait_tail_safe} ${gato_global} POSE — HEART TILT: The cat sits with an adorable gentle head tilt to one side, eyes soft and slightly squinted in pure trust and affection, as if saying "I love you". One front paw subtly raised in a delicate 'pet me' gesture. Full bushy tail curled sweetly around the body. Instant heart-melting emotional connection that makes owners say "awww" and buy immediately. ${miradas.gato_headtilt} with deep warmth and love.`,
      ]
    },
    // G9 — Gentle Paw Reach
    {
      id: 'G9',
      variantes: [
        `${framings.portrait_tail_safe} ${gato_global} POSE — GENTLE PAW REACH: The cat extends one front paw forward softly toward the viewer with tender curiosity and love, eyes full of affection. Bushy tail relaxed and fully visible behind. Pure emotional warmth and "I trust you" vibe that triggers instant purchase. ${miradas.gato_frontal} with soft loving intensity.`,
      ]
    },
    // G10 — Cozy Cuddle Loaf
    {
      id: 'G10',
      variantes: [
        `${framings.portrait} ${gato_global} POSE — COZY CUDDLE LOAF: Compact luxurious loaf with chest gently elevated, eyes half-closed in blissful trust, one paw slightly forward in total surrender. Full bushy tail wrapped sweetly around the body. Overwhelming cuteness and emotional bond that makes owners tear up and buy the portrait on the spot.`,
      ]
    },

    // (Aquí puedes pegar el resto de tus poses originales G1a, G1b, G2, G3, G4, G5a, G5b, G6 si las tienes — todas con "full voluminous bushy tail" ya aplicadas)
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PERRO GRANDE
  // ═══════════════════════════════════════════════════════════════════════════
  perro_grande: [
    // ... tus poses originales PG1-PG7 ...

    // === NUEVAS POSES EMOCIONALES ===
    {
      id: 'PG8',
      variantes: [
        `${framings.portrait_tail_safe} ${perro_global} POSE — SOULFUL HEAD TILT: Massive dog tilts head adorably to one side, eyes wide and full of unconditional love, ears soft. One paw forward in gentle devotion. Tail visible wagging happily. Pure emotional "best friend forever" moment that sells instantly. ${miradas.perro_headtilt} with deep heartwarming affection.`,
      ]
    },
    {
      id: 'PG9',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — GENTLE LEAN: The powerful dog leans head gently toward the owner/viewer with total devotion and love, eyes soft and loyal. Tail full and relaxed behind. Instant tear-jerking loyalty that makes owners buy immediately.`,
      ]
    },
    {
      id: 'PG10',
      variantes: [
        `${framings.portrait_tail_safe} ${perro_global} POSE — HAPPY PAW UP: One huge paw lifted in joyful "high-five" or "I love you" gesture, eyes sparkling with pure happiness. Tail wagging with energy. Dopamine + emotional explosion — perfect for sales.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PERRO MEDIANO
  // ═══════════════════════════════════════════════════════════════════════════
  perro_mediano: [
    // ... tus poses originales ...

    // NUEVAS EMOCIONALES
    {
      id: 'PM7',
      variantes: [
        `${framings.portrait_tail_safe} ${perro_global} POSE — SWEET HEAD TILT: Medium dog tilts head cutely with big loving eyes, ears perked softly. One paw forward in sweet invitation. Tail wagging gently. Maximum "awww" emotional connection.`,
      ]
    },
    {
      id: 'PM8',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — LOVING LEAN: Gentle lean toward the viewer with pure devotion and soft eyes. Tail relaxed and visible. Heart-melting loyalty that sells every time.`,
      ]
    },
    {
      id: 'PM9',
      variantes: [
        `${framings.portrait_tail_safe} ${perro_global} POSE — PLAYFUL PAW UP: One paw lifted happily with joyful loving expression. Tail wagging cutely. Instant emotional purchase trigger.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PERRO PEQUEÑO — NUEVAS POSES EXTRA CUTE (para maximizar ventas)
  // ═══════════════════════════════════════════════════════════════════════════
  perro_pequeno: [
    {
      id: 'PP1',
      variantes: [`${framings.portrait} ${perro_global} POSE — SEATED UPRIGHT FORMAL: The small dog sits proudly...`], // tu original
    },
    // ... tus originales PP2, PP3, PP4, PP5 ...

    // === NUEVAS POSES SUPER CUTE Y EMOCIONALES (las que más venden con razas pequeñas) ===
    {
      id: 'PP6',
      variantes: [
        `${framings.portrait_tail_safe} ${perro_global} POSE — TINY HEART TILT: The tiny dog tilts its adorable little head to one side with huge sparkling eyes full of love, ears floppy and cute. One tiny paw raised sweetly. Bushy tail curled cutely. Pure "awww" overload — owners will cry and buy instantly.`,
      ]
    },
    {
      id: 'PP7',
      variantes: [
        `${framings.close_crop} ${perro_global} POSE — TINY PAW REACH: Tiny paw stretched forward in the cutest "pick me up and love me" gesture, eyes full of trust and affection. Tail wagging happily. Extreme emotional cuteness that converts to sales every single time.`,
      ]
    },
    {
      id: 'PP8',
      variantes: [
        `${framings.portrait} ${perro_global} POSE — TINY CUDDLE BALL: The small dog curls into the most adorable cozy ball on the cushion, eyes half-closed in blissful love, tiny paw peeking out. Tail wrapped sweetly. Heart-exploding cuteness and emotional bond — perfect for impulse buys.`,
      ]
    },
  ],

  // Resto de categorías (conejo, ave, caballo, reptil, pequeno, default) — sin cambios
  conejo: [ /* tus originales */ ],
  ave: [ /* tus originales */ ],
  caballo: [ /* tus originales */ ],
  reptil: [ /* tus originales */ ],
  pequeno: [ /* tus originales */ ],
  default: [
    { id: 'DF1', variantes: [`${framings.portrait_tail_safe} POSE: The animal rests organically on the cushion with a distinctly proud and elevated posture. Noble, sculptural, and asymmetrical. Full body and tail clearly visible.`] },
  ],
};

// ─── DETECCIÓN Y ASIGNACIÓN (sin cambios) ───────────────────────
function detectarCategoria(especie, raza) { /* tu código original sin cambios */ }
function asignarPose(especie, raza, esNaturalistic = false, poseIndex = null, varianteIndex = null) { /* tu código original sin cambios */ }

module.exports = { asignarPose, poses, detectarCategoria };
