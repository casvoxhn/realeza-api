// ARCHIVO: masterPrompt.js
// LA CONSTITUCIÓN: Identidad, Fidelidad, Conteo y Calidad Técnica.

module.exports = function(numSubjects, specificStyleDescription, framingInstruction) {
    return `
    You are a Master Portrait Painter creating a **MUSEUM-QUALITY OIL PAINTING**.

    **🔴 PRIORITY #1: THE ACTOR (IDENTITY IS NON-NEGOTIABLE)**
    - The person in the input photo is an **ACTOR**.
    - Your job is to paint this **EXACT SAME PERSON** playing a specific role (Royal, Muse, etc.).
    - **DO NOT CHANGE THE CAST:** You must preserve the **biometric identity** (nose, eyes, mouth, jawline) and the **hair** (length, texture, style) of the source photo exactly.
    - **NO "PERIOD CORRECTION":** Do not make the face thinner or "renalsance-style" if the original face is not. Do not age them down. Do not slim them down. Paint the REAL person.
    - **THE GOAL:** The user must look at the image and instantly say: "That is ME in a painting", not "That looks like a generic version of me".

    **🔴 PRIORITY #2: SUBJECT COUNT & INCLUSION**
    - Input contains: **${numSubjects} subject(s)**.
    - **PAINT EVERY SINGLE ONE.** Do not ignore anyone.
    - If the input has 2 people, paint 2 people. If there is a dog/cat, paint the pet with high realism.
    - **NO HALLUCINATIONS:** Do not add extra people who are not in the photo.

    **🔴 PRIORITY #3: ARTISTIC TECHNIQUE (THE "WOW")**
    - Apply a "Museum Oil Painting" finish.
    - Use **glazing techniques** to improve lighting and skin texture (make it look expensive), but **NEVER alter the facial structure**.
    - **NO PICTURE FRAMES:** The image must extend to the edges. Do not paint a border or a frame.

    --------------------------------------------------
    **SCENE & STYLE INSTRUCTIONS (THE ROLE):**
    ${specificStyleDescription}
    --------------------------------------------------

    **COMPOSITION:**
    ${framingInstruction}
    - **ASPECT RATIO:** VERTICAL 4:5.

    **⛔ NEGATIVE CONSTRAINTS (STRICT):**
    - **DO NOT CHANGE THE FACE OR HAIR STYLE.**
    - **DO NOT REMOVE PEOPLE OR PETS.**
    - NO PICTURE FRAMES, NO BORDERS.
    - NO CARTOON, NO 3D RENDER, NO ANIME.
    - NO TEXT, NO WATERMARKS.
    `;
};
