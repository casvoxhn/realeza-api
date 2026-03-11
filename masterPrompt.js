// masterPrompt.js — V18.2
module.exports = function masterPrompt(numSubjects, styleDescription, framingInstruction) {
  const isMulti = numSubjects > 1;

  const subjectLine = isMulti
    ? "The animals from the photos dominate the composition — large, close, commanding. Each animal's face wears its own natural expression from the photo: if the tongue is out, it is out; if the eyes are soft, they are soft. Each animal looks in a slightly different direction — one toward the viewer, another slightly away. No two animals share the exact same gaze or expression."
    : "The animal from the photo dominates the composition — large, close, commanding. Its face wears the same expression as in the photo: if the tongue is out, it is out; if the eyes are soft and drowsy, they are soft and drowsy. The animal's proportions are faithful to the photo.";

  return [
    "A hyperrealistic oil painting portrait in the tradition of 17th century European court painters. The canvas surface shows fine craquelure — age cracks across the paint layer, warm amber varnish patina, visible brushwork in the fur and fabric.",
    "",
    "The background is near-black in the upper corners with a diagonal warmth — deep umber gathers behind the subject's head, like candlelight in a 17th century studio. Pure atmospheric darkness, no objects, no architecture.",
    "",
    subjectLine,
    "",
    "The fur has three visible layers of light — bright highlights on the outermost hairs, warm reflected light in the mid-tones, deep rich shadow pooling in the recesses. The palette is muted oil pigment: burnt sienna, raw umber, warm ivory, unified by an amber glaze.",
    "",
    "The royal mantle falls behind the shoulders and drapes to each side — the animal's chest is bare and uncovered. Heavy velvet with deep natural folds pulled down by gravity. The ermine border frames the open front with thick voluminous fur.",
    "",
    "In the lower third of the painting, a plump velvet cushion rests on a stone ledge — heavily stuffed, full and round, partially visible beneath the animal.",
    "",
    "The eyes show a wet cornea with one small warm catchlight and visible iris depth.",
    "",
    styleDescription,
    "",
    framingInstruction
  ].join("\n");
};
