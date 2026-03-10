// styles/realeza.js — V11.0

const { pick } = require('../utils/pick');

module.exports = function realeza(gender) {

  const backdrops = [
    "near-black atmospheric background — darkest at the four corners, warming to deep umber behind the subject. A soft warm halo of golden light behind the head. No detail, no architecture. Pure tonal atmosphere.",
    "deep warm brown void graduating to near-black at edges — a barely visible warm amber light zone directly behind the subject's head. Classic court portrait darkness.",
    "dark throne room atmosphere — columns barely suggested as near-black shapes at the sides. Center warms behind the subject. The darkness has depth and warmth."
  ];

  const cushions = [
    "a large, opulent gold velvet cushion with visible pile compression under the animal's weight — gold tassel at the front corner, placed on a stone ledge",
    "a deep crimson velvet cushion, lush and heavy — the animal's weight compresses it slightly. Gold cord trim at the edges. Stone ledge beneath.",
    "a royal burgundy velvet cushion with gold embroidered trim and tassels — full, heavy, the animal rests INTO it"
  ];

  const mantles = [
    "a crimson velvet coronation mantle with white ermine border — the ermine has individual black tail-tips painted precisely. The mantle DRAPES AROUND the resting body and pools on the cushion to the sides. The chest and front paws are free. A single simple gold clasp at the throat.",
    "a deep burgundy velvet royal mantle with thick ermine collar and border — draped over and around the resting body, falling to the sides of the cushion. Gold embroidery visible on the border. Simple gold pin at throat.",
    "a royal blue velvet mantle with white ermine trim — wrapped around the body as it rests, not hanging upright. Ermine tail-tips individually visible. Gold cord at throat."
  ];

  const mantles_masculine = [
    "a king's crimson velvet coronation mantle with ermine border — individual black tail-tips. Draped AROUND the resting body, pooling on the cushion to both sides. Chest and paws free. Heavy gold clasp at throat.",
    "a deep burgundy royal mantle with wide ermine border — draped naturally around a resting body. Gold embroidery on the border edge. Single gold clasp."
  ];

  const mantles_feminine = [
    "a queen's crimson velvet mantle with fine ermine trim — draped elegantly around the resting body. Delicate gold clasp at throat. Graceful.",
    "a royal blue velvet court mantle with ermine collar — wrapped softly around the body as it rests on the cushion. Simple gold pin."
  ];

  const crowns = [
    "a heavy imperial crown sitting naturally on top of the head, pressing slightly into the fur — large central ruby glowing with internal light, deep red at the core brightening to a single brilliant highlight. Gold with ermine base band.",
    "a substantial royal crown with a large central emerald — deep green with one surface highlight. Sits with real mass and gravity on the head, casting a shadow beneath it.",
    "a golden state crown with large central sapphire — deep blue with a point of pure light at the surface. Heavy. Pressing into the fur with real weight."
  ];

  const crowns_masculine = [
    "a king's imperial crown — tall, heavy, gold. Large central ruby glowing from deep within. Ermine band at base. Presses into the fur with undeniable weight.",
    "a warrior-king's crown — gold with a central sapphire, layers of deep blue brightening to a single specular highlight. Earned authority."
  ];

  const crowns_feminine = [
    "an elegant queen's crown — lower profile, gold filigree with a central diamond as a point of pure cold light. Grace and authority.",
    "a queen's tiara-crown — gold with graduated pearls and diamonds, each pearl with its own internal luminosity."
  ];

  const selectedMantle = gender === 'masculine' ? pick(mantles_masculine)
    : gender === 'feminine' ? pick(mantles_feminine)
    : pick(mantles);

  const selectedCrown = gender === 'masculine' ? pick(crowns_masculine)
    : gender === 'feminine' ? pick(crowns_feminine)
    : pick(crowns);

  const poses_dog = [
    "the dog lies in a sphinx pose on the cushion — chest down, both front paws extended forward and flat on the cushion surface, head raised and looking at the viewer. The body fills the lower two-thirds of the frame. The mantle drapes AROUND this resting body.",
    "the dog rests on the cushion with front paws forward — body low and settled, head up. The robe wraps around the body naturally as it lies there."
  ];

  const poses_cat = [
    "the cat lies in a sphinx pose on the cushion — chest down, front paws extended forward and flat, head raised with regal stillness. The mantle drapes around the resting body, pooling on the cushion.",
    "the cat rests on the cushion with front paws extended — body settled and low, head up looking directly at the viewer. Ermine and velvet wrap around the body."
  ];

  return {
    name: "Rey / Reina Absoluto",
    role: `STYLE: Imperial Coronation Portrait — 17th century court painting
Mood: Absolute power. Rigaud's Louis XIV — but it is their pet.

BACKDROP: ${pick(backdrops)}

CUSHION: ${pick(cushions)}
The animal rests ON this cushion. Its weight compresses the velvet.

MANTLE: ${selectedMantle}
CRITICAL: The mantle drapes AROUND the resting body — it does not hang from upright shoulders. The velvet pools to the sides on the cushion. The ermine border frames the chest. Individual ermine tail-tips painted precisely.

CROWN: ${selectedCrown}
Real weight. Presses into the fur. Casts a shadow on the fur beneath it. The central gemstone has internal luminosity — deep color at core, single bright specular highlight.

LIGHTING: Powerful single source from upper-right. Warm 3200K. The crown catches the light first. The eyes catch it second. Deep warm shadows — never flat.

MOOD: The owner sees this and thinks "my pet, the king." Frame-worthy. Gift-worthy.`,
    poses_dog,
    poses_cat
  };
};
