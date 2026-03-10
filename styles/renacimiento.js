// styles/renacimiento.js — V13.0

const { pick } = require('../utils/pick');

module.exports = function renacimiento(gender) {

  const capes = [
    "a forest-green velvet cape draped around the resting body, chest fur visible, fastened with a braided gold cord",
    "a deep emerald velvet mantle wrapped around the resting body, simple gold cord at the throat",
    "a dark olive-green velvet cape falling around the resting body, tied with a fine gold cord"
  ];

  const capes_masculine = [
    "a forest-green velvet cape around the resting body, gold cord fastening, chest exposed",
    "a hunter-green velvet mantle around the body, simple gold clasp"
  ];

  const capes_feminine = [
    "a sage-green silk cape around the resting body, delicate gold cord bow at throat",
    "an emerald velvet mantle around the body, fine gold ribbon"
  ];

  const cushions = [
    "a large, generous forest-green velvet cushion with gold embroidered trim and corner tassels — wide and full, the animal rests comfortably on top with space around it — placed on a warm stone ledge",
    "a large deep emerald velvet cushion with gold cord border — spacious and lush, the animal sits within it — stone ledge beneath",
    "a wide dark olive velvet cushion with antique gold trim and tassels — the animal rests on top with the cushion extending visibly on all sides"
  ];

  const selectedCape = gender === 'masculine' ? pick(capes_masculine)
    : gender === 'feminine' ? pick(capes_feminine)
    : pick(capes);

  const poses_dog = [
    "The dog lies sphinx pose — chest down, front paws flat and extended forward on the cushion, head raised looking at viewer.",
    "The dog rests with front paws forward on the cushion, body low, head raised."
  ];

  const poses_cat = [
    "The cat lies sphinx pose — chest down, front paws flat and extended forward on the cushion, head raised looking at viewer.",
    "The cat rests with front paws forward on the cushion, body low and compact, head raised."
  ];

  return {
    name: "Jardín Dorado",
    role: `Gainsborough aristocratic style. Warm golden light from upper left. The animal wears ${selectedCape}. It rests on ${pick(cushions)}. Background is warm golden blur — soft amber and ochre tones completely out of focus, no details. Fur glows warmly at the tips. Soft morning light throughout.`,
    poses_dog,
    poses_cat
  };
};
