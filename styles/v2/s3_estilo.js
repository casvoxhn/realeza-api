// SECCIÓN 3 — ESTILO PICTÓRICO v2
// v2 — luz específica y detallada por estilo, sin contradicciones con s1_lienzo.
// Alias agregados: 'rey' → 'realeza' para compatibilidad con frontend.

const estilos = {
  realeza: {
    nombre: "Realeza Imperial",
    referencia: `Style reference: Hyacinthe Rigaud imperial court portrait, circa 1700.
LIGHTING: Powerful warm light from upper right — strikes the face and chest directly, creating bright illuminated zones on the forehead, cheekbones, and ermine collar. The left side of the face falls into soft warm shadow. The light is confident and theatrical — befitting a royal court. Rich saturated colors throughout: deep crimsons, warm golds, luminous ivory whites. The ermine tail-tips are individually crisp and precise. Overall palette: warm, regal, luminous.`
  },

  barroco: {
    nombre: "Gran Maestro Oscuro",
    referencia: `Style reference: Rembrandt van Rijn Dutch Golden Age portrait, circa 1660.
LIGHTING: A single warm candle source from upper left — raking across the subject at a low angle. One side of the face is fully illuminated: the forehead glows, the cheekbone catches a warm highlight. The opposite side of the face dissolves into rich warm shadow. The ermine collar is the brightest element in the painting, glowing white against darkness. Chiaroscuro — the transition from light to shadow is dramatic but natural. Muted palette: burnt sienna, raw umber, warm ivory, deep black-brown. Everything emerges from darkness.`
  },

  renacimiento: {
    nombre: "Jardín Dorado",
    referencia: `Style reference: Thomas Gainsborough aristocratic portrait, circa 1770.
LIGHTING: Soft diffused warm light from upper left — enveloping rather than harsh, wrapping around the subject's form naturally. The face is lit with gentle gradients: warm light on the forehead and top of the head, soft shadow under the chin and behind the ears. No harsh transitions — the light is aristocratic and gentle. Loose painterly brushwork in the background, precise and detailed in the face and fur. Warm amber-green palette. A sense of natural aristocratic ease.`
  }
};

const ALIAS = {
  rey:         'realeza',
  royal:       'realeza',
  baroque:     'barroco',
  renaissance: 'renacimiento',
};

module.exports = function s3_estilo(estilo) {
  const key = ALIAS[estilo] || estilo;
  return estilos[key] || estilos.realeza;
};
