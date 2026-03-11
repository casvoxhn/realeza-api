// SECCIÓN 3 — ESTILO PICTÓRICO
// 3 estilos fijos. Cada uno define referencia de pintor, paleta y luz.
const estilos = {
  realeza: {
    nombre: "Realeza Imperial",
    referencia: `Style reference: Hyacinthe Rigaud imperial court portrait, circa 1700. Powerful warm light from upper right. Rich saturated colors — deep crimsons, golds, ivory whites. Ermine tail-tips individually painted with precision. The overall palette is warm, regal, and luminous.`
  },

  barroco: {
    nombre: "Gran Maestro Oscuro",
    referencia: `Style reference: Rembrandt van Rijn Dutch Golden Age portrait, circa 1660. Single candle source from upper left — one side of the face fully illuminated, the other dissolving into rich warm shadow. Deep chiaroscuro. Muted palette: burnt sienna, raw umber, warm ivory, deep black-brown. The fur and fabric emerge from darkness.`
  },

  renacimiento: {
    nombre: "Jardín Dorado",
    referencia: `Style reference: Thomas Gainsborough aristocratic portrait, circa 1770. Soft diffused warm light from upper left. Painterly loose brushwork in the background, precise detail in the face. Warm amber-green palette. A sense of natural aristocratic ease.`
  }
};

module.exports = function s3_estilo(estilo) {
  return estilos[estilo] || estilos.realeza;
};
