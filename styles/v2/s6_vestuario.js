const { pick } = require('./utils');

const mantos = {
  realeza: {
    masculine: [
      { descripcion: 'a king\'s deep crimson velvet coronation mantle' },
      { descripcion: 'a rich royal burgundy velvet coronation mantle' },
      { descripcion: 'a deep imperial navy velvet coronation mantle' }
    ],
    feminine: [
      { descripcion: 'a queen\'s rose-pink velvet royal mantle' },
      { descripcion: 'a delicate ivory silk-velvet royal mantle' },
      { descripcion: 'a regal deep violet velvet court mantle' }
    ],
    neutral: [
      { descripcion: 'a crimson velvet royal mantle' },
      { descripcion: 'a rich burgundy velvet royal mantle' },
      { descripcion: 'a royal blue velvet mantle' }
    ]
  },
  barroco: {
    masculine: [
      { descripcion: 'a near-black velvet mantle' },
      { descripcion: 'a dark charcoal velvet mantle' },
      { descripcion: 'a deep burgundy velvet mantle' }
    ],
    feminine: [
      { descripcion: 'a dark charcoal velvet mantle' },
      { descripcion: 'a deep plum velvet mantle' },
      { descripcion: 'a near-black velvet mantle' }
    ],
    neutral: [
      { descripcion: 'a near-black velvet mantle' },
      { descripcion: 'a dark charcoal velvet mantle' },
      { descripcion: 'a deep umber-brown velvet mantle' }
    ]
  },
  renacimiento: {
    masculine: [
      { descripcion: 'a forest-green velvet cape' },
      { descripcion: 'a deep emerald velvet mantle' },
      { descripcion: 'a hunter-green velvet cape' }
    ],
    feminine: [
      { descripcion: 'a sage-green silk-velvet cape' },
      { descripcion: 'an emerald velvet mantle' },
      { descripcion: 'an olive-gold velvet cape' }
    ],
    neutral: [
      { descripcion: 'a forest-green velvet cape' },
      { descripcion: 'a deep emerald velvet mantle' },
      { descripcion: 'a dark olive velvet cape' }
    ]
  }
};

const gemas = ['deep emerald', 'rich sapphire', 'blood ruby', 'golden topaz', 'dark amethyst', 'white pearl'];

module.exports = function s6_vestuario(estilo, genero, indexHero = null) {
  const generoKey = genero === 'masculine' ? 'masculine'
    : genero === 'feminine' ? 'feminine'
    : 'neutral';

  const pool = mantos[estilo]?.[generoKey] || mantos.realeza.neutral;
  const manto = indexHero !== null ? pool[indexHero % pool.length] : pick(pool);
  const gema = pick(gemas);

  return `MANTLE: ${manto.descripcion}.

TWO SEPARATE PARTS:

PART 1 — ERMINE COLLAR (always at front): Wide white ermine with black tail-tips, worn like open coat lapels framing the chest. Always visible at the front. Never disappears.

PART 2 — VELVET BODY (goes behind): The velvet drapes over the shoulders and falls backward and to one side only — pooling on the cushion. Does NOT come to the front. Does NOT cover the chest.

CHEST ORNAMENT — ONE ITEM ONLY: A single gold chain crosses from one ermine lapel to the other — one clean arc of gold links with a ${gema} pendant at the center. This is the ONLY ornament on the chest. No brooch, no cord, no extra chains.`;
};
