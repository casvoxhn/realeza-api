// styles/barroco.js — V14.0

const { pick } = require('../utils/pick');

module.exports = function barroco(gender) {

  const cushions = [
    "large dark charcoal velvet cushion with antique gold trim and tassels on a stone ledge",
    "large near-black velvet cushion with warm gold tassel on a stone ledge",
    "wide deep umber velvet cushion with dark gold trim on stone"
  ];

  const robes = [
    "a near-black velvet cloak with white ermine collar — black tail-tips individually painted — draped around resting body, chest visible, single heavy antique gold chain across chest",
    "a dark charcoal velvet robe with ermine trim draped around resting body, thick antique gold chain",
    "a near-black velvet mantle with ermine collar draped around resting body, one heavy antique gold chain"
  ];

  const robes_m = [
    "a black velvet doublet with ermine collar draped around resting body — heavy gold chain of state across chest, each link catching candlelight",
    "a dark burgundy velvet robe with ermine around resting body — single massive antique gold chain"
  ];

  const robes_f = [
    "a black satin gown with pearl-white lace collar draped around resting body — single strand of large luminous pearls",
    "a deep charcoal velvet robe with ermine around resting body — single pearl brooch"
  ];

  const selectedRobe = gender === 'masculine' ? pick(robes_m)
    : gender === 'feminine' ? pick(robes_f)
    : pick(robes);

  const poses_dog = [
    "The dog lies in sphinx pose — chest on cushion, both front paws extended flat forward, head raised with intensity looking at viewer.",
    "The dog rests chest-down on cushion, front paws forward and flat, head up."
  ];

  const poses_cat = [
    "The cat lies in sphinx pose — chest on cushion, front paws extended flat forward, head raised with quiet intensity.",
    "The cat rests chest-down on cushion, front paws forward and flat, head raised."
  ];

  return {
    name: "Gran Maestro Oscuro",
    role: `Style: Rembrandt Dutch Golden Age circa 1660. The animal wears ${selectedRobe}. It rests on a ${pick(cushions)}. Background near-black with warm umber undertones — soft amber halo behind head, subtle warm brushwork giving depth. Single candle from upper left — one side lit, one in warm shadow. Gold chain: warm light on raised surfaces, dark in recesses, visibly old. Eyes: one small warm catchlight, deep iris, wet lower line.`,
    poses_dog,
    poses_cat
  };
};
