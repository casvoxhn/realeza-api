// ENSAMBLADOR PRINCIPAL v2.6
// v2.6 — normalización de estilo al inicio del buildPrompt.
// Cualquier alias del frontend (rey, baroque, etc.) se convierte
// a la clave canónica antes de pasarse a cualquier módulo.

const s1_lienzo    = require('./s1_lienzo');
const s2_fondo     = require('./s2_fondo');
const s3_estilo    = require('./s3_estilo');
const { asignarPose, poses, detectarCategoria } = require('./s4_poses');
const s5_sujeto    = require('./s5_sujeto');
const s6_vestuario = require('./s6_vestuario');
const s7_props     = require('./s7_props');
const s8_multi     = require('./s8_multi');

// Mapa de alias — frontend puede mandar cualquiera de estos
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

// Instrucción anti-marco — siempre al final del prompt
const NO_FRAME = `FINAL INSTRUCTION — ABSOLUTE REQUIREMENT: NO frame. NO border. NO picture frame. NO ornate frame. NO wooden frame. NO gold frame. NO decorative border of ANY kind. The painting fills the entire image edge to edge with NO frame whatsoever. If you add a frame, the output is wrong.`;

module.exports = function buildPrompt(params) {
  const {
    estilo:        estiloRaw = 'realeza',
    numAnimales    = 1,
    especie        = 'perro',
    raza           = '',
    genero         = null,
    animales       = [],
    hero           = null,
    esNaturalistic = false,
    imgHash        = 'nohash',
  } = params;

  // Normalizar estilo UNA VEZ — todos los módulos reciben la clave canónica
  const estilo = normalizarEstilo(estiloRaw);

  const isMulti   = numAnimales > 1;
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
      `estilo_raw: ${estiloRaw}`,
      `genero: ${genero || 'neutral'}`,
      `naturalistic: ${esNaturalistic}`,
      `hero: ${heroPose !== null ? `pose:${heroPose}` : 'aleatorio'}`,
    ].join(' | '));

    poseTexto = asignarPose(especie, raza, esNaturalistic, heroPose, varianteIdx);
  } else {
    console.log(`🎭 PROMPT MULTI | animales: ${numAnimales} | estilo: ${estilo} | estilo_raw: ${estiloRaw}`);
  }

  // ─── ENSAMBLAR ───────────────────────────────────────────────────────────
  const secciones = [
    s1_lienzo,
    s2_fondo(estilo),
    s3_estilo(estilo).referencia,
    s5_sujeto(especie, numAnimales),
    !isMulti ? poseTexto : null,
    isMulti ? s8_multi(numAnimales, estilo) : s6_vestuario(estilo, genero, heroManto),
    s7_props(estilo, numAnimales, heroCojin),
    NO_FRAME,
  ];

  const promptFinal = secciones
    .filter(s => s !== null && s !== undefined && s !== '')
    .join('\n\n');

  console.log(`📝 PROMPT | hash:${imgHash}\n${'─'.repeat(60)}\n${promptFinal}\n${'─'.repeat(60)}`);

  return promptFinal;
};
