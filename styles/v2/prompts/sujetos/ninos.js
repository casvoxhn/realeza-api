// styles/v2/prompts/sujetos/ninos.js — V1.0
// Bloquea la identidad del niño — escala, energía e inocencia preservadas
// Aplica a single y multi — un bloque por niño

module.exports = function sujetoNino(index) {
  const ref = index ? `Person ${index} (child)` : 'The child';
  const img = index ? `Image ${index}` : 'Image 1';

  return `SUBJECT — ${ref} (CHILD):
Study ${img} carefully before painting anything.

IDENTITY LOCK — extract and transfer exactly:
- Exact facial features — the child's specific face, not a generic child
- Exact skin tone and texture
- Exact eye shape, color and natural expression
- Exact nose shape — proportionally larger relative to face than an adult
- Exact lip shape and natural expression
- Exact hair color, texture, volume and natural fall
- Exact head angle and rotation from the photo — LOCKED
- Exact head tilt direction and degree — LOCKED
- The child's natural personality, energy and innocence — preserved exactly

This child must be immediately recognizable from their photo.
Do NOT age up the child — preserve their exact apparent age.
Do NOT idealize or alter any facial feature.
Do NOT make the child look like a miniature adult.

BODY AND SCALE:
The child's body is visibly and naturally smaller than any adult in the scene.
Children's proportions differ from adults —
slightly larger head relative to body, softer features, rounder face.
The child's posture is natural and slightly less formal than the adults —
children rarely hold perfectly still. A slight natural energy is visible.
The child's hands and feet are proportionally smaller — never adult-sized.
Remove any modern clothing visible in the photo —
replace with the royal costume assigned to this child,
scaled naturally to their body size.

NEVER:
- Make the child look older than they are
- Give the child adult facial proportions
- Suppress the child's natural energy or expression
- Crop or minimize the child in the composition`;
};
