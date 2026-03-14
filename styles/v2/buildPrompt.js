// buildPrompt.js — V1.0
// styles/v2/buildPrompt.js

const mascotas = require('./mascotas');

function weightedPick(options) {
  const total  = options.reduce((sum, o) => sum + o.weight, 0);
  let   random = Math.random() * total;
  for (const o of options) {
    random -= o.weight;
    if (random <= 0) return o.style;
  }
  return options[0].style;
}

function resolveStyle(estilo, especie) {
  if (estilo && estilo !== 'intelligent') return estilo;
  const e = (especie || '').toLowerCase();
  if (e.includes('cat') || e.includes('gato') || e.includes('feline')) {
    return weightedPick([
      { style: 'renacimiento', weight: 70 },
      { style: 'realeza',      weight: 20 },
      { style: 'barroco',      weight: 10 },
    ]);
  }
  if (e.includes('dog') || e.includes('perro') || e.includes('canine')) {
    return weightedPick([
      { style: 'barroco',      weight: 60 },
      { style: 'renacimiento', weight: 30 },
      { style: 'realeza',      weight: 10 },
    ]);
  }
  return weightedPick([
    { style: 'renacimiento', weight: 50 },
    { style: 'barroco',      weight: 30 },
    { style: 'realeza',      weight: 20 },
  ]);
}

module.exports = function buildPrompt({
  estilo, numAnimales, especie, raza,
  genero, animales, hero, imgHash, analisisFacial,
}) {
  const numSubjects   = numAnimales || 1;
  const isGroup       = numSubjects > 1;
  const resolvedStyle = resolveStyle(estilo, especie);

  console.log(`🎨 PROMPT | hash:${imgHash} | estilo_in:${estilo} | estilo_out:${resolvedStyle} | animales:${numSubjects} | especie:${especie}`);

  let prompt = mascotas(resolvedStyle, numSubjects, isGroup, genero);

  if (analisisFacial) {
    prompt = [
      "FACIAL ANALYSIS FROM PHOTO — Use this to paint the exact face of the animal:",
      analisisFacial,
      "",
      prompt
    ].join("\n");
  }

  return prompt;
};
