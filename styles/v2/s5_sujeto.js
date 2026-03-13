// SECCIÓN 5 — SUJETO (CANDADO ID + OVERRIDE DE POSE + ESTÉTICA LIMPIA)
module.exports = function s5_sujeto(especie, numAnimales) {
  const isMulti = numAnimales > 1;
  const e = (especie || '').toLowerCase();
  const esGato = e.includes('cat') || e.includes('gato') || e.includes('feline');

  // ─── IDENTIDAD FORENSE ───────────────────────────────────────────────────
  const identidadForense = `FACIAL IDENTITY & BONE STRUCTURE (ZERO TOLERANCE):
You are strictly forbidden from using a generic breed template or "improving" the animal.
You must perform a forensic replication of THIS specific individual's face.
1. BONE STRUCTURE: Match the exact width of the skull, the depth of the eye sockets, and the precise shape of the muzzle.
2. ASYMMETRY: If the reference has uneven wrinkles, replicate that asymmetry. Perfection is failure.
3. UNIQUE MARKINGS: Preserve all natural spots, patterns, and pigmentations exactly (e.g., natural fur markings or Dalmatian spots). CRITICAL: Do NOT add artificial dirt, weird stains, or smudges to the nose or eyes. Keep the facial features clean and naturally painted.
4. THE EYES (THE SOUL): Replicate the exact weight of the eyelids and specific gaze. Eyes must have a clear, painted finish with zero glossy CGI reflections, but absolutely NO dark spots or dirt inside them.`;

  // ─── ANATOMÍA (CORREGIDA) ────────────────────────────────────────────────
  const anatomia = `ANATOMY, MASS & POSTURE OVERRIDE: Replicate the exact body type, weight, and physical proportions from the photo (e.g., short legs, wide chest). HOWEVER, YOU MUST COMPLETELY IGNORE THE POSE FROM THE REFERENCE PHOTO. Do not copy the animal's original posture. You must force the animal's body into the NEW specific pose instructed in this prompt. The 1:1 match applies only to physical traits, NEVER to the posture.`;

  // ─── MATERIALIDAD ────────────────────────────────────────────────────────
  const materialidad = `MATERIALITY: Painted with heavy, directional oil brushstrokes. Do not render microscopic individual fine hairs. Use broad, grouped oil impasto brushstrokes for fur. The white fur must be rendered with tactile materiality using thick ridges of oil paint. Flesh and skin folds must look heavy and volumetric. Zero specular shine on wet noses, eyes, or skin. All surfaces absorb light under an ancient amber varnish patina, but remain clean and clear of artificial grime. Absolutely NOT like a sharp digital photograph.`;

  // ─── CARÁCTER DE ESPECIE ─────────────────────────────────────────────────
  const caracter = esGato
    ? `CHARACTER: This is a cat — self-possessed, slightly detached, regal entirely on its own terms. Its expression carries quiet superiority. The cat defines the setting.`
    : `CHARACTER: This is a dog — warm, present, genuine. Expression is faithful to the photo, maintaining a majestic and dignified classical demeanor. The royal setting elevates natural dignity.`;

  return [
    isMulti ? `FRAMING: All animals fill the frame with equal visual weight. Faces clearly visible.` : null,
    identidadForense,
    anatomia,
    materialidad,
    caracter
  ].filter(Boolean).join('\n\n');
};
