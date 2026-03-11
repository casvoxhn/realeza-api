// SECCIÓN 2 — FONDO
// Fijo por estilo. El modelo no decide nada aquí.
const fondos = {
  realeza: `Background: near-black in the upper left corner, graduating diagonally to deep warm amber-gold behind the subject's head and upper right. Pure atmospheric warmth — no objects, no furniture, no architecture, no props of any kind. Only darkness and candlelight atmosphere.`,

  barroco: `Background: near-black on ALL sides and corners — 80% of the canvas is pure deep black. A single tight shaft of warm amber-gold light strikes directly behind the subject's head only — creating a small luminous halo against total darkness. Extreme Rembrandt chiaroscuro. The darkness is absolute and dominant. No objects, no furniture, no architecture, no props of any kind. This is NOT a scene — there is no room, no candle, no chair, no table, no window. Only the animal, its mantle, the cushion, and pure darkness.`,

  renacimiento: `Background: rich warm Venetian atmosphere in the style of Titian — deep golden ochre and burnt sienna tones that glow from within, as if sunlight is trapped in the paint itself. The upper corners dissolve into warm amber-brown darkness while the area behind the subject's head radiates with a luminous golden warmth. Tonal painting — colors blend continuously into one unified glowing atmosphere. No objects, no furniture, no architecture, no props of any kind.`
};

module.exports = function s2_fondo(estilo) {
  return fondos[estilo] || fondos.realeza;
};
