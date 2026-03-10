// mascotas.js — V17.0
// Poses predefinidas por especie — variedad + expresión natural

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

  // Poses predefinidas — perros
  const poses_dog = [
    "The dog lies relaxed on the cushion, chest down, front paws extended loosely forward — completely at ease, its natural resting character preserved.",
    "The dog sits naturally on the cushion — upright but relaxed, front paws down, body at ease, tail visible to one side.",
    "The dog reclines on the cushion with quiet confidence — one paw tucked, one extended, head slightly turned, naturally asymmetric.",
    "The dog lies on the cushion with its body low and comfortable, head raised, paws loosely forward — unhurried and warm.",
  ];

  // Poses predefinidas — gatos
  const poses_cat = [
    "The cat lies on the cushion with its paws tucked neatly under its body — the classic loaf position, perfectly self-contained.",
    "The cat sits upright on the cushion — compact, composed, front paws together, tail curled to one side.",
    "The cat reclines on the cushion, chest down, one paw tucked in and one extended — naturally asymmetric and alive.",
    "The cat lounges on the cushion, body low and relaxed, head resting gently on its front paws — drowsy and soft.",
  ];

  // Miradas — 1 directa, 1 libre, 1 desviada
  const gazes = [
    "The animal looks directly and calmly into the viewer's eyes.",
    "",
    "The gaze is directed slightly away — into the middle distance, thoughtful and self-contained.",
  ];

  // Ángulos de cámara
  const cameraAngles = [
    "Camera slightly elevated, centered — classic formal portrait angle.",
    "Camera at eye level, gentle 30-degree angle to one side — three-quarter view.",
    "Camera slightly elevated, angled 30 degrees — adds depth and dimension.",
  ];

  let framingInstruction;
  if (!isMulti) {
    const gaze = pick(gazes);
    const camera = pick(cameraAngles);

    framingInstruction = `If the subject is a dog: ${pick(poses_dog)} If the subject is a cat: ${pick(poses_cat)} ${gaze} Preserve the exact body proportions and facial expression of the animal from the photo. Cushion visible at the bottom edge. ${camera} Aspect ratio 4:5 vertical.`.replace(/\s+/g, ' ').trim();
  } else {
    framingInstruction = `Both animals rest together on the same cushion, each in its own natural position. If there is a dog: ${pick(poses_dog)} If there is a cat: ${pick(poses_cat)} Both faces readable. Cushion visible at the bottom edge. Camera slightly elevated, centered. Aspect ratio 4:5 vertical.`;
  }

  const styleDescription = S.role;

  return masterPrompt(numSubjects, styleDescription, framingInstruction);
};
