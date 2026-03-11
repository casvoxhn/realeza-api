// SECCIÓN 6 — VESTUARIO
// Manto + armiño + cadena cruzada.
// Variables controladas: color del manto (3 por estilo), género.
// El modelo NO decide cómo cae el manto ni el tipo de cierre.

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

// Gemas pre-definidas para la cadena
const gemas = ['deep emerald', 'rich sapphire', 'blood ruby', 'golden topaz', 'dark amethyst', 'white pearl'];

// Cierre del manto por estilo — fijo, no variable
const cierres = {
  realeza: 'A large gold medallion brooch with a deep gemstone fastens the ermine at the center of the chest — drawing both lapels together into a single noble clasp.',
  barroco: 'A fine gold chain crosses from one ermine lapel to the other — bridging the chest with a single luminous pearl at the center.',
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

  return `MANTLE: ${manto.descripcion} with wide white ermine border — black tail-tips individually painted. Draped dramatically behind and to one side — as if arranged by a studio painter before the sitting. The heavy velvet falls away from the animal with natural weight, not around it. The ermine border frames the chest opening, leaving the chest bare.

CHAIN: A visible gold chain crosses from one side of the ermine collar to the other — hanging at the center of the chest with a ${gema} pendant. The chain has weight and presence.

BROOCH: ${cierre}`;
};
