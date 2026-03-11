// SECCIÓN 7 — PROPS (COJÍN)
// Coordinado con el estilo. Colores pre-definidos.
// Tamaño y flecos son FIJOS — nunca cambian.

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

  return `CUSHION: A ${cojin.tela} ceremonial cushion, ${ancho}. SHAPE AND STRUCTURE: Enormously overstuffed — sides billow outward, top surface bulges upward under the animal's weight. A single central seam runs horizontally across the middle of the cushion from left edge to right edge, dividing it into two symmetrical halves like a classic tufted throne cushion — this seam is clearly visible and slightly indented into the velvet. The fabric gathers naturally around this seam creating a subtle quilted appearance. CRITICAL FRAMING: The ENTIRE cushion must be visible — top, sides, AND full bottom edge with fringe — the cushion is never cropped at the bottom. The bottom fringe and tassel are fully visible inside the frame. TRIM: A dense wall of gold bullion fringe runs along the entire bottom edge — thick, tightly packed tassels hanging straight down. One large gold tassel hangs at the front center-bottom corner. A gold embroidered floral border runs along the top edge of the fringe. LEDGE: Below the cushion is a flat matte stone surface — cool grey, completely non-reflective, zero shine. Only a thin sliver visible. The composition shows the full cushion from top to bottom.`;
};
