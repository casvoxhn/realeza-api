// ARCHIVO: mujer.js
// CATEGORÍA: Mujer - V3.2 (DRAMA PREMIUM + WOW REACTION + Identity Locked)
// Objetivo: Reacción inmediata: “WOW, soy yo pero version obra maestra”. Drama, profundidad, lujo, sin cara/filtro IA.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isMulti = numSubjects > 1 || !!isGroup;

  // 1) Guardrails: Identidad intacta + “glamour real” + anti-plano
  const categoryGuardrails = `
**CATEGORY GUARDRAILS (WOMAN / PREMIUM WOW MASTERPIECE):**
- **ABSOLUTE LIKENESS (NON-NEGOTIABLE):** Preserve exact facial geometry and identity from the reference.
  - NO almond-eye conversion, NO slimming cheeks, NO jaw narrowing, NO “modelize” face.
  - Preserve eyelids, eye spacing, cheek volume, nose/lips shape, chin/jawline, and natural asymmetries.
  - **HAIR LOCK:** Preserve hairline, length, texture, part/bangs, and overall hairstyle. Do not restyle hair.
- **GLAMOUR REAL (NOT FILTER):**
  - Skin must look alive: natural micro-texture, subtle pores, tonal variation, believable blush.
  - Allowed: painterly glow from lighting and glazing (oil painting), NOT digital smoothing.
  - NO wax/plastic, NO airbrushed beauty filter, NO CGI shine.
- **EYES:** Must feel alive and magnetic. Catchlights controlled (one main + subtle secondary), not “doll eyes”.
- **POSTURE / FEMININE POWER:** Elegant elongated neck, relaxed shoulders, natural breathing. Feminine, confident, not stiff.
- **WARDROBE (SELLABLE LUXURY):** Museum-grade fabrics, heavy and tactile. Elegant neckline (square / off-shoulder / tasteful V).
  - NO cheap costume jewelry, NO plastic tiaras, NO clown sparkles.
  - Jewelry: ONE hero piece maximum (necklace OR earrings).
- **WOW REQUIREMENT:** The result must look like a **commissioned masterpiece** with cinematic depth: rich shadows, luminous highlights, premium atmosphere.
  - Avoid flat lighting and bland backgrounds.
`;

  // 2) Backdrops (regresamos “obra” con profundidad, sin void feo)
  const backdrops = [
    "a rich warm-umber museum backdrop with subtle painterly gradient and atmospheric depth (Old Masters gallery feel)",
    "a refined baroque interior suggested in soft low-detail shadow (arches/drapery hinted), not black void",
    "a deep olive-brown studio backdrop with warm haze and velvet-like depth, refined and premium",
    "a candle-warm classical atelier ambience with layered shadows and subtle golden air (no horror, no void edges)",
    "a luxurious dark backdrop with controlled falloff and soft vignette that feels like a museum spotlight (tasteful, not heavy)"
  ];

  // 3) Props (premium narrativa, sin “cosas raras”)
  const props = [
    "an elegant **velvet-upholstered chair** (dark wood) supporting a relaxed arm, classic portrait language",
    "a heavy velvet drape pooling on a side table (minimal, adds texture and depth)",
    "a subtle classical balustrade hinted in shadow behind, giving architecture without distraction",
    "no props; a pure gallery portrait setup with layered atmosphere and refined depth"
  ];

  // 4) Iluminación (impacto: chiaroscuro controlado + rim light sutil + cara limpia)
  const lightingOptions = [
    "**CONTROLLED CHIAROSCURO (MASTERPIECE):** Directional key light from side-front/top, sculpting cheekbones and neck gently WITHOUT changing facial anatomy. Shadows are rich but clean.",
    "**CINEMATIC KEY + SOFT FILL:** Strong key light + subtle fill to keep the face readable. Deep background, luminous skin highlights, no harsh shadow patches.",
    "**REMBRANDT LUX (SOFTENED):** Classic Rembrandt triangle on the cheek, warm glazing-like highlights, refined depth, not a black void.",
    "**GALLERY SPOTLIGHT (TASTEful):** Museum spotlight on face/collarbones, gentle falloff; background remains atmospheric and premium, not flat."
  ];

  // 5) Poses (wow femenino: intención, cuello, manos, sin rigidez)
  const soloPoses = [
    "seated 3/4 portrait, chin slightly down, eyes to camera, one hand resting lightly on the chair arm, the other softly touching a fabric fold (quiet luxury)",
    "standing 3/4, shoulders relaxed, head turned toward the light, a subtle closed-mouth smile, neckline visible, confident feminine presence",
    "seated, torso angled, one hand near collarbone/necklace area (no tension), gaze soft but powerful (magnetic)",
    "over-shoulder look with minimal twist (no extreme turn), neck elongated, earrings visible, expression calm and expensive",
    "half-body portrait, hands minimal and natural, posture tall, gaze direct and warm (the ‘I own the room’ look)"
  ];

  const groupInteractions = [
    "subjects physically close with warm elegant connection; NO face occlusion; both faces fully visible and equally premium-lit",
    "one seated, one standing behind with hands gently on shoulders; keep faces fully visible and cleanly lit",
    "arm-in-arm with subtle lean-in, calm luxury expressions; avoid stiff symmetry; keep hair identity intact",
    "if a pet is present: the woman holds the pet calmly on lap/side; her face remains the secondary hero, fully visible and properly lit"
  ];

  // 6) Estilos (re-enfocados a “obra comprable”, sin cosplay)
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
        "a silk dress draped elegantly off the shoulders (refined, tasteful), with soft folds and heirloom feel",
        "a satin gown with subtle lace sleeves and premium tailoring, ethereal but realistic"
      ],
      accessories: [
        "a delicate pearl necklace resting naturally on the skin (one hero piece)",
        "small drop earrings with controlled sparkle (secondary)",
        "minimal heirloom jewelry (one accent only)"
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
        "ONE hero piece: statement heirloom necklace OR refined drop earrings (not both)",
        "no tiara unless explicitly requested",
        "luxury sparkle is subtle and controlled"
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
        "a refined watch OR a single gold bracelet (minimal, expensive)",
        "a minimalist pendant (if no earrings hero piece)",
        "classic earrings (if no necklace hero piece)"
      ],
      mood: `**STYLE SIGNATURE:** Editorial drama + museum finish. Face stays real, scene feels powerful.`
    }
  };

  const preset = STYLE_PRESETS[style] || STYLE_PRESETS.empoderada;

  // 7) Negativos: cortan lo “plano” y lo “muñeca” sin matar drama
  const negativeBlock = `
**NEGATIVE (DO NOT DO):**
- no face slimming, no jaw narrowing, no cheekbone sharpening, no almond-eye conversion
- no digital beauty filter, no airbrushed smoothing, no wax/plastic skin, no CGI shine
- no hyper-glossy doll eyes, no oversized catchlights, no “anime” or stylized features
- no flat lighting, no bland studio-white vibe, no washed-out colors
- no cheap costume jewelry, no plastic tiaras, no clown sparkle overload
- no harsh shadow blotches on face, no uplighting, no heavy dirty vignette
`;

  // 8) Receta final: vuelve el “arte” y el “impacto”
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

**ULTRA-REALISTIC "SURREALUM" FINISH (IMPACT WOW):**
- **Oil Painting Depth:** layered glazing, pigment richness, museum varnish (subtle), real canvas feel (very subtle).
- **Skin:** alive micro-texture + warm luminous highlights from lighting (not smoothing). Natural blush on cheeks.
- **Materials:** velvet pile + silk sheen + lace weave must read as premium and tactile.
- **Cinematic Separation:** face and neckline are the hero; background stays atmospheric and expensive.
- **Print-Ready Presence:** crisp face (no oversharpen), rich tonal range, no flatness.
`;

  // 9) Composición: más “portada premium”, menos foto normal
  const soloFramings = [
    `**SOLO COMPOSITION:** ${pick(soloPoses)}. Eye-level. 50–85mm portrait feel. 3/4 portrait (head to mid-torso). Strong presence, not stiff.`,
    `**SOLO COMPOSITION:** Medium shot (waist up). Body angled 3/4, face turns to viewer. Keep neckline visible and elegant. Cinematic depth.`
  ];

  const groupFramings = [
    `**GROUP COMPOSITION:** ${pick(groupInteractions)}. Medium shot. Balanced spacing. ALL faces visible and equally premium-lit. No face occlusion.`,
    `**GROUP COMPOSITION:** Two subjects sharing frame naturally, physically close. Keep cinematic depth and ensure both faces remain identity-locked.`
  ];

  const framing = (isMulti ? pick(groupFramings) : pick(soloFramings));

  return masterPrompt(numSubjects, styleDescription, framing);
};
