// SECCIÓN 7 — PROPS (COJÍN)
// Coordinado con el estilo. Colores pre-definidos.

const { pick } = require('./utils');

const cojines = {
  realeza: [
    { tela: 'deep burgundy velvet' },
    { tela: 'rich gold velvet' },
    { tela: 'imperial crimson velvet' }
  ],
  barroco: [
    { tela: 'near-black velvet' },
    { tela: 'deep crimson velvet' },
    { tela: 'dark burgundy velvet' }
  ],
  renacimiento: [
    { tela: 'deep gold velvet' },
    { tela: 'warm burgundy velvet' },
    { tela: 'forest-green velvet' }
  ]
};

module.exports = function s7_props(estilo, numAnimales, indexHero = null) {
  const pool = cojines[estilo] || cojines.realeza;
  const cojin = indexHero !== null ? pool[indexHero % pool.length] : pick(pool);

  const ancho = numAnimales > 1
    ? `wide enough to seat all animals side by side with room to spare — spans nearly the full width of the composition`
    : `wider than the animal on it — extends visibly beyond the animal on both left and right sides`;

  return `CUSHION: A ${cojin.tela} ceremonial cushion, ${ancho}. Enormously overstuffed — sides billow outward, top surface bulges upward. A single central seam runs horizontally across the middle dividing it into two symmetrical halves — clearly visible and slightly indented into the velvet, like a classic tufted throne cushion. TRIM: A narrow gold twisted cord runs along the bottom edge of the cushion — clean, tight, elegant. One single gold tassel hangs at the front corner. A gold embroidered floral border is stitched directly onto the velvet surface just above the cord. NO hanging fringe, NO tassels along the bottom edge. LEDGE: Flat matte cool grey stone beneath — zero reflection, zero shine. Thin sliver visible below the cushion.`;
};
