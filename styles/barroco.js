// styles/barroco.js — V15.0

const { pick } = require('../utils/pick');

module.exports = function barroco(gender) {

  const robes = [
    "a near-black velvet cloak with white ermine collar — black tail-tips individually painted — draped around the body, chest visible, a single thin elegant antique gold chain",
    "a dark charcoal velvet robe with ermine trim — draped around the body, one delicate antique gold chain",
    "a near-black velvet mantle with gold brocade detail and ermine collar — draped around the body, fine antique gold chain"
  ];

  const robes_m = [
    "a black velvet doublet with ermine collar — draped around the body — a single elegant thin gold chain, each link refined and antique",
    "a dark burgundy velvet robe with ermine — draped around the body — one delicate antique gold chain"
  ];

  const robes_f = [
    "a black satin gown with pearl-white lace collar — draped around the body — a single strand of luminous pearls",
    "a deep charcoal velvet robe with ermine — draped around the body — a single delicate pearl brooch"
  ];

  // Cojín contrasta con la ropa oscura — colores ricos que destacan
  const cushions = [
    "a large opulent deep burgundy velvet cushion — full and generously inflated — gold cord trim and corner tassels, on a stone ledge",
    "a large rich crimson velvet cushion — inflated and luxurious — antique gold embroidery and tassels, on a stone ledge",
    "a large deep teal velvet cushion — full and generous — gold trim and tassels, on a marble ledge"
  ];

  const poses_dog = [
    "The dog lies in sphinx pose — chest down on the cushion, both front paws extended flat forward, head raised looking at the viewer with intensity.",
    "The dog sits upright on the cushion — front paws down, body composed, gaze turned slightly to one side with psychological weight.",
    "The dog rests chest-down on the cushion, front paws forward, head in three-quarter profile — looking away into shadow with quiet gravitas."
  ];

  const poses_cat = [
    "The cat lies in sphinx pose — chest down on the cushion, front paws extended flat forward, head raised with quiet intensity looking at the viewer.",
    "The cat sits upright on the cushion — compact, paws together, gaze directed to one side with piercing inner stillness.",
    "The cat rests chest-down, front paws forward, head turned in three-quarter profile — emerging from shadow, gaze directed away with brooding presence."
  ];

  const selectedRobe = gender === 'masculine' ? pick(robes_m)
    : gender === 'feminine' ? pick(robes_f)
    : pick(robes);

  return {
    name: "Gran Maestro Oscuro",
    role: `Style: Rembrandt Dutch Golden Age — circa 1660. The animal wears ${selectedRobe}. It rests on ${pick(cushions)}. Background near-black with warm umber undertones — not flat, subtle warm brushwork — soft amber halo behind the head. Single candle from upper left — one side fully lit, the other in warm rich shadow. The gold chain is thin, elegant, antique — warm light on raised links, dark in recesses. Eyes: one small warm catchlight, deep iris, visible wet lower line.`,
    poses_dog,
    poses_cat
  };
};
