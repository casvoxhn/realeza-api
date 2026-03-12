// SECCIÓN 7 — PROPS v6
// v6 — REVISIÓN DE ESCALA IMPONENTE: Cojines masivos, tensión de tela visible, 
// grosor vertical extremo y esquinas robustas (estilo trono pesado).

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

  // Forzamos un ancho y profundidad inmensos
  const ancho = numAnimales > 1
    ? `wide and deep, spanning the full width of the painting with a massive physical surface area`
    : `significantly wider and deeper than the animal, with the left and right edges extending broadly and heavily beyond the animal on both sides`;

  return `CUSHION CONSTRUCTION (CRITICAL): An immense and voluminous ceremonial throne cushion, ${ancho}. This is a powerful, structural seat, not a flat pillow.

SHAPE & VERTICALITY: The cushion rises with substantial vertical thickness from base to top. It is so tightly and heavily stuffed that the fabric tension is visible. The corners are tightly filled and boxy, defining its imposing, monolithic nature. The sides billow outward heavily with the massive weight of the interior filling.

STRUCTURE & GRAVITY INDENTATION: The cushion has complex, deep button tufting (tufted padding) that creates deep wells. The animal is nestled deeply within these wells, demonstrating substantial mass. The velvet surface visibly sinks and compresses drastically beneath the weight of the animal, creating a pronounced physical indentation.

SURFACE & TENSION: Made of ${cojin.tela} featuring ${cojin.bordado}. The velvet has a rich, plush nap with natural light-catching sheen — highlights on the raised areas, deep shadow in the folds. The fabric is tightly packed, with tension visible in the weave.

CONSTRUCTION DETAIL: The cushion exhibits visible fabric tension — deep, organic fold lines where the heavy stuffing pushes outward against the seams, especially at the corners and along the billowing sides. These are natural stress wrinkles in heavy velvet, adding to the realism.

TRIM & BASE: A substantial, tightly twisted, thick antique gold cord runs along the bottom edge — providing a clean, tight, monolithic robustness without loose fringe. One massive, heavy gold tassel hangs solidly from the front bottom corner. The cushion rests on a flat, matte, cool grey stone surface. Only a thin sliver of stone is visible below the cushion. NO decorative ledge, NO pedestal — just flat stone.

COMPOSITIONAL RULE: Paint the cushion with as much textural complexity, immense scale, and physical presence as the animal itself. The animal MUST look deeply embedded inside a heavily stuffed velvet throne.`;
};
