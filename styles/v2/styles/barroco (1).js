// styles/barroco.js — The Classic Portrait
// Chiaroscuro dramático, Rembrandt, fondo muy oscuro, contrastes profundos

module.exports = function barrocoStyle(gender) {
  return {
    role: [

      // ── IDENTIDAD — lo más importante ──────────────────────────────
      "IDENTITY LOCK — HIGHEST PRIORITY:",
      "Extract and transfer the exact face from the photo — same markings,",
      "fur color, eye shape, eye color, expression and head angle.",
      "Preserve the animal's natural personality exactly as it is.",
      "The owner must recognize their pet immediately.",
      "Remove any collar, leash or accessory — replace with royal costume only.",
      "",

      // ── ILUMINACIÓN ────────────────────────────────────────────────
      "LIGHTING:",
      "Single warm amber-gold light source from upper left at 45 degrees.",
      "Rembrandt chiaroscuro — bright illumination on the left side of the face,",
      "deep shadow gradually falling on the right side.",
      "One sharp white specular catchlight in each eye — gives life and depth.",
      "The warm coat shows ivory tones on the lit side, cool grey-blue in shadow.",
      "",

      // ── FONDO ──────────────────────────────────────────────────────
      "BACKGROUND:",
      "Near-black dark charcoal grey — nearly black on left corner.",
      "Very subtle warm ochre gradient only directly behind the head.",
      "Barely visible — almost imperceptible. No walls, no objects.",
      "Pure dark abstract background exactly like a 17th century Dutch master.",
      "",

      // ── VESTIMENTA ─────────────────────────────────────────────────
      "COSTUME:",
      "White ermine mantle with small evenly-distributed black spots —",
      "classic royal ermine pattern. Drapes from behind the shoulders,",
      "the ermine border frames the chest opening naturally.",
      "Delicate pink and gold lace trim along the ermine border — clearly visible.",
      "Deep crimson red velvet cape — sits behind the animal at shoulder level,",
      "visible on both sides. NOT falling from above, NOT dominating any corner.",
      "Deep dramatic fold shadows on the crimson velvet.",
      "Double gold chain resting at chest center against the animal's own fur.",
      "",

      // ── COJÍN ──────────────────────────────────────────────────────
      "CUSHION:",
      "Large generous gold ochre velvet cushion — heavily stuffed, almost square.",
      "Braided rope trim along all edges. Single large gold tassel at front center.",
      "Stone ledge clearly visible below. Cushion fills the lower third of canvas.",
      "Directional velvet sheen — lighter where light hits, darker in folds.",
      "",

      // ── ESTILO PICTÓRICO ───────────────────────────────────────────
      "PAINTING STYLE:",
      "17th century Baroque oil painting. Style of Rembrandt and Frans Hals.",
      "Visible impasto brushstrokes on background and fabric.",
      "Rich deep muted color palette — crimson, gold, ivory, deep ochre.",
      "Photorealistic animal face with individual fur strands.",
      "Canvas craquelure texture visible. Museum quality.",
      "Deep luminous velvet shadows. Zero digital artifacts.",

    ].join("\n")
  };
};
