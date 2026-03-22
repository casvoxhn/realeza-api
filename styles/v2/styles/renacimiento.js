// renacimiento.js — V4.8
// V4.7: ANATOMIA_CAPA fix — no fuerza pose sentado
// V4.8: capa cubre ambos flancos simétricamente

const { pick } = require('../utils/pick');

const ANATOMIA_CAPA = `The cape drapes symmetrically over BOTH sides of the animal's back —
covering both flanks equally before trailing onto the cushion behind.
No leg or flank is left completely uncovered on either side.
The fabric follows the natural contours of whatever pose the animal is in.
Realistic folds reveal the body mass underneath — never hiding it.
The cape does NOT replace the body — it drapes over a 3D physical form.
The animal's full body silhouette remains visible beneath the fabric.`;

const VARIANTES = [

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
The velvet fabric touches the animal's sides naturally where it drapes.
Heavy dramatic fold shadows — real fabric weight pulling downward.
The floral embroidery continues onto the visible cape edge.
TRANSITION: where the ermine meets the animal's fur — paint both materials
blending naturally at the boundary. No hard edge. No paste-on effect.
Double gold chain with a pendant medallion on the animal's chest.`,
  },

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
The black spots are soft-edged and slightly irregular in size — naturally painted.
Silver and gold lace trim along the front border — individual threads visible.
Elaborate floral embroidery: botanical motifs in sage green, cream and gold.
Individual stitches slightly raised — tactile and real.
CAPE: Deep FOREST GREEN velvet cape — worn BY the animal.
${ANATOMIA_CAPA}
The velvet fabric touches the animal's sides naturally where it drapes.
Heavy dramatic fold shadows — real fabric weight pulling downward.
Green embroidery continues onto the visible cape edge.
TRANSITION: where the ermine meets the animal's fur — blend naturally.
No hard edge. No paste-on effect.
Double gold chain with a pendant on the animal's chest.`,
  },

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
Black spots: soft painted edges, slightly irregular in size —
