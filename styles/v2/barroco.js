// styles/barroco.js — The Classic Portrait
// Chiaroscuro dramático, Rembrandt, fondo muy oscuro, contrastes profundos
// V2.0 — Aesthetic upgrade: desaturated palette, visible brushwork, fur underlayer, craquelure
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
      "Rembrandt chiaroscuro — strong illumination on the left side of the face,",
      "deep shadow consuming 60-70% of the background. Almost no fill light.",
      "One sharp white specular catchlight in each eye — gives life and depth.",
      "The shadow side of the face drops into near-darkness — do not lighten it.",
      "",
      // ── FONDO ──────────────────────────────────────────────────────
      "BACKGROUND:",
      "Deep black vignette at all corners bleeding inward.",
      "Warm amber-ochre glow concentrated behind the head — center-right area only.",
      "Loose visible brushstrokes in the background — NOT a smooth gradient.",
      "Individual paint strokes clearly visible, going in different directions.",
      "Pure dark abstract background exactly like a 17th century Dutch master.",
      "No walls, no objects. 80% of background in near-darkness.",
      "",
      // ── VESTIMENTA ─────────────────────────────────────────────────
      "COSTUME:",
      "Elaborate 17th-century European royal court attire, perfectly tailored to the animal's body.",
      "NECKWEAR: A prominent, stiff white lace jabot or flat collar tightly framing the neck.",
      "The lace must show intricate, physical thread patterns and cast soft shadows on the chest.",
      "MAIN GARMENT: Heavy silk brocade or damask fabric, NOT plain velvet.",
      "The fabric must feature rich floral or geometric patterns woven in aged gold thread.",
      "SHOULDERS: Structured shoulders with ornate gold epaulettes or puffed slashed sleeves.",
      "JEWELRY & ORNAMENTATION: Heavy, physical jewelry resting on the chest.",
      "A large, ornate gold pendant or jeweled brooch (with ruby or sapphire) at the center.",
      "Pearls or gemstones physically sewn into the hem of the garment.",
      "All metallic elements (gold threads, chains, jewels) must be rendered with thick, raised impasto.",
      "The costume must look heavy, expensive, and meticulously constructed.",
      "No generic capes floating behind — the animal is fully DRESSED in the garment.",
      "",
      // ── COJÍN ──────────────────────────────────────────────────────
      "CUSHION:",
      "Large generous gold ochre velvet cushion — heavily stuffed, almost square.",
      "Aged, muted gold tone — not bright yellow, closer to dark antique ochre.",
      "Braided rope trim along all edges. Single large gold tassel at front center.",
      "Stone ledge clearly visible below. Cushion fills the lower third of canvas.",
      "Directional velvet sheen — lighter where light hits, darker in folds.",
      "",
      // ── ESTILO PICTÓRICO ───────────────────────────────────────────
      "PAINTING STYLE:",
      "17th century Baroque oil painting. Style of Rembrandt and Frans Hals.",
      "Muted, heavily desaturated palette throughout — no vivid digital colors.",
      "All reds are deep burgundy-brown. All golds are aged ochre. Never bright.",
      "FUR TECHNIQUE: dark undertone base layer first.",
      "Individual lighter hair strands painted on top with directional brushstrokes",
      "following natural hair growth. Never smooth — always layered and textured.",
      "Visible impasto brushstrokes on background and fabric.",
      "Fine craquelure throughout — most visible in dark areas and deep shadows.",
      "Canvas weave texture visible under paint layers everywhere.",
      "This must look like a physical aged oil painting hanging in a museum.",
      "Zero digital artifacts. Zero smooth AI gradients.",
    ].join("\n")
  };
};
