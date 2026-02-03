// ARCHIVO: ninos.js
// CATEGORÍA: Niños (Bebés, Niños, Teens) - V3.0 (Surrealum WOW Factor)
// Objetivo: Piel de "Ángel" (Translucidez) + Ojos Vivos + Textiles Pesados + Luz Dramática pero Tierna.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isMulti = numSubjects > 1 || !!isGroup;

  // 1) Guardrails: Ternura, Identidad y "Cero Muñecos"
  const categoryGuardrails = `
**CATEGORY GUARDRAILS (CHILDREN / HIGH-END MASTERPIECE):**
- **PARENTS' EMOTION:** The goal is a "priceless heirloom." The child must look noble, cherished, and real.
- **SKIN TEXTURE:** Skin must look like **living porcelain** (translucent, rosy cheeks, "peach fuzz" texture). NEVER plastic or waxy like a doll.
- **IDENTITY:** Preserve the "baby fat," cheek roundness, and specific eye shape exactly. Do not "adultify" features.
- **WARDROBE:** Clothing must be **child-appropriate historical luxury**. High collars with lace, velvet tunics, silk dresses. NO adult necklines, NO makeup.
- **BACKGROUND:** Deep, rich, and darker than the subject to create a "pop-out" effect.
- **ADULTS (If present):** Adults are "Supporting Guardians" (darker clothes, background position). The child is the HERO.
`;

  // 2) Backdrops (Oscuros y Ricos)
  const backdrops = [
    "a pitch-dark Master's studio background with soft warm atmospheric haze (Rembrandt style)",
    "a deep, dark baroque interior where the background fades into near-black shadow",
    "a rich, dark olive-brown museum backdrop, smooth and unfocused",
    "a moody classical setting with deep shadows, creating a cocoon of light around the child"
  ];

  // 3) Props (Escala y Soporte)
  const props = [
    "an elegant **velvet-upholstered antique chair** (child-sized or large to make them look small/cute)",
    "a massive, plush velvet cushion with gold tassels (throne-like support for babies)",
    "a vintage wooden rocking horse or antique toy (subtle, in shadow, adds narrative)",
    "no props, just the child emerging from the dark void (Angelic focus)"
  ];

  // 4) Iluminación (La clave: "Angelic Chiaroscuro")
  const lightingOptions = [
    "**ANGELIC CHIAROSCURO:** Strong but soft directional light. Illuminates the face and hair like a halo, leaving the rest in rich shadow.",
    "**PEARLESCENT STUDIO LIGHT:** Soft, wrapping light that creates a 'pearl' sheen on the skin and sharp specular highlights in the eyes.",
    "**GOLDEN AGE WARMTH:** A focused beam of warm light hitting the face, fading to black at the edges (cozy and nostalgic).",
    "**PAINTERLY VOLUME:** High-contrast lighting that emphasizes the folds of the velvet and the roundness of the cheeks."
  ];

  // 5) Poses (Naturales, "Little Prince/Princess")
  const soloPoses = [
    // Bebé/Niño pequeño
    "seated securely on a large velvet cushion, hands resting on knees, looking forward with wide, curious eyes (The Little Prince vibe)",
    // Niño Clásico
    "seated 3/4 on an antique chair, back straight but relaxed, holding a small vintage book or flower loosely, noble expression",
    // De pie (Teen/Niño mayor)
    "standing with gentle posture, one hand resting on a chair back, head tilted slightly, confident but innocent",
    // Close-up emotivo
    "medium shot, slight angle, focus intensely on the eyes and the texture of the hair/skin, lips relaxed/natural"
  ];

  // Interacción de Grupo (Jerarquía y Amor)
  const siblingInteractions = [
    "older sibling seated, holding the younger sibling protectively on their lap or close side-by-side (Warm Protector)",
    "siblings standing/sitting close, heads leaning gently towards each other, hand-in-hand or hand-on-shoulder (Deep Bond)",
    "pyramid composition: tallest child behind/center, younger ones in front, all faces clearly lit and visible"
  ];

  const adultInteractions = [
    "parent standing slightly behind or seated in shadow, looking at the child with love, or looking forward protectively (Guardian)",
    "parent holding the child/baby securely, cheek-to-cheek or nose-to-temple (Tenderness), child's face is the focal point"
  ];

  const petInteractions = [
    "child seated on the floor/cushion, arm draped naturally around the pet's neck (Best Friends)",
    "child standing, pet sitting obediently at their side, child's hand resting on the pet's head/back"
  ];

  // 6) Estilos (Telas Pesadas + Inocencia)
  const STYLE_PRESETS = {
    renacimiento: {
      role: "**Bosque Encantado / Renacimiento** (Luz suave, Mágico, Etéreo).",
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
      accessories: ["a simple silk ribbon", "a tiny vintage brooch", "no heavy jewelry, keeping it innocent"],
      mood: `**STYLE SIGNATURE:** Ethereal softness. Skin glows like a pearl. Dreamy but realistic.`
    },

    nobleza: {
      role: "**Pequeña Nobleza / Príncipe** (Orgullo, Lujo, Historia).",
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
      accessories: ["a small, tasteful pendant", "refined button details", "optional: a very subtle/small circlet (only if requested)"],
      mood: `**STYLE SIGNATURE:** Opulence. Heavy fabrics. The child looks important and cherished.`
    },

    barroco: {
      role: "**Estudio Barroco** (Profundidad, Drama, Pintura al Óleo).",
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

  // 7) La Receta "WOW" (Textura y Vida)
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
- **Skin Texture:** Skin must look translucent and alive (subsurface scattering). **Rosy cheeks** and natural "peach fuzz" on faces.
- **Fabric Weight:** Velvet must look crushed and heavy. Silk must shimmer. Lace must have visible intricate weave.
- **Photographic Depth:** The child must pop out of the dark background. High contrast on the face vs. background.
- **Eyes:** Eyes must be **large, glossy, and deep**, with a clear "catchlight" reflection (Vital for emotional connection).
`;

  // 8) Composición Inteligente
  const interaction = (() => {
    if (!isMulti) return `\n**NOTE:** The child looks calm, noble, and cherubic.`;
    return `
**GROUP INTERACTION (WARMTH & CONNECTION):**
- If an adult is present: ${pick(adultInteractions)}.
- Else if a pet is present: ${pick(petInteractions)}.
- Else (Siblings): ${pick(siblingInteractions)}.
`;
  })();

  const framing = (isMulti 
    ? `**GROUP COMPOSITION:** Medium shot or seated 3/4. Eye-level. ALL faces visible and equally sharp. Zoom out to fit.` 
    : `**SOLO COMPOSITION:** ${pick(soloPoses)}. Eye-level. 50–85mm portrait feel. Focus on the eyes and skin texture.`) 
    + interaction;

  return masterPrompt(numSubjects, styleDescription, framing);
};
