// SECCIÓN 6 — VESTUARIO v6-mod (solo los cambios solicitados)
// v6 — Reintroducción selectiva del encaje antiguo (hasLace), pero como ribete suave (trim) bajo el armiño.
// v5 — Removido el cuello de encaje rígido (ruff) por completo.
// Mod: drapeado orgánico + regla contraste + encaje simple + cadena natural
const { pick } = require('./utils');

const mantos = { /* exactamente el mismo objeto mantos que tenías */ };
const gemas = { /* exactamente el mismo objeto gemas que tenías */ };

module.exports = function s6_vestuario(estilo, genero, indexHero = null, hasLace = false) {
  const generoKey = genero === 'masculine' ? 'masculine'
    : genero === 'feminine' ? 'feminine'
    : 'neutral';
  const pool = mantos[estilo]?.[generoKey] || mantos.realeza.neutral;
  const manto = indexHero !== null ? pool[indexHero % pool.length] : pick(pool);
  const gema = pick(gemas[generoKey]);

  // Encaje mucho más corto y simple (como pediste)
  let laceDesc = '';
  if (hasLace) {
    laceDesc = `
PART 2a — ANTIQUE LACE TRIM: A delicate, aged antique lace trim peeks out very subtly from beneath the inner edge of the collar. It rests flat upon the heavy velvet and drapes naturally with gravity.`;
  }

  return `WARDROBE: ${manto.descripcion}.
${hasLace ? 'THREE' : 'TWO'} SEPARATE PARTS — paint these independently with physical weight:

PART 1 — FUR COLLAR & TRIM (Framing chest): Luxurious fur collar and trim with distinct contrast. CRITICAL CONTRAST RULE: Use bright white ermine with distinct black tail-tips, BUT if the animal's natural fur is white, light-colored, or very fluffy (like a white Persian cat), you MUST replace it with a contrasting dark sable fur OR a thick, heavy gold embroidered border. There MUST be a clear visual separation between the animal's body and the clothing. The fur catches the soft light beautifully. Never hidden, always clearly visible at the front.

PART 2 — VELVET BODY: The mantle is a single, integrated garment. It drapes naturally and organically over the animal's true anatomy, responding to gravity and flowing seamlessly with the specific pose. Obey the animal's physical posture. The velvet falls heavily over the shoulders with deep, tangible folds and visible weight.

${laceDesc}

CHEST ORNAMENT: A delicate gold chain rests naturally across the upper chest with a ${gema} pendant at the center, integrating flawlessly with the fur and fabric.`;
};
