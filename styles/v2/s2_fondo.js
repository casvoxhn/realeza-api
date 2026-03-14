// SECCIÓN 2 — FONDO v11.0 (BACK TO ATMOSPHERIC VOID - NO CASTLES)
// v11.0 — Eliminación completa de arquitectura y castillos. Vuelta al vacío de sombras de Fable.

const fondos = {
  realeza: `BACKGROUND & LIGHTING (CRITICAL): A pure, deep atmospheric void of warm shadows. 90% of the canvas is a near-black abyss. NO ARCHITECTURE, NO CASTLES, NO CURTAINS. Behind the animal's head, a soft, ethereal glow of golden-amber light suggests a distant, unseen candle. This glow creates a subtle "halo" effect. The animal's outer silhouette must emerge from the darkness with soft, lost edges (sfumato). ZERO objects, ZERO boundaries. Just warm, heavy air and thick painterly depth.`,

  barroco: `BACKGROUND & LIGHTING (CRITICAL): Extreme Rembrandt Chiaroscuro. NO ARCHITECTURE, NO CASTLES. The background is a dense, impenetrable darkness — 95% pure deep black-brown. A single, tight, dramatic shaft of warm ochre light strikes the space directly behind the subject's head. The edges of the animal's fur and velvet mantle MUST dissolve completely into the surrounding blackness (sfumato). Total absence of objects. This is not a room; it is a spiritual void of light and shadow.`,

  renacimiento: `BACKGROUND & LIGHTING (CRITICAL): A rich, painterly atmosphere of aged amber and raw umber. NO ARCHITECTURE, NO CASTLES. The texture suggests centuries of darkened varnish and smoke. The space is a soft, out-of-focus "sfumato" of warm earthy tones. The lighting is a gentle, diagonal gradient of sienna light that illuminates the air itself. ZERO columns, ZERO curtains, ZERO objects. The background exists solely to push the subject forward.`,
};

const ALIAS = {
  rey:           'realeza',
  royal:         'realeza',
  baroque:       'barroco',
  renaissance:   'renacimiento',
  renacer:       'renacimiento',
};

module.exports = function s2_fondo(estilo) {
  const key = ALIAS[estilo] || estilo;
  return fondos[key] || fondos.realeza;
};
