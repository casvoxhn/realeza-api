// SECCIÓN 6 — VESTUARIO v7 (ESTÉTICA MATE ANTI-CGI)
// v7 — Ajuste estético de paleta terrosa, eliminación de brillos en joyas y armiño. 
// v6.1 — Mantenido refuerzo CRITICAL ANATOMY PRESERVATION al final.

const { pick } = require('./utils');

const mantos = {
  realeza: {
    masculine: [
      { descripcion: 'a king\'s heavy, muted antique crimson velvet coronation mantle' },
      { descripcion: 'a rich, weighty dark burgundy matte velvet coronation mantle' },
      { descripcion: 'a deep faded Prussian blue velvet coronation mantle with heavy drape' }
    ],
    feminine: [
      { descripcion: 'a queen\'s heavy dusty antique rose velvet royal mantle' },
      { descripcion: 'a delicate but weighty matte warm ivory velvet royal mantle' },
      { descripcion: 'a regal dark plum-violet velvet court mantle pooling heavily' }
    ],
    neutral: [
      { descripcion: 'a heavy desaturated crimson velvet royal mantle' },
      { descripcion: 'a rich aged burgundy velvet royal mantle draping with gravity' },
      { descripcion: 'a weighty muted navy blue velvet mantle' }
    ]
  },
  barroco: { /* igual que antes, asegúrate de aplicar la misma lógica de colores apagados si tienes arrays aquí */ },
  renacimiento: { /* igual que antes, asegúrate de aplicar la misma lógica de colores apagados si tienes arrays aquí */ }
};

const gemas = {
  masculine: ['dark opaque sapphire', 'tarnished golden topaz', 'deep matte emerald'],
  feminine: ['aged warm pearl', 'dark oxidized ruby', 'deep matte amethyst'],
  neutral: ['matte antique sapphire', 'darkened ruby', 'tarnished topaz', 'dark opaque amethyst', 'deep aged emerald', 'warm antique pearl']
};

module.exports = function s6_vestuario(estilo, genero, indexHero = null, hasLace = false) {
  const generoKey = genero === 'masculine' ? 'masculine'
    : genero === 'feminine' ? 'feminine'
    : 'neutral';
  const pool = mantos[estilo]?.[generoKey] || mantos.realeza.neutral;
  const manto = indexHero !== null ? pool[indexHero % pool.length] : pick(pool);
  const gema = pick(gemas[generoKey]);

  let laceDesc = '';
  if (hasLace) {
    laceDesc = `
PART 2a — ANTIQUE LACE TRIM (Integrated edge): A delicate, aged antique lace trim peeks out very subtly from beneath the inner edge of the ermine collar and rests flat upon the heavy velvet cape body. It is soft and drapes naturally with the weight of the cape. Crucially, this is painted with thick oil texture, possessing a warm, yellowed, matte finish without any stark digital white lines.`;
  }

  return `WARDROBE (AESTHETIC LOCK): ${manto.descripcion}. All fabrics must possess a 100% matte finish, painted with thick impasto brushstrokes. ZERO plastic sheen.
${hasLace ? 'THREE' : 'TWO'} SEPARATE PARTS — paint these independently with physical weight:
PART 1 — ERMINE COLLAR (Framing chest): Warm antique ivory ermine fur with distinct black tail-tips forms wide open lapels framing the animal's chest. CRITICAL: The white fur must be painted as warm and aged, absorbing light. Absolutely NO blown-out bright white highlights or glowing CGI lighting.
PART 2 — VELVET BODY (Goes behind only): The velvet drapes heavily over the shoulders and falls backward. It visibly responds to gravity, pooling with deep, tangible folds painted with deep shadows, never specular highlights. It does NOT come to the front, does NOT cover the chest.
${laceDesc}
CHEST ORNAMENT: A single oxidized matte gold chain crosses from one ermine lapel to the other with a ${gema} pendant at the center. The gold and gem are painted organically with zero sharp CGI metallic reflections.

// NUEVO REFUERZO CRÍTICO (agregado al final del wardrobe)
CRITICAL ANATOMY PRESERVATION: Full complete body visible from head to tail tip. No part of the hindquarters, rear legs, or tail may be cropped, cut off, hidden in shadow, fused into the background, or obscured by velvet. The velvet mantle enhances the regal posture but never conceals or truncates the animal's natural form — entire fluffy tail fully visible, extending naturally and blending gracefully with the pooling velvet folds where appropriate.`;
};
