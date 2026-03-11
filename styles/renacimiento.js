// styles/renacimiento.js — V17.3
const { pick } = require('../utils/pick');
module.exports = function renacimiento(gender) {
  const capes = [
    "a forest-green velvet cape with gold embroidered border — falling behind the shoulders and draping to each side, chest and belly completely bare. Fastened with a braided gold cord at the shoulder. A visible gold chain with a gemstone pendant",
    "a deep emerald velvet mantle with antique gold trim — falling behind the shoulders to each side, chest uncovered. Simple gold cord at the shoulder. A visible gold chain with a gemstone pendant",
    "a dark olive-green velvet cape with gold leaf embroidery — falling behind the shoulders, chest bare. Fine gold cord fastening at the shoulder. A visible gold chain with a gemstone pendant"
  ];
  const capes_m = [
    "a forest-green velvet cape with gold embroidered border — falling behind the shoulders and draping to each side, chest completely bare. Gold cord at the shoulder. A visible gold chain with a gemstone pendant",
    "a hunter-green velvet mantle with antique gold trim — falling behind the shoulders to the sides, chest bare. Simple clasp at the shoulder. A visible gold chain with a gemstone pendant"
  ];
  const capes_f = [
    "a sage-green silk cape with delicate gold embroidery — falling behind the shoulders, draping to each side, chest uncovered. Gold cord bow at the shoulder. A visible gold chain with a gemstone pendant",
    "an emerald velvet mantle with champagne gold trim — falling behind the shoulders to the sides, chest bare. Fine ribbon at the shoulder. A visible gold chain with a gemstone pendant"
  ];
  const cushions = [
    "a large opulent burgundy velvet cushion — full and generously inflated — gold embroidered border with floral arabesque pattern and corner tassels, on a warm stone ledge",
    "a large rich gold velvet cushion — inflated and luxurious — gold embroidered arabesque border and tassels, on a stone ledge",
    "a large deep crimson velvet cushion — full and generous — gold embroidered floral border and tassels, on a stone ledge"
  ];
  const selectedCape = gender === 'masculine' ? pick(capes_m)
    : gender === 'feminine' ? pick(capes_f)
    : pick(capes);
  return {
    name: "Jardín Dorado",
    role: `Style: Gainsborough warm aristocratic portrait — 18th century. The animal wears ${selectedCape}. It rests on ${pick(cushions)}. Background near-black at corners graduating to warm deep umber behind the head — no detail, pure atmospheric darkness. Soft warm light from upper left. No additional necklaces beyond the gold chain.`,
  };
};
