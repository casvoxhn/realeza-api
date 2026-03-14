// SECCIÓN 3 — ESTILO PICTÓRICO v5
// v5 — Más óleo real, menos suavidad digital, más materia pictórica y volumen histórico.

const estilos = {
  realeza: {
    nombre: "Realeza Imperial",
    referencia: `Style reference: grand European court oil portrait, late 17th to early 18th century.
PAINT HANDLING: Visible layered oil brushwork throughout. Fur must be described in grouped painterly masses, never in tiny photographic hairs. Slight broken edges, soft paint drag, subtle impasto accents in lit passages, and natural brush variation across the entire image.
LIGHTING: Noble museum-style directional light from upper front-left or upper side-left. Controlled chiaroscuro with dignified shadow depth. Highlights are restrained, warm, and painterly—not glossy, not digital, not synthetic.
SURFACE: Aged matte varnish impression, subtle canvas tooth, faint craquelure only if natural, and tactile oil-paint feel.
COLOR: Rich but restrained aristocratic palette—burgundy, aged gold, ivory, umber, warm black-brown. Harmonized, historical, and unified.
NEGATIVE STYLE LOCK: No plastic rendering, no CGI sheen, no photo retouch feel, no airbrushed smoothness, no hyperreal microscopic fur, no modern digital illustration look.`
  },

  barroco: {
    nombre: "Gran Maestro Oscuro",
    referencia: `Style reference: Rembrandt and Northern European Baroque portraiture.
PAINT HANDLING: Deeply painterly oil execution with visible brush rhythm, grouped forms, confident shadow masses, and selective detail only where needed. The face and chest receive the strongest modeling; peripheral areas dissolve with beautiful painterly economy.
LIGHTING: Strong single-source warm chiaroscuro with dramatic but believable shadow structure. Light should sculpt the face, brow, muzzle, and chest with old-master depth. Never flat. Never evenly lit. Never photographic studio lighting.
SURFACE: Matte oil-paint finish, subtle aging, tactile paint body, and slight edge softness in dark transitions.
COLOR: Earth pigments—raw umber, burnt sienna, warm black, muted ivory, oxidized gold, deep wine red.
NEGATIVE STYLE LOCK: No glossy nose reflections, no wet CGI eye highlights, no synthetic HDR, no smooth digital gradients, no poster-like rendering, no AI-polished slickness.`
  },

  renacimiento: {
    nombre: "Nobleza Clásica",
    referencia: `Style reference: aristocratic European oil portrait with graceful historical refinement.
PAINT HANDLING: Thick, painterly oil interpretation with visible hand-made stroke variation. Fur, lace, velvet, and skinless anatomical planes must all feel painted, tactile, and historically executed rather than digitally smoothed.
LIGHTING: Refined warm directional light with elegant shadow modeling. Gentle, yes—but still sculptural. The face must have clear volume and authority, never washed-out softness.
SURFACE: Soft aged varnish feeling, slight canvas presence, hand-painted texture, and restrained old-world finish.
COLOR: Warm ochres, muted creams, softened reds, smoky greens, antique neutrals.
NEGATIVE STYLE LOCK: No photo-manipulated look, no beauty-retouched smoothness, no synthetic softness, no glossy realism, no plastic gradients, no over-sharpened fur.`
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
