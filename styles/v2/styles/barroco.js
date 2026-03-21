// barroco.js — V4.9 (Museum Masterpiece - Baroque Dramatic)
// V4.9: Absolute aesthetic elevation — true oil physics, Rembrandt lighting, optical depth

const { pick } = require('../utils/pick');

const VARIANTES = [

  // ── VARIANTE 1: Dorado + Carmesí ──────────────────────────────────────────
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
Drapes with immense physical weight over the back and shoulders.
ERMINE TECHNIQUE: Baroque fur rendering. A warm, dark base with individual flyaway white hairs
pulled over the surface using thick impasto strokes. The black spots have soft, sfumato edges — melting into the white fur.
Pink and aged-gold lace trim — rendered with trompe l'oeil precision.
CAPE: Deep CRIMSON velvet cape draped naturally over the animal's back.
Heavy, dramatic folds painted with distinct, confident brushstrokes. The fabric has true gravitational pull.
The crimson is built up with rich alizarin glazes, glowing subtly in the light.
TRANSITION: The boundary between ermine and the animal's natural fur is softened with sfumato. Zero harsh digital cut-outs.
Double gold chain on chest, painted with tiny, sharp specular highlights mimicking real metal reflecting oil-lamp light.`
  },

  // ── VARIANTE 2: Dorado + Borgoña oscuro ───────────────────────────────────
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
Drapes with immense physical weight over the back and shoulders.
ERMINE TECHNIQUE: Baroque fur rendering. Thick ivory impasto highlights contrasted with
thin, cool, translucent shadows in the deep folds. The black spots have soft, painted edges.
Pink and aged-gold lace trim — individual metallic threads visible.
CAPE: Deep DARK BURGUNDY velvet cape draped naturally over the animal's back.
Heavy, dramatic folds painted with distinct, confident brushstrokes. The fabric feels thick and expensive.
Deepest folds are pure asphaltum black. No smooth digital transitions.
TRANSITION: The boundary between ermine and natural fur is softened with sfumato. Zero paste-on effect.
Double gold chain on chest, catching a single, sharp glint of warm light.`
  },

  // ── VARIANTE 3: Bronce-Oliva + Azul profundo ──────────────────────────────
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
Drapes with immense physical weight over the back and shoulders.
ERMINE TECHNIQUE: Baroque fur rendering. Warm light on top, cool optical shadows underneath.
Textured, physical, painted hair by hair in the light areas using a fine brush.
Gold and ivory lace trim along the front border — rendered with trompe l'oeil precision.
CAPE: Deep MIDNIGHT BLUE velvet cape draped naturally over the animal's back.
Heavy, wide, dramatic folds — real fabric weight pulling downward.
Painted using layers of translucent lapis lazuli glazes. Folds shift from deep cobalt in the light to absolute black in the crevices.
TRANSITION: The boundary between ermine and the animal's fur is blended using sfumato.
Double aged-gold chain on chest, resting heavily against the fur.`
  },

];

module.exports = function barrocoStyle(numSubjects, isGroup, genero) {

  const variante = pick(VARIANTES);

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
