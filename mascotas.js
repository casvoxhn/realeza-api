// ARCHIVO: mascotas.js
// CATEGORÍA: Mascotas (PET-FIRST) - V4.1 (FINAL DEFINITIVE: Cushion Aesthetics + All Subject Logic)
// COMBINA: Estética "Surrealum" (Cojín/Manto) + Lógica Robusta (Bebés/Niños/Humanos).

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

  // 1) EL ESCENARIO OBLIGATORIO (El secreto del WOW)
  // El "Ancla" visual: Un cojín masivo que da escala y realeza.
  const throneProps = [
    "a massive, antique velvet cushion with giant gold tassels at the corners",
    "a luxurious, oversized silk pillow acting as a throne, elevating the subject(s)",
    "a grand, tufted royal cushion with gold embroidery, looking heavy and expensive"
  ];

  // 2) FONDOS (Estilo "Old Master")
  const backgrounds = [
    "a stormy, dark moody sky backdrop typical of 18th-century oil portraits",
    "a deep, textured painterly background in dark olive and chocolate tones",
    "a classic studio backdrop with painted clouds and dramatic shadows"
  ];

  // 3) ILUMINACIÓN (Rembrandt + Vida)
  const lighting = "Rembrandt lighting: strong directional light from the side, creating deep shadows and illuminating the face and chest texture. **CRITICAL: Eyes must have a sharp white catchlight (reflection) to look alive.**";

  // 4) ESTILOS REFINADOS (Paletas Ricas y Mantos)
  const STYLE_PRESETS = {
    realeza: {
      role: "**Royal Portrait / Majesty**",
      wardrobe: [
        "a heavy **crimson velvet mantle** with thick white ermine fur trim (white with black spots), draped regally",
        "a dusting-pink velvet royal cape with delicate antique lace collar and ermine lining",
        "a majestic deep burgundy cloak with heavy gold bullion embroidery, worn open"
      ],
      accessories: ["a classic pearl necklace", "a heavy gold chain with a royal pendant", "an intricate lace ruff collar"],
      palette: "Rich Crimson, Dusty Pink, Antique Gold, Deep Brown shadows."
    },
    barroco: {
      role: "**Baroque Aristocrat**",
      wardrobe: [
        "a dark chocolate velvet cloak with gold floral embroidery, resting heavily on the shoulders",
        "a black and gold brocade mantle, looking stiff and expensive, draped artistically",
        "a heavy midnight-blue cape with a high stiff collar and gold chain"
      ],
      accessories: ["a gold chain of office", "a large gemstone brooch", "no collar, just the cape"],
      palette: "Onyx, Bronze, Chocolate, Midnight Blue."
    },
    renacimiento: {
      role: "**Renaissance Muse**",
      wardrobe: [
        "a soft green velvet cape draped loosely, showing the fur texture",
        "a rich terracotta mantle with simple gold trim, blending with the earthy background",
        "a flowing silk cloak in champagne tones, pinned with a nature brooch"
      ],
      accessories: ["a loose string of pearls", "a simple gold medallion", "a small crown of leaves"],
      palette: "Emerald, Terracotta, Cream, Earth Tones."
    }
  };

  const styleKey = STYLE_PRESETS[style] ? style : 'realeza';
  const preset = STYLE_PRESETS[styleKey];

  // 5) POSES Y LÓGICA DE SUJETOS (INTEGRADO FINAL)
  
  // A. Poses Solitarias (Mascota)
  const soloPoses = [
    "lying in a 'sphinx' pose on the center of the cushion, front paws extended elegantly over the edge, chest proud",
    "seated regally in the center of the cushion, posture upright and proud, looking like a statue",
    "lounging comfortably on the cushion, body angled, head turned 3/4 towards the light source"
  ];

  // B. Lógica de Grupos (Mascotas solas)
  const multiPetLogic = [
    "**PYRAMID COMPOSITION:** Pets arranged in a triangular formation on the massive cushion.",
    "**COZY PILE:** Pets lounging comfortably together on the pillow, bodies overlapping slightly to show connection."
  ];

  // C. Lógica Humana/Niño/Bebé (ESTRICTA)
  const humanLogicBlock = `
**CONDITIONAL LOGIC FOR HUMANS/CHILDREN/BABIES (IF PRESENT):**
- **HIERARCHY:** The Pet is the King/Queen wearing the Royal Mantle. Humans are "Noble Guardians".
- **WARDROBE (Humans):** - **Adults:** Dark, subtle period clothing (Black/Navy/Brown).
    - **Children:** Cream/White/Pastel silks (Angelic look).
    - **Babies:** Swaddled in luxurious white cloth or christening gowns.
    - **RESTRICTION:** Humans DO NOT wear the heavy Royal Mantle. Only the pet does.
- **POSES:**
    - **Adult:** Standing elegantly BEHIND or BESIDE the cushion, hand on the pet.
    - **Child:** Seated ON the cushion next to the pet, looking innocent.
    - **Baby:** Lying safely on a soft blanket part of the cushion, right next to the pet, or cradled by an adult.
`;

  // 6) CONSTRUCCIÓN DE LA DESCRIPCIÓN
  const styleDescription = `
**ART STYLE:** Classical Oil Painting aesthetics mixed with Hyper-realistic Photography (The "Surrealum" look).
**SUBJECT:** ${preset.role}.
**PROP/STAGING:** ${pick(throneProps)}. **CRITICAL:** The subject(s) must be visually ON TOP of this cushion, sinking slightly into the fabric due to weight.
**BACKGROUND:** ${pick(backgrounds)}.
**WARDROBE (PET):** ${pick(preset.wardrobe)}. **Texture Detail:** The velvet must look crushed and heavy. The ermine fur must look soft.
**ACCESSORIES:** ${pick(preset.accessories)}.
**LIGHTING:** ${lighting}
**PALETTE:** ${preset.palette}

${petGuardrails(isMulti)}
${isMulti ? humanLogicBlock : ""}

**QUALITY GUIDELINES (THE WOW FACTOR):**
- **Fur Texture:** Paint individual stray hairs catching the light.
- **Material Contrast:** Soft fur vs. Heavy Velvet vs. Cold Gold.
- **Atmosphere:** The image should look like a priceless heirloom found in a castle.
`;

  // 7) FRAMING DINÁMICO
  let framing = "";
  if (isMulti) {
      framing = `**GROUP COMPOSITION:** ${pick(multiPetLogic)}. 4:5 Vertical. Zoomed out slightly to fit the cushion and all subjects.`;
  } else {
      framing = `**SOLO COMPOSITION:** Hero pet posing: ${pick(soloPoses)}. 4:5 Vertical. Focused on the majesty of the pet on the cushion.`;
  }

  return masterPrompt(numSubjects, styleDescription, framing);
};

// HELPER: Guardrails limpios
function petGuardrails(isMulti) {
    return `
**CATEGORY GUARDRAILS:**
- **IDENTITY:** Preserve coat color/pattern and ear shape exactly.
- **MODESTY:** Use the cushion shadows and the drape of the cape/tail to naturally conceal rear/intimate areas.
- **PHYSICS:** Subjects must look grounded on the cushion, not floating.
    `;
}
