// SECCIÓN 5 — SUJETO v4
// Carácter, pelo, ojos, asimetría ÚNICAMENTE.
// El encuadre fue removido de aquí — vive en s4_poses embebido en cada pose.
// Así nunca hay contradicción entre encuadre y pose.

module.exports = function s5_sujeto(especie, numAnimales) {
  const isMulti = numAnimales > 1;

  // ─── ENCUADRE MULTI ───────────────────────────────────────────────────────
  // Solo aplica para multi — single ya tiene framing en su pose
  const encuadreMulti = isMulti
    ? `FRAMING: All animals fill the frame together — large, close, commanding. Every animal has equal visual weight. No animal is cropped, minimized, or pushed to the edge. All faces clearly visible.`
    : null;

  // ─── CARÁCTER DE ESPECIE ─────────────────────────────────────────────────
  const caracter = especie === 'gato'
    ? `CHARACTER: This is a cat — self-possessed, slightly detached, regal entirely on its own terms. It does not perform for the viewer. It tolerates being observed. Its expression carries quiet superiority and ancient intelligence. The royal setting does not define the cat — the cat defines the setting.`
    : `CHARACTER: This is a dog — warm, present, genuine. Its personality fills the frame. The expression is faithful to the photo: if the tongue is out, it stays out; if the eyes are soft, they remain soft. The royal setting elevates the dog's natural dignity — it does not replace it.`;

  // ─── PELO VIVO ───────────────────────────────────────────────────────────
  const pelo = `FUR: Painted with individual directional strokes — each hair has weight and direction, following the natural growth patterns of this specific animal. Asymmetric, imperfect, alive. Not uniform, not synthetic, not like a stuffed animal or a toy. The coat has depth: some hairs catch the light, others fall into warm shadow. The texture is tactile.`;

  // ─── OJOS VIVOS ──────────────────────────────────────────────────────────
  const ojos = `EYES: Genuinely alive — deep iris with visible layers of color, wet cornea reflecting warm light, the lower lid slightly moist. There is intelligence and presence in the gaze. One small warm catchlight. These are not glass eyes — they are the eyes of a real animal that knows it is being watched.`;

  // ─── ASIMETRÍA NATURAL ───────────────────────────────────────────────────
  const asimetria = `NATURALNESS: The pose has a slight natural asymmetry — nothing is perfectly centered or perfectly symmetrical. Real animals are never perfectly still. There is a lived-in quality: one ear slightly more forward, the weight distributed naturally, the expression caught in a genuine moment.`;

  return [encuadreMulti, caracter, pelo, ojos, asimetria]
    .filter(s => s !== null)
    .join('\n\n');
};
