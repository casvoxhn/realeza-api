// SECCIÓN 4 — POSES v3
// Sistema de poses aprobadas con variantes de mirada.
// Todas las poses fueron probadas y aprobadas visualmente.
// Reglas globales:
//   - Gatos: mirada off-lens en todas excepto G2 y G5 (frontal directa)
//   - Perros: preservar expresión natural de la foto siempre
//   - Nunca simetría perfecta — siempre asimetría natural
//   - Naturalistic se activa cuando la foto muestra cuerpo completo y pose digna

// ─── MIRADAS GLOBALES ────────────────────────────────────────────────────────

const miradas = {

  // GATOS
  gato_offlens: `Eyes directed just slightly off the camera lens — as if looking at the photographer standing just beside the camera, not into the lens itself. Natural, alive, present.`,
  gato_lateral: `Eyes directed 15 degrees to the side — natural, as if something just caught the cat's attention. Head stays forward, only the eyes move.`,
  gato_elevada: `Eyes directed slightly upward and to the side — contemplative, detached, sovereign.`,
  gato_indiferente: `Eyes directed very slightly downward — 10 degrees only. The cat has more important things to think about than the viewer. Total indifference.`,
  gato_frontal: `Eyes look directly at the viewer — straight ahead, confident and direct.`,
  gato_headtilt: `Head faces viewer with a subtle 6 degree tilt to one side — like a cat that just heard something interesting. Eyes look directly at the viewer — warm and curious.`,

  // PERROS
  perro_offlens: `Eyes directed just slightly off the camera lens — as if looking at the photographer standing just beside the camera. Warm, loyal, present.`,
  perro_girada: `Head turned 30 degrees to one side — body stays forward, head rotates naturally to the side. Natural, relaxed, confident.`,
  perro_headtilt: `Head tilted 15 degrees to one side, eyes directed at the viewer with genuine curiosity — tender, human, alive.`,
  perro_directo: `Eyes looking straight at the viewer — confident, powerful, direct connection.`,
};

// ─── INSTRUCCIÓN GLOBAL PERROS ───────────────────────────────────────────────

const perro_global = `CRITICAL — PRESERVE THE DOG'S NATURAL EXPRESSION: Study the dog's expression and energy in the reference photo carefully. If the mouth is open — preserve it open. If the ears are forward and alert — preserve that alertness. If the dog looks relaxed — preserve that calm. The portrait must feel like THIS specific dog, not a generic noble dog. Never create a perfectly symmetrical pose — always introduce natural asymmetry.`;

// ─── POSES ───────────────────────────────────────────────────────────────────

const poses = {

  // ═══════════════════════════════════════════════════════════════════════════
  // GATO — 5 poses × variantes de mirada
  // ═══════════════════════════════════════════════════════════════════════════
  gato: [

    // G1a — Sphinx recline girado a la DERECHA — 4 miradas
    {
      id: 'G1a',
      variantes: [
        `POSE — SPHINX RECLINE RIGHT: The cat's FRONT LEGS are both fully extended forward and lying flat on the cushion surface. The cat's CHEST is lowered and resting on the cushion — touching the velvet. The cat's BODY is oriented slightly to the right — 15 degrees off center. The cat's HEAD is fully erect and elevated — chin up. NO tail visible. ${miradas.gato_offlens}`,
        `POSE — SPHINX RECLINE RIGHT: The cat's FRONT LEGS are both fully extended forward and lying flat on the cushion surface. The cat's CHEST is lowered and resting on the cushion — touching the velvet. The cat's BODY is oriented slightly to the right — 15 degrees off center. The cat's HEAD is fully erect and elevated — chin up. NO tail visible. ${miradas.gato_lateral}`,
        `POSE — SPHINX RECLINE RIGHT: The cat's FRONT LEGS are both fully extended forward and lying flat on the cushion surface. The cat's CHEST is lowered and resting on the cushion — touching the velvet. The cat's BODY is oriented slightly to the right — 15 degrees off center. The cat's HEAD is fully erect and elevated — chin up. NO tail visible. ${miradas.gato_elevada}`,
        `POSE — SPHINX RECLINE RIGHT: The cat's FRONT LEGS are both fully extended forward and lying flat on the cushion surface. The cat's CHEST is lowered and resting on the cushion — touching the velvet. The cat's BODY is oriented slightly to the right — 15 degrees off center. The cat's HEAD is fully erect and elevated — chin up. NO tail visible. ${miradas.gato_indiferente}`,
      ]
    },

    // G1b — Sphinx recline girado a la IZQUIERDA — 4 miradas
    {
      id: 'G1b',
      variantes: [
        `POSE — SPHINX RECLINE LEFT: The cat's FRONT LEGS are both fully extended forward and lying flat on the cushion surface. The cat's CHEST is lowered and resting on the cushion — touching the velvet. The cat's BODY is oriented slightly to the left — 15 degrees off center. The cat's HEAD is fully erect and elevated — chin up. NO tail visible. ${miradas.gato_offlens}`,
        `POSE — SPHINX RECLINE LEFT: The cat's FRONT LEGS are both fully extended forward and lying flat on the cushion surface. The cat's CHEST is lowered and resting on the cushion — touching the velvet. The cat's BODY is oriented slightly to the left — 15 degrees off center. The cat's HEAD is fully erect and elevated — chin up. NO tail visible. ${miradas.gato_lateral}`,
        `POSE — SPHINX RECLINE LEFT: The cat's FRONT LEGS are both fully extended forward and lying flat on the cushion surface. The cat's CHEST is lowered and resting on the cushion — touching the velvet. The cat's BODY is oriented slightly to the left — 15 degrees off center. The cat's HEAD is fully erect and elevated — chin up. NO tail visible. ${miradas.gato_elevada}`,
        `POSE — SPHINX RECLINE LEFT: The cat's FRONT LEGS are both fully extended forward and lying flat on the cushion surface. The cat's CHEST is lowered and resting on the cushion — touching the velvet. The cat's BODY is oriented slightly to the left — 15 degrees off center. The cat's HEAD is fully erect and elevated — chin up. NO tail visible. ${miradas.gato_indiferente}`,
      ]
    },

    // G2 — Upright asimétrico — 3 miradas — EXCEPCIÓN: mirada frontal directa permitida
    {
      id: 'G2',
      variantes: [
        `POSE — UPRIGHT ASYMMETRIC: The cat's HINDQUARTERS are fully seated on the cushion. The cat's FRONT PAWS are placed on the cushion — one paw 2-3 cm ahead of the other, just enough to break perfect symmetry. The weight shifts very slightly to one side. The cat's BACK is straight but not rigid. The cat's TAIL is wrapped loosely around one side of the body. ${miradas.gato_frontal}`,
        `POSE — UPRIGHT ASYMMETRIC: The cat's HINDQUARTERS are fully seated on the cushion. The cat's FRONT PAWS are placed on the cushion — one paw 2-3 cm ahead of the other, just enough to break perfect symmetry. The weight shifts very slightly to one side. The cat's BACK is straight but not rigid. The cat's TAIL is wrapped loosely around one side of the body. ${miradas.gato_lateral}`,
        `POSE — UPRIGHT ASYMMETRIC: The cat's HINDQUARTERS are fully seated on the cushion. The cat's FRONT PAWS are placed on the cushion — one paw 2-3 cm ahead of the other, just enough to break perfect symmetry. The weight shifts very slightly to one side. The cat's BACK is straight but not rigid. The cat's TAIL is wrapped loosely around one side of the body. ${miradas.gato_indiferente}`,
      ]
    },

    // G3 — Three quarter turn — 2 miradas — NO salir junto a G2
    {
      id: 'G3',
      noJuntoA: ['G2'],
      variantes: [
        `POSE — THREE QUARTER TURN: The cat's HINDQUARTERS are seated on the cushion. The cat's BODY is turned 3/4 away from the viewer — the flank and side of the body are clearly visible. The cat's FRONT PAWS are flat on the cushion, one slightly forward. The cat's HEAD is turned completely back toward the viewer — a sharp confident rotation of the neck. Body faces away, head faces forward. ${miradas.gato_offlens}`,
        `POSE — THREE QUARTER TURN: The cat's HINDQUARTERS are seated on the cushion. The cat's BODY is turned 3/4 away from the viewer — the flank and side of the body are clearly visible. The cat's FRONT PAWS are flat on the cushion, one slightly forward. The cat's HEAD is turned completely back toward the viewer — a sharp confident rotation of the neck. Body faces away, head faces forward. ${miradas.gato_lateral}`,
      ]
    },

    // G4 — Loaf girado — 4 miradas (headtilt en frontal, lateral, elevada, indiferente)
    {
      id: 'G4',
      variantes: [
        `POSE — LOAF ANGLED: The cat's FRONT PAWS are completely tucked and hidden underneath the chest — not visible at all. The cat's BODY is compact and rounded, resting directly on the cushion. The cat's BODY is turned very slightly — 15 degrees to one side. NO tail visible anywhere. NO paws visible anywhere. ${miradas.gato_headtilt}`,
        `POSE — LOAF ANGLED: The cat's FRONT PAWS are completely tucked and hidden underneath the chest — not visible at all. The cat's BODY is compact and rounded, resting directly on the cushion. The cat's BODY is turned very slightly — 15 degrees to one side. NO tail visible anywhere. NO paws visible anywhere. ${miradas.gato_lateral}`,
        `POSE — LOAF ANGLED: The cat's FRONT PAWS are completely tucked and hidden underneath the chest — not visible at all. The cat's BODY is compact and rounded, resting directly on the cushion. The cat's BODY is turned very slightly — 15 degrees to one side. NO tail visible anywhere. NO paws visible anywhere. ${miradas.gato_elevada}`,
        `POSE — LOAF ANGLED: The cat's FRONT PAWS are completely tucked and hidden underneath the chest — not visible at all. The cat's BODY is compact and rounded, resting directly on the cushion. The cat's BODY is turned very slightly — 15 degrees to one side. NO tail visible anywhere. NO paws visible anywhere. ${miradas.gato_indiferente}`,
      ]
    },

    // G5a — Cuerpo y cabeza alineados hacia la IZQUIERDA — 1 mirada frontal — EXCEPCIÓN
    {
      id: 'G5a',
      variantes: [
        `POSE — ALIGNED LEFT: The cat's BODY and HEAD are both oriented to the left — fully aligned in the same direction. The cat is seated with HINDQUARTERS on the cushion. FRONT PAWS flat on the cushion, one slightly ahead of the other. The cat's HEAD faces left, aligned with the body direction. ${miradas.gato_frontal}`,
      ]
    },

    // G5b — Cuerpo y cabeza alineados hacia la DERECHA — 1 mirada frontal — EXCEPCIÓN
    {
      id: 'G5b',
      variantes: [
        `POSE — ALIGNED RIGHT: The cat's BODY and HEAD are both oriented to the right — fully aligned in the same direction. The cat is seated with HINDQUARTERS on the cushion. FRONT PAWS flat on the cushion, one slightly ahead of the other. The cat's HEAD faces right, aligned with the body direction. ${miradas.gato_frontal}`,
      ]
    },

    // G6 — Naturalistic
    {
      id: 'G6',
      naturalistic: true,
      variantes: [
        `POSE — NATURALISTIC: Faithfully recreate the cat's natural pose from the reference photo. Preserve the exact body position, limb placement, and tail position as shown. Do not alter or idealize the pose — paint it exactly as it is, transforming it into a royal oil painting while keeping the pose 100% faithful to the reference. The pose must feel completely natural and specific to this individual cat.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PERRO GRANDE — 4 poses hero + naturalistic
  // ═══════════════════════════════════════════════════════════════════════════
  perro_grande: [

    // PG1 — Landseer Recline — 4 miradas
    {
      id: 'PG1',
      variantes: [
        `${perro_global} POSE — LANDSEER RECLINE: The dog lies with chest slightly elevated on the cushion. Both front legs extended forward, one paw slightly over the other — natural asymmetry. Full body visible from nose to tail — haunches clearly visible behind. Head fully erect and elevated — chin up, noble. Tail extends naturally behind. ${miradas.perro_offlens}`,
        `${perro_global} POSE — LANDSEER RECLINE: The dog lies with chest slightly elevated on the cushion. Both front legs extended forward, one paw slightly over the other — natural asymmetry. Full body visible from nose to tail — haunches clearly visible behind. Head fully erect and elevated — chin up, noble. Tail extends naturally behind. ${miradas.perro_girada}`,
        `${perro_global} POSE — LANDSEER RECLINE: The dog lies with chest slightly elevated on the cushion. Both front legs extended forward, one paw slightly over the other — natural asymmetry. Full body visible from nose to tail — haunches clearly visible behind. Head fully erect and elevated — chin up, noble. Tail extends naturally behind. ${miradas.perro_headtilt}`,
        `${perro_global} POSE — LANDSEER RECLINE: The dog lies with chest slightly elevated on the cushion. Both front legs extended forward, one paw slightly over the other — natural asymmetry. Full body visible from nose to tail — haunches clearly visible behind. Head fully erect and elevated — chin up, noble. Tail extends naturally behind. ${miradas.perro_directo}`,
      ]
    },

    // PG2 — Sphinx Noble — 4 miradas
    {
      id: 'PG2',
      variantes: [
        `${perro_global} POSE — SPHINX NOBLE: The dog's chest is lowered and resting on the cushion. Both front legs fully extended forward, one paw slightly ahead of the other. Full body visible — chest, torso, haunches clearly behind. Head fully erect and elevated — chin up, commanding. Tail visible behind naturally. ${miradas.perro_offlens}`,
        `${perro_global} POSE — SPHINX NOBLE: The dog's chest is lowered and resting on the cushion. Both front legs fully extended forward, one paw slightly ahead of the other. Full body visible — chest, torso, haunches clearly behind. Head fully erect and elevated — chin up, commanding. Tail visible behind naturally. ${miradas.perro_girada}`,
        `${perro_global} POSE — SPHINX NOBLE: The dog's chest is lowered and resting on the cushion. Both front legs fully extended forward, one paw slightly ahead of the other. Full body visible — chest, torso, haunches clearly behind. Head fully erect and elevated — chin up, commanding. Tail visible behind naturally. ${miradas.perro_headtilt}`,
        `${perro_global} POSE — SPHINX NOBLE: The dog's chest is lowered and resting on the cushion. Both front legs fully extended forward, one paw slightly ahead of the other. Full body visible — chest, torso, haunches clearly behind. Head fully erect and elevated — chin up, commanding. Tail visible behind naturally. ${miradas.perro_directo}`,
      ]
    },

    // PG3 — Seated Proud — 4 miradas
    {
      id: 'PG3',
      variantes: [
        `${perro_global} POSE — SEATED PROUD: The dog sits upright on the cushion — hindquarters firmly seated, chest broad and forward. Full body visible from nose to tail. One front paw very slightly ahead of the other — natural asymmetry. Back straight but not rigid. Head elevated naturally. ${miradas.perro_offlens}`,
        `${perro_global} POSE — SEATED PROUD: The dog sits upright on the cushion — hindquarters firmly seated, chest broad and forward. Full body visible from nose to tail. One front paw very slightly ahead of the other — natural asymmetry. Back straight but not rigid. Head elevated naturally. ${miradas.perro_girada}`,
        `${perro_global} POSE — SEATED PROUD: The dog sits upright on the cushion — hindquarters firmly seated, chest broad and forward. Full body visible from nose to tail. One front paw very slightly ahead of the other — natural asymmetry. Back straight but not rigid. Head elevated naturally. ${miradas.perro_headtilt}`,
        `${perro_global} POSE — SEATED PROUD: The dog sits upright on the cushion — hindquarters firmly seated, chest broad and forward. Full body visible from nose to tail. One front paw very slightly ahead of the other — natural asymmetry. Back straight but not rigid. Head elevated naturally. ${miradas.perro_directo}`,
      ]
    },

    // PG4 — Three Quarter — 3 miradas (sin cabeza girada — cuerpo ya está girado)
    {
      id: 'PG4',
      variantes: [
        `${perro_global} POSE — THREE QUARTER: The dog's body is turned 3/4 toward one side — flank and side clearly visible. Full body visible. Head turned back toward the viewer — confident, dynamic. One front paw slightly forward — natural asymmetry. ${miradas.perro_offlens}`,
        `${perro_global} POSE — THREE QUARTER: The dog's body is turned 3/4 toward one side — flank and side clearly visible. Full body visible. Head turned back toward the viewer — confident, dynamic. One front paw slightly forward — natural asymmetry. ${miradas.perro_headtilt}`,
        `${perro_global} POSE — THREE QUARTER: The dog's body is turned 3/4 toward one side — flank and side clearly visible. Full body visible. Head turned back toward the viewer — confident, dynamic. One front paw slightly forward — natural asymmetry. ${miradas.perro_directo}`,
      ]
    },

    // PG5 — Naturalistic
    {
      id: 'PG5',
      naturalistic: true,
      variantes: [
        `${perro_global} POSE — NATURALISTIC: Faithfully recreate the dog's natural pose from the reference photo. Preserve the exact body position, limb placement, and tail position as shown. Transform it into a royal oil painting while keeping the pose 100% faithful to the reference.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PERRO MEDIANO — 4 poses hero + naturalistic
  // ═══════════════════════════════════════════════════════════════════════════
  perro_mediano: [

    // PM1 — Landseer Recline adaptado — cojín proporcional
    {
      id: 'PM1',
      variantes: [
        `${perro_global} POSE — LANDSEER RECLINE: The dog lies with chest slightly elevated on the cushion — the cushion is proportional to the dog's size. Both front legs extended forward, one paw slightly over the other. Full body visible. Head fully erect — chin up. ${miradas.perro_offlens}`,
        `${perro_global} POSE — LANDSEER RECLINE: The dog lies with chest slightly elevated on the cushion — the cushion is proportional to the dog's size. Both front legs extended forward, one paw slightly over the other. Full body visible. Head fully erect — chin up. ${miradas.perro_girada}`,
        `${perro_global} POSE — LANDSEER RECLINE: The dog lies with chest slightly elevated on the cushion — the cushion is proportional to the dog's size. Both front legs extended forward, one paw slightly over the other. Full body visible. Head fully erect — chin up. ${miradas.perro_headtilt}`,
        `${perro_global} POSE — LANDSEER RECLINE: The dog lies with chest slightly elevated on the cushion — the cushion is proportional to the dog's size. Both front legs extended forward, one paw slightly over the other. Full body visible. Head fully erect — chin up. ${miradas.perro_directo}`,
      ]
    },

    // PM2 — Seated Proud — 4 miradas
    {
      id: 'PM2',
      variantes: [
        `${perro_global} POSE — SEATED PROUD: The dog sits upright on the cushion — chest forward, full body visible. One front paw slightly ahead of the other. Head elevated naturally. The cushion is proportional to the dog's size. ${miradas.perro_offlens}`,
        `${perro_global} POSE — SEATED PROUD: The dog sits upright on the cushion — chest forward, full body visible. One front paw slightly ahead of the other. Head elevated naturally. The cushion is proportional to the dog's size. ${miradas.perro_girada}`,
        `${perro_global} POSE — SEATED PROUD: The dog sits upright on the cushion — chest forward, full body visible. One front paw slightly ahead of the other. Head elevated naturally. The cushion is proportional to the dog's size. ${miradas.perro_headtilt}`,
        `${perro_global} POSE — SEATED PROUD: The dog sits upright on the cushion — chest forward, full body visible. One front paw slightly ahead of the other. Head elevated naturally. The cushion is proportional to the dog's size. ${miradas.perro_directo}`,
      ]
    },

    // PM3 — Three Quarter — 3 miradas
    {
      id: 'PM3',
      variantes: [
        `${perro_global} POSE — THREE QUARTER: The dog's body is turned 3/4 to one side — flank visible. Head turned back toward viewer. Full body visible. Natural asymmetry. Cushion proportional to dog's size. ${miradas.perro_offlens}`,
        `${perro_global} POSE — THREE QUARTER: The dog's body is turned 3/4 to one side — flank visible. Head turned back toward viewer. Full body visible. Natural asymmetry. Cushion proportional to dog's size. ${miradas.perro_headtilt}`,
        `${perro_global} POSE — THREE QUARTER: The dog's body is turned 3/4 to one side — flank visible. Head turned back toward viewer. Full body visible. Natural asymmetry. Cushion proportional to dog's size. ${miradas.perro_directo}`,
      ]
    },

    // PM4 — Seated Angled — 4 miradas — exclusiva medianos
    {
      id: 'PM4',
      variantes: [
        `${perro_global} POSE — SEATED ANGLED: The dog sits on the cushion with body angled 20 degrees to one side — not fully frontal, giving natural depth and movement. Hindquarters on cushion, chest forward and slightly turned. One front paw noticeably ahead of the other. Head faces toward viewer with natural energy. Cushion proportional to dog's size. ${miradas.perro_offlens}`,
        `${perro_global} POSE — SEATED ANGLED: The dog sits on the cushion with body angled 20 degrees to one side — not fully frontal, giving natural depth and movement. Hindquarters on cushion, chest forward and slightly turned. One front paw noticeably ahead of the other. Head faces toward viewer with natural energy. Cushion proportional to dog's size. ${miradas.perro_girada}`,
        `${perro_global} POSE — SEATED ANGLED: The dog sits on the cushion with body angled 20 degrees to one side — not fully frontal, giving natural depth and movement. Hindquarters on cushion, chest forward and slightly turned. One front paw noticeably ahead of the other. Head faces toward viewer with natural energy. Cushion proportional to dog's size. ${miradas.perro_headtilt}`,
        `${perro_global} POSE — SEATED ANGLED: The dog sits on the cushion with body angled 20 degrees to one side — not fully frontal, giving natural depth and movement. Hindquarters on cushion, chest forward and slightly turned. One front paw noticeably ahead of the other. Head faces toward viewer with natural energy. Cushion proportional to dog's size. ${miradas.perro_directo}`,
      ]
    },

    // PM5 — Naturalistic
    {
      id: 'PM5',
      naturalistic: true,
      variantes: [
        `${perro_global} POSE — NATURALISTIC: Faithfully recreate the dog's natural pose from the reference photo. Preserve the exact body position, limb placement, and tail position as shown. Transform it into a royal oil painting while keeping the pose 100% faithful to the reference.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // PERRO PEQUEÑO — 4 poses hero + naturalistic
  // Nota: poses reclinadas evitadas — pierden dignidad
  // Close crop aprovecha expresividad facial de razas pequeñas
  // ═══════════════════════════════════════════════════════════════════════════
  perro_pequeno: [

    // PP1 — Seated Upright Formal — 4 miradas
    {
      id: 'PP1',
      variantes: [
        `${perro_global} POSE — SEATED UPRIGHT FORMAL: The small dog sits perfectly upright on the cushion — back straight, chest forward, full body visible. The cushion is sized to make the dog look dignified, not swallowed. One front paw slightly ahead of the other. Head elevated. ${miradas.perro_offlens}`,
        `${perro_global} POSE — SEATED UPRIGHT FORMAL: The small dog sits perfectly upright on the cushion — back straight, chest forward, full body visible. The cushion is sized to make the dog look dignified, not swallowed. One front paw slightly ahead of the other. Head elevated. ${miradas.perro_girada}`,
        `${perro_global} POSE — SEATED UPRIGHT FORMAL: The small dog sits perfectly upright on the cushion — back straight, chest forward, full body visible. The cushion is sized to make the dog look dignified, not swallowed. One front paw slightly ahead of the other. Head elevated. ${miradas.perro_headtilt}`,
        `${perro_global} POSE — SEATED UPRIGHT FORMAL: The small dog sits perfectly upright on the cushion — back straight, chest forward, full body visible. The cushion is sized to make the dog look dignified, not swallowed. One front paw slightly ahead of the other. Head elevated. ${miradas.perro_directo}`,
      ]
    },

    // PP2 — Seated Angled — 4 miradas
    {
      id: 'PP2',
      variantes: [
        `${perro_global} POSE — SEATED ANGLED: The small dog sits on the cushion with body angled 20 degrees — not fully frontal. Full body visible. One front paw clearly ahead of the other. Head tilted naturally with energy and personality. The cushion is appropriately sized. ${miradas.perro_offlens}`,
        `${perro_global} POSE — SEATED ANGLED: The small dog sits on the cushion with body angled 20 degrees — not fully frontal. Full body visible. One front paw clearly ahead of the other. Head tilted naturally with energy and personality. The cushion is appropriately sized. ${miradas.perro_girada}`,
        `${perro_global} POSE — SEATED ANGLED: The small dog sits on the cushion with body angled 20 degrees — not fully frontal. Full body visible. One front paw clearly ahead of the other. Head tilted naturally with energy and personality. The cushion is appropriately sized. ${miradas.perro_headtilt}`,
        `${perro_global} POSE — SEATED ANGLED: The small dog sits on the cushion with body angled 20 degrees — not fully frontal. Full body visible. One front paw clearly ahead of the other. Head tilted naturally with energy and personality. The cushion is appropriately sized. ${miradas.perro_directo}`,
      ]
    },

    // PP3 — Close Crop Portrait — 4 miradas
    {
      id: 'PP3',
      variantes: [
        `${perro_global} POSE — CLOSE CROP PORTRAIT: The dog's face and chest fill at least 70% of the frame — extremely close crop, monumental presence despite small size. The face is the hero. Chest and front paws visible at the bottom. The royal mantle frames the face dramatically. ${miradas.perro_offlens}`,
        `${perro_global} POSE — CLOSE CROP PORTRAIT: The dog's face and chest fill at least 70% of the frame — extremely close crop, monumental presence despite small size. The face is the hero. Chest and front paws visible at the bottom. The royal mantle frames the face dramatically. ${miradas.perro_girada}`,
        `${perro_global} POSE — CLOSE CROP PORTRAIT: The dog's face and chest fill at least 70% of the frame — extremely close crop, monumental presence despite small size. The face is the hero. Chest and front paws visible at the bottom. The royal mantle frames the face dramatically. ${miradas.perro_headtilt}`,
        `${perro_global} POSE — CLOSE CROP PORTRAIT: The dog's face and chest fill at least 70% of the frame — extremely close crop, monumental presence despite small size. The face is the hero. Chest and front paws visible at the bottom. The royal mantle frames the face dramatically. ${miradas.perro_directo}`,
      ]
    },

    // PP4 — Three Quarter dinámico — 3 miradas
    {
      id: 'PP4',
      variantes: [
        `${perro_global} POSE — THREE QUARTER DYNAMIC: The small dog's body is turned 3/4 to one side — creating depth and energy. Head turned back toward the viewer with personality and confidence. Full body visible. Natural asymmetry. Cushion appropriately sized. ${miradas.perro_offlens}`,
        `${perro_global} POSE — THREE QUARTER DYNAMIC: The small dog's body is turned 3/4 to one side — creating depth and energy. Head turned back toward the viewer with personality and confidence. Full body visible. Natural asymmetry. Cushion appropriately sized. ${miradas.perro_headtilt}`,
        `${perro_global} POSE — THREE QUARTER DYNAMIC: The small dog's body is turned 3/4 to one side — creating depth and energy. Head turned back toward the viewer with personality and confidence. Full body visible. Natural asymmetry. Cushion appropriately sized. ${miradas.perro_directo}`,
      ]
    },

    // PP5 — Naturalistic
    {
      id: 'PP5',
      naturalistic: true,
      variantes: [
        `${perro_global} POSE — NATURALISTIC: Faithfully recreate the dog's natural pose from the reference photo. Preserve the exact body position and expression. Transform it into a royal oil painting while keeping the pose 100% faithful to the reference.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // CONEJO — 4 poses
  // ═══════════════════════════════════════════════════════════════════════════
  conejo: [
    {
      id: 'CO1',
      variantes: [
        `POSE — SEATED ALERT: The rabbit sits upright — front paws resting neatly on the cushion, ears tall and erect. Head level, gaze just slightly off-lens. One front paw very slightly ahead of the other.`,
        `POSE — SEATED ALERT: The rabbit sits upright — front paws resting neatly, ears tall and erect. Head turned 15 degrees to one side — alert, curious. Natural and alive.`,
      ]
    },
    {
      id: 'CO2',
      variantes: [
        `POSE — LOAF REGAL: The rabbit sits in a relaxed loaf position — front paws tucked slightly under the chest, ears upright. Head elevated, gaze just off-lens forward. Compact and regal.`,
        `POSE — LOAF REGAL: The rabbit sits in a relaxed loaf position — front paws tucked, ears upright. Head tilted 10 degrees with genuine curiosity. Compact and endearing.`,
      ]
    },
    {
      id: 'CO3',
      variantes: [
        `POSE — THREE QUARTER: The rabbit sits upright — body slightly turned 3/4, head facing the viewer just off-lens. Front paws placed neatly. Noble and composed with natural asymmetry.`,
        `POSE — THREE QUARTER: The rabbit sits — body 3/4 turned, head facing viewer with gentle curiosity. Front paws with slight asymmetry.`,
      ]
    },
    {
      id: 'CO4',
      naturalistic: true,
      variantes: [
        `POSE — NATURALISTIC: Faithfully recreate the rabbit's natural pose from the reference photo. Preserve the exact body position and ear position. Transform it into a royal oil painting while keeping the pose 100% faithful.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // AVE — 4 poses
  // ═══════════════════════════════════════════════════════════════════════════
  ave: [
    {
      id: 'AV1',
      variantes: [
        `POSE — PERCHED UPRIGHT: The bird perches upright on the cushion — body erect, wings folded naturally. Head turned slightly toward the viewer just off-lens, one eye visible and alert. Feet gripping cushion naturally.`,
        `POSE — PERCHED UPRIGHT: The bird perches upright — wings folded. Head turned 20 degrees to the side — alert, one eye bright and curious.`,
      ]
    },
    {
      id: 'AV2',
      variantes: [
        `POSE — STANDING FORMAL: The bird stands on the cushion — full upright posture, wings folded, tail feathers visible behind. Head facing forward just off-lens. Dignified and still.`,
        `POSE — STANDING FORMAL: The bird stands — full upright posture, wings folded tight. Head tilted slightly with curiosity — alert and regal.`,
      ]
    },
    {
      id: 'AV3',
      variantes: [
        `POSE — THREE QUARTER PERCH: The bird perches — body in 3/4 profile, head turned fully to face the viewer just off-lens. Wings folded tight. A composed, regal stance.`,
        `POSE — THREE QUARTER PERCH: The bird perches — body in 3/4 profile, head turned to face viewer directly and confidently. Wings folded. Powerful and present.`,
      ]
    },
    {
      id: 'AV4',
      naturalistic: true,
      variantes: [
        `POSE — NATURALISTIC: Faithfully recreate the bird's natural pose from the reference photo. Preserve the exact body position, wing placement, and head angle. Transform it into a royal oil painting while keeping the pose 100% faithful.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // CABALLO — 4 poses — base monumental
  // ═══════════════════════════════════════════════════════════════════════════
  caballo: [
    {
      id: 'CA1',
      variantes: [
        `POSE — PROUD SQUARE STANCE: The horse stands in a proud square stance — all four hooves planted firmly, body facing 3/4 toward the viewer. Head held high, slightly turned to face the viewer just off-lens. Mane falling naturally. Tail visible behind. The base is monumental to accommodate the horse's stature. Natural asymmetry in leg placement.`,
        `POSE — PROUD SQUARE STANCE: The horse stands in proud square stance — 3/4 toward viewer. Head held high, turned with alert ears forward. Mane flowing. A powerful regal presence.`,
      ]
    },
    {
      id: 'CA2',
      variantes: [
        `POSE — PROFILE NOBLE: The horse stands in profile — body facing fully to the side, head turned completely toward the viewer just off-lens. Noble posture, ears forward, eyes alive. The royal mantle drapes across the back. Monumental composition.`,
        `POSE — PROFILE NOBLE: The horse stands in profile — head turned toward viewer directly and confidently. Ears alert, eyes bright. Powerful and sovereign.`,
      ]
    },
    {
      id: 'CA3',
      variantes: [
        `POSE — THREE QUARTER DYNAMIC: The horse stands at 3/4 angle — front legs slightly staggered, one forward. Head elevated and turned toward the viewer just off-lens. Mane and tail caught in slight movement. Powerful and regal.`,
        `POSE — THREE QUARTER DYNAMIC: The horse stands at 3/4 — front legs staggered, movement implied. Head turned toward viewer with natural curiosity. Mane and tail with movement.`,
      ]
    },
    {
      id: 'CA4',
      naturalistic: true,
      variantes: [
        `POSE — NATURALISTIC: Faithfully recreate the horse's natural pose from the reference photo. Preserve the exact stance, leg placement, and head position. Transform it into a royal oil painting while keeping the pose 100% faithful.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // REPTIL — 4 poses
  // ═══════════════════════════════════════════════════════════════════════════
  reptil: [
    {
      id: 'RE1',
      variantes: [
        `POSE — SPHINX REGAL: The reptile rests in a sphinx-like position — body low and horizontal on the cushion, legs relaxed at its sides, tail extending behind. Head fully erect and elevated, gaze directed just off-lens with ancient authority.`,
        `POSE — SPHINX REGAL: The reptile rests sphinx-like — body low, tail behind. Head fully erect, gaze turned 20 degrees to the side — alert, prehistoric, sovereign.`,
      ]
    },
    {
      id: 'RE2',
      variantes: [
        `POSE — ELEVATED ALERT: The reptile sits upright — body elevated on its front legs, head raised high. Gaze directed toward the viewer just off-lens. Alert and commanding — an ancient sovereign.`,
        `POSE — ELEVATED ALERT: The reptile sits upright on front legs — head raised, gaze tilted with curiosity. Still, dignified, and utterly ancient.`,
      ]
    },
    {
      id: 'RE3',
      variantes: [
        `POSE — THREE QUARTER REST: The reptile rests on the cushion — body in 3/4 position, head turned directly toward the viewer just off-lens. Still, dignified, and utterly regal. Tail extends naturally.`,
        `POSE — THREE QUARTER REST: The reptile rests — body 3/4, head turned toward viewer directly and confidently. Ancient authority in every scale.`,
      ]
    },
    {
      id: 'RE4',
      naturalistic: true,
      variantes: [
        `POSE — NATURALISTIC: Faithfully recreate the reptile's natural pose from the reference photo. Preserve the exact body position, limb placement, and tail position. Transform it into a royal oil painting while keeping the pose 100% faithful.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // ANIMAL PEQUEÑO (hamster, cobaya, chinchilla, etc) — 4 poses
  // ═══════════════════════════════════════════════════════════════════════════
  pequeno: [
    {
      id: 'AN1',
      variantes: [
        `POSE — SEATED REGAL: The small animal sits upright on the cushion — body compact, front paws resting with slight asymmetry. Head elevated, gaze just off-lens toward the viewer. Surprisingly dignified. Cushion appropriately sized.`,
        `POSE — SEATED REGAL: The small animal sits upright — compact body, front paws with natural asymmetry. Head tilted with genuine curiosity — endearing and alive.`,
      ]
    },
    {
      id: 'AN2',
      variantes: [
        `POSE — ALERT FRONTAL: The small animal sits alert — front paws on the cushion, head erect and facing just off-lens toward the viewer. Small but commanding. Maximum dignity for a small creature.`,
        `POSE — ALERT FRONTAL: The small animal sits alert — front paws on cushion, head turned 20 degrees to the side with ears forward. Curious, alive, present.`,
      ]
    },
    {
      id: 'AN3',
      variantes: [
        `POSE — THREE QUARTER: The small animal sits — body slightly turned 3/4, head facing the viewer just off-lens. Natural, composed, regal despite its size.`,
        `POSE — THREE QUARTER: The small animal sits at 3/4 — head facing viewer directly with confidence. Small sovereign on a velvet cushion.`,
      ]
    },
    {
      id: 'AN4',
      naturalistic: true,
      variantes: [
        `POSE — NATURALISTIC: Faithfully recreate the animal's natural pose from the reference photo. Preserve the exact body position. Transform it into a royal oil painting while keeping the pose 100% faithful.`,
      ]
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // DEFAULT — animal desconocido
  // ═══════════════════════════════════════════════════════════════════════════
  default: [
    {
      id: 'DF1',
      variantes: [
        `POSE: The animal rests naturally on the cushion in the most dignified position its anatomy allows — body composed, head erect and elevated, gaze directed just off-lens at the viewer with calm authority. Natural asymmetry preserved.`,
        `POSE: The animal sits or reclines on the cushion in its most natural resting pose — head raised, eyes meeting the viewer with quiet confidence. Noble and composed.`,
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
// esNaturalistic: forzar pose naturalistic (foto cuerpo completo + pose digna)
// poseIndex: índice de pose específica (hero shot fijo)
// varianteIndex: índice de variante de mirada específica
function asignarPose(especie, raza, esNaturalistic = false, poseIndex = null, varianteIndex = null) {
  const categoria = detectarCategoria(especie, raza);
  const pool = poses[categoria] || poses.default;

  // Si se pide naturalistic, buscar la pose naturalistic
  if (esNaturalistic) {
    const natural = pool.find(p => p.naturalistic);
    if (natural) return natural.variantes[0];
  }

  // Filtrar poses no-naturalistic para hero shots
  const heroPool = pool.filter(p => !p.naturalistic);

  // Seleccionar pose
  let poseSeleccionada;
  if (poseIndex !== null && poseIndex < heroPool.length) {
    poseSeleccionada = heroPool[poseIndex];
  } else {
    poseSeleccionada = heroPool[Math.floor(Math.random() * heroPool.length)];
  }

  // Seleccionar variante de mirada
  const variantes = poseSeleccionada.variantes;
  if (varianteIndex !== null && varianteIndex < variantes.length) {
    return variantes[varianteIndex];
  }
  return variantes[Math.floor(Math.random() * variantes.length)];
}

module.exports = { asignarPose, poses, detectarCategoria };
