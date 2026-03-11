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

  return `MANTLE: ${manto.descripcion}.

TWO SEPARATE PARTS — treat these independently:

PART 1 — ERMINE COLLAR (always visible at front): A wide white ermine border with black tail-tips frames the animal's chest like an open lapel. This ermine collar is ALWAYS visible at the front of the animal — it never disappears behind the body. It sits like a coat's lapels — one on each side of the chest, open at the center.

PART 2 — VELVET BODY (goes behind): The velvet body of the mantle drapes over the animal's back and falls to ONE side only — pooling on the cushion to the right. It does NOT come to the front. It does NOT cover the chest. Only its shoulder edge is visible where it meets the ermine collar.

CHAIN: A gold chain hangs visibly across the open chest between the two ermine lapels — clearly visible, with a ${gema} pendant at the center. This chain is ALWAYS present and visible.

BROOCH: ${cierre}`;
};
