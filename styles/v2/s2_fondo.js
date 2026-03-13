// SECCIÓN 2 — FONDO v4 (ESTÉTICA MATE ANTI-CGI)
// Fijo por estilo. El modelo no decide nada aquí.
// v4 — Inyección de textura de lienzo y pinceladas. Se elimina el negro digital plano
// y los halos de luz tipo LED, forzando un acabado de óleo envejecido y barnizado.

const fondos = {
  realeza: `Background: heavily textured dark umber-black underpainting in the upper left corner, graduating diagonally to thick, matte amber-gold brushstrokes behind the subject's head and upper right. Pure atmospheric painted warmth — no objects, no furniture, no architecture, no props of any kind. Only thick painted darkness and matte candlelight atmosphere.`,

  barroco: `Background: rich, layered dark umber-black on ALL sides and corners — 80% of the canvas is pure deep painted shadow. A single tight shaft of warm amber-gold painted light strikes directly behind the subject's head only — creating a small sfumato halo against total darkness. Extreme Rembrandt chiaroscuro achieved with visible brushstrokes. The darkness is heavily varnished, absorbing light, never a flat digital black. No objects, no furniture, no architecture, no props of any kind. This is NOT a scene — there is no room, no candle. Only the animal, its mantle, the cushion, and pure textured darkness.`,

  renacimiento: `Background: a grand interior barely suggested through thick, dark oil brushstrokes — on the left side, a single dark marble column or heavy draped curtain emerges from deep shadow, painted with almost no detail, dissolving immediately into warm varnished darkness. It is a presence, not an object — more felt than seen. The right side is pure deep warm brown-black painted atmosphere. Behind the subject's head, a very subtle matte luminous warmth — amber and sienna — as if distant candlelight touches only that zone via soft impasto strokes. The overall background is 85% dark underpainting, with only the faintest architectural suggestion. No bright digital elements. No landscape. No sky. The architecture is a painted shadow of itself.`,
};

const ALIAS = {
  rey:          'realeza',
  royal:        'realeza',
  baroque:      'barroco',
  renaissance:  'renacimiento',
  renacer:      'renacimiento',
};

module.exports = function s2_fondo(estilo) {
  const key = ALIAS[estilo] || estilo;
  return fondos[key] || fondos.realeza;
};
