// styles/realeza.js — V10.0

const { pick } = require('../utils/pick');

module.exports = function realeza(gender) {

  const backdrops = [
    "near-black atmospheric darkness with warm umber undertones — a soft warm golden halo behind the subject's head. Infinite, expensive darkness. No competing detail.",
    "deep warm brown void — the color of aged varnish. A barely visible warm light far behind. Pure tonal atmosphere.",
    "dark throne room atmosphere — columns and drapes barely suggested as dark shapes. Everything in shadow except the subject."
  ];

  const wardrobes = [
    "a crimson velvet coronation mantle, open at the chest — ermine lining with individual black tail-tips. Fastened at the throat with a simple gold clasp. Natural fur fully visible at the front.",
    "a deep burgundy velvet royal mantle with white ermine trim, chest open — fastened with a single gold cord. The ermine tail-tips painted individually.",
    "a royal blue velvet coronation robe with thick ermine collar, open at the front — simple gold fastening at throat."
  ];

  const wardrobes_masculine = [
    "a king's crimson velvet coronation mantle, wide open at the chest — ermine with individual black tail-tips, fastened with a simple heavy gold clasp. Masculine and absolute.",
    "a deep burgundy royal mantle, chest open — ermine border, single gold cord fastening. The garment of a ruler."
  ];

  const wardrobes_feminine = [
    "a queen's crimson velvet mantle with ermine trim, open and elegant — fastened with a delicate gold clasp. Graceful and regal.",
    "a royal blue velvet court mantle with ermine collar, chest open — simple gold cord fastening. Feminine and powerful."
  ];

  const crowns = [
    "a heavy imperial crown sitting naturally on the head, pressing into the fur with real weight — gold with a large central gemstone glowing with internal light. It casts a shadow on the fur beneath.",
    "a substantial royal crown with a large central ruby — glowing from within, deep crimson at the core brightening to a single brilliant highlight. Real weight, presses into the fur.",
    "a golden state crown with a large central emerald — deep green with a single surface highlight. Sits INTO the head with gravity."
  ];

  const crowns_masculine = [
    "a king's imperial crown — tall, heavy gold with a large central ruby glowing from within. Ermine band. Presses into the fur with real mass.",
    "a warrior-king crown — gold with central sapphire, deep blue with bright surface highlight. Earned, not given."
  ];

  const crowns_feminine = [
    "an elegant queen's crown — lower profile, gold filigree with central diamond as a point of pure light. Graceful authority.",
    "a queen's tiara-crown — gold with graduated pearls and diamonds, each pearl luminous. Museum-authentic."
  ];

  const selectedWardrobe = gender === 'masculine' ? pick(wardrobes_masculine)
    : gender === 'feminine' ? pick(wardrobes_feminine)
    : pick(wardrobes);

  const selectedCrown = gender === 'masculine' ? pick(crowns_masculine)
    : gender === 'feminine' ? pick(crowns_feminine)
    : pick(crowns);

  const poses_dog = [
    "the dog is lying down, front paws stretched forward and flat on the cushion, head up and regal — natural sphinx-like resting pose",
    "the dog is sitting in a natural low position, front paws down on the cushion, body compact — calm and commanding"
  ];

  const poses_cat = [
    "the cat is in a natural loaf position on the cushion — body compact, front paws resting forward, head up and imperious",
    "the cat is sitting naturally, front paws down, body low — the way a cat rests with quiet authority"
  ];

  return {
    name: "Rey / Reina Absoluto",
    role: `STYLE: Imperial Coronation Portrait — 17th century court painting
Mood: Absolute power. Intimidating opulence. Rigaud's Louis XIV — but it is their pet.

BACKDROP: ${pick(backdrops)}

WARDROBE: ${selectedWardrobe}
The velvet pile is visible. The ermine tail-tips are painted individually. Chest open — natural fur fully visible. Simple fastening only — no hanging medallions.

CROWN: ${selectedCrown}
The crown presses INTO the fur with real weight and casts a shadow beneath it. The central gemstone glows with internal light.

LIGHTING: Powerful directional light from the upper-right. Warm 3200K throughout. The crown catches the light first. Deep warm shadows — never flat or dead.

MOOD: The owner thinks "my pet, the king." The crown glows. The ermine is touchable. This belongs in a palace.`,
    poses_dog,
    poses_cat
  };
};
