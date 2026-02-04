// ARCHIVO: mujer.js
// CATEGORÍA: Mujer - V3.1 (Surrealum BUYER-WOW + Identity-Safe)
// Objetivo: “Se ve igualita” + WOW editorial premium (no filtro, no muñeca IA) + lujo vendible para colgar en sala.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isMulti = numSubjects > 1 || !!isGroup;

  // 1) Guardrails: Identidad + Feminidad vendible + Anti-filtro
  const categoryGuardrails = `
**CATEGORY GUARDRAILS (WOMAN / BUYER-WOW MASTERPIECE):**
- **ABSOLUTE LIKENESS:** Preserve the woman's exact facial geometry and identity from the reference. No face sculpting.
  - NO almond-eye conversion, NO slimming cheeks, NO jaw narrowing, NO “model face”.
  - Preserve natural asymmetries, eyelids, cheek volume, nose/lips shape, chin/jawline.
  - **HAIR LOCK:** Preserve hairline, length, texture, part/bangs, and overall hairstyle. Do not restyle hair.
- **BEAUTIFUL BUT REAL SKIN (NO FILTER):** Natural skin micro-texture, subtle pores, believable tonal variation.
  - Soft flattering finish is allowed, but **NO porcelain/wax/plastic**, NO airbrushed smoothing, NO CGI highlights.
- **EYES:** Natural eye size. Clear controlled catchlights (not “doll eyes”, not overly glossy).
- **POSTURE:** Elegant neck, relaxed shoulders, natural breathing. No stiffness, no mannequin posing.
- **WARDROBE (SELLABLE LUXURY):** Museum-grade fabrics, but wearable and tasteful. No cosplay.
  - Neckline should reveal collarbones/neck softly for elegance (square / off-shoulder / modest V).
  - Avoid high stiff collars unless explicitly requested.
  - NO cheap costume jewelry, NO plastic tiaras, NO exaggerated collarines.
  - NO aggressive push-up/corset exaggeration; shape should feel refined and natural.
- **BACKGROUND MOOD:** Premium gallery look: refined depth, warm elegance. Never horror, never void-only.
- **WOW RULE (NOT A FILTER):** This must be a new fine-art portrait (new pose/angle/wardrobe/setting/lighting), not a painted copy of the same photo.
`;

  // 2) Backdrops (mezcla: premium luminoso + opción depth, sin “void” obligatorio)
  const backdrops = [
    "a luminous warm-ivory museum backdrop with soft painterly gradient and airy depth (gallery look)",
    "a refined warm neutral studio background with creamy bokeh and gentle haze (editorial premium)",
    "a classy interior with soft window light and elegant blur (subtle, expensive, not busy)",
    "a warm umber museum backdrop with controlled depth (classic, not near-black)",
    "a deep but refined baroque interior where the background stays readable in low detail (no void)"
  ];

  // 3) Props (más vendibles, menos “emerging from void”)
  const props = [
    "an elegant **velvet-upholstered chair** (dark wood) providing a resting place for an arm (natural, relaxed)",
    "a heavy velvet drape pooling on a side table (minimal prop, adds texture, not distracting)",
    "a classical balustrade hinted softly in the background (subtle structure, not dominant)",
    "no props; a clean gallery portrait setup with refined background depth (editorial feel)"
  ];

  // 4) Iluminación (premium favorecedora, sin glow plástico)
  const lightingOptions = [
    "**SOFT WINDOW DAYLIGHT:** Diffused natural window light from above/side; flattering, even, clean skin tones; gentle shadows only.",
    "**BRIGHT SOFT STUDIO LIGHT:** Large soft source, smooth wrap, natural highlights (no glow), controlled catchlights.",
    "**WARM DAYLIGHT (SUBTLE):** Warm flattering light on face and collarbones with gentle falloff into a warm backdrop (no black edges).",
    "**GENTLE PAINTERLY VOLUME:** Mild contrast for depth in fabrics/neckline while keeping the face bright, clean, and identity-accurate."
  ];

  // 5) Poses (más editorial, más “wow”, sin rigidez)
  const soloPoses = [
    "seated portrait, body angled 3/4, one hand lightly touching the collarbone or fabric fold, head slightly tilted, calm confident gaze",
    "seated comfortably in a velvet chair, one arm resting naturally on the chair arm, shoulders relaxed, chin slightly down for intimacy, eyes to camera",
    "standing 3/4 with relaxed posture, looking back over the shoulder softly, neckline and earrings visible, elegant and timeless (no stiff twist)",
    "forward-facing portrait with relaxed shoulders, off-shoulder or square neckline, subtle closed-mouth smile, confident and feminine",
    "half-body portrait, one hand gently holding a small pendant or touching a sleeve cuff, calm luxury expression (quiet confidence)"
  ];

  // Grupo (conexión natural pero sin tapar caras)
  const groupInteractions = [
    "subjects seated/standing very close, warm sisterly bond, heads slightly leaning in; NO face occlusion; all faces equally visible and sharp",
    "one seated, the other standing behind with hands softly on shoulders; keep faces fully visible and properly lit",
    "arm-in-arm pose, comfortable intimacy, slight lean-in; natural smiles or calm gazes; no stiff symmetry",
    "if a pet is present: the woman holds the pet comfortably on her lap or by her side; the pet is calm; her face remains fully visible and well-lit"
  ];

  // 6) Estilos (ajustados para vender: menos cosplay, más lujo usable)
  const STYLE_PRESETS = {
    musa: {
      role: "**La Musa Atemporal** (Fine-Art, Renacimiento Suave, Editorial).",
      palette: [
        "Dusty Rose + Antique Gold + Warm Cream skin tones",
        "Pearl White + Champagne + Soft Earth browns",
        "Muted Emerald + Bronze + Warm shadows"
      ],
      wardrobe: [
        "a renaissance-inspired gown with a **square neckline** revealing the collarbones, made of heavy crushed velvet (wearable, not costume)",
        "a soft silk dress draped elegantly off the shoulders (refined, not revealing), romantic silhouette",
        "a satin-and-lace gown with gentle structure, vintage and ethereal, premium tailoring (not stiff)"
      ],
      accessories: [
        "a delicate pearl necklace resting naturally on the skin (one hero piece only)",
        "small drop earrings catching the light (controlled sparkle)",
        "minimal heirloom jewelry (no heavy stacks)"
      ],
      mood: `**STYLE SIGNATURE:** Romantic, luminous, tender realism. Painterly finish without changing facial anatomy.`
    },

    realeza: {
      role: "**La Reina** (Luxury, Prestige, Wearable Royal).",
      palette: [
        "Deep Royal Blue + Warm Gold + Cream highlights",
        "Rich Burgundy Velvet + Gold embroidery + Warm neutrals",
        "Black Velvet + Pearls + Soft contrast"
      ],
      wardrobe: [
        "a heavy velvet royal gown with a refined deep neckline framed by tasteful gold embroidery (elegant, not exaggerated)",
        "a structured brocade dress with premium tailoring and a feminine silhouette (no extreme corset push-up)",
        "a dark satin gown with lace sleeves, expensive and commanding, neckline keeps collarbones visible"
      ],
      accessories: [
        "one statement heirloom necklace OR refined drop earrings (choose one, not both)",
        "a very subtle tasteful tiara ONLY if explicitly requested (otherwise no tiara)",
        "luxurious details that sparkle softly, never flashy"
      ],
      mood: `**STYLE SIGNATURE:** Expensive presence. Prestige without costume vibes.`
    },

    empoderada: {
      role: "**Mujer Empoderada** (Modern-Classical Power, Clean Luxury).",
      palette: [
        "Midnight Navy + Soft Silver + Warm skin tones",
        "Onyx Black + Warm Gold accents + Refined contrast",
        "Dark Plum + Bronze + Moody elegance (still clean)"
      ],
      wardrobe: [
        "a couture dark velvet gown with a clean elegant silhouette, refined shoulders (not exaggerated)",
        "a structured corset-inspired bodice with a flowing skirt, elegant and feminine (natural fit, not extreme)",
        "a deep V-neck silk dress in dark tones (modest V), confident and timeless"
      ],
      accessories: [
        "a refined watch OR single gold bracelet (minimal, expensive)",
        "a minimalist pendant (one hero piece)",
        "classic earrings, nothing distracting"
      ],
      mood: `**STYLE SIGNATURE:** Quiet power. Premium editorial lighting. Sharp focus on eyes without stylization.`
    }
  };

  const preset = STYLE_PRESETS[style] || STYLE_PRESETS.empoderada;

  // 7) Receta técnica WOW (sin triggers de muñeca / filtro)
  const negativeBlock = `
**NEGATIVE (DO NOT DO):**
- no face slimming, no jaw narrowing, no cheekbone sharpening, no almond-eye conversion
- no “beauty filter”, no porcelain/wax/plastic skin, no airbrushed smoothing, no CGI shine
- no doll eyes, no hyper-glossy eyes, no exaggerated catchlights
- no stiff mannequin posture, no extreme corset push-up, no cheap tiaras/costume jewelry
- no near-black void-only background, no heavy vignette, no harsh shadows, no uplighting
`;

  const styleDescription = `
**ROLE:** ${preset.role}
**BACKDROP:** ${pick(backdrops)}.
**STAGING/PROP:** ${pick(props)}.
**PALETTE:** ${pick(preset.palette)}.
**WARDROBE:** ${pick(preset.wardrobe)}. IMPORTANT: Fabric must look heavy, tactile, and expensive (real weave/pile, not CGI).
**ACCESSORIES:** ${pick(preset.accessories)}.
**LIGHTING:** ${pick(lightingOptions)}.
${preset.mood}
${categoryGuardrails}
${negativeBlock}

**ULTRA-REALISTIC "SURREALUM" FINISH (BUYER WOW):**
- **Skin:** believable micro-texture + subtle natural blush (no artificial smoothing).
- **Materials:** velvet pile, silk sheen, lace weave visible and premium (tactile realism).
- **Depth:** clean separation between subject and background; background stays refined and soft.
- **Print-ready:** crisp face, no oversharpening, no HDR look, no digital filter vibe.
`;

  // 8) Composición (más variedad real)
  const soloFramings = [
    `**SOLO COMPOSITION:** ${pick(soloPoses)}. Eye-level. 50–85mm portrait feel. Head/shoulders to 3/4 portrait. Focus on eyes and skin realism.`,
    `**SOLO COMPOSITION:** Medium shot (waist up). Body angled 3/4, face turns to viewer. Elegant, breathable, editorial premium.`
  ];

  const groupFramings = [
    `**GROUP COMPOSITION:** ${pick(groupInteractions)}. Medium shot. Balanced spacing. ALL faces visible and equally sharp. No face occlusion.`,
    `**GROUP COMPOSITION:** Two subjects sharing the frame naturally, physically close (leaning/touching) to show connection. Keep lighting clean and flattering on both faces.`
  ];

  const framing = (isMulti ? pick(groupFramings) : pick(soloFramings));

  return masterPrompt(numSubjects, styleDescription, framing);
};
