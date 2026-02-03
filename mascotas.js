// ARCHIVO: mascotas.js
// CATEGORÍA: Mascotas (PET-FIRST) - V2.0 (Surrealum-level realism + Dynamic Poses + Modesty)
// Objetivo: 3 estilos distinguibles + identidad intacta + poses vivas y dignas + texturas hiperrealistas.

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

  // 1) Guardrails específicos de mascotas (identidad, modestia y anti-kitsch)
  const petGuardrails = `
**CATEGORY GUARDRAILS (PETS / MASTERPIECE COMMISSION):**
- This is a **PET-FIRST** commissioned oil portrait: the hero pet is the main subject.
- Preserve the pet's **exact identity** from the source: coat color/pattern, markings, fur texture, ear shape, eye color.
- **AESTHETIC MODESTY (CRITICAL):** Ensure a dignified composition. Use natural posing (e.g., a strategically placed paw, tail, or fabric drape) to aesthetically conceal intimate areas, maintaining a noble presentation.
- Keep expression natural and alive: calm, noble, alert, warm. Avoid goofy/cartoon smiles or stiff taxidermy looks.
- No kitsch: no oversized crowns, no cheap shiny plastics. Materials must look expensive and real.
`;

  // 2) Backdrops / staging (cojín grande + opulencia controlada)
  const backdrops = [
    "a dark, rich museum backdrop with subtle warm-to-cool gradient, deep shadows, very elegant",
    "a classical interior suggestion with deep carved wood paneling and heavy drapery shadows",
    "a moody baroque interior with intense, controlled highlights on the subject, dark negative space",
    "a aged master painter's studio background, dark and atmospheric, putting all focus on the pet"
  ];

  const props = [
    "a **massive, plush velvet cushion** with heavy gold tassels and intricate brocade trim (throne-like weight)",
    "an elegant, low antique chaise lounge with rich, deep upholstery and heavy fabric folds",
    "a raised platform draped in heavy, light-catching velvet and damask fabrics"
  ];

  // 3) Luz (Dramática y texturizante - Clave para el efecto wow)
  const lightingOptions = [
    "dramatic museum portrait lighting: strong key light from side revealing fur texture, deep soft shadows",
    "master painter's light (Rembrandt-esque): focused beam on the pet's face and chest, rich dark fall-off",
    "deep chiaroscuro lighting: high contrast but retaining detail in shadows, emphasizing volume and texture",
    "soft but directional north-window light, creating sparkling highlights on fur and jewel tones on fabric"
  ];

  // 4) Poses PET-SOLO (Más vivas, menos estáticas, y con opciones de capa abierta)
  const petLyingPoses = [
    "hero pet lying with **dynamic relaxation** on the large cushion, head turned alertly toward light, one paw draped naturally over the edge",
    "hero pet lying settled deep into the cushion fabric, body angled, looking back over shoulder with a **lively, intelligent expression**",
    "hero pet lying in a noble sphinx-like pose, but with tension released in shoulders, calm dominant gaze, chest visible",
    "hero pet lying comfortably, shifting weight slightly, giving a natural sense of life and breath, eyes bright"
  ];

  const petSeatedPoses = [
    "hero pet seated regally 3/4 on the cushion, chest puffed proudly, alert gaze, tail curled naturally around base",
    "hero pet seated upright but relaxed, head slightly tilted with curiosity, fur texture incredibly defined on chest"
  ];

  // Weighted default: 60% lying (more noble/heavy), 40% seated
  const petSoloPoseWeighted = () =>
    weightedPick([
      { value: pick(petLyingPoses), weight: 60 },
      { value: pick(petSeatedPoses), weight: 40 }
    ]);

  // 5) Multi-pet composition
  const multiPetArrangements = [
    "hero pet centered dynamically on the main cushion; secondary pets arranged in a natural, non-stiff arc around them",
    "hero pet in front with strongest light and most alert pose; secondary pets staggered by depth, all faces alive and visible",
    "two pets sharing the large cushion naturally (hero pet more prominent); additional pets near cushion edge, forming a unified group"
  ];

  // 6) Interacción con humanos (si existen)
  const humanWarmInteractions = [
    "IF a child is present: child leaning gently against the cushion, calm organic closeness; pet remains the focus",
    "IF an adult is present: adult standing subtly behind or to the side, a hand resting naturally on the pet's shoulder (supporting role)"
  ];

  // 7) Anti-clone en grupos
  const multiPetUniqueness = `
**MULTI-PET UNIQUENESS:**
- If >1 pet: keep harmony (same era materials) but vary accessories slightly (e.g., one has a medallion, another a collar).
- Keep all pets equally recognizable and alive.
`;

  // 8) 3 estilos del modal (Con vestuario "abierto" añadido)
  const STYLE_PRESETS = {
    renacimiento: {
      role: "**Renacimiento Romántico (Elegancia)** — suave, cálido, museo, ternura noble.",
      palette: [
        "Rich Champagne + soft gold + deep warm creams",
        "Muted emerald green + antique gold + pearl accents",
        "Deep soft burgundy + warm neutrals + subtle gold thread"
      ],
      wardrobe: [
        // Opción de capa abierta añadida:
        "a refined velvet cape, **draped open at the front to reveal the chest fur**, with subtle embroidery and a small medallion",
        "a soft silk mantle with heavy folds, lace edge detail and a tasteful brooch",
        "a noble fur-trimmed cloak loosely draped over shoulders with minimal jewels"
      ],
      accessories: ["a single fine medallion", "a refined collar with one gemstone", "a minimal gold chain"],
      mood: `**STYLE SIGNATURE (RENACIMIENTO):** Warm softness, deep glazing, gentle atmosphere. Big cushion, calm lovable expression.`
    },

    realeza: {
      role: "**Realeza Imperial (Coronación)** — opulencia controlada, poder, presencia oficial.",
      palette: [
        "Royal blue velvet + heavy antique gold + pearls",
        "Deep Crimson velvet + rich gold bullion + warm shadows",
        "Dark Emerald + gold filigree + black fur accents"
      ],
      wardrobe: [
        // Opción de capa abierta añadida:
        "a regal velvet mantle with ermine trim, **thrown casually back over one shoulder** to show the pet's form",
        "a heavy brocade-lined cape with a jeweled clasp, sitting heavily on the cushion",
        "a royal draped cloak with a long train pooling on the cushion, gold edging"
      ],
      accessories: ["a small tasteful coronet (very small) OR jeweled headpiece", "a premium heavy medallion", "a refined brooch + thick chain"],
      mood: `**STYLE SIGNATURE (REALEZA):** Throne-like weight. Hero pet looks powerful and royal, heavy fabrics.`
    },

    barroco: {
      role: "**Barroco Dramático (Teatral)** — intenso, alto contraste, elegante, carácter fuerte.",
      palette: [
        "Onyx Black + antique brass gold + deep burgundy accents",
        "Ox-blood red + deep shadow browns + burnished gold",
        "Midnight navy + muted heavy gold + warm highlights"
      ],
      wardrobe: [
        // Opción de capa abierta añadida:
        "a dark, heavy velvet cloak with gold trim, **partially open**, revealing the neck and chest",
        "a deep red mantle with rich, heavy embroidery creating deep shadows",
        "a black-and-gold draped cape with tangible weight and minimal, striking jewels"
      ],
      accessories: ["a single striking brooch + thick chain", "a heavy refined collar", "optional substantial medallion"],
      mood: `**STYLE SIGNATURE (BARROCO):** High drama, deep shadows, warm highlights, intense gaze. Looks like a Rembrandt.`
    },
  };

  const preset = STYLE_PRESETS[style] || STYLE_PRESETS.renacimiento;

  // 9) Style description (la “receta” mejorada para realismo)
  const styleDescription = `
**ROLE:** ${preset.role}
**BACKDROP:** ${pick(backdrops)}.
**STAGING/PROP:** ${pick(props)}.
**PALETTE:** ${pick(preset.palette)}.
**WARDROBE (CAPE/MANTLE):** ${pick(preset.wardrobe)}. The fabric must look heavy and real.
**ACCESSORIES:** ${pick(preset.accessories)}.
**LIGHTING:** ${pick(lightingOptions)}.
${preset.mood}
${petGuardrails}
${isMulti ? multiPetUniqueness : ""}

**ULTRA-REALISTIC PAINTERLY FINISH (CRITICAL FOR WOW EFFECT):**
- The final image must look like a **photograph of a master oil painting** (like the reference style).
- **Fur Texture:** Incredible attention to micro-detail. Every strand of fur must be visible, reacting to the light, looking soft and tangible.
- **Fabric Weight:** Capes and cushions must have heavy, realistic folds with deep shadows and rich highlights. They should not look flat.
- **Life:** The eyes must have life, wetness, and a clear catchlight. The pose must feel like a captured living moment, not a statue.
`;

  // 10) Framing
  const soloFramings = [
    `**SOLO COMPOSITION:** ${petSoloPoseWeighted()}. Eye-level classic portrait. Focus is sharp on the pet's eyes and fur texture.`,
  ];

  const groupFramings = [
    `**GROUP COMPOSITION:** ${pick(multiPetArrangements)}. ALL faces visible and sharp. Hero pet has the primary focus and light.`,
  ];

  const interaction = isMulti
    ? `\n**INTERACTION:** ${pick(humanWarmInteractions)}. If multiple pets: natural proximity, no crowding.`
    : `\n**NOTE:** Pet has a noble, calm, and **alive** presence.`;

  const framing = (isMulti ? pick(groupFramings) : pick(soloFramings)) + interaction;

  return masterPrompt(numSubjects, styleDescription, framing);
};
