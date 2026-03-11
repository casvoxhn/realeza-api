// SECCIÓN 2 — FONDO
// Fijo por estilo. El modelo no decide nada aquí.
const fondos = {
  realeza: `Background: near-black in the upper left corner, graduating diagonally to deep warm amber-gold behind the subject's head and upper right. Pure atmospheric warmth — no objects, no furniture, no architecture, no props of any kind. Only darkness and candlelight atmosphere.`,

  barroco: `Background: near-black on all sides, deepest in the upper corners. A single concentrated pool of warm amber light gathers directly behind the subject's head — like a single candle in a dark room. Pure Rembrandt darkness — no objects, no furniture, no architecture, no props of any kind.`,

  renacimiento: `Background: deep warm umber graduating from near-black at the left edge to soft amber-brown behind the subject's head. A subtle warm haze, like afternoon light through old glass. No objects, no furniture, no architecture, no props of any kind.`
};

module.exports = function s2_fondo(estilo) {
  return fondos[estilo] || fondos.realeza;
};
