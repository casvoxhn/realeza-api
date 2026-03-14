// SECCIÓN 7 — PROPS v11.0 (BACK TO CUSHION MASTER - PYRAMID BASE)
// v11.0 — Eliminación completa de la silla (throne chair). Vuelta al cojín de Fable.

const { pick } = require('./utils');

const cojines = {
  realeza: [
    { tela: 'rich deep crimson velvet', bordado: 'intricate arabesque gold thread embroidery stitched deeply into the velvet' },
    { tela: 'heavy gold silk-velvet', bordado: 'complex floral damask patterns woven organically across the surface' }
  ],
  barroco: [
    { tela: 'near-black aged velvet', bordado: 'restrained and muted fine gold thread embroidery' },
    { tela: 'deep crimson antique velvet', bordado: 'faded gold thread arabesque embroidery' }
  ],
  renacimiento: [
    { tela: 'deep antique gold velvet', bordado: 'rich, faded botanical damask patterns with tone-on-tone complexity' },
    { tela: 'forest-green aged velvet', bordado: 'intricate copper and gold arabesque embroidery' }
  ]
};

module.exports = function s7_props(estilo, numAnimales, indexHero = null) {
  const pool = cojines[estilo] || cojines.realeza;
  const cojin = indexHero !== null ? pool[indexHero % pool.length] : pick(pool);

  const ancho = numAnimales > 1
    ? `wide and deep, comfortably supporting the animals across the full width of the painting`
    : `significantly wider and deeper than the animal, extending elegantly and bleeding off both sides of the canvas`;

  return `CUSHION CONSTRUCTION (CRITICAL): A luxurious, soft, oversized throw pillow, ${ancho}. It is NOT a rigid, boxy structure. It is a yielding, comfortable royal cushion. NO CHAIRS, NO THRONES, NO SOLID STRUCTURES. The cushion forms the absolute base.

SHAPE & INDENTATION: The cushion has a relaxed, organic shape. The animal rests upon it, creating a soft, natural, and DEEP indentation. The fabric yields to the animal's physical weight. STRICTLY ELIMINATE any solid throne or chair structures.

SURFACE TEXTURE: Made of ${cojin.tela} featuring ${cojin.bordado}. CRITICAL: The surface MUST display natural, tactile fabric wrinkles, soft draping, and relaxed creases where the velvet is compressed. STRICTLY ELIMINATE any inflated, balloon-like, or tight surface tension. NO deep button tufting. 

TRIM & ANCHORING (PYRAMID BASE): A thick antique gold cord runs along the seam. THE CUSHION ANCHORS THE COMPOSITION: The bottom of the cushion sits directly on the bottom edge of the canvas, completely bleeding off the lower frame. ZERO floor visible, ZERO stone, ZERO pedestal. The cushion forms the solid, absolute base of the portrait.`;
};
