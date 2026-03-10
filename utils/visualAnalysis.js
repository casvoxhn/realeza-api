module.exports = function visualAnalysis() {
  return `
STEP 0 — VISUAL ANALYSIS (DO THIS BEFORE ANYTHING ELSE)
Examine the input image and determine:
1. SPECIES: dog, cat, or other
2. COAT: color and dominant tone (light/dark/golden)
3. HUMAN PRESENT: is any human visible? Yes / No
4. SUBJECT COUNT: how many subjects

USE THESE TO DECIDE:
- BACKDROP: maximum contrast against the coat. Light coat → dark backdrop. Dark coat → warm amber backdrop. Golden coat → deep burgundy or forest green.
- POSE: natural to the animal's anatomy — dogs and cats rest horizontally, front paws forward.
- If HUMAN PRESENT → apply Human Guard rules.
`;
};
