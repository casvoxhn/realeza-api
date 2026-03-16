// barroco.js — V4.7
// The Classic Portrait — Baroque Dramatic
// V4.7: cape con restricción explícita de longitud — no cortina, no piso

const { pick } = require('../utils/pick');

const VARIANTES = [

  // ── VARIANTE 1: Dorado + Carmesí ──────────────────────────────────────────
  {
    cushion: `
CUSHION — paint with full detail:
A large GOLD OCHRE velvet cushion — heavily stuffed and plump.
SHAPE: nearly square — width and height almost equal. Not wide and flat.
SIZE: occupies approximately 30-35% of the canvas height. Proportional — the animal is the protagonist.
Top surface bulges upward generously in the center.
Sides fall naturally with slight outward curve — contained, not wider than the animal's body.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip, slightly below the cushion surface.
Paws do NOT rest flat on top. They fall over the edge — relaxed weight.
VELVET TECHNIQUE: paint the nap direction — long directional strokes
following the fabric grain. Bright highlight on the top surface where light
strikes directly. Deep shadow on the front face and side panels.
The velvet transitions from ochre-gold in light to deep warm brown in shadow.
TRIM: Twisted gold rope cord along the bottom. One large gold tassel at front center.
BASE: A simple flat dark surface beneath the cushion —
warm umber-brown tone, barely lighter than the background.
Plain, no texture, no decoration. Just a flat floor grounding the cushion.`,

    costume: `
ERMINE MANTLE:
White fur shoulder mantle, small evenly-distributed black spots.
Drapes over the back and shoulders — animal's chest and paws fully visible.
ERMINE TECHNIQUE: individual short white fur strands painted with fine
directional brushstrokes. Not smooth — each hair has direction and slight shadow.
The black spots have soft edges — painted, not stamped.
Pink and gold lace trim along the front border — individual lace thread detail visible.
CAPE: Deep CRIMSON velvet shoulder cape.
SHORT garment — covers the back and shoulders only. Maximum length to mid-body.
NOT a floor-length drape. NOT a curtain. NOT a backdrop.
Falls behind and to one side only — never in front, never to the sides.
CAPE PHYSICS: the folds are irregular and asymmetric — real gravity.
No two folds are the same width. Deep shadow carved into each fold.
The velvet absorbs light — matte surface, only fold edges catch light.
TRANSITION: where the ermine meets the animal's fur — paint both materials
blending naturally at the boundary. No hard edge. No paste-on effect.
Double gold chain on chest against the animal's own fur.`,
  },

  // ── VARIANTE 2: Dorado + Borgoña oscuro ───────────────────────────────────
  {
    cushion: `
CUSHION — paint with full detail:
A large GOLD OCHRE velvet cushion — heavily stuffed and plump.
SHAPE: nearly square — width and height almost equal. Not wide and flat.
SIZE: occupies approximately 30-35% of the canvas height. Proportional — the animal is the protagonist.
Top surface bulges upward generously in the center.
Sides fall naturally with slight outward curve — contained, not wider than the animal's body.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip, slightly below the cushion surface.
Paws do NOT rest flat on top. They fall over the edge — relaxed weight.
VELVET TECHNIQUE: paint the nap direction — long directional strokes
following the fabric grain. Bright highlight on the top surface where light
strikes directly. Deep shadow on the front face and side panels.
The velvet transitions from ochre-gold in light to deep warm brown in shadow.
TRIM: Twisted gold rope cord along the bottom. One large gold tassel at front center.
BASE: A simple flat dark surface beneath the cushion —
warm umber-brown tone, barely lighter than the background.
Plain, no texture, no decoration. Just a flat floor grounding the cushion.`,

    costume: `
ERMINE MANTLE:
White fur shoulder mantle, small evenly-distributed black spots.
Drapes over the back and shoulders — animal's chest and paws fully visible.
ERMINE TECHNIQUE: individual short white fur strands painted with fine
directional brushstrokes. Not smooth — each hair has direction and slight shadow.
The black spots have soft painted edges — not stamped, not perfect circles.
Pink and gold lace trim along the front border — individual thread detail visible.
CAPE: Deep DARK BURGUNDY velvet shoulder cape.
SHORT garment — covers the back and shoulders only. Maximum length to mid-body.
NOT a floor-length drape. NOT a curtain. NOT a backdrop.
Falls behind and to one side only — never in front, never to the sides.
CAPE PHYSICS: heavy fabric with real gravitational weight. The folds collapse
unevenly — wide folds next to narrow ones. The deepest folds are near-black.
Only the very edge of each fold catches any light at all.
TRANSITION: where the ermine meets the animal's fur — paint both materials
blending naturally at the boundary. No hard edge. No paste-on effect.
Double gold chain on chest against the animal's own fur.`,
  },

  // ── VARIANTE 3: Bronce-Oliva + Azul profundo ──────────────────────────────
  {
    cushion: `
CUSHION — paint with full detail:
A large BRONZE-OLIVE velvet cushion —
deep warm khaki-gold tone, like aged bronze in candlelight.
SHAPE: nearly square — width and height almost equal. Not wide and flat.
SIZE: occupies approximately 30-35% of the canvas height. Proportional — the animal is the protagonist.
Heavily stuffed and plump. Top surface bulges upward in the center.
Sides fall naturally with slight outward curve — contained, not wider than the animal's body.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip, slightly below the cushion surface.
Paws do NOT rest flat on top. They fall over the edge — relaxed weight.
VELVET TECHNIQUE: long directional brushstrokes following the nap.
The top surface catches warm amber light — bronze and olive tones visible.
The sides fall into deep cool shadow — almost brown-black at the bottom.
TRIM: Dark gold rope cord along the bottom. One large gold tassel at front center.
BASE: A simple flat dark surface beneath the cushion —
warm umber-brown tone, barely lighter than the background.
Plain, no texture, no decoration. Just a flat floor grounding the cushion.`,

    costume: `
ERMINE MANTLE:
White fur shoulder mantle, small evenly-distributed black spots.
Drapes over the back and shoulders — animal's chest and paws fully visible.
ERMINE TECHNIQUE: individual short white fur strands with fine directional
brushstrokes. The fur catches warm light on top, cool shadow underneath.
Not smooth — textured, physical, painted hair by hair in the light areas.
The black spots are soft-edged and slightly irregular — naturally painted.
Gold and ivory lace trim along the front border — visible individual threads.
CAPE: Deep MIDNIGHT BLUE velvet shoulder cape.
SHORT garment — covers the back and shoulders only. Maximum length to mid-body.
NOT a floor-length drape. NOT a curtain. NOT a backdrop.
Falls behind and to one side only — never in front, never to the sides.
CAPE PHYSICS: the midnight blue velvet falls in long deep folds with maximum shadow.
Color shifts from deep cobalt in light to near-black in shadow.
Folds are wide and dramatic, irregular in spacing.
TRANSITION: where the ermine meets the animal's fur — paint both materials
blending naturally at the boundary. No hard edge. No paste-on effect.
Double gold chain on chest against the animal's own fur.`,
  },

];

module.exports = function barrocoStyle(numSubjects, isGroup, genero) {

  const variante = pick(VARIANTES);

  const background = `
BACKGROUND:
Near-black charcoal grey — almost pure black in the upper corners.
A very subtle warm umber glow directly behind the animal's head — barely visible.
Pure Rembrandt studio shadow — NO walls, NO curtains, NO objects, NO drapes.`;

  const paintingStyle = `
PAINTING STYLE:
17th century Baroque oil painting on aged canvas. Do NOT render this digitally.
Do NOT use smooth AI gradients. Do NOT produce a clean digital illustration.
FUR TECHNIQUE: paint a dark undertone base layer first.
Then add individual lighter fur strands on top with short directional brushstrokes
following the natural direction of hair growth. Fur has depth —
shadow underneath, individual hairs catching warm light on top.
Never smooth fur. Always layered, textured, painterly.
GOLD: all chains and trim are aged warm ochre — not bright yellow. Metallic but muted.
Visible impasto brushwork on background and fabric. Canvas weave texture throughout.
Fine craquelure in dark areas and deep shadows — aged oil paint cracking.
Warm amber varnish patina. Chiaroscuro from upper left.
Muted desaturated palette — no vivid digital colors.
Every element must feel heavy, real, physical — like a painting hanging in a museum.
Zero digital artifacts. Zero smooth gradients.`;

  return [background, variante.cushion, variante.costume, paintingStyle].join('\n');
};
