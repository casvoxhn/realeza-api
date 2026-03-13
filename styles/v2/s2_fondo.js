// SECCIÓN 2 — FONDO v5 (ESTÉTICA MUSEO ENVEJECIDA)
// v5 — Upgrade Museo: Refuerzo de bases pictóricas envejecidas (umber/bitumen) en lugar de negro plano digital. Textura de lienzo y barniz viejo visible. Sfumato extremo reforzado.

const fondos = {
  realeza: `Background: heavily textured aged umber-black underpainting in the upper left, graduating diagonally to thick, matte, aged amber-gold brushstrokes behind the subject's head. Displaying distinct antique craquelure age cracks and a thick, uneven varnish patina. Pure atmospheric painted warmth with zero objects. Only textured, painted darkness.`,

  barroco: `Background: rich, layered bases of aged bitumen and bone-black on ALL sides and corners — 80% of the canvas is pure deep painted shadow with distinct craquelure texture. A single tight shaft of warm amber-gold painted light strikes behind the subject's head, creating a small, heavily diffused sfumato halo that dissolves instantly into the profound, textured darkness. The edges of the animal melt completely into the background shadows. Extreme Rembrandt chiaroscuro with thick impasto brushwork, absolutely zero flat digital black areas.`,

  renacimiento: `Background: a grand interior barely suggested through thick, dark oil brushstrokes and glazes — a dark marble column or heavy draped curtain emerges from deep shadow on the left, painted with almost no detail, dissolving immediately into textured, varnished darkness via extreme sfumato. The architecture is a painted shadow with distinct age cracks. Right side is pure deep warm brown-black painted atmosphere. Behind the subject's head, a very subtle matte luminous warmth, amber and sienna, touched by distant candlelight via soft, heavy impasto strokes. 85% dark, textured underpainting.`,
};

const ALIAS = {
  rey:          'realeza',
  royal:       'realeza',
  baroque:     'barroco',
  renaissance:  'renacimiento',
  renacer:      'renacimiento',
};

module.exports = function s2_fondo(estilo) {
  const key = ALIAS[estilo] || estilo;
  return fondos[key] || fondos.realeza;
};
