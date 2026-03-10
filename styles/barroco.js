// styles/barroco.js — V10.0

const { pick } = require('../utils/pick');

module.exports = function barroco(gender) {

  const backdrops = [
    "near-black atmospheric void with warm umber undertones — a soft warm golden halo loosely painted behind the subject's head. Rembrandt's studio darkness. Infinite and expensive.",
    "deep warm brown background — aged oak and old varnish. No detail. Pure tonal depth. A barely visible warm light far behind.",
    "absolute darkness with a single warm light zone on the subject — like Rembrandt's late self-portraits. The darkness breathes."
  ];

  const wardrobes = [
    "a heavy dark velvet cloak — near-black with warm umber undertone, open at the chest revealing natural fur. Fastened at the throat with a single antique gold pin.",
    "a dark baroque velvet robe — near-black, open at front. Simple gold cord fastening at the throat. Natural chest fur fully visible.",
    "a dramatic charcoal velvet cape, open at the chest — tied with a single dark cord. The animal's fur is the light against the darkness."
  ];

  const wardrobes_masculine = [
    "a black velvet doublet open at the chest — Dutch Golden Age. Simple gold clasp at throat. Natural fur visible. Dark, serious, expensive.",
    "a dark burgundy velvet coat, open front — single cord fastening. Masculine and brooding."
  ];

  const wardrobes_feminine = [
    "a black satin baroque gown with pearl-white lace collar — the lace is the light of the composition. Open at chest. Classic Rembrandt.",
    "a deep charcoal velvet cape, chest open — fastened with a simple pearl brooch. One luminous point against the darkness."
  ];

  const accessories = [
    "a single heavy antique gold chain as the only accessory — each link catching the candlelight. Visibly old and important.",
    "a simple antique gold chain with a dark amber stone — one object, maximum presence.",
    "a single thick antique gold chain — the hero detail of the composition."
  ];

  const accessories_masculine = [
    "a heavy gold chain of state — thick links, each catching candlelight individually. The chain of a man of power.",
    "a single massive antique gold chain — center of gravity in the composition."
  ];

  const accessories_feminine = [
    "a single strand of large pearls — each luminous against the dark wardrobe. Classic Rembrandt.",
    "a simple pearl brooch at the collar — one point of ivory light against the darkness."
  ];

  const selectedWardrobe = gender === 'masculine' ? pick(wardrobes_masculine)
    : gender === 'feminine' ? pick(wardrobes_feminine)
    : pick(wardrobes);

  const selectedAccessory = gender === 'masculine' ? pick(accessories_masculine)
    : gender === 'feminine' ? pick(accessories_feminine)
    : pick(accessories);

  const poses_dog = [
    "the dog is lying down, front paws stretched forward, head up looking at the viewer — emerging from darkness, natural and dignified",
    "the dog is sitting in a natural low position, front paws down, body compact — direct gaze, maximum psychological presence"
  ];

  const poses_cat = [
    "the cat is in a natural loaf position — body compact, front paws resting forward, head up with characteristic feline stillness",
    "the cat is sitting naturally, front paws down, body low — looking at the viewer with quiet intensity"
  ];

  return {
    name: "Gran Maestro Oscuro",
    role: `STYLE: Dutch Golden Age Portrait — Rembrandt, circa 1660
Mood: Museum-grade. The most artistically serious style.

BACKDROP: ${pick(backdrops)}

WARDROBE: ${selectedWardrobe}
Near-black velvet with real weight. Chest open — natural fur visible. Simple fastening only.

ACCESSORY: ${selectedAccessory}
The hero detail — painted with warm light on raised surfaces, dark in recesses. Visibly old. Visibly important.

LIGHTING: Single directional light from the upper-left. Classic Rembrandt — one side fully lit, the other in warm rich shadow. One small catchlight in the eye.

MOOD: The owner thinks "this belongs in the Rijksmuseum."`,
    poses_dog,
    poses_cat
  };
};
