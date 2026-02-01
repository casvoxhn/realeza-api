// ARCHIVO: mujer.js
// V114: NANO BANANA PRO OPTIMIZED - MULTI-SUBJECT STABILITY + PET SUPPORT
// - Fix: Group Separation (evita mezcla de caras)
// - Fix: Pet Inclusion (las mascotas cuentan como sujetos)
// - Mode: Strict Renaissance (Empoderada)

module.exports = function(style, numSubjects, isGroup) {

  // -------------------------------
  // 1. UTILIDADES
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

  // Detectar si es grupo real (más de 1 sujeto O flag de grupo activado)
  const group = numSubjects > 1 || isGroup === true;

  // -------------------------------
  // 2. CONTRATOS DE IDENTIDAD (CRÍTICO)
  // -------------------------------
  
  // Bloque para asegurar fidelidad a la foto original
  const hardIdentity = `
*** IMPORTANT: SOURCE FIDELITY & IDENTITY PROTECTION ***
REFERENCE ADHERENCE: ABSOLUTE.
You must use the provided reference image(s) as the GROUND TRUTH for facial features.
- Do NOT generate generic faces.
- Do NOT "beautify" or alter bone structure.
- Do NOT swap ethnicities or ages.
- KEEP: exact nose shape, eye distance, jawline, and natural skin texture imperfections.
- FACIAL INTEGRITY: Each person must look exactly like their reference counterpart.
`;

  // Bloque específico para pelo (evita cambios drásticos)
  const hairLock = `
HAIR CONSISTENCY:
Preserve the exact hairstyle, hairline, and hair texture from the reference.
- Do NOT change straight hair to curly or vice-versa.
- Do NOT change hair length.
- Allow only subtle wind or lighting effects, but structure remains identical.
`;

  // -------------------------------
  // 3. PROTOCOLO DE GRUPO (CRÍTICO PARA >1 PERSONA/MASCOTA)
  // -------------------------------
  const groupProtocol = `
*** GROUP & MULTI-SUBJECT ISOLATION ***
TOTAL SUBJECT COUNT: ${numSubjects} (Humans + Pets).
CRITICAL: Every single subject from the reference must be present.
- NO MISSING SUBJECTS.
- NO MERGED FACES (Identity Bleed is strictly forbidden).
- NO DUPLICATES (Do not clone one person).

SPATIAL SEPARATION:
Maintain distinct separation between faces. Do not let features blend.
If pets are present, treat them as MAIN SUBJECTS with equal detail to humans.
Composition must be wide enough to fit ALL ${numSubjects} subjects comfortably without cropping heads.
`;

  const soloProtocol = `
*** SOLO PORTRAIT FOCUS ***
Center the single subject. Maximize detail on facial features and expression.
`;

  // -------------------------------
  // 4. ESTILOS Y AMBIENTACIÓN
  // -------------------------------

  // --- MUSA (Etérea / Romántica) ---
  const musaConfig = {
    archetype: "Ethereal Muse, Soft Romanticism, Fine Art Dream.",
    palettes: [
      "ivory, blush pink and antique gold",
      "lavender, pearl white and silver",
      "pale celestial blue with cream tones",
      "champagne gold with soft apricot"
    ],
    silhouettes: [
      "flowing greek-inspired draped gown",
      "empire-waist chiffon dress with layered transparency",
      "high-neck poetic silk robe with balloon sleeves"
    ],
    scenes: [
      "misty dawn garden with blooming wisteria",
      "twilight lake shore with soft fog",
      "ancient stone terrace overrun with climbing roses"
    ],
    fabrics: "sheer chiffon, organza, soft silk, tulle layers",
    lighting: weightedPick([
      { value: "diffused golden-hour glow (sfumato)", w: 60 },
      { value: "soft moonlit iridescence", w: 40 }
    ]),
    core: `
STYLE CORE (MUSA):
Atmosphere is dreamy, soft focus edges, emotional and poetic. 
Make it look like a Waterhouse or Pre-Raphaelite painting.
`
  };

  // --- REALEZA (Opulencia Extrema) ---
  const realezaConfig = {
    archetype: "Imperial Majesty, Dynastic Power, Museum Masterpiece.",
    palettes: [
      "royal crimson and heavy gold leaf",
      "deep sapphire blue with silver embroidery and diamonds",
      "emerald green velvet with ruby accents",
      "black velvet with gold brocade and pearls"
    ],
    silhouettes: [
      "heavy court gown with corseted bodice and cathedral train",
      "ceremonial robe with ermine trim over brocade dress",
      "elizabethan-structure gown with stiff collar and jewels"
    ],
    scenes: [
      "throne room with marble columns and red velvet drapery",
      "hall of mirrors with crystal chandeliers",
      "royal gallery with gilded frames and tapestries"
    ],
    fabrics: "heavy velvet, thick satin, gold brocade, ermine fur",
    regalia: randomPick([
      "massive diamond crown, layered pearl necklaces, royal sash",
      "tall jeweled diadem, gem-encrusted collar, heavy gold chains",
      "imperial tiara, diamond earrings, brooch of authority"
    ]),
    lighting: weightedPick([
      { value: "cinematic palace lighting (bright highlights on jewels)", w: 50 },
      { value: "rembrandt lighting with golden reflections", w: 50 }
    ]),
    core: `
STYLE CORE (REALEZA):
MAXIMUM OPULENCE. If it can be gold, make it gold.
The jewelry must look heavy and expensive. The background must look like a palace.
Authority and Wealth are the key emotions.
`
  };

  // --- EMPODERADA (Renacimiento Puro - NO MODERNO) ---
  const empoderadaConfig = {
    archetype: "Renaissance Matriarch, High Court Politics, Intellectual Power.",
    palettes: [
      "obsidian black with bronze accents",
      "deep burgundy with antique gold thread",
      "midnight blue velvet with silver filigree",
      "rich chocolate brown with gold medallions"
    ],
    silhouettes: [
      "structured renaissance bodice with slashed sleeves",
      "high-collar velvet gown with stiff ruff",
      "armored corset dress with heavy brocade skirt"
    ],
    scenes: [
      "renaissance council chamber with dark wood maps",
      "stone library with candlelight and ancient books",
      "private court study with heavy curtains"
    ],
    fabrics: "structured velvet, leather accents, stiff brocade, metallic thread",
    powerSymbol: randomPick([
      "holding a quill and parchment",
      "hand resting on a globe",
      "wearing a heavy chain of office",
      "holding a sealed royal letter"
    ]),
    lighting: "chiaroscuro (strong contrast between light and dark) for dramatic power",
    core: `
STYLE CORE (EMPODERADA - RENAISSANCE ONLY):
Strictly Historical High Renaissance.
ABSOLUTELY NO MODERN CLOTHING. No blazers, no suits, no t-shirts.
Look like a painting by Bronzino or Titian.
Pose is confident, intimidating, and intellectual.
`
  };

  // -------------------------------
  // 5. SELECCIÓN DE LÓGICA
  // -------------------------------
  let config;
  if (style === "musa") config = musaConfig;
  else if (style === "empoderada") config = empoderadaConfig;
  else config = realezaConfig; // Default Realeza

  // Selecciones aleatorias dentro del estilo
  const palette = randomPick(config.palettes);
  const silhouette = randomPick(config.silhouettes);
  const scene = randomPick(config.scenes);
  const fabric = config.fabrics;
  
  // -------------------------------
  // 6. CÁMARA Y ENCUADRE (Adaptado a Grupos)
  // -------------------------------
  let framing;
  if (group) {
    // Si es grupo, alejar la cámara para que quepan todos
    framing = weightedPick([
      { value: "wide-angle group portrait, full composition, no heads cut off", w: 70 },
      { value: "medium-shot group tableau, waist up, everyone visible", w: 30 }
    ]);
  } else {
    // Individual
    framing = "waist-up classic portrait, centered composition";
  }

  // -------------------------------
  // 7. NEGATIVOS (DUROS)
  // -------------------------------
  const negativePrompt = `
NEGATIVE PROMPT / AVOID:
(Modern clothing, business suits, blazers, modern makeup, lipstick gloss)
(Distorted faces, melted faces, merging bodies, extra limbs, missing limbs)
(Recasting, changing race, changing age, changing gender)
(Anime, cartoon, 3d render, sketch, vector)
(Text, watermark, signature, bad anatomy)
`;

  // -------------------------------
  // 8. CONSTRUCCIÓN DEL PROMPT FINAL
  // -------------------------------
  return `
Role: You are a master portraitist from the classical era creating a high-fidelity oil painting.
Format: 8k resolution, museum quality, oil on linen canvas.

${hardIdentity}
${hairLock}

${group ? groupProtocol : soloProtocol}

STYLE: ${config.archetype}
${config.core}

SUBJECT APPEARANCE & WARDROBE:
- Attire: ${silhouette}.
- Fabrics: ${fabric}.
- Color Palette: ${palette}.
${style === "realeza" ? `- Regalia/Jewelry: ${config.regalia}` : ""}
${style === "empoderada" ? `- Prop/Symbol: ${config.powerSymbol}` : ""}

SETTING & ATMOSPHERE:
- Location: ${scene}.
- Lighting: ${config.lighting}.
- Framing: ${framing}.

TECHNICAL INSTRUCTIONS:
- Brushwork: refined, layered glazes, realistic texture.
- Skin: natural skin texture, not plastic, not airbrushed.
- Eyes: sharp, focused, distinct.

${negativePrompt}
`;
};
