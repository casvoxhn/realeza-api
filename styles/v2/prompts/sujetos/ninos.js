// styles/v2/prompts/sujetos/ninos.js — V2.0
// V1.0: estructura base
// V2.0: expression lock — nunca inventa sonrisas ni expresiones

module.exports = function sujetoNino(index) {
  const ref = index ? `Person ${index} (child)` : 'The child';
  const img = index ? `Image ${index}` : 'Image 1';

  return `SUBJECT — ${ref} (CHILD):
Study ${img} carefully before painting anything.

IDENTITY LOCK — extract and transfer exactly:
- Exact facial features — this specific child's face, not a generic child
- Exact skin tone and texture
- Exact eye shape, color and natural expression
- Exact nose shape — proportionally larger relative to face than an adult
- Exact lip shape and natural resting position
- Exact hair color, texture, volume and natural fall
- Exact head angle and rotation from the photo — LOCKED
- Exact head tilt direction and degree — LOCKED
- The child's natural personality, energy and innocence — preserved exactly

EXPRESSION — CRITICAL — NEVER INVENT:
Copy the exact expression from the photo — LOCKED.
If the child is NOT smiling in the photo — do NOT add a smile.
If the child IS smiling — preserve that exact smile, nothing more.
If the smile shows teeth — paint exactly those teeth, nothing more.
If the expression is neutral, curious or serious — paint it exactly that way.
NEVER add cheerfulness or happiness that is not visible in the photo.
NEVER replace a child's natural expression with a generic happy face.
Children's expressions are especially important — they define their personality.
Inventing an expression is the same as inventing a different child.

BODY AND SCALE:
The child's body is visibly and naturally smaller than any adult in the scene.
Children's proportions differ from adults —
slightly larger head relative to body, softer features, rounder face.
The child's posture is natural and slightly less formal than adults —
a slight natural energy is visible — children are never perfectly still.
The child's hands and feet are proportionally smaller — never adult-sized.
Remove any modern clothing visible in the photo —
replace with the royal costume assigned to this child,
scaled naturally to their body size.

ANATOMY — CRITICAL:
Every child has exactly two arms and two hands — never more.
If a hand touches another person or animal, trace that arm
back to the correct shoulder — anatomically correct at all times.
Never generate extra limbs or duplicate arms.

NEVER:
- Make the child look older than they are
- Give the child adult facial proportions
- Suppress the child's natural energy or expression
- Invent a smile or expression not present in the photo
- Crop or minimize the child in the composition`;
};
