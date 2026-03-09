// ARCHIVO: utils/humanGuard.js
// Se activa SOLO cuando el visual analysis detecta humanos/niños junto a la mascota.
// Dos misiones: identity lock del humano + luz separada para no destruir al niño.

module.exports = function humanGuard() {
  return `
========================
🔒 HUMAN GUARD (ACTIVE — HUMAN OR CHILD DETECTED)
========================
A human or child is present alongside the pet. Apply these rules with absolute priority:

**HUMAN IDENTITY LOCK (NON-NEGOTIABLE):**
- Preserve the human's exact facial geometry: head shape, cheek volume, jaw width,
  eye size/shape/spacing, nose, lips, chin, natural asymmetries.
- NO face slimming, NO jaw narrowing, NO cheekbone sharpening, NO beautification.
- NO almond-eye conversion, NO gaze redesign, NO "model face" stylization.
- HAIR LOCK: same hairline, length, texture, color, and style as in the reference.
- If a child/baby: preserve baby fat, roundness, natural proportions exactly.
  Do NOT "pretty up" or idealize into a different child.

**DUAL LIGHTING RULE:**
- The PET receives the dramatic, directional style lighting (chiaroscuro, etc.)
- The HUMAN receives soft, flattering, diffused fill light — face must be fully
  visible, properly lit, NO shadow blotches on the human face.
- Both subjects share the same warm color temperature — they exist in the same scene.

**HIERARCHY:**
- The PET is the visual hero. The human is the emotional context.
- The human complements — they do NOT compete with the pet for visual dominance.
- Physical connection between them is MANDATORY:
  child's arm around the pet's neck, adult hand resting on the pet's back,
  or pet looking up at the human with visible bond.

**BACKDROP when human is present:**
- Use a warm, luminous backdrop (warm ivory, soft amber, warm neutral gradient).
- Do NOT use near-black backgrounds — the human face must read clearly.
========================
`;
};
