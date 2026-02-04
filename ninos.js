// ARCHIVO: ninos.js
// CATEGORÍA: Niños - V3.7 (Estructura Robusta + Estética Surrealum WOW, MÁS BONITO + LUMINOSO + NATURAL)
// Objetivo: MISMA lógica/identidad del V3.5, pero con fondo luminoso y luz suave NO exagerada (sin glow/halo).

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isMulti = numSubjects > 1 || !!isGroup;

  // 1) Guardrails: Seguridad + Estética WOW (solo ajusté BACKGROUND a luminoso y child-friendly)
  const categoryGuardrails = `
**CATEGORY GUARDRAILS (CHILDREN / HIGH-END MASTERPIECE):**
- **EMOTIONAL GOAL:** "Priceless Heirloom." The child looks noble, cherished, and timeless.
- **SKIN REALISM:** Skin must look like **living porcelain** (translucent, rosy cheeks, natural "peach fuzz" texture). NEVER plastic or waxy.
- **EYES:** Eyes must be **large, glossy, and deep**, with clear catchlights.
- **AGE APPROPRIATE:** - Babies: Soft, round, "baby fat" preserved.
  - Teens: Noble, confident, NO adult makeup/sensuality.
- **WARDROBE:** Clothing must be **historical luxury**. Heavy velvets, lace collars, silk. NO modern fits.
- **BACKGROUND:** Bright, warm, museum-grade and child-friendly. Soft depth, gentle falloff. NEVER scary, NEVER near-black void.
`;

  // 2) Backdrops (luminosos premium; misma idea de museo pero sin oscuridad)
  const backdrops = [
    "a luminous warm-ivory museum backdrop with soft painterly gradient (airy depth, not dark)",
    "a refined warm neutral studio background with creamy bokeh and gentle haze (premium, uplifting)",
    "a soft sage/ivory classical backdrop with subtle atmospheric depth, bright and elegant",
    "a warm sunlit atelier ambiance with light-toned background and gentle tonal falloff (no black edges)"
  ];

  // 3) Props (IGUAL que tu V3.5)
  const props = [
    "an elegant **velvet-upholstered antique chair** (child-sized or large to make them look small/cute)",
    "a massive, plush velvet cushion with gold tassels (throne-like support for babies)",
    "a vintage wooden rocking horse or antique toy (subtle, in shadow, adds narrative)",
    "no props, just the child as the hero with a clean luminous backdrop (Angelic focus)"
  ];

  // 4) Iluminación (misma intención wow, pero más natural y no exagerada)
  const lightingOptions = [
    "**SOFT WINDOW DAYLIGHT:** Diffused natural window light, flattering and even. Clean skin tones, gentle shadows only.",
    "**BRIGHT SOFT STUDIO LIGHT:** Large soft light source, smooth wrap, natural highlights (no glow).",
    "**WARM DAYLIGHT (SUBTLE):** Warm flattering light on the face with soft falloff into a warm cream background (no black edges).",
    "**GENTLE PAINTERLY VOLUME:** Mild contrast for depth and fabric texture while keeping the overall scene bright and child-friendly."
  ];

  // 5) Poses (IGUAL que tu V3.5)
  const soloPoses = [
    // BEBÉ (Safe)
    "baby/toddler: seated securely on a massive velvet cushion, hands resting on knees, looking forward with wide, curious eyes (Cherubic)",
    "baby: wrapped in a refined heavy mantle, seated supported, calm tenderness, face fully visible with rosy cheeks",
    // NIÑO (Classic)
    "child: seated 3/4 on an antique chair, back straight, holding a small vintage book or flower loosely, noble expression",
    "child: half-body portrait, slight torso turn, one hand lightly touching a lace collar or fabric fold (Texture focus)",
    // TEEN (Noble)
    "teen: standing with gentle posture, one hand resting on a chair back, head tilted slightly, confident but innocent",
    "teen: seated half-body, composed posture, subtle confidence, hands minimal and natural (Elegant)"
  ];

  // 6) Estilos (IGUAL que tu V3.5)
  const STYLE_PRESETS = {
    renacimiento: {
      role: "**Bosque Encantado / Renacimiento** (Luz suave, Mágico).",
      palettes: [
        "Sage Green + Warm Cream + Antique Gold accents",
        "Muted Emerald + Ivory + Soft Champagne highlights",
        "Dusty Rose + Pearl White + Soft Brown details"
      ],
      wardrobe: [
        "a refined renaissance tunic/gown made of **soft heavy velvet** with delicate lace cuffs and collar",
        "a silk garment with subtle embroidery, looking handmade and expensive, fitting perfectly",
        "a classic child's layered outfit with a soft textured vest and linen shirt (museum quality)"
      ],
      accessories: ["a simple silk ribbon", "a tiny vintage brooch", "no heavy jewelry"],
      mood: `**STYLE SIGNATURE:** Ethereal softness. Skin glows like a pearl. Dreamy but realistic.`
    },

    nobleza: {
      role: "**Pequeña Nobleza / Príncipe** (Orgullo, Lujo).",
      palettes: [
        "Royal Blue Velvet + Ivory + Gold Bullion",
        "Deep Burgundy + Warm Cream + Muted Gold",
        "Champagne Silk + Pearls + Rich Browns"
      ],
      wardrobe: [
        "a **heavy velvet royal doublet or gown** with gold embroidery and a high lace collar (The Little King/Queen)",
        "a structured brocade outfit with distinct weave texture, looking stiff and expensive but comfortable",
        "a miniature version of royal court attire, tailored perfectly to the child's proportions"
      ],
      accessories: ["a small, tasteful pendant", "refined buttons", "optional: a very subtle/small circlet (only if requested)"],
      mood: `**STYLE SIGNATURE:** Opulence. Heavy fabrics. The child looks important and cherished.`
    },

    barroco: {
      role: "**Estudio Barroco** (Profundidad, Drama).",
      palettes: [
        "Deep Wine Red + Old Gold + Dark Shadows",
        "Midnight Blue + Silver + Warm Skin",
        "Onyx Black + Lace White + Bronze"
      ],
      wardrobe: [
        "a dark velvet outfit that merges slightly with the shadows, highlighting the face and lace collar",
        "a heavy satin dress/suit with deep folds reflecting the candlelight",
        "a classic Van Dyck style outfit with rich textures and contrasting white collar"
      ],
      accessories: ["a single pearl earring (if appropriate)", "a gold chain", "minimal distractions"],
      mood: `**STYLE SIGNATURE:** Rembrandt lighting. Deepest shadows. Most realistic texture.`
    }
  };

  const styleKey =
    style === "renacimiento" || style === "bosque" ? "renacimiento" :
    style === "nobleza" || style === "principe" || style === "princesa" ? "nobleza" :
    style === "barroco" ? "barroco" :
    "renacimiento";

  const preset = STYLE_PRESETS[styleKey];

  // 7) Receta WOW (misma estructura; solo los arrays de backdrop/lighting cambiaron)
  const styleDescription = `
**ROLE:** ${preset.role}
**BACKDROP:** ${pick(backdrops)}.
**STAGING/PROP:** ${pick(props)}.
**PALETTE:** ${pick(preset.palettes)}.
**WARDROBE:** ${pick(preset.wardrobe)}. **IMPORTANT: Fabric must look heavy, tactile, and expensive.**
**ACCESSORIES:** ${pick(preset.accessories)}.
**LIGHTING:** ${pick(lightingOptions)}.
${preset.mood}
${categoryGuardrails}

**ULTRA-REALISTIC "SURREALUM" FINISH (THE WOW FACTOR):**
- **Skin Texture:** Skin must look translucent and alive (subsurface scattering). **Rosy cheeks** and natural "peach fuzz".
- **Fabric Weight:** Velvet must look crushed and heavy. Silk must shimmer. Lace must have visible intricate weave.
- **Photographic Depth:** The child must pop out with clear separation, while keeping the scene **bright and warm** (no black void).
- **Eyes:** Eyes must be **large, glossy, and deep**, with a clear "catchlight" reflection.
`;

  // 8) Composición & Interacción (IGUAL que tu V3.5)
  const groupLayouts = [
    "pyramidal portrait arrangement: one seated front, others behind/to the sides; balanced spacing; ALL faces visible",
    "bench/chaise grouping: children seated close with gentle spacing; older sibling slightly behind (protective)",
    "mixed height arrangement: smaller children in front, older behind; faces unobstructed; minimal touch only"
  ];

  const siblingInteractions = [
    "older sibling standing slightly behind with ONE gentle hand on younger sibling’s shoulder (Protector)",
    "two siblings seated close with hands lightly touching or arm-in-arm (Deep Bond)",
    "group: ONE gentle hand on shoulder + everyone else hands resting on lap/armrest; composed warmth"
  ];

  const petInteractions = [
    "child seated with pet at lap/knee level; ONE hand softly resting on pet’s back (Best Friends)",
    "siblings with pet: pet placed beside chaise/knee level; ONE gentle hand resting on pet; all faces unobstructed"
  ];

  const adultChildInteractions = [
    "parent seated supporting; baby held high enough so baby’s face is fully visible; ONE hand supports baby’s back",
    "parent standing slightly behind (Guardian); ONE gentle hand on child’s shoulder; child remains the HERO/Focus"
  ];

  const framing = (() => {
    let baseFrame = "";
    let interactionText = "";

    if (isMulti) {
      baseFrame = `**GROUP COMPOSITION:** ${pick(groupLayouts)}. Medium shot. Eye-level. ALL faces visible. Zoom out slightly to fit.`;

      interactionText = `\n**GROUP INTERACTION:** `;
      interactionText += `If Adult present: ${pick(adultChildInteractions)}. `;
      interactionText += `Else If Pet present: ${pick(petInteractions)}. `;
      interactionText += `Else: ${pick(siblingInteractions)}.`;
    } else {
      baseFrame = `**SOLO COMPOSITION:** ${pick(soloPoses)}. Eye-level. 50–85mm portrait feel. Focus on eyes/skin texture.`;
      interactionText = `\n**NOTE:** The child looks calm, noble, and cherubic.`;
    }

    return baseFrame + interactionText;
  })();

  return masterPrompt(numSubjects, styleDescription, framing);
};
