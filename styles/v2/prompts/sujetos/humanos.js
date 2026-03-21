// styles/v2/prompts/sujetos/humanos.js — V1.0
// Bloquea la identidad del sujeto adulto antes de construir el cuerpo
// Aplica a single y multi — un bloque por persona

module.exports = function sujetoHumano(index) {
  const ref = index ? `Person ${index}` : 'The person';
  const img = index ? `Image ${index}` : 'Image 1';

  return `SUBJECT — ${ref}:
Study ${img} carefully before painting anything.

IDENTITY LOCK — extract and transfer exactly:
- Exact facial features: bone structure, jaw, cheekbones, forehead shape
- Exact skin tone, texture and any visible marks or features
- Exact eye shape, color, depth and gaze direction
- Exact nose shape and proportions
- Exact lip shape and natural expression
- Exact hair color, texture, volume and natural fall
- Exact eyebrow shape, thickness and color
- Exact head angle and rotation from the photo — LOCKED
- Exact head tilt direction and degree — LOCKED
- The person's natural personality and presence — preserved exactly

This person must be immediately recognizable from their photo.
Do NOT idealize, smooth, or alter any facial feature.
Do NOT change the ethnicity, age or gender.
Do NOT reinvent any feature not clearly visible —
use what IS visible as the reference.

BODY:
The body is always built around the face — never the opposite.
Natural adult proportions — not exaggerated in any direction.
The posture is dignified and natural — never stiff or theatrical.
Muscles relaxed — the person feels alive and present.
Remove any modern clothing visible in the photo —
replace with the royal costume assigned to this person.`;
};
