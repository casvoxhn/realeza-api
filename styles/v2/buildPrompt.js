// ENSAMBLADOR PRINCIPAL v2.1
// Construye el prompt final ensamblando las secciones en orden.
// v2.1 — pasa flag cuerpoCompleto a s5_sujeto según la pose seleccionada.

const s1_lienzo       = require('./s1_lienzo');
const s2_fondo        = require('./s2_fondo');
const s3_estilo       = require('./s3_estilo');
const { asignarPose, poses, detectarCategoria } = require('./s4_poses');
const s5_sujeto       = require('./s5_sujeto');
const s6_vestuario    = require('./s6_vestuario');
const s7_props        = require('./s7_props');
const s8_multi        = require('./s8_multi');

// Poses que muestran cuerpo completo — requieren encuadre full body
const POSES_CUERPO_COMPLETO = [
  'PG1', 'PG2', 'PG3', 'PG4', 'PG5',  // perro grande — todas
  'PM1', 'PM2', 'PM3', 'PM4', 'PM5',  // perro mediano — todas
  'PP1', 'PP2', 'PP4', 'PP5',          // perro pequeño — excepto PP3 (close crop)
  'CA1', 'CA2', 'CA3', 'CA4',          // caballo — siempre cuerpo completo
  'G1a', 'G1b',                        // gato sphinx — patas visibles
  'G3',                                // gato three quarter — flanco visible
  'G6',                                // gato naturalistic
  'CO1', 'CO2', 'CO3', 'CO4',         // conejo
  'AV1', 'AV2', 'AV3', 'AV4',         // ave
  'RE1', 'RE2', 'RE3', 'RE4',         // reptil
  'AN1', 'AN2', 'AN3', 'AN4',         // animal pequeño
];

/**
 * @param {Object} params
 * @param {string} params.estilo        — 'realeza' | 'barroco' | 'renacimiento'
 * @param {number} params.numAnimales   — 1 | 2 | 3 | 4
 * @param {string} params.especie       — 'gato' | 'perro' | etc
 * @param {string} params.raza          — nombre de la raza
 * @param {string} params.genero        — 'masculine' | 'feminine' | null
 * @param {Array}  params.animales      — array completo para multi
 * @param {Object} params.hero          — { pose, manto, cojin } índices para hero shoots
 * @param {boolean} params.esNaturalistic — forzar pose naturalistic
 */
module.exports = function buildPrompt(params) {
  const {
    estilo       = 'realeza',
    numAnimales  = 1,
    especie      = 'perro',
    raza         = '',
    genero       = null,
    animales     = [],
    hero         = null,
    esNaturalistic = false,
  } = params;

  const isMulti = numAnimales > 1;

  // Índices hero
  const heroPose  = hero?.pose  ?? null;
  const heroManto = hero?.manto ?? null;
  const heroCojin = hero?.cojin ?? null;

  // ─── DETERMINAR POSE Y SI ES CUERPO COMPLETO ─────────────────────────────
  let poseTexto = null;
  let cuerpoCompleto = false;

  if (!isMulti) {
    // Obtener la pose seleccionada
    const categoria = detectarCategoria(especie, raza);
    const pool = (poses[categoria] || poses.default).filter(p => !p.naturalistic);

    let poseObj;
    if (heroPose !== null && heroPose < pool.length) {
      poseObj = pool[heroPose];
    } else {
      poseObj = pool[Math.floor(Math.random() * pool.length)];
    }

    // Determinar si esta pose requiere cuerpo completo
    cuerpoCompleto = esNaturalistic || POSES_CUERPO_COMPLETO.includes(poseObj?.id);

    // Obtener texto de la pose
    poseTexto = asignarPose(especie, raza, esNaturalistic, heroPose, null);
  }

  // ─── ENSAMBLAR ───────────────────────────────────────────────────────────
  const secciones = [
    // 1. Lienzo base
    s1_lienzo,

    // 2. Fondo por estilo
    s2_fondo(estilo),

    // 3. Referencia pictórica
    s3_estilo(estilo).referencia,

    // 4. Sujeto: encuadre dinámico + carácter + pelo + ojos + asimetría
    s5_sujeto(especie, numAnimales, cuerpoCompleto),

    // 5. Pose (single only — multi usa escenas)
    !isMulti ? poseTexto : null,

    // 6. Vestuario (single) o composición multi
    isMulti
      ? s8_multi(numAnimales, estilo)
      : s6_vestuario(estilo, genero, heroManto),

    // 7. Cojín
    s7_props(estilo, numAnimales, heroCojin),
  ];

  return secciones
    .filter(s => s !== null && s !== undefined && s !== '')
    .join('\n\n');
};
