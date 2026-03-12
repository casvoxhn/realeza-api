// SECCIÓN 2 — FONDO
// Fijo por estilo. El modelo no decide nada aquí.
// v3 — alias de estilos agregados para manejar variantes del frontend.
// 'rey' → 'realeza', 'baroque' → 'barroco', 'renaissance' → 'renacimiento'

const fondos = {
  realeza: `Background: near-black in the upper left corner, graduating diagonally to deep warm amber-gold behind the subject's head and upper right. Pure atmospheric warmth — no objects, no furniture, no architecture, no props of any kind. Only darkness and candlelight atmosphere.`,

  barroco: `Background: near-black on ALL sides and corners — 80% of the canvas is pure deep black. A single tight shaft of warm amber-gold light strikes directly behind the subject's head only — creating a small luminous halo against total darkness. Extreme Rembrandt chiaroscuro. The darkness is absolute and dominant. No objects, no furniture, no architecture, no props of any kind. This is NOT a scene — there is no room, no candle, no chair, no table, no window. Only the animal, its mantle, the cushion, and pure darkness.`,

  renacimiento: `Background: a grand interior barely suggested — on the left side, a single dark marble column or heavy draped curtain emerges from deep shadow, painted with almost no detail, dissolving immediately into warm darkness. It is a presence, not an object — more felt than seen. The right side is pure deep warm brown-black atmosphere. Behind the subject's head, a very subtle luminous warmth — amber and sienna — as if distant candlelight touches only that zone. The overall background is 85% dark, with only the faintest architectural suggestion on one side. No bright elements. No landscape. No sky. No decorative details. The architecture is a shadow of itself.`,
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
