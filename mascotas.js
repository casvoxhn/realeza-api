// ARCHIVO: mascotas.js
// CATEGORÍA: Mascotas (PET-FIRST) - V5.0 (ULTIMATE TEXTURE & DRAMA ENGINE)
// INGENIERÍA INVERSA: Fuerza bruta en físicas de materiales, iluminación Chiaroscuro y peso real.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isMulti = numSubjects > 1 || !!isGroup;

  // 1) EL ESCENARIO FÍSICO (El Ancla)
  // No solo un objeto, sino cómo interactúa el sujeto con él.
  const throneProps = [
    "a massive, antique velvet cushion acting as a throne. The subject(s) are visibly SINKING into the plush fabric due to weight, creating realistic folds.",
    "a grand, oversized baroque pillow with heavy gold bullion tassels. The pet is nestled deeply into the center, grounded and stable.",
    "a luxurious, heavy silk and velvet royal dais cushion. The fabric is crushed beneath the animal's paws."
  ];

  // 2) FONDOS ATMOSFÉRICOS (Profundidad)
  const backgrounds = [
    "a dark, moody Old Master painting background with heavy chiaroscuro clouds and deep shadow areas",
    "a rich, textured museum backdrop in deep olive, charcoal, and aged brown tones, fading into darkness",
    "an atmospheric, dimly lit palace interior where the background is barely visible through warm shadows"
  ];

  // 3) LA LUZ QUE ESCULPE (El secreto del volumen)
  // Instrucciones técnicas sobre cómo la luz debe golpear los materiales.
  const lighting = `
**DRAMATIC CHIAROSCURO LIGHTING:**
- A single, strong, motivated light source from the side-front.
- It sculpts the face and chest fur, creating high-contrast highlights.
- The rest of the body and background fall into **deep, rich, warm shadows** (not dead black).
- **CRITICAL: Subsurface Scattering (SSS).** The light must penetrate the thinner parts of the ears and individual fur strands, making them glow warmly.
- **CRITICAL: Catchlights.** The eyes must be glossy and wet, with a sharp, defined reflection of the light source.
`;

  // 4) ESTILOS REFINADOS (Paletas Profundas y Materiales Pesados)
  const STYLE_PRESETS = {
    realeza: {
      role: "**Royal Portrait / Absolute Majesty**",
      wardrobe: [
        "a heavy **deep crimson velvet mantle** with thick, spotted ermine fur trim, draped broadly over the shoulders",
        "a majestic Royal Purple velvet cape with heavy gold bullion embroidery, worn open to reveal the chest fur",
        "a king's robe in rich burgundy and gold brocade, cascading heavily over the cushion"
      ],
      accessories: ["a heavy gold chain with a royal seal pendant", "an intricate jeweled medal pinned to the chest", "a miniature crown resting nearby (optional)"],
      palette: "**Palette: Deepest Crimson, Imperial Purple, Burnished Gold, Creamy Ermine.** Focus on richness and weight."
    },
    barroco: {
      role: "**Baroque Aristocrat / Dramatic Power**",
      wardrobe: [
        "a textured midnight-blue velvet cloak with high-contrast folds catching the light",
        "a dramatic black and gold brocade mantle, looking stiff, expensive, and heavy",
        "a dark chocolate velvet cape with antique bronze details, blending into the shadows"
      ],
      accessories: ["a large, dark gemstone brooch", "a heavy gold chain of office", "minimalist but substantial gold accents"],
      palette: "**Palette: Onyx Black, Midnight Blue, Bronze, Deep Shadow tones.** Focus on dramatic contrast."
    },
    renacimiento: {
      role: "**Renaissance Muse / Timeless Elegance**",
      wardrobe: [
        "a soft, flowing moss-green velvet cape, draped loosely to emphasize natural fur texture",
        "a rich terracotta mantle with subtle gold thread embroidery, looking painterly",
        "a creamy champagne silk cloak pinned with a nature-inspired brooch"
      ],
      accessories: ["a string of natural pearls", "a simple, aged gold medallion", "no heavy collar, keeping it organic"],
      palette: "**Palette: Earthy Greens, Warm Terracotta, Antique Gold, Pearl White.** Focus on softness and painterly quality."
    }
  };

  // Mapeo para asegurar que el frontend siempre encuentre un estilo
  const styleMapping = { 'realeza': 'realeza', 'rey': 'realeza', 'barroco': 'barroco', 'renacimiento': 'renacimiento' };
  const targetStyle = styleMapping[style] || 'realeza';
  const preset = STYLE_PRESETS[targetStyle];

  // 5) POSES Y FRAMING
  const poseLogic = isMulti
    ? "**GROUP COMPOSITION:** Subjects arranged in a cohesive pyramid on the cushion, touching naturally. A cozy, regal pile."
    : pick([
        "lying in a noble 'sphinx' pose, chest puffed out proudly, bathed in the main light",
        "seated regally like a statue, head tilted slightly towards the light to catch the eye reflection",
        "lounging with heavy elegance, body sinking into the cushion, looking dignified"
      ]);

  const framing = isMulti 
    ? `**FRAMING:** 4:5 Vertical. Group Shot. Zoomed out slightly to show the entire majestic cushion and subjects.` 
    : `**FRAMING:** 4:5 Vertical. Solo Portrait. Eye-level view, focusing on the subject's powerful presence on the cushion.`;

  // 6) LÓGICA HUMANA (Condicional Estricta)
  const humanLogic = `
**CONDITIONAL LOGIC FOR HUMANS/BABIES (IF PRESENT):**
- **HIERARCHY:** The PET is the MONARCH wearing the Royal Mantle. Humans are guardians.
- **WARDROBE:** Adults in dark, subtle period clothing. Children/Babies in soft cream/white silks. Humans DO NOT wear the pet's cape.
- **POSES:** Adults stand respectfully behind/beside the throne. Babies lie safely on a blanket ON the cushion next to the pet.
- **INTERACTION:** Gentle touch or close proximity to show bond, but the pet is the visual focus.
`;

  // 7) EL PROMPT DEFINITIVO (La Receta Técnica)
  const styleDescription = `
**ESTÉTICA:** A fusion of 17th-Century Dutch Golden Age Oil Painting (Rembrandt/Vermeer) and ultra-high-resolution modern macro photography.

**SUBJECT:** ${preset.role}.
**THE ANCHOR (PROP):** ${pick(throneProps)}.
**BACKGROUND:** ${pick(backgrounds)}.

**MATERIAL PHYSICS & WARDROBE:**
- **WARDROBE:** ${pick(preset.wardrobe)}.
- **CRITICAL TEXTURE RULES:**
    1.  **Fur:** Must look individual, soft, and tactile. Must show subsurface scattering (light glow) on ears/edges.
    2.  **Velvet:** Must look visibly heavy, crushed, and deep. It absorbs light.
    3.  **Gold/Jewels:** Must have sharp, cold, metallic specular highlights. They reflect light fiercely.
    4.  **Contrast:** The softness of the fur must contrast sharply with the heavy texture of the mantle and cushion.

**LIGHTING & ATMOSPHERE:**
${lighting}
**PALETTE:** ${preset.palette}
**ACCESSORIES:** ${pick(preset.accessories)}.

${petGuardrails(isMulti)}
${isMulti ? humanLogic : ""}

**FINAL QUALITY CHECK:** The image must look like a priceless, tactile heirloom with incredible depth and life in the eyes.
`;

  return masterPrompt(numSubjects, styleDescription, framing + " " + poseLogic);
};

// HELPER: Guardrails limpios
function petGuardrails(isMulti) {
    return `
**GUARDRAILS:**
- **IDENTITY:** Preserve exact coat color/markings/ear shape.
- **MODESTY:** Use shadows/cape/tail to naturally conceal rear areas.
- **GRAVITY:** The subjects must look heavy and grounded, not floating.
    `;
}
