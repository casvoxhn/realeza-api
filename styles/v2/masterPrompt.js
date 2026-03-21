// masterPrompt.js — V18.5 
module.exports = function masterPrompt(numSubjects, styleDescription, framingInstruction) {
  const isMulti = numSubjects > 1;

  const subjectLine = isMulti
    ? "The animals from the photos dominate the composition — all of them large, close, filling the frame together. Each animal's face wears its own natural expression from the photo: if the tongue is out, it is out; if the eyes are soft, they are soft. Each animal looks in a slightly different direction — one toward the viewer, another slightly away. No two animals share the exact same gaze or expression. Every animal is given equal visual weight — none is cropped, minimized or pushed to the edge."
    : "The animal's face fills at least 60% of the frame — extremely close crop, monumental presence. The face dominates everything. The body and cushion are visible in the lower third but the face is the painting. Its expression is faithful to the photo: if the tongue is out, it is out; if the eyes are soft, they are soft. Proportions are faithful to the photo.";

  const poseLine = isMulti
    ? ""
    : "POSE DECISION: If the animal appears to be a large breed (doberman, dalmatian, golden retriever, labrador, german shepherd, husky, or similarly sized) — it lies reclined, chest down, front paws extended forward on the cushion. If the animal is a small breed or a cat — the model chooses whichever pose looks most natural: reclined or sitting upright, based on the animal's proportions and character.";

  const animalCharacterLine = isMulti
    ? "Each animal retains its full species character — a cat looks like a cat: self-possessed, slightly detached, regal on its own terms. A dog looks like a dog: warm, present, loyal. Their nature is not suppressed by the royal setting — it shines through it."
    : "The animal retains its full species character. If it is a cat: self-possessed, slightly detached, observing the world from a position of quiet superiority — regal on its own terms, never performing for the viewer. If it is a dog: warm, present, genuine — its personality fills the frame. The royal setting elevates the animal, it does not replace its nature.";

  const furLine = "The fur is painted with individual directional strokes — each hair has weight and direction, following the natural growth patterns of the animal. Asymmetric, imperfect, alive. Not uniform, not synthetic, not like a stuffed animal or a toy. The coat has depth: some hairs catch the light, others fall into warm shadow. The texture is tactile — you can almost feel it.";

  const poseAsymmetryLine = "The pose has a slight natural asymmetry — nothing is perfectly centered or perfectly symmetrical. One paw is slightly more forward than the other. The head tilts very slightly. Real animals are never perfectly still — there is a lived-in quality to the pose.";

  const eyesLine = "The eyes look genuinely alive — deep iris with visible layers of color, wet cornea reflecting warm light, the lower lid slightly moist. There is intelligence and presence in the gaze. These are not glass eyes — they are the eyes of a real animal that is aware of being watched.";

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
    animalCharacterLine,
    "",
    poseLine,
    "",
    poseAsymmetryLine,
    "",
    furLine,
    "",
    "The royal mantle is draped dramatically behind and to one side — as if arranged by a studio painter before the sitting. The heavy velvet falls away from the animal with natural weight, not around it. The ermine border frames the chest opening. A gold chain crosses from one side of the ermine collar to the other — hanging at the center of the chest with a gemstone pendant.",
    "",
    cushionLine,
    "",
    eyesLine,
    "",
    styleDescription,
    "",
    framingInstruction
  ].filter(line => line !== undefined).join("\n");
};
