// styles/renacimiento.js — V15.0

const { pick } = require('../utils/pick');

module.exports = function renacimiento(gender) {

  const capes = [
    "a forest-green velvet cape with gold embroidered border — draped around the body, chest visible, fastened with a braided gold cord bow",
    "a deep emerald velvet mantle with antique gold trim — draped around the body, simple gold cord at throat",
    "a dark olive-green velvet cape with gold leaf embroidery — draped around the body, fine gold cord fastening"
  ];

  const capes_m = [
    "a forest-green velvet cape with gold embroidered border — draped around the body, gold cord, chest exposed",
    "a hunter-green velvet mantle with antique gold trim — draped around the body, simple clasp"
  ];

  const capes_f = [
    "a sage-green silk cape with delicate gold embroidery — draped around the body, gold cord bow",
    "an emerald velvet mantle with champagne gold trim — draped around the body, fine ribbon"
  ];

  // Cojín de color distinto a la capa — combinaciones elegantes
  const cushions = [
    "a large opulent burgundy velvet cushion — full and generously inflated — gold embroidered trim and corner tassels, on a warm stone ledge",
    "a large rich gold velvet cushion — inflated and luxurious — with gold cord border and tassels, on a stone ledge",
    "a large deep crimson velvet cushion — full and generous — antique gold trim and tassels, on a stone ledge"
  ];

  const poses_dog = [
    "The dog lies in sphinx pose — chest down on the cushion, both front paws extended flat forward, head raised looking at the viewer.",
    "The dog sits naturally on the cushion — upright, front paws down, body relaxed, gaze turned slightly to one side with warm composure.",
    "The dog rests chest-down on the cushion, front paws forward, head in three-quarter profile — looking gently away with noble ease."
  ];

  const poses_cat = [
    "The cat lies in sphinx pose — chest down on the cushion, front paws extended flat forward, head raised looking at the viewer.",
    "The cat sits naturally on the cushion — upright and compact, paws together, gaze directed softly to one side.",
    "The cat rests chest-down, front paws forward, head turned in a gentle three-quarter profile — gazing away with serene aristocratic calm."
  ];

  const selectedCape = gender === 'masculine' ? pick(capes_m)
    : gender === 'feminine' ? pick(capes_f)
    : pick(capes);

  return {
    name: "Jardín Dorado",
    role: `Style: Gainsborough warm aristocratic portrait — 18th century. The animal wears ${selectedCape}. It rests on ${pick(cushions)}. Background is warm golden blur — soft amber and ochre completely out of focus, no architecture, no trees, no objects — pure warm atmospheric color. Soft warm golden light from upper left. The fur glows at the tips. No necklaces or hanging accessories.`,
    poses_dog,
    poses_cat
  };
};
