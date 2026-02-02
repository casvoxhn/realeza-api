// ARCHIVO: mujer.js (FINAL v6)
// 3 estilos distinguibles + estética premium (obra maestra) + variación segura
// + interacción en grupos + anti-uniforme.
// Importante: SIN lenguaje fotográfico (mata la sensación de cuadro caro).

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup, options = {}) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const chance = (p) => Math.random() < p;
  const group = (Number(numSubjects) > 1) || Boolean(isGroup);

  const {
    poseMode = "mix_standing_seated",
    groupPoseMode = "mix_standing_seated",
    accessoriesMode = "refined_plus",     // "none" | "refined_default" | "refined_plus"
    backgroundMode = "storybook_depth",   // "dark_simple" | "storybook_depth"
    opulenceLevel = "high"               // "medium" | "high"
  } = options;

  const categoryGuardrails = `
**CATEGORY GUARDRAILS (WOMAN / PREMIUM ART):**
- Must feel like a high-end commissioned painting someone would hang on a wall.
- Express "wow" ONLY through storybook realism: warm romantic glow, atmospheric depth, rich textiles, elegant staging.
- Naturalistic realism only (no stylized illustration, no exaggerated cute proportions).
- Background decor must contain NO faces: no portraits, statues, figurative murals, crowds.
- Avoid modern studio-photo vibe. Keep it painterly and luxurious.
`;

  // Fondos con profundidad (sin caras)
  const backgroundsDarkSimple = [
    "a deep warm umber background with subtle tonal transitions (painterly, low detail)",
    "a dark olive-brown gradient with soft vignette (painterly)",
    "a charcoal-to-warm-brown background with gentle atmosphere (painterly)"
  ];

  const backgroundsStorybookDepth = [
    "a painterly twilight garden with soft atmospheric depth and warm glow (no people, no faces in decor)",
    "a grand interior with heavy velvet drapery and subtle columns (no portraits/statues, no faces)",
    "a classical painted sky backdrop with warm clouds and golden light (painterly, no figures)",
    "a dim palace corridor with draped fabric and warm glow (no portraits/statues, no faces)",
    "a romantic landscape with distant trees and warm sunset haze (painterly, no extra figures)"
  ];

  const backgroundPool =
    backgroundMode === "storybook_depth" ? backgroundsStorybookDepth : backgroundsDarkSimple;

  // Luz premium (magia realista)
  const lightingPremium = [
    "luminous warm key light with soft falloff and gentle rim separation, painterly chiaroscuro (not harsh)",
    "soft radiant light with warm highlights on fabrics and jewelry, deep but clean shadows (old-master inspired)",
    "romantic warm glow with subtle atmospheric depth and elegant vignette (naturalistic)"
  ];

  // Poses
  const soloStandingPoses = [
    "a graceful 3/4 standing pose with relaxed shoulders and natural weight shift",
    "a calm standing pose with gentle turn and elegant posture (not stiff)"
  ];

  const soloSeatedPoses = [
    "a refined seated pose on an antique chair, hands relaxed (not tense), elegant posture",
    "a seated portrait with a slight 3/4 turn, one hand resting softly on the armrest"
  ];

  const groupStandingPoses = [
    "a balanced group pose with slight stagger and natural asymmetry, both faces clearly visible",
    "a group pose with subtle staggered positions (no symmetry-clone), both faces clearly visible"
  ];

  const groupSeatedPoses = [
    "a seated group pose on an antique chair/bench, waist-up framing, natural asymmetry, faces clearly visible"
  ];

  const groupInteraction = [
    "soft interaction: gentle hand-on-forearm connection (minimal overlap, natural)",
    "soft interaction: light hand holding at waist level (hands clear, not tangled)",
    "soft interaction: subtle shoulder touch with relaxed posture (elegant, not awkward)"
  ];

  const posePool = group
    ? (groupPoseMode === "mix_standing_seated" ? [...groupStandingPoses, ...groupSeatedPoses] : groupStandingPoses)
    : (
        poseMode === "standing_only" ? soloStandingPoses :
        poseMode === "seated_only" ? soloSeatedPoses :
        [...soloStandingPoses, ...soloSeatedPoses]
      );

  // Props nobles sin caras
  const nobleProps = [
    "a delicate fan (held naturally)",
    "a small bouquet of flowers (subtle, tasteful)",
    "a jeweled brooch (small, refined)",
    "a silk shawl or cape draped elegantly (luxury fabric)",
    "an antique carved chair (no faces in carvings)"
  ];

  // Accesorios
  let accessoriesLine = "**ACCESSORIES:** minimal and refined.";
  if (accessoriesMode === "none") {
    accessoriesLine = "**ACCESSORIES:** none.";
  } else if (!group) {
    if (accessoriesMode === "refined_plus") {
      accessoriesLine =
        "**ACCESSORIES (TASTEFUL):** delicate necklace + small earrings + one subtle bracelet OR a small elegant watch (not heavy).";
    } else {
      accessoriesLine =
        "**ACCESSORIES (TASTEFUL):** delicate necklace (thin chain, small pendant).";
    }
  } else {
    accessoriesLine = `
**ACCESSORIES (GROUP DISTINCT):**
- Accessories must be different per person (no repeated necklace/pendant/watch).
- If a watch appears: only ONE person may wear it.
- Keep everything small, refined, premium.
`;
  }

  // Opulencia (materiales caros)
  const opulentFabrics = [
    "deep velvet with rich folds and subtle sheen",
    "brocade with tasteful gold thread embroidery",
    "silk with luminous highlights and layered drape",
    "lace cuffs/collar details, refined and delicate"
  ];

  const wardrobeSoloBase = [
    "a refined renaissance-inspired gown with premium tailoring and elegant neckline (not costume)",
    "a luxurious velvet dress with lace accents and rich drapery (high-end, not theatrical)",
    "a silk gown with subtle embroidery and layered sleeves (romantic, premium)"
  ];

  const wardrobeGroupRule = `
**WARDROBE (GROUP ANTI-UNIFORM — HARD):**
- Coordinated luxury level, but NOT matching.
- HARD: different color tone AND different neckline AND different silhouette per person.
- Keep it elegant and realistic; no theatrical costume vibe.
`;

  const STYLE_PRESETS = {
    musa: {
      role: "**The Ethereal Muse** (romantic, luminous — storybook realism).",
      paletteSolo: [
        "warm champagne + soft rose + antique gold accents",
        "emerald + muted gold + warm neutrals",
        "pearl ivory + blush + warm highlights"
      ],
      mood: [
        "romantic luminous calm with gentle atmosphere",
        "soft poetic serenity with elegant glow",
        "dreamy-but-real refinement (storybook realism)"
      ]
    },
    realeza: {
      role: "**The Absolute Queen** (regal, opulent, high-status).",
      paletteSolo: [
        "crimson velvet + antique gold",
        "royal blue + refined gold accents",
        "deep emerald + champagne highlights"
      ],
      mood: [
        "regal grandeur with refined luxury",
        "high-status elegance with dramatic richness (not grim)",
        "opulent authority with painterly depth"
      ]
    },
    empoderada: {
      role: "**The Noble Matriarch** (powerful, elegant, composed).",
      paletteSolo: [
        "deep navy + warm gold accents",
        "burgundy + warm neutrals",
        "black + antique gold (minimal luxury)"
      ],
      mood: [
        "confident calm with premium restraint",
        "composed authority with rich materials",
        "elegant power with painterly depth"
      ]
    }
  };

  const preset = STYLE_PRESETS[style] || STYLE_PRESETS.empoderada;

  const paletteLine = group
    ? "**PALETTE (GROUP DISTINCT TONES):** harmonious palette, but each person uses a distinct tone family (one deeper, one lighter or complementary)."
    : `**PALETTE:** ${pick(preset.paletteSolo)}.`;

  const propLine = chance(0.60)
    ? `**PROP (OPTIONAL, TASTEFUL):** ${pick(nobleProps)}.`
    : "";

  const opulenceLine = opulenceLevel === "high"
    ? `**OPULENCE:** emphasize premium materials: ${pick(opulentFabrics)}; refined embroidery; lace details; rich folds; jewel highlights (tasteful).`
    : `**OPULENCE:** premium tailoring and elegant fabric handling (tasteful, not costume).`;

  const wardrobeLine = group
    ? wardrobeGroupRule
    : `**WARDROBE:** ${pick(wardrobeSoloBase)}.`;

  const direction = `
**PORTRAIT DIRECTION (NOT STIFF):**
- ${pick(posePool)}.
${group ? `- ${pick(groupInteraction)}.` : ""}
- Elegant posture, relaxed shoulders, natural hands (no tense fingers).
`;

  const styleDescription = `
**ROLE:** ${preset.role}
**STYLE TARGET:** old-master romance + storybook realism glow (naturalistic realism only).
**SCENE:** ${pick(backgroundPool)}.
**MOOD:** ${pick(preset.mood)}.
${paletteLine}
${wardrobeLine}
${opulenceLine}
${accessoriesLine}
${style === "realeza" ? "**TIARA SUTIL:** wearing a delicate low golden tiara with one central gem, very elegant and low-profile." : ""}
${propLine}
**LIGHTING:** ${pick(lightingPremium)}.
${direction}
${categoryGuardrails}
`;

  const soloFramings = [
    "**SOLO COMPOSITION:** 3/4 portrait (upper torso) with elegant negative space and painterly depth.",
    "**SOLO COMPOSITION:** half-body (waist up) with rich fabric detail visible and refined staging.",
    "**SOLO COMPOSITION:** seated portrait framed to show chair/armrest and luxurious drapery (tasteful)."
  ];

  const groupFramings = [
    "**GROUP COMPOSITION:** half-body (waist up) with clear separation, equal priority, and visible interaction.",
    "**GROUP COMPOSITION:** medium shot (waist up) with staggered depth and elegant staging (no symmetry-clone)."
  ];

  const framing = group ? `${pick(groupFramings)}` : pick(soloFramings);

  return masterPrompt(numSubjects, styleDescription, framing);
};
