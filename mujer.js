// ARCHIVO: mujer.js
// CATEGORÍA: Mujer
// GIRO: Estética "STUDIO PORTRAIT" + acabado de óleo museo.
// IMPORTANTE: NO imponer decisiones -> control por opciones (poseMode, lightMode).

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
    accessoriesMode = "refined_default"    // "none" | "refined_default"
  } = options;

  // --- GUARDRAILS (coherente con masterPrompt, sin contradicciones) ---
  const categoryGuardrails = `
**CATEGORY GUARDRAILS (WOMAN / MASTERPIECE):**
- Studio-portrait realism + museum oil execution (subtle brushwork, glazing).
- Background must be **simple, darker, low-detail** to maximize subject separation.
- Avoid cinematic/grim lighting: flattering portrait lighting only (no harsh darkness).
- Jewelry/accessories must be **refined** (no bulky collars, no exaggerated props).
- Background decor must contain **NO faces** (no portraits/statues/figurative art).
`;

  // --- FONDOS oscuros simples (para que resalte) ---
  const studioBackgrounds = [
    "a dark warm studio gradient backdrop (low detail, no texture clutter)",
    "a deep olive/umber seamless backdrop with subtle tonal variation",
    "a dark charcoal studio backdrop, softly blended, minimal"
  ];

  // --- Accesorios (opcional, refinado) ---
  const accessoriesRefined = [
    "a delicate necklace (thin chain, tasteful pendant) and a small elegant wristwatch",
    "a refined necklace with subtle sparkle and a classic wristwatch (no oversized jewelry)",
    "minimal earrings + delicate necklace + elegant wristwatch (all tasteful)"
  ];

  // --- Iluminación (studio y rembrandt como opciones) ---
  const studioLighting = [
    "soft studio key light (large softbox), gentle shadows, clean catchlights in the eyes",
    "beauty-dish style soft studio lighting (flattering), smooth tonal transitions",
    "soft studio key + subtle fill, clean highlights, natural skin tones"
  ];

  // Rembrandt como opción (no siempre), y NO “cinematic/grim”
  const rembrandtLighting = [
    "soft Rembrandt portrait lighting: gentle Rembrandt triangle, controlled contrast, still flattering (no harsh shadows)",
    "classic Rembrandt-style lighting with soft falloff and subtle fill (portrait-friendly, not dramatic grim)",
    "Rembrandt-inspired key light with smooth transitions and natural skin tones (no harsh darkness)"
  ];

  const lightingPool =
    lightMode === "studio_only" ? studioLighting :
    lightMode === "rembrandt_only" ? rembrandtLighting :
    [...studioLighting, ...rembrandtLighting]; // mix_studio_rembrandt

  // --- Poses (sin rigidez por default) ---
  const standingPoses = [
    "standing, subtle contrapposto, composed posture, arms relaxed (no dramatic gesture)",
    "standing 3/4 angle, relaxed shoulders, natural hands, calm expression",
    "standing with gentle elegance, minimal movement, natural posture"
  ];

  const seatedPoses = [
    "seated on an elegant studio chair, graceful posture, relaxed shoulders (not stiff)",
    "seated 3/4 angle, hands gently resting (natural hands), composed expression",
    "seated, slight turn, calm confident posture, natural hands visible"
  ];

  const posePool =
    (numSubjects > 1 || isGroup)
      ? [
          "standing close together, balanced spacing, everyone equally visible",
          "group composition with balanced spacing, waist-up framing, everyone equally visible"
        ] // grupos: evitamos sentado por default (más riesgo de manos/oclusiones)
      : (
          poseMode === "standing_only" ? standingPoses :
          poseMode === "seated_only" ? seatedPoses :
          [...standingPoses, ...seatedPoses] // mix_standing_seated
        );

  // --- 3 estilos, bien diferenciados ---
  const STYLE_PRESETS = {
    musa: {
      role: "**The Ethereal Muse** (romantic softness expressed through glazing — realistic, not fantasy).",
      palette: [
        "Dusty Rose + Soft Gold accents",
        "Pearl White + Warm Champagne highlights",
        "Emerald Green + muted antique gold"
      ],
      wardrobe: [
        "a refined chiffon/silk gown with elegant neckline (no costume elements)",
        "a premium soft gown with subtle embroidery (tasteful, minimal)",
        "a minimalist couture dress with refined fabric sheen (realistic)"
      ]
    },
    realeza: {
      role: "**The Absolute Queen** (regal, high-status — tasteful luxury, not costume).",
      palette: [
        "Royal Blue + refined sparkle",
        "Crimson Velvet + Antique Gold",
        "Champagne Silk + Pearls"
      ],
      wardrobe: [
        "a regal gown with premium velvet/silk texture and refined detailing",
        "a structured high-status dress with tasteful embroidery (not theatrical)",
        "a classic luxurious gown with clean silhouette and subtle train"
      ]
    },
    empoderada: {
      role: "**The Noble Matriarch** (powerful, composed — modern refinement).",
      palette: [
        "Deep Navy + muted gold accents",
        "Burgundy + warm neutral highlights",
        "Black + antique gold (minimal luxury)"
      ],
      wardrobe: [
        "a structured couture dress (clean silhouette), feminine neckline",
        "a tailored velvet dress with refined sleeves (no bulky collar pieces)",
        "a silk dress with a subtle cape detail (elegant, not theatrical)"
      ]
    }
  };

  const preset = STYLE_PRESETS[style] || STYLE_PRESETS.empoderada;

  const accessoriesLine =
    accessoriesMode === "none"
      ? "**ACCESSORIES:** none."
      : `**ACCESSORIES (TASTEFUL):** ${pick(accessoriesRefined)}.`;

  const styleDescription = `
**ROLE:** ${preset.role}
**BACKGROUND:** ${pick(studioBackgrounds)}.
**PALETTE:** ${pick(preset.palette)}.
**WARDROBE:** ${pick(preset.wardrobe)}.
${accessoriesLine}
**LIGHTING:** ${pick(lightingPool)}.
**POSE DIRECTION:** ${pick(posePool)}.
${categoryGuardrails}
`;

  // Composición: segura (evitamos full-body)
  const soloFramings = [
    "**SOLO COMPOSITION:** 3/4 Portrait (head + shoulders). Eye-level. 50mm look. Clean separation from background.",
    "**SOLO COMPOSITION:** Half-body (waist up). Eye-level. Clean separation. 50mm look."
  ];

  const groupFramings = [
    "**GROUP COMPOSITION:** Half-body (waist up) to fit everyone. Eye-level. Balanced spacing. ALL faces equally visible and sharp.",
    "**GROUP COMPOSITION:** Medium shot (waist up). Subjects separated (no merged faces). ALL faces equally prioritized."
  ];

  const framing =
    (numSubjects > 1 || isGroup)
      ? pick(groupFramings) + " The main woman is the visual anchor WITHOUT hiding or diminishing other subjects."
      : pick(soloFramings);

  return masterPrompt(numSubjects, styleDescription, framing);
};
