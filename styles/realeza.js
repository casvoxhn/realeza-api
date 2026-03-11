// styles/realeza.js — V17.5
const { pick } = require('../utils/pick');
module.exports = function realeza(gender) {
  const mantles = [
    "a crimson velvet coronation mantle with white ermine border — black tail-tips individually painted. Draped dramatically behind and to one side — as if arranged by a studio painter before the sitting. The heavy velvet falls away from the animal, not around it. A large gold medallion brooch with a precious gemstone fastens the ermine at the center of the chest — the two lapels drawn together by this single noble clasp",
    "a deep burgundy velvet royal mantle with white ermine trim and gold embroidery on the border. Arranged behind and to one side by a studio hand — falling with natural weight away from the animal. A gold and gemstone brooch anchors the ermine collar at the chest",
    "a royal blue velvet mantle with white ermine collar — black tail-tips. Draped behind and dramatically to one side — studio arranged. A gold medallion fastens the two sides of the ermine at the chest"
  ];
  const mantles_m = [
    "a king's crimson velvet mantle with wide ermine border — black tail-tips individually painted. Draped dramatically behind and to one side as if arranged by a court painter. The velvet falls away with natural weight. A large heavy gold brooch with a deep gemstone fastens the ermine collar at the center of the chest",
    "a deep burgundy royal mantle with ermine. Arranged behind and to one side — falling away from the animal. A gold and gemstone medallion clasp at the chest"
  ];
  const mantles_f = [
    "a queen's rose-pink velvet mantle with fine ermine trim. Draped behind and to one side — studio arranged, falling with natural weight. A delicate gold brooch with a small gemstone fastens the ermine at the chest",
    "a royal blue velvet court mantle with ermine. Arranged dramatically behind and to one side. A gold and pearl brooch anchors the mantle at the chest"
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
    role: `Style: Rigaud imperial court portrait — 17th century. The animal wears ${selectedMantle}. It rests on ${pick(cushions)}. Background near-black at corners graduating to warm amber umber behind the head — no detail, pure atmosphere. Powerful warm light from upper right. Ermine tail-tips individually painted.`,
  };
};
