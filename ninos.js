// ARCHIVO: ninos.js
// CATEGORÍA: Niños (bebés, niños, teens) + hermanos + mascotas + adulto supporting.
// Objetivo: obra maestra colgable para padres: "ese es mi hijo", pero premium.
// Mejoras: dirección de arte (valor), textiles táctiles, highlights control, fondos low-detail,
// interacciones naturales pero simples (1 gesto), manos seguras.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isMulti = numSubjects > 1 || !!isGroup;

  // Guardrails globales (niños)
  const categoryGuardrails = `
**CATEGORY GUARDRAILS (CHILDREN / COMMERCIAL / MASTERPIECE):**
- Parents must instantly say: "**That is my child**" (identity preserved by the constitution).
- **Child-appropriate styling:** no adult makeup, no adult jewelry, no mature necklines, no sensual posing.
- Keep expressions **warm, gentle, and natural** (tender, not model-like).
- Background must contain **NO faces**: no portraits, statues, crowds, tapestries with faces.
- Background must be **low-frequency / low-detail** (no busy patterns, no tiny ornaments).
- If an adult appears: adult is **supporting subject**, child remains the hero (adult restrained, no competing sparkle).
- If multiple children: **NO matching outfits by default**; keep palette harmony but vary outfit design.
- If a pet appears: pet stays at lap/knee/side level and never blocks any face.
- Interactions must use **ONE primary gesture** only (hands simple, safe).
`;

  // Backdrops & props (commission cues, minimal)
  const backdrops = [
    "a dark painterly studio backdrop with subtle warm-to-cool gradient (very clean, low-detail)",
    "a subtle drapery backdrop with rich fabric folds (simple, elegant, no patterns)",
    "a classical painted sky backdrop with warm golden clouds (soft painterly, minimal detail)",
    "a warm, minimal interior suggestion with soft shadows (no clutter, no decor faces)"
  ];

  const props = [
    "one elegant carved wooden chair or chaise (single prop, clean composition)",
    "a premium cushion or brocade pillow suitable for a child (clean, minimal)",
    "a velvet drape and a small side table (minimal objects, no clutter)",
    "no props, only the painted backdrop (ultra clean museum look)"
  ];

  // Luz: estudio dominando; Rembrandt suave opcional
  const lightingOptions = [
    "classic studio portrait lighting: soft key + gentle fill + subtle rim separation; controlled highlights; rich blacks; natural skin",
    "soft Rembrandt-inspired lighting: delicate triangle cheek light; soft controlled shadows (not harsh); subtle rim separation",
    "soft north-window daylight look: gentle modeling; smooth tonal transitions; controlled highlights; rich darks",
    "academic portrait lighting: warm key + cool ambient fill; painterly depth; controlled specular highlights (no bloom)"
  ];

  // Poses seguras (por edad, delegada al modelo, pero con reglas claras)
  const soloPoses = [
    "baby/toddler-safe: seated supported on a premium cushion or small chair; face fully visible; hands relaxed (no complex fingers)",
    "baby-safe: wrapped in a refined cloth/mantle; seated supported; face-forward 3/4; calm tenderness; no busy props",
    "child: seated 3/4 portrait on an elegant chair; relaxed posture; hands resting naturally on lap (simple hands)",
    "child: half-body portrait; slight torso turn; one hand lightly touching a brooch/book edge; the other resting (simple hands)",
    "teen: seated half-body; composed posture; subtle confidence; hands minimal and natural (no adult sensuality)",
    "teen: standing 3/4 with gentle posture; shoulders relaxed; hands natural (no mannequin pose)"
  ];

  // Layouts para grupos (2–6)
  const groupLayouts = [
    "pyramidal portrait arrangement: one seated front, others behind/to the sides; balanced spacing; ALL faces visible; consistent scale",
    "bench/chaise grouping: children seated close with gentle spacing; older sibling slightly behind (protective); ALL faces visible",
    "mixed height arrangement: smaller children in front, older behind; faces unobstructed; minimal touch only",
    "seated + standing mix: one seated, others standing beside/behind; clean separations; no face overlap"
  ];

  // Interacciones: 1 gesto principal
  const siblingInteractions = [
    "older sibling standing slightly behind with ONE gentle hand on younger sibling’s shoulder; warm protection; ALL faces visible",
    "two siblings seated close with hands lightly touching ONCE (no gripping); calm tenderness; ALL faces visible",
    "two siblings standing side-by-side holding hands at waist level (single gesture); relaxed posture; BOTH faces visible",
    "group: ONE gentle hand on shoulder + everyone else hands resting on lap/armrest; composed warmth; ALL faces visible"
  ];

  const petInteractions = [
    "child seated with pet at lap/knee level; ONE hand softly resting on pet’s back (single gesture); pet never blocks faces",
    "siblings with pet: pet placed beside chaise/knee level; ONE gentle hand resting on pet; all faces unobstructed"
  ];

  const adultChildInteractions = [
    "parent seated supporting; baby held high enough so baby’s face is fully visible; ONE hand supports baby’s back; calm tenderness",
    "parent seated supporting; child standing close with ONE hand on parent’s arm (single gesture); warm family closeness; both faces visible",
    "parent slightly behind supporting; ONE gentle hand on child’s shoulder; child remains hero; faces visible"
  ];

  // 3 estilos (modal)
  const STYLE_PRESETS = {
    renacimiento: {
      role: "**Renacimiento — Bosque Encantado** (tierno, luminoso, clásico; realismo pictórico).",
      palettes: [
        "sage green + warm cream + antique gold accents",
        "muted emerald + ivory + soft champagne highlights",
        "dusty rose + pearl white + soft old-gold accents"
      ],
      wardrobe: [
        "a refined renaissance-inspired child gown/tunic in premium linen/silk blend with subtle lace cuffs (child-appropriate, not costume)",
        "a soft velvet + satin child outfit with delicate embroidery (minimal, premium, clean neckline)",
        "a classic child garment with refined sleeves and a small lace collar (tasteful, museum-worthy)"
      ],
      accessories: [
        "a tiny brooch OR small medallion (one only), minimal and refined",
        "a simple ribbon or small hairpiece (minimal), no heavy jewelry",
        "a tiny pendant necklace (short, fine) OR subtle bracelet (one only)"
      ],
      mood: `
**STYLE SIGNATURE (RENACIMIENTO):**
- Gentle warmth, tender calm, luminous staging (no fantasy VFX).
- Premium fabric rendering, clean and giftable.
`
    },

    nobleza: {
      role: "**Nobleza — Príncipe/Princesa** (orgullo dulce, lujo controlado, colgable).",
      palettes: [
        "royal blue + ivory + antique gold (controlled sparkle)",
        "burgundy velvet + warm cream + muted gold accents",
        "champagne silk + pearls + soft gold highlights"
      ],
      wardrobe: [
        "a child-appropriate regal outfit in velvet/brocade with refined trim (no cosplay, clean silhouette)",
        "a premium brocade child gown/tunic with small lace collar and subtle gold embroidery (controlled)",
        "a classic noble child garment with a small capelet detail (subtle), refined tailoring"
      ],
      accessories: [
        "a tiny coronet/tiara OPTIONAL and small (if appropriate) OR a small jeweled hairpiece (never exaggerated)",
        "a small medallion OR refined brooch (one only), minimal and premium",
        "subtle earrings (if appropriate) + one minimal bracelet (not flashy)"
      ],
      mood: `
**STYLE SIGNATURE (NOBLEZA):**
- Pride + warmth; opulence through textiles and staging, not props.
- Sparkle is expensive and controlled (no gaudy shine).
`
    },

    barroco: {
      role: "**Barroco — Estudio Clásico** (museo, profundidad, drama suave).",
      palettes: [
        "deep wine + ivory lace + antique gold accents",
        "midnight blue + warm cream + muted gold highlights",
        "warm black + burgundy + soft old-gold accents"
      ],
      wardrobe: [
        "a baroque-inspired child outfit in velvet with small lace collar and refined cuffs (child-appropriate, not theatrical)",
        "a premium satin + velvet child garment with restrained embroidery and classic neckline",
        "a classic museum baroque child dress/tunic with small lace detail and premium tailoring"
      ],
      accessories: [
        "a tiny brooch OR small pendant (one only), refined and minimal",
        "a simple ribbon (minimal) OR small medallion (one only)",
        "subtle earrings (if appropriate) OR delicate bracelet (one only)"
      ],
      mood: `
**STYLE SIGNATURE (BARROCO):**
- Museum depth, soft chiaroscuro control (not harsh), tender calm.
- Rich darks, controlled highlights, premium textures.
`
    }
  };

  const styleKey =
    style === "renacimiento" || style === "bosque" ? "renacimiento" :
    style === "nobleza" || style === "principe" || style === "princesa" ? "nobleza" :
    style === "barroco" ? "barroco" :
    "renacimiento";

  const preset = STYLE_PRESETS[styleKey];

  // Art direction finish (valor percibido)
  const artDirectionFinish = `
**ART DIRECTION FINISH (VALUE / COMMISSIONED PORTRAIT):**
- The child’s **face is the primary detail zone** (highest clarity/detail). Background is simpler, darker, low-detail.
- Add **subtle rim separation** to cleanly separate subjects from the backdrop.
- **Controlled highlights + rich blacks**: no digital bloom, no HDR, no harsh specular shine.
- Textiles must feel tactile: **velvet pile**, **brocade weave**, **lace microstructure** (subtle, not oversharp).
- Use only **1–2 commission cues** total (chair/drape/cushion/table). Keep composition clean.
`;

  const styleDescription = `
**ROLE:** ${preset.role}
**BACKDROP:** ${pick(backdrops)}.
**STAGING/PROP:** ${pick(props)}.
**PALETTE (FAMILY HARMONY):** ${pick(preset.palettes)}.
**WARDROBE:** ${pick(preset.wardrobe)}.
**ACCESSORIES:** ${pick(preset.accessories)}.
**LIGHTING:** ${pick(lightingOptions)}.
${preset.mood}
${categoryGuardrails}
${artDirectionFinish}

**DEPTH & FINISH NOTES:**
- Keep it arranged and giftable (commissioned portrait staging), not candid modern.
- If multiple children: vary at least TWO elements per child (color within palette + fabric + collar/sleeves + one small accessory).
- Keep gestures minimal: one primary gesture total; other hands rest on lap/armrest.
`;

  // Composición
  let framing = "";

  const soloFramings = [
    `**SOLO COMPOSITION:** ${pick(soloPoses)}. Eye-level. 50–85mm portrait feel. Face crisp, background softer.`,
    `**SOLO COMPOSITION:** half-body (waist up), calm posture, hands simple and natural; face crisp; background softer.`
  ];

  const groupFramings = [
    `**GROUP COMPOSITION:** ${pick(groupLayouts)}. Medium shot (waist up) or seated 3/4. Eye-level. ALL faces visible.`,
    `**GROUP COMPOSITION:** arranged Old Masters portrait staging. Keep proportions consistent. No face overlap or occlusion.`
  ];

  // Interacción: elegir UNA fuente según contexto (pet/adult/solo siblings)
  const interaction = (() => {
    if (!isMulti) return "";
    // delegamos al modelo detectar si hay adulto/pet, pero le damos preferencia simple:
    // - si hay adulto: usa adultChildInteractions
    // - si hay mascota: usa petInteractions
    // - si no: siblings
    return `
**GROUP INTERACTION (ONE PRIMARY GESTURE):**
- If an adult is present: ${pick(adultChildInteractions)}.
- Else if a pet is present: ${pick(petInteractions)}.
- Else: ${pick(siblingInteractions)}.
`;
  })();

  framing = (isMulti ? pick(groupFramings) : pick(soloFramings)) + interaction;

  return masterPrompt(numSubjects, styleDescription, framing);
};
