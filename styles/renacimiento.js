// styles/renacimiento.js — V17.4
const { pick } = require('../utils/pick');
module.exports = function renacimiento(gender) {
  const capes = [
    "a forest-green velvet cape with gold embroidered border. Draped dramatically behind and to one side — as if arranged by a studio painter before the sitting. The fabric falls with natural weight away from the animal, not around it. A braided gold cord with decorative knot fastens the two sides of the cape at the center of the chest",
    "a deep emerald velvet mantle with antique gold trim. Arranged behind and to one side by a studio hand — falling away from the animal with natural gravity. A gold cord bow fastens the cape at the chest",
    "a dark olive-green velvet cape with gold leaf embroidery. Draped dramatically behind and to one side — studio arranged. A twisted gold cord fastens the two lapels together at the chest"
  ];
  const capes_m = [
    "a forest-green velvet cape with gold embroidered border. Draped behind and to one side — studio arranged, falling away from the animal. A heavy braided gold cord fastens both sides at the chest",
    "a hunter-green velvet mantle with antique gold trim. Arranged dramatically behind and to one side. A gold cord clasp draws the two ermine lapels together at the chest"
  ];
  const capes_f = [
    "a sage-green silk cape with delicate gold embroidery. Draped behind and to one side — arranged by a studio hand, falling with natural weight. A delicate gold cord bow fastens the cape at the chest",
    "an emerald velvet mantle with champagne gold trim. Arranged dramatically behind and to one side. A fine gold ribbon bow anchors the mantle at the chest"
  ];
  const selectedCape = gender === 'masculine' ? pick(capes_m)
    : gender === 'feminine' ? pick(capes_f)
    : pick(capes);
  return {
    name: "Jardín Dorado",
    role: `Style: Gainsborough warm aristocratic portrait — 18th century. The animal wears ${selectedCape}. Background near-black at corners graduating to warm deep umber behind the head — no detail, pure atmospheric darkness. Soft warm light from upper left.`,
  };
};
