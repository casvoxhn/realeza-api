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

module.exports = function buildPrompt(params) {

  const estilo = normalizarEstilo(params.estilo);
  const numAnimales = params.numAnimales || 1;
  const especie = params.especie || "animal";
  const raza = params.raza || "";
  const genero = params.genero || null;
  const hero = params.hero || null;
  const analisisFacial = params.analisisFacial || null;

  const heroPose = hero ? hero.pose : null;
  const heroManto = hero ? hero.manto : null;
  const heroCojin = hero ? hero.cojin : null;

  const isMulti = numAnimales > 1;

  let poseTexto = "";

  if (!isMulti) {
    poseTexto = elegirPoseControlada({
      especie: especie,
      raza: raza,
      heroPose: heroPose
    });
  }

  const secciones = [];

  secciones.push(s1_lienzo);
  secciones.push(s2_fondo(estilo));
  secciones.push(s3_estilo(estilo).referencia);
  secciones.push(s5_sujeto(especie, numAnimales));

  if (analisisFacial) {
    secciones.push("SUBJECT IDENTITY DETAILS:");
    secciones.push(analisisFacial);
  }

  if (!isMulti) {
    secciones.push(poseTexto);
  }

  if (isMulti) {
    secciones.push(s8_multi(numAnimales, estilo));
  } else {
    secciones.push(s6_vestuario(estilo, genero, heroManto));
  }

  secciones.push(s7_props(estilo, numAnimales, heroCojin));

  secciones.push(
    "FINAL INSTRUCTION: The painting must fill the entire image edge to edge. No frame or borders."
  );

  const promptFinal = secciones
    .filter(Boolean)
    .join("\n\n");

  return promptFinal;
};
