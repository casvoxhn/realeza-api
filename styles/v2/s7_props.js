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
    ? `wide enough to seat all animals side by side with room to spare`
    : `wider than the animal on it — extends beyond the animal on both sides`;

  return `CUSHION: A ${cojin.tela} ceremonial cushion, ${ancho}. VOLUME: Massively overstuffed — the cushion stands as tall as the animal's chest height, sides billow outward like a cube of velvet. The top surface is not flat — it rounds upward under the animal's weight creating deep fabric folds. A single central seam runs horizontally across the middle, dividing it into two symmetrical halves — slightly indented, tufted throne cushion style. TRIM: A gold twisted cord runs along the bottom edge — clean and tight. One gold tassel at the front corner. Gold embroidered floral border stitched directly onto the velvet just above the cord. NO hanging fringe. LEDGE: Flat matte cool grey stone beneath — zero reflection, zero shine.`;
};
