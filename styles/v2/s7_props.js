const { pick } = require('./utils');

const cojines = {
  realeza: [
    { tela: 'deep burgundy velvet', bordado: 'dense gold arabesque embroidery stitched directly into the velvet surface along the upper border — raised gold threadwork with floral and scroll motifs' },
    { tela: 'rich gold velvet', bordado: 'gold-on-gold brocade pattern woven into the velvet — subtle floral damask visible across the entire surface' },
    { tela: 'imperial crimson velvet', bordado: 'heavy gold laurel and acanthus embroidery along the upper border of the cushion face' }
  ],
  barroco: [
    { tela: 'near-black velvet', bordado: 'fine gold thread embroidery along the upper border — restrained floral motifs on dark ground' },
    { tela: 'deep crimson velvet', bordado: 'gold arabesque embroidery stitched into the velvet along the upper border' },
    { tela: 'dark burgundy velvet', bordado: 'gold scroll embroidery along the upper border of the cushion face' }
  ],
  renacimiento: [
    { tela: 'deep gold velvet', bordado: 'rich brocade damask pattern woven across the entire velvet surface — floral and vine motifs in deeper gold' },
    { tela: 'warm burgundy velvet', bordado: 'gold floral embroidery stitched directly into the velvet — dense botanical motifs along the upper border' },
    { tela: 'forest-green velvet', bordado: 'gold and copper thread embroidery with leaf and vine motifs across the cushion face' }
  ]
};

module.exports = function s7_props(estilo, numAnimales, indexHero = null) {
  const pool = cojines[estilo] || cojines.realeza;
  const cojin = indexHero !== null ? pool[indexHero % pool.length] : pick(pool);

  const ancho = numAnimales > 1
    ? `wide enough for all animals — spans nearly the full width of the painting`
    : `wider than the animal — its left and right edges extend beyond the animal on both sides`;

  return `CUSHION CONSTRUCTION: A large ${cojin.tela} ceremonial throne cushion, ${ancho}. 

SHAPE: Rectangular and horizontal — wider than tall. Heavily stuffed so the top surface is slightly rounded and the sides billow outward with the weight of the filling. The cushion is substantial — its height from base to top equals roughly the distance from the animal's paws to its elbows.

SURFACE: ${cojin.bordado}. The velvet has natural light-catching sheen — highlights on the raised areas, deep shadow in the folds.

CONSTRUCTION DETAIL: The cushion has visible fabric tension — deep fold lines where the stuffing pushes against the seams, especially at the corners and along the sides. These are natural stress wrinkles in heavy velvet, not decorative.

TRIM: A twisted gold cord runs along the bottom edge of the cushion — clean, tight, no fringe. One substantial gold tassel hangs from the front bottom corner.

BASE: The cushion rests on a flat stone surface. The stone is cool grey, completely matte, non-reflective. Only a thin sliver of stone is visible below the cushion. NO decorative ledge, NO pedestal, NO architectural base — just flat stone.`;
};
