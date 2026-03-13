// SECCIÓN 7 — PROPS v7
// v7 — COJÍN ORGÁNICO: Se elimina el efecto "globo/cama inflable". 
// Foco en plumas suaves, arrugas naturales (organic wrinkles) y hundimiento orgánico.
// Sin button tufting ni tensión excesiva. Inspirado en estética de competencia.

const { pick } = require('./utils');

const cojines = {
  realeza: [
    { 
      tela: 'rich deep crimson velvet damask', 
      bordado: 'intricate arabesque gold thread embroidery with raised texture, stitched deeply into the velvet' 
    },
    { 
      tela: 'heavy gold silk-velvet damask', 
      bordado: 'complex floral damask patterns woven across the entire surface' 
    },
    { 
      tela: 'imperial aged burgundy velvet', 
      bordado: 'darkened gold laurel and acanthus embroidery along the cushion face' 
    }
  ],
  barroco: [
    { 
      tela: 'near-black aged velvet', 
      bordado: 'restrained and muted fine gold thread embroidery on a dark ground' 
    },
    { 
      tela: 'deep crimson antique velvet', 
      bordado: 'faded gold thread arabesque embroidery' 
    },
    { 
      tela: 'dark charcoal velvet damask', 
      bordado: 'subtle, darkened gold scroll embroidery' 
    }
  ],
  renacimiento: [
    { 
      tela: 'deep antique gold velvet damask', 
      bordado: 'rich, faded botanical damask patterns with deep tone-on-tone complexity' 
    },
    { 
      tela: 'warm burgundy velvet damask', 
      bordado: 'dense botanical embroidery with gold and copper thread' 
    },
    { 
      tela: 'forest-green aged velvet', 
      bordado: 'intricate gold and copper thread arabesque embroidery with leaf and vine motifs' 
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

FABRIC PHYSICS: Strictly eliminate any inflated, balloon-like, or overly tight surface tension. NO deep button tufting. The velvet has a rich nap with natural light-catching sheen — highlights on the raised folds, deep shadow in the creases. 

TRIM & BASE: A single, elegant thick antique gold cord runs along the seam. One beautiful, heavy gold tassel hangs naturally from a visible corner. The cushion rests on a simple, flat, matte, cool grey stone surface. Only a thin sliver of stone is visible below the cushion. NO decorative ledge, NO pedestal — just flat stone.

COMPOSITIONAL RULE: Paint the cushion with immense scale but ultimate softness. The animal MUST look deeply and comfortably settled into a yielding, plush velvet pillow.`;
};
