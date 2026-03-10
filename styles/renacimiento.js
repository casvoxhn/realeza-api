// styles/renacimiento.js — V10.0

const { pick } = require('../utils/pick');

module.exports = function renacimiento(gender) {

  const backdrops = [
    "warm golden garden atmosphere — trees and foliage as pure soft color masses, completely out of focus. A warm amber-gold glow emanates from behind the subject. No sharp details. Pure painterly warmth.",
    "luminous golden haze — soft warm light from behind, garden suggested as blurred color. The background is atmosphere, not a scene.",
    "autumnal garden light — warm ochre and gold tones, trees as soft suggestion. A glowing warm corona behind the subject's head."
  ];

  const wardrobes = [
    "a forest-green velvet cape draped over the shoulders, open at the chest — the animal's natural fur fully visible at the front. Fastened with a simple gold cord tied in a bow.",
    "a deep emerald velvet mantle, chest open — fastened at the throat with a single simple gold clasp. The fabric falls naturally with visible weight.",
    "a dark olive-green velvet cape, open at the front — tied loosely with a braided gold cord. The animal's chest fur is the centerpiece."
  ];

  const wardrobes_masculine = [
    "a deep forest-green velvet cape, chest open — fastened with a simple gold cord. Masculine and commanding.",
    "a hunter-green velvet mantle, open front — single simple clasp at the throat. Natural fur fully visible."
  ];

  const wardrobes_feminine = [
    "a soft sage-green silk cape, chest open — fastened with a delicate gold cord bow. Graceful and elegant.",
    "an emerald velvet mantle, open front — tied with a fine gold ribbon. Feminine and noble."
  ];

  const selectedWardrobe = gender === 'masculine' ? pick(wardrobes_masculine)
    : gender === 'feminine' ? pick(wardrobes_feminine)
    : pick(wardrobes);

  const poses_dog = [
    "the dog is lying down, front paws stretched forward and flat, head up looking at the viewer — relaxed and natural, the way a dog rests on a soft surface",
    "the dog is sitting in a natural low position, front paws down, body compact — calm and dignified"
  ];

  const poses_cat = [
    "the cat is in a natural loaf position — body compact, front paws tucked or resting forward, head up looking at the viewer",
    "the cat is sitting naturally, front paws down, body low and relaxed — the way a cat rests on a cushion"
  ];

  return {
    name: "Jardín Dorado",
    role: `STYLE: Aristocratic Garden Portrait — Gainsborough, 18th century
Mood: Noble, warm, emotionally accessible. The most giftable style.

BACKDROP: ${pick(backdrops)}

WARDROBE: ${selectedWardrobe}
The velvet has real weight and visible pile direction. Chest open — the animal's natural fur is the centerpiece. The garment frames, it does not cover.

LIGHTING: Soft warm morning light from the upper-left. Golden temperature throughout the entire painting. The fur glows. The background receives less light than the subject — the subject radiates warmth.

MOOD: The owner feels their pet belongs in Versailles. Pure emotion.`,
    poses_dog,
    poses_cat
  };
};
