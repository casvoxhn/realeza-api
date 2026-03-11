// styles/realeza.js — V17.4
const { pick } = require('../utils/pick');
module.exports = function realeza(gender) {
  const mantles = [
    "a crimson velvet coronation mantle with white ermine border — black tail-tips individually painted — falling behind the shoulders and draping to each side, chest and belly completely bare. Single gold clasp at the shoulder. A visible gold chain with a gemstone pendant",
    "a deep burgundy velvet royal mantle with white ermine trim — gold embroidery on the border — falling behind the shoulders to each side, chest uncovered. Single gold pin at the shoulder. A visible gold chain with a gemstone pendant",
    "a royal blue velvet mantle with white ermine collar — black tail-tips — falling behind the shoulders, chest bare. Gold cord fastening at the shoulder. A visible gold chain with a gemstone pendant"
  ];
  const mantles_m = [
    "a king's crimson velvet mantle with wide ermine border — black tail-tips individually painted — falling behind the shoulders and draping to each side, chest completely bare. Heavy gold clasp at the shoulder. A visible gold chain with a gemstone pendant",
    "a deep burgundy royal mantle with ermine — falling behind the shoulders to the sides, chest bare. Single gold clasp at the shoulder. A visible gold chain with a gemstone pendant"
  ];
  const mantles_f = [
    "a queen's rose-pink velvet mantle with fine ermine trim — falling behind the shoulders, draping to each side, chest uncovered. Delicate gold clasp at the shoulder. A visible gold chain with a gemstone pendant",
    "a royal blue velvet court mantle with ermine — falling behind the shoulders to the sides, chest bare. Gold cord at the shoulder. A visible gold chain with a gemstone pendant"
  ];
  const cushions = [
    "a large opulent gold velvet cushion — thick and heavily stuffed, visibly plump — gold cord trim, corner tassels, and gold embroidered border with floral arabesque pattern, on a marble stone ledge",
    "a large ivory silk damask cushion — thick and deeply cushioned — gold tassel, gold embroidered floral border, on a stone ledge",
    "a large deep teal velvet cushion — thick and heavily stuffed — gold embroidered arabesque border and corner tassels, on a marble ledge"
  ];
  const selectedMantle = gender === 'masculine' ? pick(mantles_m)
    : gender === 'feminine' ? pick(mantles_f)
    : pick(mantles);
  return {
    name: "Realeza Imperial",
    role: `Style: Rigaud imperial court portrait — 17th century. The animal wears ${selectedMantle}. It rests on ${pick(cushions)}. Background near-black at corners graduating to warm amber umber behind the head — no detail, pure atmosphere. Powerful warm light from upper right. Ermine tail-tips individually painted. No additional necklaces beyond the gold chain.`,
  };
};
