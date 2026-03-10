// masterPrompt.js — V13.0
// Corto, directo, crítico primero

module.exports = function masterPrompt(numSubjects, styleDescription, framingInstruction) {
  return `17th-century oil portrait painting of the animal in the photo. Hyperrealistic oil on canvas. Aged amber varnish over everything.

CRITICAL — COLOR: All colors are muted, desaturated oil pigments. Orange fur becomes warm burnt sienna and ochre — never saturated orange. Whites are ivory. Blacks are warm umber. The amber varnish ages and unifies every color in the painting.

CRITICAL — BACKGROUND: The background is a pure, soft, out-of-focus wash of warm color — no architecture, no columns, no urns, no trees with defined shape, no recognizable objects. Only blurred warm color and a soft amber glow behind the head.

CRITICAL — CUSHION: The animal rests on a large, opulent velvet cushion. The cushion is big — the animal fits comfortably with space on all sides. The cushion is clearly visible below and around the animal.

${styleDescription}

${framingInstruction}`;
};
