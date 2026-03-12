// SECCIÓN 3 — ESTILO PICTÓRICO v3
// v3 — luz suavizada en todos los estilos para eliminar el brillo plástico.
// La luz es siempre difusa y envolvente — nunca dura ni especular.
// Alias mantenidos para compatibilidad con frontend.

const estilos = {
  realeza: {
    nombre: "Realeza Imperial",
    referencia: `Style reference: Hyacinthe Rigaud imperial court portrait, circa 1700.
LIGHTING: Warm diffused light from upper right — soft and enveloping, striking the face and chest with gentle illumination. Bright zones on the forehead and cheekbones are smooth gradients, never harsh highlights. The left side of the face falls into soft warm shadow with natural lost edges. No specular shine, no plastic highlights — the light is warm, confident, and painterly. Rich but muted colors: deep crimsons, antique golds, warm ivory. Overall palette: warm, regal, unified by amber varnish.`
  },

  barroco: {
    nombre: "Gran Maestro Oscuro",
    referencia: `Style reference: Rembrandt van Rijn Dutch Golden Age portrait, circa 1660.
LIGHTING: A single warm candle source from upper left — soft and diffused, not harsh or raking. The light wraps around the subject's form: one side of the face is gently illuminated with smooth warm gradients, the opposite side dissolves naturally into rich warm shadow with lost edges. No hard light transitions, no specular highlights, no plastic sheen. The ermine collar catches the light softly — luminous but not glowing artificially. Deep chiaroscuro achieved through shadow depth, not highlight brightness. Muted palette: burnt sienna, raw umber, warm ivory, deep black-brown.`
  },

  renacimiento: {
    nombre: "Jardín Dorado",
    referencia: `Style reference: Thomas Gainsborough aristocratic portrait, circa 1770.
LIGHTING: Soft diffused warm light from upper left — fully enveloping, wrapping around the subject with gentle gradients. Warm light on the forehead and top of the head, soft shadow under the chin and behind the ears. No harsh transitions, no specular highlights, no plastic sheen anywhere. The light is aristocratic and gentle — every surface absorbs light rather than reflecting it. Loose painterly brushwork in background, precise in face and fur. Warm amber-ochre palette. Natural aristocratic ease.`
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
