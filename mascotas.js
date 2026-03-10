// mascotas.js — V11.0

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
    genderBlock = `GENDER VARIANT: Use king's crown and masculine wardrobe options.`;
  } else if (gender === 'feminine') {
    genderBlock = `GENDER VARIANT: Use queen's crown and feminine wardrobe options.`;
  }

  let framingInstruction;
  if (!isMulti) {
    framingInstruction = `POSE & FRAMING:
- If dog: ${dogPose}
- If cat: ${catPose}
- The head is in the upper portion of the frame. The body and cushion fill the lower portion.
- Front paws are always visible, extended forward on the cushion.
- Camera at the animal's eye level.
- The frame is full — no empty compositional space.`;
  } else {
    framingInstruction = `GROUP PORTRAIT — ${numSubjects} subjects:
- All animals in sphinx pose on the same cushion, touching or very close.
- Both sets of front paws visible and forward.
- All faces readable. The animals look at the viewer.
- The frame is completely filled — head to cushion edge.`;
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
