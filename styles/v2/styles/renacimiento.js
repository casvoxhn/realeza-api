// renacimiento.js — V4.0
// The Elegant Portrait — Renaissance Flemish
// 3 color variants picked randomly per generation

const { pick } = require('../utils/pick');

const VARIANTES = [

  // ── VARIANTE 1: Gris oscuro + Borgoña-café (el clásico) ───────────────────
  {
    cushion: `
CUSHION — paint with full detail:
A large, extremely voluminous DARK GREY velvet cushion —
deep charcoal tone with subtle warm undertones where light catches it.
Heavily stuffed and plump. Top surface bulges upward generously.
Sides billow outward — wider than the animal's body.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip, slightly below the cushion surface.
Paws do NOT rest flat on top. They fall over the edge — natural weight.
TRIM: Twisted gold rope cord along the bottom. One gold tassel at front center.
The velvet shows rich light-to-shadow graduation — bright highlight on top,
deep shadow on the sides and front face.
LEDGE: Simple flat grey stone beneath — plain, no carvings, no decoration.`,

    costume: `
ERMINE MANTLE:
White fur shoulder mantle, small evenly-distributed black spots.
Drapes over the back and shoulders — animal's chest and paws fully visible.
Cream-gold lace trim along the front border.
Elaborate floral embroidery along the cape edge: rose and vine motifs
in terracotta, cream and gold thread — key feature of this style.
CAPE: Deep DARK BURGUNDY-BROWN velvet — darker and richer than crimson.
Falls heavily behind and to one side. NOT in front or sides.
The floral embroidery continues onto the cape edge.
Deep dramatic fold shadows — real weight and texture.
Double gold chain with a pendant medallion on the animal's chest.`,
  },

  // ── VARIANTE 2: Gris azulado + Verde bosque ───────────────────────────────
  {
    cushion: `
CUSHION — paint with full detail:
A large, extremely voluminous BLUE-GREY velvet cushion —
a cool slate tone, like storm clouds catching pale light.
Heavily stuffed and plump. Top surface bulges upward generously.
Sides billow outward — wider than the animal's body.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip, slightly below the cushion surface.
Paws do NOT rest flat on top. They fall over the edge — natural weight.
TRIM: Twisted silver-gold rope cord along the bottom. One gold tassel at front center.
Cool highlight on the top center, deep blue-grey shadow on the sides.
LEDGE: Simple flat grey stone beneath — plain, no carvings.`,

    costume: `
ERMINE MANTLE:
White fur shoulder mantle, small evenly-distributed black spots.
Drapes over the back and shoulders — animal's chest and paws fully visible.
Silver and gold lace trim along the front border.
Elaborate floral embroidery: botanical motifs in sage green, cream and gold.
CAPE: Deep FOREST GREEN velvet — rich, dark, like deep moss in shadow.
Falls behind and to one side only. NOT in front or sides.
Green embroidery continues onto the visible cape edge.
Deep dramatic fold shadows in the velvet.
Double gold chain with a pendant on the animal's chest.`,
  },

  // ── VARIANTE 3: Azul pizarra + Borgoña ────────────────────────────────────
  {
    cushion: `
CUSHION — paint with full detail:
A large, extremely voluminous SLATE BLUE velvet cushion —
deep cool indigo-grey, rich and dignified.
Heavily stuffed and plump. Top surface bulges upward generously.
Sides billow outward — wider than the animal's body.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip, slightly below the cushion surface.
Paws do NOT rest flat on top. They fall over the edge — natural weight.
TRIM: Twisted gold rope cord along the bottom. One gold tassel at front center.
Deep shadows in the folds, pale cool highlight across the top.
LEDGE: Simple flat grey stone beneath — plain, no carvings.`,

    costume: `
ERMINE MANTLE:
White fur shoulder mantle, small evenly-distributed black spots.
Drapes over the back and shoulders — animal's chest and paws fully visible.
Gold lace trim along the front border with small floral details.
Floral embroidery along the cape: muted roses in dusty rose and gold.
CAPE: Deep BURGUNDY velvet — warm wine red with brown undertones.
Falls behind and to one side only. NOT in front or sides.
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
A break of pale golden-cream light on the LEFT horizon — warm and luminous.
A hint of teal-blue sky visible through the cloud break on the right.
NO solid dark wall. The sky fills the upper 40% of the canvas.`;

  const paintingStyle = `
PAINTING STYLE:
16th century Renaissance Flemish oil painting — museum quality.
Sfumato blending — soft transitions between light and shadow.
Visible canvas texture and fine craquelure throughout.
Warm muted palette unified by a thin golden glaze.
Rich naturalistic fur — individual hairs visible in the light areas.
Loose expressive brushwork for clouds, smooth for the horizon light.
Photorealistic animal face. Zero digital artifacts.`;

  return [background, variante.cushion, variante.costume, paintingStyle].join('\n');
};
