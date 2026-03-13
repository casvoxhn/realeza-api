// SECCIÓN 7 — PROPS v8 (ESTÉTICA MATE ANTI-CGI)
// v8 — COJÍN ORGÁNICO & ENCUADRE LIMPIO.
// Eliminación de brillos especulares (sheen/highlights).
// Acabado 100% mate con pinceladas visibles en tela y oro. Paleta terrosa.

const { pick } = require('./utils');

const cojines = {
  realeza: [
    { 
      tela: 'muted antique burgundy velvet damask', 
      bordado: 'intricate arabesque aged gold thread embroidery, painted with thick impasto' 
    },
    { 
      tela: 'desaturated heavy ochre silk-velvet damask', 
      bordado: 'complex floral damask patterns woven across the entire surface' 
    },
    { 
      tela: 'imperial aged dark-burgundy velvet', 
      bordado: 'darkened oxidized gold laurel and acanthus embroidery' 
    }
  ],
  barroco: [
    { 
      tela: 'near-black aged matte velvet', 
      bordado: 'restrained and muted fine bronze thread embroidery on a dark ground' 
    },
    { 
      tela: 'deep rusted crimson antique velvet', 
      bordado: 'faded gold thread arabesque embroidery' 
    },
    { 
      tela: 'dark charcoal velvet damask', 
      bordado: 'subtle, darkened oxidized gold scroll embroidery' 
    }
  ],
  renacimiento: [
    { 
      tela: 'deep antique bronze velvet damask', 
      bordado: 'rich, faded botanical damask patterns with deep tone-on-tone complexity' 
    },
    { 
      tela: 'warm faded burgundy velvet damask', 
      bordado: 'dense botanical embroidery with tarnished gold and copper thread' 
    },
    { 
      tela: 'muted forest-green aged velvet', 
      bordado: 'intricate oxidized copper thread arabesque embroidery with leaf motifs' 
    }
  ]
};

module.exports = function s7_props(estilo, numAnimales, indexHero = null) {
  const pool = cojines[estilo] || cojines.realeza;
  const cojin = indexHero !== null ? pool[indexHero % pool.length] : pick(pool);

  const ancho = numAnimales > 1
    ? `wide and deep, comfortably supporting the animals across the full width of the painting`
    : `significantly wider and deeper than the animal, extending elegantly on both sides`;

  return `CUSHION CONSTRUCTION (CRITICAL): A luxurious, soft, and plush oversized velvet throw pillow, ${ancho}. It is NOT a rigid, boxy, or tightly packed structure. It resembles a high-end, extremely comfortable royal cushion filled with soft down feathers.

SHAPE & GRAVITY: The cushion has a relaxed, organic shape. The animal rests comfortably, creating a soft, natural, and deep indentation in the center. The fabric yields gracefully to the animal's weight, sinking down rather than pushing up.

SURFACE & TEXTURE: Made of ${cojin.tela} featuring ${cojin.bordado}. CRITICAL: The surface MUST display natural, organic fabric wrinkles, soft draping, and relaxed folds where the heavy velvet is compressed by the animal. 

FABRIC PHYSICS (AESTHETIC LOCK): The velvet is rendered with thick, matte oil brushstrokes. ZERO light-catching sheen, ZERO specular CGI highlights on the raised folds. It absorbs light completely, with deep warm painted shadows in the creases. Strictly eliminate any inflated, balloon-like, or overly tight surface tension. NO deep button tufting. 

TRIM & BASE: A single thick antique oxidized gold cord runs along the seam. One heavy, matte gold tassel hangs naturally from a visible corner. The cord and tassel must look like thick oil paint, absolutely NO metallic CGI reflections. THE CUSHION ANCHORS THE COMPOSITION: The bottom of the cushion sits directly on the bottom edge of the canvas, bleeding off the frame. ZERO floor visible, ZERO stone visible, ZERO pedestal. 

COMPOSITIONAL RULE: Paint the cushion with immense scale but ultimate softness. The animal MUST look deeply and comfortably settled into a yielding, plush matte velvet pillow that fills the lower base of the portrait entirely.`;
};
