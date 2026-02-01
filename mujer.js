// ARCHIVO: mujer.js
// V113: NANO BANANA PRO - HARD IDENTITY MODE + NO RECAST + GROUP STRICT
// - Evita que cambien caras (face drift)
// - Evita que “re-castee” sujetos (invente otras personas)
// - Realeza más opulenta
// - Empoderada 100% Renacimiento (cero moderno)

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
  // 🔒 HARD IDENTITY CONTRACT (ANTI FACE-DRIFT)
  // -------------------------------
  const hardIdentity = `
HARD IDENTITY CONTRACT — NON-NEGOTIABLE:
Use ONLY the people from the reference photo(s). Do NOT invent new faces. Do NOT recast.
Every person must remain instantly recognizable as themselves.

DO NOT CHANGE facial geometry:
- jawline width/shape, chin length
- cheekbone height/shape
- eye shape, eyelid fold, eye spacing
- nose bridge/tip/nostrils
- lip thickness/cupid bow
- brow shape/position
Allowed enhancements ONLY:
- painterly lighting and color harmony
- gentle skin cleanup WITHOUT changing features
- subtle sharpening of eyes
NO “idealization” or “beauty face” transformation.
`;

  const hairLock = `
HAIR LOCK — CRITICAL:
For each person, preserve the SAME haircut, length, hairline and natural texture from the reference.
Do NOT change straight/wavy/curly category per person.
Do NOT shorten or lengthen hair.
Do NOT add bangs if absent.
Allowed only: subtle polish, minimal flyaways, minimal wind, period accessories placed on top.
`;

  // -------------------------------
  // ✅ STRICT COUNT + NO SUBSTITUTE (GROUP)
  // -------------------------------
  const strictCount = `
STRICT SUBJECT COUNT — NON-NEGOTIABLE:
Depict EXACTLY ${numSubjects} human subject(s) from the reference.
Do NOT depict fewer. Do NOT depict more.
If the reference includes pets, include ALL pets.

NO OMISSION / NO REPLACEMENT:
- No missing subjects.
- No extra subjects.
- No duplicating one person to replace another.
- No merging faces.
- No turning someone into a background blur.
`;

  const spatialAnchors = `
SPATIAL ANCHORS — MUST FOLLOW:
Keep the same left-to-right ordering as the reference.
All heads fully inside the frame.
Faces must be separated and clearly visible (no overlap hiding faces).
If needed: zoom out / widen crop to fit everyone — never remove anyone.
`;

  // -------------------------------
  // ENCUADRE / CAMARA / LUZ (sin distorsión)
  // -------------------------------
  function cropByStyle(styleName) {
    if (group) {
      return weightedPick([
        { value: "three-quarter length group portrait (fit everyone clearly)", w: 80 },
        { value: "waist-up group portrait (fit everyone clearly)", w: 20 }
      ]);
    }

    if (styleName === "musa") {
      return weightedPick([
        { value: "waist-up portrait (face + drapery balance)", w: 55 },
        { value: "head-and-shoulders portrait (emotional)", w: 35 },
        { value: "three-quarter length portrait (poetic posture)", w: 10 }
      ]);
    }

    if (styleName === "realeza") {
      return weightedPick([
        { value: "three-quarter length grand portrait (regalia + opulence)", w: 60 },
        { value: "full-figure grand portrait with throne and palace scale", w: 35 },
        { value: "head-and-shoulders heirloom royal portrait (crown + jewels)", w: 5 }
      ]);
    }

    if (styleName === "empoderada") {
      // Empoderada RENACIMIENTO: mostrar ruff, mangas, brocados
      return weightedPick([
        { value: "waist-up Renaissance power portrait (face + ruff + bodice)", w: 70 },
        { value: "three-quarter length Renaissance power portrait (silhouette + posture)", w: 30 }
      ]);
    }

    return "waist-up portrait";
  }

  function cameraByStyle(styleName) {
    // Nada de ultra-wide
    if (styleName === "realeza") {
      return weightedPick([
        { value: "eye-level formal grand portrait angle (no distortion)", w: 55 },
        { value: "slightly low-angle heroic framing (subtle authority, no distortion)", w: 45 }
      ]);
    }
    return weightedPick([
      { value: "eye-level portrait angle (no distortion)", w: 85 },
      { value: "subtle three-quarter camera placement (minimal perspective)", w: 15 }
    ]);
  }

  function lightingByStyle(styleName) {
    if (styleName === "musa") {
      return weightedPick([
        { value: "diffused golden-hour sfumato glow (soft, ethereal)", w: 60 },
        { value: "soft window side-light with luminous falloff", w: 40 }
      ]);
    }
    if (styleName === "realeza") {
      return weightedPick([
        { value: "palace skylight illumination with crisp luxury highlights on satin and jewels", w: 55 },
        { value: "ceremonial candlelit glow with gilded reflections", w: 30 },
        { value: "high-key daylight through tall palace windows, noble clarity", w: 15 }
      ]);
    }
    if (styleName === "empoderada") {
      return weightedPick([
        { value: "controlled chiaroscuro with sculpted facial planes (court power)", w: 65 },
        { value: "window side-light with deep velvet shadows and strong modeling", w: 35 }
      ]);
    }
    return "classic painterly side-light";
  }

  // -------------------------------
  // POSE / EXPRESION (controladas)
  // -------------------------------
  const pose = group
    ? randomPick([
        "balanced formal group stance with elegant stillness",
        "classic triangular arrangement, all faces visible",
        "seated + standing mix, strict visibility of every face"
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
    "commanding presence"
  ]);

  // -------------------------------
  // MUSA (eterea)
  // -------------------------------
  const musaPalettes = [
    "ivory, blush pink and antique gold",
    "lavender, pearl white and silver",
    "rose quartz with warm ivory",
    "sky blue with pearl highlights",
    "pale gold with soft cream tones"
  ];

  const musaSilhouettes = [
    "flowing draped gown with soft folds",
    "empire-waist ethereal dress",
    "layered chiffon mantle dress",
    "high-neck poetic robe with trailing sleeves"
  ];

  const musaScenes = [
    "misty dawn garden with soft haze",
    "twilight lake shore with gentle reflections",
    "moonlit orchard with delicate fog",
    "rose terrace at sunset with warm blooms"
  ];

  const musaFabrics = randomPick([
    "silk and chiffon layers",
    "gauzy organza",
    "soft satin with gentle sheen"
  ]);

  // -------------------------------
  // REALEZA (MÁS REINAS, MÁS LUJO, MÁS OPULENCIA)
  // -------------------------------
  const royalPalettes = [
    "crimson and gold leaf",
    "sapphire blue and ivory with heavy gold accents",
    "black velvet with diamond highlights and gilded ornament",
    "emerald and antique gold with pearl details",
    "royal purple with gold leaf and silver filigree"
  ];

  const royalSilhouettes = [
    "corseted court gown with cathedral train and layered skirts",
    "brocade gown with dense gold embroidery and royal cape",
    "ball gown with embroidered train, jeweled sash, and mantle",
    "ermine-trimmed ceremonial cloak over structured bodice and heavy skirt"
  ];

  const royalScenes = [
    "coronation throne room with gilded carvings, marble columns, heraldic banners",
    "palace ballroom with chandeliers, mirrors, and gold ornament everywhere",
    "royal gallery corridor lined with portraits, tapestries, and gilded frames",
    "private audience chamber with velvet drapery, carved throne, and gold leaf trim"
  ];

  const royalFabrics = randomPick([
    "heavy velvet and satin with gold embroidery",
    "brocade with dense gold thread patterns and metallic trim",
    "luxurious taffeta with jewel accents and gilded edging"
  ]);

  const royalRegalia = randomPick([
    "massive diamond crown or ornate diadem (mandatory), layered pearl-and-gem collar, chandelier earrings, jeweled brooch, royal sash",
    "diamond tiara (mandatory) + crown-like diadem, gem-studded gorget/collar, gold chains, signet ring, mantle clasp",
    "imperial diadem (mandatory), emerald-ruby jewelry set, gold filigree chest chains, jeweled belt, ceremonial orb and scepter nearby"
  ]);

  const opulenceBoost = `
OPULENCE BOOST — MANDATORY FOR REALEZA:
Max luxury everywhere: gold leaf, ermine trim, jewel density, embroidered brocade, reflective satin highlights.
The image must scream “royal wealth”: throne present, chandeliers, gilded frames, tapestries, marble columns.
Make it unmistakably queenly, dynastic, museum-level opulence.
`;

  // -------------------------------
  // EMPODERADA (RENACIMIENTO, NO MODERNO)
  // -------------------------------
  const empoweredPalettes = [
    "obsidian black with gold accents",
    "deep oxblood red with antique gold",
    "midnight blue with silver-gold embroidery",
    "dark emerald with gold filigree",
    "espresso brown with bronze highlights"
  ];

  const empoweredSilhouettes = [
    "Renaissance court bodice with dramatic slashed/puffed sleeves and rich skirt",
    "high Renaissance ruff collar with ornate brocade gown and heavy chains",
    "Renaissance velvet gown with structured shoulders and embroidered panels",
    "brocade Renaissance gown with layered medallion jewelry and jeweled belt"
  ];

  const empoweredScenes = [
    "Renaissance council chamber with dark wood and tapestries",
    "Renaissance library/map room with candlelit authority",
    "stone hall with velvet drapery and court symbols",
    "court interior with carved chairs and heraldic motifs"
  ];

  const empoweredFabrics = randomPick([
    "heavy velvet with gold embroidery",
    "brocade with metallic thread patterns",
    "satin underlayers with structured tailoring"
  ]);

  const empoweredPowerSymbols = randomPick([
    "a signet ring and sealed letter (authority)",
    "a richly bound ledger/book (power through intellect)",
    "a jeweled medallion chain and brooch (status and command)",
    "court gloves and ceremonial sash (discipline and control)"
  ]);

  const empoweredCore = `
RENAISSANCE POWER CORE (EMPODERADA):
This must be Renaissance court power — NOT modern fashion.
Absolutely no modern clothing (no blazer, no suit, no contemporary dress).
Include Renaissance markers: ruff collar/high collar, brocade/velvet, heavy jewelry layers, ornate sleeves.
Add subtle power symbol: ${empoweredPowerSymbols}.
`;

  // -------------------------------
  // SELECCIÓN POR ESTILO
  // -------------------------------
  let palette, silhouette, scene, fabrics, styleArchetype, styleCore, extraBoost = "";

  if (style === "musa") {
    palette = randomPick(musaPalettes);
    silhouette = randomPick(musaSilhouettes);
    scene = randomPick(musaScenes);
    fabrics = musaFabrics;
    styleArchetype = "Ethereal, poetic, romantic muse (fine art).";
    styleCore = `
STYLE CORE (MUSA):
Dreamy atmosphere, soft romance, luminous sfumato edges.
No heavy regalia, no harsh power styling.
`;
  } else if (style === "realeza") {
    palette = randomPick(royalPalettes);
    silhouette = randomPick(royalSilhouettes);
    scene = randomPick(royalScenes);
    fabrics = royalFabrics;
    styleArchetype = "Imperial queen, dynastic, commanding, unmistakably royal.";
    styleCore = `
STYLE CORE (REALEZA):
Grand manner royal portrait. Crown/diadem/tiara is mandatory. Regalia must dominate.
Jewelry must be heirloom-level and excessive (premium opulence).
`;
    extraBoost = opulenceBoost;
  } else if (style === "empoderada") {
    palette = randomPick(empoweredPalettes);
    silhouette = randomPick(empoweredSilhouettes);
    scene = randomPick(empoweredScenes);
    fabrics = empoweredFabrics;
    styleArchetype = "Renaissance power woman: dominant, commanding, intimidating in elegance.";
    styleCore = empoweredCore;
  } else {
    palette = randomPick(royalPalettes);
    silhouette = randomPick(royalSilhouettes);
    scene = randomPick(royalScenes);
    fabrics = royalFabrics;
    styleArchetype = "Imperial queen, dynastic, commanding, unmistakably royal.";
    styleCore = `STYLE CORE: grand manner oil portrait, noble presence, premium heirloom feel.`;
    extraBoost = opulenceBoost;
  }

  // -------------------------------
  // ENCUADRE / CAMARA / LUZ
  // -------------------------------
  const cropPicked = cropByStyle(style);
  const cameraPicked = cameraByStyle(style);
  const lightingPicked = lightingByStyle(style);

  // -------------------------------
  // JERARQUÍA (en grupos: NO protagonista)
  // -------------------------------
  const hierarchy = group
    ? `
GROUP PRIORITY:
In groups, inclusion and correct identities are the top priority.
Do NOT sacrifice any face for aesthetics.
Do NOT “recast” anyone into a different-looking person.
`
    : `
SOLO PRIORITY:
Make the subject feel elevated without changing identity.
`;

  // -------------------------------
  // NEGATIVOS DUROS
  // -------------------------------
  const hardNegatives = `
HARD NEGATIVES:
No new faces. No recasting.
No face geometry changes. No beauty-face replacement.
No modern clothing of any kind (especially for EMPODERADA).
No cartoon/anime/CGI/3D.
No plastic skin / over-smoothing.
No extra people, no missing people, no merged faces.
No text/logos/watermarks/frames/UI.
`;

  // -------------------------------
  // PROMPT FINAL
  // -------------------------------
  return `
You are a master portrait painter producing a museum-grade oil painting on linen canvas.

ASPECT RATIO: vertical 4:5.

${hardIdentity}
${hairLock}

${group ? strictCount : ""}
${group ? spatialAnchors : ""}

${hierarchy}

STYLE ARCHETYPE (DO NOT BREAK):
${styleArchetype}

${styleCore}
${extraBoost}

WARDROBE (HISTORICAL COUTURE):
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
Each repeat changes wardrobe + palette + scene within the same style archetype,
but must not change identity, hair, or subject count.

PAINTING EXECUTION:
Oil on canvas, layered glazes, subtle impasto highlights on jewels and folds.
Hands anatomically correct and elegant.
Natural fabric physics (no costume look).

${hardNegatives}
`;
};
