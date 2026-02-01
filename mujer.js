// ARCHIVO: mujer.js
// V105: IDENTIDAD LOCK + WOW VARIATION + PALETAS + VESTUARIO + ATMOSFERAS ROTATIVAS
// Objetivo: misma mujer reconocible, cada repeat = outfit, color, mood y escena radicalmente distintos.

module.exports = function(style, numSubjects, isGroup) {

  // -------------------------------
  // UTILIDADES
  // -------------------------------
  function randomPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // -------------------------------
  // BANCOS DE VARIACIÓN GLOBAL
  // -------------------------------

  const paletteBank = [
    "ivory and antique gold with soft pearl highlights",
    "sapphire blue and champagne glow",
    "crimson and obsidian with gilded accents",
    "lavender, silver and moonlight white",
    "amber, copper and warm earth tones",
    "teal, coral and sunlit bronze",
    "midnight blue with platinum highlights",
    "rose quartz, blush pink and warm ivory",
    "burnt orange and royal purple",
    "turquoise, sand and gold leaf"
  ];

  const fabricBank = [
    "sheer chiffon layered over silk",
    "heavy velvet with embroidered trim",
    "lustrous satin and brocade",
    "gauzy organza with metallic threads",
    "linen-silk blends with hand-painted patterns",
    "pleated taffeta with jewel accents",
    "raw silk with gold leaf embroidery",
    "lace overlays with pearl beading"
  ];

  const silhouetteBank = [
    "draped Greco-Roman gown with flowing folds",
    "empire-waist ethereal dress",
    "corseted Renaissance bodice with cascading skirt",
    "off-the-shoulder romantic silhouette",
    "asymmetrical one-shoulder couture gown",
    "layered medieval court dress",
    "high-neck poetic robe with trailing sleeves",
    "open-front mantle over inner silk gown"
  ];

  const atmosphereBank = [
    "misty dawn garden with pastel sky",
    "storm-lit lake shore with dramatic clouds",
    "sun-washed marble courtyard",
    "moonlit forest clearing",
    "golden autumn terrace",
    "candle-filled interior chapel",
    "twilight riverbank with reflections",
    "rose garden at sunset",
    "ancient ruins overtaken by vines",
    "palace balcony overlooking mountains"
  ];

  // -------------------------------
  // VARIATION ENGINE (POSE / LUZ / ETC.)
  // -------------------------------

  const pose = randomPick([
    "standing in elegant contrapposto",
    "seated on a carved chair",
    "leaning softly against a column",
    "walking slowly with fabric flowing",
    "three-quarter turn over the shoulder",
    "profile-to-3/4 transition pose"
  ]);

  const cameraAngle = randomPick([
    "eye-level classical portrait angle",
    "subtle low-angle hero framing",
    "soft high-angle collector portrait",
    "three-quarter camera placement"
  ]);

  const crop = randomPick([
    "intimate head-and-shoulders",
    "waist-up couture portrait",
    "three-quarter length",
    "full-figure with grand environment"
  ]);

  const lightingScenario = randomPick([
    "candlelit warm glow",
    "window side-light with Rembrandt falloff",
    "backlit halo rim-light",
    "skylight illumination",
    "stormy ambient light",
    "torch-lit golden ambiance"
  ]);

  const microExpression = randomPick([
    "serene and regal",
    "confident and magnetic",
    "contemplative and poetic",
    "warm subtle smile",
    "fierce commanding gaze"
  ]);

  const hairDynamics = randomPick([
    "wind-blown strands",
    "pinned with loose curls",
    "loose romantic waves",
    "braided with ornaments",
    "smooth pulled-back"
  ]);

  const brushworkEnergy = randomPick([
    "soft layered glazes",
    "bold expressive strokes in fabrics",
    "impasto highlights",
    "sfumato transitions"
  ]);

  // -------------------------------
  // ROPA + COLOR DINÁMICO
  // -------------------------------

  const selectedPalette = randomPick(paletteBank);
  const selectedFabric = randomPick(fabricBank);
  const selectedSilhouette = randomPick(silhouetteBank);
  const selectedAtmosphere = randomPick(atmosphereBank);

  // -------------------------------
  // ESTILOS BASE
  // -------------------------------

  let stylePrompt = "";

  if (style === "musa") {
    stylePrompt = `
ARTISTIC DIRECTION: Ethereal Pre-Raphaelite Muse.
Mood: poetic, luminous, collectible fine art.
Wardrobe: ${selectedSilhouette}, crafted in ${selectedFabric}.
Color story: ${selectedPalette}.
Atmosphere: ${selectedAtmosphere}.
`;
  }

  else if (style === "realeza") {
    stylePrompt = `
ARTISTIC DIRECTION: Imperial court portrait.
Mood: dynastic power and luxury.
Wardrobe: royal ${selectedSilhouette}, heavy couture construction, jewel embroidery.
Color story: ${selectedPalette}.
Atmosphere: palace interior or balcony variation — ${selectedAtmosphere}.
`;
  }

  else if (style === "empoderada") {
    stylePrompt = `
ARTISTIC DIRECTION: Historical Vogue power portrait.
Mood: dominance and magnetism.
Wardrobe: sculptural couture variant of ${selectedSilhouette}.
Color story: ${selectedPalette}.
Atmosphere: dramatic interior or architectural set — ${selectedAtmosphere}.
`;
  }

  else {
    stylePrompt = `
ARTISTIC DIRECTION: museum-grade classical oil portrait.
Wardrobe: couture version of ${selectedSilhouette}.
Color story: ${selectedPalette}.
Atmosphere: ${selectedAtmosphere}.
`;
  }

  // -------------------------------
  // COMPOSICIÓN
  // -------------------------------

  let framing = "";

  if (numSubjects > 1) {
    framing = `
COMPOSITION: multi-figure museum portrait.
Include ALL ${numSubjects} subjects and pets.
Main woman dominant in light and posture.
Framing: ${crop}.
Camera: ${cameraAngle}.
Pose: protagonist ${pose}.
Expression: ${microExpression}.
Hair: ${hairDynamics}.
`;
  } else {
    framing = `
COMPOSITION: solo masterpiece.
Framing: ${crop}.
Camera: ${cameraAngle}.
Pose: ${pose}.
Expression: ${microExpression}.
Hair: ${hairDynamics}.
`;
  }

  // -------------------------------
  // PROMPT FINAL
  // -------------------------------

  return `
You are a world-class classical portrait painter producing a **museum-grade oil painting on linen canvas**.

ASPECT RATIO: vertical 4:5.

PRIMARY GOAL:
The woman must recognize herself instantly and feel elevated, powerful and worthy of collecting.

IDENTITY LOCK — CRITICAL:
Preserve facial proportions, bone structure, age and natural skin tone.
Beautify only through painterly light and texture.
Never reshape anatomy into a generic face.

SUBJECTS:
Input has ${numSubjects} subject(s). Include all people and pets.

SCENE:
${stylePrompt}

COMPOSITION:
${framing}

WOW VARIATION DIRECTIVE:
Every repeat must substantially change wardrobe, palette, atmosphere and staging.
Never reuse the same color story + silhouette combination.
Treat each render as a new masterpiece.

PAINTING EXECUTION:
Oil on canvas, layered glazes, impasto highlights.
Natural fabric physics.
Hands anatomically correct.
No costume look.

NEGATIVE RULES:
No identity change.
No cartoon, anime, CGI, 3D.
No plastic skin.
No face swap artifacts.
No extra people.
No missing limbs.
No modern casual clothing.
No text, logos, frames or watermarks.
`;
};
