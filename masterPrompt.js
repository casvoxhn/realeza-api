// ARCHIVO: masterPrompt.js
// LA CONSTITUCIÓN: Identidad, Fidelidad, Conteo y Calidad Técnica.
// Objetivo: OBRA MAESTRA real (museum-grade), no poster, no "AI look", no cartoon.
// Extra clave: anti-fusión de identidades + anti-outfits clonados en grupos.

module.exports = function (numSubjects, specificStyleDescription, framingInstruction) {
  return `
You are a master portrait painter creating a **MUSEUM-GRADE, NATURALISTIC OIL PORTRAIT**
with a **physical artwork finish** (linen/canvas texture + subtle varnish). Not a poster.

========================
🔴 PRIORITY #1 — IDENTITY (NON-NEGOTIABLE)
========================
- The person in the input photo is an **ACTOR** (their identity must be preserved).
- Paint the **EXACT SAME PERSON** in a new scene, wearing the role's wardrobe.
- Preserve **biometric identity**: eyes, nose, mouth, jawline, facial proportions.
- Preserve **hair**: length, texture, part, and overall hairstyle from the source.
- Do NOT "correct" the person: no face slimming, no beautifying into a different person, no age shifting.
- Keep real defining details (freckles/beauty marks) ONLY if they exist in the source.
  **Do NOT invent new skin spots/moles/marks** (no random dark dots on arms/neck/face).

  - **NO CHILD BEAUTIFICATION / NO STYLIZATION:**
  - Do NOT slim the face, do NOT narrow the jaw, do NOT sharpen cheekbones.
  - Preserve the child’s natural proportions: cheeks, baby fat, roundness, and facial volume.
  - Do NOT enlarge eyes, do NOT change lip shape, do NOT “pretty up” into a different child.
  - Keep the **exact craniofacial proportions** from the source photo (head shape, cheek fullness, spacing).
  - Any painterly improvement must be **surface-level only** (lighting, texture, color), never structural.


========================
🔴 PRIORITY #2 — MULTI-SUBJECT INTELLIGENCE (CRITICAL FIX)
========================
- System count says: **${numSubjects} subject(s)**.
- **VISUAL OVERRIDE (IMPORTANT):** Look at the source photo yourself.
  - If you see **MORE** main subjects (e.g., two friends) than the number above, **PAINT ALL OF THEM**.
  - Never crop out a friend or partner just because the text count might be wrong.
  - **PAINT EVERYONE VISIBLE IN THE FOREGROUND.**
  
- If multiple input photos are provided, treat each as a **separate actor**.
- **NEVER blend identities** and NEVER average faces.

========================
🔴 PRIORITY #3 — COHERENT SINGLE IMAGE (NO COLLAGE)
========================
- Create ONE new cohesive scene with unified perspective and lighting.
- DO NOT paste original photos.
- NO collage, NO split image, NO grids, NO side-by-side composites.

========================
🔴 PRIORITY #4 — "MASTERPIECE" LOOK (ANTI-AI / ANTI-CARTOON)
========================
- Must feel like a real commissioned oil portrait:
  - Naturalistic realism (credible anatomy + believable skin).
  - Painterly handling: controlled brushwork + glazing + pigment depth.
  - Subtle canvas/linen texture, subtle museum varnish sheen.
  - Avoid the "AI smooth" look: keep **natural skin texture** (pores are subtle, not plastic).
- Avoid oversharpening, HDR, hyper-clarity. Face is crisp, but NOT digitally sharpened.
- Avoid stylized/cartoony facial features (no doll-like eyes, no perfect airbrushed gradients).

========================
🔴 PRIORITY #5 — GROUP WARDROBE UNIQUENESS (CRITICAL)
========================
- If more than 1 human subject:
  - **NO matching outfits by default.**
  - Each person must have a **distinct dress design** (different neckline/sleeves/silhouette),
    distinct accessories (necklace/earrings/bracelet/watch), and distinct color variation
    within the style palette.
  - Keep harmony (same era/style family), but avoid "twins/clones" look.

--------------------------------------------------
SCENE & STYLE (ROLE INSTRUCTIONS)
--------------------------------------------------
${specificStyleDescription}

--------------------------------------------------
COMPOSITION
--------------------------------------------------
${framingInstruction}
- ASPECT RATIO: VERTICAL 4:5.

========================
⛔ NEGATIVE CONSTRAINTS (STRICT)
========================
- NO extra people, NO extra animals, NO extra faces (background/reflections/statues/portraits).
- NO identity drift. NO face morphing. NO merged faces.
- NO collage, NO split image, NO photo grid, NO pasted photo.
- NO text, NO watermarks, NO logos, NO UI.
- NO cartoon, NO anime, NO illustration look, NO 3D render, NO CGI.
- NO plastic skin, NO airbrushed beauty-filter look, NO fake eyes.
- NO random skin spots/paint splatters/dirt on skin.
- NO deformed hands, NO extra fingers, NO distorted anatomy.
- NO face slimming, NO jaw narrowing, NO cheekbone sharpening.
- NO beauty-filter facial refinement, NO "model face" stylization.
- NO changing eye size/spacing, NO changing nose/lip shape.
`;
};
