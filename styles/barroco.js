// ARCHIVO: styles/barroco.js
// ESTILO: "Gran Maestro Oscuro" — V8.1
// Mood: el más artístico, sofisticado — apela al comprador que quiere ARTE
// Referencia visual: Rembrandt van Rijn — Dutch Golden Age

const { pick } = require('../utils/pick');

module.exports = function barroco(gender) {

  const palettes = [
    "Near-Black + Warm Umber + Burnished Antique Gold + Deep Shadow Brown — candlelight warmth",
    "Onyx + Bronze + Dark Chocolate + Amber light — Rembrandt's own palette",
    "Midnight Brown + Oxidized Gold + Warm Ivory light + Deep Cool shadows"
  ];

  const backdrops = [
    "an atmospheric near-black void: NOT flat black — layered darkness with warm umber undertones, subtle painterly brushwork visible in the deepest zones. A warm amber haze emanates from BEHIND the subject's head and shoulders, painted as a loose glowing corona of warm paint. This is Rembrandt's studio darkness — infinite, expensive, alive.",
    "deep rich brown atmospheric background — the color of aged oak and old varnish. No detail, no structure. Pure tonal depth. A barely visible warm light source suggested far behind the subject. The darkness feels old, not empty.",
    "absolute tonal darkness with a single warm light zone centered on the subject — periphery fades to near-black with warm brown undertones. The background feels infinite — like the darkness in Rembrandt's late self-portraits."
  ];

  const wardrobe_neutral = [
    "a heavy dark velvet cloak — near-black with subtle dark burgundy undertone — draped loosely off shoulders, completely open at the front revealing the natural chest. REAL WEIGHT: visible pile direction, deep fold shadows painted with dark glazes, the raised peaks catching candlelight in warm impasto strokes.",
    "a dark baroque academic robe: black velvet with subtle gold threading at the collar — worn open, cascading behind. The collar frames the neck and face. The gold thread is painted as individual warm impasto lines against the dark ground.",
    "a dramatic dark cape in deep charcoal velvet — clasped at throat with single antique gold pin, falling open to reveal the full chest. Peak-fold surfaces catch candle in thick warm impasto. Recesses are deep cool-dark glazes."
  ];

  const wardrobe_masculine = [
    "a black velvet doublet worn OPEN — the classic Dutch Golden Age merchant-aristocrat. Dark, serious, expensive. A heavy gold chain of state crosses the chest — each link painted individually with warm impasto highlights and dark recesses. The chain has PHYSICAL WEIGHT.",
    "a dark burgundy velvet coat, collar turned up — masculine and brooding. Open chest. A single thick gold medallion on a heavy chain. The medallion is the only warm light in the composition."
  ];

  const wardrobe_feminine = [
    "a black satin baroque gown with pearl-white lace collar — the lace is the LIGHT of the composition, painted with delicate thin white strokes against the dark gown. Classic Rembrandt female portrait energy.",
    "a deep charcoal velvet cape with pearl necklace — the pearls catching candle light as small luminous spheres, each painted with a single impasto highlight and a dark glaze below. Pearl against dark: maximum elegance."
  ];

  const accessories_neutral = [
    "a single heavy antique gold medallion on a thick chain — oxidized edges painted with cool dark glazes, the raised engraved face caught in warm candlelight impasto. Visibly old. Visibly valuable. This is the HERO DETAIL of the composition.",
    "a simple antique gold chain with a dark gemstone pendant (deep amber or onyx) — the stone painted with deep glazes, a single bright catchlight at its surface",
    "a scholar's gold seal ring visible on one paw — one warm impasto highlight on the signet face"
  ];

  const accessories_masculine = [
    "a heavy gold chain of state — multiple thick links each painted with warm upper-surface impasto and cool dark glaze in the recesses. The chain catches candlelight link by link. It has weight.",
    "a single massive gold medallion with an engraved crest — the center of gravity in the entire composition. The engraving detail is caught in raking candlelight."
  ];

  const accessories_feminine = [
    "a single strand of large pearls — each pearl a small world of luminosity against the dark wardrobe. Painted with a single bright impasto highlight and a subtle darker glaze below. Classic Rembrandt female portraiture.",
    "pearl drop earrings if the ear is accessible — subtle warm sparkle against the near-black background"
  ];

  const lighting = [
    "**REMBRANDT MASTER LIGHT (CANONICAL):** Single directional light source from the UPPER-LEFT at 45°, slightly above eye level. Creates the classic Rembrandt triangle: a small triangle of light on the shadow-side cheek beneath the eye. The ILLUMINATED SIDE of the face is fully lit — every individual fur strand visible, the eye alive with depth. The SHADOW SIDE is in warm rich umber — NOT dead black, but deep warm form that still shows structure. The CHEST and MEDALLION catch the light below the face — painted in warm gold impasto. Everything else recedes into darkness. This is the most dramatically alive light ever invented for portraiture.",
    "**CARAVAGGIO SHAFT LIGHT:** A single powerful beam descends from ABOVE-RIGHT as if through a high studio window. It strikes the top of the head, face, and chest with intense warmth. The fur edges catch the light like a halo painted in thin warm glazes. Everything else is in profound shadow. Maximum drama.",
    "**CANDLE PORTRAIT LIGHT:** Warm intimate candle temperature (2800K) from BELOW-FRONT — as if a candle sits at desk level before the subject. Creates upward-angled soft shadows. The GOLD MEDALLION is lit first — it catches the flame before the face. The face second. Everything else in shadow. Ancient, intimate, irreplaceable."
  ];

  const poses_dog = [
    "seated 3/4 position emerging from darkness — the body barely defined in warm shadow, the face and chest fully illuminated. Head slightly turned toward the light source. The pose of a dog painted by a master.",
    "seated full-face forward — direct unflinching gaze into the light. The animal confronts the viewer across centuries. Maximum psychological presence.",
    "slightly relaxed seated pose — settled, not stiff. One ear slightly forward. The light catches the EYES first, then the medallion. Everything else is shadow."
  ];

  const poses_cat = [
    "seated with characteristic feline stillness, half-turned toward the light — the classic Rembrandt portrait angle where one eye catches full light and the other is in soft shadow. Deeply psychological.",
    "direct frontal seated pose: the cat emerges from darkness, face fully to viewer, eyes carrying maximum intensity. The gaze of a creature that understands everything.",
    "slightly elevated seated position, chin raised slightly — looking past the viewer with aristocratic intelligence. The light catches one eye brilliantly. The other is a suggestion in shadow."
  ];

  const props = [
    "a dark mahogany and velvet cushion — the velvet near-black, absorbing light completely in its depths, catching warm candlelight only on the raised surface peaks. Simple, serious, museum-grade.",
    "a heavy dark velvet cushion with minimal oxidized gold trim — the darkness of the prop blends into the background making the subject appear to float in light",
    "an antique carved dark oak surface — simple, historical, anatomically grounding. The wood grain barely visible in the deepest shadows."
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
    ? "**MASCULINE BAROQUE ENERGY:** The scholar-patriarch. Serious, weighty. The darkness frames him as a figure of history."
    : gender === 'feminine'
      ? "**FEMININE BAROQUE ENERGY:** Intelligent, composed, luminous against the dark. The light favors her face."
      : "";

  return {
    name: "Gran Maestro Oscuro",
    role: "**GRAN MAESTRO OSCURO — Dutch Golden Age Master Portrait**\nMood: The most artistically serious style. Museum-grade darkness and light.\nReference energy: Rembrandt's late self-portraits — profound, alive, technically magnificent.",
    palette: pick(palettes),
    backdrop: pick(backdrops),
    wardrobe: selectedWardrobe,
    accessory: selectedAccessory,
    lighting: pick(lighting),
    poses_dog: poses_dog,
    poses_cat: poses_cat,
    props: pick(props),
    genderNote: genderPoseNote,
    mood: `**STYLE SIGNATURE & HERO DETAIL:** The single most important element in this painting is the GOLD MEDALLION — a heavy antique gold disc on a thick chain, its engraved face lit by candlelight in warm impasto, its oxidized edges receding into cool dark glaze. When the owner zooms in, they see individual engraving lines catching the flame. This is the detail that makes them screenshot the image. The owner should think: "this belongs in the Rijksmuseum." This style converts on artistic aspiration.`
  };
};
