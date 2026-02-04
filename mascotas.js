// ARCHIVO: mascotas.js
// CATEGORÍA: Mascotas (PET-FIRST) - V3.4 (Vibrancy Boost + Zoom Logic)
// Objetivo: Colores vivos en la ropa, composiciones más ricas y variedad de planos.

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

  // 1) Guardrails: Identidad + MODESTIA
  const petGuardrails = `
**CATEGORY GUARDRAILS (PETS / VIBRANT MASTERPIECE):**
- **PET-FIRST:** The animal is the absolute monarch of the image.
- **IDENTITY:** Preserve coat color/pattern and ear shape exactly.
- **AESTHETIC MODESTY:** Use shadow, tail, crossed paws, or fabric drapery to conceal intimate areas naturally.
- **VIBRANCY:** Do not make the image desaturated. The fabrics must look rich and colorful.
`;

  // 2) Props & Backdrops (Específicos por Estilo para mejorar composición)
  const getEnvironment = (styleKey) => {
      if (styleKey === 'realeza') {
          // REALEZA: Más arquitectónico y lujoso
          return {
              bg: pick([
                  "a blurred background suggestive of a palace throne room with majestic columns",
                  "a rich backdrop of heavy red and gold curtains creating a royal stage",
                  "a grand interior with golden architectural details fading into shadow"
              ]),
              prop: pick([
                  "a massive, high-backed velvet throne cushion with gold tasseled trim",
                  "a regal podium covered in layers of expensive ermine and silk",
                  "a luxurious royal seat with intricate gold carvings visible at the edges"
              ])
          };
      }
      // Otros estilos (Renacimiento/Barroco)
      return {
          bg: pick([
              "a textured, painterly dark studio background with atmospheric depth",
              "a soft, dreamy forest-edge vibe (blurred) mixed with studio darkness",
              "a classic museum backdrop, dark olive/brown tones"
          ]),
          prop: pick([
              "a plush, oversized velvet pillow that the pet sinks into",
              "a soft antique cushion with subtle floral embroidery",
              "a grand pedestal draped in flowing, heavy fabric"
          ])
      };
  };

  // 3) Lógica de Cámara (Zoom Variado)
  const cameraLogic = weightedPick([
      { 
          value: "**MEDIUM SHOT (The Majestic):** Framing the pet from the chest/paws up, showing the interaction with the luxurious cushion and the drape of the cape.", 
          weight: 70 
      },
      { 
          value: "**CLOSE-UP PORTRAIT (The Soul):** A tighter crop focusing on the head and shoulders. Intense detail on the eyes, nose texture, and the intricate collar/jewelry. Background is creamy bokeh.", 
          weight: 30 
      }
  ]);

  // 4) Iluminación (Resaltar colores)
  const lighting = [
    "**JEWEL LIGHTING:** Directional, high-quality light that makes the colors of the wardrobe pop and creates sparkles in the eyes.",
    "**REMBRANDT WITH KICK:** Classic side lighting, but with a rim light (backlight) to separate the fur from the background.",
    "**SOFT GLOW:** A warm, golden light bathing the subject, enhancing the richness of the velvet and gold."
  ];

  // 5) Poses (Nobleza)
  const petPoses = [
    "lying in a 'sphinx' pose, chest puffed out proudly between the open cape",
    "seated upright with regal posture, looking slightly off-camera with dignity",
    "lounging elegantly, body sinking into the cushion, head turned towards the light",
    "lying down but with head held high, portraying confidence and ownership of the throne"
  ];

  // 6) Estilos (¡AHORA CON MÁS COLOR Y VIDA!)
  const STYLE_PRESETS = {
    renacimiento: {
      role: "**Bosque Encantado / Renacimiento** (Mágico, Suave, Natural).",
      palette: [
        "**Vibrant Emerald Green** + Gold Leaf + Cream",
        "**Rich Terracotta** + Pearl White + Soft Blue",
        "**Deep Moss** + Antique Gold + Warm Earth Tones"
      ],
      wardrobe: [
        "a soft velvet cape in nature tones, draped loosely to reveal the chest",
        "a renaissance mantle with botanical gold embroidery, thrown back casually",
        "a flowing silk cloak pinned at the shoulders, open front"
      ],
      accessories: ["a string of lustrous pearls", "a gold leaf brooch", "no heavy collar, keep it organic"],
      mood: `**VIBE:** Ethereal, dreamy, soft focus but sharp details on the pet.`
    },

    realeza: {
      role: "**Coronación Imperial / Realeza** (VIBRANTE, LUJOSO, PODEROSO).",
      palette: [
        "**Electric Royal Blue** + Shimmering Gold + White Ermine (spotted fur)",
        "**Deep Crimson Red** + Heavy Gold Bullion + Black Velvet accents",
        "**Imperial Purple** + Sparkling Diamonds + Gold Thread"
      ],
      wardrobe: [
        "a majestic coronation mantle made of **heavy, vibrant velvet**, draped WIDE OPEN to show the proud chest",
        "a king's robe with thick white fur trim (ermine), cascading over the cushion",
        "a high-collar royal cape, heavily embroidered with gold symbols, unclasped to show the fur"
      ],
      accessories: ["a miniature gold crown (optional)", "a massive gold chain of office with gemstones", "a jeweled medal pinned to the chest"],
      mood: `**VIBE:** Maximum luxury. The fabric must look expensive and highly saturated. The gold must shine.`
    },

    barroco: {
      role: "**Estudio Barroco** (Dramático, Intenso, Textura).",
      palette: [
        "**Jet Black** + Burnished Bronze + Deep Ruby",
        "**Midnight Blue** + Silver + Candlelight Orange",
        "**Dark Chocolate** + Gold + Warm Highlights"
      ],
      wardrobe: [
        "a textured black velvet cloak falling off the shoulders, catching the light",
        "a dramatic period cape with rich gold lining, draped artistically",
        "a heavy brocade jacket worn open, emphasizing the texture of the fabric vs the fur"
      ],
      accessories: ["an antique gold chain", "a dark cameo brooch", "minimalistic but expensive"],
      mood: `**VIBE:** Chiaroscuro. High contrast between light and dark. Very painterly.`
    }
  };

  // Fallback
  const styleKey = STYLE_PRESETS[style] ? style : 'renacimiento';
  const preset = STYLE_PRESETS[styleKey];
  const env = getEnvironment(styleKey);

  // 9) La Receta Técnica
  const styleDescription = `
**ROLE:** ${preset.role}
**COMPOSITION:** ${cameraLogic}
**BACKDROP:** ${env.bg}.
**PROPS:** ${env.prop}. **Physics Note:** The pet must visually **sink** into the soft surface due to weight.
**COLOR PALETTE:** ${pick(preset.palette)}. **Make the colors rich, deep, and vibrant.**
**WARDROBE:** ${pick(preset.wardrobe)}. **Texture:** Visible weave, embroidery, and weight in the fabric.
**ACCESSORIES:** ${pick(preset.accessories)}.
**LIGHTING:** ${pick(lighting)}.
${preset.mood}
${petGuardrails}

**VISUAL QUALITIES (THE WOW FACTOR):**
- **Vibrant Materials:** The velvet should look crushed and lush. The gold should gleam. Avoid dull colors.
- **Tactile Fur:** Use light to reveal individual hairs on the ears and chest (subsurface scattering).
- **Alive Eyes:** The eyes must be glossy, wet, and have a sharp reflection (catchlight).
`;

  // 10) Framing Final
  const framing = (isMulti 
    ? `**GROUP SHOT:** Multiple pets arranged naturally on the large cushion. Varying poses but all regal.` 
    : `**SOLO SHOT:** Hero pet posing: ${pick(petPoses)}.`) + 
    `\n**FINAL POLISH:** Cinematic color grading, sharp focus on the face, creamy background blur.`;

  return masterPrompt(numSubjects, styleDescription, framing);
};
