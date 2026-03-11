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

const gemas = {
  masculine: ['dark sapphire', 'golden topaz', 'deep emerald'],
  feminine:  ['white pearl', 'rose ruby', 'deep amethyst'],
  neutral:   ['rich sapphire', 'blood ruby', 'golden topaz', 'dark amethyst', 'deep emerald', 'white pearl']
};

module.exports = function s6_vestuario(estilo, genero, indexHero = null) {
  const generoKey = genero === 'masculine' ? 'masculine'
    : genero === 'feminine' ? 'feminine'
    : 'neutral';

  const pool = mantos[estilo]?.[generoKey] || mantos.realeza.neutral;
  const manto = indexHero !== null ? pool[indexHero % pool.length] : pick(pool);
  const gema = pick(gemas[generoKey]);

  return `MANTLE: ${manto.descripcion}.

TWO SEPARATE PARTS — paint these independently:

PART 1 — ERMINE COLLAR (ALWAYS visible at front, even in dark paintings): Bright white ermine fur with distinct black tail-tips forms wide open lapels framing the animal's chest — like a judge's robes or a king's collar. This ermine is LUMINOUS WHITE — it catches the light source and glows against the dark background. It is the brightest element in the painting. Never hidden, never darkened, always clearly visible at the front of the animal.

PART 2 — VELVET BODY (goes behind only): The velvet drapes over the shoulders and falls backward and to ONE side — it does NOT come to the front, does NOT cover the chest.

CHEST ORNAMENT — ONE ITEM ONLY: A single delicate gold chain — thin, refined links — crosses from one ermine lapel to the other with a ${gema} pendant at the center. Thin and elegant, not thick or heavy.`;
};
