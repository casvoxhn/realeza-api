// masterPrompt.js — V17.1
// V14 base + expresión preservada + craquelado quirúrgico

module.exports = function masterPrompt(numSubjects, styleDescription, framingInstruction) {
  return `A hyperrealistic oil painting portrait. Fine craquelure visible across the painted surface — age cracks consistent with old oil on canvas. Visible brushwork in fur and fabric.

The subject is the animal in the client photo. Preserve its exact facial expression from the photo — if it has its tongue out, paint it with its tongue out; if it looks drowsy, paint it drowsy; if it looks alert, paint it alert.

The background is near-black at the corners and edges, warming gradually to deep umber directly behind the subject. There is a soft warm amber glow behind the head. The background has zero detail — no architecture, no trees, no objects. Pure atmospheric darkness.

The animal's fur is painted with hyperrealistic individual hair detail. The colors are muted oil pigments — burnt sienna and ochre for orange fur, warm ivory for white areas, deep warm umber for shadows. Never saturated digital colors. Everything is unified by a warm amber varnish.

The animal rests on a large opulent velvet cushion on a stone ledge — thick and heavily stuffed, visibly plump, cushion visible on all sides. A royal robe draped around the body, falling naturally to the sides.

The eyes are painted with a wet cornea, one small catchlight, visible depth.

${styleDescription}

${framingInstruction}`;
};
