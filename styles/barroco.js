// styles/barroco.js — V11.0

const { pick } = require('../utils/pick');

module.exports = function barroco(gender) {

  const backdrops = [
    "near-black atmospheric void — darkest at the corners, a soft warm umber halo loosely painted behind the subject's head. Rembrandt's studio darkness. The background breathes.",
    "deep warm brown background graduating to near-black at the edges — old varnish and aged oak tones. Pure tonal depth, no detail.",
    "absolute darkness with a warm amber light zone centered on the subject — like Rembrandt's late self-portraits. One source of light, everything else falls away."
  ];

  const cushions = [
    "a dark charcoal velvet cushion with antique gold cord trim — heavy, compressed under the animal's weight. On a stone ledge.",
    "a near-black velvet cushion with warm gold tassel — lush, the animal settles INTO it. Warm stone surface beneath.",
    "a deep umber velvet cushion with dark gold trim — the animal's weight visible in the compression of the pile"
  ];

  const robes = [
    "a near-black velvet cloak with gold embroidered border — draped AROUND the resting body, pooling on the cushion to the sides. White ermine collar with individual black tail-tips framing the chest. A single heavy antique gold chain at the throat.",
    "a dark baroque velvet robe — deep charcoal, draped around the body as it rests. NOT hanging from upright shoulders. Ermine trim at the collar. Heavy antique gold chain.",
    "a dramatic near-black velvet mantle with gold brocade detail — wrapped around the resting body. Ermine collar. One thick gold chain as the single accessory."
  ];

  const robes_masculine = [
    "a black velvet doublet with ermine collar — draped around the resting body. Heavy gold chain of state across the chest. Dutch Golden Age authority.",
    "a dark burgundy velvet robe with ermine trim — wrapped around the body. Single massive gold chain. The garment of a man of power."
  ];

  const robes_feminine = [
    "a black satin baroque gown with pearl-white lace collar — the lace catches the single candle source. Draped around the resting body. A single strand of large pearls.",
    "a deep charcoal velvet robe with ermine collar — draped naturally around the body. Single pearl brooch as the only accessory."
  ];

  const selectedRobe = gender === 'masculine' ? pick(robes_masculine)
    : gender === 'feminine' ? pick(robes_feminine)
    : pick(robes);

  const poses_dog = [
    "the dog lies in a sphinx pose on the cushion — chest down, both front paws extended forward and flat, head raised with psychological intensity. The dark robe drapes around this resting body.",
    "the dog rests on the dark cushion with front paws forward — body settled and low, head up. The robe wraps around the resting body naturally."
  ];

  const poses_cat = [
    "the cat lies in a sphinx pose on the cushion — chest down, front paws extended forward and flat, head raised. Emerging from darkness with quiet intensity. The robe drapes around the resting body.",
    "the cat rests on the cushion with front paws forward — body low and settled, head up. The dark velvet robe falls around the resting body."
  ];

  return {
    name: "Gran Maestro Oscuro",
    role: `STYLE: Dutch Golden Age Portrait — Rembrandt, circa 1660
Mood: Museum-grade. The most artistically serious style.

BACKDROP: ${pick(backdrops)}

CUSHION: ${pick(cushions)}
The animal rests ON this cushion. Its weight compresses the velvet.

ROBE: ${selectedRobe}
CRITICAL: The robe drapes AROUND the resting body — it does not hang from upright shoulders. The velvet falls to the sides of the cushion. The ermine collar frames the chest. The gold chain rests against the chest fur.

LIGHTING: Single directional candle source from upper-left. Classic Rembrandt — one side fully lit, the other in warm rich shadow. One small catchlight in each eye. The gold chain catches the candle first.

MOOD: The owner thinks "this belongs in the Rijksmuseum." Give them Rembrandt.`,
    poses_dog,
    poses_cat
  };
};
