// ARCHIVO: ninos.js
// CATEGORÍA: Niños - V7.1 (IDENTITY LOCK + WOW CHANGE)
// Prioridad #1: Likeness facial exacta (sin estilizar facciones)
// Prioridad #2: WOW real (composición/ropa/escena nuevas, no “filtro”)

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isMulti = numSubjects > 1 || !!isGroup;

  const identityLock = `
🔒 IDENTITY LOCK (NON-NEGOTIABLE)
- Preserve the child's **exact facial geometry** from the reference:
  - Eye shape/eyelids/corners MUST NOT change (no almonding, no lifting, no narrowing).
  - Cheek volume MUST NOT slim down (keep natural baby fat / real fullness).
  - Nose width/bridge, mouth shape/lips, chin/jawline, ear placement MUST match.
  - Head shape MUST remain consistent.
- No beautifying, no face sculpting, no “artist idealization”. Do not “improve” features.
- Apply the art style to **materials/texture/lighting only** (brushwork, canvas, varnish), NOT to facial anatomy.
- If there is any conflict between style and likeness: **likeness wins**.
`;

  const wowDirective = `
✨ WOW CHANGE (NOT A FILTER)
- Must be a **new portrait**, not the same photo with a paint filter.
- The face stays identical, but you MUST change at least 3 of these:
  1) camera framing/angle (headshot vs 3/4 vs seated),
  2) lighting direction/setup (window daylight vs soft studio vs warm daylight),
  3) background environment (airy museum / elegant interior / gentle garden blur),
  4) wardrobe styling (premium, age-appropriate),
  5) pose/body orientation (front vs 3/4, seated vs standing).
`;

  const categoryGuardrails = `
**CATEGORY GUARDRAILS (CHILDREN & PETS — BUYER-READY):**
- Render **exactly ${numSubjects} subject(s)**. No extras. No invented faces/bodies.
- Natural eye size and natural catchlights (not “magical gloss”).
- Real skin texture & tonal variation (no porcelain/wax/plastic, no airbrush smoothing).
- Age-accurate proportions (no balloon head).
- Prefer closed-mouth smile; lips slightly parted ONLY if clearly in the reference.
- Age-accurate hands/fingers (no adult hands on babies).
- Soft flattering light; no uplighting; no harsh shadows; no heavy vignette.
- Bright, warm, elegant mood; no void, no gloom, no horror.
- Pets (if present): correct anatomy/scale; affectionate placement; do not invent animals.
- Wardrobe: premium and tasteful, age-appropriate; no theatrical costumes/armor.
`;

  const ageProfiles = {
    newborn: {
      cues: "newborn: swaddled, sleepy, tiny body, very soft features",
      backdrops: [
        "a luminous warm-ivory fine-art studio backdrop with subtle painterly gradient and gentle depth",
        "a cozy sunlit nursery corner with airy curtains and creamy bokeh, minimal and premium",
        "a refined museum backdrop in warm light tones with soft depth (never dark)"
      ],
      lighting: [
        "**SOFT WINDOW DAYLIGHT:** diffused from above/side, ultra-gentle shadows",
        "**FEATHERED SOFTBOX LOOK:** clean, even wrap, delicate highlights"
      ],
      poses: [
        "newborn: peacefully swaddled, head turned slightly toward the light, serene expression",
        "newborn: safe cradled portrait feel, relaxed face, calm and tender"
      ],
      props: [
        "a premium knit wrap with an heirloom blanket (neutral warm tones)",
        "a minimal plush toy barely visible as a tiny accent (secondary only)"
      ],
      wow: [
        "a subtle warm halo behind the head (museum-grade, extremely gentle)",
        "a soft airy rim-light separating the baby from the background, natural and delicate"
      ]
    },

    baby: {
      cues: "baby: seated supported, baby fat, curious calm eyes, soft hair",
      backdrops: [
        "a bright warm-ivory studio background with painterly depth and creamy bokeh",
        "a softly sunlit interior with airy curtains and gentle light gradient, premium and clean",
        "a pastel garden blur with warm highlights, extremely subtle and elegant"
      ],
      lighting: [
        "**CLEAN DAYLIGHT WRAP:** soft and even, natural catchlights, flattering cheeks",
        "**WARM WINDOW LIGHT:** gentle sculpting, no harsh shadows"
      ],
      poses: [
        "baby: seated securely on a simple cushion, eye-level, calm curiosity or tiny closed-mouth smile",
        "baby: 3/4 portrait, hands resting naturally on lap, cheeks softly lit"
      ],
      props: [
        "a simple textured cushion (premium, subtle)",
        "a small wooden toy barely visible (secondary only)"
      ],
      wow: [
        "background edges gently fall off in brightness extremely subtly (never touching the face, never noticeable as a vignette)",
        "a gentle sun-kissed highlight on hair and shoulders, very natural"
      ]
    },

    toddler: {
      cues: "toddler: playful, expressive, lively connection",
      backdrops: [
        "a bright fine-art backdrop with warm pastel gradient and gentle depth",
        "a sunlit window scene with airy curtains and creamy bokeh, premium portrait look",
        "a light garden terrace feel with soft greenery blur and warm highlights"
      ],
      lighting: [
        "**SOFT DAYLIGHT SPARKLE:** bright face, clean tones, gentle shadow under chin only",
        "**OPEN SHADE LOOK:** even and flattering, no blotchy highlights"
      ],
      poses: [
        "toddler: eye-level portrait, playful grin, natural posture, hands relaxed",
        "toddler: seated leaning slightly forward for connection, gentle laugh captured, authentic warmth"
      ],
      props: [
        "a tiny ribbon or small flower (subtle, premium)",
        "a small simple storybook (modern simple cover, NOT vintage leather)"
      ],
      wow: [
        "gentle premium background bokeh that feels airy and expensive",
        "a soft warm highlight that makes the portrait feel like a gallery piece"
      ]
    },

    child: {
      cues: "child: older kid, confident but sweet, relaxed posture",
      backdrops: [
        "a refined bright museum-style backdrop (warm neutral) with subtle painterly depth",
        "a classy interior with soft window light and creamy bokeh, living-room worthy",
        "a luminous outdoor portrait look with soft greenery blur and warm highlights"
      ],
      lighting: [
        "**CLASSIC PORTRAIT DAYLIGHT:** flattering, gentle contrast, clean skin tones",
        "**SOFT STUDIO LOOK:** premium, natural catchlights, no harsh shadows"
      ],
      poses: [
        "child: relaxed 3/4 pose, warm closed-mouth smile, hands natural and comfortable",
        "child: seated, slight chin down, eyes to camera, confident and sweet"
      ],
      props: [
        "a subtle chair/stool (simple, premium)",
        "a small pet beside them (if present), affectionate connection"
      ],
      wow: [
        "subtle linen canvas texture + gentle varnish finish (museum-grade, not plastic)",
        "refined painterly depth in the background with a premium gallery feel"
      ]
    }
  };

  const profileKey = pick(["newborn", "baby", "toddler", "child"]);
  const profile = ageProfiles[profileKey];

  const STYLE_PRESETS = {
    renacimiento: {
      role: "**Luminous Fine-Art (Renaissance Finish)** — warm, tender, gallery-ready.",
      palettes: ["Warm Ivory + Soft Gold", "Sage Green + Cream", "Dusty Rose + Pearl"],
      wardrobe: [
        "premium simple outfit with subtle embroidery (age-appropriate, not costume)",
        "soft fine fabric with gentle folds (linen/satin feel), tasteful and minimal"
      ],
      mood: `**STYLE SIGNATURE:** luminous warmth + painterly finish (identity preserved).`
    },
    nobleza: {
      role: "**Modern Little Royalty (Elegant Finish)** — pride + sweetness, wearable and premium.",
      palettes: ["Soft Royal Blue + Warm Gold", "Light Burgundy + Cream", "Muted Emerald + Ivory"],
      wardrobe: [
        "tasteful elegant outfit with subtle gold accents (NOT costume)",
        "classic premium dress/tunic, minimal heirloom detail"
      ],
      mood: `**STYLE SIGNATURE:** refined elegance, never face-sculpting.`
    },
    barroco: {
      role: "**Classic Gallery Depth (Soft Contrast Finish)** — depth without darkness.",
      palettes: ["Warm Umber + Cream Highlights", "Deep Blue + Soft Silver", "Wine + Ivory"],
      wardrobe: [
        "premium darker fabric with clean tailoring, face stays bright and true",
        "subtle satin/velvet texture, never swallowing details"
      ],
      mood: `**STYLE SIGNATURE:** gentle depth, bright face, identity preserved.`
    }
  };

  const styleKey =
    (style === "nobleza" || style === "principe") ? "nobleza" :
    (style === "barroco") ? "barroco" : "renacimiento";

  const preset = STYLE_PRESETS[styleKey];

  const groupComposition = `
**GROUP COMPOSITION (SIBLINGS / PETS / FAMILY):**
- Eye-level, warm closeness, natural connection.
- Siblings: seated close, gentle interaction (hands touching, leaning in).
- Pets: at knee level / on lap / beside them, affectionate and calm.
- If a parent is visible in source: crop out OR render softly with normal light, minimal detail.
- Medium shot / 3/4 portrait: faces clear, likeness prioritized.
- Add 1 WOW detail: ${pick(profile.wow)}.
- Strict count: exactly ${numSubjects} subject(s). No extras.
`;

  const soloComposition = `
**SOLO COMPOSITION (WOW + LIKENESS):**
- ${profile.cues}
- Pose: ${pick(profile.poses)}
- Props: ${pick(profile.props)}
- Add 1 WOW detail: ${pick(profile.wow)}.
- Shot: eye-level, premium portrait framing (head/shoulders to 3/4).
- Expression: calm curiosity or gentle closed-mouth smile (unless reference clearly shows otherwise).
`;

  const negativeBlock = `
**NEGATIVE (DO NOT DO):**
- no almond eyes, no lifted eye corners, no eye shape changes, no eyelid changes
- no slimmer cheeks, no face thinning, no jawline sharpening, no beauty sculpting
- no doll face, no uncanny valley, no porcelain/wax/plastic skin, no airbrushed smoothing
- no oversized eyes, no exaggerated head scale, no hyper-symmetry
- no weird mouth/teeth/tongue, no adult hands on baby, no deformed fingers
- no extra faces/people/bodies, no invented subjects
- no “same photo with filter”, no minimal-change output
- no dark void background, no heavy vignette, no harsh shadows, no uplighting
- no theatrical costume, no armor, no dramatic vintage leather book for babies
`;

  const styleDescription = `
${identityLock}
${wowDirective}

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
