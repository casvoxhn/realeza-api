// SECCIÓN 5 — SUJETO v6
// v6 — Integración de físicas de gravedad, volumen orgánico en piel/arrugas y mirada profunda.

module.exports = function s5_sujeto(especie, numAnimales) {
  const isMulti = numAnimales > 1;
  const e = (especie || '').toLowerCase();
  const esGato = e.includes('cat') || e.includes('gato') || e.includes('feline');

  const encuadreMulti = isMulti
    ? `FRAMING: All animals fill the frame together — large, close, commanding. Every animal has equal visual weight. No animal is cropped, minimized, or pushed to the edge. All faces clearly visible.`
    : null;

  const caracter = esGato
    ? `CHARACTER: This is a cat — self-possessed, slightly detached, regal entirely on its own terms. It does not perform for the viewer. It tolerates being observed. Its expression carries quiet superiority and ancient intelligence. The royal setting does not define the cat — the cat defines the setting.`
    : `CHARACTER: This is a dog — warm, present, genuine. Its personality fills the frame. The expression is faithful to the photo: if the tongue is out, it stays out; if the eyes are soft, they remain soft. The royal setting elevates the dog's natural dignity — it does not replace it.`;

  const pelo = `FUR & FLESH: Painted with individual directional strokes. The flesh and facial features show tangible weight and gravity. Wrinkles, folds, and jowls (if present) are heavy, organic, and highly volumetric, not painted flat. The coat has depth: some hairs catch the soft light, others fall into deep warm shadow. The texture is intensely tactile.`;

  const ojos = `EYES: Genuinely alive and deeply set into the skull, conveying a profound mind and soul. Deep iris with visible layers of color, wet cornea reflecting warm ambient light, the lower lid slightly moist. One small warm matte catchlight. These are not glass eyes — they are the eyes of a real, breathing animal that knows it is being watched.`;

  const asimetria = `NATURALNESS & GRAVITY: The pose has a slight natural asymmetry — nothing is perfectly centered. Real animals are never perfectly still. There is a lived-in quality and undeniable physical mass: the body yields to gravity, the weight is distributed heavily and naturally onto the surface, and the expression is caught in a genuine, unforced moment.`;

  return [encuadreMulti, caracter, pelo, ojos, asimetria]
    .filter(s => s !== null)
    .join('\n\n');
};
