// ARCHIVO: mujer.js
// V111: NANO BANANA PRO - MULTI-SUBJECT FIX
// - Conteo estricto + anclas espaciales + NO “protagonista” en grupos (evita que se coma sujetos)
// - Identidad y cabello lock por persona
// - Variedad controlada dentro de cada arquetipo

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

  const group = numSubjects > 1 || isGroup === true;

  // -------------------------------
  // 🔒 IDENTIDAD + CABELLO (POR PERSONA)
  // -------------------------------
  const identityHairLock = `
IDENTITY LOCK — CRITICAL FOR EACH PERSON:
Preserve the exact facial identity for EACH human subject from the reference.
Do not “beautify” by changing facial structure, age, or ethnicity.
Eyes must be sharp and lifelike.

HAIR LOCK — CRITICAL FOR EACH PERSON:
Preserve the SAME haircut, length, hairline and natural texture for each person from the reference.
Do NOT change straight/wavy/curly type per person.
Do NOT shorten or lengthen.
Do NOT add bangs if absent.
Allowed only: subtle polish, minimal flyaways, minimal wind, period accessories placed on top.
`;

  // -------------------------------
  // ✅ CONTEO ESTRICTO (NBP necesita lenguaje simple y directo)
  // -------------------------------
  const strictCount = `
STRICT SUBJECT COUNT — NON-NEGOTIABLE:
Depict EXACTLY ${numSubjects} human subject(s) from the reference photo.
Do NOT depict fewer. Do NOT depict more.
If the reference includes pets, include ALL pets as well.

DO NOT OMIT / DO NOT REPLACE:
- Do not omit any subject.
- Do not duplicate one subject to replace another.
- Do not merge faces.
- Do not turn someone into a blurred background silhouette.
`;

  // -------------------------------
  // 🧷 ANCLAS ESPACIALES (CLAVE PARA NANO BANANA PRO)
  // -------------------------------
  // Esto reduce el “colapso” a un solo sujeto.
  const spatialAnchors = `
SPATIAL ANCHORS — MUST FOLLOW:
Keep the same relative left-to-right ordering as the reference photo.
Keep all heads fully inside the frame.
Ensure each human face is clearly visible and separated (no overlap hiding faces).
Minimum visibility rule: each human head must be at least ~12% of the image height (no tiny background people).
If needed, zoom out or switch to a wider crop to fit everyone — never remove anyone.
`;

  // -------------------------------
  // 🎯 ENCUADRES POR ESTILO (EN GRUPO: SIEMPRE MÁS ANCHO)
  // -------------------------------
  function cropByStyle(styleName) {
    if (group) {
      // En grupo, prioriza inclusión. NBP tiende a fallar en close-up de grupos.
      return weightedPick([
        { value: "three-quarter length group portrait (fit everyone clearly)", w: 70 },
        { value: "waist-up group portrait (fit everyone clearly)", w: 30 }
      ]);
    }

    if (styleName === "musa") {
      return weightedPick([
        { value: "intimate head-and-shoulders portrait", w: 55 },
        { value: "waist-up portrait", w: 35 },
        { value: "three-quarter length portrait", w: 10 }
      ]);
    }
    if (styleName === "realeza") {
      return weightedPick([
        { value: "three-quarter length grand portrait", w: 55 },
        { value: "head-and-shoulders royal portrait", w: 25 },
        { value: "full-figure grand portrait", w: 20 }
      ]);
    }
    if (styleName === "empoderada") {
      return weightedPick([
        { value: "waist-up power-fashion portrait", w: 60 },
        { value: "head-and-shoulders editorial portrait", w: 25 },
        { value: "three-quarter length fashion portrait", w: 15 }
      ]);
    }
    return "waist-up portrait";
  }

  function cameraByStyle(styleName) {
    // Evitar distorsión. Nada de ultra-wide.
    if (styleName === "realeza") {
      return weightedPick([
        { value: "eye-level formal grand portrait angle (no distortion)", w: 55 },
        { value: "slightly low-angle heroic framing (subtle authority)", w: 45 }
      ]);
    }
    return weightedPick([
      { value: "eye-level portrait angle (no distortion)", w: 75 },
      { value: "subtle three-quarter camera placement (minimal perspective)", w: 25 }
    ]);
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
        { value: "palace skylight illumination (luxurious, crisp)", w: 45 },
        { value: "ceremonial candlelit glow (heirloom)", w: 25 },
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
  // VARIACIÓN CONTROLADA (NO rompe arquetipo)
  // -------------------------------
  const pose = group
    ? randomPick([
        "balanced formal group stance, elegant stillness",
        "classic triangular arrangement posture, calm authority",
        "seated + standing mix for hierarchy while keeping all faces visible"
      ])
    : randomPick([
        "upright aristocratic posture, composed hands",
        "three-quarter turn with lifted chin",
        "seated formal pose, elegant stillness",
        "standing contrapposto, refined shoulders"
      ]);

  const microExpression = randomPick([
    "calm authority",
    "poised confidence",
    "serene magnetism",
    "controlled power"
  ]);

  // -------------------------------
  // ESTILOS (variedad dentro del arquetipo)
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

  const fabricsByStyle = {
    musa: randomPick(["silk and chiffon layers", "gauzy organza", "soft satin with gentle sheen"]),
    realeza: randomPick(["heavy velvet and satin", "brocade with gold thread embroidery", "luxurious taffeta with jewel accents"]),
    empoderada: randomPick(["structured velvet tailoring", "matte silk with sharp couture lines", "high-sheen satin with sculptural seams"])
  };

  let palette, silhouette, scene, fabrics, styleArchetype, styleCore;

  if (style === "musa") {
    palette = randomPick(musaPalettes);
    silhouette = randomPick(musaSilhouettes);
    scene = randomPick(musaScenes);
    fabrics = fabricsByStyle.musa;
    styleArchetype = "Ethereal, poetic, romantic, mythic muse.";
    styleCore = `STYLE CORE (MUSA): dreamy atmosphere, soft romance, luminous sfumato edges. Never harsh power styling.`;
  } else if (style === "realeza") {
    palette = randomPick(royalPalettes);
    silhouette = randomPick(royalSilhouettes);
    scene = randomPick(royalScenes);
    fabrics = fabricsByStyle.realeza;
    styleArchetype = "Imperial, dynastic, commanding, unmistakably royal.";
    styleCore = `STYLE CORE (REALEZA): grand manner portrait. Regalia visible. Couture construction. Royal headpiece mandatory.`;
  } else if (style === "empoderada") {
    palette = randomPick(empoweredPalettes);
    silhouette = randomPick(empoweredSilhouettes);
    scene = randomPick(empoweredScenes);
    fabrics = fabricsByStyle.empoderada;
    styleArchetype = "Dominant, powerful, fashion-forward, intimidating in elegance.";
    styleCore = `STYLE CORE (EMPODERADA): editorial power, sharp silhouette, confident posture. No princess vibe.`;
  } else {
    // fallback a realeza
    palette = randomPick(royalPalettes);
    silhouette = randomPick(royalSilhouettes);
    scene = randomPick(royalScenes);
    fabrics = fabricsByStyle.realeza;
    styleArchetype = "Imperial, dynastic, commanding, unmistakably royal.";
    styleCore = `STYLE CORE: grand manner oil portrait, noble presence, premium heirloom feel.`;
  }

  // -------------------------------
  // ENCUADRE/CÁMARA/LUZ
  // -------------------------------
  const cropPicked = cropByStyle(style);
  const cameraPicked = cameraByStyle(style);
  const lightingPicked = lightingByStyle(style);

  // -------------------------------
  // 🔥 CLAVE: EN GRUPO, NUNCA “PROTAGONISTA”
  // -------------------------------
  const hierarchyBlock = group
    ? `
GROUP HIERARCHY RULE:
All subjects are equally important for inclusion. Do NOT sacrifice anyone for aesthetics.
You may give a subtle emphasis to the main woman ONLY if it does not reduce visibility of others.
`
    : `
SOLO HIERARCHY RULE:
Make her feel like the most important person in the world, without changing her identity.
`;

  // -------------------------------
  // PROMPT FINAL
  // -------------------------------
  return `
You are a world-class classical portrait painter producing a museum-grade oil painting on linen canvas.

ASPECT RATIO: vertical 4:5.

${identityHairLock}

${group ? strictCount : ""}

${group ? spatialAnchors : ""}

${hierarchyBlock}

STYLE ARCHETYPE (DO NOT BREAK):
${styleArchetype}
${styleCore}

WARDROBE (WITHIN STYLE):
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

CONTROLLED VARIATION:
Each repeat changes wardrobe + palette + scene inside the same style archetype,
but must not change identity, hair, or subject count.

NEGATIVE RULES:
No missing subjects. No extra subjects.
No merging faces. No replacing subjects.
No wide-angle distortion.
No cartoon/anime/CGI/3D.
No plastic skin.
No text/logos/watermarks/frames/UI.
`;
};
