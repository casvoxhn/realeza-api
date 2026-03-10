// styles/barroco.js — V17.1

const { pick } = require('../utils/pick');

module.exports = function barroco(gender) {

  const robes = [
    "a near-black velvet cloak with white ermine collar — black tail-tips individually painted — draped around the body, chest visible, a single thin elegant antique gold chain",
    "a dark charcoal velvet robe with ermine trim — draped around the body, one delicate antique gold chain",
    "a near-black velvet mantle with gold brocade detail and ermine collar — draped around the body, fine antique gold chain"
  ];

  const robes_m = [
    "a near-black velvet cloak with wide ermine collar — black tail-tips individually painted — draped around the body, chest visible, a single thin elegant antique gold chain",
    "a dark burgundy velvet mantle with ermine — draped around the body — one delicate antique gold chain"
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

  const selectedRobe = gender === 'masculine' ? pick(robes_m)
    : gender === 'feminine' ? pick(robes_f)
    : pick(robes);

  return {
    name: "Gran Maestro Oscuro",
    role: `Style: Rembrandt Dutch Golden Age — circa 1660. The animal wears ${selectedRobe}. It rests on ${pick(cushions)}. Background near-black with warm umber undertones — not flat, subtle warm brushwork — soft amber halo behind the head. Single candle from upper left — one side fully lit, the other in warm rich shadow. The gold chain is thin, elegant, antique — warm light on raised links, dark in recesses. Eyes: one small warm catchlight, deep iris, visible wet lower line.`,
  };
};
