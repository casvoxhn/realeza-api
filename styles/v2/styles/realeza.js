// realeza.js — V4.8
// V4.8: cape fix — prenda sobre el animal, no cortina de fondo

const { pick } = require('../utils/pick');

const VARIANTES = [

  // ── VARIANTE 1: Carmesí + Bordado dorado ──────────────────────────────────
  {
    cushion: [
      "CUSHION — paint with extraordinary detail:",
      "A large DEEP CRIMSON velvet cushion — heavily stuffed and plump.",
      "SHAPE: nearly square — width and height almost equal. Not wide and flat.",
      "SIZE: occupies approximately 30-35% of the canvas height. Proportional — the animal is the protagonist.",
      "Top surface bulges dramatically upward in the center.",
      "Sides fall naturally with slight outward curve — contained, not wider than the animal's body.",
      "The animal's front paws hang over the FRONT EDGE of the cushion —",
      "paws drape down over the front lip, slightly below the cushion surface.",
      "Paws do NOT rest flat on top. They fall over the edge — natural weight.",
      "VELVET TECHNIQUE: long directional brushstrokes following the nap.",
      "Top surface: rich crimson catching warm light. Front face and sides: deep burgundy shadow.",
      "TRIM: Thick twisted gold rope cord at the bottom.",
      "One large ornate gold tassel at front center — elaborate, with visible threads.",
      "BASE: A low draped fabric surface beneath the cushion — like a muted silk or satin cloth",
      "covering a low pedestal, falling softly over the edges in gentle folds.",
      "Same dark muted tone as the background — barely visible, minimal height.",
      "Just enough to elevate the cushion slightly above the canvas bottom.",
    ].join("\n"),

    costume: [
      "ERMINE MANTLE:",
      "Thick voluminous white fur mantle, small evenly-distributed black spots.",
      "Drapes over the back and shoulders — animal's chest and paws fully visible.",
      "ERMINE TECHNIQUE: individual short white fur strands painted with fine",
      "directional brushstrokes. Not smooth — each hair has direction and shadow.",
      "The fur catches warm light on top, cool blue-white in shadow underneath.",
      "The black spots have soft painted edges — not stamped, slightly irregular.",
      "Rich pink and gold lace trim along the border — individual lace thread detail visible.",
      "A decorative gold clasp at the chest closure point.",
      "CAPE: Deep BURGUNDY-CRIMSON velvet cape — worn by the animal, draped over its back.",
      "Attached to the ermine mantle at the shoulders.",
      "Flows naturally down from the animal's back and trails onto the cushion behind it.",
      "The cape is ON the animal — not a background curtain, not a wall hanging.",
      "The velvet fabric touches the animal's sides naturally where it drapes.",
      "Heavy dramatic fold shadows — real fabric weight pulling downward.",
      "GOLD ARABESQUE EMBROIDERY along the cape's visible edge — scrolling botanical motifs.",
      "TRANSITION: where the ermine meets the animal's fur — paint both materials",
      "blending naturally at the boundary. No hard edge. No paste-on effect.",
      "Gold MEDALLION pendant on the animal's chest — centered, prominent.",
      "The medallion has a green gemstone catching the warm light.",
    ].join("\n"),
  },

  // ── VARIANTE 2: Borgoña profundo + Bordado dorado ─────────────────────────
  {
    cushion: [
      "CUSHION — paint with extraordinary detail:",
      "A large DEEP BURGUNDY velvet cushion — dark wine red, almost black in the deepest shadows.",
      "SHAPE: nearly square — width and height almost equal. Not wide and flat.",
      "SIZE: occupies approximately 30-35% of the canvas height. Proportional — the animal is the protagonist.",
      "Massively stuffed — top surface bulges dramatically upward in the center.",
      "Sides fall naturally with slight outward curve — contained, not wider than the animal's body.",
      "The animal's front paws hang over the FRONT EDGE of the cushion —",
      "paws drape down over the front lip, slightly below the cushion surface.",
      "Paws do NOT rest flat on top. They fall over the edge — natural weight.",
      "VELVET TECHNIQUE: long directional brushstrokes following the nap.",
      "Top surface: deep burgundy-wine in light. Front face and sides: near-black in shadow.",
      "TRIM: Thick twisted gold rope cord at the bottom.",
      "One large ornate gold tassel at front center — elaborate, prominent.",
      "BASE: A low draped fabric surface beneath the cushion — like a muted silk or satin cloth",
      "covering a low pedestal, falling softly over the edges in gentle folds.",
      "Same dark muted tone as the background — barely visible, minimal height.",
      "Just enough to elevate the cushion slightly above the canvas bottom.",
    ].join("\n"),

    costume: [
      "ERMINE MANTLE:",
      "Thick voluminous white fur mantle, small evenly-distributed black spots.",
      "Drapes over the back and shoulders — animal's chest and paws fully visible.",
      "ERMINE TECHNIQUE: individual short white fur strands painted with fine",
      "directional brushstrokes. Warm light on top, cool shadow underneath.",
      "Not smooth — textured, physical, painted hair by hair in the light areas.",
      "The black spots are soft-edged and slightly irregular — naturally painted.",
      "Gold lace trim along the border — rich and ornate, individual threads visible.",
      "CAPE: Deep BURGUNDY velvet cape — worn by the animal, draped over its back.",
      "Attached to the ermine mantle at the shoulders.",
      "Flows naturally down from the animal's back and trails onto the cushion behind it.",
      "The cape is ON the animal — not a background curtain, not a wall hanging.",
      "The velvet fabric touches the animal's sides naturally where it drapes.",
      "Heavy dramatic fold shadows — real fabric weight pulling downward.",
      "GOLD ARABESQUE EMBROIDERY along the cape's visible edge — matching motifs.",
      "TRANSITION: where the ermine meets the animal's fur — paint both materials",
      "blending naturally at the boundary. No hard edge. No paste-on effect.",
      "Gold MEDALLION pendant centered on the animal's chest.",
      "The medallion has a sapphire blue gemstone catching the warm light.",
    ].join("\n"),
  },

  // ── VARIANTE 3: Azul real + Bordado dorado ────────────────────────────────
  {
    cushion: [
      "CUSHION — paint with extraordinary detail:",
      "A large ROYAL BLUE velvet cushion — deep, rich cobalt-navy, regal and commanding.",
      "SHAPE: nearly square — width and height almost equal. Not wide and flat.",
      "SIZE: occupies approximately 30-35% of the canvas height. Proportional — the animal is the protagonist.",
      "Massively stuffed — top surface bulges dramatically upward in the center.",
      "Sides fall naturally with slight outward curve — contained, not wider than the animal's body.",
      "The animal's front paws hang over the FRONT EDGE of the cushion —",
      "paws drape down over the front lip, slightly below the cushion surface.",
      "Paws do NOT rest flat on top. They fall over the edge — natural weight.",
      "VELVET TECHNIQUE: long directional brushstrokes following the nap.",
      "Top surface: deep cobalt catching warm amber light. Sides: blue-black in deep shadow.",
      "TRIM: Thick twisted gold rope cord at the bottom.",
      "One large ornate gold tassel at front center — the most elaborate of all.",
      "BASE: A low draped fabric surface beneath the cushion — like a muted silk or satin cloth",
      "covering a low pedestal, falling softly over the edges in gentle folds.",
      "Same dark muted tone as the background — barely visible, minimal height.",
      "Just enough to elevate the cushion slightly above the canvas bottom.",
    ].join("\n"),

    costume: [
      "ERMINE MANTLE:",
      "Thick voluminous white fur mantle, small evenly-distributed black spots.",
      "Drapes over the back and shoulders — animal's chest and paws fully visible.",
      "ERMINE TECHNIQUE: individual short white fur strands with fine directional",
      "brushstrokes. Warm ivory in light, cool blue-white in shadow.",
      "Not smooth — each hair strand has direction, thickness and shadow.",
      "Black spots: soft painted edges, slightly irregular in size — never perfect.",
      "Gold lace trim along the border — the richest, most ornate version.",
      "Individual lace threads and floral motifs clearly visible.",
      "CAPE: ROYAL BLUE velvet cape — worn by the animal, draped over its back.",
      "Attached to the ermine mantle at the shoulders.",
      "Flows naturally down from the animal's back and trails onto the cushion behind it.",
      "The cape is ON the animal — not a background curtain, not a wall hanging.",
      "The velvet fabric touches the animal's sides naturally where it drapes.",
      "Color shifts from deep cobalt in light to near-black in shadow.",
      "GOLD EMBROIDERY: fleurs-de-lis and star motifs along the cape edge.",
      "TRANSITION: where the ermine meets the animal's fur — paint both materials",
      "blending naturally at the boundary. No hard edge. No paste-on effect.",
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
