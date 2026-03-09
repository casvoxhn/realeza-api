// ARCHIVO: styles/renacimiento.js
// ESTILO: "Jardín Dorado"
// Mood: noble, cálido, accesible — el más regalable del catálogo
// Referencia visual: Gainsborough, Lawrence, jardines del siglo XVIII
// Hora de luz: mañana dorada (4500K) — Vermeer + luz de jardín

const { pick } = require('../utils/pick');

module.exports = function renacimiento(gender) {

  const palettes = [
    "Soft Emerald Green + Antique Gold + Warm Ivory + Umber shadow depth",
    "Dusty Sage + Champagne Gold + Pearl Cream + Warm Brown shadows",
    "Forest Green + Burnished Gold + Bone White + Rich Earth tones"
  ];

  const backdrops = [
    "a sunlit palace garden backdrop: soft-focus stone balustrade with climbing roses, warm morning light filtering through tall trees from the left, atmospheric golden haze — background fully out of focus, subject pops with maximum separation",
    "a luminous garden terrace: warm ivory stone columns suggested in soft bokeh, dappled golden morning light creating natural depth — NO sharp background details, all atmosphere",
    "a romantic manor garden setting: ancient oak trees in soft focus, warm golden morning light backlighting the foliage edges, creating a glowing halo around the scene — lush but not distracting"
  ];

  const wardrobe_neutral = [
    "a rich forest-green velvet cape draped loosely open across the shoulders and back — fully revealing the chest and natural fur texture. The cape falls naturally with visible weight and pile direction. ONE gold leaf-motif brooch at the shoulder as the only fastening.",
    "a deep emerald velvet mantle pinned only at the throat, cascading behind the subject — open at the front to show the full chest. Heavy fabric pooling naturally. Antique gold chain border along the edge.",
    "a dark olive-green brocade cape, worn like a king's hunting mantle — open front, draped with natural gravity. Subtle gold embroidery at the collar. The animal's natural fur is the centerpiece."
  ];

  const wardrobe_masculine = [
    "a deep forest-green velvet doublet worn OPEN at the chest — showing the natural fur underneath. Heavy gold epaulettes at the shoulders. The garment reads as powerful and masculine without concealing the animal.",
    "a hunter-green brocade coat, tailored but open — masculine silhouette with gold button details and a heavy gold medallion on the chest. Coat falls open naturally revealing the subject's chest fur."
  ];

  const wardrobe_feminine = [
    "a soft sage-green silk cape trimmed with delicate gold leaf embroidery — draped elegantly across the shoulders, open at the front. A single pearl-and-gold brooch at the collar. Graceful and refined.",
    "an emerald green velvet mantle with champagne gold lace trim at the edges — feminine and noble. Open front with a gentle drape. A small floral gold coronet accessory if the subject's head allows."
  ];

  const accessories_neutral = [
    "a delicate gold chain collar with a single antique medallion — light, elegant, not heavy",
    "a small nature-inspired gold brooch (leaf or acorn motif) as the single accent piece",
    "a thin woven gold cord as a collar — minimal, refined, historically grounded"
  ];

  const accessories_masculine = [
    "a heavy gold medallion on the chest — center of gravity, weight visible",
    "a gold and leather collar with a shield-shaped pendant — masculine and grounded"
  ];

  const accessories_feminine = [
    "a delicate pearl-and-gold collar piece — light, elegant, feminine",
    "a small floral gold coronet sitting naturally on the head — if anatomy allows, subtle and refined"
  ];

  const lighting = [
    "**MORNING GARDEN LIGHT (VERMEER + GAINSBOROUGH):** Soft, directional morning light entering from the upper-left. Warm golden temperature (4500K). Creates gentle modeling on the face without harsh shadows. The subject is bathed in natural warmth — fur glows, eyes sparkle. Background receives less light, creating natural separation. Fill light from the right side (reflected garden ambient) keeps the shadow side luminous, never dead.",
    "**GOLDEN HOUR GARDEN LIGHT:** Warm, angled morning sun from side-front. The light kisses the top of the head and one shoulder, creating a natural crown of light. Eyes catch the warmth. Shadows are long and clean — warm in the lights, cool in the shadows for painterly depth.",
    "**SOFT GARDEN DAYLIGHT:** Large, diffused natural light source (overcast garden morning). Even but directional — slightly stronger from the left. Reveals fur texture beautifully without dramatic shadows. Eyes are fully readable and alive. The most flattering light in the catalog."
  ];

  const poses_dog = [
    "seated with alert, noble posture — head held high, ears naturally positioned, a slight tilt of the head suggesting intelligence and curiosity. One front paw slightly advanced. Tail settled neatly. Body weight resting naturally.",
    "3/4 seated position, body angled slightly away, face turning to look directly at the viewer — creating depth and engagement simultaneously. The classic aristocratic portrait pose.",
    "relaxed sphinx pose on a garden cushion — front paws extended elegantly, chest visible and proud, head erect and alert. The pose of a dog that knows its worth."
  ];

  const poses_cat = [
    "seated upright with perfect natural posture — tail wrapped around the front paws, chest open, gaze direct and imperious. The natural regal cat pose requiring no adjustment.",
    "3/4 seated, body turned slightly, head angled toward the viewer with characteristic feline composure — one ear slightly forward, the other relaxed. Quietly commanding.",
    "loaf position elevated on a garden cushion — paws tucked, perfectly composed, gaze level and confident. Serene authority."
  ];

  const props = [
    "a large velvet garden cushion in deep burgundy with gold tassel trim — subject seated upon it as on a garden throne",
    "an ornate stone garden bench with a velvet cushion — weathered stone base, luxurious seat, natural garden setting",
    "a plush emerald velvet cushion with gold fringe — substantial and throne-like, positioned on a garden terrace"
  ];

  // Select wardrobe and accessories based on gender
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
    ? "**MASCULINE ENERGY:** Posture projects strength and confidence. Broad chest forward. Direct, authoritative gaze."
    : gender === 'feminine'
      ? "**FEMININE ENERGY:** Posture is graceful and composed. Elegant neck line. Warm, serene gaze with quiet dignity."
      : "";

  return {
    name: "Jardín Dorado",
    role: "**JARDÍN DORADO — Morning Light Aristocratic Garden Portrait**\nMood: Noble, warm, accessible. The most giftable style in the catalog.\nReference energy: Gainsborough's Blue Boy meets a royal garden at dawn.",
    palette: pick(palettes),
    backdrop: pick(backdrops),
    wardrobe: selectedWardrobe,
    accessory: selectedAccessory,
    lighting: pick(lighting),
    poses_dog: poses_dog,
    poses_cat: poses_cat,
    props: pick(props),
    genderNote: genderPoseNote,
    mood: `**STYLE SIGNATURE:** Warm, painterly, luminous. The owner should feel their pet belongs in Versailles. The golden light makes everything precious. This style converts on emotion — it feels like a gift.`
  };
};
