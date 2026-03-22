// renacimiento.js — V5.0
// V4.9: Solución de Anatomía y Capa
// V5.0: género aplicado — masculine/feminine cambia colores, bordado y accesorios

const { pick } = require('../utils/pick');

const ANATOMIA_CAPA = `The cape envelops the animal's body naturally, responding to gravity and pose.
It drapes heavily over the flanks, completely covering the back and sides before pooling onto the cushion.
CRITICAL: Do NOT leave random legs, hips, or flanks exposed on the sides.
The fabric must follow the natural 3D contours of the body mass underneath without hiding the silhouette.
The cape is a heavy, continuous piece of fabric — no awkward gaps or floating edges.`;

// ── VARIANTES NEUTRAS (sin género) ───────────────────────────────────────────
const VARIANTES = [
  {
    cushion: `
CUSHION — paint with full detail:
A large DARK GREY velvet cushion — deep charcoal tone with subtle warm undertones.
SHAPE: nearly square — width and height almost equal. Not wide and flat.
SIZE: occupies approximately 30-35% of the canvas height. Proportional.
Heavily stuffed and plump. Top surface bulges upward generously in the center.
Sides fall naturally with slight outward curve — contained, not wider than the animal's body.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip, slightly below the cushion surface.
Paws do NOT rest flat on top. They fall over the edge — natural weight.
VELVET TECHNIQUE: long directional brushstrokes following the nap direction.
Top surface: warm charcoal catching the horizon light — subtle warm undertone.
Front face and sides: deep cool shadow, near-black at the bottom edge.
TRIM: Twisted gold rope cord along the bottom. One gold tassel at front center.
BASE: A thin flat stone parapet edge — muted grey, slightly weathered.
Very slim — just a narrow horizontal band beneath the cushion tassel.
Suggests an outdoor balcony or window ledge. Consistent with Flemish portraiture.`,

    costume: `
ERMINE MANTLE:
White fur shoulder mantle, small evenly-distributed black spots.
Drapes over the back and shoulders — animal's chest and paws fully visible.
ERMINE TECHNIQUE: individual short white fur strands painted with fine
directional brushstrokes. Warm ivory in the light, cool grey-white in shadow.
Not smooth — each hair has direction and slight shadow beneath it.
The black spots have soft painted edges — irregular, not stamped.
Cream-gold lace trim along the front border — individual thread detail visible.
Elaborate floral embroidery along the cape edge: rose and vine motifs
in terracotta, cream and gold thread — key feature of this style.
Individual embroidery stitches visible — raised slightly above the fabric.
CAPE: Deep DARK BURGUNDY-BROWN velvet cape — worn BY the animal.
${ANATOMIA_CAPA}
Heavy dramatic fold shadows — real fabric weight pulling downward.
The floral embroidery continues onto the visible cape edge.
TRANSITION: where the ermine meets the animal's fur — paint both materials
blending naturally at the boundary. No hard edge. No paste-on effect.
Double gold chain with a pendant medallion on the animal's chest.`
  },

  {
    cushion: `
CUSHION — paint with full detail:
A large BLUE-GREY velvet cushion — cool slate tone, like storm clouds catching pale light.
SHAPE: nearly square. SIZE: occupies approximately 30-35% of the canvas height. Proportional.
Heavily stuffed and plump. Top surface bulges upward generously in the center.
Sides fall naturally with slight outward curve.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip. They fall over the edge — natural weight.
VELVET TECHNIQUE: long directional brushstrokes following the nap direction.
Top surface: cool slate-blue catching pale diffused light from the stormy sky.
Front face and sides: deep blue-grey shadow, almost slate-black at the bottom.
TRIM: Twisted silver-gold rope cord along the bottom. One gold tassel at front center.
BASE: A thin flat stone parapet edge — muted grey, slightly weathered.
Very slim — just a narrow horizontal band beneath the cushion tassel.
Suggests an outdoor balcony or window ledge.`,

    costume: `
ERMINE MANTLE:
White fur shoulder mantle, small evenly-distributed black spots.
Drapes over the back and shoulders.
ERMINE TECHNIQUE: individual short white fur strands painted with fine
directional brushstrokes. Cool white in light, blue-grey in shadow.
Not smooth — textured, physical, painted hair by hair in the light areas.
The black spots are soft-edged and slightly irregular.
Silver and gold lace trim along the front border — individual threads visible.
Elaborate floral embroidery: botanical motifs in sage green, cream and gold.
Individual stitches slightly raised — tactile and real.
CAPE: Deep FOREST GREEN velvet cape — worn BY the animal.
${ANATOMIA_CAPA}
Heavy dramatic fold shadows — real fabric weight pulling downward.
Green embroidery continues onto the visible cape edge.
TRANSITION: where the ermine meets the animal's fur — blend naturally.
Double gold chain with a pendant on the animal's chest.`
  },

  {
    cushion: `
CUSHION — paint with full detail:
A large SLATE BLUE velvet cushion — deep cool indigo-grey, rich and dignified.
SHAPE: nearly square. SIZE: occupies approximately 30-35% of the canvas height. Proportional.
Heavily stuffed and plump. Top surface bulges upward generously in the center.
Sides fall naturally with slight outward curve.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip. They fall over the edge — natural weight.
VELVET TECHNIQUE: long directional brushstrokes following the nap direction.
Top surface: pale cool indigo-grey catching the diffused sky light.
Front face and sides: deep indigo shadow, near-black at the bottom fold.
TRIM: Twisted gold rope cord along the bottom. One gold tassel at front center.
BASE: A thin flat stone parapet edge — muted grey, slightly weathered.
Very slim — just a narrow horizontal band beneath the cushion tassel.
Suggests an outdoor balcony or window ledge.`,

    costume: `
ERMINE MANTLE:
White fur shoulder mantle, small evenly-distributed black spots.
Drapes over the back and shoulders.
ERMINE TECHNIQUE: individual short white fur strands with fine directional
brushstrokes. Warm ivory where the horizon light catches it, cool in shadow.
Black spots: soft painted edges, slightly irregular in size — never perfect circles.
Gold lace trim along the front border with small floral details — threads visible.
Floral embroidery along the cape: muted roses in dusty rose and gold.
Individual embroidery stitches clearly visible.
CAPE: Deep BURGUNDY velvet cape — worn BY the animal.
${ANATOMIA_CAPA}
Heavy dramatic fold shadows — real fabric weight pulling downward.
TRANSITION: where the ermine meets the animal's fur — blend naturally.
Double gold chain with a pendant on the animal's chest.`
  }
];

// ── VARIANTE MASCULINE ────────────────────────────────────────────────────────
const VARIANTE_MASCULINE = {
  cushion: `
CUSHION — paint with full detail:
A large DEEP NAVY velvet cushion — rich dark blue, commanding and dignified.
SHAPE: nearly square. SIZE: occupies approximately 30-35% of the canvas height. Proportional.
Heavily stuffed and plump. Top surface bulges upward generously in the center.
Sides fall naturally with slight outward curve.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip. They fall over the edge — natural weight.
VELVET TECHNIQUE: long directional brushstrokes following the nap direction.
Top surface: deep navy catching warm horizon light.
Front face and sides: near-black at the bottom edge — dramatic and deep.
TRIM: Thick twisted gold rope cord along the bottom. One large gold tassel at front center.
BASE: A thin flat stone parapet edge — muted grey, slightly weathered.`,

  costume: `
ERMINE MANTLE:
White fur shoulder mantle, small evenly-distributed black spots.
Drapes over the back and shoulders — animal's chest and paws fully visible.
ERMINE TECHNIQUE: individual short white fur strands — warm ivory in light, cool shadow.
Minimal gold trim along the front border — restrained and dignified.
Simple geometric embroidery along the cape edge — gold thread, angular motifs.
CAPE: Deep DARK BURGUNDY velvet cape — worn BY the animal.
${ANATOMIA_CAPA}
Heavy, dramatic fold shadows — strong gravitational pull.
The embroidery is bold and restrained — no floral excess.
TRANSITION: where the ermine meets the animal's fur — blend naturally.
CHAIN: Heavy double gold chain — thick links, substantial weight on the chest.
A bold gemstone pendant — deep sapphire or emerald — strong and commanding.`
};

// ── VARIANTE FEMININE ─────────────────────────────────────────────────────────
const VARIANTE_FEMININE = {
  cushion: `
CUSHION — paint with full detail:
A large DEEP ROSE-GOLD velvet cushion — warm crimson with golden undertones, rich and elegant.
SHAPE: nearly square. SIZE: occupies approximately 30-35% of the canvas height. Proportional.
Heavily stuffed and plump. Top surface bulges upward generously in the center.
Sides fall naturally with slight outward curve.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip. They fall over the edge — natural weight.
VELVET TECHNIQUE: long directional brushstrokes following the nap direction.
Top surface: warm rose-gold catching the horizon light — luminous and soft.
Front face and sides: deep warm shadow — never cold.
TRIM: Delicate twisted gold rope cord along the bottom. One ornate gold tassel at front center.
BASE: A thin flat stone parapet edge — muted warm grey, slightly weathered.`,

  costume: `
ERMINE MANTLE:
White fur shoulder mantle, small evenly-distributed black spots.
Drapes gracefully over the back and shoulders — animal's chest and paws fully visible.
ERMINE TECHNIQUE: individual short white fur strands — warm ivory in light, soft grey in shadow.
Prominent ornate lace trim along the front border — delicate individual thread detail visible.
Elaborate floral embroidery along the cape edge: roses, peonies and vine motifs
in blush pink, cream and gold thread — the defining feature of this style.
Individual embroidery stitches raised and visible — intricate and beautiful.
CAPE: Deep CRIMSON velvet cape — warm ruby red, rich and luminous — worn BY the animal.
${ANATOMIA_CAPA}
Elegant fold shadows — fabric flows gracefully.
The floral embroidery is dense and elaborate along the visible cape edge.
TRANSITION: where the ermine meets the animal's fur — blend naturally and softly.
CHAIN: Delicate single gold chain — elegant and refined on the chest.
A prominent gemstone pendant — ruby or rose tourmaline — warm and beautiful.`
};

module.exports = function renacimientoStyle(numSubjects, isGroup, genero) {

  let variante;
  if (genero === 'masculine') {
    variante = VARIANTE_MASCULINE;
  } else if (genero === 'feminine') {
    variante = VARIANTE_FEMININE;
  } else {
    variante = pick(VARIANTES);
  }

  const background = `
BACKGROUND:
A dramatic Renaissance sky — dark stormy clouds fill the upper portion.
Painted in the style of 16th century Flemish portraiture.
Heavy, turbulent, dark grey-green clouds with deep shadows between the masses.
CLOUD TECHNIQUE: loose expressive brushstrokes — each cloud mass has visible
paint direction. The clouds are NOT smooth. Individual brushmarks visible.
A break of pale golden-cream light on the LEFT horizon — warm and luminous.
The horizon light comes from below-left — it bathes the animal from that direction.
A hint of teal-blue sky visible through the cloud break on the right.
NO solid dark wall. The sky fills the upper 40% of the canvas.`;

  const paintingStyle = `
PAINTING STYLE:
16th century Renaissance Flemish oil painting. Do NOT render this digitally.
Do NOT use smooth AI gradients. Do NOT produce a clean digital illustration.
FUR TECHNIQUE: paint a dark undertone base layer first.
Then add individual lighter fur strands on top with short directional brushstrokes
following the natural direction of hair growth. Fur has depth.
GOLD: all chains and trim are aged warm ochre — not bright yellow. Metallic but muted.
Sfumato blending on face transitions — soft edges between light and shadow.
Visible canvas texture and fine craquelure throughout.
Warm muted palette unified by a thin golden glaze over the whole composition.
Loose expressive brushwork for clouds. Directional strokes on all fabric.
Every element must feel physical, aged, painted — like a Flemish master painting.
Zero digital artifacts. Zero smooth gradients.`;

  return [background, variante.cushion, variante.costume, paintingStyle].join('\n');
};
