// styles/barroco.js — V17.4
const { pick } = require('../utils/pick');
module.exports = function barroco(gender) {
  const robes = [
    "a near-black velvet mantle with white ermine collar — black tail-tips individually painted. Draped dramatically behind and to one side — as if arranged by a studio painter before the sitting. The fabric falls with natural weight away from the animal, not around it. A fine gold chain crosses the chest from one side of the ermine to the other — anchoring the mantle at the front",
    "a dark charcoal velvet mantle with ermine trim. Draped behind and to one side — studio arranged, falling away from the animal with natural gravity. A delicate antique gold chain crosses the chest, fastening both sides of the ermine collar",
    "a near-black velvet mantle with gold brocade detail and ermine collar. Arranged dramatically behind and to one side by a studio hand. A thin gold chain bridges the two ermine lapels across the chest"
  ];
  const robes_m = [
    "a near-black velvet mantle with wide ermine collar — black tail-tips individually painted. Draped dramatically behind and to one side — as if arranged by a studio painter. The heavy velvet falls away from the animal with natural weight. A gold chain crosses the chest from ermine edge to ermine edge — a noble clasp",
    "a dark burgundy velvet mantle with ermine. Arranged behind and to one side by a studio hand — falling away, not wrapping. A gold chain fastens the ermine collar across the chest"
  ];
  const robes_f = [
    "a deep charcoal velvet mantle with ermine collar. Draped behind and to one side — studio arranged, falling with natural weight away from the animal. A single luminous pearl brooch fastens the ermine at the center of the chest",
    "a near-black velvet mantle with ermine trim. Arranged dramatically behind and to one side. A delicate pearl-and-gold brooch anchors the mantle at the chest"
  ];
  const selectedRobe = gender === 'masculine' ? pick(robes_m)
    : gender === 'feminine' ? pick(robes_f)
    : pick(robes);
  return {
    name: "Gran Maestro Oscuro",
    role: `Style: Rembrandt Dutch Golden Age — circa 1660. The animal wears ${selectedRobe}. Background near-black with warm umber undertones — subtle warm brushwork — soft amber halo behind the head. Single candle from upper left — one side fully lit, the other in warm rich shadow. Eyes: one small warm catchlight, deep iris, visible wet lower line.`,
  };
};
