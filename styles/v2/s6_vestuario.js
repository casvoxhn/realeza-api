// SECCIÓN 6 — VESTUARIO v7
// v7 — Corregido el "efecto pingüino/masa amorfa": 
//      1. Se eliminó la separación estricta de "PART 1 y PART 2" para permitir un drapeado orgánico adaptado a la pose.
//      2. Se agregó lógica de "Contraste Crítico" para evitar cuellos de armiño blanco en mascotas blancas.
// v6 — Reintroducción selectiva del encaje antiguo (hasLace), pero como ribete suave (trim) bajo el armiño.
// v5 — Removido el cuello de encaje rígido (ruff) por completo.

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

module.exports = function s6_vestuario(estilo, genero, indexHero = null, hasLace = false) {
  const generoKey = genero === 'masculine' ? 'masculine'
    : genero === 'feminine' ? 'feminine'
    : 'neutral';

  const pool = mantos[estilo]?.[generoKey] || mantos.realeza.neutral;
  const manto = indexHero !== null ? pool[indexHero % pool.length] : pick(pool);
  const gema = pick(gemas[generoKey]);

  // Generamos la descripción del "encaje bueno" si hasLace es true
  let laceDesc = '';
  if (hasLace) {
    laceDesc = `\nANTIQUE LACE ACCENT: A delicate, aged antique lace trim peeks out very subtly from beneath the inner edge of the collar. It rests flat upon the heavy velvet and drapes naturally with gravity, following the contours of the animal's chest.`;
  }

  // Ensamblamos el string dinámicamente con las nuevas reglas orgánicas y de contraste
  return `WARDROBE: ${manto.descripcion}.

ORGANIC DRAPING (CRITICAL): The mantle is a single, integrated garment. It drapes naturally and organically over the animal's true anatomy, responding to gravity and flowing seamlessly with the specific pose. Do NOT force unnatural separation between the chest and the back. The clothing must obey the animal's physical posture.

COLLAR & TRIM: The mantle features a thick, luxurious fur collar and trim. CRITICAL CONTRAST RULE: Use bright white ermine with distinct black tail-tips, BUT if the animal's natural fur is white, light-colored, or very fluffy (like a white Persian cat), you MUST replace the ermine with a contrasting dark sable fur OR a thick, heavy gold embroidered border. There MUST be a clear visual separation between the animal's body and the clothing.

CHEST ORNAMENT: A delicate gold chain rests naturally across the upper chest with a ${gema} pendant at the center, integrating flawlessly with the fur and fabric.${laceDesc}`;
};
