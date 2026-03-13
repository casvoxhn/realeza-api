// SECCIÓN 6 — VESTUARIO v6.1
// v6.1 — Agregado refuerzo CRITICAL ANATOMY PRESERVATION al final para forzar visibilidad completa del cuerpo y cola
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
  barroco: { /* igual que antes */ },
  renacimiento: { /* igual que antes */ }
};

const gemas = {
  masculine: ['dark sapphire', 'golden topaz', 'deep emerald'],
  feminine: ['white pearl', 'rose ruby', 'deep amethyst'],
  neutral: ['rich sapphire', 'blood ruby', 'golden topaz', 'dark amethyst', 'deep emerald', 'white pearl']
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
PART 2a — ANTIQUE LACE TRIM (Integrated edge): A delicate, aged antique lace trim peeks out very subtly from beneath the inner edge of the ermine collar and rests flat upon the heavy velvet cape body. It is soft and drapes naturally with the weight of the cape, following the gravity and contours of the animal's chest. Crucially, this is a soft, integrated trim lying flat, NOT a stiff, upright, medical-style neck ruff.`;
  }

  return `WARDROBE: ${manto.descripcion}.
${hasLace ? 'THREE' : 'TWO'} SEPARATE PARTS — paint these independently with physical weight:
PART 1 — ERMINE COLLAR (Framing chest): Bright white ermine fur with distinct black tail-tips forms wide open lapels framing the animal's chest. This ermine catches the soft light beautifully. Never hidden, always clearly visible at the front.
PART 2 — VELVET BODY (Goes behind only): The velvet drapes heavily over the shoulders and falls backward. It visibly responds to gravity, pooling with deep, tangible folds. It does NOT come to the front, does NOT cover the chest.
${laceDesc}
CHEST ORNAMENT: A single delicate gold chain crosses from one ermine lapel to the other with a ${gema} pendant at the center.

// NUEVO REFUERZO CRÍTICO (agregado al final del wardrobe)
CRITICAL ANATOMY PRESERVATION: Full complete body visible from head to tail tip. No part of the hindquarters, rear legs, or tail may be cropped, cut off, hidden in shadow, fused into the background, or obscured by velvet. The velvet mantle enhances the regal posture but never conceals or truncates the animal's natural form — entire fluffy tail fully visible, extending naturally and blending gracefully with the pooling velvet folds where appropriate.`;
};
