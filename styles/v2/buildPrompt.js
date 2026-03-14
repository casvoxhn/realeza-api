// ENSAMBLADOR PRINCIPAL (VERSIÓN ESTABLE)

const s1_lienzo = require('./s1_lienzo');
const s2_fondo = require('./s2_fondo');
const s3_estilo = require('./s3_estilo');
const { elegirPoseControlada } = require('./s4_poses');
const s5_sujeto = require('./s5_sujeto');
const s6_vestuario = require('./s6_vestuario');
const s7_props = require('./s7_props');
const s8_multi = require('./s8_multi');

const ESTILO_ALIAS = {
  rey: 'realeza',
  royal: 'realeza',
  baroque: 'barroco',
  renaissance: 'renacimiento'
};

function normalizarEstilo(estilo) {
  const e = (estilo || 'realeza').toLowerCase().trim();
  return ESTILO_ALIAS[e] || e;
}

const NO_FRAME = `
FINAL INSTRUCTION:
The painting must fill the entire image edge to edge.
Absolutely NO borders.
NO frames.
NO poster margins.
`;

const GLOBAL_QUALITY_LOCK = `
MASTER PAINTING DIRECTIVE:
This must read as a genuine historical oil painting.

Use visible painterly brushwork.
Avoid plastic smooth gradients.
Avoid CGI sheen.
Avoid hyper-clean digital blending.

The final impression must feel museum-like and painted by hand.
`;

module.exports = function buildPrompt(params) {

  const {
    estilo: estiloRaw = 'realeza',
    numAnimales = 1,
    especie = 'perro',
    raza = '',
    genero = null,
    hero = null,
    imgHash = 'nohash',
    analisisFacial = null
  } = params;

  const estilo = normalizarEstilo(estiloRaw);
  const isMulti = numAnimales > 1;

  const heroPose = hero?.pose ?? null;
  const heroManto = hero?.manto ?? null;
  const heroCojin = hero?.cojin ?? null;

  let poseTexto = null;

  if (!isMulti) {
    poseTexto = elegirPoseControlada({
      especie,
      raza,
      heroPose
    });

    console.log(
      `🎭 PROMPT | especie:${especie} | raza:${raza || 'sin raza'} | estilo:${estilo}`
    );
  }

  const identidadEspecifica = analisisFacial
    ? `
SUBJECT IDENTITY DETAILS:
Incorporate these specific traits carefully into the portrait:

${analisisFacial}

Preserve the recognizable identity of the animal.
Do not copy the exact photo pose.
Translate these traits into classical oil painting style.
`
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

  console.log(
    `📝 PROMPT COMPLETO | hash:${imgHash}\n${'-'.repeat(50)}\n${promptFinal}`
  );

  return promptFinal;
};
