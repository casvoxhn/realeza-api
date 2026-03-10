// styles/realeza.js — V12.0 — Narrativo puro

const { pick } = require('../utils/pick');

module.exports = function realeza(gender) {

  const mantles = [
    "a crimson velvet coronation mantle with white ermine border — individual black tail-tips painted precisely — draped around the animal's resting body and pooling on the cushion to both sides, chest fur fully visible, fastened at the throat with a single gold clasp",
    "a deep burgundy velvet royal mantle with thick ermine trim — gold embroidery along the border edge — wrapped naturally around the resting body, falling to the sides of the cushion, a simple gold pin at the throat",
    "a royal blue velvet coronation robe with ermine collar — the ermine tail-tips individually rendered — draped over and around the resting body, tied with a single gold cord"
  ];

  const mantles_masculine = [
    "a king's crimson velvet coronation mantle with wide ermine border — each black tail-tip painted individually — draped around the resting body and pooling on the cushion, chest fur exposed, a heavy gold clasp at the throat",
    "a deep burgundy royal mantle with ermine trim and gold embroidery — wrapped naturally around the resting body, simple gold fastening at the throat"
  ];

  const mantles_feminine = [
    "a queen's crimson velvet mantle with delicate ermine trim — draped elegantly around the resting body, chest fur visible, a fine gold clasp at the throat",
    "a royal blue velvet court mantle with ermine collar — wrapped softly around the resting body, single gold cord fastening"
  ];

  const crowns = [
    "a heavy imperial crown resting on the animal's head with real weight, pressing into the fur — a large central ruby glowing with deep internal light, brightening to a single brilliant surface highlight — ermine base band, the crown casting a shadow on the fur beneath",
    "a substantial royal crown with a large central emerald — deep green layers with one precise specular highlight — sitting with genuine mass on the head, pressing the fur down",
    "a golden state crown with a large central sapphire — deep blue with a single point of pure light at the surface — heavy, resting with gravity on the head"
  ];

  const crowns_masculine = [
    "a king's imperial crown — tall, gold, with a large central ruby glowing from deep within — ermine base band pressing into the fur with undeniable weight",
    "a warrior-king's crown — gold with a central sapphire, deep blue brightening to a single specular highlight — sitting heavily on the head"
  ];

  const crowns_feminine = [
    "an elegant queen's crown — lower profile gold filigree with a central diamond as a point of pure cold light — graceful authority pressing gently into the fur",
    "a queen's tiara-crown — gold with graduated pearls and diamonds, each pearl luminous — resting delicately on the head"
  ];

  const cushions = [
    "a large gold velvet cushion with visible pile compression under the animal's weight, gold tassel at the front corner, resting on a stone ledge",
    "a deep crimson velvet cushion — lush and heavy, the animal's weight compresses it — gold cord trim, stone ledge beneath",
    "a royal burgundy velvet cushion with gold embroidered trim and corner tassels — full and soft under the animal's body"
  ];

  const selectedMantle = gender === 'masculine' ? pick(mantles_masculine)
    : gender === 'feminine' ? pick(mantles_feminine)
    : pick(mantles);

  const selectedCrown = gender === 'masculine' ? pick(crowns_masculine)
    : gender === 'feminine' ? pick(crowns_feminine)
    : pick(crowns);

  const poses_dog = [
    "The dog lies in a sphinx pose on the cushion — chest down, both front paws extended forward and flat on the cushion surface, head raised and looking at the viewer with regal authority. The mantle drapes naturally around this resting body.",
    "The dog rests on the cushion with front paws forward, body settled low and natural, head raised. The royal mantle wraps around the body as it lies there."
  ];

  const poses_cat = [
    "The cat lies in a sphinx pose on the cushion — chest down, front paws extended forward and flat, head raised with absolute feline stillness. The mantle drapes around this resting body.",
    "The cat rests naturally on the cushion with front paws forward, body low and compact, head up looking at the viewer. The royal mantle falls around the resting body."
  ];

  return {
    name: "Realeza Imperial",
    role: `The portrait depicts the animal as imperial royalty — absolute power, intimidating opulence, in the manner of Rigaud's portrait of Louis XIV. The animal wears ${selectedMantle}. On its head sits ${selectedCrown}. The animal rests upon ${pick(cushions)}. The velvet pile direction is visible throughout — lighter at the peaks, deeper in compressed valleys. The ermine tail-tips are painted individually with precision. The lighting is a powerful single source from the upper right at warm 3200K — the crown catches the light first, the eyes catch it second, and deep warm shadows fall away from the light source. The owner must look at this and think: my pet, the king.`,
    poses_dog,
    poses_cat
  };
};
