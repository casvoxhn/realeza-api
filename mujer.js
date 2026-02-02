// ARCHIVO: mujer.js
// CATEGORÍA: Mujer
// Objetivo: 3 estilos MUY distinguibles + variación curada + cero kitsch.
// Cambios clave: más "Old Masters" staging (chair/drapery/backdrop), poses sentadas,
// interacción en grupos, y regla anti-outfits clonados.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isMulti = numSubjects > 1 || !!isGroup;

  // Guardrails globales (evitan “foto plana”, “AI look”, “cartoon” y manchas)
  const categoryGuardrails = `
**CATEGORY GUARDRAILS (WOMAN / COMMERCIAL / MASTERPIECE):**
- Keep it **tasteful, elegant, feminine, and premium** (no cheap costume vibe).
- **Naturalistic realism** under the paint (credible anatomy, believable skin).
- Avoid "dreamy/magic effects" that look illustrative. No fantasy VFX.
- Background must contain **NO faces**: no portraits, statues, crowds, tapestries with faces.
- Preserve real beauty marks ONLY if present; **do NOT invent random dark spots** on skin.
- If multiple people: **distinct wardrobe design per person** (no matching dresses by default).
`;

  // Staging / fondo inspirado en tus ejemplos (comprable, no “sesión plana”)
  const backdrops = [
    "a dark painterly backdrop with subtle warm-to-cool gradient (simple, elegant, low-detail)",
    "a classical painted sky backdrop with warm golden clouds (soft, painterly, NOT photo-real sky)",
    "a deep, moody interior atmosphere with soft shadows and minimal architectural suggestion (no clutter)",
    "a subtle drapery backdrop with rich fabric folds (no patterns with faces, no figurative art)"
  ];

  const props = [
    "one elegant carved wooden chair or chaise (single prop, clean composition)",
    "a simple velvet drape and a small side table (minimal, no clutter)",
    "a classical balustrade silhouette with soft depth (minimal, no crowd)",
    "no props, only the painted backdrop (ultra clean)"
  ];

  // Luz: opción estudio + opción Rembrandt (opción, no dominante)
  const lightingOptions = [
    "classic studio portrait lighting: soft key light + gentle fill + subtle rim separation, natural skin",
    "Rembrandt-inspired lighting: soft key with a delicate triangular cheek light, controlled shadows (not harsh)",
    "soft north-window daylight look: gentle modeling, warm highlights, smooth tonal transitions",
    "academic portrait lighting: warm key + cool ambient fill, painterly but natural"
  ];

  // Poses (evitar rigidez repetida) + sentadas incluidas
  const soloPoses = [
    "seated 3/4 portrait on an elegant chair, relaxed posture, hands softly resting (natural, not stiff)",
    "seated half-body, slight torso turn, one hand resting on lap, the other lightly touching a sleeve/jewel",
    "standing 3/4 portrait, gentle S-curve posture, shoulders relaxed, hands natural (no mannequin pose)",
    "half-body portrait, slight head turn, calm confident expression, hands subtly posed (natural)"
  ];

  // --- FIX QUIRÚRGICO AQUÍ: Poses de Grupo ---
  // Forzamos "ZOOM OUT" y "FIT EVERYONE" para evitar el recorte en 4:5
  const groupFramings = [
    `**GROUP COMPOSITION (CRITICAL):** Medium Shot (Waist Up) or slightly wider. **ZOOM OUT** enough to fit all subjects comfortably within the vertical frame. DO NOT CUT SHOULDERS.`,
    `**GROUP COMPOSITION (CRITICAL):** One subject seated, one standing/leaning. Composition must remain **wide enough** to show both faces clearly. No tight crops.`
  ];

  const groupInteractions = [
    "gentle hand on the shoulder (warm connection)",
    "standing close with slight lean-in (friendly intimacy)",
    "relaxed interaction, heads close but distinct",
    "bodies slightly turned towards each other"
  ];

  // --- 3 estilos, bien separados por (paleta + wardrobe + mood + staging) ---
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
- More painterly background, clean composition, premium fabric rendering.
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
- Opulence through textiles, posture, jewelry and staging (chair/drapery).
- Sparkle must feel expensive and controlled (no costume shine).
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
- Clean, premium, composed.
`
    }
  };

  const preset = STYLE_PRESETS[style] || STYLE_PRESETS.empoderada;

  // Construcción de estilo (más staging “comprable”)
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

**DEPTH & FINISH NOTES:**
- Add rich fabric micro-detail (velvet pile, satin sheen, lace texture), but keep it tasteful.
- Subtle vignette and atmospheric depth (painterly), avoid flat "photo session" look.
`;

  // Composición: NO full-body por defecto (riesgo manos/proporción + baja conversión).
  // Pero sí permitimos sentado 3/4 y half-body con manos naturales.
  let framing = "";

  const soloFramings = [
    `**SOLO COMPOSITION:** ${pick(soloPoses)}. Eye-level. 50–85mm portrait feel. Face crisp, background softer.`,
    `**SOLO COMPOSITION:** half-body (waist up), slight torso turn, natural hands visible (no stiffness), face crisp.`
  ];

  const groupFramings = [
    `**GROUP COMPOSITION:** medium shot (waist up) or seated 3/4 to fit everyone. Eye-level. Balanced spacing. ALL faces visible.`,
    `**GROUP COMPOSITION:** one seated / one standing if it helps composition. Keep proportions consistent. ALL faces equally recognizable.`
  ];

  const interaction = isMulti ? `\n**GROUP INTERACTION:** ${pick(groupInteractions)}.` : "";

  framing = (isMulti ? pick(groupFramings) : pick(soloFramings)) + interaction;

  // Llamada al masterPrompt (Constitución)
  return masterPrompt(numSubjects, styleDescription, framing);
};
