// ARCHIVO: mujer.js
// V200: CORE ENGINE — SIMPLE, ESTABLE, VENDIBLE
// Prioridades: identidad > retrato > conteo > wow > estilo.
// Diseñado para Nano Banana Pro con mínima fricción.

module.exports = function(style, numSubjects, isGroup) {

    // --- RANDOM UTIL ---
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // -------------------------------------------------
    // 1) BLOQUES CRÍTICOS (SIEMPRE ACTIVOS)
    // -------------------------------------------------

    const identityBlock = `
IDENTITY — TOP PRIORITY:
Preserve the EXACT facial features of every person from the reference photo.
Eyes, nose, mouth, jawline, proportions must stay the same.
Beautify only with lighting and skin texture.
Do NOT replace the face with a different person.
Keep the same haircut, length and texture.
`;

    const strictCountBlock = `
SUBJECT COUNT — STRICT:
Depict EXACTLY ${numSubjects} human subject(s) from the reference.
If there are pets, include ALL pets.
No extra people.
No background figures.
No silhouettes.
No reflections with faces.
No invented subjects.
If framing is tight, zoom out — never remove anyone.
`;

    const antiCollageBlock = `
SINGLE CANVAS RULE:
Combine all reference photos into ONE unified painted scene.
Do NOT create split screens, diptychs, panels or collages.
Do NOT paste original photos.
Everything must exist in the same environment and lighting.
`;

    const portraitRule = `
PORTRAIT RULE:
This must feel like a classical portrait made to be framed.
Eyes sharp, face dominant, flattering proportions.
No wide-angle distortion.
Oil painting look.
`;

    const poseRule = `
POSE:
You may reinterpret the body posture to make it noble and elegant.
Do NOT change the face.
Avoid selfie poses or awkward hands.
`;

    // -------------------------------------------------
    // 2) ESTILOS LIMPIOS Y VENDIBLES
    // -------------------------------------------------

    let styleBlock = "";

    if (style === "musa") {

        const scenes = [
            "twilight garden",
            "misty lakeside",
            "moonlit orchard",
            "sunset rose terrace"
        ];

        const colors = [
            "ivory and champagne",
            "lavender and pearl",
            "dusty rose and gold",
            "sky blue and cream"
        ];

        styleBlock = `
STYLE: ETHEREAL MUSE.
Atmospheric, poetic, romantic.
Flowing classical gown in ${pick(colors)}.
Soft glowing light.
Scene: ${pick(scenes)}.
`;

    } else if (style === "realeza") {

        const scenes = [
            "opulent throne room",
            "hall of mirrors",
            "royal gallery",
            "palace balcony"
        ];

        const colors = [
            "crimson and gold",
            "royal blue and diamonds",
            "emerald and gold",
            "black velvet and jewels"
        ];

        styleBlock = `
STYLE: IMPERIAL QUEEN.
Maximum luxury and authority.
Heavy court gown in ${pick(colors)}.
Crown or tiara and heirloom jewelry.
Scene: ${pick(scenes)}.
Bright luxurious lighting on face and jewels.
`;

    } else if (style === "empoderada") {

        const scenes = [
            "renaissance library",
            "court chamber with velvet drapery",
            "stone hall with torchlight",
            "royal map room"
        ];

        const colors = [
            "deep red and antique gold",
            "midnight blue and embroidery",
            "dark emerald and gold",
            "obsidian black and champagne"
        ];

        styleBlock = `
STYLE: RENAISSANCE POWER WOMAN.
Elegant, feminine, commanding — not modern.
Court gown in ${pick(colors)}.
Clean neckline, sculpted bodice, dramatic sleeves.
No modern fashion.
Scene: ${pick(scenes)}.
Chiaroscuro lighting for strength.
`;

    } else {

        styleBlock = `
STYLE: CLASSICAL PORTRAIT.
Elegant, museum-grade, timeless.
`;
    }

    // -------------------------------------------------
    // 3) FRAMING
    // -------------------------------------------------

    let framingBlock = "";

    if (numSubjects > 1) {

        framingBlock = `
FRAMING:
Wide or three-quarter group portrait.
Keep everyone visible.
Main woman slightly emphasized with light and position.
Arrange subjects into a balanced composition.
`;

    } else {

        framingBlock = `
FRAMING:
Three-quarter or waist-up portrait.
Face is dominant.
`;
    }

    // -------------------------------------------------
    // 4) FINAL PROMPT
    // -------------------------------------------------

    return `
You are a classical portrait painter creating a museum-grade oil painting.

ASPECT RATIO: vertical 4:5.

${identityBlock}

${strictCountBlock}

${antiCollageBlock}

${portraitRule}

${poseRule}

${styleBlock}

${framingBlock}

NEGATIVE RULES:
No cartoon.
No anime.
No CGI / 3D.
No plastic skin.
No text or logos.
No watermarks.
No frames.
`;
};
