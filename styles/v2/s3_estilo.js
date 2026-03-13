// SECCIÓN 3 — ESTILO PICTÓRICO v4
// v4 — Eliminación total del renderizado individual de pelo. Enfoque en pinceladas visibles, colores análogos y sombras fundidas.

const estilos = {
  realeza: {
    nombre: "Realeza Imperial",
    referencia: `Style reference: Hyacinthe Rigaud imperial court portrait, circa 1700.
LIGHTING & TEXTURE: Warm diffused ambient light from upper right — soft and enveloping. Bright zones are smooth, thick oil paint gradients, never harsh highlights. The left side falls into soft warm shadow with natural lost edges melting into the background. Fur is rendered in thick, expressive brushstrokes, never individual microscopic hairs. Absolutely no specular shine or plastic glossy highlights on noses or eyes. Rich but strictly muted, analogous colors: deep burgundy, antique oxidized golds, warm ivory. Overall palette: warm, regal, completely unified by an aged matte amber varnish.`
  },

  barroco: {
    nombre: "Gran Maestro Oscuro",
    referencia: `Style reference: Rembrandt van Rijn Dutch Golden Age portrait, circa 1660.
LIGHTING & TEXTURE: A single warm ambient source from upper left — soft and heavily diffused. The light wraps around the subject's form creating volume through broad brushstrokes. One side is gently illuminated with thick impasto, the opposite side dissolves completely into rich warm shadow with profound lost edges. No hard transitions, no photographic sharpness, no plastic CGI sheen. Fur and fabrics are painted with economical, grouped strokes. Deep chiaroscuro achieved through shadow depth, not bright highlights. Muted earthy palette: burnt sienna, raw umber, warm ivory, deep black-brown. 100% matte finish.`
  },

  renacimiento: {
    nombre: "Jardín Dorado",
    referencia: `Style reference: Thomas Gainsborough aristocratic portrait, circa 1770.
LIGHTING & TEXTURE: Soft diffused warm light from upper left — fully enveloping, wrapping around the subject with gentle pastel-like gradients. Soft shadow under the chin and behind the ears with edges that blend into the canvas. No harsh transitions, zero specular highlights, zero plastic sheen. The light is gentle—every surface, including eyes and wet noses, absorbs light with a matte finish rather than reflecting it sharply. Loose, impressionistic, painterly brushwork throughout, especially in the fur which must look like thick paint, not real hair. Warm amber-ochre, desaturated analogous palette.`
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
