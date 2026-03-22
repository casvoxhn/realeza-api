// realeza.js — V5.3
// V5.2: capa cubre ambos flancos simétricamente
// V5.3: género aplicado — masculine/feminine cambia colores, bordado y accesorios

const { pick } = require('../utils/pick');

const ANATOMIA_CAPA = `The cape envelops the animal's body naturally, responding to gravity and pose.
It drapes heavily over the flanks, completely covering the back and sides before pooling onto the cushion.
CRITICAL: Do NOT leave random legs, hips, or flanks exposed on the sides.
The fabric must follow the natural 3D contours of the body mass underneath without hiding the silhouette.
The cape is a heavy, continuous piece of fabric — no awkward gaps or floating edges.`;

// ── VARIANTES NEUTRAS ─────────────────────────────────────────────────────────
const VARIANTES = [

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
      ANATOMIA_CAPA,
      "Heavy, dramatic folds painted with distinct, confident brushstrokes. No blending.",
      "GOLD ARABESQUE EMBROIDERY: Scrolling botanical motifs.",
      "Executed in thick, raised impasto using lead-tin yellow tones to catch specular highlights, mimicking real metallic thread.",
      "TRANSITION: The boundary between ermine and natural fur is softened with sfumato. No harsh digital cut-outs.",
      "Gold MEDALLION pendant on the chest. The green gemstone features subsurface scattering and a single, sharp impasto highlight.",
    ].join("\n"),
  },

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
      ANATOMIA_CAPA,
      "Heavy, dramatic folds painted with distinct, confident brushstrokes.",
      "GOLD ARABESQUE EMBROIDERY: Matching motifs.",
      "Executed in thick, raised impasto to catch specular highlights, mimicking real metallic thread.",
      "TRANSITION: The boundary between ermine and natural fur is softened. No harsh digital cut-outs.",
      "Gold MEDALLION pendant. The sapphire blue gemstone features inner luminosity and a sharp, wet-in-wet highlight.",
    ].join("\n"),
  },

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
      ANATOMIA_CAPA,
      "Heavy, dramatic folds painted with distinct, confident brushstrokes.",
      "GOLD EMBROIDERY: Fleurs-de-lis and star motifs along the cape edge.",
      "Executed in thick, raised impasto using warm ochre and yellow to mimic real metallic thread.",
      "TRANSITION: The boundary between ermine and natural fur is softened with sfumato.",
      "Gold MEDALLION pendant. The ruby red gemstone features deep optical clarity and a stark impasto highlight.",
    ].join("\n"),
  },

];

// ── VARIANTE MASCULINE ────────────────────────────────────────────────────────
const VARIANTE_MASCULINE = {
  cushion: [
    "CUSHION — paint with museum-grade physical realism:",
    "A large ROYAL BLUE velvet cushion — deep cobalt-navy, powerful and commanding.",
    "SHAPE: nearly square. Massively stuffed, conveying real mass and weight.",
    "SIZE: occupies approximately 30-35% of the canvas height. Proportional.",
    "The animal's front paws hang naturally over the FRONT EDGE.",
    "VELVET TECHNIQUE: Painted using layers of translucent lapis lazuli and ultramarine glazes.",
    "Masterful light absorption — deep navy absorbing light with restrained authority.",
    "Sides fall into profound, near-black shadow. No smooth digital gradients.",
    "TRIM: Thick twisted gold rope cord, painted with heavy impasto for the highlights.",
    "One large commanding gold tassel at front center.",
    "BASE: A low, dark stone surface grounding the cushion — austere and dignified.",
  ].join("\n"),

  costume: [
    "ERMINE MANTLE:",
    "Thick white fur mantle with small, evenly-distributed black spots.",
    "Drapes with immense physical weight over the back and shoulders.",
    "ERMINE TECHNIQUE: Baroque fur rendering — dark base, individual flyaway white hairs on top.",
    "Minimal gold trim along the front border — restrained and dignified.",
    "CAPE: Deep DARK BURGUNDY velvet cape — worn BY the animal.",
    ANATOMIA_CAPA,
    "Heavy, dramatic fold shadows — strong gravitational pull, fabric weight fully rendered.",
    "HERALDIC EMBROIDERY: Bold fleurs-de-lis and geometric motifs along the cape edge.",
    "Executed in thick raised impasto — gold and dark ochre, angular and commanding.",
    "TRANSITION: The boundary between ermine and natural fur is softened with sfumato.",
    "CHAIN: Heavy double gold chain — thick substantial links resting on the chest.",
    "A bold sapphire or emerald pendant — deep, commanding, cold and powerful.",
  ].join("\n"),
};

// ── VARIANTE FEMININE ─────────────────────────────────────────────────────────
const VARIANTE_FEMININE = {
  cushion: [
    "CUSHION — paint with museum-grade physical realism:",
    "A large DEEP WARM CRIMSON velvet cushion — rich ruby red with golden undertones, luminous and elegant.",
    "SHAPE: nearly square. Massively stuffed, conveying real mass and weight.",
    "SIZE: occupies approximately 30-35% of the canvas height. Proportional.",
    "The animal's front paws hang naturally over the FRONT EDGE.",
    "VELVET TECHNIQUE: Painted using translucent warm crimson and alizarin glazes.",
    "Masterful light absorption — the nap exhibits a rich warm 'bloom' where golden light grazes the surface.",
    "Shadows are deep and warm — never cold. No smooth digital gradients.",
    "TRIM: Delicate twisted gold rope cord, painted with fine impasto highlights.",
    "One ornate gold tassel at front center — individual threads articulated with fine brushwork.",
    "BASE: A low, warm muted silk cloth draped beneath the cushion.",
  ].join("\n"),

  costume: [
    "ERMINE MANTLE:",
    "Thick voluminous white fur mantle with small, asymmetrical black spots.",
    "Drapes gracefully with physical weight over the back and shoulders.",
    "ERMINE TECHNIQUE: Baroque fur rendering — warm ivory impasto highlights,",
    "cool translucent glazes in the deep folds. Individual hairs catch warm golden light.",
    "Prominent ornate gold lace trim along the front border — delicate individual thread detail visible.",
    "CAPE: Deep BURGUNDY-CRIMSON velvet cape — warm ruby red — worn BY the animal.",
    ANATOMIA_CAPA,
    "Elegant dramatic folds — fabric flows gracefully with real gravitational weight.",
    "GOLD ARABESQUE EMBROIDERY: Elaborate floral motifs — roses, vines and scrolling botanical forms.",
    "Executed in thick raised impasto — warm gold and cream thread, intricate and beautiful.",
    "TRANSITION: The boundary between ermine and natural fur is softened gently with sfumato.",
    "CHAIN: Delicate single gold chain — refined and elegant on the chest.",
    "A prominent ruby or warm topaz pendant — glowing, warm and luminous.",
  ].join("\n"),
};

module.exports = function realezaStyle(numSubjects, isGroup, genero) {

  let variante;
  if (genero === 'masculine') {
    variante = VARIANTE_MASCULINE;
  } else if (genero === 'feminine') {
    variante = VARIANTE_FEMININE;
  } else {
    variante = pick(VARIANTES);
  }

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
    "The final image must look indistinguishable from a high-resolution macro photograph of a 400-year-old masterpiece hanging in the Louvre.",
  ].join("\n");

  return [background, variante.cushion, variante.costume, paintingStyle].join("\n\n");
};
