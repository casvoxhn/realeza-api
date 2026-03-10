// styles/renacimiento.js — V17.1

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

  const selectedCape = gender === 'masculine' ? pick(capes_m)
    : gender === 'feminine' ? pick(capes_f)
    : pick(capes);

  return {
    name: "Jardín Dorado",
    role: `Style: Gainsborough warm aristocratic portrait — 18th century. The animal wears ${selectedCape}. It rests on ${pick(cushions)}. Background near-black at corners graduating to warm deep umber behind the head — no detail, pure atmospheric darkness. Soft warm light from upper left. No necklaces or hanging accessories.`,
  };
};
