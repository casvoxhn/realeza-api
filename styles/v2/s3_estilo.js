// SECCIÓN 3 — ESTILO PICTÓRICO v2
// v2 — luz específica y detallada por estilo.
// La dirección, intensidad y comportamiento de la luz se define AQUÍ únicamente.
// s1_lienzo ya no contiene ninguna instrucción de luz.

const estilos = {
  realeza: {
    nombre: "Realeza Imperial",
    referencia: `Style reference: Hyacinthe Rigaud imperial court portrait, circa 1700.
LIGHTING: Powerful warm light from upper right — strikes the face and chest directly, creating bright illuminated zones on the forehead, cheekbones, and ermine collar. The left side of the face falls into soft warm shadow. The light is confident and theatrical — befitting a royal court. Rich saturated colors throughout: deep crimsons, warm golds, luminous ivory whites. The ermine tail-tips are individually crisp and precise. Overall palette: warm, regal, luminous.`
  },

  barroco: {
    nombre: "Gran Maestro Oscuro",
    referencia: `Style reference: Rembrandt van Rijn Dutch Golden Age portrait, circa 1660.
LIGHTING: A single warm candle source from upper left — raking across the subject at a low angle. One side of the face is fully and precisely illuminated: the forehead glows, the cheekbone catches a warm highlight, the whiskers are lit individually against darkness. The opposite side of the face dissolves completely into rich warm shadow — lost edge, no detail. The ermine collar is the brightest element in the painting, glowing white against total darkness. Deep chiaroscuro — the transition from light to shadow is abrupt and dramatic. Muted palette: burnt sienna, raw umber, warm ivory, deep black-brown. Everything emerges from darkness.`
  },

  renacimiento: {
    nombre: "Jardín Dorado",
    referencia: `Style reference: Thomas Gainsborough aristocratic portrait, circa 1770.
LIGHTING: Soft diffused warm light from upper left — enveloping rather than harsh, wrapping around the subject's form naturally. The face is evenly lit with gentle gradients: warm light on the forehead and top of the head, soft shadow under the chin and behind the ears. No harsh transitions — the light is aristocratic and gentle. Loose painterly brushwork in the background, precise and detailed in the face and fur. Warm amber-green palette with natural golden warmth. A sense of natural aristocratic ease and quiet dignity.`
  }
};

module.exports = function s3_estilo(estilo) {
  return estilos[estilo] || estilos.realeza;
};
