// ARCHIVO: styles/barroco.js
// ESTILO: "Gran Maestro Oscuro"
// Mood: el más artístico, sofisticado — apela al comprador que quiere ARTE
// Referencia visual: Rembrandt van Rijn, Caravaggio — Dutch Golden Age
// Hora de luz: tarde de taller (3000K) — luz de vela/ventana norte

const { pick } = require('../utils/pick');

module.exports = function barroco(gender) {

  const palettes = [
    "Near-Black + Warm Umber + Burnished Antique Gold + Deep Shadow Brown — candlelight warmth",
    "Onyx + Bronze + Dark Chocolate + Amber light — Rembrandt's own palette",
    "Midnight Brown + Oxidized Gold + Warm Ivory light + Deep Cool shadows"
  ];

  const backdrops = [
    "an atmospheric near-black void: not flat black, but layered darkness with warm umber undertones — subtle painterly brushwork visible only in the deepest zones. A warm amber haze emanates from behind the subject's head and shoulders, creating a natural glow that separates them from the void. This is Rembrandt's studio darkness.",
    "a deep, rich brown atmospheric background — the color of aged oak and old varnish. No detail, no structure. Pure tonal depth with a barely visible warm light source suggested far behind the subject. Museum-grade emptiness.",
    "absolute tonal darkness with a single warm light zone centered on the subject — everything peripheral fades to near-black with rich warm undertones. The background feels infinite and expensive, like the darkness in a Rembrandt self-portrait."
  ];

  const wardrobe_neutral = [
    "a heavy dark velvet cloak — near-black with subtle dark burgundy undertone — draped loosely off the shoulders and falling behind, completely open at the front to reveal the subject's natural chest. The fabric has real weight: visible pile direction, deep shadow in the folds.",
    "a dark baroque academic robe: black velvet with subtle gold threading at the collar — worn open, cascading behind the subject. The collar frames the neck and face. Simple, serious, expensive.",
    "a dramatic dark cape in deep charcoal velvet — clasped only at the throat with a single antique gold pin, falling open to reveal the full chest. The fabric catches the candle light at its peaks and absorbs it completely in the folds."
  ];

  const wardrobe_masculine = [
    "a black velvet doublet worn OPEN — the classic Dutch Golden Age merchant-aristocrat. Dark, serious, expensive. A heavy gold chain of state crosses the chest — the single concession to wealth in an otherwise austere composition.",
    "a dark burgundy velvet coat, the collar turned up slightly — masculine and brooding. Worn open to show the natural chest. A single thick gold medallion on a heavy chain. The garment of a man of consequence."
  ];

  const wardrobe_feminine = [
    "a black satin baroque gown with a tasteful pearl-white lace collar — elegant severity that frames the face. The gown's bodice is dark, the lace collar is the light. Classic Rembrandt female portrait energy.",
    "a deep charcoal velvet cape with a pearl necklace — the single light element against the darkness. Feminine and serious. The cape falls open naturally, the pearl necklace resting on the dark fabric catches the candle."
  ];

  const accessories_neutral = [
    "a single heavy antique gold medallion on a thick chain — oxidized edges, engraved face, visibly old and valuable. This is the hero detail of the composition.",
    "a simple antique gold chain with a dark gemstone pendant (deep ruby or onyx) — one object, maximum presence",
    "a scholar's gold seal ring visible on one paw — subtle, intellectual, historically grounded"
  ];

  const accessories_masculine = [
    "a heavy gold chain of state — multiple thick links, clearly weighing something, catching the candle light on the upper surfaces. The chains of a man of power.",
    "a single massive gold medallion with an engraved crest — heavy, old, important. The center of gravity in the entire composition."
  ];

  const accessories_feminine = [
    "a single strand of large pearls — luminous against the dark wardrobe. Each pearl catches the candle light differently. Classic Rembrandt female portraiture.",
    "pearl drop earrings visible if the ear is accessible — subtle controlled sparkle against the dark background"
  ];

  const lighting = [
    "**REMBRANDT MASTER LIGHT (CANONICAL):** Single directional light source from the upper-left (45° angle, slightly above eye level). Creates the classic Rembrandt triangle of light on the shadow-side cheek. One side of the face fully illuminated — every fur detail, every whisker, the eye with full depth. The other side in rich, warm shadow — NOT dead black, but a deep warm umber that still shows form. The chest and the medallion catch the light below the face. Everything else recedes into darkness. This is the most dramatic light in the catalog.",
    "**CARAVAGGIO SHAFT LIGHT:** A single powerful beam of light descends from above-right, as if through a high studio window. It strikes the top of the head, the face, and the chest with intense warmth. The edges of the fur catch the light like a halo. The rest of the scene is in profound shadow. Maximum drama, maximum presence.",
    "**CANDLE PORTRAIT LIGHT:** Warm, intimate candle-temperature light (2800K) from below-front — the light source is a candle at desk level. Creates upward-angled soft shadows on the face. Gives the scene an ancient, intimate feeling. The gold medallion is lit first, the face second. Everything else in shadow."
  ];

  const poses_dog = [
    "seated 3/4 position emerging from darkness — the body barely defined in shadow, the face and chest fully illuminated. Head slightly turned toward the light. The pose of a dog that has been painted by a master.",
    "seated full-face forward — direct, unflinching gaze into the light. The animal confronts the viewer across centuries. Maximum psychological presence.",
    "slightly relaxed seated pose — not stiff, but settled. One ear slightly forward. The light catches the eyes first, then the medallion on the chest. Everything else is shadow."
  ];

  const poses_cat = [
    "seated with characteristic feline stillness, half-turned toward the light — the classic Rembrandt portrait angle where one eye catches the full light and the other is in soft shadow. Deeply psychological.",
    "direct frontal seated pose: the cat emerges from darkness, face fully to the viewer, eyes carrying maximum intensity. The gaze of a creature that understands everything.",
    "slightly elevated seated position, chin raised slightly — looking past the viewer with aristocratic disdain and intelligence. The light catches one eye brilliantly. The other is a suggestion in shadow."
  ];

  const props = [
    "a dark mahogany and velvet cushion — the velvet nearly black, absorbing light. Only the top surface catches any illumination. Simple, serious, museum-grade.",
    "a heavy dark velvet cushion with minimal gold trim — the darkness of the prop blends into the background, making the subject appear to float in light",
    "an antique carved wooden surface (dark oak) — simple, historical, appropriate. The subject rests upon it with natural weight."
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
    ? "**MASCULINE BAROQUE ENERGY:** The scholar-patriarch. Serious, weighty, a man of consequence. The darkness frames him as a figure of history."
    : gender === 'feminine'
      ? "**FEMININE BAROQUE ENERGY:** The Renaissance woman. Intelligent, composed, luminous against the dark. The light favors her face."
      : "";

  return {
    name: "Gran Maestro Oscuro",
    role: "**GRAN MAESTRO OSCURO — Dutch Golden Age Master Portrait**\nMood: The most artistically serious style. Museum-grade darkness and light.\nReference energy: Rembrandt's late self-portraits — profound, alive, timeless.",
    palette: pick(palettes),
    backdrop: pick(backdrops),
    wardrobe: selectedWardrobe,
    accessory: selectedAccessory,
    lighting: pick(lighting),
    poses_dog: poses_dog,
    poses_cat: poses_cat,
    props: pick(props),
    genderNote: genderPoseNote,
    mood: `**STYLE SIGNATURE:** The owner should think "this belongs in a museum." The darkness is not sad — it is profound. The light is not dramatic — it is reverent. This style converts on artistic aspiration. The buyer who chooses Baroque wants ART, not a cute portrait. Give them Rembrandt.`
  };
};
