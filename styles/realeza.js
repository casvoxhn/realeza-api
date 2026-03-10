// styles/realeza.js — V15.0

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

  const crowns = [
    "a heavy imperial crown pressing into the fur with real weight — large central ruby with deep red internal glow and a single bright surface highlight — gold with ermine base band",
    "a royal crown with large central emerald — deep green, one specular highlight — heavy on the head",
    "a golden crown with large central sapphire — deep blue with one point of pure light — sitting with gravity"
  ];

  const crowns_m = [
    "a king's imperial crown — heavy gold, large central ruby glowing deep red — ermine base pressing into the fur",
    "a warrior-king crown — gold with central sapphire, deep blue brightening to a highlight"
  ];

  const crowns_f = [
    "an elegant queen's crown — gold filigree with central diamond as a point of cold light",
    "a queen's tiara-crown with graduated luminous pearls and diamonds"
  ];

  // Combinaciones elegantes cojín + capa — colores complementarios, no iguales
  const cushions = [
    "a large opulent gold velvet cushion — full and generously inflated — with gold cord trim and corner tassels, on a marble stone ledge",
    "a large ivory silk damask cushion — full and luxurious — with gold tassel, on a stone ledge",
    "a large deep teal velvet cushion — inflated and generous — gold embroidered border and tassels, on a marble ledge"
  ];

  const poses_dog = [
    "The dog lies in sphinx pose — chest down on the cushion, both front paws extended flat forward, head raised looking at the viewer.",
    "The dog sits naturally on the cushion — upright, both front paws down, body straight, looking directly at the viewer.",
    "The dog rests on the cushion chest-down, front paws forward, head turned slightly with dignity."
  ];

  const poses_cat = [
    "The cat lies in sphinx pose — chest down on the cushion, front paws extended flat forward, head raised looking at the viewer.",
    "The cat sits naturally on the cushion — upright and compact, front paws together, looking directly at the viewer.",
    "The cat rests chest-down, front paws forward, head raised with absolute regal stillness."
  ];

  const selectedMantle = gender === 'masculine' ? pick(mantles_m)
    : gender === 'feminine' ? pick(mantles_f)
    : pick(mantles);

  const selectedCrown = gender === 'masculine' ? pick(crowns_m)
    : gender === 'feminine' ? pick(crowns_f)
    : pick(crowns);

  return {
    name: "Realeza Imperial",
    role: `Style: Rigaud imperial court portrait — 17th century. The animal wears ${selectedMantle}. On its head: ${selectedCrown}. It rests on ${pick(cushions)}. Background near-black at corners graduating to warm amber umber behind the head — no detail, pure atmosphere. Powerful warm light from upper right. Ermine tail-tips individually painted. No hanging medallions or necklaces.`,
    poses_dog,
    poses_cat
  };
};
