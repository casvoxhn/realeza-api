// barroco.js — V5.4
// V5.3: género aplicado — masculine/feminine cambia colores, bordado y accesorios
// V5.4: Competitor-style "Open Chest" — pecho descubierto y conexión con cadenas delicadas.

const { pick } = require('../utils/pick');

const ANATOMIA_CAPA = `The cape envelops the animal's body naturally, responding to gravity and pose.
It drapes heavily over the flanks, completely covering the back and sides before pooling onto the cushion.
CRITICAL FRONT VIEW: The chest area MUST remain OPEN and completely visible, proudly displaying the animal's natural fur.
CRITICAL SIDE/BACK VIEW: Do NOT leave random legs, hips, or flanks exposed on the sides.
The fabric must follow the natural 3D contours of the body mass underneath without hiding the silhouette.
The cape is a heavy, continuous piece of fabric — no awkward gaps or floating edges.`;

// ── VARIANTES NEUTRAS ─────────────────────────────────────────────────────────
const VARIANTES = [

  {
    cushion: `
CUSHION — paint with museum-grade physical realism:
A large GOLD OCHRE velvet cushion — heavily stuffed, conveying real mass and gravity.
SHAPE: nearly square — width and height almost equal. Not wide and flat.
SIZE: occupies approximately 30-35% of the canvas height. Proportional.
Top surface bulges upward generously under high tension.
The animal's front paws hang over the FRONT EDGE — natural, relaxed weight sinking into the fabric.
VELVET TECHNIQUE: Rendered using translucent yellow ochre and raw sienna glazes over a dark underpainting.
Masterful light absorption — the nap exhibits a rich, organic 'bloom' where warm light strikes directly.
Deep shadows fall into near-black optical voids. No smooth digital gradients.
TRIM: Twisted gold rope cord, painted with thick, raised impasto for the brightest highlights.
One large gold tassel at front center, individual threads articulated with fine rigger-brush strokes.
BASE: A simple, flat, dark wooden or stone surface grounding the cushion.
Painted with subtle dry-brush scumbling, barely lighter than the background void.`,

    costume: `
ERMINE MANTLE:
White fur shoulder mantle, small organically-distributed black spots.
OPEN CHEST STYLE: The mantle rests heavily on the outer shoulders and back, pulled wide open at the front to fully reveal the pet's natural chest and neck fur.
ERMINE TECHNIQUE: Baroque fur rendering. A warm, dark base with individual flyaway white hairs
pulled over the surface using thick impasto strokes. The black spots have soft, sfumato edges — melting into the white fur.
Pink and aged-gold lace trim — rendered with trompe l'oeil precision, framing the open chest in a graceful 'V' shape.
CAPE: Deep CRIMSON velvet cape draped naturally over the animal's back.
${ANATOMIA_CAPA}
Heavy, dramatic folds painted with distinct, confident brushstrokes. The fabric has true gravitational pull.
The crimson is built up with rich alizarin glazes, glowing subtly in the light.
TRANSITION: The boundary between ermine and the animal's natural fur is softened with sfumato. Zero harsh digital cut-outs.
CHAIN FASTENING: Two delicate, fine-linked gold chains connect the left and right edges of the mantle across the exposed chest. Painted with tiny, sharp specular highlights mimicking real metal reflecting oil-lamp light.`,
  },

  {
    cushion: `
CUSHION — paint with museum-grade physical realism:
A large GOLD OCHRE velvet cushion — heavily stuffed, conveying real mass and gravity.
SHAPE: nearly square.
SIZE: occupies approximately 30-35% of the canvas height. Proportional.
Top surface bulges upward generously under high tension.
The animal's front paws hang naturally over the FRONT EDGE.
VELVET TECHNIQUE: Rendered using translucent glazes over a dark underpainting.
The nap exhibits a rich, organic 'bloom' in the light. Shadows are profound, warm umber voids.
TRIM: Twisted gold rope cord, painted with thick impasto for the brightest highlights.
One large gold tassel at front center, threads articulated with fine brush strokes.
BASE: A simple, flat, dark surface grounding the cushion.
Painted with subtle scumbling, melting into the shadows.`,

    costume: `
ERMINE MANTLE:
White fur shoulder mantle, small organically-distributed black spots.
OPEN CHEST STYLE: The garment is pulled back to expose the pet's natural chest fur completely.
ERMINE TECHNIQUE: Baroque fur rendering. Thick ivory impasto highlights contrasted with
thin, cool, translucent shadows in the deep folds. The black spots have soft, painted edges.
Pink and aged-gold lace trim — individual metallic threads visible.
CAPE: Deep DARK BURGUNDY velvet cape draped naturally over the animal's back.
${ANATOMIA_CAPA}
Heavy, dramatic folds painted with distinct, confident brushstrokes. The fabric feels thick and expensive.
Deepest folds are pure asphaltum black. No smooth digital transitions.
TRANSITION: The boundary between ermine and natural fur is softened with sfumato. Zero paste-on effect.
CHAIN FASTENING: A single, extremely delicate gold chain with a central sapphire brooch connects the mantle edges over the bare chest, catching a single, sharp glint of warm light.`,
  },

  {
    cushion: `
CUSHION — paint with museum-grade physical realism:
A large BRONZE-OLIVE velvet cushion — deep warm khaki-gold tone, like aged bronze in candlelight.
SHAPE: nearly square. Heavily stuffed, conveying real mass.
SIZE: occupies approximately 30-35% of the canvas height. Proportional.
Top surface bulges upward generously.
The animal's front paws hang naturally over the FRONT EDGE.
VELVET TECHNIQUE: Optically mixed using raw umber and verdigris glazes.
The top surface catches warm amber light with thick impasto touches, while sides fall into deep, brown-black shadow.
TRIM: Dark gold rope cord, painted with sharp, textured highlights.
One large gold tassel at front center.
BASE: A simple, flat, dark surface grounding the cushion.
Barely visible, painted with thin, dark washes.`,

    costume: `
ERMINE MANTLE:
White fur shoulder mantle, small organically-distributed black spots.
OPEN CHEST STYLE: Framing the chest naturally without covering the center, leaving the pet's neck and chest fur fully visible.
ERMINE TECHNIQUE: Baroque fur rendering. Warm light on top, cool optical shadows underneath.
Textured, physical, painted hair by hair in the light areas using a fine brush.
Gold and ivory lace trim along the front border — rendered with trompe l'oeil precision.
CAPE: Deep MIDNIGHT BLUE velvet cape draped naturally over the animal's back.
${ANATOMIA_CAPA}
Heavy, wide, dramatic folds — real fabric weight pulling downward.
Painted using layers of translucent lapis lazuli glazes. Folds shift from deep cobalt in the light to absolute black in the crevices.
TRANSITION: The boundary between ermine and the animal's fur is blended using sfumato.
CHAIN FASTENING: Double aged-gold chains, very fine links, spanning the open chest to hold the heavy cape together. Resting gracefully against the animal's natural fur.`,
  },

];

// ── VARIANTE MASCULINE ────────────────────────────────────────────────────────
const VARIANTE_MASCULINE = {
  cushion: `
CUSHION — paint with museum-grade physical realism:
A large BRONZE-OLIVE velvet cushion — deep warm khaki-gold, like aged bronze in dramatic candlelight.
SHAPE: nearly square. Heavily stuffed, conveying real mass and gravity.
SIZE: occupies approximately 30-35% of the canvas height. Proportional.
Top surface bulges upward generously.
The animal's front paws hang naturally over the FRONT EDGE.
VELVET TECHNIQUE: Optically mixed using raw umber and verdigris glazes — dark and austere.
Top surface catches minimal warm amber light. Sides fall into profound brown-black shadow.
TRIM: Dark gold rope cord, painted with sharp restrained highlights.
One large commanding gold tassel at front center.
BASE: A simple, flat, dark stone surface — austere and dignified.
Barely visible, painted with thin dark washes.`,

  costume: `
ERMINE MANTLE:
White fur shoulder mantle, small organically-distributed black spots.
OPEN CHEST STYLE: Wide masculine opening. The heavy garment sits strictly on the outer shoulders to proudly display the chest and torso fur.
ERMINE TECHNIQUE: Baroque fur rendering — dark underbase, individual flyaway white hairs on top.
Cool ivory impasto in light areas, deep cool shadows in the folds.
Minimal gold trim along the front border — restrained and masculine.
CAPE: Deep MIDNIGHT BLUE velvet cape — worn BY the animal.
${ANATOMIA_CAPA}
Heavy, wide, dramatic folds — real fabric weight pulling powerfully downward.
Painted using deep lapis lazuli and ultramarine glazes — folds shift from deep cobalt to absolute black.
GEOMETRIC EMBROIDERY: Bold interlocking geometric and spiral motifs along the cape edge.
Executed in thick raised impasto — dark gold and ochre, angular and commanding.
TRANSITION: The boundary between ermine and fur is softened with cool sfumato.
CHAIN FASTENING: A heavy but fine-linked double aged-gold chain spans the open chest, structurally connecting the two sides of the heavy mantle. A bold dark sapphire pendant connects the chains at the center — cold, deep and commanding.`,
};

// ── VARIANTE FEMININE ─────────────────────────────────────────────────────────
const VARIANTE_FEMININE = {
  cushion: `
CUSHION — paint with museum-grade physical realism:
A large GOLD OCHRE velvet cushion — warm golden amber, luminous and rich.
SHAPE: nearly square. Heavily stuffed, conveying real mass and warmth.
SIZE: occupies approximately 30-35% of the canvas height. Proportional.
Top surface bulges upward generously under warm tension.
The animal's front paws hang naturally over the FRONT EDGE.
VELVET TECHNIQUE: Rendered using translucent yellow ochre and raw sienna glazes — warm and glowing.
Masterful light absorption — the nap exhibits a rich warm 'bloom' where light strikes directly.
Deep warm shadows — never cold. No smooth digital gradients.
TRIM: Delicate twisted gold rope cord, fine impasto highlights.
One ornate gold tassel at front center — individual threads articulated with fine brushwork.
BASE: A simple warm dark surface grounding the cushion — intimate and elegant.`,

  costume: `
ERMINE MANTLE:
Thick voluminous white fur mantle with small, asymmetrical black spots.
OPEN CHEST STYLE: Elegant "V" opening, pushed gracefully over the shoulders to proudly reveal the pet's natural chest fur.
ERMINE TECHNIQUE: Baroque fur rendering — warm ivory impasto in the highlights,
thin warm translucent glazes in the deep folds. Individual hairs catch golden candlelight.
Prominent ornate gold lace trim — trompe l'oeil precision, delicate and beautiful, framing the open chest.
CAPE: Deep CRIMSON velvet cape — rich alizarin red, warm and luminous — worn BY the animal.
${ANATOMIA_CAPA}
Elegant dramatic folds — fabric flows with graceful gravitational weight.
Rich alizarin glazes build up the crimson — glowing warmly in the candlelight.
BAROQUE FLORAL EMBROIDERY: Elaborate roses, scrolling volutas and botanical forms along the cape edge.
Executed in thick warm gold impasto — intricate, ornate and beautiful.
TRANSITION: The boundary between ermine and fur is softened gently with warm sfumato.
CHAIN FASTENING: A very thin, refined single gold chain gracefully connects the two sides of the open mantle across the exposed chest. A warm glowing ruby pendant rests on the natural fur — rich, warm and luminous.`,
};

module.exports = function barrocoStyle(numSubjects, isGroup, genero) {

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
Masterful Rembrandt-style tenebrism. Optical depth achieved through translucent layers of asphaltum and burnt umber.
Near-black charcoal grey — almost pure black in the upper corners. Not a flat digital black, but an atmospheric void.
A very subtle warm umber glow directly behind the animal's head — barely visible, created with dry scumbling.
Pure 17th-century studio shadow — NO walls, NO curtains, NO objects. Just deep, breathable darkness.`;

  const paintingStyle = `
PAINTING STYLE & MEDIUM:
17th-century Baroque masterwork oil painting on aged, hand-woven linen canvas.
Do NOT render this digitally. Eradicate all modern digital illustration styles and smooth 3D rendering.
Subject's face must be rendered with forensic anatomical precision, yet executed with masterful classical brushwork.
FUR TECHNIQUE: A dark underpainting base, built up with individual lighter fur strands using wet-on-wet (alla prima) strokes.
Fur has physical depth — shadow underneath, individual hairs catching warm light on top.
GOLD: All chains and trim are aged warm ochre and lead-tin yellow impasto — not bright digital yellow.
Authentic physical textures: Visible brushwork, canvas weave visible through thin paint layers.
Fine craquelure (paint cracking) in the darkest areas. Unified by a warm amber damar varnish patina.
Lighting: Dramatic chiaroscuro from the upper left. A distinct triangle of soft light with deep, solid shadows.
The final image must look indistinguishable from a high-resolution macro photograph of a 400-year-old museum painting.`;

  return [background, variante.cushion, variante.costume, paintingStyle].join('\n');
};
