// SECCIÓN 6 — VESTUARIO v10.0 (MASTER - GRAVITY & SFUMATO)
// Optimizada para Nano Banana 2: Foco en peso real (gravity-bound), caída orgánica y bordes que se funden en la sombra.

const { pick } = require('./utils');

const atuendos = {
  realeza: [
    {
      cuello: 'Heavy, luxurious bright white ermine fur collar with distinct black tail-tips. The fur is thick and tactile.',
      cuerpo: 'A massive, heavy deep crimson velvet royal mantle. The fabric is gravity-bound, pooling and draping organically with profound weight. Rich gold thread floral embroidery catches the soft light.',
      joya:   'An antique, heavy gold chain resting organically on the chest, featuring a single, deep-set ruby pendant.'
    },
    {
      cuello: 'Voluminous white ermine fur collar, naturally framing the chest with soft, tactile volume.',
      cuerpo: 'A heavy imperial blue velvet mantle. The fabric folds deeply, showing the rich nap of the velvet. Intricate gold arabesque embroidery follows the natural folds.',
      joya:   'A classical gold chain with a large, dark sapphire pendant, resting heavily against the fur.'
    }
  ],
  barroco: [
    {
      cuello: 'Aged, slightly darkened white ermine fur collar, painted with thick impasto brushwork.',
      cuerpo: 'A profoundly dark, heavy burgundy velvet mantle. It emerges from the shadows, draping heavily. Muted, oxidized gold embroidery is woven into the heavy fabric.',
      joya:   'A darkened, antique gold chain with a muted, deep garnet stone.'
    },
    {
      cuello: 'Thick, warm-toned ermine fur lapels, softly catching the candlelight.',
      cuerpo: 'A near-black charcoal velvet mantle, absorbing the light. The heavy fabric falls with sculptural weight, featuring subtle, faded bronze embroidery.',
      joya:   'A heavy, tarnished gold chain with a dark onyx pendant.'
    }
  ],
  renacimiento: [
    {
      cuello: 'Soft, naturalistic ermine fur collar, integrating smoothly with the animal’s own fur.',
      cuerpo: 'A heavy, aged forest-green velvet mantle. The fabric cascades with extreme physical weight, pooling organically. Antique copper and gold botanical embroidery.',
      joya:   'A delicate but heavy Renaissance gold chain with a dark emerald.'
    },
    {
      cuello: 'Thick ermine fur collar with sharp black tips, painted with tactile realism.',
      cuerpo: 'A heavy antique gold velvet mantle. Deep, soft folds show the fabric yielding to gravity. Rich tone-on-tone damask patterns.',
      joya:   'A classic Venetian gold chain with a dark amber pendant.'
    }
  ]
};

module.exports = function s6_vestuario(estilo, numAnimales, indexHero = null) {
  const pool = atuendos[estilo] || atuendos.realeza;
  const atuendo = indexHero !== null ? pool[indexHero % pool.length] : pick(pool);

  return `WARDROBE & FABRIC PHYSICS (CRITICAL): The animal is dressed in royal attire. 
1. COLLAR: ${atuendo.cuello}
2. MANTLE: ${atuendo.cuerpo}
3. JEWELRY: ${atuendo.joya}

WARDROBE GRAVITY & SFUMATO: The clothing MUST NOT look stiff, pasted on, or floating. The velvet mantle must obey gravity, draping heavily over the shoulders and pooling organically onto the cushion below. The fabric yields to the animal's posture. 
SFUMATO EDGES: The outer edges of the velvet mantle must dissolve naturally into the dark background shadows (sfumato). Do not paint hard, cut-out edges. The materiality of the velvet must be rendered with thick, tactile oil brushwork, showing highlights on the peaks of the folds and profound, lost shadows in the deep creases.`;
};
