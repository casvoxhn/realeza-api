// ARCHIVO: mujer.js
// CATEGORÍA: Mujer
// Objetivo: 3 estilos MUY distinguibles + variación curada (segura) + cero kitsch.
// Enfoque extra: fondos más simples y oscuros para que el sujeto resalte (sin cinematic/grim).

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // --- 1) Guardrails globales de categoría (MUJER) ---
  const categoryGuardrails = `
**CATEGORY GUARDRAILS (WOMAN / COMMERCIAL / MASTERPIECE):**
- Keep it **tasteful, elegant, feminine, and commercially attractive** (no cheap costume vibe).
- Keep it **naturalistic and realistic** (avoid illustration/cartoon vibes).
- Avoid cinematic/grim lighting: use **soft, clean, flattering light** (no harsh shadows).
- Jewelry must be **refined** (no bulky collars, no oversized weird accessories).
- Background decor must contain **NO faces**: no portraits, no statues, no figurative artwork, no crowd.
- **BACKGROUND RULE:** Background must be **simple, darker, and low-detail** to maximize subject separation (no bright bokeh, no busy highlights).
`;

  // --- 2) ADN de los 3 estilos ---
  const STYLE_PRESETS = {
    musa: {
      role: "**The Ethereal Muse** (airy, luminous, romantic — but realistic oil paint).",
      scenes: [
        "a dark, softly blurred Secret Garden with gentle atmospheric depth (deep greens/umbers; clean background; no figures; no statues)",
        "a muted lakeside backdrop with low-detail water reflections (darker tones; no boats/people; no faces in decor; no bright bokeh)",
        "a minimal botanical backdrop in deep olive tones (subtle greenery blur; no signage; no crowd; no faces)"
      ],
      palettes: [
        "Dusty Rose + Soft Gold accents",
        "Pearl White + Warm Champagne highlights",
        "Emerald Green + muted antique gold"
      ],
      wardrobe: [
        "a flowing chiffon/silk gown, refined drape, elegant neckline (no bulky collars, no costume elements)",
        "a soft layered gown with subtle floral embroidery (tasteful, premium, not fantasy costume)",
        "a minimalist couture gown with refined translucency (subtle, realistic fabric handling)"
      ],
      lighting: [
        "soft daylight from the side, gentle glow through glazing, delicate shadows",
        "soft studio light mimicking daylight, clean highlights on face, refined tonal transitions",
        "luminous soft light with subtle atmospheric perspective (no 'magic haze'), face remains crisp"
      ],
      signature: `
**STYLE SIGNATURE (MUSA):**
- Airy, luminous romantic softness expressed through **glazing and atmospheric depth** (not fantasy effects).
- Background stays clean, darker, and subtle; emphasis on face + graceful fabric flow.
`
    },

    realeza: {
      role: "**The Absolute Queen** (regal, opulent, high-status — tasteful luxury).",
      scenes: [
        "an opulent palace interior in low-key tones with subtle depth (clean; softly blurred; NO portraits; NO statues; NO figurative decor)",
        "a royal balcony in muted, darker late-afternoon tones (clean architecture only; no crowd; no extra people; no bright background highlights)",
        "a grand hall in deep, warm low-light tones (elegant lines; minimal clutter; NO portraits/statues/tapestries with faces)"
      ],
      palettes: [
        "Royal Blue + Diamonds (refined sparkle)",
        "Crimson Velvet + Antique Gold",
        "Champagne Silk + Pearls"
      ],
      wardrobe: [
        "a regal ballgown with premium fabric texture (velvet/silk) and refined detailing",
        "a structured royal gown with tasteful embroidery, luxurious but not costume",
        "a classic high-status gown with clean silhouette and subtle train"
      ],
      lighting: [
        "soft luxurious key light with controlled shadows (flattering, not harsh)",
        "soft studio light with premium sparkle control (jewels look expensive, not gaudy)",
        "clean soft key light + subtle rim light separation (non-cinematic)"
      ],
      signature: `
**STYLE SIGNATURE (REALEZA):**
- Regal authority, luxury textiles, refined sparkle.
- If a crown/tiara appears, it must be **small and tasteful** (no exaggerated props).
`
    },

    empoderada: {
      role: "**The Noble Matriarch** (powerful, elegant, composed — modern refinement).",
      scenes: [
        "a refined library interior in deep neutral tones (clean; softly blurred; premium atmosphere; NO portraits; NO statues; NO faces in decor)",
        "a minimalist stone staircase with soft light and darker background separation (no clutter; no crowd; clean lines)",
        "an elegant interior with renaissance-inspired tones in low-key palette (subtle; modern; NO figurative decor; NO faces)"
      ],
      palettes: [
        "Deep Navy + muted gold accents",
        "Burgundy + warm neutral highlights",
        "Black + antique gold (minimal, luxury)"
      ],
      wardrobe: [
        "a structured couture gown (clean silhouette), luxurious fabric, feminine neckline",
        "a velvet dress with tailored waist and refined sleeves (no bulky collar pieces)",
        "a silk gown with a subtle cape detail (elegant, not theatrical)"
      ],
      lighting: [
        "soft studio light, flattering, gentle contrast (no dramatic harshness)",
        "soft daylight with controlled shadows (face remains natural, identity preserved)",
        "clean portrait lighting emphasizing confidence and symmetry"
      ],
      signature: `
**STYLE SIGNATURE (EMPODERADA):**
- Power through posture and elegance, not exaggerated accessories.
- Confident, composed expression; premium tailoring; minimal clutter.
`
    }
  };

  const preset = STYLE_PRESETS[style] || STYLE_PRESETS.empoderada;

  const styleDescription = `
**ROLE:** ${preset.role}
**SCENE:** ${pick(preset.scenes)}.
**PALETTE:** ${pick(preset.palettes)}.
**WARDROBE:** ${pick(preset.wardrobe)}.
**LIGHTING:** ${pick(preset.lighting)}.
${preset.signature}
${categoryGuardrails}
`;

  // --- 4) Composición (variación segura) ---
  let framing = "";

  const soloFramings = [
    "**SOLO COMPOSITION:** 3/4 Portrait (head + shoulders). Eye-level. 50mm look. Flattering angle.",
    "**SOLO COMPOSITION:** Half-body (waist up). Eye-level. Clean separation from background. 50mm look."
  ];

  const groupFramings = [
    "**GROUP COMPOSITION:** Half-body (waist up) to fit everyone. Eye-level. Balanced spacing. ALL faces clearly visible and equally sharp.",
    "**GROUP COMPOSITION:** Medium shot (waist up). Keep subjects separated (no merged faces). ALL faces visible, recognizable, and equally prioritized."
  ];

  if (numSubjects > 1 || isGroup) {
    framing =
      pick(groupFramings) +
      " The main woman is the visual anchor WITHOUT hiding or diminishing other subjects.";
  } else {
    framing = pick(soloFramings);
  }

  return masterPrompt(numSubjects, styleDescription, framing);
};
