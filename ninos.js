// ARCHIVO: ninos.js
// CATEGORÍA: Niños (bebés, niños, teens) + hermanos + mascotas + adulto supporting.
// Objetivo: obra maestra "Old Masters" colgable, ultra vendible para padres.
// Claves: identidad intacta, ternura noble, staging clásico, poses seguras por edad,
// interacciones naturales controladas, anti-outfits clonados.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isMulti = numSubjects > 1 || !!isGroup;

  // Helpers
  const pickDistinct = (arr, n) => {
    const copy = [...arr];
    // shuffle
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    const out = [];
    for (let k = 0; k < n; k++) out.push(copy[k % copy.length]);
    return out;
  };

  const subjectLabel = (i) => {
    if (i === 0) return "SUBJECT A (primary hero)";
    if (i === 1) return "SUBJECT B";
    if (i === 2) return "SUBJECT C";
    if (i === 3) return "SUBJECT D";
    if (i === 4) return "SUBJECT E";
    return `SUBJECT ${String.fromCharCode(65 + i)}`;
  };

  // Guardrails (niños son más sensibles: evita adultizar, evita muñeco, evita manchas)
  const categoryGuardrails = `
**CATEGORY GUARDRAILS (CHILDREN / COMMERCIAL / MASTERPIECE):**
- The child/baby must be **instantly recognizable** (identity preserved). Parents must say: "That's my child."
- **Child-appropriate styling:** no adult makeup, no adult jewelry, no mature necklines, no sensual posing.
- **Naturalistic realism** under the paint: believable anatomy, natural skin texture (no plastic, no beauty filter).
- Preserve real freckles/beauty marks ONLY if present; **do NOT invent random dark spots** on skin.
- Background must contain **NO faces**: no portraits, statues, crowds, tapestries with faces.
- Keep the scene **Old Masters / studio-staged**, not modern, not casual, not contemporary fashion.
- If an adult appears with a child: the child remains the **primary hero**; adult is **supporting subject** (restrained wardrobe, no competing sparkle).
- If multiple children/siblings: **distinct outfit per child** by default (no matching outfits unless explicitly requested).
- If siblings look similar: **NEVER average/blend faces**; keep each identity distinct and separable.
- If a pet appears: keep pet identity realistic (breed/coat), no extra animals, no pet blocking faces.
`;

  // Backdrops + props (clásicos y “colgables”)
  const backdrops = [
    "a dark painterly studio backdrop with subtle warm-to-cool gradient (simple, elegant, low-detail)",
    "a classical painted sky backdrop with warm golden clouds (soft, painterly, NOT photo-real sky)",
    "a subtle drapery backdrop with rich fabric folds (tasteful, no figurative patterns)",
    "a deep, warm interior atmosphere with minimal architectural suggestion (no clutter, no decor faces)"
  ];

  const stagingProps = [
    "one elegant carved wooden chair or chaise (single main prop, clean composition)",
    "a velvet drape and a small side table with minimal objects (no clutter)",
    "a simple cushion or brocade pillow suitable for a child (premium, clean)",
    "no props, only the painted backdrop (ultra clean museum look)"
  ];

  // Luz: estudio dominante (y Rembrandt opcional, suave)
  const lightingOptions = [
    "classic studio portrait lighting: soft key + gentle fill + subtle rim separation, natural skin, premium depth",
    "soft Rembrandt-inspired lighting: delicate triangular cheek light, controlled soft shadows (NOT harsh)",
    "soft north-window daylight look: gentle modeling, warm highlights, smooth tonal transitions",
    "academic portrait lighting: warm key + cool ambient fill, painterly but natural (no cinematic harshness)"
  ];

  // Poses seguras por “edad detectada” (delegado al modelo con reglas claras)
  const safeSoloPoses = [
    // Bebés / toddlers-friendly
    "baby/toddler-safe pose: seated supported on a premium cushion or small chair, face fully visible, hands relaxed on lap (no complex fingers)",
    "baby-safe: wrapped in a refined cloth/mantle, seated supported, face-forward 3/4, calm expression, no busy props",
    // Niños
    "child: seated 3/4 portrait on an elegant chair, relaxed posture, hands resting naturally (not stiff)",
    "child: half-body portrait, slight torso turn, one hand lightly touching a brooch/book edge, the other resting (simple hands)",
    // Teens
    "teen: seated half-body, composed posture, subtle confidence, hands minimal and natural (no adult sensuality)",
    "teen: standing 3/4 with gentle S-curve posture, shoulders relaxed, hands natural (no mannequin pose)"
  ];

  // Layouts por tamaño de grupo (para 2–6 sujetos)
  const groupLayouts = [
    "pyramidal family composition: one seated in front, others arranged behind and to the sides (balanced spacing), ALL faces visible",
    "bench/chaise grouping: children seated close with gentle spacing, one older sibling slightly behind (protective), ALL faces visible",
    "mixed height arrangement: smaller children in front, older children behind, faces unobstructed, consistent scale",
    "seated + standing mix: one seated, others standing beside/behind, clean separations, no face overlap"
  ];

  // Interacciones seguras (ternura controlada, no caos)
  const interactions2 = [
    "two siblings standing side-by-side, holding hands at waist level; relaxed posture; BOTH faces fully visible",
    "one sibling seated, the other standing close with a gentle hand on the shoulder; warm protective closeness; BOTH faces visible",
    "both seated close on a bench, hands lightly touching (not gripping), calm tenderness; BOTH faces visible"
  ];

  const interactions3 = [
    "one child seated center, two standing beside/behind with gentle hands on shoulders/armrest; warm family closeness; ALL faces visible",
    "three siblings seated close with gentle spacing; older sibling slightly behind; hands minimal; ALL faces visible",
    "two children share a small book (open), third leans in slightly; hands simple; ALL faces visible"
  ];

  const interactions4to6 = [
    "family pyramid: front seated child, others behind and to the sides; minimal touch (one hand on shoulder); ALL faces visible and equally readable",
    "bench grouping: two seated, others standing behind; gentle hands on shoulders/armrest; NO chains of hands; ALL faces visible",
    "arranged portrait staging: minimal touch, composed warmth; avoid strong hugging; ALL faces unobstructed"
  ];

  const petInteractions = [
    "child seated with a small dog/cat on lap; one hand softly resting on the pet’s back; no gripping; both faces visible",
    "child seated with pet at knee level on a cushion; one hand lightly touching the pet; pet does not block the face",
    "siblings with pet: pet placed at knee level or beside the chaise; ONE gentle hand resting on pet; pet never blocks any face"
  ];

  const adultWithChildInteractions = [
    "parent seated as supporting subject, holding baby high enough for the baby’s face to be fully visible; one hand supports baby’s back; calm tenderness",
    "mother/father seated, child standing close with hand on the adult’s arm; affectionate but composed; both faces visible",
    "parent slightly behind supporting, one gentle hand on child’s shoulder; child remains hero; both faces visible"
  ];

  // 3 estilos del modal: Renacimiento / Nobleza / Barroco
  // Nota: vestuario intencionalmente “clásico”, no moderno.
  const STYLE_PRESETS = {
    renacimiento: {
      role: "**Renacimiento — Bosque Encantado** (tierno, luminoso, clásico; realismo pictórico).",
      familyPalettes: [
        "sage green + warm cream + antique gold accents",
        "muted emerald + ivory + soft champagne highlights",
        "dusty rose + pearl white + soft old-gold accents"
      ],
      wardrobeChild: [
        "a refined renaissance-inspired child gown/tunic in premium linen/silk blend with subtle lace cuffs (child-appropriate, no costume)",
        "a soft velvet + satin child outfit with delicate embroidery (minimal, premium, clean neckline)",
        "a classic child dress/tunic with refined sleeves and small lace collar (tasteful, museum-worthy)"
      ],
      wardrobeTeen: [
        "a tailored renaissance-inspired outfit with clean silhouette, premium fabric, subtle embroidery (youthful, not adult)",
        "a refined velvet jacket-like doublet style (historical), minimal ornamentation, soft collar (no modern suit)",
        "a composed silk/velvet ensemble with restrained detailing and classic neckline"
      ],
      accessoriesChild: [
        "a small brooch or medallion (tiny) + subtle earrings if appropriate (minimal)",
        "a simple ribbon or small hairpiece + one delicate ring if age-appropriate (very subtle)",
        "a tiny pendant necklace (fine, short) or a single tasteful bracelet (minimal)"
      ],
      accessoriesTeen: [
        "a minimal pendant + subtle earrings (fine jewelry, not flashy)",
        "a small ring + delicate bracelet (quiet luxury)",
        "a restrained brooch/medallion (classic, minimal)"
      ],
      mood: `
**STYLE SIGNATURE (RENACIMIENTO):**
- Gentle, warm tenderness; painterly softness via glazing (NOT fantasy VFX).
- Clean, luminous staging; classic fabrics with refined detail.
`
    },

    nobleza: {
      role: "**Nobleza — Príncipe/Princesa** (orgullo, lujo controlado, colgable).",
      familyPalettes: [
        "royal blue + ivory + antique gold (controlled sparkle)",
        "burgundy velvet + warm cream + muted gold accents",
        "champagne silk + pearls + soft gold highlights"
      ],
      wardrobeChild: [
        "a child-appropriate regal outfit in velvet/brocade with refined trim (no cosplay, clean silhouette)",
        "a premium brocade child gown/tunic with small lace collar and subtle gold embroidery (controlled)",
        "a classic noble child garment with capelet detail (small), refined tailoring, no exaggeration"
      ],
      wardrobeTeen: [
        "a refined noble outfit with tailored structure, velvet/brocade texture, restrained ornamentation (youthful, not adult)",
        "a classic high-status ensemble with subtle embroidery and clean neckline, minimal theatricality",
        "a museum-worthy regal look with controlled detailing and premium fabric rendering"
      ],
      accessoriesChild: [
        "a tiny coronet/tiara OPTIONAL and small + subtle earrings (fine, controlled) OR a small jeweled hairpiece",
        "a small medallion + minimal bracelet (no heavy jewelry)",
        "a refined brooch + subtle earrings (minimal)"
      ],
      accessoriesTeen: [
        "a small jeweled hairpiece OR small coronet (optional) + subtle earrings",
        "a fine necklace + minimal bracelet (quiet luxury)",
        "a classic brooch + one ring (restrained)"
      ],
      mood: `
**STYLE SIGNATURE (NOBLEZA):**
- Pride + warmth; opulence through textiles, posture, and staging (not cosplay props).
- Sparkle feels expensive and controlled; nothing gaudy.
`
    },

    barroco: {
      role: "**Barroco — Estudio Clásico** (museo, profundidad, drama suave).",
      familyPalettes: [
        "deep wine + ivory lace + antique gold accents",
        "midnight blue + warm cream + muted gold highlights",
        "warm black + burgundy + soft old-gold accents"
      ],
      wardrobeChild: [
        "a baroque-inspired child outfit in velvet with small lace collar and refined cuffs (child-appropriate, not theatrical)",
        "a premium satin + velvet child garment with restrained embroidery and classic neckline",
        "a classic museum baroque child dress/tunic with lace detail (small), premium tailoring"
      ],
      wardrobeTeen: [
        "a composed baroque-inspired ensemble with tailored silhouette, velvet texture, restrained ornamentation (youthful)",
        "a refined dark velvet look with minimal lace detail and classic structure (no modern suit)",
        "a museum-grade baroque portrait outfit with controlled embroidery and premium fabric depth"
      ],
      accessoriesChild: [
        "a small brooch + tiny pendant (one main accent only)",
        "a simple ribbon + minimal bracelet (very subtle)",
        "a tiny medallion (short) + subtle earrings if appropriate"
      ],
      accessoriesTeen: [
        "a restrained pendant + subtle earrings",
        "a small ring + delicate bracelet",
        "a minimal brooch/medallion (classic, quiet)"
      ],
      mood: `
**STYLE SIGNATURE (BARROCO):**
- Depth, chiaroscuro control (soft, not harsh), museum-grade finish.
- Calm tenderness, composed staging, premium textures.
`
    }
  };

  // Mapeo: tu modal puede estar enviando otros nombres; soportamos aliases.
  const styleKey =
    style === "renacimiento" || style === "bosque" ? "renacimiento" :
    style === "nobleza" || style === "principe" || style === "princesa" ? "nobleza" :
    style === "barroco" ? "barroco" :
    "renacimiento";

  const preset = STYLE_PRESETS[styleKey];

  // Plan por sujeto (anti-clon): usamos wardrobeChild/wardrobeTeen + accessoriesChild/accessoriesTeen
  // Sin saber edad exacta, instruimos al modelo a asignar "child vs teen" visualmente.
  const paletteFamily = pick(preset.familyPalettes);

  const wardrobePlan = isMulti
    ? pickDistinct(preset.wardrobeChild, Math.min(effectiveCount(effectiveSubjects(numSubjects, isGroup)), 6)).map((w, i) => {
        // No asumimos género. No asumimos edad. Pedimos asignación por apariencia.
        return `- ${subjectLabel(i)}: choose age-appropriate version of: ${w} (if teen, use a more tailored variant from the teen wardrobe list)`;
      }).join("\n")
    : `- ${subjectLabel(0)}: choose age-appropriate version of: ${pick(preset.wardrobeChild)} (if teen, use tailored teen variant)`;

  const accessoriesPlan = isMulti
    ? pickDistinct(preset.accessoriesChild, Math.min(effectiveCount(effectiveSubjects(numSubjects, isGroup)), 6)).map((a, i) => {
        return `- ${subjectLabel(i)}: choose age-appropriate version of: ${a} (teens may use the teen accessory list variant, children keep it minimal)`;
      }).join("\n")
    : `- ${subjectLabel(0)}: choose age-appropriate version of: ${pick(preset.accessoriesChild)} (keep minimal for babies/toddlers)`;

  // Helpers inline (evita declarar fuera)
  function effectiveSubjects(n, g) {
    const multi = n > 1 || !!g;
    return multi ? Math.max(2, n) : 1;
  }
  function effectiveCount(n) { return n; }

  // Interacción por grupo (elige set según tamaño)
  const subjectCount = effectiveSubjects(numSubjects, isGroup);

  const interactionBlock = (() => {
    if (!isMulti) return "";
    if (subjectCount === 2) return `\n**GROUP INTERACTION:** ${pick(interactions2)}.`;
    if (subjectCount === 3) return `\n**GROUP INTERACTION:** ${pick(interactions3)}.`;
    return `\n**GROUP INTERACTION:** ${pick(interactions4to6)}.`;
  })();

  // Reglas “inteligentes” (el modelo decide si hay mascota/adulto y aplica la interacción correcta)
  const intelligenceBlock = `
**SMART CASTING & INTERACTION RULES:**
- Determine visually if the input includes: babies/toddlers/children/teens, adults, and/or pets.
- If a pet exists, prefer one of these interactions: ${pick(petInteractions)}.
- If an adult appears with a child/baby, prefer one of these interactions: ${pick(adultWithChildInteractions)}.
- If both pet AND adult exist, keep it simple: pet placed at knee/lap level and adult supporting; NEVER block child faces.
- Keep gestures minimal and safe: one clear touch/gesture per relationship; no complicated hand shapes.
`;

  // Construcción del styleDescription
  const styleDescription = `
**ROLE:** ${preset.role}
**BACKDROP:** ${pick(backdrops)}.
**STAGING/PROP:** ${pick(stagingProps)}.
**FAMILY PALETTE:** ${paletteFamily}.
**LIGHTING:** ${pick(lightingOptions)}.
${preset.mood}
${categoryGuardrails}

**WARDROBE PLAN (PER SUBJECT — MUST DIFFER):**
${wardrobePlan}
- Shared palette across the portrait, but **NO identical outfits** by default.
- For siblings: vary at least TWO elements per child (base color within palette + fabric + collar/sleeves + one small accessory).
- Babies/toddlers: keep outfits simple and safe (no heavy ornamentation, no complex hand props).

**ACCESSORIES PLAN (PER SUBJECT — MINIMAL & AGE-APPROPRIATE):**
${accessoriesPlan}
- Children: 0–1 small accessory (brooch/medallion/ribbon). Teens: subtle fine jewelry only.
- Adults (if present): elegant and restrained accessories (no competing sparkle).
- Pets: only a small collar/bow if it matches the palette (optional, minimal).

${intelligenceBlock}

**DEPTH & FINISH NOTES:**
- Museum-grade oil painting depth: glazing, refined tonal transitions, subtle canvas/linen texture.
- Soft vignette and atmospheric depth, avoid a flat "photo session" feel.
- Keep faces crisp and natural; background painterly and simpler.
`;

  // Composición (segura)
  let framing = "";

  const soloFramings = [
    `**SOLO COMPOSITION:** ${pick(safeSoloPoses)}. Eye-level. 50–85mm portrait feel. Face crisp, background softer.`,
    `**SOLO COMPOSITION:** half-body (waist up), calm posture, hands simple and natural; face crisp; background softer.`
  ];

  const multiFramings = [
    `**GROUP COMPOSITION:** ${pick(groupLayouts)}. Medium shot (waist up) or seated 3/4. Eye-level. ALL faces visible and readable.`,
    `**GROUP COMPOSITION:** arranged portrait staging (Old Masters). Keep proportions consistent. Ensure no face overlap or occlusion.`
  ];

  framing = (isMulti ? pick(multiFramings) : pick(soloFramings)) + interactionBlock;

  // Llamada al masterPrompt (Constitución)
  return masterPrompt(numSubjects, styleDescription, framing);
};
