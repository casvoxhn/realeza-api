// styles/realeza.js — V13.0

const { pick } = require('../utils/pick');

module.exports = function realeza(gender) {

  const mantles = [
    "crimson velvet coronation mantle with white ermine border — individual black tail-tips — draped around resting body, chest fur visible, single gold clasp",
    "deep burgundy velvet royal mantle with ermine trim — wrapped around resting body, gold pin at throat",
    "royal blue velvet robe with ermine collar — draped around resting body, gold cord fastening"
  ];

  const mantles_masculine = [
    "king's crimson velvet mantle with wide ermine border — draped around resting body, heavy gold clasp",
    "deep burgundy royal mantle with ermine — around resting body, single gold fastening"
  ];

  const mantles_feminine = [
    "queen's crimson velvet mantle with ermine — around resting body, delicate gold clasp",
    "royal blue velvet court mantle with ermine — around resting body, gold cord"
  ];

  const crowns = [
    "a heavy imperial crown pressing into the fur with real weight — large central ruby glowing deep red with a single bright highlight — gold with ermine base band",
    "a royal crown with large central emerald — deep green, one specular highlight — heavy, pressing into the fur",
    "a golden crown with large central sapphire — deep blue with one point of light — sitting with gravity on the head"
  ];

  const crowns_masculine = [
    "a king's imperial crown — heavy gold, large central ruby glowing from within — pressing into the fur",
    "a warrior-king crown — gold with central sapphire, deep blue with bright highlight"
  ];

  const crowns_feminine = [
    "an elegant queen's crown — gold filigree, central diamond as pure light — pressing gently into fur",
    "a queen's tiara-crown — gold with luminous pearls and diamonds"
  ];

  const cushions = [
    "a large gold velvet cushion with corner tassels — wide and opulent, the animal fits comfortably with space on all sides — on a stone ledge",
    "a large crimson velvet cushion with gold cord trim — spacious and lush, the animal rests within it — stone ledge",
    "a wide burgundy velvet cushion with gold embroidery and tassels — generous size, animal rests on top"
  ];

  const selectedMantle = gender === 'masculine' ? pick(mantles_masculine)
    : gender === 'feminine' ? pick(mantles_feminine)
    : pick(mantles);

  const selectedCrown = gender === 'masculine' ? pick(crowns_masculine)
    : gender === 'feminine' ? pick(crowns_feminine)
    : pick(crowns);

  const poses_dog = [
    "The dog lies sphinx pose — chest down, front paws flat and extended forward on the cushion, head raised with regal authority.",
    "The dog rests with front paws forward on the cushion, body low, head raised."
  ];

  const poses_cat = [
    "The cat lies sphinx pose — chest down, front paws flat and extended forward on the cushion, head raised with absolute stillness.",
    "The cat rests with front paws forward on the cushion, body low, head raised."
  ];

  return {
    name: "Realeza Imperial",
    role: `Rigaud court portrait style. Powerful light from upper right. The animal wears ${selectedMantle}. On its head: ${selectedCrown}. It rests on ${pick(cushions)}. Dark near-black background with warm amber halo behind head. Ermine tail-tips painted individually. Deep warm shadows.`,
    poses_dog,
    poses_cat
  };
};
