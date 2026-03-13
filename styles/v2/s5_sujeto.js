// SECCIÓN 5 — SUJETO v11 (EL CANDADO DE IDENTIDAD + ESTÉTICA MATE)
// v11 — Integración de reglas estéticas anti-plástico: pinceladas visibles en pelaje, sin brillos especulares en ojos/nariz. Se mantiene el candado fisonómico intacto.

module.exports = function s5_sujeto(especie, numAnimales) {
  const isMulti = numAnimales > 1;
  const e = (especie || '').toLowerCase();
  const esGato = e.includes('cat') || e.includes('gato') || e.includes('feline');

  // ─── IDENTIDAD FORENSE (Aplica a CUALQUIER animal) ───────────────────────
  const identidadForense = `FACIAL IDENTITY & BONE STRUCTURE (ZERO TOLERANCE):
You are strictly forbidden from using a generic breed template or "improving" the animal.
You must perform a forensic replication of THIS specific individual's face.
1. BONE STRUCTURE: Match the exact width of the skull, the depth of the eye sockets, and the precise shape of the muzzle.
2. ASYMMETRY: If one eye is slightly different, or the wrinkles are uneven, you MUST replicate that asymmetry. Perfection is a failure.
3. UNIQUE MARKINGS: Every unique skin pigmentation, matte spot on the nose, or irregular fur pattern must be in its exact coordinate.
4. THE EYES (THE SOUL): Replicate the exact weight of the eyelids. If the reference has "heavy" or "sad" eyes, do not make them bright or round. Copy the specific gaze and "soul" of this individual. Eyes must have a matte, painted finish with zero glossy CGI reflections.`;

  // ─── ANATOMÍA ─────────────────────────────────────────────────────────────
  const anatomia = `ANATOMY & MASS: Replicate the exact body type from the photo. If the legs are short and thick like tree trunks, do not lengthen them. If the chest is abnormally wide, keep it wide. The skeletal integrity must be a 1:1 match with the reference.`;

  // ─── MATERIALIDAD ─────────────────────────────────────────────────────────
  const materialidad = `MATERIALITY: Painted with thick, directional oil strokes. CRITICAL: Do not render microscopic individual hairs. Use broad, grouped, impressionistic brushstrokes for fur. Flesh, jowls, and skin folds must obey gravity, looking heavy and volumetric. The texture must feel palpable, like thick classical oil paint under an ancient amber varnish, absolutely NOT like a sharp digital photograph. Zero specular shine on wet noses or skin.`;

  // ─── CARÁCTER DE ESPECIE ─────────────────────────────────────────────────
  const caracter = esGato
    ? `CHARACTER: This is a cat — self-possessed, slightly detached, regal entirely on its own terms. It does not perform for the viewer. It tolerates being observed. Its expression carries quiet superiority and ancient intelligence. The royal setting does not define the cat — the cat defines the setting.`
    : `CHARACTER: This is a dog — warm, present, genuine. Its personality fills the frame. The expression is faithful to the photo, maintaining a majestic and dignified classical demeanor. The royal setting elevates the dog's natural dignity — it does not replace it.`;

  return [
    isMulti ? `FRAMING: All animals fill the frame with equal visual weight. No animal is cropped, minimized, or pushed to the edge. All faces clearly visible.` : null,
    identidadForense,
    anatomia,
    materialidad,
    caracter
  ].filter(Boolean).join('\n\n');
};
