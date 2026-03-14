// SECCIÓN 3 — ESTILO PICTÓRICO v10.0
// Limpiado de redundancias. Solo controla la paleta de color y la emoción histórica.

const estilos = {
  realeza: `COLOR PALETTE & MOOD (ROYAL COURT): Rich, opulent aristocratic palette — deep burgundy, aged gold, warm ivory, and raw umber. Harmonized, historical, and unified. Brushwork is majestic and confident.`,
  
  barroco: `COLOR PALETTE & MOOD (DARK MASTER): Earth pigments — burnt sienna, warm black-brown, muted ivory, oxidized gold. Highly dramatic contrast. Brushwork is aggressive, thick, and deeply emotional in the lit areas, dissolving rapidly into shadow.`,
  
  renacimiento: `COLOR PALETTE & MOOD (NOBLE CLASSIC): Restrained, elegant antique neutrals — warm ochres, muted creams, softened reds, and smoky olive-greens. Brushwork is graceful, refined, and historically aristocratic.`
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
