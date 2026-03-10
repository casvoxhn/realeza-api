// mascotas.js — V9.2

const masterPrompt = require('./masterPrompt');
const humanGuard = require('./utils/humanGuard');
const wowLayer = require('./utils/wowLayer');
const visualAnalysis = require('./utils/visualAnalysis');
const { pick } = require('./utils/pick');

const renacimientoStyle = require('./styles/renacimiento');
const realezaStyle = require('./styles/realeza');
const barrocoStyle = require('./styles/barroco');

module.exports = function mascotas(style, numSubjects, isGroup, gender) {

  const isMulti = numSubjects > 1 || !!isGroup;

  // ─── ESTILO ──────────────────────────────────────────────────────────────
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

  // ─── WOW KEY ─────────────────────────────────────────────────────────────
  const wowKey = ['rey', 'realeza', 'imperial_coronation'].includes(styleKey) ? 'realeza'
    : styleKey === 'museum_elegance' ? 'renacimiento'
    : styleKey === 'baroque_drama' ? 'barroco'
    : styleKey;

  // ─── POSE ────────────────────────────────────────────────────────────────
  const dogPose = pick(S.poses_dog);
  const catPose = pick(S.poses_cat);

  // ─── GENDER ──────────────────────────────────────────────────────────────
  let genderBlock = '';
  if (gender === 'masculine') {
    genderBlock = `GENDER: King's crown and wardrobe variants. Commanding, direct gaze.`;
  } else if (gender === 'feminine') {
    genderBlock = `GENDER: Queen's crown and wardrobe variants. Composed, graceful.`;
  }

  // ─── FRAMING ─────────────────────────────────────────────────────────────
  let framingInstruction;
  if (!isMulti) {
    framingInstruction = `FRAMING:
- Close portrait. Head occupies 40–50% of image height.
- Show: head + chest + front paws. Cut just below the front paws.
- If dog: ${dogPose}
- If cat: ${catPose}
- Camera at eye-level. Subject looks directly at the viewer.`;
  } else {
    framingInstruction = `GROUP PORTRAIT (${numSubjects} subjects):
- All subjects in natural resting poses, front paws visible.
- All faces readable. Physical connection between subjects — touching or very close.`;
  }

  // ─── ENSAMBLAJE ──────────────────────────────────────────────────────────
  const styleDescription = `
${S.role}
${genderBlock}

${wowLayer(wowKey)}

${visualAnalysis()}

${humanGuard()}
`;

  return masterPrompt(numSubjects, styleDescription, framingInstruction);
};
