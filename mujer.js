// ARCHIVO: mujer.js
// V104: IDENTIDAD (LOCK) + WOW VARIATION ENGINE + RESET POR NUEVO SUJETO
// Objetivo: misma mujer reconocible, pero cada "repeat" sea una interpretación distinta y coleccionable.

module.exports = function(style, numSubjects, isGroup) {

  // --- 0) MOTOR DE VARIACIÓN (CAMBIA TODO SIN TOCAR IDENTIDAD) ---
  // Nota: esto fuerza diversidad en composición, luz, emoción, etc.
  // Si tu pipeline permite, puedes reemplazar randomPick por un seed determinístico.
  function randomPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const pose = randomPick([
    "standing in elegant contrapposto, shoulders relaxed, chin subtly lifted",
    "seated on a carved chair, one hand resting softly on the armrest",
    "leaning slightly against a column with composed confidence",
    "walking slowly with a gentle turn of the torso, fabric flowing",
    "three-quarter pose, head turned over-the-shoulder with a captivating gaze",
    "profile-to-3/4 transition pose, refined neck line, calm poise"
  ]);

  const cameraAngle = randomPick([
    "eye-level classical portrait angle",
    "slightly low-angle hero shot (subtle, not exaggerated)",
    "soft high-angle (flattering, collector portrait feel)",
    "three-quarter camera placement with gentle perspective"
  ]);

  const crop = randomPick([
    "intimate head-and-shoulders portrait (collector close-up)",
    "waist-up portrait with couture emphasis",
    "three-quarter length portrait showing drapery and posture",
    "full-figure portrait with grand environment scale"
  ]);

  const lightingScenario = randomPick([
    "candlelit masterwork glow, warm highlights and deep painterly shadows",
    "window side-light with soft falloff, luminous skin glow (Rembrandt-inspired)",
    "backlit halo rim-light, ethereal separation from background",
    "palace skylight illumination, crisp luxurious reflections on satin",
    "stormy ambient light with dramatic breaks of illumination on the face",
    "torch-lit interior ambiance, golden accents on jewelry and fabric"
  ]);

  const microExpression = randomPick([
    "serene and regal, calm eyes, subtle softness in the mouth",
    "confident and magnetic, slight smirk, unwavering gaze",
    "contemplative and poetic, softened eyes, quiet dignity",
    "warm subtle smile, approachable luxury, collector-friendly charm",
    "fierce commanding gaze, power and presence without aggression"
  ]);

  const hairDynamics = randomPick([
    "soft wind-blown hair, natural movement, painterly strands",
    "refined pinned hairstyle with a few loose curls framing the face",
    "loose waves with gentle volume, elegant and timeless",
    "braided detail with subtle ornamental accents (period appropriate)",
    "smooth pulled-back hair highlighting facial structure"
  ]);

  const brushworkEnergy = randomPick([
    "calm layered glazes with subtle texture, museum conservator quality",
    "bold expressive strokes in fabric and background, ultra-detailed facial rendering",
    "visible impasto highlights on jewelry and folds, painterly richness",
    "delicate sfumato transitions with confident strokes in hair and cloth"
  ]);

  const paletteAccent = randomPick([
    "antique gold accents and ivory highlights",
    "deep sapphire and champagne highlights",
    "crimson and obsidian with warm gold leaf notes",
    "emerald and rose quartz with soft pearl tones",
    "midnight blue with silver-gold filigree accents"
  ]);

  // --- 1) DEFINICIÓN DE ESTILOS (BASE) ---
  let stylePrompt = "";

  if (style === "musa") {
    stylePrompt = `
ARTISTIC DIRECTION: Ethereal Pre-Raphaelite Muse inspired by John William Waterhouse.
Mood: poetic, luminous, timeless beauty — aspirational, romantic, collectible.
Wardrobe: flowing silk and chiffon robes, botanical embroidery, floral crown or hair accents.
Palette: emerald green, dusty rose, antique gold.
Background: dreamlike lake garden, twilight foliage, soft atmospheric depth.
`;
  } else if (style === "realeza") {
    stylePrompt = `
ARTISTIC DIRECTION: Imperial Grand Portrait in the style of Winterhalter court paintings.
Mood: absolute authority, luxury, dynastic elegance — maximum status.
Wardrobe: heavy satin and velvet royal gown, jewel embroidery, diamond tiara (mandatory), royal sash.
Palette: sapphire blue, crimson, ivory, gold leaf.
Background: opulent baroque palace interior, marble columns, drapery, chandeliers.
`;
  } else if (style === "empoderada") {
    stylePrompt = `
ARTISTIC DIRECTION: Historical Vogue Power Portrait inspired by Sargent and Boldini.
Mood: dominance, confidence, magnetic presence — she owns the room.
Wardrobe: sculptural couture silhouette, velvet/silk power styling, optional gloves.
Palette: obsidian black, oxblood red, champagne highlights.
Background: dark aristocratic curtains or abstract luxury textures.
`;
  } else {
    // fallback seguro
    stylePrompt = `
ARTISTIC DIRECTION: Museum-grade classical oil portrait.
Mood: timeless elegance, collector appeal, premium fine art.
Wardrobe: historically inspired couture (no modern casual clothing).
Background: tasteful painterly environment with depth and atmosphere.
`;
  }

  // --- 2) COMPOSICIÓN / JERARQUÍA ---
  let framing = "";

  if (numSubjects > 1) {
    framing = `
COMPOSITION: multi-figure museum portrait.
Include ALL ${numSubjects} subjects and pets from the reference image.
Hierarchy: main woman is protagonist — best lighting, central placement, strongest presence.
Arrangement: classical triangular Renaissance grouping, balanced spacing.
Framing: ${crop}.
Camera: ${cameraAngle}.
Pose direction: protagonist is ${pose}. Others complement her without stealing focus.
Depth staging: protagonist foreground, others slightly behind with softer contrast.
`;
  } else {
    framing = `
COMPOSITION: solo masterpiece portrait.
Framing: ${crop}.
Camera: ${cameraAngle}.
Pose: ${pose}.
Expression: ${microExpression}.
Hair: ${hairDynamics}.
`;
  }

  // --- 3) PROMPT MAESTRO (IDENTIDAD + WOW) ---
  return `
You are a world-class classical portrait painter producing a **museum-grade oil painting on linen canvas** intended for private collectors.

ASPECT RATIO: vertical 4:5.

PRIMARY GOAL:
The woman must instantly recognize herself and feel elevated, powerful and beautiful enough to purchase the artwork.

IDENTITY LOCK — CRITICAL (DO NOT BREAK):
Preserve the exact facial identity from the reference:
- facial proportions (eye spacing, nose bridge shape, nostril width, lip curvature)
- bone structure (jaw width, cheekbone height, chin shape)
- eyelids and brows (fold, thickness, natural arch)
- age consistency (do not change age)
- skin tone consistency (enhance via light, not recoloring)
Beautification is allowed ONLY through:
- flattering painterly lighting
- refined skin texture (no plastic)
- subtle color harmony
Never reshape anatomy into a generic face.

SUBJECTS & INCLUSION:
Input has ${numSubjects} subject(s). Include EVERY person and pet found in the reference.
No missing people. No missing pets.

SCENE (STYLE):
${stylePrompt}

COMPOSITION (HIERARCHY):
${framing}

WOW VARIATION ENGINE — MUST APPLY:
Each repeat/render MUST be a meaningfully different masterpiece interpretation while keeping identity locked.
Change strongly across runs (do not reuse same combination):
- lighting scenario: ${lightingScenario}
- secondary palette accent: ${paletteAccent}
- brushwork energy: ${brushworkEnergy}
- background staging must differ significantly from previous renders (new arrangement, depth, props, atmosphere)
- do NOT repeat the same pose + crop + lighting combo.

RESET RULE FOR NEW PERSON:
When a different reference person is uploaded:
Rebuild the entire composition from scratch (pose, crop, lighting, background) — do NOT reuse the previous scene.
Only keep the identity lock for the new subject.

PAINTING EXECUTION:
Medium: authentic oil on canvas, layered glazing + controlled impasto highlights.
Ultra-detailed eyes and facial planes.
Hands must be anatomically correct and elegant.
Fabric physics must be natural (no costume look).
Jewelry must look real, with believable reflections and weight.

WARDROBE TRANSFORMATION:
Replace modern clothing with historically appropriate couture matching the selected style.
No modern casual clothing. No cheap cosplay. High-end, tailored, believable textiles.

NEGATIVE RULES (STRICT):
Do not alter identity.
No cartoon. No anime. No CGI. No 3D render.
No plastic skin. No over-smoothing.
No face swap artifacts. No extra people. No missing limbs.
No distorted hands. No modern clothing.
No text, logos, watermarks, frames, UI.
`;
};
