// ARCHIVO: mascotas.js
// ORQUESTADOR MAESTRO — V8.0
// Ensambla: visual analysis + style + wow layer + human guard + poses + masterPrompt
// El único archivo que el server necesita llamar para mascotas.

const masterPrompt = require('./masterPrompt');
const visualAnalysis = require('./utils/visualAnalysis');
const humanGuard = require('./utils/humanGuard');
const wowLayer = require('./utils/wowLayer');
const { pick, weightedPick } = require('./utils/pick');

const renacimientoStyle = require('./styles/renacimiento');
const realezaStyle = require('./styles/realeza');
const barrocoStyle = require('./styles/barroco');

module.exports = function mascotas(style, numSubjects, isGroup, gender) {

  const isMulti = numSubjects > 1 || !!isGroup;

  // ─── 1. CARGAR ESTILO ────────────────────────────────────────────────────
  const styleMap = {
    renacimiento: renacimientoStyle,
    realeza: realezaStyle,
    barroco: barrocoStyle,
    // Aliases para los nombres del frontend
    museum_elegance: renacimientoStyle,
    imperial_coronation: realezaStyle,
    baroque_drama: barrocoStyle,
  };

  const styleKey = style?.toLowerCase().replace(/\s+/g, '_') || 'renacimiento';
  const buildStyle = styleMap[styleKey] || renacimientoStyle;
  const S = buildStyle(gender); // S = style object con todas las propiedades

  // ─── 2. POSES (DOG vs CAT — el modelo ya lo sabe del visual analysis) ──
  // Usamos weighted pick: lying poses tienen más peso que seated
  const dogPoseWeighted = weightedPick([
    { value: pick(S.poses_dog), weight: 60 },
    { value: pick(S.poses_dog), weight: 40 },
  ]);

  const catPoseWeighted = pick(S.poses_cat);

  // ─── 3. COMPOSICIÓN SOLO vs GRUPO ────────────────────────────────────────
  const soloFramings = [
    `**SOLO COMPOSITION:** Use the pose appropriate for the detected species (dog or cat — see visual analysis above). ${dogPoseWeighted} (if dog) OR ${catPoseWeighted} (if cat). Eye-level camera angle. 50mm portrait feel. The subject fills the frame with nobility — not cramped, not distant.`,
    `**SOLO COMPOSITION:** 3/4 portrait view. Subject angled slightly, face toward viewer. Full presence in frame. Eye-level. The prop/cushion is visible and grounding. The background breathes.`,
  ];

  const groupFramings = [
    `**GROUP COMPOSITION (${numSubjects} SUBJECTS):** Arrange in a natural pyramid or diagonal — the most visually dominant subject at center-front. Physical connection between subjects is MANDATORY (touching, leaning, proximity). ALL subjects fully visible — no face occlusion. The largest subject is the visual anchor. Scale between subjects must be anatomically correct.`,
    `**GROUP COMPOSITION:** Subjects share the frame in organic closeness. The hero subject (largest or most prominent) is front-center. Secondary subjects flank slightly behind. Warm connection between them — this is a family, not strangers. ALL faces readable and properly lit.`,
  ];

  const petWithHumanFramings = [
    `**PET + HUMAN COMPOSITION:** The PET is the visual hero — positioned front and slightly forward. The human (adult or child) provides emotional context from behind or beside. Physical connection is MANDATORY: child's arm around the pet, adult hand on the pet's back, or clear bond gesture. The pet's face and the human's face are BOTH fully visible and properly lit (see Human Guard rules).`,
  ];

  // Detect the right framing
  let framingInstruction;
  if (!isMulti) {
    framingInstruction = pick(soloFramings);
  } else {
    framingInstruction = pick(groupFramings);
  }

  // ─── 4. GENDER MODIFIER ──────────────────────────────────────────────────
  let genderBlock = '';
  if (gender === 'masculine') {
    genderBlock = `
**GENDER MODIFIER — MASCULINE:**
The subject carries masculine energy throughout:
- Posture: broad chest forward, commanding presence, direct authoritative gaze
- Wardrobe leans toward king/warrior/patriarch aesthetic
- Crown/accessories: heavier, more imposing variants
- Color palette: slightly deeper, more saturated
`;
  } else if (gender === 'feminine') {
    genderBlock = `
**GENDER MODIFIER — FEMININE:**
The subject carries feminine energy throughout:
- Posture: graceful, composed, warm dignified gaze
- Wardrobe leans toward queen/noblewoman aesthetic
- Crown/accessories: more elegant, refined variants
- Color palette: slightly warmer, more luminous
`;
  }

  // ─── 5. SCALE INSTRUCTION ────────────────────────────────────────────────
  const scaleInstruction = `
**SCALE & FRAME CONTROL:**
- The primary subject's head must occupy 25–40% of the total image height.
- There must be breathing room above the head (minimum 8% of image height).
- The cushion/prop must be visible and grounding — the subject is not floating.
- If a crown is present, it must fit within the frame — never cropped.
`;

  // ─── 6. CONTRAST INSTRUCTION (dynamic backdrop guidance) ─────────────────
  const contrastInstruction = `
**BACKDROP CONTRAST RULE (CRITICAL):**
Based on your visual analysis of the subject's dominant coat color:
- Light/white coat → use a darker, richer backdrop for maximum separation
- Dark/black coat → use a warm amber, umber, or deep burgundy backdrop with a light halo
- Golden/orange coat → use a deep forest green, deep burgundy, or dark blue backdrop
- Grey/silver coat → use a warm umber or deep olive backdrop
NEVER let the subject's coat blend into the background. Contrast is non-negotiable.
`;

  // ─── 7. ASSEMBLE STYLE DESCRIPTION ───────────────────────────────────────
  const styleDescription = `
**ROLE:** ${S.role}
${genderBlock}
${S.genderNote || ''}

**PALETTE:** ${S.palette}

**BACKDROP:** ${S.backdrop}
${contrastInstruction}

**PROP / STAGING:** ${S.props}

**WARDROBE:** ${S.wardrobe}
CRITICAL: The wardrobe must feel HEAVY and REAL. Fabric has weight, pile direction, shadow in folds.
The animal's NATURAL CHEST AND FUR must be visible — the garment drapes AROUND and BEHIND the subject, not over them.

**CROWN / ACCESSORY:** ${S.crown || S.accessory}
CRITICAL: The crown/accessory must sit naturally on the subject — it does NOT float.
It has real weight, real material texture, real shadows cast on the fur beneath it.

**LIGHTING:** ${S.lighting}

${S.mood}

${scaleInstruction}

${wowLayer(styleKey === 'museum_elegance' ? 'renacimiento' : styleKey === 'imperial_coronation' ? 'realeza' : styleKey === 'baroque_drama' ? 'barroco' : styleKey)}

${visualAnalysis()}

${isMulti && numSubjects > 1 ? '' : ''}
`;

  // ─── 8. INJECT HUMAN GUARD IF NEEDED ─────────────────────────────────────
  // The human guard is always included — it self-activates only if the visual
  // analysis detects a human. Zero cost if no human is present.
  const humanGuardBlock = humanGuard();

  // ─── 9. FINAL ASSEMBLY ───────────────────────────────────────────────────
  const fullStyleDescription = styleDescription + '\n' + humanGuardBlock;

  return masterPrompt(numSubjects, fullStyleDescription, framingInstruction);
};
