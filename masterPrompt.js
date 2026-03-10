// masterPrompt.js — V17.0
// Expresión preservada + craquelado + colores desaturados

module.exports = function masterPrompt(numSubjects, styleDescription, framingInstruction) {
  return `A hyperrealistic oil painting portrait in the style of a 17th–18th century European master. The canvas shows fine craquelure — a network of fine age cracks across the entire painted surface, consistent with an old oil painting on canvas. The paint has the warm amber patina of aged varnish. Visible brushwork in the fur and fabric — this is a painting, not a photograph.

The subject is the animal from the client photo. Preserve its exact facial expression, personality and proportions from the photo — if it has its tongue out, paint it with its tongue out; if it looks drowsy, paint it drowsy; if it looks alert, paint it alert. The character of the animal must be recognizable.

The fur is painted with muted, deeply desaturated oil pigments — burnt sienna and raw umber for warm tones, cool grey-ivory for white areas, deep warm shadow. No saturated digital colors. The palette is earthy, aged, unified by a warm amber-brown varnish glaze.

The background is near-black at the corners, warming gradually to deep umber behind the subject. A soft amber halo glows behind the head. Zero background detail — pure atmospheric darkness with subtle warm brushwork.

The animal rests on a large opulent velvet cushion on a stone ledge. The cushion is thick and heavily stuffed — visibly plump, with its full volume visible on all sides of the animal. A royal robe is draped around the body, falling naturally to the sides.

The eyes have a wet cornea, one small warm catchlight, visible iris depth.

${styleDescription}

${framingInstruction}`;
};
