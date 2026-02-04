// ARCHIVO: mascotas.js
// CATEGORÍA: Mascotas (PET-FIRST) - V3.5 (Quality, Life & Light Halo)
// Objetivo: Recuperar volumen 3D, añadir "halo" de luz dramático, texturas táctiles y poses vivas.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  // Helpers
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const weightedPick = (items) => {
    const total = items.reduce((sum, it) => sum + (it.weight || 1), 0);
    let r = Math.random() * total;
    for (const it of items) {
      r -= (it.weight || 1);
      if (r <= 0) return it.value;
    }
    return items[items.length - 1].value;
  };

  const isMulti = numSubjects > 1 || !!isGroup;

  // 1) Guardrails: Identidad + MODESTIA + CALIDAD
  const petGuardrails = `
**CATEGORY GUARDRAILS (PETS / HIGH-END MASTERPIECE):**
- **PET-FIRST:** The animal is the absolute focus.
- **IDENTITY:** Preserve coat color, pattern, and ear shape exactly.
- **MODESTY:** Use shadow, tail, or fabric drape to naturally conceal intimate areas.
- **QUALITY OVER SATURATION:** Do not create a flat, oversaturated image. Prioritize texture, depth, and dramatic lighting over blinding color.
`;

  // 2) Props & Backdrops (Entornos Ricos)
  const getEnvironment = (styleKey) => {
      if (styleKey === 'realeza') {
          return {
              bg: pick([
                  "a blurred palace throne room with deep shadows and hints of gold architecture",
                  "a rich backdrop of heavy, draped velvet curtains in deep royal tones",
                  "a grand, dark interior suggesting a castle, with a focused light source"
              ]),
              prop: pick([
                  "a massive, ornate royal throne cushion with heavy gold bullion fringe",
                  "a regal pedestal piled high with expensive looking furs and silk fabrics"
              ])
          };
      }
      // Renacimiento/Barroco
      return {
          bg: pick([
              "a dark, painterly studio background with atmospheric depth and warm haze",
              "a deep olive and brown museum backdrop, highly textured but out of focus"
          ]),
          prop: pick([
              "a oversized antique velvet cushion that looks incredibly soft and heavy",
              "a grand, dark carved wooden pedestal draped in brocade fabric"
          ])
      };
  };

  // 3) Lógica de Cámara (Zoom Variado) - MANTENIDA DE V3.4
  const cameraLogic = weightedPick([
      { 
          value: "**MEDIUM SHOT (Majestic View):** Framing the pet from the chest/paws up, showing the full interaction with the luxurious cushion and attire.", 
          weight: 70 
      },
      { 
          value: "**CLOSE-UP PORTRAIT (Intense Detail):** A tight crop focusing on the head and chest. Extreme detail on eyes, nose leather, and individual hairs.", 
          weight: 30 
      }
  ]);

  // 4) Iluminación (EL NUEVO SECRETO: HALO + DRAMA)
  const lighting = [
    "**DRAMATIC RIM LIGHTING (THE HALO):** Strong backlight creating a brilliant golden halo outline around the pet's fur, separating it sharply from the dark background. Combined with soft frontal fill light.",
    "**CHIAROSCURO KICK:** High contrast side lighting that sculpts the face and body form. Deep shadows, but the lit areas are incredibly rich in texture and color.",
    "**GOLDEN HOUR BEAM:** A concentrated shaft of warm, golden light hitting the subject's face and chest, making the eyes sparkle and the fabric glow."
  ];

  // 5) Poses (Más Vivas e Interactuando con la Luz)
  const petPoses = [
    "lying in a noble 'sphinx' pose, body angled slightly to catch the side light, chest proud",
    "seated regally like a statue, head tilted upwards towards the main light source, creating a catchlight in the eyes",
    "lounging with elegant weight, sinking into the cushion, looking off-camera with intelligent, wet eyes",
    "standing (front paws on cushion edge) with dynamic tension, cape flowing back, looking ready to command"
  ];

  // 6) Estilos (Paletas Ricas, no planas)
  const STYLE_PRESETS = {
    renacimiento: {
      role: "**Bosque Encantado / Renacimiento** (Mágico, Textura Natural, Profundo).",
      palette: ["Deep Forest Green + Antique Gold", "Rich Terracotta + Creamy Pearl", "Dark Moss + Warm Earth Tones"],
      wardrobe: [
        "a soft velvet cape with botanical embroidery, draped loosely",
        "a renaissance silk mantle thrown back casually to show the fur texture",
        "a flowing cloak pinned with a nature brooch"
      ],
      mood: `**VIBE:** Ethereal but tactile. Like a master painting with visible brushwork tones.`
    },
    realeza: {
      role: "**Coronación Imperial / Realeza** (Poderoso, Lujoso, Dramático).",
      palette: ["Deep Royal Blue + Heavy Gold", "Rich Crimson Red + Black Velvet", "Imperial Purple + Diamond sparkles"],
      wardrobe: [
        "a majestic coronation mantle of heavy velvet and ermine fur, draped WIDE OPEN",
        "a king's robe cascading over the cushion, looking heavy and expensive",
        "a high-collar royal cape with intricate goldwork, unclasped"
      ],
      mood: `**VIBE:** Maximum luxury and weight. The gold must glint real, the velvet must look crushed and deep.`
    },
    barroco: {
      role: "**Estudio Barroco** (Intenso, Sombras Profundas, Teatral).",
      palette: ["Onyx Black + Bronze highlights", "Midnight Blue + Silver", "Deep Chocolate + Warm Candlelight"],
      wardrobe: [
        "a textured dark velvet cloak catching rim light on the folds",
        "a dramatic period cape draped artistically to reveal the chest",
        "a heavy brocade jacket worn open, emphasizing fabric weave"
      ],
      mood: `**VIBE:** Dramatic Rembrandt lighting. Extreme depth and shadow play.`
    }
  };

  const styleKey = STYLE_PRESETS[style] ? style : 'renacimiento';
  const preset = STYLE_PRESETS[styleKey];
  const env = getEnvironment(styleKey);

  // 9) La Receta Técnica (WOW Factor: LUZ + TEXTURA + VIDA)
  const styleDescription = `
**ROLE:** ${preset.role}
**COMPOSITION:** ${cameraLogic}
**BACKDROP:** ${env.bg}.
**STAGING:** ${env.prop}. **Physics:** The pet must visibly sink into the soft material.
**PALETTE:** ${pick(preset.palette)}. **Focus on deep, rich tones in the light, not flat saturation.**
**WARDROBE:** ${pick(preset.wardrobe)}. **Texture:** Fabric must look heavy and expensive.
**LIGHTING:** ${pick(lighting)}. **CRITICAL: Ensure a strong separation light (rim light) creates a glow around the subject.**
${preset.mood}
${petGuardrails}

**THE "WOW" FACTOR (LIFE & OPTICS):**
- **Subsurface Scattering:** The rim light must glow through the thinner parts of the ears and fine fur. This creates "life".
- **Wet Eyes:** The eyes must be glossy, deep, and have sharp specular reflections (catchlights).
- **Tactile Texture:** Every hair, fabric weave, and gold detail must look sharp and touchable against the softer background.
- **Depth:** High contrast between the lit subject and the deep background shadows. Avoid a flat look.
`;

  // 10) Framing Final
  const framing = (isMulti 
    ? `**GROUP SHOT:** A dynamic gathering of pets on the throne cushion. Varying noble poses, overlapping naturally, all lit by the dramatic light.` 
    : `**SOLO SHOT:** Hero pet posing: ${pick(petPoses)}.`) + 
    `\n**FINAL POLISH:** Photographic quality, shallow depth of field (creamy bokeh background), cinematic color grading.`;

  return masterPrompt(numSubjects, styleDescription, framing);
};
