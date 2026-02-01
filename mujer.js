// ARCHIVO: mujer.js
// V107: IDENTIDAD BIOMÉTRICA + CABELLO BLOQUEADO + VARIEDAD CONTROLADA POR ESTILO
// Objetivo: misma mujer reconocible, mismo cabello base, repeats distintos SIN perder musa / reina / empoderada.

module.exports = function(style, numSubjects, isGroup) {

  // -------------------------------
  // UTIL
  // -------------------------------
  function randomPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // -------------------------------
  // 🔒 BLOQUE DE CABELLO (NO CAMBIA CORTE / LARGO / TIPO)
  // -------------------------------
  const hairLock = `
HAIR LOCK — CRITICAL:
Preserve the SAME haircut, length, hairline and natural texture from the reference photo.
Do NOT change hairstyle category (straight/wavy/curly).
Do NOT shorten or lengthen.
Do NOT add bangs if absent.
Allowed only:
- subtle styling polish
- partial pinning
- gentle wind movement
- period-appropriate jewelry or crown placed over existing hair
`;

  // -------------------------------
  // VARIACIÓN GLOBAL SUAVE (NO rompe identidad ni estilo)
  // -------------------------------
  const pose = randomPick([
    "standing in elegant contrapposto",
    "seated in an aristocratic pose",
    "three-quarter turn with lifted chin",
    "slow walking motion with flowing fabric",
    "upright posture with hands gently posed"
  ]);

  const cameraAngle = randomPick([
    "eye-level classical portrait",
    "slightly low-angle heroic framing",
    "three-quarter camera placement"
  ]);

  const crop = randomPick([
    "waist-up portrait",
    "three-quarter length portrait",
    "full-figure with architectural scale"
  ]);

  const microExpression = randomPick([
    "calm authority",
    "poised confidence",
    "serene magnetism",
    "controlled power",
    "quiet dominance"
  ]);

  // -------------------------------
  // 🎨 PALETAS POR ESTILO (NO CRUZAR)
  // -------------------------------

  const musaPalettes = [
    "ivory, blush pink and antique gold",
    "lavender, pearl white and silver",
    "teal, coral and sunlit bronze",
    "rose quartz with warm ivory",
    "sage green with champagne accents"
  ];

  const royalPalettes = [
    "crimson and gold leaf",
    "sapphire blue and ivory",
    "black velvet with diamond highlights",
    "emerald and antique gold",
    "royal purple with silver filigree"
  ];

  const empoweredPalettes = [
    "obsidian black and champagne",
    "deep oxblood red and gold",
    "graphite gray and platinum",
    "midnight blue with sharp highlights",
    "espresso brown with bronze accents"
  ];

  // -------------------------------
  // 👗 SILUETAS POR ESTILO
  // -------------------------------

  const musaSilhouettes = [
    "flowing Greco-Roman draped gown",
    "empire-waist ethereal dress",
    "off-the-shoulder poetic robe",
    "layered chiffon mantle dress",
    "high-neck romantic robe with trailing sleeves"
  ];

  const royalSilhouettes = [
    "corseted court gown with cathedral skirt",
    "ball gown with embroidered train",
    "velvet mantle over structured bodice",
    "ermine-trimmed ceremonial cloak",
    "regal column dress with jeweled sash"
  ];

  const empoweredSilhouettes = [
    "sculptural couture gown with sharp lines",
    "structured velvet power dress",
    "tailored historical blazer-gown hybrid",
    "architectural corseted silhouette",
    "high-fashion asymmetrical statement gown"
  ];

  // -------------------------------
  // 👑 ESCENARIOS POR ESTILO
  // -------------------------------

  const musaScenes = [
    "misty dawn garden",
    "moonlit orchard",
    "twilight lake shore",
    "rose terrace at sunset",
    "forest clearing with glowing haze"
  ];

  const royalScenes = [
    "coronation throne room",
    "palace ballroom",
    "royal gallery corridor",
    "private audience chamber",
    "ceremonial balcony overlooking city"
  ];

  const empoweredScenes = [
    "dramatic velvet studio set",
    "grand staircase interior",
    "gallery-like power backdrop",
    "editorial stage with spotlight",
    "luxury penthouse window wall (painterly)"
  ];

  // -------------------------------
  // 🎯 SELECCIÓN POR ESTILO
  // -------------------------------

  let palette, silhouette, scene;

  if (style === "musa") {
    palette = randomPick(musaPalettes);
    silhouette = randomPick(musaSilhouettes);
    scene = randomPick(musaScenes);
  }

  else if (style === "realeza") {
    palette = randomPick(royalPalettes);
    silhouette = randomPick(royalSilhouettes);
    scene = randomPick(royalScenes);
  }

  else if (style === "empoderada") {
    palette = randomPick(empoweredPalettes);
    silhouette = randomPick(empoweredSilhouettes);
    scene = randomPick(empoweredScenes);
  }

  else {
    palette = randomPick(royalPalettes);
    silhouette = randomPick(royalSilhouettes);
    scene = randomPick(royalScenes);
  }

  // -------------------------------
  // PROMPT FINAL
  // -------------------------------

  return `
You are a world-class classical portrait painter producing a **museum-grade oil painting on linen canvas**.

ASPECT RATIO: vertical 4:5.

PRIMARY GOAL:
The woman must instantly recognize herself and feel elevated, powerful and worthy of collecting.

IDENTITY LOCK — CRITICAL:
Preserve facial proportions, bone structure, age and natural skin tone.
Beautify only through painterly light and texture.
Never reshape anatomy.

${hairLock}

SUBJECTS:
Input has ${numSubjects} subject(s). Include everyone and every pet.

STYLE ARCHETYPE — DO NOT BREAK:
${style === "musa" ? "She must feel ethereal, poetic, romantic and mythic." :
  style === "realeza" ? "She must feel imperial, dynastic, commanding, unquestionably royal." :
  "She must feel dominant, powerful, fashion-forward, intimidating in elegance."}

WARDROBE:
${silhouette}, executed in luxury fabrics and couture construction.
Color story: ${palette}.

SCENE:
${scene}.

COMPOSITION:
Pose: ${pose}.
Crop: ${crop}.
Camera: three-quarter classical framing.
Expression: ${microExpression}.

VARIATION RULE:
Change wardrobe, palette and environment each repeat,
BUT never violate the style archetype or hair lock.

PAINTING EXECUTION:
Oil on canvas.
Layered glazes.
Impasto highlights on jewels and folds.
Hands anatomically correct.
No costume look.

NEGATIVE RULES:
No identity change.
No haircut change.
No cartoon, anime, CGI, 3D.
No plastic skin.
No missing limbs.
No extra people.
No modern clothing.
No logos, text or frames.
`;
};
