// ARCHIVO: mujer.js (FINAL v4)
// Meta: ya ganaste consistencia. Ahora ganamos "estética premium".
// Cambios clave v4:
// - Quitamos lenguaje de foto/estudio (eso te estaba matando).
// - Fondos con profundidad tipo óleo clásico (sin caras en decor).
// - Más pomposidad: telas pesadas, bordados, encajes, capas, props nobles.
// - "Disney" = live-action fairytale / storybook romantic realism (NO cartoon).

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup, options = {}) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const chance = (p) => Math.random() < p;
  const group = (Number(numSubjects) > 1) || Boolean(isGroup);

  const {
    poseMode = "mix_standing_seated",     // "standing_only" | "mix_standing_seated" | "seated_only"
    groupPoseMode = "mix_standing_seated",// "standing_only" | "mix_standing_seated"
    accessoriesMode = "refined_plus",     // "none" | "refined_default" | "refined_plus"
    backgroundMode = "storybook_depth",   // "dark_simple" | "storybook_depth"
    opulenceLevel = "high"               // "medium" | "high"
  } = options;

  // Guardrails de categoría
  const categoryGuardrails = `
**CATEGORY GUARDRAILS (WOMAN / PREMIUM ART):**
- Must feel like a high-end commissioned painting someone would proudly hang on a wall.
- Romantic, elevated, "storybook live-action" atmosphere — but naturalistic realism (NOT cartoon).
- Background decor must contain NO faces: no portraits, statues, figurative murals, crowds.
- Avoid modern studio-photo vibe. Keep it painterly, staged, and luxurious.
`;

  // Fondos (profundos, tipo óleo clásico)
  const backgroundsDarkSimple = [
    "a deep warm umber background with subtle tonal transitions (low detail, painterly)",
    "a dark olive-brown gradient with soft vignette (painterly)",
    "a charcoal-to-warm-brown background with gentle atmosphere (painterly)"
  ];

  const backgroundsStorybookDepth = [
    "a painterly twilight garden with soft atmospheric depth and warm glow (no people, no faces in decor)",
    "a grand interior with heavy velvet drapery and subtle columns (NO portraits/statues, no faces)",
    "a classical painted sky backdrop with warm clouds and golden light (painterly, romantic, no figures)",
    "a dim palace corridor with draped fabric and candlelike glow (no portraits/statues, no faces)",
    "a romantic landscape with distant trees and warm sunset haze (painterly, no extra figures)"
  ];

  const backgroundPool =
    backgroundMode === "storybook_depth"
      ? backgroundsStorybookDepth
      : backgroundsDarkSimple;

  // Luces (más magia, sin cartoon)
  const lightingPremium = [
    "luminous golden key light with soft falloff, gentle rim light separation, painterly chiaroscuro (not harsh)",
    "soft radiant light with warm highlights on fabrics and jewelry, deep but clean shadows (old-master inspired)",
    "romantic warm glow with subtle atmospheric depth and elegant vignette (naturalistic, not fantasy effects)"
  ];

  // Poses: evita rigidez, mete elegancia real (y sillas!)
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
    "a group pose with one slightly behind the other, elegant spacing, no symmetry-clone"
  ];

  const groupSeatedPoses = [
    "a seated group pose on antique chair/bench, waist-up framing, natural asymmetry, faces clearly visible"
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

  // Props nobles (sin generar caras)
  const nobleProps = [
    "a delicate fan (held naturally)",
    "a small bouquet of flowers (subtle, tasteful)",
    "a jeweled brooch (small, refined)",
    "a silk shawl or cape draped elegantly (luxury fabric)",
    "a classic antique chair with carved wood (no faces in carvings)"
  ];

  // Accesorios (más “regalable”)
  let accessoriesLine = "**ACCESSORIES:** minimal and refined.";
  if (accessoriesMode === "none") {
    accessoriesLine = "**ACCESSORIES:** none.";
  } else if (!group) {
    if (accessoriesMode === "refined_plus") {
      accessoriesLine =
        "**ACCESSORIES (TASTEFUL):** delicate necklace + small earrings + one subtle bracelet OR a small elegant watch (not both heavy).";
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

  // Vestuario: aquí está el “arte caro”
  const opulentFabrics = [
    "deep velvet with rich folds and subtle sheen",
    "brocade with tasteful gold thread embroidery",
    "silk/sाटन with luminous highlights and layered drape",
    "lace cuffs/collar details, refined and delicate"
  ];

  const wardrobeSoloBase = [
    "a refined renaissance-inspired gown with premium tailoring and elegant neckline (not costume)",
    "a luxurious velvet dress with lace accents and rich drapery (high-end, not theatrical)",
    "a silk gown with subtle embroidery and layered sleeves (romantic, premium)"
  ];

  // Para grupos: prohibimos uniformidad explícito y le damos guía concreta
  const wardrobeGroupRule = `
**WARDROBE (GROUP ANTI-UNIFORM — HARD):**
- Coordinated luxury level, but NOT matching.
- HARD: different color tone AND different neckline AND different silhouette per person.
- Examples of difference (do NOT copy literally): one off-shoulder vs one square neckline; one velvet vs one brocade; one deeper jewel tone vs one lighter warm tone.
`;

  // 3 estilos: diferéncialos por paleta + mood + staging
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
        "dreamy-but-real refinement (storybook live-action)"
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
**STYLE TARGET:** Old-master romance + storybook live-action glow (naturalistic realism, NOT cartoon).
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

  // Composición: más “pintura comprable”
  const soloFramings = [
    "**SOLO COMPOSITION:** 3/4 portrait (upper torso) with elegant negative space and painterly depth.",
    "**SOLO COMPOSITION:** half-body (waist up) with rich fabric detail visible and refined staging.",
    "**SOLO COMPOSITION:** seated portrait framed to show chair/armrest and luxurious drapery (tasteful)."
  ];

  const groupFramings = [
    "**GROUP COMPOSITION:** half-body (waist up) with clear separation, equal priority, and visible interaction.",
    "**GROUP COMPOSITION:** medium shot (waist up) with staggered depth and elegant staging (no symmetry-clone)."
  ];

  const framing = group
    ? `${pick(groupFramings)}`
    : pick(soloFramings);

  return masterPrompt(numSubjects, styleDescription, framing);
};
