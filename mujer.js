// ARCHIVO: mujer.js
// V109: GROUP INCLUSION LOCK (ANTI-OMITIR) + IDENTIDAD PARA TODOS + CABELLO BLOQUEADO
//      + ENCUADRES PONDERADOS + VARIACIÓN CONTROLADA POR ESTILO
// Objetivo: si hay 2+ humanos o mascotas, NUNCA omitir a nadie, ni fusionar, ni reemplazar.

module.exports = function(style, numSubjects, isGroup) {

  // -------------------------------
  // UTIL
  // -------------------------------
  function randomPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function weightedPick(weightedOptions) {
    const total = weightedOptions.reduce((s, o) => s + o.w, 0);
    let r = Math.random() * total;
    for (const o of weightedOptions) {
      r -= o.w;
      if (r <= 0) return o.value;
    }
    return weightedOptions[weightedOptions.length - 1].value;
  }

  // -------------------------------
  // 🔒 BLOQUE DE CABELLO (NO CAMBIA CORTE / LARGO / TIPO)
  // Nota: En grupos, aplica a TODOS los humanos: no inventar cortes que cambien identidad.
  // -------------------------------
  const hairLock = `
HAIR LOCK — CRITICAL:
Preserve the SAME haircut, length, hairline and natural texture for each person from the reference.
Do NOT change hairstyle category (straight/wavy/curly) per person.
Do NOT shorten or lengthen hair.
Do NOT add bangs if absent.
Allowed only:
- subtle styling polish
- minimal partial pinning
- gentle wind movement (minimal)
- period-appropriate accessories placed over existing hair
`;

  // -------------------------------
  // 🎯 MOTOR DE ENCUADRES / PLANOS POR ESTILO (PONDERADO)
  // Importante: en grupos, forzamos más "waist-up / three-quarter" para que quepan todos.
  // -------------------------------
  function cropByStyle(styleName, subjectsCount) {
    const isGroupShot = subjectsCount > 1;

    if (styleName === "musa") {
      return isGroupShot
        ? weightedPick([
            { value: "waist-up group portrait (fit everyone clearly)", w: 65 },
            { value: "three-quarter length group portrait (fit everyone, show drapery)", w: 35 }
          ])
        : weightedPick([
            { value: "intimate head-and-shoulders portrait (emotional, collector close-up)", w: 55 },
            { value: "waist-up portrait (best balance of face + attire)", w: 35 },
            { value: "three-quarter length portrait (poetic posture + drapery)", w: 10 }
          ]);
    }

    if (styleName === "realeza") {
      return isGroupShot
        ? weightedPick([
            { value: "three-quarter length group portrait (regalia + everyone visible)", w: 70 },
            { value: "full-figure group portrait with palace scale (only if everyone fits cleanly)", w: 30 }
          ])
        : weightedPick([
            { value: "three-quarter length grand portrait (regalia + stature)", w: 45 },
            { value: "full-figure grand portrait with palace scale (epic, ceremonial)", w: 25 },
            { value: "iconic head-and-shoulders royal portrait (heirloom)", w: 20 },
            { value: "waist-up couture portrait with jewels (luxury detail)", w: 10 }
          ]);
    }

    if (styleName === "empoderada") {
      return isGroupShot
        ? weightedPick([
            { value: "waist-up group portrait (editorial power composition)", w: 70 },
            { value: "three-quarter length group portrait (fashion silhouette + everyone visible)", w: 30 }
          ])
        : weightedPick([
            { value: "waist-up power-fashion portrait (editorial + authority)", w: 55 },
            { value: "intense head-and-shoulders editorial portrait (magnetic gaze)", w: 25 },
            { value: "three-quarter length fashion portrait (silhouette + presence)", w: 20 }
          ]);
    }

    return isGroupShot ? "waist-up group portrait (fit everyone)" : "waist-up portrait";
  }

  function cameraByStyle(styleName) {
    if (styleName === "musa") {
      return weightedPick([
        { value: "eye-level classical portrait angle, gentle perspective", w: 60 },
        { value: "soft high-angle (subtle, flattering)", w: 30 },
        { value: "three-quarter camera placement with minimal perspective", w: 10 }
      ]);
    }

    if (styleName === "realeza") {
      return weightedPick([
        { value: "eye-level formal grand portrait angle", w: 50 },
        { value: "slightly low-angle heroic framing (subtle authority)", w: 45 },
        { value: "three-quarter camera placement, formal perspective", w: 5 }
      ]);
    }

    if (styleName === "empoderada") {
      return weightedPick([
        { value: "eye-level editorial portrait angle (direct power)", w: 55 },
        { value: "slightly low-angle (dominant fashion authority)", w: 40 },
        { value: "three-quarter camera placement, runway presence", w: 5 }
      ]);
    }

    return "eye-level classical portrait angle";
  }

  function lightingByStyle(styleName) {
    if (styleName === "musa") {
      return weightedPick([
        { value: "diffused golden-hour glow with painterly softness (sfumato edges)", w: 45 },
        { value: "window side-light with soft falloff, luminous skin glow", w: 35 },
        { value: "backlit halo rim-light, ethereal separation", w: 20 }
      ]);
    }

    if (styleName === "realeza") {
      return weightedPick([
        { value: "palace skylight illumination, crisp luxurious reflections on satin", w: 40 },
        { value: "ceremonial candlelit glow, warm highlights on jewels and folds", w: 30 },
        { value: "high-key daylight through tall windows, noble clarity", w: 30 }
      ]);
    }

    if (styleName === "empoderada") {
      return weightedPick([
        { value: "Rembrandt lighting, dramatic chiaroscuro, controlled contrast", w: 55 },
        { value: "studio spotlight falloff, editorial rim highlights", w: 30 },
        { value: "moody side-light with sculpted facial planes", w: 15 }
      ]);
    }

    return "classic painterly side-light";
  }

  // -------------------------------
  // VARIACIÓN GLOBAL SUAVE (no rompe identidad)
  // -------------------------------
  const pose = randomPick([
    "standing in elegant contrapposto, relaxed shoulders, lifted chin",
    "seated in an aristocratic pose, hands gently composed",
    "three-quarter turn with poised posture and controlled presence",
    "upright stance with calm authority and elegant stillness",
    "subtle motion pose, fabric naturally flowing (minimal blur)"
  ]);

  const microExpression = randomPick([
    "calm authority",
    "poised confidence",
    "serene magnetism",
    "controlled power",
    "quiet dominance"
  ]);

  // -------------------------------
  // 🎨 PALETAS / SILUETAS / ESCENARIOS POR ESTILO
  // -------------------------------
  const musaPalettes = [
    "ivory, blush pink and antique gold",
    "lavender, pearl white and silver",
    "teal, coral and sunlit bronze",
    "rose quartz with warm ivory",
    "sage green with champagne accents",
    "sky blue with pearl highlights",
    "pale gold with soft cream tones"
  ];

  const royalPalettes = [
    "crimson and gold leaf",
    "sapphire blue and ivory",
    "black velvet with diamond highlights",
    "emerald and antique gold",
    "royal purple with silver filigree",
    "ivory and gold with deep navy accents"
  ];

  const empoweredPalettes = [
    "obsidian black and champagne",
    "deep oxblood red and gold",
    "graphite gray and platinum",
    "midnight blue with sharp highlights",
    "espresso brown with bronze accents",
    "black-on-black with subtle sheen contrasts"
  ];

  const musaSilhouettes = [
    "flowing Greco-Roman draped gown",
    "empire-waist ethereal dress",
    "off-the-shoulder poetic robe",
    "layered chiffon mantle dress",
    "high-neck romantic robe with trailing sleeves",
    "soft velvet cloak over silk gown (dreamlike, not royal)"
  ];

  const royalSilhouettes = [
    "corseted court gown with cathedral skirt",
    "ball gown with embroidered train",
    "velvet mantle over structured bodice",
    "ermine-trimmed ceremonial cloak",
    "regal column dress with jeweled sash",
    "brocade gown with gold thread and royal cape"
  ];

  const empoweredSilhouettes = [
    "sculptural couture gown with sharp lines",
    "structured velvet power dress",
    "tailored blazer-gown hybrid (couture, historical influence)",
    "architectural corseted silhouette",
    "high-fashion asymmetrical statement gown",
    "minimalist power silhouette with dramatic couture collar"
  ];

  const musaScenes = [
    "misty dawn garden with soft haze",
    "moonlit orchard with gentle fog and fireflies",
    "twilight lake shore with reflections",
    "rose terrace at sunset with warm bloom tones",
    "forest clearing with glowing atmospheric particles"
  ];

  const royalScenes = [
    "coronation throne room with heraldic details",
    "palace ballroom with chandeliers and mirrors",
    "royal gallery corridor lined with portraits",
    "private audience chamber with drapery and columns",
    "ceremonial balcony overlooking a grand cityscape"
  ];

  const empoweredScenes = [
    "dramatic velvet studio set with controlled shadows",
    "grand staircase interior with editorial lighting",
    "gallery-like power backdrop with sculptural shadow lines",
    "editorial stage with spotlight falloff and dark curtains",
    "luxury penthouse window wall (painterly, not CGI)"
  ];

  const royalRegalia = randomPick([
    "diamond tiara or diadem (mandatory), heirloom necklace, jeweled earrings",
    "ornate crown/diadem (mandatory), royal sash, brooch with dynasty emblem",
    "tiara (mandatory), pearl set, gilded hair ornaments, embroidered cape clasp",
    "diadem (mandatory), chandelier jewelry, ceremonial mantle clasp, signet ring"
  ]);

  const musaFabrics = randomPick([
    "silk and chiffon layers",
    "gauzy organza with subtle metallic thread",
    "soft satin with gentle sheen",
    "lace overlay with delicate embroidery"
  ]);

  const royalFabrics = randomPick([
    "heavy velvet and satin",
    "brocade with gold thread embroidery",
    "luxurious taffeta with jewel accents",
    "ermine-trimmed velvet cloak over satin"
  ]);

  const empoweredFabrics = randomPick([
    "structured velvet tailoring",
    "high-sheen satin with sculptural seams",
    "matte silk with sharp couture lines",
    "subtle couture leather-like accents (elegant, not edgy)"
  ]);

  // -------------------------------
  // SELECCIÓN POR ESTILO
  // -------------------------------
  let palette, silhouette, scene, fabrics, styleArchetype, stylePromptExtra;

  if (style === "musa") {
    palette = randomPick(musaPalettes);
    silhouette = randomPick(musaSilhouettes);
    scene = randomPick(musaScenes);
    fabrics = musaFabrics;
    styleArchetype = "Ethereal, poetic, romantic, mythic muse.";
    stylePromptExtra = `
STYLE CORE (MUSA):
Soft romance, luminous skin glow, dreamy atmosphere, gentle elegance.
No heavy royal regalia. No harsh power styling.
`;
  } else if (style === "realeza") {
    palette = randomPick(royalPalettes);
    silhouette = randomPick(royalSilhouettes);
    scene = randomPick(royalScenes);
    fabrics = royalFabrics;
    styleArchetype = "Imperial, dynastic, commanding, unmistakably royal.";
    stylePromptExtra = `
STYLE CORE (REALEZA):
Grand manner portrait. Unmistakable monarchy. Regalia and couture construction.
Royal headpiece is mandatory. Jewelry must feel heirloom and expensive.
`;
  } else if (style === "empoderada") {
    palette = randomPick(empoweredPalettes);
    silhouette = randomPick(empoweredSilhouettes);
    scene = randomPick(empoweredScenes);
    fabrics = empoweredFabrics;
    styleArchetype = "Dominant, powerful, fashion-forward, intimidating in elegance.";
    stylePromptExtra = `
STYLE CORE (EMPODERADA):
High-fashion authority, editorial intensity, confident posture, sharp silhouette.
No soft romantic vibe. No princess vibe.
`;
  } else {
    palette = randomPick(royalPalettes);
    silhouette = randomPick(royalSilhouettes);
    scene = randomPick(royalScenes);
    fabrics = royalFabrics;
    styleArchetype = "Imperial, dynastic, commanding, unmistakably royal.";
    stylePromptExtra = `
STYLE CORE:
Grand manner oil portrait, noble presence, premium heirloom feel.
`;
  }

  // -------------------------------
  // ENCUADRE/CÁMARA/LUZ POR ESTILO
  // -------------------------------
  const cropPicked = cropByStyle(style, numSubjects);
  const cameraPicked = cameraByStyle(style);
  const lightingPicked = lightingByStyle(style);

  // -------------------------------
  // ✅ GROUP INCLUSION LOCK (ANTI-OMITIR / ANTI-FUSIÓN)
  // -------------------------------
  const inclusionLock = `
INCLUSION LOCK — NON-NEGOTIABLE:
This is a multi-subject commission. You MUST include EVERY person and every pet visible in the reference.
Do NOT omit, crop out, blur away, merge, fuse, replace, or turn someone into a background figure.
Do NOT duplicate one person to replace another.
If composition is tight: zoom out or adjust crop to fit everyone.
Every subject must have a distinct, recognizable face (no lookalikes).
`;

  const fidelityAll = `
FIDELITY FOR ALL SUBJECTS — CRITICAL:
Maintain identity fidelity for EACH human subject, not only the main woman.
Preserve each subject's unique facial structure and age.
Pets must be included with correct anatomy and recognizable markings.
`;

  // -------------------------------
  // COMPOSICIÓN / JERARQUÍA
  // -------------------------------
  let compositionBlock = "";

  if (numSubjects > 1) {
    compositionBlock = `
COMPOSITION (GROUP PORTRAIT):
Framing: ${cropPicked}.
Camera: ${cameraPicked}.
Lighting: ${lightingPicked}.
Pose: protagonist in ${pose}.
Expression: ${microExpression}.

Group arrangement rules:
- Use a classical triangular composition.
- The main woman can be central, but the other humans must be clearly visible and not diminished.
- Ensure clear separation between faces (no overlap hiding someone).
- Keep all heads fully inside frame.
- If a dog/pet exists: place it visibly (foreground or beside the group), not cropped.
`;
  } else {
    compositionBlock = `
COMPOSITION (SOLO PORTRAIT):
Framing: ${cropPicked}.
Camera: ${cameraPicked}.
Lighting: ${lightingPicked}.
Pose: ${pose}.
Expression: ${microExpression}.
`;
  }

  // -------------------------------
  // PROMPT FINAL
  // -------------------------------
  return `
You are a world-class classical portrait painter producing a **museum-grade oil painting on linen canvas**.

ASPECT RATIO: vertical 4:5.

PRIMARY GOAL:
The client must recognize all subjects instantly and feel elevated, powerful and worthy of collecting.

IDENTITY LOCK — CRITICAL:
Preserve facial proportions, bone structure, age and natural skin tone from the reference.
Beautify only through painterly lighting and refined texture — never reshaping anatomy into a generic face.
Eyes must be sharp and lifelike. Avoid any wide-angle distortion.

${hairLock}

SUBJECTS:
Input has ${numSubjects} subject(s). Include all people and pets from the reference.

${numSubjects > 1 ? inclusionLock : ""}

${numSubjects > 1 ? fidelityAll : ""}

STYLE ARCHETYPE — DO NOT BREAK:
${styleArchetype}

${stylePromptExtra}

WARDROBE (VARIATION WITHIN STYLE):
Silhouette: ${silhouette}.
Fabrics: ${fabrics}.
Color story: ${palette}.
${style === "realeza" ? `Regalia: ${royalRegalia}.` : ""}

SCENE:
${scene}.

${compositionBlock}

VARIATION RULE (CONTROLLED):
Each repeat must change wardrobe + palette + scene inside the same style archetype,
but must NOT change identity or haircut.
Do not reuse the exact same combination of (palette + silhouette + scene) across repeats.

PAINTING EXECUTION:
Oil on canvas. Layered glazes. Subtle impasto highlights on jewels and folds.
Hands anatomically correct and elegant.
Fabric physics natural — no costume look.

NEGATIVE RULES:
No identity change.
No haircut change.
No missing subjects.
No merging subjects.
No turning subjects into background silhouettes.
No cartoon, anime, CGI, 3D.
No plastic skin, no over-smoothing.
No face swap artifacts.
No extra people not in the reference.
No logos, text, watermarks, frames, UI.
`;
};
