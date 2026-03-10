// mascotas.js — V10.0

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

  const wowKey = ['rey', 'realeza', 'imperial_coronation'].includes(styleKey) ? 'realeza'
    : styleKey === 'museum_elegance' ? 'renacimiento'
    : styleKey === 'baroque_drama' ? 'barroco'
    : styleKey;

  const dogPose = pick(S.poses_dog);
  const catPose = pick(S.poses_cat);

  let genderBlock = '';
  if (gender === 'masculine') {
    genderBlock = `GENDER: King's crown and wardrobe variants. Commanding presence.`;
  } else if (gender === 'feminine') {
    genderBlock = `GENDER: Queen's crown and wardrobe variants. Graceful and composed.`;
  }

  let framingInstruction;
  if (!isMulti) {
    framingInstruction = `FRAMING & POSE:
- The subject's face fills the frame naturally and prominently
- Show head, chest, and front paws — cut just below the front paws
- If dog: ${dogPose}
- If cat: ${catPose}
- Camera at eye-level with the animal`;
  } else {
    framingInstruction = `GROUP PORTRAIT (${numSubjects} subjects):
- All subjects in natural animal poses, front paws visible
- All faces readable. Physical connection between subjects.`;
  }

  const styleDescription = `
${S.role}
${genderBlock}

${wowLayer(wowKey)}

${visualAnalysis()}

${humanGuard()}
`;

  return masterPrompt(numSubjects, styleDescription, framingInstruction);
};
