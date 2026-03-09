// ARCHIVO: utils/visualAnalysis.js
// El modelo analiza la imagen ANTES de pintar.
// Sin input del usuario — inferencia automática de todo lo relevante.

module.exports = function visualAnalysis() {
  return `
========================
🔍 STEP 0 — VISUAL ANALYSIS (MANDATORY — DO THIS BEFORE ANYTHING ELSE)
========================
Carefully examine every input image and silently determine:

1. SPECIES: Is the primary subject a dog, cat, bird, or other animal?
2. COAT: Short / medium / long / wire / curly / double-coat / hairless
3. DOMINANT COAT COLOR: Warm (golden/orange/brown) | Cool (grey/white/black/blue) | Mixed
4. FACE TYPE: Flat-faced (Persian, Bulldog, Pug) OR elongated (Collie, Greyhound, Shepherd)
5. SIZE: Small / medium / large based on proportions visible
6. HUMAN PRESENT: Is any human or child visible in ANY of the input images? Yes / No
7. SUBJECT COUNT: How many distinct subjects appear across all input images?

USE THESE FINDINGS to make every decision below:
- BACKDROP: choose a backdrop color that creates maximum contrast against the dominant coat color.
  (White/light coat → dark rich backdrop. Dark coat → warm amber/umber backdrop. Golden coat → deep burgundy or forest green backdrop.)
- POSE: adapt the pose to the animal's anatomy and natural behavior patterns.
- SCALE: ensure the subject's head occupies 25–40% of the total image height.
- If HUMAN PRESENT = Yes → activate HUMAN GUARD rules below.
========================
`;
};
