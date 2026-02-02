// ARCHIVO: mujer.js
// CATEGORÍA: Mujer
// Objetivo: 3 estilos MUY distinguibles + variación curada (segura) + cero kitsch.
// Se apoya en masterPrompt para identidad / conteo / anti-collage / acabado "obra maestra".

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  // --- 1) Guardrails globales de categoría (MUJER) ---
  // Importante: reforzamos "obra maestra real" y evitamos palabras que empujen a cartoon/fantasy.
  const categoryGuardrails = `
**CATEGORY GUARDRAILS (WOMAN / COMMERCIAL / MASTERPIECE):**
- Keep it **tasteful, elegant, feminine, and commercially attractive** (no cheap costume vibe).
- Keep it **naturalistic and realistic** (avoid illustration/cartoon vibes).
- Avoid cinematic/grim lighting: use **soft, clean, flattering light** (no harsh shadows).
- Jewelry must be **refined** (no bulky collars, no oversized weird accessories).
- Background decor must contain **NO faces**: no portraits, no statues, no figurative artwork, no crowd.
`;

  // --- 2) ADN de los 3 estilos (que se note cada uno) ---
  // Distinción por rol + paleta + ambiente + textiles + mood. Sin fantasía literal.
  const STYLE_PRESETS = {
    musa: {
      role: "**The Ethereal Muse** (airy, luminous, romantic — but realistic oil paint).",
      scenes: [
        "a softly blurred Secret Garden with gentle atmospheric depth (clean background, no clutter, no figures, no statues)",
        "a serene lakeside at golden hour with subtle bokeh (no extra figures, no boats/people, no faces in decor)",
        "a bright greenhouse-like space with soft greenery, minimal and elegant (no signage, no crowd, no faces)"
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
- Airy, luminous romantic softness, expressed through **glazing and atmospheric depth** (not fantasy effects).
- Background stays clean and subtle; emphasis on face + graceful fabric flow.
`
    },

    realeza: {
      role: "**The Absolute Queen** (regal, opulent, high-status — tasteful luxury).",
      scenes: [
        "an opulent palace interior with subtle depth (clean, softly blurred, NO portraits, NO statues, NO figurative decor)",
        "a royal balcony with bright luxury daylight (no extra people, no crowd, clean architecture only)",
        "a grand hall with elegant architectural lines, minimal clutter (NO portraits/statues/tapestries with faces)"
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
        "luxurious clean daylight, crisp but flattering (no harsh shadows)",
        "soft studio light with premium sparkle control (jewels look expensive, not gaudy)",
        "bright soft key light + subtle rim light separation (still non-cinematic)"
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
        "a refined library interior (clean, softly blurred, premium atmosphere; NO portraits, NO statues, NO faces in decor)",
        "a minimalist stone staircase with soft daylight (no clutter, no crowd, clean lines)",
        "an elegant interior with renaissance-inspired tones, subtle and modern (NO figurative decor, NO faces)"
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

  // Fallback seguro si llega un style raro
  const preset = STYLE_PRESETS[style] || STYLE_PRESETS.empoderada;

  // --- 3) Construcción del styleDescription ---
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
  // Regla: evitar full-body. Mucho riesgo de manos/proporciones y baja conversion.
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

  // --- 5) Llamada al masterPrompt (Constitución) ---
  return masterPrompt(numSubjects, styleDescription, framing);
};
