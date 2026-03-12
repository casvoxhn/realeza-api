// SECCIÓN 7 — PROPS v5
// v5 — REVISIÓN TOTAL DE COJINES: Estructura, Volumen, Altura Vertical y Gravedad.
// Basado en el análisis de las imágenes de la competencia para forzar masa y volumen.

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
      bordado: 'darkened gold laurel and acesque embroidery along the cushion face' 
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

  // Forzamos un ancho y altura sustancial
  const ancho = numAnimales > 1
    ? `wide and deep, spanning the full width and having a large physical surface area`
    : `significantly wider and deeper than the animal, with left and right edges extending broadly beyond the animal on both sides`;

  const altura = `Substantial vertical height from base to top, making the cushion a true throne seat.`;

  return `CUSHION CONSTRUCTION (CRITICAL): A heavily stuffed, ceremonial throne cushion, ${ancho}. ${altura}. This is a true volumetric prop, not a flat surface.

STRUCTURE & GRAVITY INDENTATION: The cushion has complex, deep **button tufting (tufted padding)** that creates deep wells. The animal is **nestled deeply within these wells, demonstrating substantial mass**. The velvet surface **visibly sinks and compresses** beneath the weight of the animal, creating a pronounced indentation.

SURFACE: ${cojin.bordado}. The velvet has a rich, plush nap that absorbs and catches light in a painterly manner.

TRIM & BASE: A substantial, tightly twisted gold cord runs along the bottom edge, providing clean construction detail. One large, substantial gold tassel hangs from the front bottom corner. The cushion rests on a flat, matte, cool grey stone surface.

COMPOSITIONAL RULE: Paint the cushion with as much textural complexity and physical presence as the animal. The animal must look embedded in a heavily stuffed velvet throne, not floating on a thin pillow.`;
};
