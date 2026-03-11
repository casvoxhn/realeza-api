// styles/renacimiento.js — V17.2 (mantle fix)
const { pick } = require('../utils/pick');
module.exports = function renacimiento(gender) {
  const capes = [
    "a forest-green velvet cape with gold embroidered border — falling behind the shoulders and draping to each side, chest and belly completely bare. Fastened with a braided gold cord at the shoulder",
    "a deep emerald velvet mantle with antique gold trim — falling behind the shoulders to each side, chest uncovered. Simple gold cord at the shoulder",
    "a dark olive-green velvet cape with gold leaf embroidery — falling behind the shoulders, draping to the sides, chest bare. Fine gold cord fastening at the shoulder"
  ];
  const capes_m = [
    "a forest-green velvet cape with gold embroidered border — falling behind the shoulders and draping to each side, chest completely bare. Gold cord at the shoulder",
    "a hunter-green velvet mantle with antique gold trim — falling behind the shoulders to the sides, chest bare. Simple clasp at the shoulder"
  ];
  const capes_f = [
    "a sage-green silk cape with delicate gold embroidery — falling behind the shoulders, draping to each side, chest uncovered. Gold cord bow at the shoulder",
    "an emerald velvet mantle with champagne gold trim — falling behind the shoulders to the sides, chest bare. Fine ribbon at the shoulder"
  ];
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
