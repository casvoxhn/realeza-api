// ARCHIVO: mujer.js
// V110: STRICT SUBJECT COUNT ENFORCEMENT + GROUP COMPOSITION LOCK
// Objetivo: respetar EXACTAMENTE la cantidad de sujetos, sin omitir, sin fusionar, sin reemplazar.
// Nota brutal: si aun falla, es tu pipeline (face-id/adapters/weights). Mira checklist al final.

module.exports = function(style, numSubjects, isGroup) {

  // -------------------------------
  // UTIL
  // -------------------------------
  function randomPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function weightedPick(weightedOptions) {
    const total = weightedOptions.reduce((s, o) => s + o.w, 0);
    let r = Math.random() * total;
    for (const o of weightedOptions) {
      r -= o.w;
      if (r <= 0) return o.value;
    }
    return weightedOptions[weightedOptions.length - 1].value;
  }

  // -------------------------------
  // 🔒 BLOQUE DE CABELLO
  // -------------------------------
  const hairLock = `
HAIR LOCK — CRITICAL:
Preserve the SAME haircut, length, hairline and natural texture for each person from the reference.
Do NOT change hairstyle category (straight/wavy/curly) per person.
Do NOT shorten or lengthen hair. Do NOT add bangs if absent.
Allowed only: subtle polish, minimal partial pinning, minimal wind, period accessories placed over existing hair.
`;

  // -------------------------------
  // 🎯 MOTOR ENCUADRES PONDERADOS (EN GRUPO: SIEMPRE ENCUADRE QUE QUEPA TODO)
  // -------------------------------
  function cropByStyle(styleName, subjectsCount) {
    const group = subjectsCount > 1;

    if (styleName === "musa") {
      return group
        ? weightedPick([
            { value: "three-quarter length group portrait (fit everyone clearly)", w: 60 },
            { value: "waist-up group portrait (fit everyone clearly)", w: 40 }
          ])
        : weightedPick([
            { value: "intimate head-and-shoulders portrait", w: 55 },
            { value: "waist-up portrait", w: 35 },
            { value: "three-quarter length portrait", w: 10 }
          ]);
    }

    if (styleName === "realeza") {
      return group
        ? weightedPick([
            { value: "three-quarter length group portrait with regalia (all visible)", w: 75 },
            { value: "full-figure group portrait with palace scale (only if all fit cleanly)", w: 25 }
          ])
        : weightedPick([
            { value: "three-quarter length grand portrait", w: 45 },
            { value: "full-figure grand portrait", w: 25 },
            { value: "head-and-shoulders royal portrait", w: 20 },
            { value: "waist-up couture portrait", w: 10 }
          ]);
    }

    if (styleName === "empoderada") {
      return group
        ? weightedPick([
            { value: "three-quarter length group portrait (editorial power, all visible)", w: 65 },
            { value: "waist-up group portrait (editorial power, all visible)", w: 35 }
          ])
        : weightedPick([
            { value: "waist-up power-fashion portrait", w: 55 },
            { value: "head-and-shoulders editorial portrait", w: 25 },
            { value: "three-quarter length fashion portrait", w: 20 }
          ]);
    }

    return group ? "three-quarter length group portrait (fit everyone)" : "waist-up portrait";
  }

  function cameraByStyle(styleName) {
    if (styleName === "musa") {
      return weightedPick([
        { value: "eye-level classical portrait angle (no distortion)", w: 65 },
        { value: "soft high-angle (subtle, flattering)", w: 30 },
        { value: "three-quarter camera placement (minimal perspective)", w: 5 }
      ]);
    }
    if (styleName === "realeza") {
      return weightedPick([
        { value: "eye-level formal grand portrait angle", w: 55 },
        { value: "slightly low-angle heroic framing (subtle authority)", w: 40 },
        { value: "three-quarter formal placement", w: 5 }
      ]);
    }
    if (styleName === "empoderada") {
      return weightedPick([
        { value: "eye-level editorial angle (direct power)", w: 60 },
        { value: "slightly low-angle (dominant authority)", w: 35 },
        { value: "three-quarter placement", w: 5 }
      ]);
    }
    return "eye-level classical portrait angle (no distortion)";
  }

  function lightingByStyle(styleName) {
    if (styleName === "musa") {
      return weightedPick([
        { value: "diffused golden-hour sfumato glow", w: 45 },
        { value: "soft window side-light with luminous falloff", w: 35 },
        { value: "gentle backlit halo rim-light", w: 20 }
      ]);
    }
    if (styleName === "realeza") {
      return weightedPick([
        { value: "palace skylight illumination (luxurious, crisp)", w: 40 },
        { value: "ceremonial candlelit glow (heirloom)", w: 30 },
        { value: "high-key daylight through tall palace windows", w: 30 }
      ]);
    }
    if (styleName === "empoderada") {
      return weightedPick([
        { value: "Rembrandt chiaroscuro (controlled contrast)", w: 55 },
        { value: "editorial spotlight falloff with rim highlights", w: 30 },
        { value: "moody sculpted side-light", w: 15 }
      ]);
    }
    return "classic painterly side-light";
  }

  // -------------------------------
  // VARIACIÓN SUAVE
  // -------------------------------
  const pose = randomPick([
    "upright aristocratic posture, composed hands",
    "three-quarter turn with lifted chin",
    "seated formal pose, elegant stillness",
    "standing contrapposto, refined shoulders",
    "balanced stance with calm authority"
  ]);

  const microExpression = randomPick([
    "calm authority",
    "poised confidence",
    "serene magnetism",
    "controlled power"
  ]);

  // -------------------------------
  // ESTILO: paletas/siluetas/escenas (coherentes)
  // -------------------------------
  const musaPalettes = [
    "ivory, blush pink and antique gold",
    "lavender, pearl white and silver",
    "rose quartz with warm ivory",
    "sky blue with pearl highlights",
    "pale gold with soft cream tones"
  ];

  const royalPalettes = [
    "crimson and gold leaf",
    "sapphire blue and ivory",
    "black velvet with diamond highlights",
    "emerald and antique gold",
    "royal purple with silver filigree"
  ];

  const empoweredPalettes = [
    "obsidian black and champagne",
    "deep oxblood red and gold",
    "graphite gray and platinum",
    "midnight blue with sharp highlights",
    "espresso brown with bronze accents"
  ];

  const musaSilhouettes = [
    "flowing Greco-Roman draped gown",
    "empire-waist ethereal dress",
    "layered chiffon mantle dress",
    "high-neck romantic robe with trailing sleeves"
  ];

  const royalSilhouettes = [
    "corseted court gown with cathedral skirt",
    "ball gown with embroidered train",
    "brocade gown with gold thread and royal cape",
    "ermine-trimmed ceremonial cloak over structured bodice"
  ];

  const empoweredSilhouettes = [
    "structured velvet power dress",
    "sculptural couture gown with sharp lines",
    "tailored blazer-gown hybrid (couture)",
    "high-fashion asymmetrical statement gown"
  ];

  const musaScenes = [
    "misty dawn garden",
    "twilight lake shore with reflections",
    "moonlit orchard with gentle haze",
    "rose terrace at sunset"
  ];

  const royalScenes = [
    "coronation throne room with heraldic details",
    "palace ballroom with chandeliers",
    "royal gallery corridor lined with portraits",
    "private audience chamber with drapery and columns"
  ];

  const empoweredScenes = [
    "dramatic velvet studio set",
    "grand staircase interior with editorial lighting",
    "gallery-like power backdrop with sculptural shadows",
    "editorial stage with spotlight falloff"
  ];

  const royalRegalia = randomPick([
    "diamond tiara or diadem (mandatory), heirloom necklace, jeweled earrings",
    "ornate crown/diadem (mandatory), royal sash, brooch with dynasty emblem",
    "tiara (mandatory), pearl set, embroidered cape clasp, signet ring"
  ]);

  const musaFabrics = randomPick([
    "silk and chiffon layers",
    "gauzy organza",
    "soft satin with gentle sheen"
  ]);

  const royalFabrics = randomPick([
    "heavy velvet and satin",
    "brocade with gold thread embroidery",
    "luxurious taffeta with jewel accents"
  ]);

  const empoweredFabrics = randomPick([
    "structured velvet tailoring",
    "matte silk with sharp couture lines",
    "high-sheen satin with sculptural seams"
  ]);

  let palette, silhouette, scene, fabrics, styleArchetype, styleCore;

  if (style === "musa") {
    palette = randomPick(musaPalettes);
    silhouette = randomPick(musaSilhouettes);
    scene = randomPick(musaScenes);
    fabrics = musaFabrics;
    styleArchetype = "Ethereal, poetic, romantic, mythic muse.";
    styleCore = `
STYLE CORE (MUSA):
Dreamy atmosphere, soft romance, luminous sfumato edges.
Never harsh power styling. No heavy royal regalia.
`;
  } else if (style === "realeza") {
    palette = randomPick(royalPalettes);
    silhouette = randomPick(royalSilhouettes);
    scene = randomPick(royalScenes);
    fabrics = royalFabrics;
    styleArchetype = "Imperial, dynastic, commanding, unmistakably royal.";
    styleCore = `
STYLE CORE (REALEZA):
Grand manner royal portrait. Regalia visible. Couture construction.
A royal headpiece is mandatory. Jewelry must feel heirloom and expensive.
`;
  } else if (style === "empoderada") {
    palette = randomPick(empoweredPalettes);
    silhouette = randomPick(empoweredSilhouettes);
    scene = randomPick(empoweredScenes);
    fabrics = empoweredFabrics;
    styleArchetype = "Dominant, powerful, fashion-forward, intimidating in elegance.";
    styleCore = `
STYLE CORE (EMPODERADA):
Editorial power, sharp silhouette, confident posture.
No princess vibe. No soft romantic mood.
`;
  } else {
    palette = randomPick(royalPalettes);
    silhouette = randomPick(royalSilhouettes);
    scene = randomPick(royalScenes);
    fabrics = royalFabrics;
    styleArchetype = "Imperial, dynastic, commanding, unmistakably royal.";
    styleCore = `
STYLE CORE:
Grand manner oil portrait, noble presence, premium heirloom feel.
`;
  }

  // -------------------------------
  // ENCUADRE/CÁMARA/LUZ
  // -------------------------------
  const cropPicked = cropByStyle(style, numSubjects);
  const cameraPicked = cameraByStyle(style);
  const lightingPicked = lightingByStyle(style);

  // -------------------------------
  // 🔥 CONTEO ESTRICTO + INCLUSION LOCK (MÁS DURO QUE ANTES)
  // -------------------------------
  const strictCountBlock = `
STRICT SUBJECT COUNT — NON-NEGOTIABLE:
You must depict EXACTLY ${numSubjects} human subject(s) from the reference.
Do not depict fewer. Do not depict more.
If there is any pet in the reference, it must also be included (do not ignore pets).
If subjects do not fit: zoom out, widen framing (without distortion), or adjust spacing — NEVER delete someone.

ANTI-REPLACEMENT / ANTI-FUSION:
- Do NOT duplicate one person to replace another.
- Do NOT merge faces.
- Do NOT turn a subject into a background silhouette.
- Every human must have a distinct, clearly visible, recognizable face.
`;

  const fidelityAll = `
FIDELITY FOR ALL SUBJECTS:
Maintain identity fidelity for EACH human subject — preserve each person’s unique facial structure and age.
Do not “beautify” by changing facial structure.
Pets must be recognizable with correct markings and anatomy.
`;

  // -------------------------------
  // COMPOSICIÓN GRUPO (OBLIGATORIA SI numSubjects>1)
  // -------------------------------
  const groupComposition = `
GROUP PORTRAIT COMPOSITION (MANDATORY):
Use a classical triangular / pyramidal grouping.
All heads fully inside the frame.
No overlapping faces that hide someone.
Keep subject spacing so every face is readable.
If needed, step back: use a wider crop (three-quarter length) rather than dropping a subject.
`;

  // -------------------------------
  // PROMPT FINAL
  // -------------------------------
  return `
You are a world-class classical portrait painter producing a **museum-grade oil painting on linen canvas**.

ASPECT RATIO: vertical 4:5.

PRIMARY GOAL:
All subjects must be instantly recognizable and the artwork must feel collectible.

IDENTITY LOCK — CRITICAL:
Preserve facial proportions, bone structure, age and natural skin tone from the reference.
Beautify only through painterly lighting and refined texture — never reshaping anatomy.
Avoid wide-angle distortion; keep portrait-like perspective.

${hairLock}

${numSubjects > 1 ? strictCountBlock : ""}

${numSubjects > 1 ? fidelityAll : ""}

STYLE ARCHETYPE — DO NOT BREAK:
${styleArchetype}

${styleCore}

WARDROBE (VARIATION WITHIN STYLE):
Silhouette: ${silhouette}.
Fabrics: ${fabrics}.
Color story: ${palette}.
${style === "realeza" ? `Regalia: ${royalRegalia}.` : ""}

SCENE:
${scene}.

COMPOSITION:
Framing: ${cropPicked}.
Camera: ${cameraPicked}.
Lighting: ${lightingPicked}.
Pose: ${pose}.
Expression: ${microExpression}.
${numSubjects > 1 ? groupComposition : ""}

CONTROLLED VARIATION RULE:
Each repeat changes wardrobe + palette + scene inside the same style archetype,
but must NOT change identity, haircut, or subject count.
Never reuse the exact same (palette + silhouette + scene) combo across repeats.

PAINTING EXECUTION:
Oil on canvas, layered glazes, subtle impasto highlights.
Hands anatomically correct and elegant.
No costume look.

NEGATIVE RULES:
No identity change.
No haircut change.
No missing subjects.
No merging subjects.
No replacing subjects.
No extra people not in the reference.
No cartoon, anime, CGI, 3D.
No plastic skin, no over-smoothing.
No text, logos, watermarks, frames, UI.
`;
};
