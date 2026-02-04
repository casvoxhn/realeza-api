// ARCHIVO: mujer.js
// CATEGORÍA: Mujer - V4.2 (Competition-Grade Finish + Regal WOW, identity-safe)
// Objetivo: mantener identidad (masterPrompt manda) + elevar “calidad percibida” emulando competencia:

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup, variant = "wow_regal") {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isMulti = numSubjects > 1 || !!isGroup;

  // -----------------------------
  // 1) GLOBAL GUARDRAILS (ALWAYS ON)
  // -----------------------------
  const globalGuardrails = `
**GLOBAL WOMAN GUARDRAILS (ALWAYS ON):**
- **ABSOLUTE LIKENESS (NON-NEGOTIABLE):** Preserve the woman's exact facial geometry and identity from the reference.
  - NO almond-eye conversion, NO slimming cheeks, NO jaw narrowing, NO “model face”.
  - Preserve eyelids, eye spacing, cheek volume, nose/lips shape, chin/jawline, and natural asymmetries.
  - **HAIR LOCK:** Preserve hairline, length, texture, part/bangs, and overall hairstyle. Do not restyle hair.
- **GLAMOUR REAL (NOT FILTER):**
  - Skin must look alive: natural micro-texture, subtle pores, tonal variation, believable warmth.
  - Allowed: painterly glow from lighting and glazing (oil painting), NOT digital smoothing.
  - NO wax/plastic, NO airbrushed beauty filter, NO CGI shine.
- **EYES (LIFE):** Natural eye size. Controlled catchlights. Add realistic “wet line” and depth (not doll eyes).
- **MOUTH RULE:** Prefer closed mouth or subtle smile. Avoid teeth/tongue unless clearly present in the reference.
- **HANDS RULE:** Hands minimal (prefer 0–1 hand visible). Avoid complex finger gestures.
- **PRINT-READY:** Crisp face without oversharpening; rich tonal range; no HDR, no digital “hyper-clarity”.
- **NO FLATNESS:** Never bland/sterile. Must have depth, hierarchy, and presence.
`;

  // -----------------------------
  // 2) COMPETITION-GRADE FINISH (ENGINEERED FROM YOUR EXAMPLES)
  // -----------------------------
  const competitionFinish = `
**COMPETITION-GRADE OIL FINISH (MUST EMULATE):**
- **EDGE CONTROL / DEPTH HIERARCHY (CRITICAL):**
  - Face and eyes are the sharpest region with highest micro-detail.
  - Hair and fabrics slightly softer edges; background is atmospheric and soft with long gradients.
  - Subject pops from background without looking cut-out.
- **GLAZING + PIGMENT DEPTH (EXPENSIVE COLOR):**
  - Layered glazing, pigment richness, deep warm/cool shadow structure (warm umbers + cool blues).
  - Elegant saturation: no flat digital color blocks, no neon.
- **PHYSICAL PAINTING LOOK (NOT A FILTER):**
  - Very subtle linen/canvas weave visible only on close inspection.
  - Very subtle museum varnish sheen (soft, not glossy plastic).
  - **SUBTLE CRAQUELURE (AUTHENTIC):** minimal hairline cracks mostly on background/darker passages.
    IMPORTANT: craquelure must NOT distort the face, eyes, lips, or fine facial details.
- **ANTI-DIGITAL:** no HDR, no “hyper-clarity”, no oversharpening. Crisp face, but painterly.
`;

  // -----------------------------
  // 3) STYLE PRESETS (musa / realeza / empoderada)
  // -----------------------------
  const STYLE_PRESETS = {
    musa: {
      role: "**Musa Atemporal (Old Masters Romantic Luxury)** — poetic, warm, museum-grade.",
      palette: [
        "Dusty Rose + Antique Gold + Warm Umber shadows",
        "Pearl Cream + Champagne + Soft Earth browns",
        "Muted Emerald + Bronze + Warm shadow depth"
      ],
      wardrobe: [
        "a renaissance-inspired gown with a **square neckline** revealing the collarbones, heavy crushed velvet, tailored and premium (not costume)",
        "a soft silk dress draped elegantly off the shoulders (refined, tasteful), with soft folds and heirloom feel",
        "a satin gown with subtle lace sleeves and premium tailoring, ethereal but realistic"
      ],
      accessories: [
        "ONE hero piece only: a delicate pearl necklace resting naturally on the skin",
        "ONE hero piece only: small drop earrings with controlled sparkle",
        "ONE hero piece only: minimal heirloom pendant (subtle)"
      ],
      mood: `**STYLE SIGNATURE:** Romantic depth + luminous highlights. Commissioned painting energy.`
    },

    realeza: {
      role: "**LA REINA (High-Status Royal Portrait)** — opulent, alive, intimidatingly premium.",
      palette: [
        "Deep Royal Blue + Warm Gold + Ivory highlights + Warm Umber shadows",
        "Imperial Burgundy Velvet + Burnished Gold + Cream + Candle-warm depth",
        "Onyx Black Velvet + Pearls + Antique Gold + Warm skin glow"
      ],
      wardrobe: [
        "a heavy royal velvet gown with a refined deep neckline framed by tasteful gold embroidery, **structured but wearable** (no extreme corset)",
        "a brocade court dress with visible weave, sculpted bodice, and rich sleeves; expensive tailoring; collarbones softly visible",
        "a satin + velvet layered gown with lace accents, deep folds, and museum-grade texture; regal and feminine"
      ],
      accessories: [
        "ONE hero piece: an heirloom statement necklace (gems/pearls) with controlled sparkle (no cheap shine)",
        "ONE hero piece: refined chandelier/drop earrings (if no necklace), subtle but unmistakably expensive",
        "OPTIONAL (very subtle): a tiny jeweled coronet/diadem that feels museum-authentic (only if it looks natural and premium)"
      ],
      mood: `**STYLE SIGNATURE:** Royal authority + feminine magnetism. Luxurious, alive, not theatrical.`
    },

    empoderada: {
      role: "**Empoderada (Modern-Classical Editorial Drama)** — sharp presence, clean luxury.",
      palette: [
        "Midnight Navy + Antique Silver + Warm shadow depth",
        "Onyx Black + Warm Gold accents + Rich umber atmosphere",
        "Dark Plum + Bronze + Cinematic contrast"
      ],
      wardrobe: [
        "a couture velvet gown with clean silhouette and refined shoulders (not exaggerated), neckline tasteful",
        "a structured bodice with flowing skirt, elegant femininity (natural fit, not extreme)",
        "a silk dress with a tasteful V neckline (modest), confident and timeless"
      ],
      accessories: [
        "ONE hero piece only: a refined watch or single gold bracelet (minimal, expensive)",
        "ONE hero piece only: minimalist pendant (if no earrings)",
        "ONE hero piece only: classic earrings (if no necklace)"
      ],
      mood: `**STYLE SIGNATURE:** Editorial drama + museum finish. Strong presence, real face.`
    }
  };

  const preset = STYLE_PRESETS[style] || STYLE_PRESETS.realeza;

  // -----------------------------
  // 4) BACKDROPS / PROPS (VARIANT-BASED)
  // -----------------------------
  const backdrops_identity = [
    "a premium neutral gallery gradient backdrop (warm ivory to warm beige), low detail, expensive and calm",
    "a refined warm-umber studio gradient with subtle painterly depth (clean, not flat)",
    "a simple museum backdrop with soft tonal falloff (no busy elements)"
  ];

  const backdrops_regal = [
    "a warm-umber museum backdrop with layered atmospheric gradient and subtle vignette (tasteful, not heavy)",
    "a refined baroque interior hinted in soft shadow: arches + drapery suggestions, low-detail, expensive depth",
    "a candle-warm palace ambience with faint gilded tones suggested (no sharp details), deep and luxurious",
    "a deep olive-brown atelier background with warm haze and velvet-like depth, museum-grade presence"
  ];

  const backdrops_editorial = [
    "a refined gallery studio backdrop with deep warm neutrals and creamy atmospheric depth (premium, modern-classical)",
    "a classy interior bokeh hinted softly (expensive, minimal detail, not busy)",
    "a museum-grade warm neutral backdrop with cinematic depth (not sterile, not flat)",
    "a rich studio background with layered atmosphere and subtle haze (editorial luxury)"
  ];

  const props_common = [
    "an elegant **velvet-upholstered chair** (dark wood) supporting a relaxed arm (classic portrait language)",
    "a heavy velvet drape pooling on a side table (minimal, adds texture and depth)",
    "a subtle classical balustrade hinted in shadow behind (architecture without distraction)",
    "no props; pure gallery portrait setup with layered atmosphere"
  ];

  // -----------------------------
  // 5) LIGHTING (CONTROLLED DRAMA + FACE READABILITY)
  // -----------------------------
  const lighting_identity = [
    "**SOFT WINDOW DAYLIGHT:** Diffused; face fully readable; gentle shadows only; controlled catchlights; no glow.",
    "**CLEAN SOFT STUDIO:** Large soft source; smooth wrap; natural highlights; no harsh shadow patches."
  ];

  const lighting_regal = [
    "**ROYAL CHIAROSCURO (CONTROLLED):** Directional key from side-front/top for sculpted depth. Add gentle fill to keep identity crystal clear (no face shadow blotches).",
    "**CINEMATIC KEY + SOFT FILL + RIM (SUBTLE):** Strong key + soft fill for face readability + a subtle rim light on hair/shoulders for separation (not neon).",
    "**REMBRANDT LUX (WARM):** Warm Rembrandt triangle, glazed highlights on cheekbones/collarbones, deep clean shadows, museum atmosphere.",
    "**GALLERY SPOTLIGHT (TASTEful):** Museum spotlight on face and neckline with controlled falloff; background stays rich and expensive, never flat."
  ];

  const lighting_editorial = [
    "**CINEMATIC EDITORIAL KEY + FILL:** Face clean and luminous; background softer/darker than face; controlled highlights; not flat.",
    "**SOFT STUDIO DRAMA:** Large soft key with slight directional shaping; gentle fill; premium contrast; identity stays clear.",
    "**EDITORIAL WINDOW LIGHT (RICH):** Window-like key with subtle shadow shape; warm tonal depth; no harsh patches."
  ];

  // -----------------------------
  // 6) POSES / COMPOSITION (SAFER FOR IDENTITY + WOW)
  // -----------------------------
  const soloPoses_identity = [
    "3/4 angle, relaxed shoulders, elongated neck, calm confident expression; hands minimal (0–1 hand visible)",
    "seated 3/4 portrait, one arm resting naturally; chin slightly down; eyes to camera; closed mouth or subtle smile"
  ];

  const soloPoses_wow_regal = [
    "seated 3/4 portrait, chin slightly down, eyes to camera, one hand resting lightly on the chair arm, the other softly touching a velvet/brocade fold (quiet authority)",
    "standing 3/4, shoulders relaxed, head turned toward the light, subtle closed-mouth smile, neckline visible, regal presence (not stiff)",
    "seated, torso angled, one hand near collarbone/necklace area (no tension), gaze magnetic and calm (expensive energy)",
    "over-shoulder look with minimal twist (no extreme turn), neck elongated, earring highlights controlled, expression serene and powerful",
    "half-body portrait, posture tall, minimal hands, direct warm gaze (dominant but feminine)"
  ];

  const soloPoses_wow_editorial = [
    "standing 3/4, relaxed shoulders, subtle smile, neckline visible, confident and modern-classical",
    "seated 3/4, hands minimal, gaze direct and warm, cover-shoot energy",
    "torso angled, head toward light, calm magnetic eyes, premium elegance"
  ];

  const groupInteractions = [
    "subjects physically close with elegant connection; NO face occlusion; all faces fully visible and equally premium-lit",
    "one seated, one standing behind with hands gently on shoulders; keep faces fully visible and cleanly lit",
    "arm-in-arm with subtle lean-in; calm luxury expressions; avoid stiff symmetry; preserve hair identity",
    "if a pet is present: the woman holds the pet calmly on lap/side; her face remains fully visible and properly lit"
  ];

  // -----------------------------
  // 7) FINISH BLOCKS (BASE vs WOW)
  // -----------------------------
  const finish_identity = `
**FINISH (BASE):**
- This is the clean foundation. Oil-paint feel is subtle here.
- Preserve real micro-texture; do not smooth like a digital filter.
- Keep background low-detail and premium.
- IMPORTANT: This must be a NEW portrait setup (not a paint-over of the original), while preserving identity perfectly.
`;

  const finish_wow = `
**FINISH (WOW):**
- Apply a true museum-grade oil painting render: layered glazing, pigment depth, controlled brushwork.
- Add life: realistic wet line in eyes, controlled catchlights, gentle warmth in cheeks/collarbone.
- Keep drama premium, never horror. Shadows must be clean.
`;

  // -----------------------------
  // 8) NEGATIVES (STRICT)
  // -----------------------------
  const negativeBlock = `
**NEGATIVE (STRICT):**
- no identity drift, no face morphing, no merged/averaged face
- no face slimming, no jaw narrowing, no cheekbone sharpening, no almond-eye conversion
- no digital beauty filter, no airbrushed smoothing, no wax/plastic skin, no CGI look
- no hyper-glossy doll eyes, no oversized catchlights
- no teeth/tongue artifacts (unless clearly in reference), no weird mouths
- no deformed hands, no extra fingers, no complex hand gestures
- no oversharpening, no HDR, no hyper-clarity, no “8K” claims
- no random specks/dirt/paint splatters on skin; no stain-like artifacts
- no excessive cracks; no cracks across eyes/mouth; no “aged damage” on face
- no flat lighting, no bland sterile look, no washed-out colors
- no heavy dirty vignette, no harsh shadow blotches on face, no uplighting
- no cheap costume jewelry, no plastic tiaras, no clown sparkle overload
`;

  // -----------------------------
  // 9) BUILD STYLE DESCRIPTION (BY VARIANT)
  // -----------------------------
  const buildStyleDescription = () => {
    if (variant === "identity_base") {
      return `
**ROLE:** IDENTITY-LOCK PORTRAIT BASE (WOMAN)
**GOAL:** Clean, faithful base where the woman looks EXACTLY like the reference. This is not the final dramatic version.

${globalGuardrails}

**BACKDROP:** ${pick(backdrops_identity)}.
**STAGING/PROP:** ${pick(props_common)}.
**PALETTE:** ${pick(preset.palette)}.
**WARDROBE:** ${pick(preset.wardrobe)}. IMPORTANT: premium tailoring, wearable luxury; neckline elegant and flattering.
**ACCESSORIES:** ${pick(preset.accessories)}. (ONE hero piece only; optional coronet only if naturally premium)
**LIGHTING:** ${pick(lighting_identity)}.
${preset.mood}
${finish_identity}
${negativeBlock}
`;
    }

    if (variant === "wow_editorial") {
      return `
**ROLE:** EDITORIAL LUX MASTERPIECE (WOMAN) — WOW VERSION B
**GOAL:** Luxury editorial cover energy + museum-grade oil finish. Immediate buyer reaction: "WOW, I want this framed at home."

${globalGuardrails}
${competitionFinish}

**BACKDROP:** ${pick(backdrops_editorial)}.
**STAGING/PROP:** ${pick(props_common)}.
**PALETTE:** ${pick(preset.palette)}.
**WARDROBE:** ${pick(preset.wardrobe)}. IMPORTANT: heavy tactile realism (velvet/brocade/silk), wearable luxury, elegant neckline.
**ACCESSORIES:** ${pick(preset.accessories)}. (ONE hero piece only)
**LIGHTING:** ${pick(lighting_editorial)}.
${preset.mood}
${finish_wow}
${negativeBlock}
`;
    }

    // default => wow_regal (Reina competition-grade)
    return `
**ROLE:** REGAL DEPTH MASTERPIECE (WOMAN) — WOW VERSION A (ROYAL, ALIVE, COMPETITION-GRADE)
**GOAL:** Old Masters cinematic depth + royal opulence + competition-grade finish. Immediate buyer reaction: "I look like a QUEEN. Frame it."

${globalGuardrails}
${competitionFinish}

**BACKDROP:** ${pick(backdrops_regal)}.
**STAGING/PROP:** ${pick(props_common)}.
**PALETTE:** ${pick(preset.palette)}.
**WARDROBE:** ${pick(preset.wardrobe)}. IMPORTANT: heavy tactile realism (velvet/brocade/silk), wearable luxury, elegant neckline.
**ACCESSORIES:** ${pick(preset.accessories)}. (ONE hero piece only; optional tiny coronet only if museum-authentic)
**LIGHTING:** ${pick(lighting_regal)}.
${preset.mood}
${finish_wow}
${negativeBlock}
`;
  };

  // -----------------------------
  // 10) FRAMING
  // -----------------------------
  const pickSoloPose = () => {
    if (variant === "identity_base") return pick(soloPoses_identity);
    if (variant === "wow_editorial") return pick(soloPoses_wow_editorial);
    return pick(soloPoses_wow_regal);
  };

  const soloFramings = [
    `**SOLO COMPOSITION:** ${pickSoloPose()}. Eye-level. 50–85mm portrait feel. 3/4 portrait (head to mid-torso). Strong presence, not stiff.`,
    `**SOLO COMPOSITION:** Medium shot (waist up). Body angled 3/4, face turns to viewer. Keep neckline visible and elegant. Cinematic depth without obscuring identity.`
  ];

  const groupFramings = [
    `**GROUP COMPOSITION:** ${pick(groupInteractions)}. Medium shot. Balanced spacing. ALL faces visible and equally premium-lit. No face occlusion.`,
    `**GROUP COMPOSITION:** Two subjects sharing frame naturally, physically close. Keep cinematic depth and ensure both faces remain identity-locked.`
  ];

  const framing = (isMulti ? pick(groupFramings) : pick(soloFramings));

  const styleDescription = buildStyleDescription();
  return masterPrompt(numSubjects, styleDescription, framing);
};
