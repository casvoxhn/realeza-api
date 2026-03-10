// styles/renacimiento.js — V11.0

const { pick } = require('../utils/pick');

module.exports = function renacimiento(gender) {

  const backdrops = [
    "warm golden garden atmosphere — trees and foliage as pure soft color masses, completely out of focus. A warm amber-gold glow emanates from behind the subject's head. No sharp details anywhere in the background.",
    "luminous golden haze — garden suggested as blurred warm color, ochre and gold tones. The background is light and air, not a scene.",
    "soft autumnal garden light — warm ochre and amber tones, trees as painterly suggestion. A glowing warm corona behind the subject."
  ];

  const cushions = [
    "a rich forest-green velvet cushion with gold cord trim and tassels — lush and heavy, the animal's weight settles into it. On a warm stone surface.",
    "a deep emerald velvet cushion with gold embroidered border — the animal rests INTO it. Warm stone ledge beneath.",
    "a dark olive velvet cushion with antique gold trim — full and soft, compressed slightly under the subject's weight"
  ];

  const capes = [
    "a forest-green velvet cape with gold embroidered border — draped AROUND the resting body, falling naturally to the sides of the cushion. Chest and front paws free and visible. Fastened at throat with a simple braided gold cord tied in a bow.",
    "a deep emerald velvet mantle — wrapped around the body as it rests, not hanging upright. The velvet has real weight and visible pile. Simple gold cord at throat.",
    "a dark olive-green velvet cape — draped over and around the resting body, pooling softly on the cushion. A fine braided gold cord fastening."
  ];

  const capes_masculine = [
    "a deep forest-green velvet cape, draped around the resting body — heavy, commanding. Gold cord fastening at throat. Chest and paws free.",
    "a hunter-green velvet mantle wrapped around the body — simple gold clasp. Natural fur fully visible at chest."
  ];

  const capes_feminine = [
    "a soft sage-green silk cape, draped elegantly around the resting body — fine gold cord bow at throat. Graceful and luminous.",
    "an emerald velvet mantle around the resting body — delicate gold ribbon fastening. Feminine and noble."
  ];

  const selectedCape = gender === 'masculine' ? pick(capes_masculine)
    : gender === 'feminine' ? pick(capes_feminine)
    : pick(capes);

  const poses_dog = [
    "the dog lies in a sphinx pose on the cushion — chest down, both front paws extended forward and flat on the cushion surface, head raised. The cape drapes around this resting body.",
    "the dog rests on the cushion with front paws forward — body low and natural, head up. The cape wraps around the body as it lies there."
  ];

  const poses_cat = [
    "the cat lies in a sphinx pose on the cushion — chest down, front paws extended forward and flat, head raised looking at the viewer. The cape drapes around the resting body.",
    "the cat rests naturally on the cushion, front paws forward — body settled and low, head up. The velvet cape falls around the body."
  ];

  return {
    name: "Jardín Dorado",
    role: `STYLE: Aristocratic Garden Portrait — Gainsborough, 18th century
Mood: Noble, warm, emotionally accessible. The most giftable style.

BACKDROP: ${pick(backdrops)}

CUSHION: ${pick(cushions)}
The animal rests ON this cushion. Its weight settles into the velvet.

CAPE: ${selectedCape}
CRITICAL: The cape drapes AROUND the resting body — it does not hang from upright shoulders. The velvet falls naturally to the sides of the cushion. The animal's natural chest fur is fully visible at the front.

LIGHTING: Soft warm morning light from upper-left. Golden temperature throughout. The fur glows. A warm corona of light behind the head separates the subject from the background.

MOOD: The owner feels their pet belongs in Versailles. Pure emotion. The most giftable image they've ever seen of their animal.`,
    poses_dog,
    poses_cat
  };
};
