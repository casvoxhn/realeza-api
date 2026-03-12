// SECCIÓN 6 — VESTUARIO v5
// v5 — Removido el cuello de encaje a petición tuya.
// Se mantienen las instrucciones de gravedad y peso físico en la caída del manto.

const { pick } = require('./utils');

const mantos = {
  realeza: {
    masculine: [
      { descripcion: 'a king\'s heavy, deep crimson velvet coronation mantle' },
      { descripcion: 'a rich, weighty royal burgundy velvet coronation mantle' },
      { descripcion: 'a deep imperial navy velvet coronation mantle with heavy drape' }
    ],
    feminine: [
      { descripcion: 'a queen\'s heavy rose-pink velvet royal mantle' },
      { descripcion: 'a delicate but weighty ivory silk-velvet royal mantle' },
      { descripcion: 'a regal deep violet velvet court mantle pooling heavily' }
    ],
    neutral: [
      { descripcion: 'a heavy crimson velvet royal mantle' },
      { descripcion: 'a rich burgundy velvet royal mantle draping with gravity' },
      { descripcion: 'a weighty royal blue velvet mantle' }
    ]
  },
  barroco: {
    masculine: [
      { descripcion: 'a near-black heavy velvet mantle' },
      { descripcion: 'a dark charcoal thick velvet mantle' },
      { descripcion: 'a deep burgundy heavy velvet mantle' }
    ],
    feminine: [
      { descripcion: 'a dark charcoal heavy velvet mantle' },
      { descripcion: 'a deep plum velvet mantle pooling naturally' },
      { descripcion: 'a near-black weighty velvet mantle' }
    ],
    neutral: [
      { descripcion: 'a near-black heavy velvet mantle' },
      { descripcion: 'a dark charcoal thick velvet mantle' },
      { descripcion: 'a deep umber-brown heavy velvet mantle' }
    ]
  },
  renacimiento: {
    masculine: [
      { descripcion: 'a heavy forest-green velvet cape' },
      { descripcion: 'a deep emerald velvet mantle draping heavily' },
      { descripcion: 'a hunter-green thick velvet cape' }
    ],
    feminine: [
      { descripcion: 'a weighty sage-green silk-velvet cape' },
      { descripcion: 'an emerald velvet mantle pooling with gravity' },
      { descripcion: 'an heavy olive-gold velvet cape' }
    ],
    neutral: [
      { descripcion: 'a heavy forest-green velvet cape' },
      { descripcion: 'a deep emerald thick velvet mantle' },
      { descripcion: 'a dark olive weighty velvet cape' }
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

  return `WARDROBE: ${manto.descripcion}.

TWO SEPARATE PARTS — paint these independently with physical weight:

PART 1 — ERMINE COLLAR (Framing chest): Bright white ermine fur with distinct black tail-tips forms wide open lapels framing the animal's chest. This ermine catches the soft light beautifully. Never hidden, always clearly visible at the front.

PART 2 — VELVET BODY (Goes behind only): The velvet drapes heavily over the shoulders and falls backward. It visibly responds to gravity, pooling with deep, tangible folds. It does NOT come to the front, does NOT cover the chest.

CHEST ORNAMENT: A single delicate gold chain crosses from one ermine lapel to the other with a ${gema} pendant at the center.`;
};
