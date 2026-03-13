// SECCIÓN 5 — SUJETO v12 (CANDADO ID + MATE + IMPASTO ESCULTÓRICO)
// v12 — Upgrade Impasto Pesado: Refuerzo específico para impasto táctil y escultórico en pelaje blanco del pecho. Sin brillos especulares en ojos/nariz. Candado fisonómico intacto.

module.exports = function s5_sujeto(especie, numAnimales) {
  const isMulti = numAnimales > 1;
  const e = (especie || '').toLowerCase();
  const esGato = e.includes('cat') || e.includes('gato') || e.includes('feline');

  // ─── IDENTIDAD FORENSE (Aplica a CUALQUIER animal) ───────────────────────
  const identidadForense = `FACIAL IDENTITY & BONE STRUCTURE (ZERO TOLERANCE):
You are strictly forbidden from using a generic breed template or "improving" the animal.
You must perform a forensic replication of THIS specific individual's face.
1. BONE STRUCTURE: Match the exact width of the skull, the depth of the eye sockets, and the precise shape of the muzzle.
2. ASYMMETRY: If reference has uneven wrinkles, replicate that asymmetry. Perfection is failure.
3. UNIQUE MARKINGS: Every unique skin pigmentation, pink spot on the nose, or irregular fur pattern must be in its exact coordinate.
4. THE EYES (THE SOUL): Replicate the exact weight of the eyelids and specific gaze. Eyes must have a 100% matte, painted finish with zero glossy CGI reflections.`;

  // ─── ANATOMÍA ─────────────────────────────────────────────────────────────
  const anatomia = `ANATOMY & MASS: Replicate the exact body type from the photo. If legs are short and thick, do not lengthen them. The skeletal integrity must be a 1:1 match with the reference.`;

  // ─── MATERIALIDAD ─────────────────────────────────────────────────────────
  // NUEVO: Refuerzo específico para impasto táctil y escultórico en pelaje blanco del pecho
  const materialidad = `MATERIALITY: Painted with heavy, directional, palpable oil brushstrokes. CRITICAL FUR EXECUTION: Do not render microscopic individual fine hairs. Use broad, grouped, heavy oil impasto brushstrokes for fur. CRITICAL WHITE FUR: The white fur, especially on the chest, must be rendered with extreme tactile materiality, using thick, sculptural ridges of oil paint (impasto) that create a raised relief texture on the canvas surface, prioritized over hair-like realism. Flesh and skin folds must look heavy and volumetric. Zero specular shine on wet noses, eyes, or skin. All surfaces are matte, absorbing light under an ancient amber varnish patina. Absolutely NOT like a sharp digital photograph.`;

  // ─── CARÁCTER DE ESPECIE ─────────────────────────────────────────────────
  const caracter = esGato
    ? `CHARACTER: This is a cat — self-possessed, slightly detached, regal entirely on its own terms. It tolerated being observed. Expression carries quiet superiority. The cat defines the setting.`
    : `CHARACTER: This is a dog — warm, present, genuine. Expression is faithful to the photo, maintaining a majestic and dignified classical demeanor. The royal setting elevates natural dignity.`;

  return [
    isMulti ? `FRAMING: All animals fill the frame with equal visual weight.Faces clearly visible.` : null,
    identidadForense,
    anatomia,
    materialidad,
    caracter
  ].filter(Boolean).join('\n\n');
};
