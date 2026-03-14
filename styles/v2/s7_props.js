// SECCIÓN 7 — PROPS v9 (SUPPORTIVE, NOT DISTRACTING)

const { pick } = require('./utils');

const cojines = {
  realeza: [
    {
      tela: 'aged burgundy velvet damask',
      bordado: 'subtle antique gold arabesque embroidery'
    },
    {
      tela: 'muted ochre velvet damask',
      bordado: 'restrained woven floral patterning'
    },
    {
      tela: 'deep imperial burgundy velvet',
      bordado: 'soft oxidized gold acanthus embroidery'
    }
  ],
  barroco: [
    {
      tela: 'near-black aged velvet',
      bordado: 'minimal muted bronze embroidery'
    },
    {
      tela: 'deep rusted crimson velvet',
      bordado: 'faded gold arabesque embroidery'
    },
    {
      tela: 'dark charcoal velvet damask',
      bordado: 'subtle darkened gold scrollwork'
    }
  ],
  renacimiento: [
    {
      tela: 'antique bronze velvet damask',
      bordado: 'soft tone-on-tone botanical patterning'
    },
    {
      tela: 'faded burgundy velvet damask',
      bordado: 'restrained antique thread floral detailing'
    },
    {
      tela: 'muted forest-green velvet',
      bordado: 'subtle oxidized copper arabesque motifs'
    }
  ]
};

module.exports = function s7_props(estilo, numAnimales, indexHero = null) {
  const pool = cojines[estilo] || cojines.realeza;
  const cojin = indexHero !== null ? pool[indexHero % pool.length] : pick(pool);

  const escala = numAnimales > 1
    ? `broad enough to support the group naturally`
    : `generous enough to support the subject comfortably without overpowering the portrait`;

  return `CUSHION DIRECTION:
A luxurious historical velvet cushion, ${escala}, serving as a noble painted base beneath the subject.

FORM:
Soft, plush, relaxed, and believable.
The cushion must compress naturally under the animal’s weight with a graceful central indentation.
No rigid geometry.
No boxy edges.
No inflated balloon-like puffiness.

SURFACE:
Made of ${cojin.tela} with ${cojin.bordado}.
The patterning must remain elegant and secondary, never distracting from the face.
Visible oil-paint texture is essential.

PAINT HANDLING:
The cushion must be painted in matte, rich, tactile brushwork.
No plastic sheen.
No modern upholstery look.
No excessive decorative sharpness.

COMPOSITION RULE:
The cushion anchors the lower composition and may bleed softly into the bottom edge of the canvas.
No visible floor.
No pedestal.
No hard staging elements.
Its job is to support the portrait, not compete with the subject.`;
};
