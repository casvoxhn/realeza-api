// mascotas.js — V9.0
// Simple. El masterPrompt y los estilos hacen el trabajo.

const masterPrompt = require('./masterPrompt');
const humanGuard = require('./utils/humanGuard');
const { pick } = require('./utils/pick');

const renacimientoStyle = require('./styles/renacimiento');
const realezaStyle = require('./styles/realeza');
const barrocoStyle = require('./styles/barroco');

module.exports = function mascotas(style, numSubjects, isGroup, gender) {

  const isMulti = numSubjects > 1 || !!isGroup;

  // ─── CARGAR ESTILO ───────────────────────────────────────────────────────
  const styleMap = {
    renacimiento: renacimientoStyle,
    realeza: realezaStyle,
    barroco: barrocoStyle,
    rey: realezaStyle,
    museum_elegance: renacimientoStyle,
    imperial_coronation: realezaStyle,
    baroque_drama: barrocoStyle,
  };

  const styleKey = style?.toLowerCase().replace(/\s+/g, '_') || 'renacimiento';
  const buildStyle = styleMap[styleKey] || renacimientoStyle;
  const S = buildStyle(gender);

  // ─── POSE ────────────────────────────────────────────────────────────────
  const dogPose = pick(S.poses_dog);
  const catPose = pick(S.poses_cat);

  // ─── FRAMING ─────────────────────────────────────────────────────────────
  let framingInstruction;

  if (!isMulti) {
    framingInstruction = `SOLO PORTRAIT: The subject fills the frame. Head 40–55% of image height. Use the appropriate pose:
- If dog: ${dogPose}
- If cat: ${catPose}
Eye-level or slightly above. The subject is close. This is a portrait, not a scene.`;
  } else {
    framingInstruction = `GROUP PORTRAIT (${numSubjects} subjects): Natural arrangement — all subjects fully visible, physical connection between them. The largest subject is the visual anchor. All faces readable and properly lit.`;
  }

  // ─── GENDER BLOCK ────────────────────────────────────────────────────────
  let genderBlock = '';
  if (gender === 'masculine') {
    genderBlock = `GENDER: Masculine energy — broad chest forward, commanding presence, king's crown and wardrobe variants.`;
  } else if (gender === 'feminine') {
    genderBlock = `GENDER: Feminine energy — graceful posture, composed gaze, queen's crown and wardrobe variants.`;
  }

  // ─── STYLE DESCRIPTION ───────────────────────────────────────────────────
  const styleDescription = `
${S.role}

${genderBlock}
`;

  // ─── HUMAN GUARD ─────────────────────────────────────────────────────────
  const fullStyleDescription = styleDescription + '\n' + humanGuard();

  return masterPrompt(numSubjects, fullStyleDescription, framingInstruction);
};
