// ARCHIVO: mujer.js (FINAL)
// CATEGORÍA: Mujer
// Objetivo: 3 estilos MUY distinguibles + variación curada (segura) + cero kitsch.
// Diseñado para NO generar rigidez ni "misma foto" y para evitar clones en grupos.
// Se apoya en masterPrompt para identidad / conteo / anti-collage / anti-spots / anti-text / anti-clone global.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup, options = {}) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const chance = (p) => Math.random() < p;
  const group = (Number(numSubjects) > 1) || Boolean(isGroup);

  // Opciones controladas (sin defaults peligrosos)
  const {
    poseMode = "standing_only",            // "standing_only" | "mix_standing_seated" | "seated_only"
    groupPoseMode = "standing_only",       // "standing_only" | "mix_standing_seated"
    lightMode = "mix_studio_rembrandt",    // "studio_only" | "mix_studio_rembrandt" | "rembrandt_only"
    accessoriesMode = "refined_default",   // "none" | "refined_default"
    backgroundMode = "dark_simple_variants", // "dark_simple" | "dark_simple_variants"
    lensMode = "mix_50_85"                 // "50_only" | "85_only" | "mix_50_85"
  } = options;

  // Guardrails de categoría (sin chocar con masterPrompt)
  const categoryGuardrails = `
**CATEGORY GUARDRAILS (WOMAN):**
- Tasteful, elegant, feminine, commercially attractive (no cheap costume vibe).
- Realistic, naturalistic oil portrait (avoid illustration/cartoon feel).
- Background: simple, darker, low-detail to make the subject pop.
- Lighting: flattering portrait lighting (studio / soft Rembrandt-inspired), never grim/cinematic.
- Background decor: NO faces (no portraits/statues/figurative decor).
`;

  // Fondos oscuros simples (variedad real sin caos)
  const backgroundsCore = [
    "a dark warm studio gradient backdrop (low detail, minimal)",
    "a deep olive/umber seamless backdrop with subtle tonal variation (low detail)",
    "a dark charcoal studio backdrop, softly blended (minimal)"
  ];

  const backgroundsVariants = [
    "a warm umber backdrop with subtle lighter falloff behind the head (simple, low detail)",
    "a muted forest-green backdrop with a soft vignette (clean, low detail)",
    "a deep brown-to-olive gradient backdrop (clean, low detail)"
  ];

  const backgroundPool =
    backgroundMode === "dark_simple_variants"
      ? [...backgroundsCore, ...backgroundsVariants]
      : backgroundsCore;

  // Lens feel (rompe “misma foto” sin meter locura)
  const lens50 = ["50mm portrait feel (natural, classic)"];
  const lens85 = ["85mm portrait feel (gentle compression, premium flattering)"];
  const lensPool =
    lensMode === "50_only" ? lens50 :
    lensMode === "85_only" ? lens85 :
    [...lens50, ...lens85];

  // Iluminación (Rembrandt solo como inspiración suave con fill)
  const studioLighting = [
    "soft studio key light (large softbox), gentle shadows, clean catchlights",
    "beauty-dish style soft lighting (flattering), smooth tonal transitions",
    "soft studio key + subtle fill, clean highlights, natural skin tones"
  ];

  const rembrandtLighting = [
    "Rembrandt-inspired portrait lighting WITH soft fill: gentle triangle, controlled contrast, flattering (no harsh shadows)",
    "Rembrandt-inspired key WITH subtle fill and smooth falloff (portrait-friendly, not grim)"
  ];

  const lightingPool =
    lightMode === "studio_only" ? studioLighting :
    lightMode === "rembrandt_only" ? rembrandtLighting :
    [...studioLighting, ...rembrandtLighting];

  // Micro-variación segura (compacta, no checklist)
  const gaze = [
    "gaze at camera",
    "gaze slightly off-camera (natural)",
    "gaze toward the key light (serene)"
  ];

  const expression = [
    "neutral soft expression",
    "subtle soft smile",
    "serene calm expression"
  ];

  const hands = [
    "hands relaxed and natural (no tension)",
    "one hand gently resting on the other wrist (soft, natural)",
    "one hand resting lightly on the forearm (soft, composed)",
    "hands softly placed at waist level (natural fingers)"
  ];

  // Poses (naturalidad > rigidez)
  const standingPoses = [
    "a relaxed standing portrait with a gentle 3/4 turn and natural weight shift",
    "a candid standing pose with relaxed shoulders (not stiff)",
    "a calm elegant standing posture with subtle contrapposto (natural)"
  ];

  const seatedPoses = [
    "a relaxed seated portrait on a simple studio chair with a slight 3/4 turn",
    "a seated pose with natural posture and soft hands placement (not stiff)"
  ];

  const groupStandingPoses = [
    "a balanced group portrait with clean spacing; each person slightly different body angle (natural asymmetry); all faces visible",
    "a group portrait with subtle staggered positions; no symmetry-clone; all faces visible"
  ];

  const groupSeatedPoses = [
    "a seated group portrait on simple chairs/bench, waist-up framing; natural asymmetry; all faces visible"
  ];

  const posePool =
    group
      ? (groupPoseMode === "mix_standing_seated" ? [...groupStandingPoses, ...groupSeatedPoses] : groupStandingPoses)
      : (
          poseMode === "standing_only" ? standingPoses :
          poseMode === "seated_only" ? seatedPoses :
          [...standingPoses, ...seatedPoses]
        );

  // Accesorios: refinado y anti-duplicación en grupos (sin “Woman A/B”)
  let accessoriesLine = "**ACCESSORIES:** none.";
  if (accessoriesMode !== "none") {
    if (!group) {
      const includeWatch = chance(0.40);
      accessoriesLine = includeWatch
        ? "**ACCESSORIES (TASTEFUL):** a delicate necklace (thin chain, small pendant) and a small elegant wristwatch (minimal)."
        : "**ACCESSORIES (TASTEFUL):** a delicate necklace (thin chain, small pendant).";
    } else {
      accessoriesLine = `
**ACCESSORIES (TASTEFUL, GROUP DISTINCT):**
- Accessories must be different per person (do NOT repeat the same necklace/pendant/watch).
- If a watch appears: only one person may wear it; the other person must not.
- Keep jewelry minimal and refined (no chunky or oversized pieces).
`;
    }
  }

  // 3 estilos: distinción por rol + paleta + mood + textiles
  const STYLE_PRESETS = {
    musa: {
      role: "**The Ethereal Muse** (romantic softness through glazing — realistic, not fantasy).",
      palette: [
        "Dusty Rose + Soft Gold accents",
        "Pearl White + Warm Champagne highlights",
        "Emerald Green + muted antique gold"
      ],
      wardrobeSolo: [
        "a refined chiffon/silk dress with elegant neckline (no costume elements)",
        "a premium soft gown with subtle embroidery (tasteful, minimal)",
        "a minimalist couture dress with refined fabric sheen (realistic)"
      ],
      mood: [
        "soft luminous mood (refined, gentle glow)",
        "romantic calm mood (warm, elegant)",
        "airy refined mood (premium, subtle)"
      ]
    },

    realeza: {
      role: "**The Absolute Queen** (regal, high-status — tasteful luxury, not costume).",
      palette: [
        "Royal Blue + refined sparkle",
        "Crimson Velvet + Antique Gold",
        "Champagne Silk + Pearls"
      ],
      wardrobeSolo: [
        "a regal gown with premium velvet/silk texture and refined detailing",
        "a structured high-status dress with tasteful embroidery (not theatrical)",
        "a classic luxurious gown with clean silhouette"
      ],
      mood: [
        "authoritative luxury mood (clean, premium)",
        "regal calm mood (controlled, elegant)",
        "high-status refined mood (polished)"
      ]
    },

    empoderada: {
      role: "**The Noble Matriarch** (powerful, composed — modern refinement).",
      palette: [
        "Deep Navy + muted gold accents",
        "Burgundy + warm neutral highlights",
        "Black + antique gold (minimal luxury)"
      ],
      wardrobeSolo: [
        "a structured couture dress (clean silhouette), feminine neckline",
        "a tailored velvet dress with refined sleeves (no bulky collar pieces)",
        "a silk dress with a subtle cape detail (elegant, not theatrical)"
      ],
      mood: [
        "confident composed mood (clean, premium)",
        "powerful calm mood (subtle strength)",
        "minimal luxury mood (refined restraint)"
      ]
    }
  };

  const preset = STYLE_PRESETS[style] || STYLE_PRESETS.empoderada;

  // Wardrobe: SOLO vs GRUPO
  const wardrobeLine = group
    ? `**WARDROBE (GROUP DISTINCT):** coordinated palette and luxury level, but each person wears a different dress silhouette/cut/neckline; do NOT match.`
    : `**WARDROBE:** ${pick(preset.wardrobeSolo)}.`;

  // Dirección compacta (reduce rigidez)
  const portraitDirection = `
**PORTRAIT DIRECTION (NATURAL):**
- ${pick(posePool)}; ${pick(gaze)}; ${pick(expression)}; ${pick(hands)}.
- ${pick(lensPool)}.
`;

  const styleDescription = `
**ROLE:** ${preset.role}
**BACKGROUND:** ${pick(backgroundPool)}.
**MOOD:** ${pick(preset.mood)}.
**PALETTE:** ${pick(preset.palette)}.
${wardrobeLine}
${accessoriesLine}
**LIGHTING:** ${pick(lightingPool)}.
${portraitDirection}
${categoryGuardrails}
`;

  // Composición (segura): evita full-body
  const soloFramings = [
    "**SOLO COMPOSITION:** Head & shoulders portrait. Clean separation from background.",
    "**SOLO COMPOSITION:** Half-body (waist up). Clean separation. Natural proportions.",
    "**SOLO COMPOSITION:** 3/4 crop (upper torso). Elegant negative space."
  ];

  const groupFramings = [
    "**GROUP COMPOSITION:** Half-body (waist up) to fit everyone. Balanced spacing. ALL faces equally visible and sharp.",
    "**GROUP COMPOSITION:** Medium shot (waist up). Subjects separated (no merged faces). ALL faces equally prioritized."
  ];

  const framing = group
    ? `${pick(groupFramings)} Avoid symmetry-clone; keep subtle natural asymmetry between people.`
    : pick(soloFramings);

  return masterPrompt(numSubjects, styleDescription, framing);
};
