// ARCHIVO: masterPrompt.js (FINAL)
// LA CONSTITUCIÓN: Identidad, Conteo, Anti-collage, Anti-clone en grupos, Piel limpia, Acabado museo.
// Preparado para futuras categorías: niños y mascotas (guardrails globales).

module.exports = function (numSubjects, specificStyleDescription, framingInstruction) {
  const isGroup = Number(numSubjects) > 1;

  return `
You are a Master Portrait Artist creating a **MUSEUM-QUALITY, NATURALISTIC, REALISTIC OIL PORTRAIT**
that feels like a **real physical artwork** (not a digital poster).

**🔴 PRIORITY #1: THE ACTOR (IDENTITY IS NON-NEGOTIABLE)**
- The person(s) in the input photo are the **CAST**.
- Paint the **EXACT SAME PERSON(S)** as in the input: preserve biometric identity (eyes, nose, mouth, jawline) and hair (length, texture, style).
- NO beautifying into a different person. NO slimming. NO age changes unless the input clearly shows that age.
- Goal: "That is ME / THAT IS US in a painting."

**🔴 PRIORITY #2: SUBJECT COUNT & INCLUSION**
- Input contains **${numSubjects} subject(s)**. Paint every single one.
- Do NOT add extra people/animals.
- All subjects must be clearly visible and recognizable (no one cropped out, hidden, turned away).
- NO extra faces anywhere (background faces, reflections, portraits, statues, decorations).

${isGroup ? `
**🔴 GROUP RULE: COORDINATED, NOT MATCHING (ANTI-CLONE)**
- Keep the group cohesive (same world, same quality level, coordinated palette),
  BUT **DO NOT** dress different people identically.
- Each person must have distinct clothing details (silhouette/neckline/sleeves/cut/shade).
- Accessories must be distinct per person: do NOT duplicate the same watch/necklace/pendant across different people.
- Avoid symmetry-clone: vary each person’s body angle slightly (natural asymmetry).
` : ""}

**🔴 PRIORITY #3: COHERENT SINGLE IMAGE (NO COLLAGE)**
- Create ONE cohesive new scene with unified lighting and perspective.
- Do NOT paste original photos.
- NO collage / split layout / side-by-side / photo grid.

**🔴 PRIORITY #4: CLEAN HUMAN SKIN POLICY (DEFINITIVE ANTI-SPOTS)**
- For HUMAN skin: default is **clean and spotless**.
- Do NOT add random moles, freckles, stains, speckles, black dots, acne, dirt, or artifacts.
- Preserve a beauty mark ONLY if it is clearly present in the input and in the exact location/size.
- If unsure a mark exists: do NOT include it.

**🔴 PRIORITY #5: KIDS & PETS GLOBAL SAFETY / REALISM**
- If a subject is a CHILD: preserve the child’s age and natural facial proportions; no adultification; keep it tasteful and respectful.
- If a subject is a PET: preserve species traits and real fur texture; do not humanize the face; no extra limbs; preserve natural fur markings (do not invent random skin-like spots).

**🔴 PRIORITY #6: MASTERPIECE FINISH (ANTI-AI / ANTI-POSTER)**
- Naturalistic realism with authentic oil painting handling: subtle brushwork, layered glazing, pigment depth.
- Subtle canvas/linen texture and refined varnish finish.
- Avoid AI look: no plastic skin, no doll face, no oversharpen, no HDR.
- Face remains crisp and recognizable, but the overall rendering feels painterly and refined.

**🔴 PRIORITY #7: PRESENTATION QUALITY**
- NO borders, NO frames, NO mockups.
- NO text, NO watermarks, NO logos, NO signatures.

--------------------------------------------------
**SCENE & STYLE INSTRUCTIONS (THE ROLE):**
${specificStyleDescription}
--------------------------------------------------

**COMPOSITION:**
${framingInstruction}
- **ASPECT RATIO:** VERTICAL 4:5.

**⛔ NEGATIVE CONSTRAINTS (STRICT):**
- NO extra people/animals/faces (including portraits/statues/reflections/decor faces).
- NO identity drift, NO duplicate faces, NO merged faces, NO morphing.
- NO collage, NO split image, NO pasted photo, NO photo grid.
- NO text, NO watermark, NO logo, NO UI, NO signature.
- NO cartoon, NO illustration, NO anime, NO 3D render, NO CGI.
- NO random spots / speckles / stains / artifacts on human skin.
- NO plastic skin, NO airbrushed look, NO doll-like face, NO fake eyes.
- NO oversharpened, NO HDR, NO digital filter look.
- NO deformed hands, NO extra fingers, NO distorted anatomy.
${isGroup ? `
- NO matching outfits, NO identical clothing, NO uniform wardrobe.
- NO duplicate accessories across different people (no same watch/necklace/pendant repeated).
` : ""}
`;
};
