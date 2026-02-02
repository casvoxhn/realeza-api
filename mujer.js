// ARCHIVO: mujer.js
// CATEGORÍA: Mujer
// GIRO: Estética "STUDIO PORTRAIT" + acabado de óleo museo (obra maestra colgable).
// Fondo simple y oscuro, luz de estudio, poses sentada, accesorios refinados.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const categoryGuardrails = `
**CATEGORY GUARDRAILS (WOMAN / STUDIO MASTERPIECE):**
- Studio portrait realism + museum oil execution (subtle brushwork, glazing).
- Background must be **simple, darker, low-detail** (seamless backdrop / soft gradient).
- Use **studio lighting** only: large softbox / beauty dish look, soft and flattering (NO harsh shadows, NO cinematic, NO grim).
- Jewelry/accessories must be **refined** (no bulky collars, no exaggerated crowns).
- Background decor must contain **NO faces** (no portraits/statues/figurative art).
`;

  // Poses: forzamos variedad y metemos sentada.
  const soloPoses = [
    "standing, subtle contrapposto, composed posture, arms relaxed (no dramatic gesture)",
    "seated on an elegant studio chair, graceful posture, relaxed shoulders (no stiff pose)",
    "seated 3/4 angle, hands gently resting (natural hands), calm expression"
  ];

  const groupPoses = [
    "standing close together, balanced spacing, everyone equally visible",
    "seated group composition on a bench/chairs, waist-up framing, everyone equally visible"
  ];

  // Accesorios refinados (no kitsch)
  const accessories = [
    "a delicate necklace (thin chain, tasteful pendant) and a small elegant wristwatch",
    "a refined necklace with subtle sparkle and a classic wristwatch (no oversized jewelry)",
    "minimal earrings + delicate necklace + elegant wristwatch (all tasteful)"
  ];

  // Luces de estudio (sin Rembrandt duro)
  const studioLighting = [
    "soft studio key light (large softbox), gentle shadows, clean catchlights in the eyes",
    "beauty-dish style soft studio lighting (flattering), smooth tonal transitions, no harsh contrast",
    "soft studio key + subtle fill, clean highlights, natural skin tones (non-cinematic)"
  ];

  // Fondos oscuros simples (para resaltar sujeto)
  const studioBackgrounds = [
    "a dark warm studio gradient backdrop (low detail, no texture clutter)",
    "a deep olive/umber seamless backdrop with subtle tonal variation",
    "a dark charcoal studio backdrop, softly blended, minimal"
  ];

  const STYLE_PRESETS = {
    musa: {
      role: "**The Ethereal Muse** (romantic, airy — expressed through glazing, not fantasy effects).",
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

  const pose = (numSubjects > 1 || isGroup) ? pick(groupPoses) : pick(soloPoses);

  const styleDescription = `
**ROLE:** ${preset.role}
**STUDIO BACKGROUND:** ${pick(studioBackgrounds)}.
**PALETTE:** ${pick(preset.palette)}.
**WARDROBE:** ${pick(preset.wardrobe)}.
**ACCESSORIES (TASTEFUL):** ${pick(accessories)}.
**LIGHTING (STUDIO):** ${pick(studioLighting)}.
**POSE DIRECTION:** ${pose}.
${categoryGuardrails}
`;

  // Composición: mantenemos seguro (no full-body)
  let framing = "";
  const soloFramings = [
    "**SOLO COMPOSITION:** 3/4 Portrait (head + shoulders). Eye-level. 50mm look. Clean background separation.",
    "**SOLO COMPOSITION:** Half-body (waist up). Eye-level. Clean separation. 50mm look."
  ];

  const groupFramings = [
    "**GROUP COMPOSITION:** Half-body (waist up) to fit everyone. Eye-level. Balanced spacing. ALL faces equally visible and sharp.",
    "**GROUP COMPOSITION:** Medium shot (waist up). Subjects separated (no merged faces). ALL faces equally prioritized."
  ];

  framing = (numSubjects > 1 || isGroup)
    ? pick(groupFramings) + " The main woman is the visual anchor WITHOUT hiding or diminishing other subjects."
    : pick(soloFramings);

  return masterPrompt(numSubjects, styleDescription, framing);
};
