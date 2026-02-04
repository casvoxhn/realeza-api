// ARCHIVO: ninos.js
// CATEGORÍA: Niños - V5.0 (BRIGHT MASTERPIECE - Parent-Conversion)
// Objetivo: que el papá/mamá diga: "LO QUIERO en la sala".
// Cambio clave: ADIÓS oscuridad lúgubre + ADIÓS “ojos gigantes porcelana” => natural + cálido + fine-art.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isMulti = numSubjects > 1 || !!isGroup;

  // ---------- 1) Guardrails anti-creepy / anti-IA ----------
  const categoryGuardrails = `
**CATEGORY GUARDRAILS (CHILDREN & PETS — BUYER-READY MASTERPIECE):**
- **EMOTIONAL GOAL:** Warmth, safety, tenderness, pride. This must feel like a high-end portrait parents proudly hang in their living room.
- **ABSOLUTE REALISM (NO "AI BABY"):**
  - Keep **natural proportions** (NO oversized eyes, NO doll face, NO exaggerated cheeks).
  - Preserve **true facial structure** from the reference (eye spacing, nose shape, mouth shape, chin).
  - Skin must look **real**: soft, delicate, tiny pores, gentle blush — not plastic, not wax, not porcelain.
- **LIGHTING RULES (CRITICAL):**
  - Soft daylight / diffused key light (window-like).
  - **NO uplighting** (no light coming from below the chin).
  - Avoid harsh shadows on the face; keep it flattering and clean.
- **BACKGROUND MOOD:** Elegant, bright, uplifting — never horror, never “emerging from void”.
- **SUBJECT COUNT:** Render **exactly ${numSubjects} subject(s)**. Do not invent extra faces or bodies.
- **PETS:** If present, keep the pet close (lap/knee/at side) with natural scale and correct anatomy.
- **ADULTS (IF PRESENT IN SOURCE):**
  - Either crop them out OR render as soft, tasteful supporting presence.
  - NEVER shadowy/creepy silhouettes. No “lurking in darkness”.
`;

  // ---------- 2) Age-based recipe (composition that actually sells) ----------
  // We can’t truly know age from code reliably, so we provide instructions that adapt based on visible cues.
  const ageProfiles = {
    newborn: {
      cues: "newborn: very small body, swaddled, sleepy vibe",
      backdrops: [
        "a bright, creamy fine-art studio backdrop with soft gradient (ivory to warm beige)",
        "a cozy sunlit nursery corner with gentle bokeh, airy and minimal",
        "a classic painted museum backdrop in warm light tones (not dark)"
      ],
      lighting: [
        "**SOFT WINDOW DAYLIGHT:** diffused from above and slightly to the side, flattering cheeks and forehead",
        "**FEATHERED SOFTBOX LOOK:** ultra-soft wrap, clean skin tones, delicate shadows"
      ],
      poses: [
        "newborn: peacefully swaddled, head slightly turned toward the light, calm expression, tiny hands visible",
        "newborn: cradled pose with safe support implied, gentle smile or sleepy serenity"
      ],
      props: [
        "a soft knit wrap and a simple heirloom blanket (neutral tones)",
        "a small plush cushion, minimal and tasteful"
      ]
    },
    baby: {
      cues: "baby: sitting supported, baby fat, curious eyes, soft hair",
      backdrops: [
        "a bright classic studio background (warm ivory) with subtle painterly texture",
        "a sunlit living-room setting with creamy highlights and soft bokeh",
        "a garden-like airy background with pastel florals far out of focus"
      ],
      lighting: [
        "**GOLDEN HOUR SOFTNESS:** warm, flattering, no harsh shadows",
        "**CLEAN DAYLIGHT WRAP:** soft and even, beautiful catchlights"
      ],
      poses: [
        "baby: seated securely, looking slightly above the lens, natural smile or curious calm",
        "baby: gentle 3/4 angle, hands resting naturally, cheeks softly lit"
      ],
      props: [
        "a tasteful small toy (wooden) barely visible, secondary",
        "a simple cushion with subtle texture (no heavy throne)"
      ]
    },
    toddler: {
      cues: "toddler: standing or sitting, playful, expressive",
      backdrops: [
        "a bright fine-art backdrop with warm pastel gradient",
        "a sunlit window background with airy curtains and soft bokeh",
        "a light garden terrace feel with soft greenery blur"
      ],
      lighting: [
        "**SOFT DAYLIGHT WITH SPARKLE:** bright face, gentle shadow under nose, clean skin tones",
        "**OPEN SHADE LOOK:** even light, no blotchy highlights"
      ],
      poses: [
        "toddler: eye-level portrait, playful grin, hands holding a small object naturally",
        "toddler: seated, leaning slightly forward (connection), gentle laugh captured"
      ],
      props: [
        "a small vintage storybook (tasteful)",
        "a tiny bouquet or ribbon (subtle, not costume-like)"
      ]
    },
    child: {
      cues: "child: older kid, confident posture, calmer smile",
      backdrops: [
        "a refined bright museum-style backdrop (warm neutral) with subtle painterly depth",
        "a classy interior with soft window light and creamy bokeh",
        "a luminous outdoor portrait look (soft greenery blur), elegant and premium"
      ],
      lighting: [
        "**CLASSIC PORTRAIT DAYLIGHT:** sculpting from above/side, flattering jawline, gentle contrast",
        "**SOFT STUDIO LOOK:** clean and premium, natural catchlights"
      ],
      poses: [
        "child: relaxed 3/4 pose, warm smile, hands natural (no stiff royal pose)",
        "child: seated, slight chin down, eyes to camera, confident and sweet"
      ],
      props: [
        "a subtle chair/stool (simple, premium)",
        "a small pet beside them (if applicable), affectionate connection"
      ]
    }
  };

  // Pick a profile set (we can randomize to add variety; model should adapt based on cues).
  const profileKey = pick(["newborn", "baby", "toddler", "child"]);
  const profile = ageProfiles[profileKey];

  // ---------- 3) Backgrounds (NO more void / horror) ----------
  const brightBackdrops = profile.backdrops;

  // ---------- 4) Styles (menos disfraz, más vendible) ----------
  const STYLE_PRESETS = {
    renacimiento: {
      role: "**Fine-Art Renaissance (Bright & Tender)** — museum-grade oil portrait, uplifting.",
      palettes: ["Warm Ivory + Soft Gold", "Sage Green + Cream", "Dusty Rose + Pearl"],
      wardrobe: [
        "simple elegant classic outfit with subtle embroidery (age-appropriate, not costume)",
        "soft premium fabric with gentle folds (linen/satin look), tasteful and minimal"
      ],
      mood: `**STYLE SIGNATURE:** luminous, tender, timeless — not dramatic darkness.`
    },
    nobleza: {
      role: "**Little Royalty (Modern Fine-Art)** — premium, elegant, but cute and approachable.",
      palettes: ["Royal Blue (soft) + Warm Gold", "Burgundy (lightened) + Cream", "Emerald (muted) + Ivory"],
      wardrobe: [
        "tasteful regal-inspired outfit with subtle gold accents (NOT heavy armor/costume)",
        "classic dress/tunic with premium texture, minimal jewelry (tiny heirloom touch only)"
      ],
      mood: `**STYLE SIGNATURE:** prestige + sweetness. Parents feel proud, not weirded out.`
    },
    barroco: {
      role: "**Classic Studio Baroque (Softened)** — controlled contrast, still bright on face.",
      palettes: ["Warm Umber + Cream Highlights", "Deep Blue + Soft Silver", "Wine + Ivory"],
      wardrobe: [
        "dark premium fabric with clean tailoring, but face and hands stay bright",
        "elegant satin/velvet texture kept subtle (no heavy shadow swallowing the body)"
      ],
      mood: `**STYLE SIGNATURE:** classic depth without gloom. Never a black void.`
    }
  };

  const styleKey =
    (style === "nobleza" || style === "principe") ? "nobleza" :
    (style === "barroco") ? "barroco" : "renacimiento";

  const preset = STYLE_PRESETS[styleKey];

  // ---------- 5) Lighting (make it irresistible) ----------
  const lightingOptions = profile.lighting;

  // ---------- 6) Group composition that feels like a FAMILY TREASURE ----------
  const groupComposition = `
**GROUP COMPOSITION (SIBLINGS / PETS / FAMILY):**
- Keep everyone **at eye-level**, warm connection, natural closeness.
- **Siblings:** seated close, gentle interaction (hands touching, leaning in, shared smile).
- **Pets:** at knee level / on lap / beside them, affectionate and calm.
- If a parent is visible in source:
  - Either crop out OR render softly in the background with **normal light** (not shadow).
  - Parent should feel supportive and loving, never “mysterious silhouette”.
- Use a **medium shot** or **3/4 portrait** so faces are clear and likeness is strong.
`;

  const soloComposition = `
**SOLO COMPOSITION (AGE-ADAPTIVE):**
- ${profile.cues}
- Pose: ${pick(profile.poses)}
- Props: ${pick(profile.props)}
- Shot: eye-level, premium portrait framing (head/shoulders to 3/4).
- Expression: warm, sweet, authentic (tiny smile or calm curiosity).
`;

  // ---------- 7) Final style description ----------
  const styleDescription = `
**ROLE:** ${preset.role}
**AGE PROFILE:** ${profileKey.toUpperCase()} — adapt naturally to the child's visible age cues.
**BACKDROP:** ${pick(brightBackdrops)}.
**PALETTE:** ${pick(preset.palettes)}.
**WARDROBE:** ${pick(preset.wardrobe)}.
**LIGHTING:** ${pick(lightingOptions)}.
${preset.mood}
${categoryGuardrails}
`;

  const framing = isMulti ? groupComposition : soloComposition;

  return masterPrompt(numSubjects, styleDescription, framing);
};
