// SECCIÓN 5 — SUJETO v10.0 (ANTI-SQUASH & ARTIFACT CLEANUP)
// Se elimina el "Full Body Lock" que forzaba a la IA a alejar la cámara e inventar mesas de piedra.

module.exports = function s5_sujeto(especie) {
  const e = (especie || 'animal').toLowerCase();

  return `SUBJECT IDENTITY & CLEANUP (CRITICAL):
1. FORENSIC LIKENESS: Preserve the unmistakable identity, facial structure, markings, and soul of THIS EXACT ${e} from the reference photo.
2. ARTIFACT REMOVAL: Completely eliminate all modern artifacts from the reference photo (modern collars, leashes, harnesses, tags, clothing, human hands, modern backgrounds). Replace them seamlessly with the royal wardrobe.
3. ANATOMICAL BLEED (NO SQUASHING): Allow the body, heavy velvet, and limbs to naturally bleed off the edges of the canvas according to the framing rules. Do NOT force the entire lower body or rear legs to be visible if the framing dictates a closer crop. Let the anatomy flow off-screen to preserve massive scale.`;
};
