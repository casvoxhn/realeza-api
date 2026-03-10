// styles/barroco.js — V12.0 — Narrativo puro

const { pick } = require('../utils/pick');

module.exports = function barroco(gender) {

  const robes = [
    "a near-black velvet cloak with white ermine collar — individual black tail-tips on the ermine — draped around the resting body and falling to both sides of the cushion, chest fur visible, a single heavy antique gold chain resting against the chest",
    "a dark baroque velvet robe in deep charcoal — ermine trim at the collar — wrapped naturally around the resting body, a thick antique gold chain as the single accessory",
    "a dramatic near-black velvet mantle with gold brocade detail and ermine collar — draped around the resting body, one heavy antique gold chain catching the candlelight"
  ];

  const robes_masculine = [
    "a black velvet doublet with ermine collar — draped around the resting body — a heavy gold chain of state across the chest, each link catching the candlelight individually",
    "a dark burgundy velvet robe with ermine trim — wrapped around the resting body — a single massive antique gold chain as the center of visual gravity"
  ];

  const robes_feminine = [
    "a black satin baroque gown with pearl-white lace collar — the lace luminous against the darkness — draped around the resting body, a single strand of large pearls",
    "a deep charcoal velvet robe with ermine collar — draped naturally around the body — a single pearl brooch as the only accessory, one point of ivory light"
  ];

  const cushions = [
    "a dark charcoal velvet cushion with antique gold cord trim — heavy and compressed under the animal's weight — on a stone ledge",
    "a near-black velvet cushion with warm gold tassel — the animal settles into it — warm stone surface beneath",
    "a deep umber velvet cushion with dark gold trim — the pile compressed under the animal's body"
  ];

  const selectedRobe = gender === 'masculine' ? pick(robes_masculine)
    : gender === 'feminine' ? pick(robes_feminine)
    : pick(robes);

  const poses_dog = [
    "The dog lies in a sphinx pose on the cushion — chest down, both front paws extended forward and flat, head raised looking at the viewer with psychological intensity. The dark robe drapes around this resting body.",
    "The dog rests on the cushion with front paws forward, body settled low, head up. The dark velvet robe wraps naturally around the resting body."
  ];

  const poses_cat = [
    "The cat lies in a sphinx pose on the cushion — chest down, front paws extended forward and flat, head raised with quiet intensity. The dark robe drapes around this resting body.",
    "The cat rests naturally on the cushion with front paws forward, body low and compact, head up looking at the viewer. The dark velvet falls around the resting body."
  ];

  return {
    name: "Gran Maestro Oscuro",
    role: `The portrait depicts the animal in the tradition of Rembrandt's Dutch Golden Age — circa 1660, museum-grade, the most artistically serious style. The animal wears ${selectedRobe}. It rests upon ${pick(cushions)}. The background is near-black atmospheric darkness with warm umber undertones — not flat black but breathing darkness with subtle warm brushwork giving it depth — and a soft warm amber halo loosely painted behind the subject's head. The lighting is a single candle source from the upper left — one side of the face fully lit in warm amber, the other in rich warm shadow. The gold chain or accessory catches the candle first — warm light on raised surfaces, oxidized darkness in the recesses — visibly old and important. The eyes emerge from shadow with maximum intensity — one small warm catchlight, deep complex iris, visible wet lower line — this animal appears to have an inner life. The owner must think: this belongs in the Rijksmuseum.`,
    poses_dog,
    poses_cat
  };
};
