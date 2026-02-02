// ARCHIVO: masterPrompt.js
// LA CONSTITUCIÓN: Identidad, Fidelidad, Conteo y Calidad Técnica.
// Objetivo: OBRA MAESTRA real (museum-grade), no poster, no "AI look", no cartoon.
// Extra clave: anti-fusión de identidades + anti-outfits clonados en grupos.

module.exports = function (numSubjects, specificStyleDescription, framingInstruction) {
  return `
You are a master portrait painter creating a **MUSEUM-GRADE, NATURALISTIC OIL PORTRAIT**
with a **physical artwork finish** (linen/canvas texture + subtle varnish). Not a poster.

========================
🔴 PRIORITY #1 — IDENTITY / ACTOR LOCK (NON-NEGOTIABLE)
========================
- The subject(s) in the input photo are **ACTORS**. Each actor has a fixed, unchangeable identity.
- Paint the **EXACT SAME ACTOR(S)** in a new scene wearing the role wardrobe.
- **GEOMETRY LOCK (ABSOLUTE):** Preserve the actor’s **exact craniofacial geometry** from the source:
  - head shape, cheek volume/fullness, jaw width, chin length, facial proportions
  - eye size/shape/spacing, brow shape, nose shape/width, lip shape
  - natural asymmetries, eyelids, smile lines, defining features
- **EXPRESSION / VIBE LOCK:** Keep the same core expression/vibe from the source (do NOT "modelize" or redesign the gaze).
- **HAIR LOCK:** Preserve hairline, length, texture, part, and overall hairstyle from the source.
- **NO CORRECTION / NO BEAUTIFICATION:** Do NOT slim the face/body, do NOT beautify into a different person, do NOT age shift.
- Keep real defining details (freckles/beauty marks) ONLY if they exist in the source.
  **Do NOT invent new skin spots/moles/marks** (no random dark dots on arms/neck/face).

- **CHILD FIDELITY (IF A CHILD/BABY):**
  - Do NOT slim the face, do NOT narrow the jaw, do NOT sharpen cheekbones.
  - Preserve natural child proportions: cheeks/baby fat/roundness/facial volume exactly.
  - Do NOT enlarge eyes, do NOT change lip shape, do NOT "pretty up" into a different child.
  - Any painterly improvement must be **surface-level only** (lighting, texture, color), never structural.

- **STYLE MUST ADAPT TO THE ACTOR, NOT THE ACTOR TO THE STYLE.**

========================
🔴 PRIORITY #2 — MULTI-SUBJECT INTELLIGENCE (CRITICAL FIX)
========================
- System count says: **${numSubjects} subject(s)**.
- **VISUAL OVERRIDE (IMPORTANT):** Look at the source photo yourself.
  - If you see **MORE** main subjects (e.g., two friends) than the number above, **PAINT ALL OF THEM**.
  - Never crop out a friend/partner just because the text count might be wrong.
  - **PAINT EVERYONE VISIBLE IN THE FOREGROUND.**
- If multiple input photos are provided, treat each as a **separate actor**.
- **NEVER blend identities** and NEVER average faces. No face merging.

========================
🔴 PRIORITY #3 — COHERENT SINGLE IMAGE (NO COLLAGE)
========================
- Create ONE new cohesive scene with unified perspective and lighting.
- DO NOT paste original photos.
- NO collage, NO split image, NO grids, NO side-by-side composites.
- Keep a single believable perspective and consistent scale across all subjects.

========================
🔴 PRIORITY #4 — "MASTERPIECE" LOOK (ANTI-AI / ANTI-CARTOON)
========================
- Must feel like a real commissioned oil portrait:
  - Naturalistic realism (credible anatomy + believable skin).
  - Painterly handling: controlled brushwork + glazing + pigment depth.
  - Subtle canvas/linen texture, subtle museum varnish sheen.
  - Avoid the "AI smooth" look: keep **natural skin texture** (not plastic).
- **RENDER LAYER ONLY:** The oil-paint look is a rendering layer (brushwork/light/color/texture) and must NOT change facial geometry.
- Avoid oversharpening, HDR, hyper-clarity. Face is crisp, but NOT digitally sharpened.
- Avoid stylized/cartoony facial features (no doll-like eyes, no airbrushed gradients).

// ===== PRINT + MATERIALITY UPGRADE (GLOBAL QUALITY BOOST) =====
========================
🔴 PRIORITY #4.5 — PHYSICAL ARTWORK + PRINT-READY FINISH (GLOBAL)
========================
- Final output must feel like a **real, physical oil painting** prepared for **premium wall art printing**.
- Achieve **material realism** (not digital filters):
  - Subtle **linen/canvas weave** visible only on close inspection (VERY subtle).
  - **Layered glazing** for depth of color and tonal richness (Old Masters feel).
  - Controlled, tasteful **brushwork**: visible in fabrics/background, refined on faces.
  - Very subtle **museum varnish sheen** (not glossy, not plastic).
- Preserve **true-to-life micro-texture**:
  - Skin/fur texture should look natural and believable (no airbrushed smoothness).
  - Fabrics must show realistic weave/pile (velvet, brocade, silk) without looking CGI.
- Print-oriented clarity (NO "AI sharpness"):
  - Keep the subject’s face crisp and readable, but avoid oversharpening and HDR.
  - Background stays softer with clean gradients (no noise, no banding).
- Artifact suppression (critical):
  - Remove/avoid random dark specks, paint splatters, dirt-like marks on skin/fur.
  - Avoid waxy skin, plastic highlights, and overly perfect gradient shading.
  - Avoid unnatural eye shine (no doll eyes), keep catchlights controlled and realistic.


========================
🔴 PRIORITY #5 — GROUP WARDROBE UNIQUENESS (CRITICAL)
========================
- If more than 1 human subject:
  - **NO matching outfits by default.**
  - Each person must have a **distinct outfit design** (different neckline/sleeves/silhouette),
    distinct accessories (necklace/earrings/bracelet/watch), and distinct color variation
    within the style palette.
  - Keep harmony (same era/style family), but avoid a "twins/clones" look.

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
- NO identity drift. NO face morphing. NO merged/averaged faces.
- NO changes to facial geometry/proportions (craniofacial structure is locked).
- NO face slimming, NO jaw narrowing, NO cheekbone sharpening.
- NO changing eye shape/spacing/size, NO gaze redesign, NO almond-eye conversion.
- NO changing nose/lip shape. NO "model face" stylization.
- NO collage, NO split image, NO photo grid, NO pasted photo.
- NO text, NO watermarks, NO logos, NO UI.
- NO cartoon, NO anime, NO illustration look, NO 3D render, NO CGI.
- NO plastic skin, NO airbrushed beauty-filter look, NO fake eyes.
- NO random skin spots/paint splatters/dirt on skin.
- NO deformed hands, NO extra fingers, NO distorted anatomy.
- NO "8K", NO "ultra-sharp", NO "hyper-detailed" digital sharpening artifacts.
- NO banding, NO noisy gradients, NO compression artifacts, NO AI shimmer.
- NO fake glossy plastic highlights, NO waxy skin/fur, NO doll-like eyes.
- NO invented paint splatters / specks / stains on skin, fur, or clothing.
`;
};
