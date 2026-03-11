// masterPrompt.js — V18.4
module.exports = function masterPrompt(numSubjects, styleDescription, framingInstruction) {
  const isMulti = numSubjects > 1;

  const subjectLine = isMulti
    ? "The animals from the photos dominate the composition — all of them large, close, filling the frame together. Each animal's face wears its own natural expression from the photo: if the tongue is out, it is out; if the eyes are soft, they are soft. Each animal looks in a slightly different direction — one toward the viewer, another slightly away. No two animals share the exact same gaze or expression. Every animal is given equal visual weight — none is cropped, minimized or pushed to the edge."
    : "The animal's face fills at least 60% of the frame — extremely close crop, monumental presence. The face dominates everything. The body and cushion are visible in the lower third but the face is the painting. Its expression is faithful to the photo: if the tongue is out, it is out; if the eyes are soft, they are soft. Proportions are faithful to the photo.";

  const poseLine = isMulti
    ? ""
    : "POSE DECISION: If the animal appears to be a large breed (doberman, dalmatian, golden retriever, labrador, german shepherd, husky, or similarly sized) — it lies reclined, chest down, front paws extended forward on the cushion. If the animal is a small breed or a cat — the model chooses whichever pose looks most natural: reclined or sitting upright, based on the animal's proportions and character.";

  const cushionLine = isMulti
    ? "In the lower third of the painting, a single grand velvet cushion rests on a stone ledge — very large, heavily stuffed, almost square in its fullness, wide enough to comfortably hold all the animals. A dense fringe of gold tassels runs along the entire bottom edge of the cushion. One large tassel at the front corner. All animals rest directly on this cushion."
    : "In the lower third of the painting, a large plump velvet cushion rests on a stone ledge — very heavily stuffed, almost square in its fullness. A dense fringe of gold tassels runs along the entire bottom edge. One large tassel at the front corner. Gold embroidered border with floral arabesque pattern along the sides.";

  return [
    "A hyperrealistic oil painting portrait in the tradition of 17th century European court painters. The canvas surface shows fine craquelure — age cracks across the paint layer, warm amber varnish patina, visible brushwork in the fur and fabric.",
    "",
    "The background is pure atmospheric darkness — near-black in the upper corners, deep warm umber behind the subject's head. Absolutely no objects, no furniture, no architecture, no props of any kind in the background. Only darkness and warmth.",
    "",
    subjectLine,
    "",
    poseLine,
    "",
    "The fur has three visible layers of light — bright highlights on the outermost hairs, warm reflected light in the mid-tones, deep rich shadow pooling in the recesses. The palette is muted oil pigment: burnt sienna, raw umber, warm ivory, unified by an amber glaze.",
    "",
    "The royal mantle is draped dramatically behind and to one side — as if arranged by a studio painter before the sitting. The heavy velvet falls away from the animal with natural weight, not around it. The ermine border frames the chest opening. A brooch or clasp fastens the mantle at the center of the chest.",
    "",
    cushionLine,
    "",
    "The eyes show a wet cornea with one small warm catchlight and visible iris depth.",
    "",
    styleDescription,
    "",
    framingInstruction
  ].filter(line => line !== undefined).join("\n");
};
