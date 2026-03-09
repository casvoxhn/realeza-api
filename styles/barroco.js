// styles/barroco.js — V9.0

const { pick } = require('../utils/pick');

module.exports = function barroco(gender) {

  const wardrobes = [
    "heavy dark velvet cloak — near-black with warm umber undertone, open at front revealing natural chest. A single heavy antique gold medallion on a thick chain.",
    "dark baroque academic robe — near-black velvet with gold threading at collar, open. Heavy antique gold chain.",
    "dramatic dark charcoal velvet cape — clasped at throat with single gold pin, falling open. Heavy gold medallion."
  ];

  const wardrobes_masculine = [
    "black velvet doublet open at the chest — Dutch Golden Age merchant-aristocrat. Heavy gold chain of state across the chest.",
    "dark burgundy velvet coat, collar slightly up — open chest. A single massive gold medallion on a heavy chain."
  ];

  const wardrobes_feminine = [
    "black satin baroque gown with pearl-white lace collar — the lace is the light of the composition. Classic Rembrandt female portrait.",
    "deep charcoal velvet cape with a single strand of large pearls — each pearl luminous against the darkness."
  ];

  const accessories = [
    "a single heavy antique gold medallion on a thick chain — oxidized edges, engraved face, visibly old and important. This is the hero detail.",
    "a heavy antique gold chain — each link catching the candlelight. It has real weight.",
    "a simple antique gold chain with a deep amber gemstone — one object, maximum presence."
  ];

  const accessories_masculine = [
    "a heavy gold chain of state — thick links catching the candle light individually. The chain of a man of power.",
    "a single massive engraved gold medallion — the center of gravity in the entire composition."
  ];

  const accessories_feminine = [
    "a single strand of large pearls — each pearl luminous against the dark wardrobe. Rembrandt female portraiture.",
    "a pearl brooch at the collar — one luminous point of ivory light against the darkness."
  ];

  const backdrops = [
    "near-black atmospheric void with warm umber undertones — a soft warm golden halo painted loosely behind the subject's head. Rembrandt's studio darkness. Infinite. Expensive.",
    "deep warm brown background — the color of aged oak and old varnish. No detail. Pure tonal depth.",
    "absolute darkness with warm light zone on the subject only — like Rembrandt's late self-portraits. The background breathes."
  ];

  const selectedWardrobe = gender === 'masculine' ? pick(wardrobes_masculine)
    : gender === 'feminine' ? pick(wardrobes_feminine)
    : pick(wardrobes);

  const selectedAccessory = gender === 'masculine' ? pick(accessories_masculine)
    : gender === 'feminine' ? pick(accessories_feminine)
    : pick(accessories);

  return {
    name: "Gran Maestro Oscuro",
    role: `**STYLE: Dutch Golden Age Portrait — Rembrandt, circa 1660**
Mood: Museum-grade. The most artistically serious style. Technically magnificent.

BACKDROP: ${pick(backdrops)}

WARDROBE: ${selectedWardrobe}
The velvet is near-black — warm, not flat. Real weight. Fold shadows deep. Light-struck peaks warm.

ACCESSORY: ${selectedAccessory}
The gold medallion or chain is the hero detail — painted with warm light on the raised surfaces, dark in the recesses. Visibly old. Visibly important.

LIGHTING: Single directional light source from the upper-left. Classic Rembrandt — one side of the face fully lit, the other in warm rich shadow. A single small catchlight in the eye.

MOOD: The owner thinks "this belongs in the Rijksmuseum." Give them Rembrandt.`,
    poses_dog: [
      "seated 3/4 position emerging from darkness — face and chest illuminated, body in warm shadow. Mouth closed. The pose of a dog painted by a master.",
      "seated full-face forward — direct gaze into the light. Mouth closed. Maximum psychological presence."
    ],
    poses_cat: [
      "seated with feline stillness, half-turned toward the light — one eye in full light, one in shadow. Mouth closed. Deeply psychological.",
      "direct frontal seated — face fully to viewer, eyes carrying maximum intensity. Mouth closed. The gaze of a creature that understands everything."
    ]
  };
};
