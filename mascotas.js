// ARCHIVO: mascotas.js
// CATEGORÍA: Mascotas (PET-FIRST)
// Objetivo: 3 estilos MUY distinguibles + identidad del animal intacta + interacción cálida con humanos
// (niños = ternura cercana, adultos = caricia orgánica) + multi-pet (hasta 5 sujetos) sin caos.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
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
- If the pet has a collar in the source, you may replace it with **period-appropriate** fine accessories,
  but preserve the pet’s identity (no anatomy changes).
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

  // 4) Poses pet-only (seguras, vendibles)
  const petSoloPoses = [
    "hero pet seated 3/4 on a large cushion, front paws relaxed, noble posture, calm gaze",
    "hero pet lying elegantly on a large cushion, head raised, dignified, soft eye contact",
    "hero pet seated upright, slight head turn, natural expression, fur texture highly detailed",
    "medium portrait of hero pet (chest up), calm gaze, background softer, fur crisp"
  ];

  // 5) Multi-pet composition (hasta 5 sujetos)
  const multiPetArrangements = [
    "hero pet centered on the main cushion; secondary pets arranged in a gentle arc around, slightly behind",
    "hero pet in front with strongest light; secondary pets staggered by depth (no crowding), all faces visible",
    "two pets share one large cushion (hero pet more centered); additional pets on floor near cushion edge (subtle)",
    "triangle composition: hero pet at apex, others forming balanced base, consistent scale and perspective"
  ];

  // 6) Interacción con humanos (condicional: si aparecen humanos en la(s) foto(s))
  // Nota: No asumimos que siempre habrá humanos; lo dejamos como regla "si existen".
  const humanWarmInteractions = [
    "IF a child is present: child close to the pet, gentle hug or cheek-to-fur closeness, warm tenderness; pet remains visually dominant",
    "IF a child is present: child seated beside the cushion, one hand softly on the pet’s shoulder/back; affectionate and natural",
    "IF an adult is present: adult slightly behind/side, hand gently resting on the pet’s chest/neck area; calm, organic closeness",
    "IF an adult is present: adult seated near the cushion, subtle touch on the pet’s back, soft protective presence (supporting role)"
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
        "a minimal necklace/chain detail (very subtle) + no crown"
      ],
      mood: `
**STYLE SIGNATURE (RENACIMIENTO):**
- Warm softness, glazing depth, gentle atmosphere (no fantasy effects).
- Cojín grande + textiles premium; expression calm and lovable.
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
        "a statement medallion (premium) + pearl detail (subtle)",
        "a refined brooch + elegant chain (no oversized crown)"
      ],
      mood: `
**STYLE SIGNATURE (REALEZA):**
- Throne-like cushion + drapery/columns suggestion.
- Strong hierarchy: hero pet looks like royalty without looking like cosplay.
`
    },

    barroco: {
      role: "**Barroco Dramático (Teatral)** — intenso, Rembrandt, contraste elegante, carácter.",
      palette: [
        "Black + antique gold + deep burgundy",
        "Ox-blood red + warm shadow browns + subtle gold",
        "Deep navy + muted gold + candle-warm highlights"
      ],
      wardrobe: [
        "a dark velvet cloak with gold trim and a single brooch (dramatic, premium)",
        "a deep red mantle with subtle embroidery, controlled shine (no costume gloss)",
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
- No horror vibes, no fantasy glow — just museum-grade intensity.
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

  // 10) Framing / composición (4:5 vertical ya lo impone masterPrompt)
  const soloFramings = [
    `**SOLO COMPOSITION:** ${pick(petSoloPoses)}. Eye-level. 50–85mm portrait feel. Pet face crisp, background softer.`,
    `**SOLO COMPOSITION:** medium portrait (chest up) with calm gaze; luxurious cushion edge visible; clean negative space.`
  ];

  const groupFramings = [
    `**GROUP COMPOSITION:** medium shot or seated 3/4 to fit everyone. ${pick(multiPetArrangements)}. ALL faces visible. Hero pet most prominent.`,
    `**GROUP COMPOSITION:** keep consistent scale/perspective. Hero pet gets strongest light + center priority. Secondary subjects slightly behind or to sides.`
  ];

  const interaction = isMulti
    ? `\n**WARM INTERACTION RULES:** ${pick(humanWarmInteractions)}. If multiple pets: gentle contact (touching paws/leaning), no crowding.`
    : `\n**WARMTH NOTE:** calm, noble, lovable presence; avoid goofy grin; subtle warmth in eyes.`;

  const framing = (isMulti ? pick(groupFramings) : pick(soloFramings)) + interaction;

  return masterPrompt(numSubjects, styleDescription, framing);
};
