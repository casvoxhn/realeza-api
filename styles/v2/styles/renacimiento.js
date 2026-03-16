// renacimiento.js — V4.4
// V4.4: ledge cambiado a antepecho delgado de piedra — exterior flamenco

const { pick } = require('../utils/pick');

const VARIANTES = [

  // ── VARIANTE 1: Gris oscuro + Borgoña-café ────────────────────────────────
  {
    cushion: `
CUSHION — paint with full detail:
A large DARK GREY velvet cushion — deep charcoal tone with subtle warm undertones.
SHAPE: nearly square — width and height almost equal. Not wide and flat.
SIZE: occupies approximately 30-35% of the canvas height. Proportional — the animal is the protagonist.
Heavily stuffed and plump. Top surface bulges upward generously in the center.
Sides fall naturally with slight outward curve — contained, not wider than the animal's body.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip, slightly below the cushion surface.
Paws do NOT rest flat on top. They fall over the edge — natural weight.
VELVET TECHNIQUE: long directional brushstrokes following the nap direction.
Top surface: warm charcoal catching the horizon light — subtle warm undertone.
Front face and sides: deep cool shadow, near-black at the bottom edge.
The light-to-shadow graduation is dramatic — the fabric has real physical depth.
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
CAPE: Deep DARK BURGUNDY-BROWN velvet — darker and richer than crimson.
Falls heavily behind and to one side. NOT in front or sides.
CAPE PHYSICS: heavy fabric with real gravitational weight. The folds collapse
unevenly — wide folds next to narrow ones, asymmetric and natural.
The deepest folds are near-black. Only the very edge of each fold catches light.
The floral embroidery continues onto the visible cape edge.
TRANSITION: where the ermine meets the animal's fur — paint both materials
blending naturally at the boundary. No hard edge. No paste-on effect.
Double gold chain with a pendant medallion on the animal's chest.`,
  },

  // ── VARIANTE 2: Gris azulado + Verde bosque ───────────────────────────────
  {
    cushion: `
CUSHION — paint with full detail:
A large BLUE-GREY velvet cushion — cool slate tone, like storm clouds catching pale light.
SHAPE: nearly square — width and height almost equal. Not wide and flat.
SIZE: occupies approximately 30-35% of the canvas height. Proportional — the animal is the protagonist.
Heavily stuffed and plump. Top surface bulges upward generously in the center.
Sides fall naturally with slight outward curve — contained, not wider than the animal's body.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip, slightly below the cushion surface.
Paws do NOT rest flat on top. They fall over the edge — natural weight.
VELVET TECHNIQUE: long directional brushstrokes following the nap direction.
Top surface: cool slate-blue catching pale diffused light from the stormy sky.
Front face and sides: deep blue-grey shadow, almost slate-black at the bottom.
The cool tone of the cushion echoes the stormy sky above — unified palette.
TRIM: Twisted silver-gold rope cord along the bottom. One gold tassel at front center.
BASE: A thin flat stone parapet edge — muted grey, slightly weathered.
Very slim — just a narrow horizontal band beneath the cushion tassel.
Suggests an outdoor balcony or window ledge. Consistent with Flemish portraiture.`,

    costume: `
ERMINE MANTLE:
White fur shoulder mantle, small evenly-distributed black spots.
Drapes over the back and shoulders — animal's chest and paws fully visible.
ERMINE TECHNIQUE: individual short white fur strands painted with fine
directional brushstrokes. Cool white in light, blue-grey in shadow.
Not smooth — textured, physical, painted hair by hair in the light areas.
The black spots are soft-edged and slightly irregular — naturally painted.
Silver and gold lace trim along the front border — individual threads visible.
Elaborate floral embroidery: botanical motifs in sage green, cream and gold.
Individual stitches slightly raised — tactile and real.
CAPE: Deep FOREST GREEN velvet — rich, dark, like deep moss in shadow.
Falls behind and to one side only. NOT in front or sides.
CAPE PHYSICS: the forest green velvet is dense and heavy — it falls in
long irregular folds. Wide folds collapse next to narrow ones.
The deepest shadow in the folds is near-black-green. Only fold edges catch light.
Green embroidery continues onto the visible cape edge.
TRANSITION: where the ermine meets the animal's fur — paint both materials
blending naturally at the boundary. No hard edge. No paste-on effect.
Double gold chain with a pendant on the animal's chest.`,
  },

  // ── VARIANTE 3: Azul pizarra + Borgoña ────────────────────────────────────
  {
    cushion: `
CUSHION — paint with full detail:
A large SLATE BLUE velvet cushion — deep cool indigo-grey, rich and dignified.
SHAPE: nearly square — width and height almost equal. Not wide and flat.
SIZE: occupies approximately 30-35% of the canvas height. Proportional — the animal is the protagonist.
Heavily stuffed and plump. Top surface bulges upward generously in the center.
Sides fall naturally with slight outward curve — contained, not wider than the animal's body.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip, slightly below the cushion surface.
Paws do NOT rest flat on top. They fall over the edge — natural weight.
VELVET TECHNIQUE: long directional brushstrokes following the nap direction.
Top surface: pale cool indigo-grey catching the diffused sky light.
Front face and sides: deep indigo shadow, near-black at the bottom fold.
The nap direction is clearly visible — strokes reveal the fabric structure.
TRIM: Twisted gold rope cord along the bottom. One gold tassel at front center.
BASE: A thin flat stone parapet edge — muted grey, slightly weathered.
Very slim — just a narrow horizontal band beneath the cushion tassel.
Suggests an outdoor balcony or window ledge. Consistent with Flemish portraiture.`,

    costume: `
ERMINE MANTLE:
White fur shoulder mantle, small evenly-distributed black spots.
Drapes over the back and shoulders — animal's chest and paws fully visible.
ERMINE TECHNIQUE: individual short white fur strands with fine directional
brushstrokes. Warm ivory where the horizon light catches it, cool in shadow.
Not smooth — each hair strand has direction, thickness and shadow.
Black spots: soft painted edges, slightly irregular in size — never perfect circles.
Gold lace trim along the front border with small floral details — threads visible.
Floral embroidery along the cape: muted roses in dusty rose and gold.
Individual embroidery stitches clearly visible — raised above the velvet.
CAPE: Deep BURGUNDY velvet — warm wine red with brown undertones.
Falls behind and to one side only. NOT in front or sides.
CAPE PHYSICS: the burgundy velvet falls in asymmetric folds — no two folds
the same width. The fabric has weight and presence. Deep shadow carved into
each fold. Only the very edge of each fold catches any warm light.
TRANSITION: where the ermine meets the animal's fur — paint both materials
blending naturally at the boundary. No hard edge. No paste-on effect.
Heavy dramatic fold shadows — the fabric has real presence.
Double gold chain with a pendant on the animal's chest.`,
  },

];

module.exports = function renacimientoStyle(numSubjects, isGroup, genero) {

  const variante = pick(VARIANTES);

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
following the natural direction of hair growth. Fur has depth —
shadow underneath, individual hairs catching the warm horizon light on top.
Never smooth fur. Always layered, textured, painterly.
GOLD: all chains and trim are aged warm ochre — not bright yellow. Metallic but muted.
Sfumato blending on face transitions — soft edges between light and shadow on the face.
Visible canvas texture and fine craquelure throughout — most visible in dark areas.
Warm muted palette unified by a thin golden glaze over the whole composition.
Loose expressive brushwork for clouds. Directional strokes on all fabric.
Every element must feel physical, aged, painted — like a Flemish master painting.
Zero digital artifacts. Zero smooth gradients.`;

  return [background, variante.cushion, variante.costume, paintingStyle].join('\n');
};
