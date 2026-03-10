// styles/renacimiento.js — V14.0

const { pick } = require('../utils/pick');

module.exports = function renacimiento(gender) {

  const cushions = [
    "large forest-green velvet cushion with gold embroidered trim and corner tassels on a stone ledge",
    "large deep emerald velvet cushion with gold cord border on a warm stone ledge",
    "wide dark olive velvet cushion with antique gold trim and tassels on a stone surface"
  ];

  const capes = [
    "a forest-green velvet cape with gold embroidered border draped around the resting body, falling to both sides of the cushion, chest fur exposed, fastened with a braided gold cord",
    "a deep emerald velvet mantle draped around the resting body with visible pile and gold cord at throat",
    "a dark olive-green velvet cape draped around the body pooling on the cushion, tied with fine gold cord"
  ];

  const poses_dog = [
    "The dog lies in sphinx pose — chest resting on the cushion, both front paws extended flat forward on the cushion surface, head raised looking at the viewer.",
    "The dog rests on the cushion chest-down, front paws stretched forward and flat, head up."
  ];

  const poses_cat = [
    "The cat lies in sphinx pose — chest resting on the cushion, front paws extended flat forward, head raised looking at the viewer.",
    "The cat rests chest-down on the cushion, front paws stretched forward and flat, head up."
  ];

  return {
    name: "Jardín Dorado",
    role: `Style: Gainsborough warm aristocratic portrait. The animal wears ${pick(capes)}. It rests on a ${pick(cushions)}. Background is warm golden blur — soft amber and ochre out of focus, no sharp details anywhere. Warm golden light from upper left. The fur glows warmly at the tips.`,
    poses_dog,
    poses_cat
  };
};
