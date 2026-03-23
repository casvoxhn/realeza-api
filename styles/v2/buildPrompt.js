// buildPrompt.js — V1.4
// V1.2: humano_mascota agregado
// V1.3: subjects pasado a humanomascota para orden dinámico
// V1.4: subjects pasado a mascotas para detección de especie sin XML tags

const mascotas      = require('./mascotas');
const humanos       = require('./humanos');
const humanomascota = require('./humano_mascota');

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

function isHumanCategory(categoria) {
  const cat = (categoria || '').toLowerCase();
  return (
    cat === 'humanos'  ||
    cat === 'humano'   ||
    cat === 'mujer'    ||
    cat === 'hombre'   ||
    cat === 'retratos' ||
    cat === 'parejas'  ||
    cat === 'familia'  ||
    cat === 'ninos'    ||
    cat === 'niños'
  );
}

module.exports = function buildPrompt({
  estilo, numAnimales, especie, raza,
  genero, animales, hero, imgHash, analisisFacial,
  categoria, ninos, subjects,
}) {
  const numSubjects   = numAnimales || 1;
  const isGroup       = numSubjects > 1;
  const resolvedStyle = resolveStyle(estilo, especie);

  console.log(`🎨 PROMPT | hash:${imgHash} | estilo_in:${estilo} | estilo_out:${resolvedStyle} | animales:${numSubjects} | cat:${categoria}`);

  let prompt;
  if (categoria === 'humano_mascota') {
    prompt = humanomascota(resolvedStyle, numSubjects, isGroup, genero, ninos || [], subjects || []);
  } else if (isHumanCategory(categoria)) {
    prompt = humanos(resolvedStyle, numSubjects, isGroup, genero, ninos || []);
  } else {
    prompt = mascotas(resolvedStyle, numSubjects, isGroup, genero, subjects || []);
  }

  if (analisisFacial) {
    const label = categoria === 'humano_mascota' || isHumanCategory(categoria)
      ? "FACIAL ANALYSIS FROM PHOTO — Use this to paint the exact face of the person:"
      : "FACIAL ANALYSIS FROM PHOTO — Use this to paint the exact face of the animal:";
    prompt = [label, analisisFacial, "", prompt].join("\n");
  }

  return prompt;
};
