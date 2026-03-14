// ENSAMBLADOR PRINCIPAL (V_NEXT_CONVERSION_BALANCED)

const s1_lienzo    = require('./s1_lienzo');
const s2_fondo     = require('./s2_fondo');
const s3_estilo    = require('./s3_estilo');
const { elegirPoseControlada } = require('./s4_poses');
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

const NO_FRAME = `FINAL INSTRUCTION: The painting must fill the entire image edge to edge. Absolutely NO borders, NO frames, NO decorative borders, NO printed poster edges, and NO empty margins of any kind.`;

const GLOBAL_QUALITY_LOCK = `
MASTER PAINTING DIRECTIVE:
This must read as a genuine historical oil portrait painting, not a photo filter, not a digital render, and not AI-smoothed illustration.
Visible painterly brushwork must exist throughout the fur, garments, cushion, and shadows.
Use subtle natural irregularities in paint application, soft broken edges, layered oil texture, and restrained but convincing volume.
Do NOT produce plastic smooth gradients, CGI sheen, hyper-clean digital blending, or individually rendered photographic hairs.
The final impression must feel museum-like, noble, tactile, and authentically painted by hand.`.trim();

module.exports = function buildPrompt(params) {
  const {
    estilo: estiloRaw = 'realeza',
    numAnimales = 1,
    especie = 'perro',
    raza = '',
    genero = null,
    hero = null,
    imgHash = '
