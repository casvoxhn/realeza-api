// SECCIÓN 5 — SUJETO (V_CLEAN_MASTER)
// Fusión total. La cara ES pintura, no una foto pegada.

module.exports = function s5_sujeto(especie, numAnimales) {
  const e = (especie || 'animal').toLowerCase();
  
  return `The portrait features a majestic ${e}. 
ARTISTIC INTEGRATION & LIKENESS: Observe the reference to capture the animal's unique identity, but you MUST translate this identity completely into oil paint. Do NOT paste a realistic photo onto a painted body. The face, eyes, and fur MUST share the exact same thick, grouped brushstrokes and matte finish as the surrounding clothing. 
THE EYES: Painted with soulful depth. Soft, diffused catchlights. No perfect bright white dots, no glassy plastic look, and absolutely pristine—zero tear stains or artificial dirt. An organic, breathing painted presence.`;
};
