// ARCHIVO: styles/renacimiento.js
// ESTILO: "Jardín Dorado" — V8.1
// Mood: noble, cálido, accesible — el más regalable del catálogo
// Referencia visual: Gainsborough, Lawrence, jardines del siglo XVIII

const { pick } = require('../utils/pick');

module.exports = function renacimiento(gender) {

  const palettes = [
    "Soft Emerald Green + Antique Gold + Warm Ivory + Umber shadow depth",
    "Dusty Sage + Champagne Gold + Pearl Cream + Warm Brown shadows",
    "Forest Green + Burnished Gold + Bone White + Rich Earth tones"
  ];

  const backdrops = [
    "a sunlit palace garden backdrop: soft-focus stone balustrade with climbing roses suggested in the distance, warm morning light filtering through tall oaks from the upper-left — background is entirely soft focus, an atmospheric golden-green haze. NO sharp background details. Pure painterly atmosphere.",
    "a luminous garden terrace: warm ivory stone columns barely suggested in deep bokeh, dappled golden morning light creating natural depth — the background is pure Gainsborough haze, green and gold and absolutely out of focus",
    "a romantic manor garden: ancient oak trees in soft atmospheric blur, warm golden morning light backlighting the foliage edges creating a glowing corona — lush color but zero competing detail"
  ];

  const wardrobe_neutral = [
    "a rich forest-green velvet cape draped loosely open across the shoulders — fully revealing the chest and natural fur. The cape has REAL WEIGHT: pile direction visible, deep fold shadows, the hem pools behind. ONE antique gold leaf-motif brooch at the shoulder. Painted with broad confident strokes, the velvet's pile catching light on its raised surface.",
    "a deep emerald velvet mantle pinned only at the throat, cascading open behind — the front entirely open showing the natural chest. Gold chain border along the edge catches the morning light in thick impasto strokes. The fabric's weight pulls it down naturally.",
    "a dark olive-green brocade cape worn open at the front — showing the full natural chest. Subtle gold embroidery at the collar, each thread catching light individually. The animal's fur is the centerpiece, the cape merely frames it."
  ];

  const wardrobe_masculine = [
    "a deep forest-green velvet doublet worn OPEN at the chest — natural fur fully visible underneath. Heavy gold epaulettes at the shoulders. Masculine, commanding. The velvet has real pile depth painted with directional brushstrokes.",
    "a hunter-green brocade coat, tailored but open — gold button details and a heavy gold medallion on the chest. Coat falls open naturally. The brocade pattern is visible but not dominating."
  ];

  const wardrobe_feminine = [
    "a soft sage-green silk cape trimmed with delicate gold leaf embroidery — draped elegantly across the shoulders, fully open at the front. A single pearl-and-gold brooch at the collar. The silk sheen is painted with long smooth strokes contrasting against the fur's texture.",
    "an emerald green velvet mantle with champagne gold lace trim — feminine and noble, open front with gentle drape. A small floral gold coronet if anatomy allows."
  ];

  const accessories_neutral = [
    "a delicate antique gold chain collar with a single sun-motif medallion — light, elegant. The gold is painted with warm impasto highlights on the raised surfaces, cooler glaze in the recesses.",
    "a small nature-inspired gold brooch (oak leaf motif) as the single accent — each carved detail catching the morning light",
    "a thin woven gold cord collar — minimal, refined, a single glinting line against the fur"
  ];

  const accessories_masculine = [
    "a heavy gold medallion on the chest — center of visual gravity. The gold is painted with thick warm impasto on light-struck surfaces, deep amber glaze in the engraved recesses. It has WEIGHT.",
    "a gold and leather collar with a shield-shaped pendant — masculine and grounded, the leather matte against the gold's shine"
  ];

  const accessories_feminine = [
    "a delicate pearl-and-gold collar piece — each pearl a small sphere of luminosity against the fur. Light, elegant, feminine.",
    "a small floral gold coronet sitting naturally on the head — if anatomy allows. Refined, not costume."
  ];

  const lighting = [
    "**GAINSBOROUGH MORNING LIGHT:** Soft directional light from the upper-LEFT at roughly 10 o'clock. Warm golden temperature (4500K). The light enters the scene like morning sun through trees — not harsh, not flat, but beautifully modeled. The FUR is the primary recipient: each strand in the light zone catches warmth individually. The EYES receive the light as a single small controlled catchlight at upper-left. The shadow side of the face is warm and luminous — lit by garden ambient, never dead. Background receives LESS light than the subject — the subject GLOWS relative to its surroundings.",
    "**GOLDEN HOUR GARDEN LIGHT:** Warm angled morning sun from side-front (upper-left). The light crowns the top of the head and one shoulder. Eyes sparkle. Shadows are long and clean — warm in the lights, cool-green in the shadows for painterly contrast. The medallion or brooch catches a bright impasto highlight.",
    "**SOFT GARDEN DAYLIGHT (LARGE SOURCE):** A large, beautifully diffused natural light — overcast garden morning with the sun behind clouds. Slightly stronger from the left. Reveals fur texture in extraordinary detail — every strand visible in the light zones. Eyes are fully readable, alive, depth visible. The most flattering light in the catalog."
  ];

  const poses_dog = [
    "seated with alert noble posture — head high, ears naturally positioned, a slight curious tilt. One front paw slightly advanced. Tail settled. Body weight natural. The CHEST is open and forward.",
    "3/4 seated — body angled slightly away, face turning directly toward viewer. The classic aristocratic portrait pose. Creates depth and engagement simultaneously.",
    "relaxed sphinx pose on the garden cushion — front paws extended elegantly, chest visible, head erect. The pose of a dog that has always known its worth."
  ];

  const poses_cat = [
    "seated upright with perfect natural posture — tail wrapped around front paws, chest open, gaze direct and imperious. The natural regal cat pose requiring zero adjustment.",
    "3/4 seated, body turned slightly, head angled toward viewer — one ear slightly forward, the other relaxed. Quietly commanding.",
    "loaf position elevated on the garden cushion — paws tucked, perfectly composed, gaze level and confident. Serene authority."
  ];

  const props = [
    "a large garden cushion in deep burgundy velvet with gold tassel trim at each corner — the velvet painted with directional brushstrokes showing pile direction, the tassels in warm gold impasto",
    "an ornate stone garden bench with velvet cushion — weathered stone base with moss suggestions in the shadows, luxurious velvet seat",
    "a plush emerald velvet cushion with gold fringe — substantial, throne-like, positioned on a garden terrace stone surface"
  ];

  const selectedWardrobe = gender === 'masculine'
    ? pick(wardrobe_masculine)
    : gender === 'feminine'
      ? pick(wardrobe_feminine)
      : pick(wardrobe_neutral);

  const selectedAccessory = gender === 'masculine'
    ? pick(accessories_masculine)
    : gender === 'feminine'
      ? pick(accessories_feminine)
      : pick(accessories_neutral);

  const genderPoseNote = gender === 'masculine'
    ? "**MASCULINE ENERGY:** Posture projects strength. Broad chest forward. Direct, authoritative gaze."
    : gender === 'feminine'
      ? "**FEMININE ENERGY:** Posture is graceful and composed. Warm, serene gaze with quiet dignity."
      : "";

  return {
    name: "Jardín Dorado",
    role: "**JARDÍN DORADO — Morning Light Aristocratic Garden Portrait**\nMood: Noble, warm, luminous. The most emotionally accessible style in the catalog.\nReference energy: Gainsborough's aristocratic garden portraits — warm light, green atmosphere, timeless dignity.",
    palette: pick(palettes),
    backdrop: pick(backdrops),
    wardrobe: selectedWardrobe,
    accessory: selectedAccessory,
    lighting: pick(lighting),
    poses_dog: poses_dog,
    poses_cat: poses_cat,
    props: pick(props),
    genderNote: genderPoseNote,
    mood: `**STYLE SIGNATURE & HERO DETAIL:** The single most important element in this painting is a RAY OF GOLDEN MORNING LIGHT landing across the subject's fur — visible as individual illuminated strands, painted with thin warm glazes over a lighter ground. This ray must appear to travel THROUGH the scene, not just illuminate from above. The owner should feel their pet belongs in Versailles. This style converts on emotion — it feels like the most beautiful gift imaginable.`
  };
};
