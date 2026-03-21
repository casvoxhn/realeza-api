// realeza.js — V4.9 (Masterpiece Visual Upgrade)
// V4.9: Aesthetic elevation - Baroque painting techniques, true oil texture, museum aging

const { pick } = require('../utils/pick');

const VARIANTES = [

  // ── VARIANTE 1: Carmesí + Bordado dorado ──────────────────────────────────
  {
    cushion: [
      "CUSHION — paint with museum-grade physical realism:",
      "A large DEEP CRIMSON velvet cushion — heavily stuffed, conveying real mass and weight.",
      "SHAPE: nearly square — width and height almost equal. Not wide and flat.",
      "SIZE: occupies approximately 30-35% of the canvas height. Proportional.",
      "Top surface bulges dramatically upward in the center under high tension.",
      "The animal's front paws hang over the FRONT EDGE — natural gravity pulling the fabric down.",
      "VELVET TECHNIQUE: Painted using translucent crimson glazes over a dark umber underpainting.",
      "Masterful light absorption — the nap exhibits a rich 'bloom' where warm light grazes the surface.",
      "Deep shadows are executed in thin, near-black layers. No smooth digital gradients.",
      "TRIM: Thick twisted gold rope cord at the bottom, painted with heavy impasto for the highlights.",
      "One large ornate gold tassel at front center — individual threads articulated with fine brushwork.",
      "BASE: A low, muted silk cloth draped beneath the cushion.",
      "Painted with subtle scumbling to contrast the rich velvet above it.",
    ].join("\n"),

    costume: [
      "ERMINE MANTLE:",
      "Thick voluminous white fur mantle with small, asymmetrical black spots.",
      "Drapes with immense physical weight over the back and shoulders.",
      "ERMINE TECHNIQUE: Baroque fur rendering. A dark base with individual flyaway hairs",
      "pulled over the surface using a fine rigger brush. Edges dissolve into the background using subtle sfumato.",
      "The fur catches warm, golden oil-lamp light on top, with cool, thin blue-grey glazes in the deep folds.",
      "Rich pink and gold lace trim — rendered with trompe l'oeil precision.",
      "CAPE: Deep BURGUNDY-CRIMSON velvet cape draped naturally over the animal's back.",
      "Heavy, dramatic folds painted with distinct, confident brushstrokes. No blending.",
      "GOLD ARABESQUE EMBROIDERY: Scrolling botanical motifs.",
      "Executed in thick, raised impasto using lead-tin yellow tones to catch specular highlights, mimicking real metallic thread.",
      "TRANSITION: The boundary between ermine and natural fur is softened with sfumato. No harsh digital cut-outs.",
      "Gold MEDALLION pendant on the chest. The green gemstone features subsurface scattering and a single, sharp impasto highlight.",
    ].join("\n"),
  },

  // ── VARIANTE 2: Borgoña profundo + Bordado dorado ─────────────────────────
  {
    cushion: [
      "CUSHION — paint with museum-grade physical realism:",
      "A large DEEP BURGUNDY velvet cushion — dark wine red, almost pure asphaltum black in the deepest crevices.",
      "SHAPE: nearly square. Massively stuffed, conveying real mass and weight.",
      "SIZE: occupies approximately 30-35% of the canvas height. Proportional.",
      "The animal's front paws hang naturally over the FRONT EDGE.",
      "VELVET TECHNIQUE: Painted using translucent burgundy glazes over a dark underpainting.",
      "Masterful light absorption — the nap exhibits a rich 'bloom' where warm light grazes the surface.",
      "Shadows are deep, optical voids. No smooth digital gradients.",
      "TRIM: Thick twisted gold rope cord, painted with heavy impasto for the highlights.",
      "One prominent ornate gold tassel at front center.",
      "BASE: A low, muted silk cloth draped beneath the cushion.",
      "Painted with subtle scumbling, blending into the dark foreground.",
    ].join("\n"),

    costume: [
      "ERMINE MANTLE:",
      "Thick voluminous white fur mantle with small, asymmetrical black spots.",
      "Drapes with immense physical weight over the back and shoulders.",
      "ERMINE TECHNIQUE: Baroque fur rendering. A dark base with individual flyaway hairs",
      "pulled over the surface. Edges dissolve naturally using subtle sfumato.",
      "Warm ivory impasto in the highlights, thin translucent cool glazes in the shadows.",
      "Ornate gold lace trim — rendered with trompe l'oeil precision.",
      "CAPE: Deep BURGUNDY velvet cape draped naturally over the animal's back.",
      "Heavy, dramatic folds painted with distinct, confident brushstrokes.",
      "GOLD ARABESQUE EMBROIDERY: Matching motifs.",
      "Executed in thick, raised impasto to catch specular highlights, mimicking real metallic thread.",
      "TRANSITION: The boundary between ermine and natural fur is softened. No harsh digital cut-outs.",
      "Gold MEDALLION pendant. The sapphire blue gemstone features inner luminosity and a sharp, wet-in-wet highlight.",
    ].join("\n"),
  },

  // ── VARIANTE 3: Azul real + Bordado dorado ────────────────────────────────
  {
    cushion: [
      "CUSHION — paint with museum-grade physical realism:",
      "A large ROYAL BLUE velvet cushion — deep, rich cobalt-navy, regal and commanding.",
      "SHAPE: nearly square. Massively stuffed, conveying real mass and weight.",
      "SIZE: occupies approximately 30-35% of the canvas height. Proportional.",
      "The animal's front paws hang naturally over the FRONT EDGE.",
      "VELVET TECHNIQUE: Painted using layers of translucent lapis lazuli and ultramarine glazes.",
      "Masterful light absorption — the nap exhibits a vibrant 'bloom' where warm light strikes it.",
      "Sides fall into profound, near-black shadow. No smooth digital gradients.",
      "TRIM: Thick twisted gold rope cord, painted with heavy impasto for the highlights.",
      "One extremely elaborate gold tassel at front center.",
      "BASE: A low, muted silk cloth draped beneath the cushion.",
      "Barely visible, painted with thin, dark washes.",
    ].join("\n"),

    costume: [
      "ERMINE MANTLE:",
      "Thick voluminous white fur mantle with small, asymmetrical black spots.",
      "Drapes with immense physical weight over the back and shoulders.",
      "ERMINE TECHNIQUE: Baroque fur rendering. A dark base with individual flyaway hairs",
      "catching the light. Edges dissolve into the background using subtle sfumato.",
      "The white fur reflects the surrounding warmth in the light, and cool blue tones in the shadow.",
      "The most ornate gold lace trim, individual threads painted with meticulous attention.",
      "CAPE: ROYAL BLUE velvet cape draped naturally over the animal's back.",
      "Heavy, dramatic folds painted with distinct, confident brushstrokes.",
      "GOLD EMBROIDERY: Fleurs-de-lis and star motifs along the cape edge.",
      "Executed in thick, raised impasto using warm ochre and yellow to mimic real metallic thread.",
      "TRANSITION: The boundary between ermine and natural fur is softened with sfumato.",
      "Gold MEDALLION pendant. The ruby red gemstone features deep optical clarity and a stark impasto highlight.",
    ].join("\n"),
  },

];

module.exports = function realezaStyle(numSubjects, isGroup, genero) {

  const variante = pick(VARIANTES);

  const background = [
    "BACKGROUND:",
    "Masterful tenebrism. Deep, suffocating darkness achieved through multiple translucent layers of asphaltum and burnt umber.",
    "Almost pure black on the left and upper corners. No flat digital black; it has atmospheric depth.",
    "A very subtle, warm umber-ochre gradient drifting toward the right side only —",
    "like the faintest candlelight scattering through a dust-filled room far behind.",
    "NOT bright. NOT a halo. Just a whisper of warmth built up with dry scumbling.",
    "NO curtains. NO walls. NO objects. Pure atmospheric void.",
  ].join("\n");

  const paintingStyle = [
    "PAINTING STYLE & MEDIUM:",
    "17th-century Baroque masterwork. Absolute museum-quality oil painting on hand-woven linen canvas.",
    "Zero digital artifacts. Zero smooth gradients. Eradicate all modern digital illustration styles.",
    "Visible canvas warp and weft texture beneath the paint layers.",
    "Authentic interplay of techniques: Thick, raised impasto brushstrokes for the brightest highlights (gold, jewels, white fur tips),",
    "contrasted with extremely thin, translucent optical glazes for the deep shadows.",
    "Visible brushwork and pentimenti — the painting feels physically handmade by a master.",
    "Lighting is dramatic chiaroscuro from the upper left, casting deep, solid shadows.",
    "The entire piece is unified by a subtle, aged damar varnish finish — giving the painting",
    "that characteristic warm, golden-brown museum glow and fine, authentic craquelure in the thickest dark areas.",
    "The final image must look indistinguishable from a high-resolution macro photograph of a 400-year-old masterpiece hanging in the Louvre."
  ].join("\n");

  return [background, variante.cushion, variante.costume, paintingStyle].join("\n\n");
};
