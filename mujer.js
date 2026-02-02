// ARCHIVO: mujer.js
// CATEGORÍA: Mujer
// Objetivo: 3 estilos MUY distinguibles + variación curada (segura) + cero kitsch.
// Giro: "studio portrait realism" + ejecución de óleo museo.
// IMPORTANTE: NO imponer decisiones -> control por opciones (poseMode, lightMode, accessoriesMode).

const masterPrompt = require('./masterPrompt');

module.exports = function (
  style,
  numSubjects,
  isGroup,
  options = {}
) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // --- OPCIONES (sin imponer defaults raros) ---
  const {
    poseMode = "standing_only",            // "standing_only" | "mix_standing_seated" | "seated_only"
    lightMode = "mix_studio_rembrandt",    // "studio_only" | "mix_studio_rembrandt" | "rembrandt_only"
    accessoriesMode = "refined_default",   // "none" | "refined_default"
    backgroundMode = "dark_simple"         // "dark_simple" | "dark_simple_variants"
  } = options;

  // --- Guardrails coherentes con masterPrompt (sin contradicciones) ---
  const categoryGuardrails = `
**CATEGORY GUARDRAILS (WOMAN / MASTERPIECE):**
- Studio-portrait realism + museum oil execution (subtle brushwork, glazing).
- Background must be **simple, darker, low-detail** to maximize subject separation (no bright bokeh, no clutter).
- Avoid cinematic/grim lighting: flattering portrait lighting only (no harsh darkness).
- Jewelry/accessories must be **refined** (no bulky collars, no exaggerated props).
- Background decor must contain **NO faces** (no portraits, no statues, no figurative art).
`;

  // --- Fondos oscuros simples ---
  const studioBackgroundsCore = [
    "a dark warm studio gradient backdrop (low detail, no texture clutter)",
    "a deep olive/umber seamless backdrop with subtle tonal variation",
    "a dark charcoal studio backdrop, softly blended, minimal"
  ];

  // Variante extra para no sentir “la misma foto”
  const studioBackgroundsVariants = [
    "a deep brown-to-olive studio gradient backdrop, very subtle texture (no speckles)",
    "a muted forest-green studio backdrop with soft vignette (low detail, no bokeh)",
    "a warm umber backdrop with gentle falloff behind the head (simple, low detail)"
  ];

  const backgroundPool =
    backgroundMode === "dark_simple_variants"
      ? [...studioBackgroundsCore, ...studioBackgroundsVariants]
      : studioBackgroundsCore;

  // --- Accesorios refinados (opcional) ---
  const accessoriesRefined = [
    "a delicate necklace (thin chain, tasteful pendant) and a small elegant wristwatch",
    "a refined necklace with subtle sparkle and a classic wristwatch (no oversized jewelry)",
    "minimal earrings + delicate necklace + elegant wristwatch (all tasteful)"
  ];

  // --- Iluminación (studio y Rembrandt suave como opción) ---
  const studioLighting = [
    "soft studio key light (large softbox), gentle shadows, clean catchlights in the eyes",
    "beauty-dish style soft studio lighting (flattering), smooth tonal transitions",
    "soft studio key + subtle fill, clean highlights, natural skin tones"
  ];

  // Rembrandt SOLO suave (no grim/cinematic)
  const rembrandtLighting = [
    "soft Rembrandt portrait lighting: gentle Rembrandt triangle, controlled contrast, still flattering (no harsh shadows)",
    "classic Rembrandt-inspired lighting with subtle fill and smooth falloff (portrait-friendly, not grim)",
    "Rembrandt-style key with soft transitions and natural skin tones (no harsh darkness)"
  ];

  const lightingPool =
    lightMode === "studio_only" ? studioLighting :
    lightMode === "rembrandt_only" ? rembrandtLighting :
    [...studioLighting, ...rembrandtLighting]; // mix_studio_rembrandt

  // --- Micro-variación segura (evita rigidez sin romper identidad) ---
  const cameraAngles = [
    "eye-level camera",
    "slightly above eye-level (subtle, flattering)",
    "slightly below eye-level (subtle, confident)"
  ];

  const gazeDirections = [
    "looking at camera (calm, confident)",
    "looking 20–30 degrees off-camera (thoughtful, natural)",
    "looking toward the key light (serene)"
  ];

  const bodyAngles = [
    "frontal with relaxed shoulders",
    "3/4 turn (about 25–35 degrees), elegant posture",
    "3/4 turn (about 40–50 degrees), confident stance"
  ];

  const expressions = [
    "neutral expression (soft, natural)",
    "soft subtle smile (minimal)",
    "serene expression (relaxed jaw, natural eyes)"
  ];

  // Manos: variación segura (reduce manos raras y evita rigidez)
  const handPoses = [
    "hands relaxed at waist level (natural fingers, no tension)",
    "one hand gently resting on the other wrist (soft, elegant)",
    "one hand lightly touching the necklace pendant (subtle, natural)",
    "one hand resting on the forearm (soft, composed)"
  ];

  // --- Poses base (sin ser tiesas) ---
  const standingPoses = [
    "standing, gentle 3/4 turn, relaxed shoulders, natural weight shift",
    "standing, slight lean, relaxed arms, natural hands visible",
    "standing, subtle contrapposto, elegant but candid"
  ];

  const seatedPoses = [
    "seated on a simple studio chair, slight 3/4 turn, relaxed posture",
    "seated, one forearm resting lightly, hands natural and soft",
    "seated, upright but relaxed, subtle lean, calm presence"
  ];

  // Grupos: por estabilidad, no forzamos sentado (pero damos naturalidad)
  const groupPoses = [
    "standing close together, balanced spacing, everyone equally visible",
    "group composition with balanced spacing, waist-up framing, everyone equally visible"
  ];

  const posePool =
    (numSubjects > 1 || isGroup)
      ? groupPoses
      : (
          poseMode === "standing_only" ? standingPoses :
          poseMode === "seated_only" ? seatedPoses :
          [...standingPoses, ...seatedPoses] // mix_standing_seated
        );

  // --- 3 estilos diferenciados ---
  const STYLE_PRESETS = {
    musa: {
      role: "**The Ethereal Muse** (romantic softness through glazing — realistic, not fantasy).",
      palette: [
        "Dusty Rose + Soft Gold accents",
        "Pearl White + Warm Champagne highlights",
        "Emerald Green + muted antique gold"
      ],
      wardrobe: [
        "a refined chiffon/silk gown with elegant neckli
