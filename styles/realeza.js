// styles/realeza.js — V14.0

const { pick } = require('../utils/pick');

module.exports = function realeza(gender) {

  const cushions = [
    "large gold velvet cushion with corner tassels on a stone ledge",
    "large crimson velvet cushion with gold cord trim on a stone ledge",
    "wide burgundy velvet cushion with gold embroidery and tassels on stone"
  ];

  const mantles = [
    "a crimson velvet coronation mantle with white ermine border — black tail-tips individually painted — draped around the resting body falling to both sides, chest visible, single gold clasp at throat",
    "a deep burgundy velvet royal mantle with thick ermine trim draped around resting body, gold pin at throat",
    "a royal blue velvet robe with ermine collar draped around resting body, gold cord"
  ];

  const mantles_m = [
    "a king's crimson velvet mantle with wide ermine border — black tail-tips individually painted — draped around resting body, heavy gold clasp",
    "a deep burgundy royal mantle with ermine draped around resting body, single gold clasp"
  ];

  const mantles_f = [
    "a queen's crimson velvet mantle with fine ermine trim draped around resting body, delicate gold clasp",
    "a royal blue velvet court mantle with ermine draped around resting body, gold cord"
  ];

  const crowns = [
    "a heavy imperial crown pressing into the fur — large central ruby with deep red internal glow brightening to a single surface highlight",
    "a royal crown with large central emerald — deep green, one specular highlight — pressing into the fur with weight",
    "a golden crown with large central sapphire — deep blue with one point of light — heavy on the head"
  ];

  const crowns_m = [
    "a king's imperial crown — heavy gold, large central ruby glowing deep red — ermine base band pressing into the fur",
    "a warrior-king crown — gold with central sapphire, deep blue with bright highlight"
  ];

  const crowns_f = [
    "an elegant queen's crown — gold filigree with central diamond as pure cold light",
    "a queen's tiara-crown with luminous pearls and diamonds"
  ];

  const selectedMantle = gender === 'masculine' ? pick(mantles_m)
    : gender === 'feminine' ? pick(mantles_f)
    : pick(mantles);

  const selectedCrown = gender === 'masculine' ? pick(crowns_m)
    : gender === 'feminine' ? pick(crowns_f)
    : pick(crowns);

  const poses_dog = [
    "The dog lies in sphinx pose — chest resting on the cushion, both front paws extended flat forward, head raised with regal authority looking at viewer.",
    "The dog rests chest-down on the cushion, front paws stretched forward and flat, head up."
  ];

  const poses_cat = [
    "The cat lies in sphinx pose — chest on cushion, front paws extended flat forward, head raised with absolute stillness looking at viewer.",
    "The cat rests chest-down on cushion, front paws forward and flat, head raised."
  ];

  return {
    name: "Realeza Imperial",
    role: `Style: Rigaud imperial court portrait. The animal wears ${selectedMantle}. On its head: ${selectedCrown}. It rests on a ${pick(cushions)}. Background near-black with warm amber halo behind head. Powerful light from upper right. Ermine tail-tips individually painted.`,
    poses_dog,
    poses_cat
  };
};
