// SECCIÓN 5 — SUJETO (CALIDAD CONTROLADA V_SIMPLE + ANATOMÍA)
module.exports = function s5_sujeto(especie) {
  const e = (especie || 'animal').toLowerCase();
  
  return `SUBJECT EXACT LIKENESS & CLEANUP:
You must capture the unique facial identity, eye shape, and exact fur markings of the ${e} in the reference photo. 

CRITICAL ANATOMY LOCK: The animal MUST have perfectly correct, natural anatomy. Strictly ONE tail. Exactly TWO front paws resting naturally. NO extra limbs, NO mutated appendages, and absolutely NO duplicate tails.

CRITICAL EXCLUSION: You MUST completely REMOVE and IGNORE any modern collars, leashes, harnesses, tags, human hands, or original backgrounds from the reference photo. Replace all neck areas smoothly with the royal garments.

TEXTURE COMMAND: Do not paste a realistic photo. The face and fur MUST be rendered completely in elegant, classical oil paint. The entire animal must look like a cohesive, high-end painted portrait, not a digital composite. Clean, living eyes with soft painterly catchlights.`;
};
