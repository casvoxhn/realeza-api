// SECCIÓN 4 — POSES v5
// Framing embebido en cada pose — nunca hay contradicción con s5_sujeto.
//
// REGLAS DE ENCUADRE:
//   Perros y gatos — encuadre cinematográfico cercano. No se fuerza cuerpo completo.
//     Si la parte trasera se corta naturalmente, está bien — lo que se ve debe
//     tener coherencia anatómica y presencia. El animal llena el frame con potencia.
//   Aves, reptiles, conejos, animales pequeños, caballos — cuerpo completo,
//     porque en estas especies el cuerpo entero aporta dignidad y contexto.
//
// OTRAS REGLAS:
//   Gatos: mirada off-lens en todas excepto G2 y G5 (frontal directa aprobada)
//   Perros: preservar expresión natural de la foto siempre
//   Nunca simetría perfecta — siempre asimetría natural

// ─── FRAMINGS ────────────────────────────────────────────────────────────────

const framings = {

  // PERROS Y GATOS — cinematográfico cercano
  // No fuerza cuerpo completo. Si la parte trasera se corta, está bien.
  // Lo que se ve debe ser coherente y anatómicamente correcto.
  cinematic: `FRAMING: Close cinematic crop — the animal fills the frame with commanding presence. Head and chest prominent in the upper half, front paws visible at the lower portion. If the rear body or haunches fall outside the frame naturally, that is acceptable — what IS visible must be anatomically correct and coherent. Do NOT artificially shrink the animal to fit the full body. Do NOT zoom out excessively. The animal should feel large, close, and monumental.`,

  // CLOSE CROP — para loaf de gato y portrait de perro pequeño
  close_crop: `FRAMING: Very close crop — the animal's face and chest fill the majority of the frame. The face is the hero. Front paws and cushion edge visible at the bottom. The animal feels monumental and intimate.`,

  // CLOSE CROP FUERTE — perro pequeño portrait
  close_crop_strong: `FRAMING: Extremely close crop — the animal's face and chest fill at least 70% of the frame. The face IS the painting. Chest and front paws barely visible at the bottom edge. Monumental presence despite small size.`,

  // CUERPO COMPLETO — aves, reptiles, conejos, animales pequeños
  full_body: `FRAMING: The complete body of the animal is fully visible from head to tail — full figure on the cushion or surface. The animal fills the canvas with dignified presence. Proportions are anatomically correct throughout. Do NOT crop the body.`,

  // CUERPO COMPLETO MONUMENTAL — caballos
  full_body_monumental: `FRAMING: The complete body of the horse fills the canvas — monumental composition from head to tail. Anatomically correct and powerful throughout. The horse dominates the frame entirely.`,

  // MEDIO CUERPO — para poses sentadas de conejo/reptil donde el cuerpo trasero es menos relevante
  half_body: `FRAMING: The animal shown from head to mid-body — face prominent, front paws and chest visible, body naturally cropped at the cushion. Natural portrait framing with close presence.`,
};

// ─── MIRADAS ─────────────────────────────────────────────────────────────────

const miradas = {
  // GATOS
  gato_offlens:     `Eyes directed just slightly off the camera lens — as if looking at the photographer standing just beside the camera, not into the lens itself. Natural, alive, present.`,
  gato_lateral:     `Eyes directed 15 degrees to the side — natural, as if something just caught the cat's attention. Head stays forward, only the eyes move.`,
  gato_elevada:     `Eyes directed slightly upward and to the side — contemplative, detached, sovereign.`,
  gato_indiferente: `Eyes directed very slightly downward — 10 degrees only. The cat has more important things to think about than the viewer. Total indifference.`,
  gato_frontal:     `Eyes look directly at the viewer — straight ahead, confident and direct.`,
  gato_headtilt:    `Head faces viewer with a subtle 6 degree tilt to one side — like a cat that just heard something interesting. Eyes look directly at the viewer — warm and curious.`,

  // PERROS
  perro_offlens:  `Eyes directed just slightly off the camera lens — as if looking at the photographer standing just beside the camera. Warm, loyal, present.`,
  perro_girada:   `Head turned 30 degrees to one side — body stays forward, head rotates naturally to the side. Natural, relaxed, confident.`,
  perro_headtilt: `Head tilted 15 degrees to one side, eyes directed at the viewer with genuine curiosity — tender, human, alive.`,
  perro_directo:  `Eyes looking straight at the viewer — confident, powerful, direct connection.`,
};

// ─── INSTRUCCIÓN GLOBAL PERROS ───────────────────────────────────────────────

const perro_global = `CRITICAL — PRESERVE THE DOG'S NATURAL EXPRESSION: Study the dog's expression and energy in the reference photo carefully. If the mouth is open — preserve it open. If the ears are forward and alert — preserve that alertness. If the dog looks relaxed — preserve that calm. The portrait must feel like THIS specific dog, not a generic noble dog. Never create a perfectly symmetrical pose — always introduce natural asymmetry.`;

// ─── POSES ───────────────────────────────────────────────────────────────────

const poses = {

  // ═══════════════════════════════════════════════════════════════════════════
  // GATO — encuadre cinematográfico en todas las poses
  // ═══════════════════════════════════════════════════════════════════════════
  gato: [

    // G1a — Sphinx derecha — 4 miradas
    {
      id: 'G1a',
      variantes: [
        `${framings.cinematic} POSE — SPHINX RECLINE RIGHT: The cat's FRONT LEGS are both fully extended forward and lying flat on the cushion. The cat's CHEST is lowered and resting on the cushion. The cat's BODY is oriented slightly to the right — 15 degrees off center. The cat's HEAD is fully erect and elevated — chin up. NO tail visible. ${miradas.gato_offlens}`,
        `${framings.cinematic} POSE — SPHINX RECLINE RIGHT: The cat's FRONT LEGS are both fully extended forward and lying flat on the cushion. The cat's CHEST is lowered and resting on the cushion. The cat's BODY is oriented slightly to the right — 15 degrees off center. The cat's HEAD is fully erect and elevated — chin up. NO tail visible. ${miradas.gato_lateral}`,
        `${framings.cinematic} POSE — SPHINX RECLINE RIGHT: The cat's FRONT LEGS are both fully extended forward and lying flat on the cushion. The cat's CHEST is lowered and resting on the cushion. The cat's BODY is oriented slightly to the right — 15 degrees off center. The cat's HEAD is fully erect and elevated — chin up. NO tail visible. ${miradas.gato_elevada}`,
        `${framings.cinematic} POSE — SPHINX RECLINE RIGHT: The cat's FRONT LEGS are both fully extended forward and lying flat on the cushion. The cat's CHEST is lowered and resting on the cushion. The cat's BODY is oriented slightly to the right — 15 degrees off center. The cat's HEAD is fully erect and elevated — chin up. NO tail visible. ${miradas.gato_indiferente}`,
      ]
    },

    // G1b — Sphinx izquierda — 4 miradas
    {
      id: 'G1b',
      variantes: [
        `${framings.cinematic} POSE — SPHINX RECLINE LEFT: The cat's FRONT LEGS are both fully extended forward and lying flat on the cushion. The cat's CHEST is lowered and resting on the cushion. The cat's BODY is oriented slightly to the left — 15 degrees off center. The cat's HEAD is fully erect and elevated — chin up. NO tail visible. ${miradas.gato_offlens}`,
        `${framings.cinematic} POSE — SPHINX RECLINE LEFT: The cat's FRONT LEGS are both fully extended forward and lying flat on the cushion. The cat's CHEST is lowered and resting on the cushion. The cat's BODY is oriented slightly to the left — 15 degrees off center. The cat's HEAD is fully erect and elevated — chin up. NO tail visible. ${miradas.gato_lateral}`,
        `${framings.cinematic} POSE — SPHINX RECLINE LEFT: The cat's FRONT LEGS are both fully extended forward and lying flat on the cushion. The cat's CHEST is lowered and resting on the cushion. The cat's BODY is oriented slightly to the left — 15 degrees off center. The cat's HEAD is fully erect and elevated — chin up. NO tail visible. ${miradas.gato_elevada}`,
        `${framings.cinematic} POSE — SPHINX RECLINE LEFT: The cat's FRONT LEGS are both fully extended forward and lying flat on the cushion. The cat's CHEST is lowered and resting on the cushion. The cat's BODY is oriented slightly to the left — 15 degrees off center. The cat's HEAD is fully erect and elevated — chin up. NO tail visible. ${miradas.gato_indiferente}`,
      ]
    },

    // G2 — Upright asimétrico — close crop — 3 miradas — mirada frontal directa aprobada
    {
      id: 'G2',
      variantes: [
        `${framings.close_crop} POSE — UPRIGHT ASYMMETRIC: The cat's HINDQUARTERS are fully seated on the cushion. The cat's FRONT PAWS are placed on the cushion — one paw 2-3 cm ahead of the other, breaking perfect symmetry. The weight shifts very slightly to one side. The cat's BACK is straight but not rigid. The cat's TAIL is wrapped loosely around one side of the body. ${miradas.gato_frontal}`,
        `${framings.close_crop} POSE — UPRIGHT ASYMMETRIC: The cat's HINDQUARTERS are fully seated on the cushion. The cat's FRONT PAWS are placed on the cushion — one paw 2-3 cm ahead of the other, breaking perfect symmetry. The weight shifts very slightly to one side. The cat's BACK is straight but not rigid. The cat's TAIL is wrapped loosely around one side of the body. ${miradas.gato_lateral}`,
        `${framings.close_crop} POSE — UPRIGHT ASYMMETRIC: The cat's HINDQUARTERS are fully seated on the cushion. The cat's FRONT PAWS are placed on the cushion — one paw 2-3 cm ahead of the other, breaking perfect symmetry. The weight shifts very slightly to one side. The cat's BACK is straight but not rigid. The cat's TAIL is wrapped loosely around one side of the body. ${miradas.gato_indiferente}`,
      ]
    },

    // G3 — Three quarter — cinematic — 2 miradas — NO junto a G2
    {
      id: 'G3',
      noJuntoA: ['G2'],
      variantes: [
        `${framings.cinematic} POSE — THREE QUARTER TURN: The cat's HINDQUARTERS are seated on the cushion. The cat's BODY is turned 3/4 away from the viewer — the flank and side are clearly visible. The cat's FRONT PAWS are flat on the cushion, one slightly forward. The cat's HEAD is turned completely back toward the viewer — sharp confident neck rotation. Body faces away, head faces forward. ${miradas.gato_offlens}`,
        `${framings.cinematic} POSE — THREE QUARTER TURN: The cat's HINDQUARTERS are seated on the cushion. The cat's BODY is turned 3/4 away from the viewer — the flank and side are clearly visible. The cat's FRONT PAWS are flat on the cushion, one slightly forward. The cat's HEAD is turned completely back toward the viewer — sharp confident neck rotation. Body faces away, head faces forward. ${miradas.gato_lateral}`,
      ]
    },

    // G4 — Loaf — close crop — 4 miradas
    {
      id: 'G4',
      variantes: [
        `${framings.close_crop} POSE — LOAF ANGLED: The cat's FRONT PAWS are completely tucked and hidden underneath the chest. The cat's BODY is compact and rounded, resting directly on the cushion. The cat's BODY is turned very slightly — 15 degrees to one side. NO tail visible. NO paws visible. ${miradas.gato_headtilt}`,
        `${framings.close_crop} POSE — LOAF ANGLED: The cat's FRONT PAWS are completely tucked and hidden underneath the chest. The cat's BODY is compact and rounded, resting directly on the cushion. The cat's BODY is turned very slightly — 15 degrees to one side. NO tail visible. NO paws visible. ${miradas.gato_lateral}`,
        `${framings.close_crop} POSE — LOAF ANGLED: The cat's FRONT PAWS are completely tucked and hidden underneath the chest. The cat's BODY is compact and rounded, resting directly on the cushion. The cat's BODY is turned very slightly — 15 degrees to one side. NO tail visible. NO paws visible. ${miradas.gato_elevada}`,
        `${framings.close_crop} POSE — LOAF ANGLED: The cat's FRONT PAWS are completely tucked and hidden underneath the chest. The cat's BODY is compact and rounded, resting directly on the cushion. The cat's BODY is turned very slightly — 15 degrees to one side. NO tail visible. NO paws visible. ${miradas.gato_indiferente}`,
      ]
    },

    // G5a — Alineado izquierda — close crop — 1 mirada frontal aprobada
    {
      id: 'G5a',
      variantes: [
        `${framings.close_crop} POSE — ALIGNED LEFT: The cat's BODY and HEAD are both oriented to the left — fully aligned in the same direction. The cat is seated with HINDQUARTERS on the cushion. FRONT PAWS flat on the cushion, one slightly ahead of the other. The cat's HEAD faces left, aligned with the body direction. ${miradas.gato_frontal}`,
      ]
    },

    // G5b — Alineado derecha — close crop — 1 mirada frontal aprobada
    {
      id: 'G5b',
      variantes: [
        `${framings.close_crop} POSE — ALIGNED RIGHT: The cat's BODY and HEAD are both oriented to the right — fully aligned in the same direction. The cat is seated with HINDQUARTERS on the cushion. FRONT PAWS flat on the cushion, one slightly ahead of the other. The cat's HEAD faces right, aligned with the body direction. ${miradas.gato_frontal}`,
      ]
    },

    // G6 — Naturalistic — cinematic
    {
      id: 'G6',
      naturalistic: true,
      variantes: [
        `${framings.cinematic} POSE — NATURALISTIC: Faithfully recreate the cat's natural pose from the reference photo. Preserve the exact body position, limb placement, and tail position as shown. Transform it into a royal oil painting while keeping the pose 100% faithful to the reference.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PERRO GRANDE — encuadre cinematográfico en todas las poses
  // ═══════════════════════════════════════════════════════════════════════════
  perro_grande: [

    // PG1 — Landseer Recline — cinematic — 4 miradas
    {
      id: 'PG1',
      variantes: [
        `${framings.cinematic} ${perro_global} POSE — LANDSEER RECLINE: The dog lies with chest slightly elevated on the cushion. Both front legs extended forward, one paw slightly over the other — natural asymmetry. Head fully erect and elevated — chin up, noble. The rear haunches may fall outside the frame naturally — what IS visible must be coherent and powerful. ${miradas.perro_offlens}`,
        `${framings.cinematic} ${perro_global} POSE — LANDSEER RECLINE: The dog lies with chest slightly elevated on the cushion. Both front legs extended forward, one paw slightly over the other — natural asymmetry. Head fully erect and elevated — chin up, noble. The rear haunches may fall outside the frame naturally — what IS visible must be coherent and powerful. ${miradas.perro_girada}`,
        `${framings.cinematic} ${perro_global} POSE — LANDSEER RECLINE: The dog lies with chest slightly elevated on the cushion. Both front legs extended forward, one paw slightly over the other — natural asymmetry. Head fully erect and elevated — chin up, noble. The rear haunches may fall outside the frame naturally — what IS visible must be coherent and powerful. ${miradas.perro_headtilt}`,
        `${framings.cinematic} ${perro_global} POSE — LANDSEER RECLINE: The dog lies with chest slightly elevated on the cushion. Both front legs extended forward, one paw slightly over the other — natural asymmetry. Head fully erect and elevated — chin up, noble. The rear haunches may fall outside the frame naturally — what IS visible must be coherent and powerful. ${miradas.perro_directo}`,
      ]
    },

    // PG2 — Sphinx Noble — cinematic — 4 miradas
    {
      id: 'PG2',
      variantes: [
        `${framings.cinematic} ${perro_global} POSE — SPHINX NOBLE: The dog's chest is lowered and resting on the cushion. Both front legs fully extended forward, one paw slightly ahead of the other. Head fully erect and elevated — chin up, commanding. The rear haunches may fall outside the frame naturally — what IS visible must be coherent and powerful. ${miradas.perro_offlens}`,
        `${framings.cinematic} ${perro_global} POSE — SPHINX NOBLE: The dog's chest is lowered and resting on the cushion. Both front legs fully extended forward, one paw slightly ahead of the other. Head fully erect and elevated — chin up, commanding. The rear haunches may fall outside the frame naturally — what IS visible must be coherent and powerful. ${miradas.perro_girada}`,
        `${framings.cinematic} ${perro_global} POSE — SPHINX NOBLE: The dog's chest is lowered and resting on the cushion. Both front legs fully extended forward, one paw slightly ahead of the other. Head fully erect and elevated — chin up, commanding. The rear haunches may fall outside the frame naturally — what IS visible must be coherent and powerful. ${miradas.perro_headtilt}`,
        `${framings.cinematic} ${perro_global} POSE — SPHINX NOBLE: The dog's chest is lowered and resting on the cushion. Both front legs fully extended forward, one paw slightly ahead of the other. Head fully erect and elevated — chin up, commanding. The rear haunches may fall outside the frame naturally — what IS visible must be coherent and powerful. ${miradas.perro_directo}`,
      ]
    },

    // PG3 — Seated Proud — cinematic — 4 miradas
    {
      id: 'PG3',
      variantes: [
        `${framings.cinematic} ${perro_global} POSE — SEATED PROUD: The dog sits upright on the cushion — hindquarters firmly seated, chest broad and forward. One front paw very slightly ahead of the other — natural asymmetry. Back straight but not rigid. Head elevated naturally. ${miradas.perro_offlens}`,
        `${framings.cinematic} ${perro_global} POSE — SEATED PROUD: The dog sits upright on the cushion — hindquarters firmly seated, chest broad and forward. One front paw very slightly ahead of the other — natural asymmetry. Back straight but not rigid. Head elevated naturally. ${miradas.perro_girada}`,
        `${framings.cinematic} ${perro_global} POSE — SEATED PROUD: The dog sits upright on the cushion — hindquarters firmly seated, chest broad and forward. One front paw very slightly ahead of the other — natural asymmetry. Back straight but not rigid. Head elevated naturally. ${miradas.perro_headtilt}`,
        `${framings.cinematic} ${perro_global} POSE — SEATED PROUD: The dog sits upright on the cushion — hindquarters firmly seated, chest broad and forward. One front paw very slightly ahead of the other — natural asymmetry. Back straight but not rigid. Head elevated naturally. ${miradas.perro_directo}`,
      ]
    },

    // PG4 — Three Quarter — cinematic — 3 miradas
    {
      id: 'PG4',
      variantes: [
        `${framings.cinematic} ${perro_global} POSE — THREE QUARTER: The dog's body is turned 3/4 toward one side — flank and side clearly visible. Head turned back toward the viewer — confident, dynamic. One front paw slightly forward — natural asymmetry. ${miradas.perro_offlens}`,
        `${framings.cinematic} ${perro_global} POSE — THREE QUARTER: The dog's body is turned 3/4 toward one side — flank and side clearly visible. Head turned back toward the viewer — confident, dynamic. One front paw slightly forward — natural asymmetry. ${miradas.perro_headtilt}`,
        `${framings.cinematic} ${perro_global} POSE — THREE QUARTER: The dog's body is turned 3/4 toward one side — flank and side clearly visible. Head turned back toward the viewer — confident, dynamic. One front paw slightly forward — natural asymmetry. ${miradas.perro_directo}`,
      ]
    },

    // PG5 — Naturalistic — cinematic
    {
      id: 'PG5',
      naturalistic: true,
      variantes: [
        `${framings.cinematic} ${perro_global} POSE — NATURALISTIC: Faithfully recreate the dog's natural pose from the reference photo. Preserve the exact body position, limb placement, and expression. Transform it into a royal oil painting while keeping the pose 100% faithful.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PERRO MEDIANO — encuadre cinematográfico
  // ═══════════════════════════════════════════════════════════════════════════
  perro_mediano: [

    // PM1 — Landseer Recline — cinematic — 4 miradas
    {
      id: 'PM1',
      variantes: [
        `${framings.cinematic} ${perro_global} POSE — LANDSEER RECLINE: The dog lies with chest slightly elevated on the cushion — cushion proportional to the dog's size. Both front legs extended forward, one paw slightly over the other. Head fully erect — chin up. Rear may fall outside frame naturally. ${miradas.perro_offlens}`,
        `${framings.cinematic} ${perro_global} POSE — LANDSEER RECLINE: The dog lies with chest slightly elevated on the cushion — cushion proportional to the dog's size. Both front legs extended forward, one paw slightly over the other. Head fully erect — chin up. Rear may fall outside frame naturally. ${miradas.perro_girada}`,
        `${framings.cinematic} ${perro_global} POSE — LANDSEER RECLINE: The dog lies with chest slightly elevated on the cushion — cushion proportional to the dog's size. Both front legs extended forward, one paw slightly over the other. Head fully erect — chin up. Rear may fall outside frame naturally. ${miradas.perro_headtilt}`,
        `${framings.cinematic} ${perro_global} POSE — LANDSEER RECLINE: The dog lies with chest slightly elevated on the cushion — cushion proportional to the dog's size. Both front legs extended forward, one paw slightly over the other. Head fully erect — chin up. Rear may fall outside frame naturally. ${miradas.perro_directo}`,
      ]
    },

    // PM2 — Seated Proud — cinematic — 4 miradas
    {
      id: 'PM2',
      variantes: [
        `${framings.cinematic} ${perro_global} POSE — SEATED PROUD: The dog sits upright — chest forward, one front paw slightly ahead of the other. Head elevated naturally. Cushion proportional to dog's size. ${miradas.perro_offlens}`,
        `${framings.cinematic} ${perro_global} POSE — SEATED PROUD: The dog sits upright — chest forward, one front paw slightly ahead of the other. Head elevated naturally. Cushion proportional to dog's size. ${miradas.perro_girada}`,
        `${framings.cinematic} ${perro_global} POSE — SEATED PROUD: The dog sits upright — chest forward, one front paw slightly ahead of the other. Head elevated naturally. Cushion proportional to dog's size. ${miradas.perro_headtilt}`,
        `${framings.cinematic} ${perro_global} POSE — SEATED PROUD: The dog sits upright — chest forward, one front paw slightly ahead of the other. Head elevated naturally. Cushion proportional to dog's size. ${miradas.perro_directo}`,
      ]
    },

    // PM3 — Three Quarter — cinematic — 3 miradas
    {
      id: 'PM3',
      variantes: [
        `${framings.cinematic} ${perro_global} POSE — THREE QUARTER: The dog's body is turned 3/4 to one side — flank visible. Head turned back toward viewer. Natural asymmetry. Cushion proportional to dog's size. ${miradas.perro_offlens}`,
        `${framings.cinematic} ${perro_global} POSE — THREE QUARTER: The dog's body is turned 3/4 to one side — flank visible. Head turned back toward viewer. Natural asymmetry. Cushion proportional to dog's size. ${miradas.perro_headtilt}`,
        `${framings.cinematic} ${perro_global} POSE — THREE QUARTER: The dog's body is turned 3/4 to one side — flank visible. Head turned back toward viewer. Natural asymmetry. Cushion proportional to dog's size. ${miradas.perro_directo}`,
      ]
    },

    // PM4 — Seated Angled — cinematic — 4 miradas
    {
      id: 'PM4',
      variantes: [
        `${framings.cinematic} ${perro_global} POSE — SEATED ANGLED: The dog sits with body angled 20 degrees to one side — not fully frontal, natural depth. Chest forward and slightly turned. One front paw noticeably ahead of the other. Cushion proportional. ${miradas.perro_offlens}`,
        `${framings.cinematic} ${perro_global} POSE — SEATED ANGLED: The dog sits with body angled 20 degrees to one side — not fully frontal, natural depth. Chest forward and slightly turned. One front paw noticeably ahead of the other. Cushion proportional. ${miradas.perro_girada}`,
        `${framings.cinematic} ${perro_global} POSE — SEATED ANGLED: The dog sits with body angled 20 degrees to one side — not fully frontal, natural depth. Chest forward and slightly turned. One front paw noticeably ahead of the other. Cushion proportional. ${miradas.perro_headtilt}`,
        `${framings.cinematic} ${perro_global} POSE — SEATED ANGLED: The dog sits with body angled 20 degrees to one side — not fully frontal, natural depth. Chest forward and slightly turned. One front paw noticeably ahead of the other. Cushion proportional. ${miradas.perro_directo}`,
      ]
    },

    // PM5 — Naturalistic — cinematic
    {
      id: 'PM5',
      naturalistic: true,
      variantes: [
        `${framings.cinematic} ${perro_global} POSE — NATURALISTIC: Faithfully recreate the dog's natural pose from the reference photo. Preserve exact body position, limb placement, and expression. Transform into a royal oil painting while keeping the pose 100% faithful.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PERRO PEQUEÑO
  // PP3 es la única con close_crop_strong — las demás cinematic
  // Sin poses reclinadas — pierden dignidad en razas pequeñas
  // ═══════════════════════════════════════════════════════════════════════════
  perro_pequeno: [

    // PP1 — Seated Upright Formal — cinematic — 4 miradas
    {
      id: 'PP1',
      variantes: [
        `${framings.cinematic} ${perro_global} POSE — SEATED UPRIGHT FORMAL: The small dog sits perfectly upright — back straight, chest forward. Cushion sized to make the dog look dignified, not swallowed. One front paw slightly ahead of the other. Head elevated. ${miradas.perro_offlens}`,
        `${framings.cinematic} ${perro_global} POSE — SEATED UPRIGHT FORMAL: The small dog sits perfectly upright — back straight, chest forward. Cushion sized to make the dog look dignified, not swallowed. One front paw slightly ahead of the other. Head elevated. ${miradas.perro_girada}`,
        `${framings.cinematic} ${perro_global} POSE — SEATED UPRIGHT FORMAL: The small dog sits perfectly upright — back straight, chest forward. Cushion sized to make the dog look dignified, not swallowed. One front paw slightly ahead of the other. Head elevated. ${miradas.perro_headtilt}`,
        `${framings.cinematic} ${perro_global} POSE — SEATED UPRIGHT FORMAL: The small dog sits perfectly upright — back straight, chest forward. Cushion sized to make the dog look dignified, not swallowed. One front paw slightly ahead of the other. Head elevated. ${miradas.perro_directo}`,
      ]
    },

    // PP2 — Seated Angled — cinematic — 4 miradas
    {
      id: 'PP2',
      variantes: [
        `${framings.cinematic} ${perro_global} POSE — SEATED ANGLED: The small dog sits with body angled 20 degrees — not fully frontal. One front paw clearly ahead of the other. Cushion appropriately sized. ${miradas.perro_offlens}`,
        `${framings.cinematic} ${perro_global} POSE — SEATED ANGLED: The small dog sits with body angled 20 degrees — not fully frontal. One front paw clearly ahead of the other. Cushion appropriately sized. ${miradas.perro_girada}`,
        `${framings.cinematic} ${perro_global} POSE — SEATED ANGLED: The small dog sits with body angled 20 degrees — not fully frontal. One front paw clearly ahead of the other. Cushion appropriately sized. ${miradas.perro_headtilt}`,
        `${framings.cinematic} ${perro_global} POSE — SEATED ANGLED: The small dog sits with body angled 20 degrees — not fully frontal. One front paw clearly ahead of the other. Cushion appropriately sized. ${miradas.perro_directo}`,
      ]
    },

    // PP3 — Close Crop Portrait — close_crop_strong — 4 miradas
    {
      id: 'PP3',
      variantes: [
        `${framings.close_crop_strong} ${perro_global} POSE — CLOSE CROP PORTRAIT: The dog's face and chest fill at least 70% of the frame. The face is the hero. Chest and front paws visible at the bottom. The royal mantle frames the face dramatically. ${miradas.perro_offlens}`,
        `${framings.close_crop_strong} ${perro_global} POSE — CLOSE CROP PORTRAIT: The dog's face and chest fill at least 70% of the frame. The face is the hero. Chest and front paws visible at the bottom. The royal mantle frames the face dramatically. ${miradas.perro_girada}`,
        `${framings.close_crop_strong} ${perro_global} POSE — CLOSE CROP PORTRAIT: The dog's face and chest fill at least 70% of the frame. The face is the hero. Chest and front paws visible at the bottom. The royal mantle frames the face dramatically. ${miradas.perro_headtilt}`,
        `${framings.close_crop_strong} ${perro_global} POSE — CLOSE CROP PORTRAIT: The dog's face and chest fill at least 70% of the frame. The face is the hero. Chest and front paws visible at the bottom. The royal mantle frames the face dramatically. ${miradas.perro_directo}`,
      ]
    },

    // PP4 — Three Quarter — cinematic — 3 miradas
    {
      id: 'PP4',
      variantes: [
        `${framings.cinematic} ${perro_global} POSE — THREE QUARTER DYNAMIC: The small dog's body is turned 3/4 to one side. Head turned back toward viewer with personality. Natural asymmetry. Cushion appropriately sized. ${miradas.perro_offlens}`,
        `${framings.cinematic} ${perro_global} POSE — THREE QUARTER DYNAMIC: The small dog's body is turned 3/4 to one side. Head turned back toward viewer with personality. Natural asymmetry. Cushion appropriately sized. ${miradas.perro_headtilt}`,
        `${framings.cinematic} ${perro_global} POSE — THREE QUARTER DYNAMIC: The small dog's body is turned 3/4 to one side. Head turned back toward viewer with personality. Natural asymmetry. Cushion appropriately sized. ${miradas.perro_directo}`,
      ]
    },

    // PP5 — Naturalistic — cinematic
    {
      id: 'PP5',
      naturalistic: true,
      variantes: [
        `${framings.cinematic} ${perro_global} POSE — NATURALISTIC: Faithfully recreate the dog's natural pose from the reference photo. Preserve exact body position and expression. Transform into a royal oil painting while keeping the pose 100% faithful.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // CONEJO — full_body, loaf usa half_body
  // ═══════════════════════════════════════════════════════════════════════════
  conejo: [
    {
      id: 'CO1',
      variantes: [
        `${framings.full_body} POSE — SEATED ALERT: The rabbit sits upright — front paws resting neatly on the cushion, ears tall and erect. Head level, gaze just slightly off-lens. One front paw very slightly ahead of the other.`,
        `${framings.full_body} POSE — SEATED ALERT: The rabbit sits upright — front paws resting neatly, ears tall and erect. Head turned 15 degrees to one side — alert, curious.`,
      ]
    },
    {
      id: 'CO2',
      variantes: [
        `${framings.half_body} POSE — LOAF REGAL: The rabbit sits in a relaxed loaf position — front paws tucked slightly under the chest, ears upright. Head elevated, gaze just off-lens. Compact and regal.`,
        `${framings.half_body} POSE — LOAF REGAL: The rabbit sits in a relaxed loaf — front paws tucked, ears upright. Head tilted 10 degrees with genuine curiosity.`,
      ]
    },
    {
      id: 'CO3',
      variantes: [
        `${framings.full_body} POSE — THREE QUARTER: The rabbit sits upright — body slightly turned 3/4, head facing the viewer just off-lens. Front paws placed neatly with natural asymmetry.`,
        `${framings.full_body} POSE — THREE QUARTER: The rabbit sits — body 3/4 turned, head facing viewer with gentle curiosity.`,
      ]
    },
    {
      id: 'CO4',
      naturalistic: true,
      variantes: [
        `${framings.full_body} POSE — NATURALISTIC: Faithfully recreate the rabbit's natural pose from the reference photo. Transform into a royal oil painting while keeping the pose 100% faithful.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // AVE — full_body siempre
  // ═══════════════════════════════════════════════════════════════════════════
  ave: [
    {
      id: 'AV1',
      variantes: [
        `${framings.full_body} POSE — PERCHED UPRIGHT: The bird perches upright on the cushion — body erect, wings folded naturally. Head turned slightly toward the viewer just off-lens, one eye visible and alert. Feet gripping cushion naturally.`,
        `${framings.full_body} POSE — PERCHED UPRIGHT: The bird perches upright — wings folded. Head turned 20 degrees to the side — alert, one eye bright and curious.`,
      ]
    },
    {
      id: 'AV2',
      variantes: [
        `${framings.full_body} POSE — STANDING FORMAL: The bird stands on the cushion — full upright posture, wings folded, tail feathers visible behind. Head facing forward just off-lens. Dignified and still.`,
        `${framings.full_body} POSE — STANDING FORMAL: The bird stands — full upright posture, wings folded tight. Head tilted slightly with curiosity — alert and regal.`,
      ]
    },
    {
      id: 'AV3',
      variantes: [
        `${framings.full_body} POSE — THREE QUARTER PERCH: The bird perches — body in 3/4 profile, head turned fully to face the viewer just off-lens. Wings folded tight. Composed and regal.`,
        `${framings.full_body} POSE — THREE QUARTER PERCH: The bird perches — body in 3/4 profile, head turned to face viewer directly. Wings folded. Powerful and present.`,
      ]
    },
    {
      id: 'AV4',
      naturalistic: true,
      variantes: [
        `${framings.full_body} POSE — NATURALISTIC: Faithfully recreate the bird's natural pose from the reference photo. Preserve the exact body position, wing placement, and head angle. Transform into a royal oil painting while keeping the pose 100% faithful.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // CABALLO — full_body_monumental siempre
  // ═══════════════════════════════════════════════════════════════════════════
  caballo: [
    {
      id: 'CA1',
      variantes: [
        `${framings.full_body_monumental} POSE — PROUD SQUARE STANCE: The horse stands in a proud square stance — all four hooves planted firmly, body facing 3/4 toward the viewer. Head held high, slightly turned to face the viewer just off-lens. Mane falling naturally. Tail visible behind. Natural asymmetry in leg placement.`,
        `${framings.full_body_monumental} POSE — PROUD SQUARE STANCE: The horse stands — 3/4 toward viewer. Head held high, turned with alert ears forward. Mane flowing. Powerful regal presence.`,
      ]
    },
    {
      id: 'CA2',
      variantes: [
        `${framings.full_body_monumental} POSE — PROFILE NOBLE: The horse stands in profile — body facing fully to the side, head turned completely toward the viewer just off-lens. Noble posture, ears forward, eyes alive. The royal mantle drapes across the back.`,
        `${framings.full_body_monumental} POSE — PROFILE NOBLE: The horse stands in profile — head turned toward viewer directly and confidently. Ears alert, eyes bright. Powerful and sovereign.`,
      ]
    },
    {
      id: 'CA3',
      variantes: [
        `${framings.full_body_monumental} POSE — THREE QUARTER DYNAMIC: The horse stands at 3/4 angle — front legs slightly staggered, one forward. Head elevated and turned toward the viewer just off-lens. Mane and tail caught in slight movement.`,
        `${framings.full_body_monumental} POSE — THREE QUARTER DYNAMIC: The horse at 3/4 — front legs staggered, movement implied. Head turned toward viewer with natural curiosity.`,
      ]
    },
    {
      id: 'CA4',
      naturalistic: true,
      variantes: [
        `${framings.full_body_monumental} POSE — NATURALISTIC: Faithfully recreate the horse's natural pose from the reference photo. Preserve exact stance, leg placement, and head position. Transform into a royal oil painting while keeping the pose 100% faithful.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // REPTIL — full_body siempre
  // ═══════════════════════════════════════════════════════════════════════════
  reptil: [
    {
      id: 'RE1',
      variantes: [
        `${framings.full_body} POSE — SPHINX REGAL: The reptile rests sphinx-like — body low and horizontal on the cushion, legs relaxed at sides, tail extending behind. Head fully erect and elevated, gaze just off-lens with ancient authority.`,
        `${framings.full_body} POSE — SPHINX REGAL: The reptile rests sphinx-like — body low, tail behind. Head fully erect, gaze turned 20 degrees to the side — alert, prehistoric, sovereign.`,
      ]
    },
    {
      id: 'RE2',
      variantes: [
        `${framings.full_body} POSE — ELEVATED ALERT: The reptile sits upright on its front legs — head raised high. Gaze directed toward the viewer just off-lens. Alert and commanding.`,
        `${framings.full_body} POSE — ELEVATED ALERT: The reptile sits upright — head raised, gaze tilted with curiosity. Still, dignified, ancient.`,
      ]
    },
    {
      id: 'RE3',
      variantes: [
        `${framings.full_body} POSE — THREE QUARTER REST: The reptile rests — body in 3/4 position, head turned toward the viewer just off-lens. Tail extends naturally.`,
        `${framings.full_body} POSE — THREE QUARTER REST: The reptile rests — body 3/4, head turned toward viewer directly. Ancient authority in every scale.`,
      ]
    },
    {
      id: 'RE4',
      naturalistic: true,
      variantes: [
        `${framings.full_body} POSE — NATURALISTIC: Faithfully recreate the reptile's natural pose from the reference photo. Preserve exact body position, limb placement, and tail. Transform into a royal oil painting while keeping the pose 100% faithful.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // ANIMAL PEQUEÑO — full_body, AN2 usa close_crop por su expresividad facial
  // ═══════════════════════════════════════════════════════════════════════════
  pequeno: [
    {
      id: 'AN1',
      variantes: [
        `${framings.full_body} POSE — SEATED REGAL: The small animal sits upright — body compact, front paws with slight asymmetry. Head elevated, gaze just off-lens. Surprisingly dignified. Cushion appropriately sized.`,
        `${framings.full_body} POSE — SEATED REGAL: The small animal sits upright — compact body, front paws asymmetric. Head tilted with genuine curiosity — endearing and alive.`,
      ]
    },
    {
      id: 'AN2',
      variantes: [
        `${framings.close_crop} POSE — ALERT FRONTAL: The small animal sits alert — front paws on cushion, head erect facing just off-lens. Small but commanding. Maximum dignity.`,
        `${framings.close_crop} POSE — ALERT FRONTAL: The small animal sits alert — head turned 20 degrees to the side with ears forward. Curious, alive, present.`,
      ]
    },
    {
      id: 'AN3',
      variantes: [
        `${framings.full_body} POSE — THREE QUARTER: The small animal sits — body slightly 3/4, head facing the viewer just off-lens. Natural, composed, regal despite its size.`,
        `${framings.full_body} POSE — THREE QUARTER: The small animal at 3/4 — head facing viewer directly with confidence. Small sovereign on a velvet cushion.`,
      ]
    },
    {
      id: 'AN4',
      naturalistic: true,
      variantes: [
        `${framings.full_body} POSE — NATURALISTIC: Faithfully recreate the animal's natural pose from the reference photo. Transform into a royal oil painting while keeping the pose 100% faithful.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DEFAULT
  // ═══════════════════════════════════════════════════════════════════════════
  default: [
    {
      id: 'DF1',
      variantes: [
        `${framings.cinematic} POSE: The animal rests naturally on the cushion in the most dignified position its anatomy allows — body composed, head erect and elevated, gaze directed just off-lens with calm authority. Natural asymmetry preserved.`,
        `${framings.half_body} POSE: The animal sits or reclines — head raised, eyes meeting the viewer with quiet confidence. Noble and composed.`,
      ]
    },
  ],
};

// ─── DETECCIÓN DE CATEGORÍA ──────────────────────────────────────────────────
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

// ─── ASIGNAR POSE ─────────────────────────────────────────────────────────────
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
