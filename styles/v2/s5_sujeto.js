// SECCIÓN 5 — SUJETO v10 (EL CANDADO DE IDENTIDAD)
// v10 — REGLA DE ORO: La IA tiene PROHIBIDO embellecer o usar plantillas de raza.
// Este código obliga a un calco fisonómico de cualquier especie.

module.exports = function s5_sujeto(especie, numAnimales) {
  const isMulti = numAnimales > 1;
  const e = (especie || '').toLowerCase();
  const esGato = e.includes('cat') || e.includes('gato') || e.includes('feline');

  // IDENTIDAD FORENSE (Aplica a CUALQUIER animal)
  const identidadForense = `FACIAL IDENTITY & BONE STRUCTURE (ZERO TOLERANCE): 
  You are strictly forbidden from using a generic breed template or "improving" the animal. 
  You must perform a forensic replication of THIS specific individual's face. 
  1. BONE STRUCTURE: Match the exact width of the skull, the depth of the eye sockets, and the precise shape of the muzzle.
  2. ASYMMETRY: If one eye is slightly different, or the wrinkles are uneven, you MUST replicate that asymmetry. Perfection is a failure.
  3. UNIQUE MARKINGS: Every unique skin pigmentation, pink spot on the nose, or irregular fur pattern must be in its exact coordinate.
  4. THE EYES (THE SOUL): Replicate the exact weight of the eyelids. If the reference has "heavy" or "sad" eyes, do not make them bright or round. Copy the specific gaze and "soul" of this individual.`;

  const anatomia = `ANATOMY & MASS: Replicate the exact body type from the photo. If the legs are short and thick like tree trunks, do not lengthen them. If the chest is abnormally wide, keep it wide. The skeletal integrity must be a 1:1 match with the reference.`;

  const materialidad = `MATERIALITY: Painted with thick, directional oil strokes. Flesh, jowls, and skin folds must obey gravity, looking heavy and volumetric. The texture must feel palpable, like real skin and fur under ancient varnish.`;

  return [
    isMulti ? `FRAMING: All animals fill the frame with equal visual weight.` : null,
    identidadForense,
    anatomia,
    materialidad
  ].filter(Boolean).join('\n\n');
};
