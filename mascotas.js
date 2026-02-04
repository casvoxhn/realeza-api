// ARCHIVO: mascotas.js
// CATEGORÍA: Mascotas (PET-FIRST) - V3.9 (Final Polish + Explicit Baby Logic)
// Objetivo: Iluminación divina, texturas ricas y manejo específico para adultos, niños Y BEBÉS.

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

  // 1) Guardrails: Identidad + Modestia + Calidad
  const petGuardrails = `
**CATEGORY GUARDRAILS (PETS / DIVINE MASTERPIECE):**
- **PET-FIRST:** The animals are the absolute focus.
- **IDENTITY:** Preserve coat colors, markings, and ear shapes exactly for ALL subjects.
- **MODESTY:** Use natural posing (shadows, tails, fabric) to conceal intimate areas gracefully.
- **UNITY:** In group shots, subjects must share the same lighting space. No conflicting shadows.
`;

  // 2) Props & Backdrops
  const getEnvironment = (styleKey) => {
      if (styleKey === 'realeza') {
          return {
              bg: pick([
                  "a grand palace interior fading into soft, warm darkness",
                  "a rich backdrop of heavy red velvet curtains catching a soft ambient glow",
                  "a majestic throne room background, blurred but implying gold columns"
              ]),
              prop: pick([
                  "a wide, massive royal throne cushion with heavy gold bullion fringe",
                  "a grand podium covered in layers of shimmering silk and furs"
              ])
          };
      }
      return { // Renacimiento / Barroco
          bg: pick([
              "a warm, dark painterly studio background with soft atmospheric haze",
              "a classic museum backdrop with deep olive/brown tones, very soft focus"
          ]),
          prop: pick([
              "an oversized, plush antique velvet pillow with deep button tufting",
              "a wide wooden bench draped in heavy, flowing brocade fabric"
          ])
      };
  };

  // 3) Lógica de Cámara (30% Zoom para detalles)
  const cameraLogic = weightedPick([
      { 
          value: "**MEDIUM SHOT (The Majestic):** Framing from the chest/paws up. Shows the grandeur of the pose and the outfit.", 
          weight: 70 
      },
      { 
          value: "**CLOSE-UP PORTRAIT (The Soul):** Tighter crop focusing on faces/eyes. Intense detail on iris and nose texture. Creamy bokeh.", 
          weight: 30 
      }
  ]);

  // 4) Iluminación "Divina" (Glow + Volumen)
  const lighting = [
    "**VOLUMETRIC GOLDEN RADIANCE:** A soft, large light source creates a gentle, warm glow that wraps around the subjects. Atmospheric and kind.",
    "**PAINTERLY CHIAROSCURO:** Directed soft light illuminating faces and chests, while bodies fade into **rich, warm shadows** (not dead black).",
    "**SOFT STUDIO GLOW:** High-end beauty lighting. No harsh edges. A soft sheen on fur and velvet, emphasizing texture."
  ];

  // 5) POSES (Solo) & LÓGICA HUMANA COMPLETA (Adulto/Niño/Bebé)
  const soloPoses = [
    "lying in a noble 'sphinx' pose, chest puffed out, bathed in the soft light",
    "seated regally, head tilted slightly towards the light source to catch a sparkle in the eyes",
    "lounging with heavy elegance, sinking comfortably into the cushion, looking confident",
    "posing with a 3/4 turn of the head, showing a dignified profile illuminated by the glow"
  ];

  // --- AQUÍ ESTÁ EL CAMBIO CLAVE PARA BEBÉS ---
  const humanAndChildLogic = `
**CONDITIONAL LOGIC FOR HUMANS/CHILDREN/BABIES (IF PRESENT):**
- **HIERARCHY (PET-FIRST):** The pet remains the visual king/queen. Humans act as noble guardians frame and support the pet.
- **WARDROBE RULES:** - **Adults:** Subtle period clothing in dark/rich tones.
    - **Children (Toddlers+):** Soft creams or pastels for an angelic look.
    - **Babies/Infants:** Swaddled in luxurious white/cream soft cloths or long flowing gowns.
    - **CRITICAL: Humans DO NOT wear the pet's royal mantle or crown.**
- **ADULT POSE:** Standing elegantly behind or beside the cushion, hand gently resting on the pet to show connection.
- **CHILD POSE (Toddler+):** Seated on the cushion next to the pet, looking innocent, perhaps hugging the pet gently.
- **BABY/INFANT POSE:** Lying safely on a soft blanket right next to the pet, or gently cradled in an adult's arms next to the pet. The interaction must look safe, tender, and protective.
`;

  // 6) Estilos
  const STYLE_PRESETS = {
    renacimiento: {
      role: "**Bosque Encantado / Renacimiento** (Mágico, Suave).",
      palette: ["Emerald Green + Soft Gold", "Terracotta + Creamy Pearl", "Deep Moss + Warm Earth"],
      wardrobe: ["soft velvet cape draped loosely", "renaissance silk mantle", "flowing cloak with nature brooch"],
      mood: `**VIBE:** Ethereal softness. Magical light like a forest clearing.`
    },
    realeza: {
      role: "**Coronación Imperial / Realeza** (Lujoso, Vibrante).",
      palette: ["**Royal Blue** + Shimmering Gold", "**Crimson Red** + Deep Velvet", "**Imperial Purple** + Gold Thread"],
      wardrobe: ["majestic heavy velvet mantle draped open", "king's robe cascading over the cushion", "royal cape with gold embroidery"],
      mood: `**VIBE:** Expensive. Saturated deep colors. Gold must glow warmly.`
    },
    barroco: {
      role: "**Estudio Barroco** (Clásico, Sombras Ricas).",
      palette: ["Onyx Black + Warm Bronze", "Midnight Blue + Silver", "Dark Chocolate + Candlelight"],
      wardrobe: ["textured dark velvet cloak", "dramatic period cape draped artistically", "heavy brocade jacket worn open"],
      mood: `**VIBE:** Rembrandt style. Warm light, deep shadows, incredible texture.`
    }
  };

  const styleKey = STYLE_PRESETS[style] ? style : 'renacimiento';
  const preset = STYLE_PRESETS[styleKey];
  const env = getEnvironment(styleKey);

  // 9) La Receta Técnica
  const styleDescription = `
**ROLE:** ${preset.role}
**COMPOSITION:** ${cameraLogic}
**BACKDROP:** ${env.bg}.
**STAGING:** ${env.prop}. **Physics:** Subjects must visually sink into the soft material.
**PALETTE:** ${pick(preset.palette)}. **Colors must be rich, deep, and harmonious.**
**WARDROBE (PETS):** ${pick(preset.wardrobe)}. **Texture:** Velvet looks soft, Gold looks metallic.
**LIGHTING:** ${pick(lighting)}.
${preset.mood}
${petGuardrails}
${isMulti ? humanAndChildLogic : ""}

**THE "WOW" FACTOR (LIFE & ATMOSPHERE):**
- **Atmospheric Bloom:** A subtle, warm bloom effect on highlights to give a "divine" feel.
- **Subsurface Scattering:** Light gently glowing through ears/fur (translucency).
- **Living Eyes:** Glossy, deep eyes with sharp reflections (catchlights).
- **Soft Shadows:** Shadows should be colorful (deep browns/blues), giving volume.
`;

  // 10) Framing Dinámico
  const framing = (isMulti 
    ? `**GROUP SHOT:** A cohesive gathering on the throne cushion. All subjects interacting naturally with warmth and unified lighting.` 
    : `**SOLO SHOT:** Hero pet posing: ${pick(soloPoses)}.`) + 
    `\n**FINAL POLISH:** 8k resolution, oil painting aesthetic mixed with photorealism, soft focus background.`;

  return masterPrompt(numSubjects, styleDescription, framing);
};
