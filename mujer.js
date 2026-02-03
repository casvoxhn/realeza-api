// ARCHIVO: mujer.js
// CATEGORÍA: Mujer - V3.0 (Surrealum Human WOW Factor)
// Objetivo: Piel hiperrealista + Escotes de época (Aire) + Telas pesadas + Iluminación Chiaroscuro.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  // Random helpers
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isMulti = numSubjects > 1 || !!isGroup;

  // 1) Guardrails: Feminidad, Realismo y "Aire"
  const categoryGuardrails = `
**CATEGORY GUARDRAILS (WOMAN / HIGH-END MASTERPIECE):**
- **SKIN REALISM:** Skin must look like living porcelain—translucent, with natural flushing/blush on cheeks, and distinct texture (not plastic AI smoothing).
- **ANATOMY:** Elegant, elongated necks and relaxed shoulders. No stiffness.
- **WARDROBE FIT:** Clothing must fit naturally, revealing the collarbones/neck (décolletage) to add elegance and "breath" to the image. Avoid high, stiff collars unless requested.
- **NO KITSCH:** No cheap costume jewelry, no plastic tiaras. Only heavy, museum-grade materials.
- **BACKGROUND:** Deep, dark, and blurry to make the subject pop.
`;

  // 2) Backdrops (Oscuros para contraste máximo)
  const backdrops = [
    "a pitch-dark Master's studio background with minimal warm atmospheric haze (Rembrandt style)",
    "a deep, dark baroque interior where the background fades into near-black shadow",
    "a rich, dark olive-brown museum backdrop, smooth and unfocused",
    "a moody classical setting with deep shadows, emphasizing the light on the skin"
  ];

  // 3) Props (Soportes para poses relajadas)
  const props = [
    "an elegant **velvet-upholstered chair** (dark wood) providing a resting place for an arm",
    "a heavy velvet drape pooling on a side table (minimal prop, adds texture)",
    "a classical balustrade obscured by shadow, just a hint of structure",
    "no props, just the figure emerging from the dark void (Chiaroscuro focus)"
  ];

  // 4) Iluminación (La clave del volumen)
  const lightingOptions = [
    "**DRAMATIC CHIAROSCURO:** Strong, directional light from the side-front. Illuminates the face and décolletage, leaving the rest in rich shadow.",
    "**PORTRAIT STUDIO GLOW:** Soft but directional light creating a 'pearl' sheen on the skin and sharp specular highlights in the eyes.",
    "**GOLDEN AGE DRAMA:** A focused beam of light hitting the face and shoulders, fading to black at the edges.",
    "**PAINTERLY VOLUME:** High-contrast lighting that emphasizes the folds of the dress and the curve of the neck."
  ];

  // 5) Poses (Femeninas, relajadas, con contacto táctil)
  const soloPoses = [
    // Mano al cuello/joya (Clásico Surrealum)
    "seated portrait, one hand gently touching a necklace or collarbone, head tilted slightly, expression soft and breathing",
    // Pose relajada en silla
    "seated comfortably in a velvet chair, body angled, face turned to light, hands resting naturally on the lap or chair arm (no tension)",
    // Mirada sobre el hombro
    "standing with back angled slightly, looking back over the shoulder, highlighting the neck and earring detail, elegant and timeless",
    // Pose frontal poderosa
    "facing forward, shoulders relaxed and bare (off-shoulder dress), gaze direct and confident, chest breathing naturally"
  ];

  // Interacción de grupo (Cercanía natural)
  const groupInteractions = [
    "subjects standing/sitting very close, one leaning head gently towards the other, warm sisterly bond",
    "one subject seated, the other standing behind with hands softly on the seated subject's shoulders (protective/close)",
    "arm-in-arm pose, comfortable intimacy, leaning in to share a secret, natural smiles or calm gazes",
    "if a pet is present: the woman holds the pet comfortably in her lap or by her side, the pet is calm, she looks at the viewer"
  ];

  // 6) Estilos (Vestuario con "Aire" y Textura Pesada)
  const STYLE_PRESETS = {
    musa: {
      role: "**La Musa Atemporal** (Magia, Renacimiento, Suavidad).",
      palette: [
        "Dusty Rose + Antique Gold + Creamy Skin tones",
        "Pearl White + Champagne + Soft Earth browns",
        "Muted Emerald + Bronze + Warm shadows"
      ],
      wardrobe: [
        // Escotes abiertos y telas suaves
        "a renaissance-inspired gown with a **square neckline** revealing the collarbones, made of heavy crushed velvet",
        "a soft silk dress draped loosely off the shoulders, creating a romantic and timeless silhouette",
        "a flowing chiffon gown with lace details, vintage and ethereal, not stiff"
      ],
      accessories: [
        "a delicate pearl necklace lying on the skin",
        "small drop earrings catching the light",
        "no heavy jewelry, just natural elegance"
      ],
      mood: `**STYLE SIGNATURE:** Ethereal softness. Skin glows like a pearl. Romantic atmosphere.`
    },

    realeza: {
      role: "**La Reina** (Poder Absoluto, Lujo Pesado).",
      palette: [
        "Deep Royal Blue + Diamonds + Pale Skin contrast",
        "Rich Burgundy Velvet + Gold embroidery + Dark Shadows",
        "Black Velvet + Pearls + Stark lighting"
      ],
      wardrobe: [
        // Lujo pesado pero femenino
        "a heavy velvet royal gown with a deep neckline framed by gold embroidery",
        "a structured brocade dress with an elegant corset bodice, pushing up slightly for a feminine silhouette",
        "a dark satin majestic gown with lace sleeves, looking expensive and commanding"
      ],
      accessories: [
        "a statement necklace with gemstones resting on the skin",
        "diamond drop earrings or a small tasteful tiara",
        "luxurious details that sparkle in the dark"
      ],
      mood: `**STYLE SIGNATURE:** Opulence. Heavy fabrics. The subject looks expensive and powerful.`
    },

    empoderada: {
      role: "**Mujer Empoderada** (Dama de Hierro, Carácter, Moderno-Clásico).",
      palette: [
        "Midnight Navy + Silver + Cool Skin tones",
        "Onyx Black + Gold accents + Deep contrasts",
        "Dark Plum + Bronze + Moody atmosphere"
      ],
      wardrobe: [
        // Estructura y elegancia
        "a couture dark velvet gown with a sharp, elegant silhouette and defined shoulders",
        "a structured corset-style top with a flowing skirt, combining power and femininity",
        "a deep v-neck silk dress in dark tones, exuding confidence and strength"
      ],
      accessories: [
        "a refined watch or single gold bracelet",
        "minimalist but expensive-looking pendant",
        "classic earrings, nothing distracting"
      ],
      mood: `**STYLE SIGNATURE:** Confidence. High contrast lighting. Sharp focus on the eyes.`
    }
  };

  const preset = STYLE_PRESETS[style] || STYLE_PRESETS.empoderada;

  // 7) La receta técnica para el "WOW" Humano
  const styleDescription = `
**ROLE:** ${preset.role}
**BACKDROP:** ${pick(backdrops)}.
**STAGING/PROP:** ${pick(props)}.
**PALETTE:** ${pick(preset.palette)}.
**WARDROBE:** ${pick(preset.wardrobe)}. **IMPORTANT: Fabric must look heavy, tactile, and expensive.**
**ACCESSORIES:** ${pick(preset.accessories)}.
**LIGHTING:** ${pick(lightingOptions)}.
${preset.mood}
${categoryGuardrails}

**ULTRA-REALISTIC "SURREALUM" FINISH (THE WOW FACTOR):**
- **Skin Texture:** Skin must look translucent and alive (subsurface scattering). Add a natural flush to cheeks.
- **Fabric Weight:** Velvet must look crushed and heavy. Silk must shimmer. Lace must have visible weave.
- **Photographic Depth:** The subject must pop out of the dark background. High contrast on the face.
- **Eyes:** Eyes must be sharp, glossy, and have a clear "catchlight" reflection.
`;

  // 8) Composición
  let framing = "";

  const soloFramings = [
    `**SOLO COMPOSITION:** ${pick(soloPoses)}. Eye-level. 50–85mm portrait feel. Focus on the eyes and skin texture.`,
    `**SOLO COMPOSITION:** Medium shot (waist up). The body is angled but the face turns to the viewer. Elegant and poised.`
  ];

  const groupFramings = [
    `**GROUP COMPOSITION:** ${pick(groupInteractions)}. Medium shot. Balanced spacing. ALL faces visible and equally sharp.`,
    `**GROUP COMPOSITION:** Two subjects sharing the frame naturally, physically close (leaning/touching) to show connection.`
  ];

  framing = (isMulti ? pick(groupFramings) : pick(soloFramings));

  return masterPrompt(numSubjects, styleDescription, framing);
};
