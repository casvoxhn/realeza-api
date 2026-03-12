// ENSAMBLADOR PRINCIPAL v2.7
// v2.7 — analisisFacial inyectado como sección entre s5_sujeto y la pose.
// El análisis describe quirúrgicamente la cara del animal específico
// para que Gemini no use plantilla genérica de raza.

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

const NO_FRAME = `FINAL INSTRUCTION — ABSOLUTE REQUIREMENT: NO frame. NO border. NO picture frame. NO ornate frame. NO wooden frame. NO gold frame. NO decorative border of ANY kind. The painting fills the entire image edge to edge with NO frame whatsoever. If you add a frame, the output is wrong.`;

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
    analisisFacial                = null,   // ← nuevo en v2.7
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
      `estilo_raw: ${estiloRaw}`,
      `genero: ${genero || 'neutral'}`,
      `naturalistic: ${esNaturalistic}`,
      `hero: ${heroPose !== null ? `pose:${heroPose}` : 'aleatorio'}`,
      `analisis: ${analisisFacial ? 'sí' : 'no'}`,
    ].join(' | '));

    poseTexto = asignarPose(especie, raza, esNaturalistic, heroPose, varianteIdx);
  } else {
    console.log(`🎭 PROMPT MULTI | animales: ${numAnimales} | estilo: ${estilo} | estilo_raw: ${estiloRaw}`);
  }

  // ─── SECCIÓN DE IDENTIDAD ESPECÍFICA (solo si hay análisis) ──────────────
  // Se inyecta entre s5_sujeto y la pose para que Gemini tenga
  // la descripción exacta del individuo antes de leer las instrucciones de pose.
  const identidadEspecifica = analisisFacial
    ? `THIS SPECIFIC INDIVIDUAL — FORENSIC DESCRIPTION (OVERRIDE ANY BREED TEMPLATE):
The following is a clinical description of the exact animal in the photo.
You MUST match every detail below. This overrides any generic breed expectations.

${analisisFacial}

Paint THIS animal. Not a generic ${especie}. THIS one.`
    : null;

  // ─── ENSAMBLAR ───────────────────────────────────────────────────────────
  const secciones = [
    s1_lienzo,
    s2_fondo(estilo),
    s3_estilo(estilo).referencia,
    s5_sujeto(especie, numAnimales),
    identidadEspecifica,                          // ← v2.7: análisis facial específico
    !isMulti ? poseTexto : null,
    isMulti
      ? s8_multi(numAnimales, estilo)
      : s6_vestuario(estilo, genero, heroManto),
    s7_props(estilo, numAnimales, heroCojin),
    NO_FRAME,
  ];

  const promptFinal = secciones
    .filter(s => s !== null && s !== undefined && s !== '')
    .join('\n\n');

  console.log(`📝 PROMPT | hash:${imgHash}\n${'─'.repeat(60)}\n${promptFinal}\n${'─'.repeat(60)}`);

  return promptFinal;
};
