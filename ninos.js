// ARCHIVO: ninos.js
// CATEGORÍA: Niños - V6.0 (WOW + NATURAL LIKENESS LOCK)
// Objetivo: retrato premium para sala: tierno, luminoso, real, sin “muñeco IA”.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isMulti = numSubjects > 1 || !!isGroup;

  // 1) GUARDRAILS DUROS (anti-uncanny, anti-muñeco, anti-invenciones)
  const categoryGuardrails = `
**CATEGORY GUARDRAILS (CHILDREN & PETS — WOW, NATURAL, BUYER-READY):**
- **ABSOLUTE LIKENESS:** Keep the **exact same child(ren)/pet(s)** identity from the reference photo(s). Do not stylize faces.
- **NATURAL PROPORTIONS (CRITICAL):** Age-accurate head-to-body scale, natural eye size, natural facial geometry. **NO oversized head, NO big cartoon eyes, NO doll face.**
- **SKIN REALISM:** Soft real skin texture, subtle pores and tonal variation. **NO porcelain, NO wax, NO plastic airbrush, NO beauty-smoothing.**
- **MOUTH/TEETH RULE:** Prefer closed mouth or very subtle smile. **Avoid open mouth/teeth/tongue unless clearly present in the reference.**
- **HANDS RULE:** Age-accurate hands/fingers, natural grip. **NO adult hands on baby, NO weird fingers.**
- **LIGHTING RULES:** Soft daylight (window-like), flattering, even. **NO uplighting, NO harsh shadows, NO heavy vignette.**
- **BACKGROUND MOOD:** Bright, warm, elegant, uplifting. **NO void, NO gloom, NO horror mood.**
- **SUBJECT COUNT:** Render **exactly ${numSubjects} subject(s)**. **NO extra faces/people/bodies.**
- **PETS:** If present, correct anatomy/scale; keep close and affectionate (lap/side). Do not invent animals.
- **WARDROBE RULE:** Premium and tasteful, age-appropriate. **NO heavy costumes, NO armor, NO exaggerated royal props.**
`;

  // 2) AGE PROFILES (prop control + safer poses)
  const ageProfiles = {
    newborn: {
      cues: "newborn: swaddled, sleepy, tiny body, soft features",
      backdrops: [
        "a bright creamy fine-art studio backdrop with soft warm gradient (ivory to warm beige)",
        "a sunlit airy nursery corner with gentle bokeh, minimal and premium",
        "a classic painted museum backdrop in warm light tones (not dark)"
      ],
      lighting: [
        "**SOFT WINDOW DAYLIGHT:** diffused from above and slightly to the side, gentle shadows only",
        "**FEATHERED SOFTBOX LOOK:** ultra-soft wrap, clean skin tones, minimal contrast"
      ],
      poses: [
        "newborn: peacefully swaddled, head gently turned toward the light, calm serene expression",
        "newborn: safe cradled portrait feel, relaxed face, tiny hands peeking naturally"
      ],
      props: [
        "a soft knit wrap and simple heirloom blanket (neutral tones)",
        "a minimal plush toy barely visible (secondary)"
      ]
    },

    baby: {
      cues: "baby: seated supported, baby fat, curious calm eyes, soft hair",
      backdrops: [
        "a bright warm-ivory studio background with subtle painterly texture",
        "a softly sunlit interior with creamy highlights and shallow depth of field",
        "a gentle pastel garden blur (very subtle, premium)"
      ],
      lighting: [
        "**CLEAN DAYLIGHT WRAP:** soft and even, natural catchlights",
        "**WARM DAYLIGHT:** flattering cheeks, no harsh shadows"
      ],
      poses: [
        "baby: seated securely, eye-level, calm curiosity or tiny closed-mouth smile",
        "baby: gentle 3/4 angle, hands resting naturally, cheeks softly lit"
      ],
      props: [
        "a simple textured cushion (premium, subtle)",
        "a small wooden toy barely visible (secondary)"
      ]
    },

    toddler: {
      cues: "toddler: playful, expressive, standing or seated, lively connection",
      backdrops: [
        "a bright fine-art backdrop with warm pastel gradient",
        "a sunlit window background with airy curtains and soft bokeh",
        "a light garden terrace feel with soft greenery blur"
      ],
      lighting: [
        "**SOFT DAYLIGHT WITH SPARKLE:** bright face, clean tones, gentle shadow under chin only",
        "**OPEN SHADE LOOK:** even light, no blotchy highlights"
      ],
      poses: [
        "toddler: eye-level portrait, playful grin, natural posture, hands relaxed",
        "toddler: seated leaning slightly forward for connection, gentle laugh captured"
      ],
      props: [
        "a tiny bouquet or ribbon (subtle, premium)",
        "a small simple storybook (NOT vintage leather, not dramatic)"
      ]
    },

    child: {
      cues: "child: older kid, confident but sweet, relaxed posture",
      backdrops: [
        "a refined bright museum-style backdrop (warm neutral) with subtle painterly depth",
        "a classy interior with soft window light and creamy bokeh",
        "a luminous outdoor portrait look (soft greenery blur), elegant and premium"
      ],
      lighting: [
        "**CLASSIC PORTRAIT DAYLIGHT:** flattering, gentle contrast, clean skin tones",
        "**SOFT STUDIO LOOK:** premium, natural catchlights, no harsh shadows"
      ],
      poses: [
        "child: relaxed 3/4 pose, warm closed-mouth smile, hands natural",
        "child: seated, slight chin down, eyes to camera, confident and sweet"
      ],
      props: [
        "a subtle chair/stool (simple, premium)",
        "a small pet beside them (if present), affectionate connection"
      ]
    }
  };

  // 3) Perfil (variedad controlada)
  const profileKey = pick(["newborn", "baby", "toddler", "child"]);
  const profile = ageProfiles[profileKey];

  // 4) Estilos (más vendible, menos disfraz)
  const STYLE_PRESETS = {
    renacimiento: {
      role: "**Luminous Fine-Art Renaissance** — museum-grade oil portrait, warm and tender.",
      palettes: ["Warm Ivory + Soft Gold", "Sage Green + Cream", "Dusty Rose + Pearl"],
      wardrobe: [
        "simple elegant classic outfit with subtle embroidery (age-appropriate, not costume)",
        "soft premium fabric with gentle folds (linen/satin look), tasteful and minimal"
      ],
      mood: `**STYLE SIGNATURE:** luminous, tender, timeless — clean and bright.`
    },
    nobleza: {
      role: "**Little Royalty (Modern Fine-Art)** — prestige + sweetness, very wearable.",
      palettes: ["Soft Royal Blue + Warm Gold", "Light Burgundy + Cream", "Muted Emerald + Ivory"],
      wardrobe: [
        "tasteful regal-inspired outfit with subtle gold accents (NOT heavy costume)",
        "classic dress/tunic with premium texture, minimal jewelry (tiny heirloom touch only)"
      ],
      mood: `**STYLE SIGNATURE:** proud and adorable — never theatrical.`
    },
    barroco: {
      role: "**Classic Studio Depth (Soft Baroque)** — gentle depth without gloom.",
      palettes: ["Warm Umber + Cream Highlights", "Deep Blue + Soft Silver", "Wine + Ivory"],
      wardrobe: [
        "dark premium fabric with clean tailoring, face/hands remain bright and clear",
        "elegant satin/velvet texture kept subtle (no shadow swallowing the body)"
      ],
      mood: `**STYLE SIGNATURE:** refined depth, still bright, no black void.`
    }
  };

  const styleKey =
    (style === "nobleza" || style === "principe") ? "nobleza" :
    (style === "barroco") ? "barroco" : "renacimiento";

  const preset = STYLE_PRESETS[styleKey];

  // 5) Composición (grupos con amor real, sin “shadow people”)
  const groupComposition = `
**GROUP COMPOSITION (SIBLINGS / PETS / FAMILY):**
- Eye-level, warm closeness, natural connection.
- Siblings: seated close, gentle interaction (hands touching, leaning in).
- Pets: at knee level / on lap / beside them, affectionate and calm.
- If a parent is visible in source:
  - Crop out OR render softly with normal light and minimal detail (supportive, not dominant).
- Medium shot / 3/4 portrait: faces must be clear, true likeness prioritized.
- **Strict count:** exactly ${numSubjects} subject(s). No extras.
`;

  const soloComposition = `
**SOLO COMPOSITION (AGE-ADAPTIVE):**
- ${profile.cues}
- Pose: ${pick(profile.poses)}
- Props: ${pick(profile.props)}
- Shot: eye-level, premium portrait framing (head/shoulders to 3/4).
- Expression: warm, authentic, calm curiosity or gentle closed-mouth smile.
`;

  // 6) Descripción final (con NEGATIVE inline para ganar la pelea al modelo)
  const negativeBlock = `
**NEGATIVE (DO NOT DO):**
- no doll face, no uncanny valley, no porcelain/wax/plastic skin, no airbrushed smoothing,
- no oversized eyes, no exaggerated head scale, no hyper-symmetry,
- no weird mouth/teeth/tongue, no adult hands on baby, no deformed fingers,
- no extra faces/people/bodies, no invented subjects,
- no dark void background, no heavy vignette, no harsh shadows, no uplighting,
- no theatrical costume, no armor, no dramatic vintage leather book for babies.
`;

  const styleDescription = `
**ROLE:** ${preset.role}
**AGE PROFILE:** ${profileKey.toUpperCase()} — adapt to visible age cues naturally.
**BACKDROP:** ${pick(profile.backdrops)}.
**PALETTE:** ${pick(preset.palettes)}.
**WARDROBE:** ${pick(preset.wardrobe)}.
**LIGHTING:** ${pick(profile.lighting)}.
${preset.mood}
${categoryGuardrails}
${negativeBlock}
`;

  const framing = isMulti ? groupComposition : soloComposition;
  return masterPrompt(numSubjects, styleDescription, framing);
};
