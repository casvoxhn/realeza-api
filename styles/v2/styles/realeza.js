// realeza.js — V4.3
// Fix: orden correcto cushion → costume, sin mezcla de bloques
// V4.3: paintingStyle elevado — técnica de óleo, sin render digital, pelaje en capas

const { pick } = require('../utils/pick');

const VARIANTES = [

  // ── VARIANTE 1: Carmesí + Bordado dorado ──────────────────────────────────
  {
    cushion: [
      "CUSHION — paint with extraordinary detail:",
      "A large, extremely voluminous DEEP CRIMSON velvet cushion —",
      "rich saturated red with deep burgundy shadow in the folds.",
      "Massively stuffed — top surface bulges dramatically upward.",
      "Sides billow outward — wider than the animal's body on both sides.",
      "The animal's front paws hang over the FRONT EDGE of the cushion —",
      "paws drape down over the front lip, slightly below the cushion surface.",
      "Paws do NOT rest flat on top. They fall over the edge — natural weight.",
      "EMBROIDERY: Along the front face — elaborate ARABESQUE gold embroidery:",
      "scrolling vines, acanthus leaves, floral rosettes stitched into the crimson velvet.",
      "Dense, ornate, clearly visible. Gold thread with metallic specular reflection.",
      "TRIM: Thick twisted gold rope cord at the bottom.",
      "One large ornate gold tassel at front center — elaborate, with visible threads.",
      "LEDGE: Simple flat grey stone beneath — clean, no carvings.",
    ].join("\n"),

    costume: [
      "ERMINE MANTLE:",
      "Thick voluminous white fur mantle, small evenly-distributed black spots.",
      "Drapes over the back and shoulders — animal's chest and paws fully visible.",
      "Rich pink and gold lace trim along the border — more elaborate than baroque.",
      "A decorative gold clasp at the chest closure point.",
      "CAPE: Deep BURGUNDY-CRIMSON velvet — falls behind and to one side only.",
      "GOLD ARABESQUE EMBROIDERY along the cape's visible edge — scrolling botanical motifs.",
      "NOT in front or on sides. Maximum velvet richness — deep dramatic fold shadows.",
      "Gold MEDALLION pendant on the animal's chest — centered, prominent.",
      "The medallion has a green gemstone catching the warm light.",
    ].join("\n"),
  },

  // ── VARIANTE 2: Borgoña profundo + Bordado dorado ─────────────────────────
  {
    cushion: [
      "CUSHION — paint with extraordinary detail:",
      "A large, extremely voluminous DEEP BURGUNDY velvet cushion —",
      "dark wine red, almost black in the deepest shadows, rich in the light.",
      "Massively stuffed — top surface bulges dramatically upward.",
      "Sides billow outward — wider than the animal's body on both sides.",
      "The animal's front paws hang over the FRONT EDGE of the cushion —",
      "paws drape down over the front lip, slightly below the cushion surface.",
      "Paws do NOT rest flat on top. They fall over the edge — natural weight.",
      "EMBROIDERY: Along the front face — elaborate ARABESQUE gold embroidery:",
      "scrolling vines, acanthus leaves, rosettes stitched into the burgundy velvet.",
      "Dense, ornate, clearly visible. Gold thread with metallic specular highlights.",
      "TRIM: Thick twisted gold rope cord at the bottom.",
      "One large ornate gold tassel at front center — elaborate, prominent.",
      "LEDGE: Simple flat grey stone beneath — clean, no carvings.",
    ].join("\n"),

    costume: [
      "ERMINE MANTLE:",
      "Thick voluminous white fur mantle, small evenly-distributed black spots.",
      "Drapes over the back and shoulders — animal's chest and paws fully visible.",
      "Gold lace trim along the border — rich and ornate.",
      "CAPE: Deep BURGUNDY velvet — same dark wine tone as the cushion.",
      "GOLD ARABESQUE EMBROIDERY along the cape's visible edge — matching motifs.",
      "Falls behind and to one side only. Heavy dramatic fold shadows.",
      "Gold MEDALLION pendant centered on the animal's chest.",
      "The medallion has a sapphire blue gemstone catching the warm light.",
    ].join("\n"),
  },

  // ── VARIANTE 3: Azul real + Bordado dorado ────────────────────────────────
  {
    cushion: [
      "CUSHION — paint with extraordinary detail:",
      "A large, extremely voluminous ROYAL BLUE velvet cushion —",
      "deep, rich cobalt-navy, regal and commanding.",
      "Massively stuffed — top surface bulges dramatically upward.",
      "Sides billow outward — wider than the animal's body on both sides.",
      "The animal's front paws hang over the FRONT EDGE of the cushion —",
      "paws drape down over the front lip, slightly below the cushion surface.",
      "Paws do NOT rest flat on top. They fall over the edge — natural weight.",
      "EMBROIDERY: Along the front face — elaborate ARABESQUE gold embroidery:",
      "scrolling fleurs-de-lis, acanthus, star rosettes stitched into the blue velvet.",
      "Dense and ornate. Gold thread with brilliant metallic specular reflection.",
      "TRIM: Thick twisted gold rope cord at the bottom.",
      "One large ornate gold tassel at front center — the most elaborate of all.",
      "LEDGE: Simple flat grey stone beneath — clean, no carvings.",
    ].join("\n"),

    costume: [
      "ERMINE MANTLE:",
      "Thick voluminous white fur mantle, small evenly-distributed black spots.",
      "Drapes over the back and shoulders — animal's chest and paws fully visible.",
      "Gold lace trim along the border — the richest, most ornate version.",
      "CAPE: ROYAL BLUE velvet — deep cobalt richness, falls behind and to one side only.",
      "GOLD EMBROIDERY: fleurs-de-lis and star motifs along the cape edge.",
      "NOT in front or on sides. Deep dramatic fold shadows.",
      "Gold MEDALLION pendant centered on the chest — the most prominent version.",
      "The medallion has a ruby red gemstone — brilliant against the gold.",
    ].join("\n"),
  },

];

module.exports = function realezaStyle(numSubjects, isGroup, genero) {

  const variante = pick(VARIANTES);

  const background = [
    "BACKGROUND:",
    "Near-black charcoal grey — almost pure black on the left and upper corners.",
    "A very subtle warm umber-ochre gradient drifting toward the right side only —",
    "barely perceptible, like the faintest candlelight reflected on a dark wall far behind.",
    "NOT bright. NOT a halo. NOT radiating outward. Just a whisper of warmth.",
    "The left side is pure black. The warmth is only a ghost on the right.",
    "NO curtains. NO walls. NO objects. Pure atmospheric darkness.",
  ].join("\n");

  const paintingStyle = [
    "PAINTING STYLE:",
    "17th century Imperial court portrait — the most opulent of the three styles.",
    "This is a physical oil painting on aged canvas. Do NOT render this digitally.",
    "Do NOT use smooth AI gradients. Do NOT produce a clean digital illustration.",
    "FUR TECHNIQUE: paint a dark undertone base layer first.",
    "Then add individual lighter fur strands on top with short directional brushstrokes",
    "following the natural direction of hair growth. Fur has depth —",
    "shadow underneath, individual hairs catching warm light on top.",
    "Never smooth fur. Always layered, textured, painterly.",
    "GOLD: all gold embroidery and chains are aged warm ochre — not bright yellow.",
    "Individual thread detail visible on embroidery. Metallic but muted.",
    "Visible impasto brushwork on background. Canvas weave texture throughout.",
    "Fine craquelure in dark areas and deep shadows — aged oil paint.",
    "Chiaroscuro from upper left — dramatic contrast, maximum velvet depth.",
    "Muted but rich palette: deep crimson or royal blue, aged gold, warm ivory, umber.",
    "Every element must feel heavy, real, expensive — like a painting in a museum.",
    "Zero digital artifacts. Zero smooth gradients.",
  ].join("\n");

  return [background, variante.cushion, variante.costume, paintingStyle].join("\n\n");
};
