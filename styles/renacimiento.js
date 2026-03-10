// styles/renacimiento.js — V12.0 — Narrativo puro

const { pick } = require('../utils/pick');

module.exports = function renacimiento(gender) {

  const capes = [
    "a forest-green velvet cape draped around the animal's resting body and falling to the sides of the cushion — chest fur fully visible — fastened at the throat with a braided gold cord tied in a bow",
    "a deep emerald velvet mantle wrapped naturally around the resting body — the velvet pile visible and catching the warm light — a simple gold cord fastening at the throat",
    "a dark olive-green velvet cape draped over and around the resting body, pooling softly on the cushion — tied with a fine braided gold cord"
  ];

  const capes_masculine = [
    "a deep forest-green velvet cape draped around the resting body — heavy and commanding — gold cord fastening at throat, chest fur fully visible",
    "a hunter-green velvet mantle wrapped naturally around the body — simple gold clasp, natural fur exposed at the chest"
  ];

  const capes_feminine = [
    "a soft sage-green silk cape draped elegantly around the resting body — fine gold cord bow at throat — graceful and luminous",
    "an emerald velvet mantle draped around the body — delicate gold ribbon fastening — feminine and noble"
  ];

  const cushions = [
    "a rich forest-green velvet cushion with gold cord trim and corner tassels — lush and heavy, the animal's weight settling into it — on a warm stone ledge",
    "a deep emerald velvet cushion with gold embroidered border — compressed softly under the animal's body — warm stone surface beneath",
    "a dark olive velvet cushion with antique gold trim — full and soft, the pile compressed under the subject's weight"
  ];

  const backdrops = [
    "The background is a warm golden garden atmosphere — trees and foliage rendered as pure soft color masses completely out of focus, the entire background dissolving into warm amber and gold tones with zero sharp detail. A glowing warm corona of light emanates from behind the subject's head.",
    "The background is luminous golden haze — a garden suggested purely as blurred warm color, ochre and amber tones bleeding into each other. The background is light and air, not a scene.",
    "The background is soft autumnal garden light — warm ochre, amber, and gold tones, trees as impressionistic color masses. A warm radiant light behind the head separates the subject from the background."
  ];

  const selectedCape = gender === 'masculine' ? pick(capes_masculine)
    : gender === 'feminine' ? pick(capes_feminine)
    : pick(capes);

  const poses_dog = [
    "The dog lies in a sphinx pose on the cushion — chest down, both front paws extended forward and flat on the cushion surface, head raised and looking at the viewer. The cape drapes naturally around this resting body.",
    "The dog rests on the cushion with front paws forward, body settled low and natural, head raised. The green velvet cape wraps around the body as it lies there."
  ];

  const poses_cat = [
    "The cat lies in a sphinx pose on the cushion — chest down, front paws extended forward and flat, head raised looking at the viewer. The cape drapes around this resting body.",
    "The cat rests naturally on the cushion with front paws forward, body low and compact, head up. The velvet cape falls naturally around the resting body."
  ];

  return {
    name: "Jardín Dorado",
    role: `The portrait depicts the animal as an 18th-century aristocrat in the warm tradition of Gainsborough — noble, emotionally accessible, the most beloved style. The animal wears ${selectedCape}. It rests upon ${pick(cushions)}. ${pick(backdrops)} The lighting is soft warm morning light from the upper left — golden temperature throughout the entire painting, the fur catching the light at its tips and glowing warmly. The shadow side of the face is warm and luminous, never dead. The owner must feel their pet belongs in Versailles.`,
    poses_dog,
    poses_cat
  };
};
