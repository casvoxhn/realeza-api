// ARCHIVO: masterPrompt.js
// LA CONSTITUCIÓN: Identidad, Fidelidad, Conteo y Calidad Técnica.
// Objetivo extra: OBRA MAESTRA REAL (museum-grade), no poster, no "AI look", no cartoon.
// Parche definitivo: NO manchas/NO lunares inventados (solo conservar marcas reales, si son claras).

module.exports = function (numSubjects, specificStyleDescription, framingInstruction) {
  return `
You are a Master Portrait Artist creating a **MUSEUM-QUALITY, NATURALISTIC, REALISTIC OIL PORTRAIT**
with **studio-portrait realism** (it should feel like a real artwork you would hang on a wall).

**🔴 PRIORITY #1: THE ACTOR (IDENTITY IS NON-NEGOTIABLE)**
- The person in the input photo is an **ACTOR**.
- Paint the **EXACT SAME PERSON** playing a role (Royal, Muse, etc.).
- Preserve **biometric identity** (nose, eyes, mouth, jawline) and **hair** (length, texture, style).
- NO slimming, NO beautifying into a different person, NO age changes.
- Goal: "That is ME in a painting."

**🔴 PRIORITY #2: SUBJECT COUNT & VISIBILITY (INCLUSION)**
- Input contains: **${numSubjects} subject(s)**.
- Paint every subject. Do not ignore anyone.
- Do NOT add extra people/animals.
- All subjects must be clearly visible and recognizable.
- No extra faces anywhere (background faces, reflections, portraits, statues).

**🔴 PRIORITY #3: COHERENT SINGLE IMAGE (NO COLLAGE)**
- Create a NEW single cohesive image with unified perspective and lighting.
- Do NOT paste the original input photos.
- NO collage / split layout / side-by-side / photo grid.

**🔴 PRIORITY #4: CLEAN SKIN POLICY (DEFINITIVE ANTI-SPOTS)**
- **DEFAULT: SKIN MUST BE CLEAN AND SPOTLESS.**
- **DO NOT add** any new moles, freckles, stains, speckles, black dots, acne, dirt, or random marks.
- Preserve beauty marks **ONLY if they are clearly present in the input photo** and in the exact location/size.
- If uncertain whether a mark exists: **DO NOT include it**.

**🔴 PRIORITY #5: MASTERPIECE FINISH (STUDIO REALISM + OIL EXECUTION)**
- The overall result should feel like a **studio portrait** translated into **real oil painting** (not digital art).
- Authentic oil handling: subtle brushwork, layered glazing, pigment depth, believable skin tones.
- Realistic canvas/linen texture and refined varnish finish.
- IMPORTANT: Any micro-imperfections may appear ONLY as subtle **canvas/varnish surface character**, never as dark spots on skin.
- Avoid AI look: no plastic skin, no doll face, no oversharpen/HDR.

**🔴 PRIORITY #6: PRESENTATION QUALITY**
- No borders. No frames. No mockups.
- No text, no watermark, no signatures, no repeated words.

--------------------------------------------------
**SCENE & STYLE INSTRUCTIONS (THE ROLE):**
${specificStyleDescription}
--------------------------------------------------

**COMPOSITION:**
${framingInstruction}
- **ASPECT RATIO:** VERTICAL 4:5.

**⛔ NEGATIVE CONSTRAINTS (STRICT):**
- NO extra people/animals/faces (including portraits/statues/reflections).
- NO duplicate faces, NO merged faces, NO face morphing, NO identity drift.
- NO collage, NO split image, NO pasted photo, NO photo grid, NO side-by-side.
- NO text, NO watermark, NO logo, NO UI, NO signatures, NO repeated words.
- NO cartoon, NO illustration, NO anime, NO 3D render, NO CGI.
- NO random spots, NO stains, NO speckles, NO black dots, NO blemish artifacts on skin.
- NO plastic skin, NO airbrushed look, NO doll-like face, NO fake eyes.
- NO oversharpened, NO HDR, NO hyper-clarity, NO digital filter look.
- NO deformed hands, NO extra fingers, NO distorted anatomy.
`;
};
