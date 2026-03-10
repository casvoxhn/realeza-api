// masterPrompt.js — V12.0
// Prompt narrativo puro — fórmula Google: [Sujeto] + [Acción] + [Contexto] + [Composición] + [Estilo]
// Sin listas, sin bullets, sin negaciones. Solo descripción fluida.

module.exports = function masterPrompt(numSubjects, styleDescription, framingInstruction) {
  return `Transform the uploaded photo into a museum-quality 17th-century oil portrait painting, rendered in the hyperrealistic style of the great Flemish and Dutch masters — Rembrandt, Rigaud, and Largillière. The animal in the photo is the subject of this portrait. Preserve its exact face, skull shape, eye color, coat color, and every marking with complete fidelity — the identity of this specific animal is sacred and must be recognizable to its owner.

The painting surface is aged linen canvas with visible craquelure in areas of thick paint, a warm amber varnish coating the entire surface, and subtle canvas weave texture visible in the background. The animal's fur is rendered with hyperrealistic precision — individual hairs visible throughout, warm light catching the fur tips to create luminous edges, and coat colors preserved exactly from the source photo. The eyes are the most important element: a wet cornea with one small off-center catchlight, a visible tear line along the lower lid, and genuine depth that draws the viewer in.

The color palette across the entire painting is rich and warm — deep umbers, warm ochres, and earthy tones unified by the amber varnish. Blacks are rendered as deep warm umber, whites as luminous ivory, and all shadows carry warm undertones rather than cool grey. The background graduates from near-black at the corners to a soft warm halo of amber light directly behind the subject's head, creating depth and separating the subject from the darkness.

${styleDescription}

${framingInstruction}`;
};
