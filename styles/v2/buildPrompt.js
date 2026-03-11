// ENSAMBLADOR PRINCIPAL v2.2
// Framing vive en s4_poses — buildPrompt ya no necesita detectar cuerpoCompleto.
// Arquitectura limpia sin contradicciones entre secciones.

const s1_lienzo       = require('./s1_lienzo');
const s2_fondo        = require('./s2_fondo');
const s3_estilo       = require('./s3_estilo');
const { asignarPose } = require('./s4_poses');
const s5_sujeto       = require('./s5_sujeto');
const s6_vestuario    = require('./s6_vestuario');
const s7_props        = require('./s7_props');
const s8_multi        = require('./s8_multi');

/**
 * @param {Object} params
 * @param {string} params.estilo          — 'realeza' | 'barroco' | 'renacimiento'
 * @param {number} params.numAnimales     — 1 | 2 | 3 | 4
 * @param {string} params.especie         — 'gato' | 'perro' | etc
 * @param {string} params.raza            — nombre de la raza
 * @param {string} params.genero          — 'masculine' | 'feminine' | null
 * @param {Array}  params.animales        — array completo para multi
 * @param {Object} params.hero            — { pose, manto, cojin } índices hero shoots
 * @param {boolean} params.esNaturalistic — forzar pose naturalistic (guardrail pendiente)
 */
module.exports = function buildPrompt(params) {
  const {
    estilo         = 'realeza',
    numAnimales    = 1,
    especie        = 'perro',
    raza           = '',
    genero         = null,
    animales       = [],
    hero           = null,
    esNaturalistic = false,
  } = params;

  const isMulti = numAnimales > 1;

  const heroPose  = hero?.pose  ?? null;
  const heroManto = hero?.manto ?? null;
  const heroCojin = hero?.cojin ?? null;

  // ─── ENSAMBLAR ───────────────────────────────────────────────────────────
  const secciones = [
    // 1. Lienzo base
    s1_lienzo,

    // 2. Fondo por estilo
    s2_fondo(estilo),

    // 3. Referencia pictórica
    s3_estilo(estilo).referencia,

    // 4. Sujeto: carácter + pelo + ojos + asimetría (encuadre multi si aplica)
    s5_sujeto(especie, numAnimales),

    // 5. Pose con framing embebido (single only — multi usa escenas)
    !isMulti
      ? asignarPose(especie, raza, esNaturalistic, heroPose, null)
      : null,

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
