// styles/barroco.js — V17.2 (mantle fix)
const { pick } = require('../utils/pick');
module.exports = function barroco(gender) {
  const robes = [
    "a near-black velvet cloak with white ermine collar — black tail-tips individually painted — falling behind the shoulders and draping to each side, chest and belly completely bare. A single thin elegant antique gold chain with fine links",
    "a dark charcoal velvet mantle with ermine trim — falling behind the shoulders to each side, chest fully uncovered. One delicate antique gold chain",
    "a near-black velvet mantle with gold brocade detail and ermine collar — falling behind the shoulders, draping to the sides, chest bare. Fine antique gold chain"
  ];
  const robes_m = [
    "a near-black velvet cloak with wide ermine collar — black tail-tips individually painted — falling behind the shoulders and draping to each side, chest and belly completely bare. A single thin elegant antique gold chain",
    "a dark burgundy velvet mantle with ermine — falling behind the shoulders to the sides, chest bare. One delicate antique gold chain"
  ];
  const robes_f = [
    "a black satin mantle with pearl-white lace collar — falling behind the shoulders, draping to each side, chest uncovered. A single strand of luminous pearls",
    "a deep charcoal velvet mantle with ermine — falling behind the shoulders to the sides, chest bare. A single delicate pearl brooch at the shoulder"
  ];
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
