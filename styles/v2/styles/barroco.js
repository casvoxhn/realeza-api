// barroco.js — V4.1
// The Classic Portrait — Baroque Dramatic
// 3 color variants picked randomly per generation
// V4.1: paintingStyle elevado — técnica de óleo, sin render digital, pelaje en capas

const { pick } = require('../utils/pick');

const VARIANTES = [

  // ── VARIANTE 1: Dorado + Carmesí (el clásico) ─────────────────────────────
  {
    cushion: `
CUSHION — paint with full detail:
A large, extremely voluminous GOLD OCHRE velvet cushion — heavily stuffed,
visibly plump and round. Top surface bulges upward generously.
Sides billow outward — wider than the animal's body.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip, slightly below the cushion surface.
Paws do NOT rest flat on top. They fall over the edge — relaxed weight.
TRIM: Twisted gold rope cord along the bottom. One large gold tassel at front center.
LEDGE: Simple flat grey stone beneath — clean, no carvings, no reflection.`,

    costume: `
ERMINE MANTLE:
White fur shoulder mantle, small evenly-distributed black spots.
Drapes over the back and shoulders — animal's chest and paws fully visible.
Pink and gold lace trim along the front border.
CAPE: Deep CRIMSON velvet — falls behind and to one side only.
NOT in front or on sides. Deep dramatic fold shadows.
Double gold chain on chest against the animal's own fur.`,
  },

  // ── VARIANTE 2: Dorado + Borgoña oscuro ───────────────────────────────────
  {
    cushion: `
CUSHION — paint with full detail:
A large, extremely voluminous GOLD OCHRE velvet cushion — heavily stuffed,
visibly plump and round. Top surface bulges upward generously.
Sides billow outward — wider than the animal's body.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip, slightly below the cushion surface.
Paws do NOT rest flat on top. They fall over the edge — relaxed weight.
TRIM: Twisted gold rope cord along the bottom. One large gold tassel at front center.
LEDGE: Simple flat grey stone beneath — clean, no carvings, no reflection.`,

    costume: `
ERMINE MANTLE:
White fur shoulder mantle, small evenly-distributed black spots.
Drapes over the back and shoulders — animal's chest and paws fully visible.
Pink and gold lace trim along the front border.
CAPE: Deep DARK BURGUNDY velvet — almost black-red in the deep shadows.
Falls behind and to one side only. NOT in front or on sides.
Heavy dramatic fold shadows — the fabric has real weight.
Double gold chain on chest against the animal's own fur.`,
  },

  // ── VARIANTE 3: Bronce-Oliva + Azul profundo ──────────────────────────────
  {
    cushion: `
CUSHION — paint with full detail:
A large, extremely voluminous BRONZE-OLIVE velvet cushion —
deep warm khaki-gold tone, like aged bronze in candlelight.
Heavily stuffed and plump. Top surface bulges upward.
Sides billow outward — wider than the animal's body.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip, slightly below the cushion surface.
Paws do NOT rest flat on top. They fall over the edge — relaxed weight.
TRIM: Dark gold rope cord along the bottom. One large gold tassel at front center.
LEDGE: Simple flat grey stone beneath — clean, no carvings.`,

    costume: `
ERMINE MANTLE:
White fur shoulder mantle, small evenly-distributed black spots.
Drapes over the back and shoulders — animal's chest and paws fully visible.
Gold and ivory lace trim along the front border.
CAPE: Deep MIDNIGHT BLUE velvet — rich dark blue with blue-black depth in shadows.
Falls behind and to one side only. NOT in front or on sides.
Deep dramatic fold shadows — the fabric absorbs the light.
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
