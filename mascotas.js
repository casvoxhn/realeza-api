// ARCHIVO: mascotas.js
// CATEGORÍA: Mascotas (PET-FIRST)
// Objetivo: 3 estilos distinguibles + identidad intacta + interacción cálida con humanos
// + multi-pet (hasta 5 sujetos) + DEFAULT POSE DOMINANTE: "ACOSTADO ELEGANTE" (B).

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  // Random helpers
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const weightedPick = (items) => {
    // items: [{ value: "text", weight: 4 }, ...]
    const total = items.reduce((sum, it) => sum + (it.weight || 1), 0);
    let r = Math.random() * total;
    for (const it of items) {
      r -= (it.weight || 1);
      if (r <= 0) return it.value;
    }
    return items[items.length - 1].value;
  };

  const isMulti = numSubjects > 1 || !!isGroup;

  // 1) Guardrails específicos de mascotas (identidad del animal y anti-kitsch)
  const petGuardrails = `
**CATEGORY GUARDRAILS (PETS / MUSEUM COMMISSION):**
- This is a **PET-FIRST** commissioned oil portrait: the hero pet is the main subject.
- Preserve the pet's **exact identity** from the source:
  - coat color and pattern, markings, fur length/texture, ear shape, eye color, muzzle shape, nose color.
  - Do NOT change breed traits. Do NOT "cute-ify" into a different animal.
  - Do NOT change head shape, eye spacing, muzzle length, or facial proportions.
- Keep expression natural: calm, noble, warm. Avoid goofy/cartoon smiles.
- No kitsch: no oversized crowns, no clown costumes, no cheap shiny plastics.
- Background must contain **NO faces** (no portraits/statues/figurative tapestries/crowds).
`;

  // 2) Backdrops / staging (cojín grande + opulencia controlada)
  const backdrops = [
    "a dark museum backdrop with subtle warm-to-cool gradient, minimal, elegant, low-detail",
    "a classical interior suggestion with soft columns and warm drapery, minimal architecture, no clutter",
    "a moody baroque interior with deep shadows and controlled highlights, clean negative space",
    "a soft painted sky backdrop with warm golden clouds, painterly (NOT photoreal sky)"
  ];

  const props = [
    "a **large plush velvet cushion** with tassels and subtle gold trim (throne-like, premium)",
    "an elegant low chaise or carved bench with rich upholstery (minimal, clean composition)",
    "a single draped velvet cloth over a small platform (simple, museum-grade)",
    "a classic balustrade silhouette + one large cushion (minimal, no crowd, no clutter)"
  ];

  // 3) Luz (evitar look CGI / caricatura)
  const lightingOptions = [
    "museum portrait lighting: soft key + gentle fill + subtle rim separation, natural fur detail",
    "Rembrandt-inspired lighting: controlled shadows, soft modeling, no harsh contrast",
    "soft north-window daylight: warm highlights, smooth tonal transitions, believable texture",
    "baroque candlelit ambience (subtle): warm key, deep background, realistic reflections, NOT fantasy glow"
  ];

  // 4) Poses PET-SOLO (B dominante: acostado elegante)
  // Idea: muchas variaciones de "lying" para que NO se sienta repetitivo.
  const petLyingPoses = [
    "hero pet lying elegantly on the large cushion, head raised, calm noble gaze, front paws relaxed",
    "hero pet in a sphinx-like pose on the cushion (front paws forward), head slightly turned, dignified expression",
    "hero pet lying on the cushion with one front paw subtly advanced, soft eye contact, natural posture",
    "hero pet lying on a low chaise with draped velvet, head raised, warm calm presence, realistic fur",
    "hero pet lying comfortably with gentle chest lift, relaxed shoulders, noble calm eyes, no stiffness",
    "hero pet lying on the cushion, slight diagonal body angle, head turned toward light, refined silhouette"
  ];

  const petSeatedPoses = [
    "hero pet seated 3/4 on the large cushion, front paws visible and relaxed, calm noble gaze",
    "hero pet seated upright, slight head turn, natural expression, fur texture highly detailed"
  ];

  const petIconPoses = [
    "medium portrait of hero pet (chest up), calm gaze, background softer, fur crisp",
    "chest-up iconic portrait, cape visible on shoulders, fur texture crisp, background minimal"
  ];

  // Weighted default: 50% lying, 35% seated, 15% chest-up/icon
  const petSoloPoseWeighted = () =>
    weightedPick([
      { value: pick(petLyingPoses), weight: 50 },
      { value: pick(petSeatedPoses), weight: 35 },
      { value: pick(petIconPoses), weight: 15 }
    ]);

  // 5) Multi-pet composition (hasta 5 sujetos)
  const multiPetArrangements = [
    "hero pet centered on the main cushion; secondary pets arranged in a gentle arc around, slightly behind",
    "hero pet in front with strongest light; secondary pets staggered by depth (no crowding), all faces visible",
    "two pets share one large cushion (hero pet more centered); additional pets near cushion edge (subtle), no clutter",
    "triangle composition: hero pet at apex, others forming balanced base, consistent scale and perspective"
  ];

  // 6) Interacción con humanos (si existen humanos)
  // En niños: calidez/ternura. En adultos: caricia orgánica. Siempre pet-first.
  const humanWarmInteractions = [
    "IF a child is present: child close to the pet, gentle hug or cheek-to-fur closeness, warm tenderness; pet remains centered and largest",
    "IF a child is present: child seated beside the cushion, one hand softly on the pet’s back/shoulder; affectionate and natural",
    "IF an adult is present: adult slightly behind/side, hand gently resting on the pet’s chest/neck; calm organic closeness (supporting role)",
    "IF an adult is present: adult seated near the cushion, subtle touch on the pet’s back; protective presence without stealing focus"
  ];

  // 7) Anti-clone en grupos (accesorios por mascota)
  const multiPetUniqueness = `
**MULTI-PET UNIQUENESS (CRITICAL):**
- If more than 1 pet: do NOT clone accessories.
- Keep harmony (same era/material family), but vary:
  - one pet: medallion; another: refined collar; another: small brooch; another: no jewelry (premium restraint).
- Keep all pets equally recognizable; no blending of faces/patterns.
`;

  // 8) 3 estilos del modal (operativos, claros)
  const STYLE_PRESETS = {
    renacimiento: {
      role: "**Renacimiento Romántico (Elegancia)** — suave, cálido, museo, ternura noble.",
      palette: [
        "Champagne + soft gold + warm creams",
        "Muted emerald + antique gold + pearl highlights",
        "Soft burgundy + warm neutrals + subtle gold accents"
      ],
      wardrobe: [
        "a refined velvet cape with subtle embroidery and a small medallion (premium, restrained)",
        "a soft silk mantle with lace edge detail and a tasteful brooch (museum-grade, not costume)",
        "a noble fur-trimmed cloak (ermine-inspired) with minimal jewels (controlled opulence)"
      ],
      accessories: [
        "a single fine medallion + small pearls (subtle luxury)",
        "a refined collar with one gemstone + small brooch",
        "a minimal chain detail (very subtle) + no crown"
      ],
      mood: `
**STYLE SIGNATURE (RENACIMIENTO):**
- Warm softness, glazing depth, gentle atmosphere (no fantasy effects).
- Big cushion + premium textiles; expression calm and lovable.
`
    },

    realeza: {
      role: "**Realeza Imperial (Coronación)** — opulencia controlada, trono, presencia oficial.",
      palette: [
        "Royal blue + antique gold + pearls",
        "Crimson velvet + deep gold + warm shadows",
        "Emerald + gold filigree + black accents"
      ],
      wardrobe: [
        "a regal velvet mantle with ermine trim and refined gold embroidery (not gaudy)",
        "a brocade-lined cape with a jeweled clasp (tasteful, premium)",
        "a royal draped cloak with subtle train and gold edging (museum-worthy)"
      ],
      accessories: [
        "a small tasteful coronet OR jeweled headpiece (very small) + fine collar",
        "a premium medallion + subtle pearl detail",
        "a refined brooch + elegant chain (no oversized crown)"
      ],
      mood: `
**STYLE SIGNATURE (REALEZA):**
- Throne-like cushion + minimal drapery/columns suggestion.
- Hero pet looks royal without looking like cosplay.
`
    },

    barroco: {
      role: "**Barroco Dramático (Teatral)** — intenso, Rembrandt opcional, contraste elegante, carácter.",
      palette: [
        "Black + antique gold + deep burgundy",
        "Ox-blood red + warm shadow browns + subtle gold",
        "Deep navy + muted gold + candle-warm highlights"
      ],
      wardrobe: [
        "a dark velvet cloak with gold trim and a single brooch (dramatic, premium)",
        "a deep red mantle with subtle embroidery, controlled sheen (no costume gloss)",
        "a black-and-gold draped cape with minimal jewels (high contrast, elegant)"
      ],
      accessories: [
        "a single brooch + thin chain (restraint)",
        "a refined collar + one gemstone (no crown)",
        "optional small medallion, keep it subtle"
      ],
      mood: `
**STYLE SIGNATURE (BARROCO):**
- Controlled drama: deep shadows, warm highlights, realistic texture.
- No horror vibes, no fantasy glow — museum-grade intensity only.
`
    }
  };

  const preset = STYLE_PRESETS[style] || STYLE_PRESETS.renacimiento;

  // 9) Style description (la “receta”)
  const styleDescription = `
**ROLE:** ${preset.role}
**BACKDROP:** ${pick(backdrops)}.
**STAGING/PROP:** ${pick(props)}.
**PALETTE:** ${pick(preset.palette)}.
**WARDROBE (CAPE/MANTLE):** ${pick(preset.wardrobe)}.
**ACCESSORIES:** ${pick(preset.accessories)}.
**LIGHTING:** ${pick(lightingOptions)}.
${preset.mood}
${petGuardrails}
${isMulti ? multiPetUniqueness : ""}

**DEPTH & FINISH NOTES:**
- Fur must show micro-detail (individual strands, realistic softness, believable volume).
- Textiles must feel expensive (velvet pile, brocade weave, lace edge) without looking CGI.
- Add subtle atmospheric depth + gentle vignette (painterly), avoid flat photo-session feel.
`;

  // 10) Framing / composición (4:5 vertical lo impone masterPrompt)
  const soloFramings = [
    `**SOLO COMPOSITION:** ${petSoloPoseWeighted()}. Eye-level. 50–85mm portrait feel. Pet face crisp, background softer.`,
    `**SOLO COMPOSITION:** seated 3/4 or lying 3/4 on the cushion (prefer lying). Keep paws natural and believable; avoid stiffness.`
  ];

  const groupFramings = [
    `**GROUP COMPOSITION:** medium shot or seated/lying 3/4 to fit everyone. ${pick(multiPetArrangements)}. ALL faces visible. Hero pet most prominent.`,
    `**GROUP COMPOSITION:** consistent scale/perspective. Hero pet gets strongest light + center priority. Secondary subjects slightly behind or to sides.`
  ];

  const interaction = isMulti
    ? `\n**WARM INTERACTION RULES:** ${pick(humanWarmInteractions)}. If multiple pets: gentle contact (touching paws/leaning), no crowding.`
    : `\n**WARMTH NOTE:** calm, noble, lovable presence; avoid goofy grin; subtle warmth in eyes.`;

  const framing = (isMulti ? pick(groupFramings) : pick(soloFramings)) + interaction;

  return masterPrompt(numSubjects, styleDescription, framing);
};
