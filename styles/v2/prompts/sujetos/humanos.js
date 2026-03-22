// styles/v2/prompts/sujetos/humanos.js — V2.1
// V1.0: estructura base
// V2.0: expression lock — nunca inventa sonrisas
// V2.1: accessories lock + anatomy fix + painting from scratch

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
- Exact lip shape and natural resting position
- Exact hair color, texture, volume and natural fall
- Exact eyebrow shape, thickness and color
- Exact head angle and rotation from the photo — LOCKED
- Exact head tilt direction and degree — LOCKED
- The person's natural personality and presence — preserved exactly

ACCESSORIES — preserve exactly:
If the person wears glasses in the photo — paint the glasses exactly.
Same frame color, shape and size — locked from the photo.
Any distinctive accessory visible in the photo must appear in the painting
translated into period-appropriate form where necessary.

EXPRESSION — CRITICAL — NEVER INVENT:
Copy the exact expression from the photo — LOCKED.
If the person is NOT smiling in the photo — do NOT add a smile.
If the person IS smiling — preserve that exact smile, nothing more.
If the smile shows teeth — paint exactly those teeth, nothing more.
If the expression is neutral or serious — paint it neutral or serious.
NEVER add warmth, friendliness or happiness that is not in the photo.
NEVER soften or neutralize a strong expression.
NEVER replace any expression with a generic pleasant face.
The expression is part of this person's identity —
treat it as locked exactly like eye color or skin tone.
Inventing an expression is the same as inventing a different person.

BODY:
The body is always built around the face — never the opposite.
Natural adult proportions — not exaggerated in any direction.
The posture is dignified and natural — never stiff or theatrical.
Muscles relaxed — the person feels alive and present.
Remove any modern clothing visible in the photo —
replace with the royal costume assigned to this person.

ANATOMY — CRITICAL:
Every person has exactly two arms and two hands — never more.
If a hand touches another person or animal, trace that arm
back to the correct shoulder — anatomically correct at all times.
Never generate extra limbs or duplicate arms.`;
};
