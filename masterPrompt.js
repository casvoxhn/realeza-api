// masterPrompt.js — V14.0 FINAL
// Prompt que describe la imagen resultante, no instrucciones

module.exports = function masterPrompt(numSubjects, styleDescription, framingInstruction) {
  return `Using the style reference images provided, recreate the exact same aesthetic: hyperrealistic oil painting, near-black background graduating to warm umber behind the subject, animal lying on a large velvet cushion on a stone ledge, royal robe draped around the body, muted desaturated oil paint colors.

The subject is the animal in the client photo. Paint it in this exact style:

A hyperrealistic oil painting portrait. The animal lies on a large opulent velvet cushion placed on a stone ledge. The cushion is wide and generous — the animal rests comfortably within it with the cushion visible on all sides. A royal robe is draped around the resting body, falling to the sides of the cushion. The animal's chest fur is visible at the front.

The background is near-black at the corners and edges, warming gradually to deep umber directly behind the subject. There is a soft warm amber glow behind the head. The background has zero detail — no architecture, no trees, no objects. Pure atmospheric darkness.

The animal's fur is painted with hyperrealistic individual hair detail. The colors are muted oil pigments — burnt sienna and ochre for orange fur, warm ivory for white areas, deep warm umber for shadows. Never saturated digital colors. Everything is unified by a warm amber varnish.

The eyes are painted with a wet cornea, one small catchlight, visible depth.

${styleDescription}

${framingInstruction}`;
};
