// SECCIÓN 7 — PROPS (COJÍN)
// Coordinado con el estilo. Colores pre-definidos.
// Tamaño y flecos son FIJOS — nunca cambian.

const { pick } = require('./utils');

const cojines = {
  realeza: [
    { color: 'deep burgundy', descripcion: 'a massive deep burgundy velvet cushion' },
    { color: 'rich gold', descripcion: 'a massive rich gold velvet cushion' },
    { color: 'imperial crimson', descripcion: 'a massive imperial crimson velvet cushion' }
  ],
  barroco: [
    { color: 'near-black', descripcion: 'a massive near-black velvet cushion' },
    { color: 'deep crimson', descripcion: 'a massive deep crimson velvet cushion' },
    { color: 'dark burgundy', descripcion: 'a massive dark burgundy velvet cushion' }
  ],
  renacimiento: [
    { color: 'deep gold', descripcion: 'a massive deep gold velvet cushion' },
    { color: 'warm burgundy', descripcion: 'a massive warm burgundy velvet cushion' },
    { color: 'forest green', descripcion: 'a massive forest-green velvet cushion' }
  ]
};

module.exports = function s7_props(estilo, numAnimales, indexHero = null) {
  const pool = cojines[estilo] || cojines.realeza;
  const cojin = indexHero !== null ? pool[indexHero % pool.length] : pick(pool);

  const tamanoCojin = numAnimales > 1
    ? `${cojin.descripcion} — so large and heavily stuffed it is almost square in its fullness, wide enough to seat all animals comfortably`
    : `${cojin.descripcion} — very heavily stuffed, almost square in its fullness, monumental`;

  return `CUSHION: ${tamanoCojin}, resting on a stone ledge. A dense fringe of gold tassels runs along the entire bottom edge — like a royal ceremonial cushion. One large gold tassel hangs at the front corner. Gold embroidered border with floral arabesque pattern along the top edge of the fringe.`;
};
