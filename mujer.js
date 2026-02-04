// ARCHIVO: mujer.js
// CATEGORÍA: Mujer - V4.0 (2-PASS System: IDENTITY BASE + WOW A/B)
// Objetivo: “Soy yo, igualita” (Pass 1) + “Obra maestra que quiero en mi sala” (Pass 2A Regal / 2B Editorial)
// Nota: Este archivo NO toca masterPrompt.js. Solo estructura prompts para 2-pass y A/B.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup, variant = "wow_regal") {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isMulti = numSubjects > 1 || !!isGroup;

  // -----------------------------
  // 0) VARIANTS
  // -----------------------------
  // variant:
  // - "identity_base" => Pass 1 (cara/pelo perfectos, base limpia)
  // - "wow_regal"     => Pass 2A (Regal Depth)
  // - "wow_editorial" => Pass 2B (Editorial Lux)
  //
  // Default: "wow_regal"

  // -----------------------------
  // 1) GLOBAL GUARDRAILS (aplican a todo)
  // -----------------------------
  const globalGuardrails = `
**GLOBAL WOMAN GUARDRAILS (ALWAYS ON):**
- **ABSOLUTE LIKENESS (NON-NEGOTIABLE):** Preserve the woman's exact facial geometry and identity from the reference.
  - NO almond-eye conversion, NO slimming cheeks, NO jaw narrowing, NO “model face”.
  - Preserve eyelids, eye spacing, cheek volume, nose/lips shape, chin/jawline, and natural asymmetries.
  - **HAIR LOCK:** Preserve hairline, length, texture, part/bangs, and overall hairstyle. Do not restyle hair.
- **GLAMOUR REAL (NOT FILTER):**
  - Skin must look alive: natural micro-texture, subtle pores, tonal variation, believable blush.
  - Allowed: painterly glow from lighting and glazing (oil painting), NOT digital smoothing.
  - NO wax/plastic, NO airbrushed beauty filter, NO CGI shine.
- **EYES:** Natural eye size. Controlled catchlights (one main + subtle secondary). No hyper-glossy “doll eyes”.
- **MOUTH RULE:** Prefer closed mouth or subtle smile. Avoid teeth/tongue unless clearly present in the reference.
- **HANDS RULE:** Hands minimal (prefer 0–1 hand visible). Avoid complex finger gestures.
- **NO FLATNESS:** Avoid bland, sterile, flat lighting. Maintain depth, richness, and premium atmosphere.
- **PRINT-READY:** Crisp face without oversharpening; rich tonal range; no HDR, no digital “hyper-clarity”.
`;

  // -----------------------------
  // 2) STYLE PRESETS (musa / realeza / empoderada)
  //   -> Define palette + wardrobe language only (identity stays locked by masterPrompt + guardrails)
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
        "a renaissance-inspired gown with a **square neckline** revealing collarbones, heavy crushed velvet, tailored and premium (not costume)",
        "a soft silk dress draped elegantly off the shoulders (refined, tasteful), with soft folds and heirloom feel",
        "a satin gown with subtle lace sleeves and premium tailoring, ethereal but realistic"
      ],
      accessories: [
        "ONE hero piece only: a delicate pearl necklace resting naturally on the skin",
        "ONE hero piece only: small drop earrings with controlled sparkle",
        "ONE hero piece only: minimal heirloom pendant (subtle)"
      ],
      mood: `**STYLE SIGNATURE:** Romantic depth + luminous highlights. Feels like a real commissioned painting.`
    },

    realeza: {
      role: "**Reina (Power Luxury, Wearable Royal)** — commanding, expensive, timeless.",
      palette: [
        "Deep Royal Blue + Warm Gold + Cream highlights",
        "Rich Burgundy Velvet + Gold embroidery + Warm umber shadows",
        "Black Velvet + Pearls + Controlled contrast"
      ],
      wardrobe: [
        "a heavy velvet royal gown with a refined deep neckline framed by tasteful gold embroidery (elegant, not exaggerated)",
        "a structured brocade dress with premium tailoring (no extreme corset), feminine silhouette",
        "a dark satin gown with lace sleeves, expensive and commanding, collarbones visible"
      ],
      accessories: [
        "ONE hero piece only: statement heirloom necklace (controlled sparkle)",
        "ONE hero piece only: refined drop earrings (no necklace)",
        "ONE hero piece only: pearl strand (subtle, expensive)"
      ],
      mood: `**STYLE SIGNATURE:** Authority + elegance. Dramatic depth without losing likeness.`
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
      mood: `**STYLE SIGNATURE:** Editorial drama + museum finish. Face stays real, scene feels powerful.`
    }
  };

  const preset = STYLE_PRESETS[style] || STYLE_PRESETS.empoderada;

  // -----------------------------
  // 3) BACKDROPS / PROPS (by variant)
  // -----------------------------
  const backdrops_identity = [
    "a premium neutral gallery gradient backdrop (warm ivory to warm beige), low detail, expensive and calm",
    "a refined warm-umber studio gradient with subtle painterly depth (clean, not flat)",
    "a simple museum backdrop with soft tonal falloff (no busy elements)"
  ];

  const backdrops_regal = [
    "a rich warm-umber museum backdrop with subtle painterly gradient and atmospheric depth (Old Masters gallery feel)",
    "a refined baroque interior suggested in soft low-detail shadow (arches/drapery hinted), not black void",
    "a deep olive-brown studio backdrop with warm haze and velvet-like depth, refined and premium",
    "a candle-warm classical atelier ambience with layered shadows and subtle golden air (no horror, no void edges)",
    "a luxurious dark backdrop with controlled falloff and tasteful soft vignette (museum spotlight feel)"
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
  // 4) LIGHTING (by variant)
  // -----------------------------
  const lighting_identity = [
    "**SOFT WINDOW DAYLIGHT:** Diffused natural window light; face fully readable; gentle shadows only; no heavy vignette.",
    "**CLEAN SOFT STUDIO:** Large soft source; smooth wrap; natural highlights; controlled catchlights; no glow."
  ];

  const lighting_regal = [
    "**CONTROLLED CHIAROSCURO (MASTERPIECE):** Directional key from side-front/top, sculpting face and neck gently WITHOUT changing facial anatomy; shadows rich but clean.",
    "**CINEMATIC KEY + SOFT FILL:** Strong key plus subtle fill to keep the face readable; deep background; luminous highlights; no harsh shadow patches.",
    "**REMBRANDT LUX (SOFTENED):** Classic Rembrandt triangle on cheek; warm glazing-like highlights; refined depth; not a black void.",
    "**GALLERY SPOTLIGHT (TASTEful):** Museum spotlight on face/collarbones; gentle falloff; background stays atmospheric and premium."
  ];

  const lighting_editorial = [
    "**CINEMATIC EDITORIAL KEY + FILL:** Face clean and luminous; background softer/darker than face; controlled highlights; not flat.",
    "**SOFT STUDIO DRAMA:** Large soft key with slight directional shaping; gentle fill; premium contrast; identity stays clear.",
    "**EDITORIAL WINDOW LIGHT (RICH):** Window-like key with subtle shadow shape; warm tonal depth; no harsh patches."
  ];

  // -----------------------------
  // 5) POSES / COMPOSITION (keeps wow while minimizing failure modes)
  // -----------------------------
  const soloPoses_identity = [
    "3/4 angle, relaxed shoulders, elongated neck, calm confident expression; hands minimal (0–1 hand visible)",
    "seated 3/4 portrait, one arm resting naturally; chin slightly down; eyes to camera; closed mouth or subtle smile"
  ];

  const soloPoses_wow = [
    "seated 3/4 portrait, chin slightly down, eyes to camera, one hand resting lightly on the chair arm, the other softly touching a fabric fold (quiet luxury)",
    "standing 3/4, shoulders relaxed, head turned toward the light, a subtle closed-mouth smile, neckline visible, confident feminine presence",
    "seated, torso angled, one hand near collarbone/necklace area (no tension), gaze soft but powerful (magnetic)",
    "over-shoulder look with minimal twist (no extreme turn), neck elongated, earrings visible, expression calm and expensive",
    "half-body portrait, hands minimal and natural, posture tall, gaze direct and warm (the ‘I own the room’ look)"
  ];

  const groupInteractions = [
    "subjects physically close with elegant connection; NO face occlusion; all faces fully visible and equally premium-lit",
    "one seated, one standing behind with hands gently on shoulders; keep faces fully visible and cleanly lit",
    "arm-in-arm with subtle lean-in; calm luxury expressions; avoid stiff symmetry; preserve hair identity",
    "if a pet is present: the woman holds the pet calmly on lap/side; her face remains fully visible and properly lit"
  ];

  // -----------------------------
  // 6) WOW / FINISH blocks (by variant)
  // -----------------------------
  const finish_identity = `
**FINISH (BASE):**
- This is the clean foundation. Oil-paint feel is subtle here.
- Preserve real micro-texture; do not smooth like a digital filter.
- Keep background low-detail and premium.
- IMPORTANT: This must be a NEW portrait setup (not a paint-over of the original), while preserving identity perfectly.
`;

  const finish_wow = `
**ULTRA-REALISTIC "SURREALUM" FINISH (IMPACT WOW):**
- **Oil Painting Depth:** layered glazing, pigment richness, subtle museum varnish sheen, real canvas feel (VERY subtle).
- **Skin:** alive micro-texture + warm luminous highlights from lighting (NOT smoothing). Natural blush on cheeks.
- **Materials:** velvet pile + silk sheen + lace weave must read as premium and tactile.
- **Cinematic Separation:** face and neckline are the hero; background stays atmospheric and expensive.
- **Print-Ready Presence:** crisp face (no oversharpen), rich tonal range, no flatness.
`;

  // -----------------------------
  // 7) NEGATIVES (keeps drama but blocks the typical fails)
  // -----------------------------
  const negativeBlock = `
**NEGATIVE (STRICT):**
- no identity drift, no face morphing, no merged/averaged face
- no face slimming, no jaw narrowing, no cheekbone sharpening, no almond-eye conversion
- no digital beauty filter, no airbrushed smoothing, no wax/plastic skin, no CGI shine
- no hyper-glossy doll eyes, no oversized catchlights
- no teeth/tongue artifacts (unless clearly in reference), no weird mouths
- no deformed hands, no extra fingers, no complex hand gestures
- no flat lighting, no bland sterile look, no washed-out colors
- no heavy dirty vignette, no harsh shadow blotches on face, no uplighting
- no cheap costume jewelry, no plastic tiaras, no clown sparkle overload
`;

  // -----------------------------
  // 8) BUILD STYLE DESCRIPTION (by variant)
  // -----------------------------
  const buildStyleDescription = () => {
    if (variant === "identity_base") {
      return `
**ROLE:** IDENTITY-LOCK PORTRAIT BASE (WOMAN)
**GOAL:** Create a clean, faithful base where the woman looks EXACTLY like the reference. This is not the final dramatic version.

${globalGuardrails}

**BACKDROP:** ${pick(backdrops_identity)}.
**STAGING/PROP:** ${pick(props_common)}.
**PALETTE:** ${pick(preset.palette)}.
**WARDROBE:** ${pick(preset.wardrobe)}. IMPORTANT: premium tailoring, wearable luxury; neckline elegant and flattering.
**ACCESSORIES:** ${pick(preset.accessories)}. (ONE hero piece only)
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

    // default => wow_regal
    return `
**ROLE:** REGAL DEPTH MASTERPIECE (WOMAN) — WOW VERSION A
**GOAL:** Old Masters cinematic depth + premium luxury. Immediate buyer reaction: "I look powerful, elegant, expensive."

${globalGuardrails}

**BACKDROP:** ${pick(backdrops_regal)}.
**STAGING/PROP:** ${pick(props_common)}.
**PALETTE:** ${pick(preset.palette)}.
**WARDROBE:** ${pick(preset.wardrobe)}. IMPORTANT: heavy tactile realism (velvet/brocade/silk), wearable luxury, elegant neckline.
**ACCESSORIES:** ${pick(preset.accessories)}. (ONE hero piece only)
**LIGHTING:** ${pick(lighting_regal)}.
${preset.mood}
${finish_wow}
${negativeBlock}
`;
  };

  // -----------------------------
  // 9) FRAMING
  // -----------------------------
  const soloFramings = [
    `**SOLO COMPOSITION:** ${pick(variant === "identity_base" ? soloPoses_identity : soloPoses_wow)}. Eye-level. 50–85mm portrait feel. 3/4 portrait (head to mid-torso). Strong presence, not stiff.`,
    `**SOLO COMPOSITION:** Medium shot (waist up). Body angled 3/4, face turns to viewer. Keep neckline visible and elegant. Cinematic depth without obscuring proves identity.`
  ];

  const groupFramings = [
    `**GROUP COMPOSITION:** ${pick(groupInteractions)}. Medium shot. Balanced spacing. ALL faces visible and equally premium-lit. No face occlusion.`,
    `**GROUP COMPOSITION:** Two subjects sharing frame naturally, physically close. Keep cinematic depth and ensure both faces remain identity-locked.`
  ];

  const framing = (isMulti ? pick(groupFramings) : pick(soloFramings));

  const styleDescription = buildStyleDescription();
  return masterPrompt(numSubjects, styleDescription, framing);
};
