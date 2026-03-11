// styles/barroco.js — V17.3
const { pick } = require('../utils/pick');
module.exports = function barroco(gender) {
  const robes = [
    "a near-black velvet mantle with white ermine collar — black tail-tips individually painted — falling behind the shoulders and draping to each side, chest and belly completely bare. A visible gold chain with a gemstone pendant",
    "a dark charcoal velvet mantle with ermine trim — falling behind the shoulders to each side, chest fully uncovered. A visible gold chain with a gemstone pendant",
    "a near-black velvet mantle with gold brocade detail and ermine collar — falling behind the shoulders, chest bare. A visible gold chain with a gemstone pendant"
  ];
  const robes_m = [
    "a near-black velvet mantle with wide ermine collar — black tail-tips individually painted — falling behind the shoulders and draping to each side, chest completely bare. A visible gold chain with a gemstone pendant",
    "a dark burgundy velvet mantle with ermine — falling behind the shoulders to the sides, chest bare. A visible gold chain with a gemstone pendant"
  ];
  const robes_f = [
    "a deep charcoal velvet mantle with ermine collar — falling behind the shoulders and draping to each side, chest and belly bare. A single strand of luminous pearls",
    "a near-black velvet mantle with ermine trim — falling behind the shoulders to the sides, chest bare. A delicate pearl brooch at the shoulder"
  ];
  const cushions = [
    "a large opulent deep burgundy velvet cushion — full and generously inflated — gold cord trim, corner tassels, and gold embroidered border with floral arabesque pattern, on a stone ledge",
    "a large rich crimson velvet cushion — inflated and luxurious — gold embroidery with arabesque pattern and tassels, on a stone ledge",
    "a large deep teal velvet cushion — full and generous — gold embroidered floral border and tassels, on a marble ledge"
  ];
  const selectedRobe = gender === 'masculine' ? pick(robes_m)
    : gender === 'feminine' ? pick(robes_f)
    : pick(robes);
  return {
    name: "Gran Maestro Oscuro",
    role: `Style: Rembrandt Dutch Golden Age — circa 1660. The animal wears ${selectedRobe}. It rests on ${pick(cushions)}. Background near-black with warm umber undertones — not flat, subtle warm brushwork — soft amber halo behind the head. Single candle from upper left — one side fully lit, the other in warm rich shadow. Eyes: one small warm catchlight, deep iris, visible wet lower line.`,
  };
};
