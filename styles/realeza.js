// styles/realeza.js — V17.2 (sin corona)
const { pick } = require('../utils/pick');
module.exports = function realeza(gender) {
  const mantles = [
    "a crimson velvet coronation mantle with white ermine border — black tail-tips individually painted — draped around the body, chest visible, single gold clasp at throat",
    "a deep burgundy velvet royal mantle with white ermine trim — gold embroidery on the border — draped around the body, single gold pin",
    "a royal blue velvet robe with white ermine collar — black tail-tips — draped around the body, gold cord fastening"
  ];
  const mantles_m = [
    "a king's crimson velvet mantle with wide ermine border — black tail-tips individually painted — draped around the body, single heavy gold clasp",
    "a deep burgundy royal mantle with ermine — draped around the body, single gold clasp"
  ];
  const mantles_f = [
    "a queen's rose-pink velvet mantle with fine ermine trim — draped around the body, delicate gold clasp",
    "a royal blue velvet court mantle with ermine — draped around the body, gold cord"
  ];
  const cushions = [
    "a large opulent gold velvet cushion — thick and heavily stuffed, visibly plump — gold cord trim and corner tassels, on a marble stone ledge",
    "a large ivory silk damask cushion — thick and deeply cushioned, almost square in its fullness — gold tassel, on a stone ledge",
    "a large deep teal velvet cushion — thick and round with volume, heavily stuffed — gold embroidered border and corner tassels, on a marble ledge"
  ];
  const selectedMantle = gender === 'masculine' ? pick(mantles_m)
    : gender === 'feminine' ? pick(mantles_f)
    : pick(mantles);
  return {
    name: "Realeza Imperial",
    role: `Style: Rigaud imperial court portrait — 17th century. The animal wears ${selectedMantle}. It rests on ${pick(cushions)}. Background near-black at corners graduating to warm amber umber behind the head — no detail, pure atmosphere. Powerful warm light from upper right. Ermine tail-tips individually painted. No hanging medallions or necklaces.`,
  };
};
