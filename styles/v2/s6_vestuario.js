// SECCIÓN 6 — VESTUARIO v13.0 (ROYAL CAPE & OUTER LACE TRIM)
// v13.0 — Cero mangas. Patas descubiertas. Manto cayendo hacia atrás.
// CORRECCIÓN CRÍTICA: CERO COLLARINES DE ENCAJE. El encaje va EXCLUSIVAMENTE en los bordes exteriores de la capa de terciopelo.

const { pick } = require('./utils');

const atuendos = {
  realeza: [
    {
      cuello: 'A thick, luxurious white ermine fur collar with black tail-tips. STRICTLY NO lace around the neck.',
      cuerpo: 'A heavy, sweeping deep crimson velvet royal mantle (cape). NO SLEEVES. The front legs and paws MUST remain completely bare and visible. The velvet cape drapes elegantly backwards. Delicate antique white lace trim runs exclusively along the outer borders and edges of the velvet mantle. Rich gold floral embroidery.',
      joya:   'An antique, heavy gold chain with a ruby pendant resting directly on the chest fur.'
    },
    {
      cuello: 'Elegant white ermine fur collar. STRICTLY NO lace around the neck.',
      cuerpo: 'An imperial blue velvet royal mantle (cape). NO SLEEVES. The front legs and paws are completely bare. The heavy fabric drapes nobly backwards, with subtle lace trimming strictly along the outer seams of the cape. Complex gold arabesque embroidery.',
      joya:   'A classical gold chain with a large sapphire pendant.'
    }
  ],
  barroco: [
    {
      cuello: 'Aged white ermine fur collar. STRICTLY NO lace around the neck.',
      cuerpo: 'A deeply dark, burgundy velvet mantle (cape). NO SLEEVES. Front paws and legs are bare. The heavy velvet drapes backward over the animal’s back. Fine, aged lace trim details the extreme outer edges of the velvet garment. Oxidized gold embroidery.',
      joya:   'A darkened gold chain with a deep garnet stone.'
    },
    {
      cuello: 'Warm-toned ermine fur lapels. STRICTLY NO lace around the neck.',
      cuerpo: 'A near-black charcoal velvet royal cape. NO SLEEVES. Front legs bare. Sculptural folds drape backward. Muted antique lace trim on the extreme outer borders of the cape. Faded bronze embroidery.',
      joya:   'A heavy, tarnished gold chain with a dark onyx pendant.'
    }
  ],
  renacimiento: [
    {
      cuello: 'Soft ermine fur collar integrating smoothly with the animal’s own fur. STRICTLY NO lace around the neck.',
      cuerpo: 'A forest-green velvet mantle (cape). NO SLEEVES. Front legs completely bare. The velvet cascades backwards. Delicate Renaissance lace trims the outer edges of the velvet beautifully. Antique copper botanical embroidery.',
      joya:   'A heavy Renaissance gold chain with a dark emerald.'
    },
    {
      cuello: 'Thick ermine fur collar with sharp black tips. STRICTLY NO lace around the neck.',
      cuerpo: 'An antique gold velvet royal cape. NO SLEEVES. Front paws bare. Deep folds drape backward. Classic white lace trimming the outer hems of the velvet. Rich tone-on-tone damask patterns.',
      joya:   'A classic Venetian gold chain with a dark amber pendant.'
    }
  ]
};

module.exports = function s6_vestuario(estilo, numAnimales, indexHero = null) {
  const pool = atuendos[estilo] || atuendos.realeza;
  const atuendo = indexHero !== null ? pool[indexHero % pool.length] : pick(pool);

  return `WARDROBE CONSTRUCTION (CRITICAL): The animal is wearing a classical Royal Cape/Mantle. It is NOT wearing a tailored suit with sleeves.
1. COLLAR: ${atuendo.cuello}
2. ROYAL MANTLE: ${atuendo.cuerpo}
3. JEWELRY: ${atuendo.joya}

WARDROBE PHYSICS: STRICTLY NO SLEEVES. The animal's front legs and paws must be completely uncovered, resting naturally on the cushion. The velvet mantle rests on the shoulders and drapes backward. ABSOLUTELY NO lace collars around the neck. Any lace is restricted strictly to the outer hems and edges of the velvet mantle. The outer edges of the mantle must dissolve naturally into the dark shadows (sfumato).`;
};
