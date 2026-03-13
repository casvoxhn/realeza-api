// ENSAMBLADOR PRINCIPAL (VERSIÓN CALIDAD CONTROLADA)
const s1_lienzo    = require('./s1_lienzo');
const s2_fondo     = require('./s2_fondo');
const s3_estilo    = require('./s3_estilo');
const { asignarPose, poses, detectarCategoria } = require('./s4_poses');
const s5_sujeto    = require('./s5_sujeto');
const s6_vestuario = require('./s6_vestuario');
const s7_props     = require('./s7_props');
const s8_multi     = require('./s8_multi');

const ESTILO_ALIAS = {
  rey:         'realeza',
  royal:       'realeza',
  baroque:     'barroco',
  renaissance: 'renacimiento',
};

function normalizarEstilo(estilo) {
  const e = (estilo || 'realeza').toLowerCase().trim();
  return ESTILO_ALIAS[e] || e;
}

const NO_FRAME = `FINAL INSTRUCTION: The painting must fill the entire image edge to edge. Absolutely NO borders and NO frames of any kind.`;

module.exports = function buildPrompt(params) {
  const {
    estilo:        estiloRaw      = 'realeza',
    numAnimales                   = 1,
    especie                       = 'perro',
    raza                          = '',
    genero                        = null,
    animales                      = [],
    hero                          = null,
    esNaturalistic                = false,
    imgHash                       = 'nohash',
    analisisFacial                = null,   
  } = params;

  const estilo  = normalizarEstilo(estiloRaw);
  const isMulti = numAnimales > 1;

  const heroPose  = hero?.pose  ?? null;
  const heroManto = hero?.manto ?? null;
  const heroCojin = hero?.cojin ?? null;

  // ─── POSE ────────────────────────────────────────────────────────────────
  let poseTexto = null;

  if (!isMulti) {
    const categoria = detectarCategoria(especie, raza);
    const pool = (poses[categoria] || poses.default).filter(p => !p.naturalistic);

    let poseObj;
    if (esNaturalistic) {
      poseObj = (poses[categoria] || poses.default).find(p => p.naturalistic);
    } else if (heroPose !== null && heroPose < pool.length) {
      poseObj = pool[heroPose];
    } else {
      poseObj = pool[Math.floor(Math.random() * pool.length)];
    }

    const variantesDisponibles = poseObj?.variantes?.length || 0;
    const varianteIdx = Math.floor(Math.random() * variantesDisponibles);

    console.log([
      `🎭 PROMPT`,
      `especie: ${especie}`,
      `raza: ${raza || 'sin raza'}`,
      `categoria: ${categoria}`,
      `pose: ${poseObj?.id || 'unknown'}`,
      `variante: ${varianteIdx + 1}/${variantesDisponibles}`,
      `estilo: ${estilo}`,
    ].join(' | '));

    poseTexto = asignarPose(especie, raza, esNaturalistic, heroPose, varianteIdx);
  }

  // ─── SECCIÓN DE IDENTIDAD (LIMPIA Y ARTÍSTICA) ─────────────────────────
  const identidadEspecifica = analisisFacial
    ? `SUBJECT IDENTITY DETAILS:
Incorporate the following specific physical traits, markings, and features into the painted portrait smoothly:

${analisisFacial}

Remember: Apply these details using the classical oil painting style requested. Do not copy the original posture, and do not make it look like a photograph.`
    : null;

  // ─── ENSAMBLAR ───────────────────────────────────────────────────────────
  const secciones = [
    s1_lienzo,
    s2_fondo(estilo),
    s3_estilo(estilo).referencia,
    s5_sujeto(especie, numAnimales),
    identidadEspecifica,                          
    !isMulti ? poseTexto : null,
    isMulti
      ? s8_multi(numAnimales, estilo)
      : s6_vestuario(estilo, genero, heroManto),
    s7_props(estilo, numAnimales, heroCojin),
    NO_FRAME
  ];

  const promptFinal = secciones
    .filter(s => s !== null && s !== undefined && s !== '')
    .join('\n\n');

  console.log(`📝 PROMPT COMPLETO | hash:${imgHash}\n${'─'.repeat(60)}\n${promptFinal}\n${'─'.repeat(60)}`);

  return promptFinal;
};
