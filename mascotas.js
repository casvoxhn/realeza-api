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

  // Actitudes — libertad total de pose, mínimas restricciones físicas
  const attitudes = [
    "The animal rests on the cushion in whatever position feels most natural to its character — settled, at ease, unhurried. Paws visible or partially visible.",
    "The animal is relaxed on the cushion, completely at home — it may have its paws tucked, extended, or curled as it naturally would. The face is readable.",
    "The animal sits or reclines on the cushion with quiet self-possession — no forced pose, just its own natural way of being still.",
  ];

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
    const attitude = pick(attitudes);
    const gaze = pick(gazes);
    const camera = pick(cameraAngles);

    framingInstruction = `${attitude} ${gaze} Preserve the exact body proportions of the animal from the photo. Cushion visible at the bottom edge. ${camera} Aspect ratio 4:5 vertical.`.replace(/\s+/g, ' ').trim();
  } else {
    framingInstruction = `Both animals rest together on the same cushion — settled and at ease in their own natural positions, bodies close. Both faces readable. Cushion visible at the bottom edge. Camera slightly elevated, centered. Aspect ratio 4:5 vertical.`;
  }

  const styleDescription = S.role;

  return masterPrompt(numSubjects, styleDescription, framingInstruction);
};
