// mascotas.js — V17.2
// Inteligente: pinta TODOS los animales visibles en TODAS las fotos
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

  // Poses predefinidas — perros (6)
  const poses_dog = [
    "lies relaxed, chest down, front paws extended loosely forward — completely at ease.",
    "sits naturally — upright but relaxed, front paws down, body at ease.",
    "reclines with quiet confidence — one paw tucked, one extended, head slightly turned, naturally asymmetric.",
    "lies with body low and comfortable, head raised, paws loosely forward — unhurried and warm.",
    "is alert and poised — slightly raised, attentive but calm, full of contained energy.",
    "lounges deeply — body sprawled with complete ease, fully relaxed, almost drowsy.",
  ];

  // Poses predefinidas — gatos (6)
  const poses_cat = [
    "lies with paws tucked neatly under its body — the classic loaf position, perfectly self-contained.",
    "sits upright — compact, composed, front paws together.",
    "reclines chest down, one paw tucked in and one extended — naturally asymmetric and alive.",
    "lounges with body low and relaxed, head resting gently on its front paws — drowsy and soft.",
    "sits alert — ears up, body poised, quietly attentive with contained feline energy.",
    "sits asymmetrically — one paw forward, one tucked, body slightly turned, naturally imperfect.",
  ];

  // Miradas
  const gazes = [
    "Each animal looks directly and calmly into the viewer's eyes.",
    "",
    "The gaze of each animal is directed slightly away — into the middle distance, thoughtful and self-contained.",
  ];

  // Ángulos de cámara
  const cameraAngles = [
    "Camera slightly elevated, centered — classic formal portrait angle.",
    "Camera at eye level, gentle 30-degree angle to one side — three-quarter view.",
    "Camera slightly elevated, angled 30 degrees — adds depth and dimension.",
  ];

  const gaze = pick(gazes);
  const camera = pick(cameraAngles);
  const dogPose = pick(poses_dog);
  const catPose = pick(poses_cat);

  // Instrucción universal: cuenta y pinta TODOS los animales en TODAS las fotos
  const countInstruction = `Look at ALL photos provided. Identify and count EVERY animal visible across all images. Paint ALL of them together in a single portrait on the same cushion — no animal should be left out.`;

  const poseInstruction = `For each dog in the photos: it ${dogPose} For each cat in the photos: it ${catPose} If two animals of the same species appear, give each a slightly different pose so both are clearly visible. All faces must be readable. Preserve the exact appearance and proportions of each animal from the photos.`;

  const framingInstruction = `${countInstruction} ${poseInstruction} ${gaze} Cushion visible at the bottom of the frame. ${camera} Aspect ratio 4:5 vertical.`.replace(/\s+/g, ' ').trim();

  const styleDescription = S.role;
  return masterPrompt(numSubjects, styleDescription, framingInstruction);
};
