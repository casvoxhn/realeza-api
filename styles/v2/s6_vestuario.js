// SECCIÓN 6 — VESTUARIO
const { pick } = require('./utils');

const mantos = {
  realeza: {
    masculine: [
      { color: 'deep crimson', descripcion: 'a king\'s deep crimson velvet coronation mantle' },
      { color: 'royal burgundy', descripcion: 'a rich royal burgundy velvet coronation mantle' },
      { color: 'imperial navy', descripcion: 'a deep imperial navy velvet coronation mantle' }
    ],
    feminine: [
      { color: 'rose-pink', descripcion: 'a queen\'s rose-pink velvet royal mantle' },
      { color: 'soft ivory', descripcion: 'a delicate ivory silk-velvet royal mantle' },
      { color: 'deep violet', descripcion: 'a regal deep violet velvet court mantle' }
    ],
    neutral: [
      { color: 'crimson', descripcion: 'a crimson velvet royal mantle' },
      { color: 'burgundy', descripcion: 'a rich burgundy velvet royal mantle' },
      { color: 'deep blue', descripcion: 'a royal blue velvet mantle' }
    ]
  },
  barroco: {
    masculine: [
      { color: 'near-black', descripcion: 'a near-black velvet mantle' },
      { color: 'dark charcoal', descripcion: 'a dark charcoal velvet mantle' },
      { color: 'deep burgundy', descripcion: 'a deep burgundy velvet mantle' }
    ],
    feminine: [
      { color: 'dark charcoal', descripcion: 'a dark charcoal velvet mantle' },
      { color: 'deep plum', descripcion: 'a deep plum velvet mantle' },
      { color: 'near-black', descripcion: 'a near-black velvet mantle' }
    ],
    neutral: [
      { color: 'near-black', descripcion: 'a near-black velvet mantle' },
      { color: 'dark charcoal', descripcion: 'a dark charcoal velvet mantle' },
      { color: 'deep umber', descripcion: 'a deep umber-brown velvet mantle' }
    ]
  },
  renacimiento: {
    masculine: [
      { color: 'forest green', descripcion: 'a forest-green velvet cape' },
      { color: 'deep emerald', descripcion: 'a deep emerald velvet mantle' },
      { color: 'hunter green', descripcion: 'a hunter-green velvet cape' }
    ],
    feminine: [
      { color: 'sage green', descripcion: 'a sage-green silk-velvet cape' },
      { color: 'soft emerald', descripcion: 'an emerald velvet mantle' },
      { color: 'olive gold', descripcion: 'an olive-gold velvet cape' }
    ],
    neutral: [
      { color: 'forest green', descripcion: 'a forest-green velvet cape' },
      { color: 'deep emerald', descripcion: 'a deep emerald velvet mantle' },
      { color: 'dark olive', descripcion: 'a dark olive velvet cape' }
    ]
  }
};

const gemas = ['deep emerald', 'rich sapphire', 'blood ruby', 'golden topaz', 'dark amethyst', 'white pearl'];

const cierres = {
  realeza: 'A large gold medallion brooch with a deep gemstone fastens the ermine at the center of the chest.',
  barroco: 'A fine gold chain crosses from one ermine lapel to the other with a single luminous pearl at the center.',
  renacimiento: 'A heavy braided gold cord with a decorative knot fastens both sides of the cape at the center of the chest.'
};

module.exports = function s6_vestuario(estilo, genero, indexHero = null) {
  const generoKey = genero === 'masculine' ? 'masculine'
    : genero === 'feminine' ? 'feminine'
    : 'neutral';

  const pool = mantos[estilo]?.[generoKey] || mantos.realeza.neutral;
  const manto = indexHero !== null ? pool[indexHero % pool.length] : pick(pool);
  const gema = pick(gemas);
  const cierre = cierres[estilo] || cierres.realeza;

  return `MANTLE: ${manto.descripcion} with wide white ermine border — black tail-tips individually painted. CRITICAL DRAPE: The mantle sits only on the animal's shoulders and falls BACKWARD and to one side only — like a cape tossed back by a king. The bulk of the velvet pools behind and beside the animal on the cushion. The mantle does NOT wrap around the front, does NOT cover the chest, does NOT fall forward. The animal's full chest and front are visible and unobstructed. Only the ermine collar is visible at the front — the rest goes behind.

CHAIN: A gold chain crosses the ermine collar from shoulder to shoulder — hanging at the center of the chest with a ${gema} pendant.

BROOCH: ${cierre}`;
};
