// ARCHIVO: mascotas.js
// CATEGORÍA: Mascotas (PET-FIRST) - V7.0 (WOW + WALL ART LOCK)
// Meta: Old-Master oil portrait as PHYSICAL CANVAS artwork (museum-grade), made to hang in a living room.
// Fixes: stronger VALUE control, fewer random choices, stricter identity/count lock, better group choreography, less “AI look”.

const masterPrompt = require('./masterPrompt');

module.exports = function (style, numSubjects, isGroup) {
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isMulti = (Number(numSubjects) > 1) || !!isGroup;

  // =========================
  // 0) NON-NEGOTIABLES (Short, violent, absolute)
  // =========================
  const NON_NEGOTIABLES = `
🔴 NON-NEGOTIABLES (FAIL = REJECT OUTPUT):
- COUNT LOCK: Render EXACTLY ${numSubjects} total subject(s). No extra heads. No missing subjects. No duplicates.
- IDENTITY LOCK: Keep the SAME individuals from the input photo(s). Preserve exact face shape, eye shape, eye color, coat/skin markings, scars/spots, ear shape, muzzle length, whisker pattern, fur direction.
- NO COLLAGE: Do NOT paste or stitch input photos. Create ONE coherent painted scene with consistent lighting and perspective.
- PET-FIRST: If pets exist, they are the monarch(s). Humans/children support the story—never steal the center.
- NO WATERMARKS / NO TEXT / NO LOGOS / NO BORDERS / NO FRAMES inside the image.
`;

  // =========================
  // 1) STYLE PRESETS (Less random, more “sellable”)
  // =========================
  const STYLE_PRESETS = {
    realeza: {
      label: "ROYAL HEIRLOOM PORTRAIT (Old-Master, high prestige)",
      palette: "deep crimson, antique gold, warm umber shadows, soft ivory highlights",
      robe: "deep crimson velvet mantle with ermine trim, heavy realistic folds, expensive not costume",
      jewel: "refined gold chain with a single modest medallion (one statement piece only)"
    },
    barroco: {
      label: "BAROQUE ARISTOCRAT (dramatic power, chiaroscuro)",
      palette: "onyx black, midnight blue, bronze, warm shadow browns",
      robe: "midnight velvet cloak with subtle antique-gold embroidery, thick fabric weight",
      jewel: "one dark gemstone brooch (small, elegant, not glitter)"
    },
    renacimiento: {
      label: "RENAISSANCE ELEGANCE (warm, timeless, tender luxury)",
      palette: "earth greens, terracotta, antique gold, pearl highlights",
      robe: "warm terracotta or moss velvet drape, soft painterly folds, refined and organic",
      jewel: "short pearl strand OR aged gold locket (tiny, natural scale)"
    }
  };

  const styleMapping = {
    realeza: "realeza",
    rey: "realeza",
    barroco: "barroco",
    renacimiento: "renacimiento"
  };

  const targetStyle = styleMapping[style] || "realeza";
  const preset = STYLE_PRESETS[targetStyle];

  // =========================
  // 2) THRONE + BACKGROUND (What your refs are actually doing)
  // =========================
  const throneProps = [
    "a grand antique velvet cushion-throne with heavy compression folds; the subject’s weight visibly sinks the fabric, with realistic creases and tension",
    "a baroque brocade dais pillow with gold tassels and rope trim; the body pressure creates believable dents and fabric stress",
    "a museum-grade upholstered ottoman draped with velvet + silk layers; edges never float, everything has gravity"
  ];

  const backgrounds = [
    "a dark Old-Master studio backdrop with a warm olive/umber/charcoal gradient, subtle vignette, and faint aged texture",
    "a shadowy painter’s backdrop with atmospheric depth; background stays quiet and understated, never busy",
    "a timeless Old-Master background with soft haze separation behind the subjects (no modern scenery)"
  ];

  // =========================
  // 3) VALUE + LIGHT (The real “wow engine”)
  // =========================
  const lighting = `
🎨 VALUE + LIGHT (MAKE IT LOOK EXPENSIVE):
- Chiaroscuro Old-Master: background dark, subject luminous. Clear value separation (silhouette reads from 10 feet away).
- One motivated key light from 3/4 front side. Soft falloff. No flat lighting.
- Shadows are warm and detailed (no crushed blacks). Dark fur retains texture.
- Subtle rim/bounce to separate fur/skin from background (NO halo outline).
- EYES SELL: crisp wet specular catchlight, sharp iris detail, micro-contrast around eyelids/tearline, natural gaze (not cross-eyed).
`;

  // =========================
  // 4) COMPOSITION (Wall-art readable, not chaotic)
  // =========================
  const composition = isMulti
    ? `
🧠 GROUP COMPOSITION (ELEGANT, READABLE, SELLABLE):
- Arrange subjects in a clean pyramid/arc. No chaotic stacking.
- Every face must be fully readable: no cropped ears, no hidden snouts, no cut-off heads.
- Depth staging: primary subject slightly forward; others staggered behind with gentle overlap.
- Interaction: subtle touch/close bond (paws touching, child hand resting gently), never comedic.
- Consistent scale and perspective across all subjects (no “giant head” errors).
`
    : `
🧠 SOLO COMPOSITION (ICONIC):
- Regal, calm posture. Strong silhouette. Slight head turn toward the key light.
- Eyes are the focal point. Everything supports the face.
`;

  // =========================
  // 5) HUMAN LOGIC (Only if humans are included in the input)
  // =========================
  const humanLogic = `
👤 HUMANS (ONLY IF HUMANS EXIST IN INPUT):
- Humans are part of the ${numSubjects} total. No extra people added.
- Wardrobe: understated period-inspired clothing. Adults in dark refined fabrics; children/babies in soft cream/ivory linen/silk.
- Placement: humans slightly behind/beside the pet(s), never centered above the pet’s face.
- Skin: natural texture, not plastic. Preserve identity (no “beauty face swap”).
`;

  // =========================
  // 6) MATERIAL TRUTH (The textures that convince buyers)
  // =========================
  const materialTruth = `
✨ MATERIAL TRUTH (WHAT MAKES PEOPLE BUY):
- Fur: individual strands where needed, correct growth direction, accurate markings; soft tactile realism.
- Velvet: heavy light-absorbing velvet with controlled highlights, deep folds, real weight.
- Ermine/Fur trim: believable, not noisy, not synthetic.
- Metals/Jewels: crisp specular highlights, real reflections, NEVER glitter.
- Cushion/Throne: gravity + pressure = dents, creases, and fabric tension (no floating body).
`;

  // =========================
  // 7) PHYSICAL ART FINISH (Kill the “AI look”)
  // =========================
  const physicalFinish = `
🖼️ PHYSICAL ARTWORK FINISH (NOT DIGITAL):
- A museum-grade oil painting photographed as a real physical canvas/linen artwork.
- Subtle canvas weave + micro varnish sheen + extremely subtle aged patina/craquelure (tasteful, not heavy).
- Brushwork: controlled Old-Master realism. Sharp only where it matters (eyes/nose/whiskers), softer painterly falloff elsewhere.
- No hyper-HDR, no over-sharpening, no plastic highlights.
`;

  // =========================
  // 8) FRAMING (Ad-friendly but wall-art first)
  // =========================
  const framing = isMulti
    ? "**FRAMING:** 4:5 vertical, group portrait. Slightly wider to include throne + full silhouettes + clean negative space."
    : "**FRAMING:** 4:5 vertical, solo portrait. Head + upper body with breathing room, gallery-ready negative space.";

  // =========================
  // 9) HARD NEGATIVES (Common failure modes)
  // =========================
  const negatives = `
🚫 HARD NEGATIVES (DO NOT):
- extra animals/people, missing subjects, duplicated faces
- collage, split-screen, stitched photos, pasted inputs, multiple panels
- cartoon, anime, CGI, “AI illustration look”, plastic skin, neon, glitter, cheap costume
- modern objects (phones, leashes, sunglasses), modern clothing (hoodies, tshirts)
- text, logos, watermarks, signatures, borders, frames inside the image
- warped anatomy, melted fur, floating paws, broken whiskers, cross-eyed gaze
`;

  // =========================
  // 10) POSE LOGIC (Controlled, sellable)
  // =========================
  const poseLogic = isMulti
    ? "All subjects posed calmly and regally; faces oriented toward the light/camera with natural overlap and clear separation."
    : pick([
        "noble sphinx pose, chest forward, calm confidence, paws relaxed",
        "regal seated pose like a statue, slight head turn toward the key light",
        "dignified lounge on the cushion, weight sinking naturally, relaxed but powerful"
      ]);

  // =========================
  // 11) FINAL STYLE DESCRIPTION (The actual prompt payload)
  // =========================
  const styleDescription = `
${NON_NEGOTIABLES}

**AESTHETIC GOAL:** ${preset.label}. A priceless heirloom portrait designed to hang in a living room.
**SUBJECTS:** Render EXACTLY ${numSubjects} subject(s). Preserve identity with forensic accuracy.
**THRONE:** ${pick(throneProps)}.
**BACKGROUND:** ${pick(backgrounds)}.
**COLOR PALETTE:** ${preset.palette}.
**WARDROBE/DRAPE:** ${preset.robe}.
**JEWELRY:** ${preset.jewel}.

${composition}
${lighting}
${materialTruth}
${physicalFinish}
${isMulti ? humanLogic : ""}

✅ FINAL QUALITY GATE:
- Eyes feel alive and sharp.
- Strong silhouette and clean negative space.
- No AI artifacts.
- One coherent scene, museum-grade wall art.
${negatives}
`;

  return masterPrompt(numSubjects, styleDescription, `${framing} ${poseLogic}`);
};
