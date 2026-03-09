// styles/renacimiento.js — V9.0

const { pick } = require('../utils/pick');

module.exports = function renacimiento(gender) {

  const wardrobes = [
    "rich forest-green velvet cape draped open across the shoulders — fully revealing the natural chest and fur. A single antique gold medallion.",
    "deep emerald velvet mantle open at front — natural chest visible. Antique gold chain border at the edge.",
    "dark olive-green brocade cape worn open — chest fully visible. Subtle gold embroidery at collar. The animal's fur is the centerpiece."
  ];

  const wardrobes_masculine = [
    "deep forest-green velvet doublet open at the chest — natural fur visible underneath. Heavy gold medallion.",
    "hunter-green brocade coat, open front — gold details. Masculine, commanding."
  ];

  const wardrobes_feminine = [
    "soft sage-green silk cape trimmed with delicate gold embroidery — open at front. Single pearl-and-gold brooch. Elegant.",
    "emerald velvet mantle with champagne gold trim — feminine and noble, open front."
  ];

  const accessories = [
    "a delicate antique gold chain with a single medallion — warm, slightly oxidized. Light and elegant.",
    "a small gold leaf brooch as the single accent — catching morning light",
    "a thin gold cord collar — minimal, refined"
  ];

  const accessories_masculine = [
    "a heavy antique gold medallion — center of visual gravity. Old. Important.",
    "a gold pendant on leather cord — masculine and grounded"
  ];

  const accessories_feminine = [
    "a delicate pearl-and-gold collar piece — light, elegant, feminine",
    "a small floral gold coronet if anatomy allows — refined, not costume"
  ];

  const backdrops = [
    "warm atmospheric garden — entirely soft focus golden-green haze. Ancient oaks as pure color mass. Morning light. No sharp detail. Pure Gainsborough atmosphere.",
    "luminous garden terrace — warm ivory stone columns as atmospheric suggestion in deep bokeh. Dappled golden light. Zero sharp background detail.",
    "romantic manor garden — soft golden backlight creating a glowing corona behind the subject. Background is light and air, not trees and architecture."
  ];

  const selectedWardrobe = gender === 'masculine' ? pick(wardrobes_masculine)
    : gender === 'feminine' ? pick(wardrobes_feminine)
    : pick(wardrobes);

  const selectedAccessory = gender === 'masculine' ? pick(accessories_masculine)
    : gender === 'feminine' ? pick(accessories_feminine)
    : pick(accessories);

  return {
    name: "Jardín Dorado",
    role: `**STYLE: Aristocratic Garden Portrait — Gainsborough, 18th century**
Mood: Noble, warm, emotionally accessible. The most giftable style.

BACKDROP: ${pick(backdrops)}
The background is pure warm atmosphere — soft, golden, out of focus. It exists only to make the subject glow.

WARDROBE: ${selectedWardrobe}
The velvet has real weight. Pile direction visible. The animal's natural fur is the centerpiece — the cape frames it, not covers it.

ACCESSORY: ${selectedAccessory}

LIGHTING: Soft directional morning light from the upper-left. Warm golden temperature throughout. The fur glows. The eyes sparkle with a single small warm catchlight. The shadow side of the face is warm and luminous, never dead.

MOOD: The owner feels their pet belongs in Versailles. This style converts on pure emotion — it feels like the most beautiful gift imaginable.`,
    poses_dog: [
      "seated with noble posture — head high, chest open and forward. Mouth closed. Alert and dignified.",
      "3/4 seated — body angled, face toward viewer. Mouth closed. The classic aristocratic portrait pose."
    ],
    poses_cat: [
      "seated upright with perfect natural posture — tail wrapped around front paws, gaze direct. Mouth closed. Naturally regal.",
      "3/4 seated, body turned slightly, head toward viewer. Mouth closed. Quietly commanding."
    ]
  };
};
