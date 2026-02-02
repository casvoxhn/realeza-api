// ARCHIVO: mujer.js
// CATEGORÍA: Mujer
// Objetivo: 3 estilos MUY distinguibles + variación curada + cero kitsch.
// Mejoras: "commissioned portrait" cues + depth/separation + textiles táctiles + highlights control
// + interacciones más naturales (1 gesto), evitando rigidez y repetición.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isMulti = numSubjects > 1 || !!isGroup;

  // --- 1) Guardrails globales (MUJER) ---
  const categoryGuardrails = `
**CATEGORY GUARDRAILS (WOMAN / COMMERCIAL / MASTERPIECE):**
- Keep it **tasteful, elegant, feminine, and premium** (no cheap costume vibe).
- **Naturalistic realism** under the paint (credible anatomy, believable skin).
- Avoid illustrative "magic effects" and fantasy VFX. No cartoon vibes.
- Jewelry must be **refined** (no bulky collars, no oversized weird accessories).
- Background decor must contain **NO faces**: no portraits, statues, crowds, tapestries with faces.
- Background must be **low-frequency / low-detail** (no busy patterns, no tiny ornaments).
- If multiple people: **distinct wardrobe per person** (no matching dresses by default).
`;

  // --- 2) Backdrops & props (commissioned portrait cues, pero limpios) ---
  const backdrops = [
    "a dark painterly studio backdrop with a subtle warm-to-cool gradient (very clean, low-detail, low-frequency)",
    "a subtle drapery backdrop with rich fabric folds (simple, elegant, no patterns, no figurative art)",
    "a deep, moody interior atmosphere with minimal architectural suggestion (soft, clean, no clutter, low-detail)",
    "a classical painted sky backdrop with warm golden clouds (soft painterly, not photo-sky, minimal detail)"
  ];

  // 1 prop máximo (para que no parezca set teatral)
  const props = [
    "one elegant carved wooden chair or chaise (single prop, clean composition)",
    "a simple velvet drape and a small side table (minimal, no clutter)",
    "a classical balustrade silhouette with soft depth (minimal, no crowd)",
    "no props, only the painted backdrop (ultra clean)"
  ];

  // --- 3) Lighting (depth + separation + highlights control) ---
  // Nota: Rembrandt queda como opción, pero controlado y suave.
  const lightingOptions = [
    "classic studio portrait lighting: soft key + gentle fill + subtle rim separation; controlled highlights; rich blacks; natural skin",
    "soft Rembrandt-inspired lighting: delicate triangular cheek light; soft controlled shadows (not harsh); subtle rim separation",
    "soft north-window daylight look: gentle modeling; smooth tonal transitions; controlled highlights; rich darks",
    "academic portrait lighting: warm key + cool ambient fill; painterly depth; controlled specular highlights (no digital bloom)"
  ];

  // --- 4) Poses (evitar rigidez repetida) ---
  // Manos simples, elegantes, sin “maniquí”.
  const soloPoses = [
    "seated 3/4 portrait on an elegant chair, relaxed posture, hands softly resting (natural, not stiff)",
    "seated half-body, slight torso turn, one hand resting on lap, the other lightly touching a sleeve/jewel (simple hands)",
    "standing 3/4 portrait, gentle S-curve posture, shoulders relaxed, hands natural (no mannequin pose)",
    "half-body portrait, slight head turn, calm confident expression, hands subtly posed (minimal, natural)"
  ];

  // Interacción de grupo: 1 gesto principal (para evitar manos raras y rigidez)
  const groupInteractions = [
    "one gentle hand on the other subject’s shoulder (single gesture), warm closeness, ALL faces visible",
    "subtle touch on forearm (single gesture), friendly intimacy, ALL faces visible",
    "slight lean-in with minimal touch (no hugging), composed warmth, ALL faces visible",
    "if a pet exists: one hand gently resting on the pet’s back at knee/lap level (single gesture), pet never blocks faces"
  ];

  // --- 5) ADN de estilos (3 estilos) ---
  const STYLE_PRESETS = {
    musa: {
      role: "**La Musa Atemporal** (luminosa, romántica, delicada — realismo pictórico).",
      palette: [
        "Dusty Rose + Soft Gold accents",
        "Pearl White + Warm Champagne highlights",
        "Muted Emerald + Antique Gold"
      ],
      wardrobe: [
        "a refined silk/chiffon gown with delicate lace trim and tasteful embroidery (premium, not costume)",
        "a flowing satin gown with soft drape and subtle floral detailing (elegant neckline, no bulky collars)",
        "a romantic renaissance-inspired gown with refined sleeves and lace cuffs (tasteful, high-end)"
      ],
      accessories: [
        "a delicate necklace with a small pendant + subtle earrings (fine jewelry)",
        "pearl drop earrings + a thin bracelet (tasteful, not flashy)",
        "a refined necklace + a single elegant ring (minimal luxury)"
      ],
      mood: `
**STYLE SIGNATURE (MUSA):**
- Romantic softness via glazing and gentle atmosphere (NOT fantasy effects).
- Clean composition; airy elegance expressed through light and fabric, not props.
`
    },

    realeza: {
      role: "**La Reina** (autoridad, lujo, pompa — sin cosplay).",
      palette: [
        "Royal Blue + Diamonds (refined sparkle)",
        "Crimson Velvet + Antique Gold",
        "Champagne Silk + Pearls"
      ],
      wardrobe: [
        "a regal velvet gown with subtle train and refined gold embroidery (high status, not gaudy)",
        "a structured brocade gown with lace details and premium tailoring (elegant silhouette)",
        "a satin + velvet combination gown with tasteful jewels and refined sleeves (museum-worthy)"
      ],
      accessories: [
        "a refined tiara/coronet SMALL and tasteful + diamond/pearl earrings",
        "a statement necklace (fine jewelry) + elegant bracelet (not chunky)",
        "a tasteful crown OR jeweled hairpiece (small) + matching earrings"
      ],
      mood: `
**STYLE SIGNATURE (REALEZA):**
- Opulence through textiles, posture and controlled sparkle (no costume shine).
- Luxury is clean and restrained, not theatrical.
`
    },

    empoderada: {
      role: "**La Dama Empoderada** (poder elegante, sofisticación, carácter).",
      palette: [
        "Deep Navy + muted gold accents",
        "Burgundy + warm neutrals",
        "Black + antique gold (minimal luxury)"
      ],
      wardrobe: [
        "a couture structured gown with clean silhouette and refined neckline (powerful, feminine)",
        "a velvet dress with tailored waist and elegant sleeves (premium, not theatrical)",
        "a silk gown with subtle cape detail and high-end drape (confident, composed)"
      ],
      accessories: [
        "a refined watch + minimal necklace (executive elegance, not flashy)",
        "a delicate bracelet + subtle earrings (premium restraint)",
        "a small pendant necklace + a fine ring (quiet luxury)"
      ],
      mood: `
**STYLE SIGNATURE (EMPODERADA):**
- Power through posture, tailoring, and light control (not armor, not harsh drama).
- Clean, premium, composed — no exaggerated accessories.
`
    }
  };

  const preset = STYLE_PRESETS[style] || STYLE_PRESETS.empoderada;

  // --- 6) Art Direction Finish (el 10% final de valor percibido) ---
  const artDirectionFinish = `
**ART DIRECTION FINISH (VALUE / COMMISSIONED PORTRAIT):**
- The **face is the primary detail zone** (highest clarity/detail). Background is simpler, darker, low-detail.
- Add **subtle rim separation** to cleanly separate the subject from the backdrop.
- **Controlled highlights + rich blacks**: no digital bloom, no HDR, no harsh specular shine.
- Textiles must feel tactile: **velvet pile**, **brocade weave**, **lace microstructure** (subtle, not oversharp).
- Use **only 1–2 "commission cues"** total (chair/drape/table/balustrade). Keep composition clean.
`;

  // --- 7) Construcción de styleDescription ---
  const styleDescription = `
**ROLE:** ${preset.role}
**BACKDROP:** ${pick(backdrops)}.
**STAGING/PROP:** ${pick(props)}.
**PALETTE:** ${pick(preset.palette)}.
**WARDROBE:** ${pick(preset.wardrobe)}.
**ACCESSORIES:** ${pick(preset.accessories)}.
**LIGHTING:** ${pick(lightingOptions)}.
${preset.mood}
${categoryGuardrails}
${artDirectionFinish}

**DEPTH & FINISH NOTES:**
- Subtle vignette and atmospheric depth (painterly), avoid flat "photo session" look.
- Keep it museum-grade and commercially attractive — never costume-like.
`;

  // --- 8) Composición ---
  let framing = "";

  const soloFramings = [
    `**SOLO COMPOSITION:** ${pick(soloPoses)}. Eye-level. 50–85mm portrait feel. Face crisp, background softer.`,
    `**SOLO COMPOSITION:** half-body (waist up), slight torso turn, hands simple and natural (no stiffness), face crisp.`
  ];

  const groupFramings = [
    `**GROUP COMPOSITION:** medium shot (waist up) or seated 3/4 to fit everyone. Eye-level. Balanced spacing. ALL faces visible.`,
    `**GROUP COMPOSITION:** one seated / others standing if it helps composition. Keep proportions consistent. ALL faces equally recognizable.`
  ];

  const interaction = isMulti ? `\n**GROUP INTERACTION:** ${pick(groupInteractions)}.` : "";
  framing = (isMulti ? pick(groupFramings) : pick(soloFramings)) + interaction;

  return masterPrompt(numSubjects, styleDescription, framing);
};
