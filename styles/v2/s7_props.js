// SECCIÓN 7 — PROPS (COJÍN)
// Coordinado con el estilo. Colores pre-definidos.
// Tamaño y flecos son FIJOS — nunca cambian.

const { pick } = require('./utils');

const cojines = {
  realeza: [
    { color: 'deep burgundy', tela: 'deep burgundy velvet' },
    { color: 'rich gold', tela: 'rich gold velvet' },
    { color: 'imperial crimson', tela: 'imperial crimson velvet' }
  ],
  barroco: [
    { color: 'near-black', tela: 'near-black velvet' },
    { color: 'deep crimson', tela: 'deep crimson velvet' },
    { color: 'dark burgundy', tela: 'dark burgundy velvet' }
  ],
  renacimiento: [
    { color: 'deep gold', tela: 'deep gold velvet' },
    { color: 'warm burgundy', tela: 'warm burgundy velvet' },
    { color: 'forest green', tela: 'forest-green velvet' }
  ]
};

module.exports = function s7_props(estilo, numAnimales, indexHero = null) {
  const pool = cojines[estilo] || cojines.realeza;
  const cojin = indexHero !== null ? pool[indexHero % pool.length] : pick(pool);

  const ancho = numAnimales > 1
    ? `wide enough to seat all animals side by side with room to spare — it spans nearly the full width of the composition`
    : `wider than the animal sitting on it — it extends beyond the animal on both sides`;

  return `CUSHION: A ${cojin.tela} ceremonial cushion resting on a stone ledge. CRITICAL SIZE — this cushion is enormous and heavily overstuffed: it bulges upward under the animal's weight, its sides billow outward, ${ancho}. The cushion is nearly as tall as it is wide — almost a cube of velvet. It deforms slightly under the animal, creating natural fabric folds and tension wrinkles across the top surface. TRIM: A dense wall of gold bullion fringe runs along the ENTIRE bottom edge — thick, heavy, tightly packed tassels hanging straight down like a royal ceremonial altar cloth. One oversized gold tassel hangs prominently at the front corner. A gold embroidered arabesque border frames the top edge of the fringe. The velvet surface has subtle light sheen from the overhead light source.`;
};
