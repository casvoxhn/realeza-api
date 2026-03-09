// styles/realeza.js — V9.0

const { pick } = require('../utils/pick');

module.exports = function realeza(gender) {

  const wardrobes = [
    "crimson velvet coronation mantle open at the front — ermine lining with individual black tail-tips, heavy gold chain across the chest",
    "deep burgundy velvet royal mantle with white ermine trim — open front revealing natural chest, antique gold medallion",
    "royal blue velvet coronation robe with thick ermine collar — open, gold brocade detail"
  ];

  const wardrobes_masculine = [
    "king's crimson velvet coronation mantle — wide open at front, ermine with individual black tail-tips, heavy gold chain of state across the chest. Masculine, absolute.",
    "deep burgundy royal mantle — ermine border, open front, heavy gold medallion. The garment of a ruler."
  ];

  const wardrobes_feminine = [
    "queen's crimson velvet mantle with ermine trim — open and elegant, a single gold and gem pendant",
    "royal blue velvet court mantle with ermine collar — feminine and regal, pearl and gold accessory"
  ];

  const crowns = [
    "a heavy imperial crown sitting naturally on the head, pressing into the fur — gold with a large central gemstone glowing with internal light, ermine base band with individual black tail-tips",
    "a substantial royal crown with large central ruby — the ruby appears lit from within, deep crimson glaze at the core brightening to a single brilliant highlight. Gold with smaller gem accents. Real weight.",
    "a golden state crown with large central emerald — deep green with a single surface highlight. Sits INTO the head with gravity."
  ];

  const crowns_masculine = [
    "a king's imperial crown — tall, heavy, gold with a large central ruby glowing from within. Ermine band. Unambiguously a ruler's crown. It presses into the fur.",
    "a warrior-king crown — gold with central sapphire, deep blue layers with bright surface highlight. Earned, not given."
  ];

  const crowns_feminine = [
    "an elegant queen's crown — lower profile, gold filigree with central diamond as a point of pure light. Graceful authority.",
    "a queen's tiara-crown — gold with graduated pearls and diamonds. Each pearl luminous. Museum-authentic."
  ];

  const backdrops = [
    "near-black atmospheric background with warm umber undertones and a soft golden halo behind the subject — infinite, expensive darkness",
    "deep warm brown atmospheric void — the color of old varnish and aged oak. A barely visible warm light far behind.",
    "dark throne room atmosphere — columns and drapes barely suggested in deep shadow. Pure atmosphere, no competing detail."
  ];

  const selectedWardrobe = gender === 'masculine' ? pick(wardrobes_masculine)
    : gender === 'feminine' ? pick(wardrobes_feminine)
    : pick(wardrobes);

  const selectedCrown = gender === 'masculine' ? pick(crowns_masculine)
    : gender === 'feminine' ? pick(crowns_feminine)
    : pick(crowns);

  return {
    name: "Rey / Reina Absoluto",
    role: `**STYLE: Imperial Coronation Portrait — 17th century court painting**
Mood: Absolute power. Intimidating opulence. Rigaud's Louis XIV — but it is their pet.

BACKDROP: ${pick(backdrops)}

WARDROBE: ${selectedWardrobe}
The fabric has real weight. The velvet pile is visible. The ermine tail-tips are painted individually.

CROWN: ${selectedCrown}
The crown sits INTO the head with real mass. It casts a shadow on the fur beneath it. The central gemstone glows with internal light — deep color at the core, bright highlight at the surface.

MOOD: The owner sees this and thinks "my pet, the king." The crown glows. The ermine is touchable. This painting belongs in a palace.`,
    poses_dog: [
      "seated upright with commanding authority — chest forward, head high, crown centered and level. Mouth closed. The pose of a dog that has always been royalty.",
      "3/4 seated — body angled slightly, face toward viewer with regal directness. Crown level. Mouth closed.",
    ],
    poses_cat: [
      "seated perfectly upright — tail wrapped around front paws, gaze direct and imperious. Crown centered, pressing naturally into fur. Mouth closed.",
      "elevated seated — looking slightly down at the viewer with benevolent authority. Crown within frame. Mouth closed.",
    ]
  };
};
