// SECCIÓN 8 — COMPOSICIÓN MULTI
// Escenas pre-definidas para 2, 3 y 4 animales.
// Cada animal recibe su propio manto de color distinto.

const { pick } = require('./utils');

const paletas = [
  ['crimson', 'forest green'],
  ['royal blue', 'deep burgundy'],
  ['emerald', 'imperial gold'],
  ['near-black', 'deep crimson'],
  ['burgundy', 'midnight blue']
];

const gemas = ['emerald', 'sapphire', 'ruby', 'topaz', 'amethyst', 'pearl'];

const escenas = {
  2: [
    // M1 — Los Duques
    (a1, a2) => `SCENE: Both animals lie reclined on the cushion — chests down, front paws extended forward. ${a1} lies slightly behind and to the left. ${a2} lies in front and to the right. Both heads raised, both faces clearly visible. They look in slightly different directions — one toward the viewer, one slightly away.`,

    // M2 — La Alianza
    (a1, a2) => `SCENE: Both animals sit upright on the cushion — bodies slightly angled toward each other, almost touching. ${a1} on the left, ${a2} on the right. Both front paws resting down. Their gazes go in slightly different directions — creating a natural, unposed quality.`,

    // M3 — El Trono Compartido
    (a1, a2) => `SCENE: ${a1} lies reclined at the back of the cushion — large and dominant. ${a2} sits upright in front — smaller but visually commanding. Both faces clearly visible. The contrast of poses creates depth.`,

    // M4 — Los Iguales
    (a1, a2) => `SCENE: Both animals lie in sphinx position on the cushion — parallel, side by side. ${a1} on the left looking slightly right, ${a2} on the right looking slightly left. A quiet tension between them.`
  ],

  3: [
    // T1 — El Triángulo Real
    (a1, a2, a3) => `SCENE: ${a1} sits upright at the center-back of the cushion — elevated and dominant. ${a2} lies reclined at the front-left, ${a3} lies reclined at the front-right. A natural triangle. All three faces clearly visible, each looking in a slightly different direction.`,

    // T2 — La Corte
    (a1, a2, a3) => `SCENE: All three animals lie reclined in a horizontal line on the cushion. ${a2} at the center — slightly more forward. ${a1} to the left and ${a3} to the right — slightly behind. All chests down, paws forward, faces raised. Three gazes in three slightly different directions.`,

    // T3 — La Pirámide
    (a1, a2, a3) => `SCENE: ${a1} and ${a2} lie reclined at the front of the cushion, side by side. ${a3} sits upright behind them — centered between the two, slightly elevated. A classic pyramidal composition. All faces clearly visible.`
  ],

  4: [
    // C1 — La Dinastía
    (a1, a2, a3, a4) => `SCENE: ${a1} and ${a2} lie reclined at the front of the cushion — chests down, paws forward. ${a3} and ${a4} sit upright behind them — slightly elevated. All four faces clearly visible, each in a slightly different direction.`,

    // C2 — El Consejo
    (a1, a2, a3, a4) => `SCENE: All four animals lie reclined on the cushion — staggered in depth. ${a1} and ${a2} in front, ${a3} and ${a4} slightly behind and elevated. All chests down, all paws forward, all faces raised and clearly visible.`
  ]
};

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

module.exports = function s8_multi(numAnimales, estilo) {
  const paletaBase = pick(paletas);
  const gemasShuffled = shuffle(gemas);

  // Generar descripción de vestuario por animal
  const animales = [];
  for (let i = 0; i < numAnimales; i++) {
    const color = paletaBase[i] || ['deep gold', 'forest green', 'midnight blue'][i - 2] || 'crimson';
    const gema = gemasShuffled[i] || 'ruby';
    animales.push(
      `Animal ${i + 1}: a ${color} velvet royal mantle with white ermine border — draped dramatically behind and to one side, studio arranged, falling away with natural weight. A gold chain crosses the ermine from shoulder to shoulder with a ${gema} pendant at the center.`
    );
  }

  // Elegir escena
  const pool = escenas[Math.min(numAnimales, 4)] || escenas[2];
  const escenaFn = pick(pool);
  const escena = escenaFn(
    `Animal 1`,
    `Animal 2`,
    `Animal 3`,
    `Animal 4`
  );

  return [
    `IMPORTANT: Each animal wears its own completely independent mantle. They do NOT share any garment.`,
    '',
    animales.join('\n'),
    '',
    escena,
    '',
    `All animals rest directly on the cushion. No animal stands outside it.`
  ].join('\n');
};
