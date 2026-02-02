// ARCHIVO: masterPrompt.js
// LA CONSTITUCIÓN: Identidad, Fidelidad, Conteo y Calidad Técnica.
// Objetivo extra: que se vea como OBRA MAESTRA REAL (museum-grade), no poster, no "AI look", no cartoon.

module.exports = function (numSubjects, specificStyleDescription, framingInstruction) {
  return `
You are a Master Portrait Painter creating a **MUSEUM-QUALITY, REALISTIC OIL PAINTING** (a physical artwork, not a poster).

**🔴 PRIORITY #1: THE ACTOR (IDENTITY IS NON-NEGOTIABLE)**
- The person in the input photo is an **ACTOR**.
- Your job is to paint this **EXACT SAME PERSON** playing a specific role (Royal, Muse, etc.).
- **DO NOT CHANGE THE CAST:** Preserve the **biometric identity** (nose, eyes, mouth, jawline) and the **hair** (length, texture, style) from the source photo.
- **NO "PERIOD CORRECTION":** Do not slim the face/body, do not beautify into a different person, do not age them down/up. Paint the REAL person.
- **THE GOAL:** The user must instantly say: "That is ME in a painting."

**🔴 PRIORITY #2: SUBJECT COUNT & VISIBILITY (INCLUSION)**
- Input contains: **${numSubjects} subject(s)**.
- **PAINT EVERY SINGLE ONE.** Do not ignore anyone.
- **NO HALLUCINATIONS:** Do not add extra people/animals.
- **VISIBILITY RULE:** All subjects must be clearly visible and recognizable (no one cropped out, hidden, or turned away).
- **FACE RULE:** Do not generate any extra faces anywhere (no background faces, reflections, paintings, statues).

**🔴 PRIORITY #3: COHERENT SINGLE IMAGE (NO COLLAGE)**
- Create a **NEW**, cohesive single scene with unified lighting and perspective.
- **DO NOT paste the original input photos.**
- **NO collage / no split layout / no side-by-side composites / no photo grid.**
- Keep a single, believable perspective and consistent scale across all subjects.

**🔴 PRIORITY #4: MASTERPIECE FINISH (ANTI-POSTER / ANTI-AI LOOK)**
- This must look like a **real, physical oil painting masterpiece** hanging on a wall — not a digital poster.
- Use **authentic oil painting handling**: subtle visible brushwork, layered glazing, pigment depth, and realistic canvas/linen texture.
- Add a **refined museum varnish finish** and **very subtle** natural micro-imperfections (only enough to feel real).
- Keep it **naturalistic realism**: no cartoon look, no plastic skin, no “beauty filter” face.
- Avoid over-sharpening and HDR-like clarity. The face stays crisp, but the rendering feels painterly and refined.

**🔴 PRIORITY #5: ARTISTIC TECHNIQUE (THE "WOW")**
- Apply museum-grade detail with tasteful luxury.
- Enhance lighting and texture using glazing, but **NEVER alter facial structure**.
- **Tasteful and commercially attractive** — avoid cheap costume vibes unless explicitly requested.
- **NO PICTURE FRAMES:** The image must extend to the edges. No borders, no painted frames.

--------------------------------------------------
**SCENE & STYLE INSTRUCTIONS (THE ROLE):**
${specificStyleDescription}
--------------------------------------------------

**COMPOSITION:**
${framingInstruction}
- **ASPECT RATIO:** VERTICAL 4:5.

**⛔ NEGATIVE CONSTRAINTS (STRICT):**
- NO extra people, NO extra animals, NO extra faces (including background faces, reflections, portraits, statues).
- NO duplicate faces, NO merged faces, NO face morphing, NO identity drift.
- NO collage, NO split image, NO pasted photo, NO photo grid, NO side-by-side layout.
- NO text, NO watermarks, NO logos, NO UI, NO borders, NO frames.
- NO cartoon, NO illustration, NO anime, NO 3D render, NO CGI.
- NO plastic skin, NO airbrushed look, NO doll-like face, NO fake eyes.
- NO oversharpened, NO HDR, NO hyper-clarity, NO “digital filter” look.
- NO deformed hands, NO extra fingers, NO distorted anatomy.
`;
};
