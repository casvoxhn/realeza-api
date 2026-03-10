// mascotas.js — V12.0
// Prompt narrativo puro — sin bullets, sin negaciones

const masterPrompt = require('./masterPrompt');
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

  const dogPose = pick(S.poses_dog);
  const catPose = pick(S.poses_cat);

  let framingInstruction;
  if (!isMulti) {
    framingInstruction = `${dogPose.includes('dog') ? `If the subject is a dog: ${dogPose}` : ''} ${catPose.includes('cat') ? `If the subject is a cat: ${catPose}` : ''} The animal's head is prominent in the upper portion of the frame. The front paws are visible and extended forward on the cushion surface. The frame is completely filled — the subject from head to front paws occupies the full composition, with the cushion visible at the bottom edge. Camera is at the animal's eye level. Aspect ratio 4:5 vertical.`;
  } else {
    framingInstruction = `Both animals lie in sphinx poses on the same cushion, bodies touching or very close, both sets of front paws visible and extended forward. All faces are readable. The frame is completely filled. Camera at eye level. Aspect ratio 4:5 vertical.`;
  }

  const styleDescription = S.role;

  return masterPrompt(numSubjects, styleDescription, framingInstruction);
};
