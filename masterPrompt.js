// masterPrompt.js — V18.0
// Animal protagonista absoluto — calidad competidor

module.exports = function masterPrompt(numSubjects, styleDescription, framingInstruction) {
  return [
    "A hyperrealistic oil painting portrait in the tradition of 17th–18th century European court painters. Fine craquelure across the entire painted surface — age cracks consistent with old oil on canvas. Visible brushwork throughout.",
    "",
    "The subject is the animal from the client photo. Preserve its exact facial expression — tongue out, drowsy, alert, whatever its natural character is. The animal fills the frame — close, commanding, the absolute protagonist.",
    "",
    "The fur is painted in three distinct layers: bright direct light on the outermost hairs, warm reflected light in the mid-tones, and deep rich shadow in the recesses. Muted oil pigments — burnt sienna, raw umber, warm ivory. No saturated digital colors. Unified by a warm amber varnish glaze.",
    "",
    "The royal robe falls around the body with real physical weight — heavy velvet with deep natural folds and gravity, not draped flat. The ermine collar sits with volume and texture.",
    "",
    "The cushion occupies only the lower third of the composition — a plump, heavily stuffed velvet base beneath the animal. It supports without competing.",
    "",
    "The background has diagonal atmospheric depth — near-black in the upper corners, warming to deep umber behind the head. Not a flat gradient — layered atmospheric darkness with warm undertones, like a 17th century studio interior.",
    "",
    "The eyes have a wet cornea, one small warm catchlight, visible iris depth.",
    "",
    styleDescription,
    "",
    framingInstruction
  ].join("\n");
};
