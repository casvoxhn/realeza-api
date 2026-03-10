// mascotas.js — V16.0
// Poses por actitud, no por coordenadas — cámara variada

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

  // Actitudes — el modelo elige la más natural según la foto
  const attitudes = [
    "A: Resting naturally — settled into the cushion, paws tucked under the body or hidden, completely at ease.",
    "B: Resting relaxed — lying comfortably, paws extended or loosely forward, unhurried and soft.",
    "C: Sitting upright — composed and present, paws together or neatly placed, tail curled to one side.",
    "D: Sitting asymmetric — one paw tucked in, the other extended, naturally imperfect and alive.",
    "E: Lounging — body low and sprawled with ease, head resting on a paw or slightly drooped, drowsy.",
    "F: Alert and poised — slightly raised, attentive but calm, full of quiet energy.",
  ].join(" | ");

  const attitudeInstruction = `Choose the attitude from the following options that best matches the natural character and posture of the animal in the photo: ${attitudes}`;

  // Miradas — 1 directa, 2 libres
  const gazes = [
    "The animal looks directly and calmly into the viewer's eyes.",
    "", // modelo decide completamente
    "The gaze is directed slightly away — into the middle distance, thoughtful and self-contained.",
  ];

  // Ángulos de cámara
  const cameraAngles = [
    "Camera slightly elevated, centered — classic formal portrait angle.",
    "Camera at eye level, positioned at a gentle 30-degree angle to one side — three-quarter view.",
    "Camera slightly elevated, angled 30 degrees — adds depth and dimension to the composition.",
  ];

  let framingInstruction;
  if (!isMulti) {
    const gaze = pick(gazes);
    const camera = pick(cameraAngles);

    framingInstruction = `${attitudeInstruction} ${gaze} Preserve the exact body proportions of the animal from the photo. Cushion visible at the bottom edge. ${camera} Aspect ratio 4:5 vertical.`.replace(/\s+/g, ' ').trim();
  } else {
    framingInstruction = `Look at each animal in the photo individually. Choose the attitude from the following options that best matches the natural character and posture of each one: ${attitudes}. Each animal may have a different attitude. Both animals on the same cushion, bodies close together. Both faces readable. Cushion visible at the bottom edge. Camera slightly elevated, centered. Aspect ratio 4:5 vertical.`;
  }

  const styleDescription = S.role;

  return masterPrompt(numSubjects, styleDescription, framingInstruction);
};
