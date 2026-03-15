// realeza.js — V4.0
// The Royal Portrait — Imperial Opulence
// 3 color variants picked randomly per generation

const { pick } = require('../utils/pick');

const VARIANTES = [

  // ── VARIANTE 1: Carmesí + Bordado dorado (el clásico) ─────────────────────
  {
    cushion: `
CUSHION — paint with extraordinary detail:
A large, extremely voluminous DEEP CRIMSON velvet cushion —
rich saturated red with deep burgundy shadow in the folds.
Massively stuffed — top surface bulges dramatically upward.
Sides billow outward — wider than the animal's body on both sides.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip, slightly below the cushion surface.
Paws do NOT rest flat on top. They fall over the edge — natural weight.
EMBROIDERY: Along the front face of the cushion — elaborate ARABESQUE
gold embroidery: scrolling vines, acanthus leaves, floral rosettes —
stitched directly into the crimson velvet in gold thread.
This embroidery is dense, ornate, clearly visible — not just trim.
Gold thread catches the light with metallic specular reflection.
TRIM: Thick twisted gold rope cord at the bottom.
One large ornate gold tassel at front center — elaborate, with visible threads.
LEDGE: Simple flat grey stone beneath — clean, no carvings.`,

    costume: `
ERMINE MANTLE:
Thick voluminous white fur mantle, small evenly-distributed black spots.
Drapes over the back and shoulders — animal's chest and paws fully visible.
Rich pink and GOLD lace trim along the border — more elaborate than baroque.
A decorative gold clasp at the chest closure point.
CAPE: Deep BURGUNDY-CRIMSON velvet — matches the cushion color.
GOLD ARABESQUE EMBROIDERY along the cape's visible edge —
scrolling botanical motifs matching the cushion embroidery.
Falls behind and to one side only. NOT in front or on sides.
Maximum velvet richness — deep dramatic fold shadows.
A gold MEDALLION pendant on the animal's chest — centered, prominent.
The medallion has a green gemstone catching the warm light.`,
  },

  // ── VARIANTE 2: Borgoña profundo + Bordado dorado ─────────────────────────
  {
    cushion: `
CUSHION — paint with extraordinary detail:
A large, extremely voluminous DEEP BURGUNDY velvet cushion —
dark wine red, almost black in the deepest shadows, rich in the light.
Massively stuffed — top surface bulges dramatically upward.
Sides billow outward — wider than the animal's body on both sides.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip, slightly below the cushion surface.
Paws do NOT rest flat on top. They fall over the edge — natural weight.
EMBROIDERY: Along the front face — elaborate ARABESQUE gold embroidery:
scrolling vines, acanthus leaves, rosettes stitched into the burgundy velvet.
Dense, ornate, clearly visible. Gold thread with metallic specular highlights.
TRIM: Thick twisted gold rope cord at the bottom.
One large ornate gold tassel at front center — elaborate, prominent.
LEDGE: Simple flat grey stone beneath — clean, no carvings.`,

    costume: `
ERMINE MANTLE:
Thick voluminous white fur mantle, small evenly-distributed black spots.
Drapes over the back and shoulders — animal's chest and paws fully visible.
Gold lace trim along the border — rich and ornate.
CAPE: Deep BURGUNDY velvet — same dark wine tone as the cushion.
GOLD ARABESQUE EMBROIDERY along the cape's visible edge — matching motifs.
Falls behind and to one side only. Heavy dramatic fold shadows.
Gold MEDALLION pendant centered on the animal's chest.
The medallion has a sapphire blue gemstone catching the warm light.`,
  },

  // ── VARIANTE 3: Azul real + Bordado dorado ────────────────────────────────
  {
    cushion: `
CUSHION — paint with extraordinary detail:
A large, extremely voluminous ROYAL BLUE velvet cushion —
deep, rich cobalt-navy, regal and commanding.
Massively stuffed — top surface bulges dramatically upward.
Sides billow outward — wider than the animal's body on both sides.
The animal's front paws hang over the FRONT EDGE of the cushion —
paws drape down over the front lip, slightly below the cushion surface.
Paws do NOT rest flat on top. They fall over the edge — natural weight.
EMBROIDERY: Along the front face — elaborate ARABESQUE gold embroidery:
scrolling fleurs-de-lis, acanthus, star rosettes — stitched into the blue velvet.
Dense and ornate. Gold thread with brilliant metallic specular reflection.
TRIM: Thick twisted gold rope cord at the bottom.
One large ornate gold tassel at front center — the most elaborate of all.
LEDGE: Simple flat grey stone beneath — clean, no carvings.`,

    costume: `
ERMINE MANTLE:
Thick voluminous white fur mantle, small evenly-distributed black spots.
Drapes over the back and shoulders — animal's chest and paws fully visible.
Gold lace trim along the border — the richest, most ornate version.
CAPE: ROYAL BLUE velvet — matches the cushion, deep cobalt richness.
GOLD EMBROIDERY: fleurs-de-lis and star motifs along the cape edge.
Falls behind and to one side only. Deep dramatic fold shadows.
Gold MEDALLION pendant centered on the chest — the most prominent version.
The medallion has a ruby red gemstone — brilliant against the gold.`,
  },

];

module.exports = function realezaStyle(numSubjects, isGroup, genero) {

  const variante = pick(VARIANTES);

  const background = `
BACKGROUND:
Near-black in the upper corners — deep umber darkness.
A warm golden-amber glow behind the animal's head — more intense than baroque.
Rich golden warmth radiating softly outward — like torchlight behind royalty.
Upper left corner pure black. The glow is concentrated and warm.
NO curtains. NO walls. NO objects. Pure atmospheric darkness with golden warmth.`;

  const paintingStyle = `
PAINTING STYLE:
17th century Imperial court portrait — the most opulent of the three styles.
Museum quality oil painting on canvas with visible craquelure.
Warm amber varnish patina — the richest, most golden tone.
Chiaroscuro from upper left — dramatic contrast, maximum velvet depth.
Impasto on the background. Smooth luminous rendering of the animal's face.
Gold embroidery painted with individual thread detail and specular highlights.
Muted but rich palette: deep crimson or royal blue, burnt gold, warm ivory, umber.
Photorealistic animal face and fur. Zero digital artifacts.
Every element must feel heavy, real, expensive. This is royalty.`;

  return [background, variante.cushion, variante.costume, paintingStyle].join('\n');
};
