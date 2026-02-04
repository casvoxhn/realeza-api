// ARCHIVO: mascotas.js
// CATEGORÍA: Mascotas (PET-FIRST) - V3.6 (The "Divine Glow" Update)
// Objetivo: Iluminación atmosférica suave, sombras ricas, efecto "museo" y vida en los ojos.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  // Random helpers
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

  // 1) Guardrails: Identidad + MODESTIA + CALIDAD DE LUZ
  const petGuardrails = `
**CATEGORY GUARDRAILS (PETS / DIVINE MASTERPIECE):**
- **PET-FIRST:** The animal is the absolute focus.
- **IDENTITY:** Preserve coat color, pattern, and ear shape exactly.
- **MODESTY:** Use natural posing (shadows, tail, crossed paws) to conceal intimate areas gracefully.
- **NO HARSH OUTLINES:** Avoid artificial "cut-out" looks or harsh backlights. The pet must blend naturally into the atmosphere.
`;

  // 2) Props & Backdrops (Entornos con Profundidad)
  const getEnvironment = (styleKey) => {
      if (styleKey === 'realeza') {
          return {
              bg: pick([
                  "a grand palace interior fading into soft, warm darkness, hints of gold columns in the blur",
                  "a luxurious room with heavy red velvet curtains catching a soft ambient glow",
                  "a majestic throne room background, out of focus but rich in depth and detail"
              ]),
              prop: pick([
                  "a massive, golden-tasseled throne cushion that looks incredibly soft and heavy",
                  "a royal podium covered in layers of shimmering silk and ermine fur"
              ])
          };
      }
      // Renacimiento/Barroco
      return {
          bg: pick([
              "a warm, dark painterly studio background with soft atmospheric haze",
              "a classic museum backdrop with deep olive and chocolate tones, very soft focus"
          ]),
          prop: pick([
              "a plush, oversized antique velvet pillow with deep button tufting",
              "a grand wooden pedestal draped in heavy, flowing brocade fabric"
          ])
      };
  };

  // 3) Lógica de Cámara (30% Close-up para detalles "WOW")
  const cameraLogic = weightedPick([
      { 
          value: "**MEDIUM SHOT (The Majestic):** Framing the pet from the chest/paws up to show the grandeur of the pose and outfit.", 
          weight: 70 
      },
      { 
          value: "**CLOSE-UP PORTRAIT (The Soul):** A tighter crop focusing on the face and eyes. Intense detail on the iris and nose texture. Creamy bokeh background.", 
          weight: 30 
      }
  ]);

  // 4) Iluminación (EL NUEVO RESPLANDOR "DIVINO")
  const lighting = [
    "**VOLUMETRIC GOLDEN RADIANCE:** A soft, large light source creates a gentle, warm glow that wraps around the subject. The light feels like it has weight and warmth (atmosphere).",
    "**PAINTERLY CHIAROSCURO:** A directed soft light that illuminates the face and chest beautifully, while the rest of the body fades into **rich, warm shadows** (not pitch black).",
    "**SOFT STUDIO GLOW:** High-end beauty lighting. No harsh edges. The light creates a soft sheen on the fur and velvet, emphasizing texture without high contrast."
  ];

  // 5) Poses (Conectando con la cámara)
  const petPoses = [
    "lying in a noble 'sphinx' pose, chest puffed out, bathed in the soft light",
    "seated regally, head tilted slightly towards the light source to catch a sparkle in the eyes",
    "lounging with heavy elegance, sinking comfortably into the cushion, looking confident",
    "posing with a 3/4 turn of the head, showing a dignified profile illuminated by the glow"
  ];

  // 6) Estilos (Colores Ricos y Materiales)
  const STYLE_PRESETS = {
    renacimiento: {
      role: "**Bosque Encantado / Renacimiento** (Suave, Mágico, Natural).",
      palette: ["Emerald Green + Soft Gold", "Terracotta + Creamy Pearl", "Deep Moss + Warm Earth"],
      wardrobe: [
        "a soft velvet cape in nature tones, draped loosely",
        "a renaissance silk mantle thrown back casually",
        "a flowing cloak pinned with a nature brooch"
      ],
      mood: `**VIBE:** Ethereal softness. The light feels magical, like a forest clearing or a Raphael painting.`
    },
    realeza: {
      role: "**Coronación Imperial / Realeza** (Lujoso, Vibrante, Rico).",
      palette: ["**Royal Blue** + Shimmering Gold", "**Crimson Red** + Deep Velvet", "**Imperial Purple** + Gold Thread"],
      wardrobe: [
        "a majestic coronation mantle of heavy velvet, draped open to show the chest",
        "a king's robe cascading over the cushion, rich in color and texture",
        "a high-collar royal cape with intricate gold embroidery"
      ],
      mood: `**VIBE:** Expensive. The colors must be saturated and deep. The gold must glow warmly.`
    },
    barroco: {
      role: "**Estudio Barroco** (Clásico, Sombras Ricas, Textura).",
      palette: ["Onyx Black + Warm Bronze", "Midnight Blue + Silver", "Dark Chocolate + Candlelight"],
      wardrobe: [
        "a textured dark velvet cloak catching the soft light",
        "a dramatic period cape draped artistically",
        "a heavy brocade jacket worn open"
      ],
      mood: `**VIBE:** Rembrandt style. Warm light, deep shadows, incredible texture detail.`
    }
  };

  const styleKey = STYLE_PRESETS[style] ? style : 'renacimiento';
  const preset = STYLE_PRESETS[styleKey];
  const env = getEnvironment(styleKey);

  // 9) La Receta Técnica (CALIDAD SUPREMA)
  const styleDescription = `
**ROLE:** ${preset.role}
**COMPOSITION:** ${cameraLogic}
**BACKDROP:** ${env.bg}.
**STAGING:** ${env.prop}. **Physics:** The pet must visibly sink into the soft surface (weight).
**PALETTE:** ${pick(preset.palette)}. **Colors must be rich, deep, and harmonious.**
**WARDROBE:** ${pick(preset.wardrobe)}. **Texture:** Velvet looks soft, Gold looks metallic.
**LIGHTING:** ${pick(lighting)}. **CRITICAL: Create a soft, enveloping radiance, NOT a harsh backlight.**
${preset.mood}
${petGuardrails}

**THE "WOW" FACTOR (LIFE & ATMOSPHERE):**
- **Atmospheric Bloom:** A subtle, warm bloom effect on the highlights to give a "divine" or "masterpiece" feel.
- **Subsurface Scattering:** The light should gently glow through the thinner parts of the ears and fur (translucency), indicating life.
- **Living Eyes:** The eyes must have depth, moisture, and a clear, sharp reflection of the light source (catchlight).
- **Soft Shadows:** Shadows should be colorful (deep browns/blues), not dead black.
`;

  // 10) Framing Final
  const framing = (isMulti 
    ? `**GROUP SHOT:** Multiple pets arranged naturally on the throne. Soft, unified lighting connecting them.` 
    : `**SOLO SHOT:** Hero pet posing: ${pick(petPoses)}.`) + 
    `\n**FINAL POLISH:** 8k resolution, oil painting aesthetic mixed with photorealism, soft focus background.`;

  return masterPrompt(numSubjects, styleDescription, framing);
};
