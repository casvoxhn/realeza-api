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
    imgHash = 'nohash',
    analisisFacial = null,
  } = params;

  const estilo = normalizarEstilo(estiloRaw);
  const isMulti = numAnimales > 1;

  const heroPose  = hero?.pose  ?? null;
  const heroManto = hero?.manto ?? null;
  const heroCojin = hero?.cojin ?? null;

  let poseTexto = null;

  if (!isMulti) {
    poseTexto = elegirPoseControlada({
      especie,
      raza,
      heroPose
    });

    console.log([
      `🎭 PROMPT`,
      `especie:${especie}`,
      `raza:${raza || 'sin raza'}`,
      `estilo:${estilo}`,
      `pose_controlada:OK`
    ].join(' | '));
  }

  const identidadEspecifica = analisisFacial
    ? `SUBJECT IDENTITY DETAILS:
Incorporate the following specific physical traits, markings, proportions, and facial identity into the painted portrait with discipline and subtlety:

${analisisFacial}

IDENTITY RULES:
Preserve the recognizable facial identity of this exact animal.
Keep the unique structure of the eyes, muzzle, brow, ears, markings, and expression.
Translate these traits into oil paint language.
Do NOT copy the original photo composition literally.
Do NOT make it look photographic.
Do NOT flatten or genericize the face.`
    : null;

  const secciones = [
    GLOBAL_QUALITY_LOCK,
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
    .filter(Boolean)
    .join('\n\n');

  console.log(`📝 PROMPT COMPLETO | hash:${imgHash}\n${'─'.repeat(60)}\n${promptFinal}\n${'─'.repeat(60)}`);

  return promptFinal;
};
