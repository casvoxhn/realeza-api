// ARCHIVO: masterPrompt.js
// LA CONSTITUCIÓN: Identidad, Fidelidad, Conteo y Calidad Técnica.

module.exports = function(numSubjects, specificStyleDescription, framingInstruction) {
  return `
You are a Master Portrait Painter creating a **MUSEUM-QUALITY OIL PAINTING**.

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
- **NO collage / no split layout / no side-by-side composites.**

**🔴 PRIORITY #4: ARTISTIC TECHNIQUE (THE "WOW")**
- Apply a museum-grade oil painting finish with refined detail.
- Use glazing to enhance lighting and texture, but **NEVER alter facial structure**.
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
- NO extra people, NO extra animals, NO extra faces.
- NO duplicate faces, NO merged faces, NO face morphing.
- NO collage, NO split image, NO pasted photo, NO photo grid.
- NO text, NO watermarks, NO logos.
- NO cartoon, NO anime, NO 3D render.
- NO deformed hands, NO extra fingers, NO distorted anatomy.
`;
};
