// styles/barroco.js — V13.0

const { pick } = require('../utils/pick');

module.exports = function barroco(gender) {

  const robes = [
    "near-black velvet cloak with white ermine collar — individual black tail-tips — draped around resting body, chest visible, single heavy antique gold chain",
    "dark charcoal velvet robe with ermine trim — around resting body, thick antique gold chain",
    "near-black velvet mantle with gold brocade and ermine collar — around resting body, one heavy gold chain"
  ];

  const robes_masculine = [
    "black velvet doublet with ermine collar — around resting body — heavy gold chain of state, each link catching candlelight",
    "dark burgundy velvet robe with ermine — around resting body — single massive antique gold chain"
  ];

  const robes_feminine = [
    "black satin baroque gown with pearl-white lace collar — around resting body — single strand of large luminous pearls",
    "deep charcoal velvet robe with ermine — around resting body — single pearl brooch"
  ];

  const cushions = [
    "a large dark charcoal velvet cushion with antique gold trim and tassels — wide and opulent, animal rests comfortably with space around it — on a stone ledge",
    "a large near-black velvet cushion with warm gold tassel — spacious, animal rests within it — stone ledge",
    "a wide deep umber velvet cushion with dark gold trim — generous size, animal rests on top"
  ];

  const selectedRobe = gender === 'masculine' ? pick(robes_masculine)
    : gender === 'feminine' ? pick(robes_feminine)
    : pick(robes);

  const poses_dog = [
    "The dog lies sphinx pose — chest down, front paws flat and extended forward on the cushion, head raised with intensity.",
    "The dog rests with front paws forward on the cushion, body low, head raised looking at viewer."
  ];

  const poses_cat = [
    "The cat lies sphinx pose — chest down, front paws flat and extended forward on the cushion, head raised with quiet intensity.",
    "The cat rests with front paws forward on the cushion, body low, head raised."
  ];

  return {
    name: "Gran Maestro Oscuro",
    role: `Rembrandt Dutch Golden Age style circa 1660. Single candle light from upper left — one side lit, one side in warm shadow. The animal wears ${selectedRobe}. It rests on ${pick(cushions)}. Background is near-black atmospheric darkness — not flat, warm umber undertones, soft amber halo behind head. Gold chain catches the candle: warm light on raised surfaces, dark in recesses. Eyes have one small warm catchlight, deep iris, visible wet lower line.`,
    poses_dog,
    poses_cat
  };
};
