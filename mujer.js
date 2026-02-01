// ARCHIVO: mujer.js
// V300 — IDENTIDAD BIOMÉTRICA + BLOQUEO DE CABELLO + MULTI-SUJETO + VARIACIÓN CONTROLADA + RETRATO COMERCIAL

module.exports = function(style, numSubjects, isGroup) {

  // ===============================
  // 1) DEFINICIÓN DE ESTILOS — CLAROS, NO AMBIGUOS
  // ===============================

  let stylePrompt = "";

  if (style === "musa") {
    stylePrompt = `
ARTISTIC ROLE: "The Ethereal Muse"
STYLE REFERENCE: Pre-Raphaelite oil painting, poetic realism, museum portrait.
MOOD: luminous, romantic, noble softness.
ATTIRE: flowing silk robes, botanical accents, subtle gold embroidery.
COLOR PALETTE: emerald, ivory, rose, champagne.
LIGHTING: diffused glowing daylight, halo glow around faces.
BACKGROUND: misty garden, twilight lake, painterly foliage.
`;
  } else if (style === "realeza") {
    stylePrompt = `
ARTISTIC ROLE: "The Absolute Queen"
STYLE REFERENCE: Winterhalter / Grand Manner portrait.
MOOD: dominant, majestic, imperial.
ATTIRE: heavy royal gown, velvet + satin, embroidered bodice; jeweled tiara REQUIRED.
COLOR PALETTE: sapphire, ruby, gold, ivory.
LIGHTING: polished palace daylight, sculpting shadows, luxurious clarity.
BACKGROUND: palace interior, marble columns, velvet drapery, opulent decor.
`;
  } else if (style === "empoderada") {
    stylePrompt = `
ARTISTIC ROLE: "The Renaissance Empress"
STYLE REFERENCE: high-status Renaissance portrait with Sargent/Boldini energy (movement + confidence).
MOOD: radiant confidence, noble ego, commanding elegance (NOT gloomy).
ATTIRE: strictly Renaissance noblewear — corseted silk gowns, brocade sleeves, pearls, embroidered collars.
NO modern fashion allowed.
COLOR PALETTE: crimson, ivory, gold, emerald.
LIGHTING: radiant high-key daylight, heroic glow (no dark chiaroscuro).
BACKGROUND: architectural courtyard, open loggia, painted skies, warm prestige.
`;
  } else {
    // fallback seguro si llega un style no contemplado
    stylePrompt = `
ARTISTIC ROLE: "Museum Portrait"
STYLE REFERENCE: classical oil painting portrait, premium realism.
MOOD: elegant, bright, refined.
ATTIRE: tasteful historical luxury (no modern streetwear).
LIGHTING: flattering daylight.
BACKGROUND: tasteful painterly interior.
`;
  }

  // ===============================
  // 2) COMPOSICIÓN Y JERARQUÍA
  // ===============================

  let framing = "";

  if (numSubjects > 1) {
    framing = `
FRAMING MODE: GROUP PORTRAIT.

INCLUSION (HARD RULE):
- Depict ALL ${numSubjects} people and pets present in the input.
- Do not crop heads, do not hide anyone, do not blur anyone.
- Every individual must have a distinct, fully readable face.

COMPOSITION:
- Medium-to-wide portrait (waist-up to 3/4 body depending on crowd).
- Renaissance grouping: triangular / oval arrangement.
- Main woman centered and slightly forward.
- Secondary figures arranged symmetrically and clearly separated.
- Pets integrated naturally in foreground / arms / beside feet.

LIGHTING HIERARCHY:
- protagonist gets the strongest key light.
- secondary subjects receive slightly softer light but still clear faces.
`;
  } else {
    framing = `
FRAMING MODE: SOLO PORTRAIT.
- Choose the best flattering framing: waist-up or 3/4 body.
- Slight head turn, confident posture.
- Composition must feel premium and gallery-worthy.
`;
  }

  // ===============================
  // 3) PROMPT MAESTRO — CON BLOQUEO FUERTE DE CABELLO
  // ===============================

  return `
You are an elite museum portrait painter AND an art director for a premium custom portrait business.

OUTPUT: museum-quality oil painting on canvas, collectible fine-art, commercially irresistible.

TECHNICAL:
- ASPECT RATIO: vertical 4:5 ONLY (never square).
- Ultra-detailed faces, clean composition, premium lighting.

----------------------------------
IDENTITY LOCK — NON NEGOTIABLE
----------------------------------

INPUT contains ${numSubjects} subject(s).

HARD RULES:
- Paint EVERY subject found in the reference input: friends, children, women, men, and pets. No one may be omitted.
- DO NOT merge faces. DO NOT simplify anyone into a generic look.
- Each subject must be individually recognizable.

FACIAL BIOMETRIC LOCK:
- Preserve EXACT facial geometry for each person:
  eye spacing, eyelid shape, brow shape, nose width/bridge, lip shape, jawline, cheekbones, chin.
- The subject must be instantly recognizable to themselves.

HAIR IDENTITY LOCK (CRITICAL):
- Hair is part of identity. Keep hairstyle extremely close to the reference.
- Preserve hairline height, parting (side/middle), bangs/fringe, length, volume, curl pattern, texture, density.
- Do NOT significantly change haircut or styling.
- Only minimal grooming upgrades allowed:
  smoother strands, healthier shine, refined edges, painterly polish.
- Never invent a new hairstyle.

BEAUTIFICATION LIMIT:
- You may improve lighting and skin texture slightly (reduce harsh blemishes),
  but do NOT change facial structure, do NOT "modelify" the face.

PETS:
- If pets exist: preserve fur markings, color patterns, breed traits, and anatomy. Render in high detail.

----------------------------------
STYLE & SCENE (DIFFERENT LOOKS, SAME PEOPLE)
----------------------------------

${stylePrompt}

${framing}

VARIATION CONTROL:
- Vary clothing, colors, and background within the selected style, but NEVER at the cost of identity.
- Keep faces and hair consistent across styles; style changes should come from wardrobe, setting, lighting, and brushwork.

----------------------------------
EXECUTION
----------------------------------

MEDIUM: authentic oil on canvas (not digital airbrush).
BRUSHWORK: visible artistic strokes, layered pigment, realistic anatomy.
LIGHTING: flattering, premium, natural; emphasize facial features and eyes.
POSE: elegant, confident, natural — no awkward poses.

----------------------------------
NEGATIVE CONSTRAINTS — STRICT
----------------------------------

- NEVER change facial identity.
- NEVER change haircut or hairstyle drastically.
- NEVER remove any person or pet.
- NEVER merge faces or duplicate the same face on multiple people.
- NO cartoon, NO anime, NO 3D render, NO CGI, NO plastic skin, NO heavy smoothing.
- NO modern clothing in Renaissance styles.
- NO gloomy/dark mood unless explicitly requested.
- NO square format, NO cropped heads.

----------------------------------
COMMERCIAL GOAL
----------------------------------

Main woman must feel admired, powerful, and emotionally connected: "This is me."
The image must look like expensive wall art worthy of framing.

END.
`;
};
