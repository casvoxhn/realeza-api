// SECCIÓN 6 — VESTUARIO v12.0 (ROYAL CAPE & LACE COLLAR)
// v12.0 — Vuelta al Manto Real clásico. ¡CERO MANGAS! Patas delanteras descubiertas.
// Se agrega el cuello de encaje asomando bajo el armiño (Estilo Fable).

const { pick } = require('./utils');

const atuendos = {
  realeza: [
    {
      cuello: 'A thick, luxurious white ermine fur collar with black tail-tips. A delicate, ruffled antique white lace collar peeks out elegantly from underneath the fur, framing the neck.',
      cuerpo: 'A heavy, sweeping deep crimson velvet royal mantle (cape). NO SLEEVES. The front legs and paws MUST remain completely bare and visible. The velvet cape drapes elegantly over the shoulders and flows gracefully down the animal’s back, featuring rich gold floral embroidery.',
      joya:   'An antique, heavy gold chain with a ruby pendant resting directly on the chest fur.'
    },
    {
      cuello: 'Elegant white ermine fur collar. A subtle Renaissance lace collar sits just below the fur.',
      cuerpo: 'An imperial blue velvet royal mantle (cape). NO SLEEVES. The front legs are completely bare. The heavy fabric drapes nobly over the back and shoulders, adorned with complex gold arabesque embroidery.',
      joya:   'A classical gold chain with a large sapphire pendant.'
    }
  ],
  barroco: [
    {
      cuello: 'Aged white ermine fur collar. A muted, antique lace collar frames the lower edge of the fur.',
      cuerpo: 'A deeply dark, burgundy velvet mantle (cape). NO SLEEVES. Front paws and legs are bare. The heavy velvet emerges from the dark background, draping heavily over the animal’s back. Oxidized gold embroidery.',
      joya:   'A darkened gold chain with a deep garnet stone.'
    },
    {
      cuello: 'Warm-toned ermine fur lapels with a subtle, aged lace trim underneath.',
      cuerpo: 'A near-black charcoal velvet royal cape. NO SLEEVES. Front legs bare. Sculptural folds drape over the back, featuring faded bronze embroidery.',
      joya:   'A heavy, tarnished gold chain with a dark onyx pendant.'
    }
  ],
  renacimiento: [
    {
      cuello: 'Soft ermine fur collar. An exquisite, intricate Venetian lace collar peeks out below the fur.',
      cuerpo: 'A forest-green velvet mantle (cape). NO SLEEVES. Front legs completely bare. The velvet cascades with extreme physical weight over the back. Antique copper and gold botanical embroidery.',
      joya:   'A heavy Renaissance gold chain with a dark emerald.'
    },
    {
      cuello: 'Thick ermine fur collar with sharp black tips and a classic white lace collar underneath.',
      cuerpo: 'An antique gold velvet royal cape. NO SLEEVES. Front paws bare. Deep, soft folds drape backwards, showing rich tone-on-tone damask patterns.',
      joya:   'A classic Venetian gold chain with a dark amber pendant.'
    }
  ]
};

module.exports = function s6_vestuario(estilo, numAnimales, indexHero = null) {
  const pool = atuendos[estilo] || atuendos.realeza;
  const atuendo = indexHero !== null ? pool[indexHero % pool.length] : pick(pool);

  return `WARDROBE CONSTRUCTION (CRITICAL): The animal is wearing a classical Royal Cape/Mantle. It is NOT wearing a tailored suit with sleeves. 
1. COLLAR & LACE: ${atuendo.cuello}
2. ROYAL MANTLE: ${atuendo.cuerpo}
3. JEWELRY: ${atuendo.joya}

WARDROBE PHYSICS: STRICTLY NO SLEEVES. The animal's front legs and paws must be completely uncovered, resting naturally on the cushion. The velvet mantle rests on the shoulders and drapes backwards. The outer edges of the mantle in the background must dissolve naturally into the dark shadows (sfumato).`;
};
