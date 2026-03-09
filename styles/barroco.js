// ARCHIVO: styles/barroco.js
// ESTILO: "Gran Maestro Oscuro" — V8.2
// Mood: el más artístico — apela al comprador que quiere ARTE DE MUSEO
// Referencia: Rembrandt van Rijn — Dutch Golden Age, late self-portraits

const { pick } = require('../utils/pick');

module.exports = function barroco(gender) {

  const palettes = [
    "Near-black (ivory black + burnt umber, never pure black) + Warm Umber + Antique Gold (ochre + burnt sienna, oxidized at edges) + Deep Shadow Brown — Rembrandt's actual pigments, aged varnish over all",
    "Onyx-brown + Bronze (raw sienna + burnt umber) + Dark Chocolate + Amber candlelight — every color mixed with earth, nothing pure or saturated",
    "Midnight Brown + Oxidized Gold (ochre fading to umber at edges) + Warm Ivory light + Deep cool-warm shadow transitions — the palette of a Dutch Golden Age master"
  ];

  const backdrops = [
    "an atmospheric near-black void — NOT flat black, but layered warm umber darkness with subtle brushwork visible only in the deepest zones. A warm amber-gold haze painted loosely behind the subject's head and shoulders — a corona of warm paint that separates the subject from the infinite dark. Canvas texture visible in the darkest areas. This is Rembrandt's studio: ancient, infinite, expensive.",
    "deep rich brown atmospheric background — the color of aged oak and century-old varnish. No detail. No structure. Pure tonal depth painted in warm transparent glazes. A barely visible warm light source suggested far behind. The darkness feels old, inhabited, real.",
    "absolute tonal darkness with a single warm light zone centered on the subject — periphery fades to warm-black through layers of umber glaze. The background is infinite. Canvas texture visible in the outer zones. Like Rembrandt's late self-portraits — the darkness is not empty, it breathes."
  ];

  const wardrobe_neutral = [
    "a heavy dark velvet cloak — near-black with subtle dark burgundy undertone, painted in ivory black mixed with burnt umber and a touch of alizarin. Open at front revealing natural chest. REAL WEIGHT: pile direction visible in brushstrokes. Deep fold shadows in cool-dark glaze. The light-struck peaks of the folds painted in warm umber impasto.",
    "a dark baroque academic robe: near-black velvet with subtle gold threading at collar — gold threads painted as individual warm ochre lines against the dark ground. Worn open, cascading behind. Simple, serious, expensive.",
    "a dramatic dark cape in deep charcoal velvet — clasped at throat with single antique gold pin. Falls open revealing full chest. Light-struck fold peaks in warm impasto. Recesses in deep transparent cool-dark glaze."
  ];

  const wardrobe_masculine = [
    "a black velvet doublet OPEN — the Dutch Golden Age merchant-aristocrat. Painted in ivory black + burnt umber, never flat digital black. A heavy gold chain of state: each link painted with warm ochre impasto on the upper surface, deep umber glaze in the recesses. The chain has PHYSICAL WEIGHT — it pulls down, it hangs.",
    "a dark burgundy velvet coat, collar turned slightly up — masculine and brooding. Open chest. A single thick gold medallion on a heavy chain. The medallion is the only warm light in the composition."
  ];

  const wardrobe_feminine = [
    "a black satin baroque gown with pearl-white lace collar — the lace is the LIGHT of the composition, painted with delicate thin titanium white strokes, slightly warm at the center, cool at the edges. The gown is deep warm-black. Classic Rembrandt female portrait.",
    "a deep charcoal velvet cape with a single strand of large pearls — each pearl a luminous ivory sphere, painted with a single warm impasto highlight at the top, cool grey-blue shadow beneath. Pearl against dark velvet: maximum elegance with minimum means."
  ];

  const accessories_neutral = [
    "a single heavy antique gold medallion on a thick chain — the HERO DETAIL of this painting. Painted with deep umber-gold glaze at the core, warming to ochre at mid-tones, a single bright raw sienna impasto highlight on the highest point. The engraved surface catches candlelight in directional raking light. Oxidized dark edges. Visibly old. Visibly important.",
    "a simple antique gold chain with a dark amber gemstone pendant — the stone painted with deep transparent amber glaze, a single bright catchlight at its surface. One object, maximum presence.",
    "a heavy antique gold chain — thick links each individually painted with warm upper highlights and cool dark recesses. The chain pulls down with mass."
  ];

  const accessories_masculine = [
    "a heavy gold chain of state — multiple thick links, each painted individually: warm ochre impasto on light-struck upper surfaces, deep burnt umber glaze in recesses. The chain catches candlelight link by link. It weighs something real.",
    "a single massive gold medallion with engraved crest — the center of gravity in the entire composition. The engraving detail visible in raking candlelight. Heavy, old, important."
  ];

  const accessories_feminine = [
    "a single strand of large pearls — each pearl a world of luminosity against the dark wardrobe. Painted with warm impasto highlight at top, cool grey shadow below, a hint of reflected dark at the very bottom. Classic Rembrandt female portraiture.",
    "if a single pearl brooch is anatomically feasible at the collar — one luminous point of ivory light against the darkness. Nothing more."
  ];

  const lighting = [
    "**REMBRANDT MASTER LIGHT — CANONICAL AND UNIFIED:** Single directional light source from the UPPER-LEFT at 45°, slightly above eye level. Warm amber temperature, 3000K, CONSISTENT ACROSS THE ENTIRE PAINTING — no zone has a different temperature. The illuminated side of the face: every individual fur strand visible, the eye alive with depth and the specific Rembrandt triangle of light on the shadow-side cheek. The shadow side: rich warm umber — NOT dead black, NOT cool grey. Form still visible in the warm dark. The MEDALLION catches the light below the face — the brightest warm point below the eyes. Everything else recedes into darkness. One small warm catchlight in the eye at the upper-left position.",
    "**CARAVAGGIO SHAFT LIGHT — UNIFIED WARM:** A single powerful beam from ABOVE-RIGHT as if through a high studio window. Warm amber, 3000K throughout. Strikes the top of the head, face, and chest with intensity. Fur edges catch the light as individual translucent strands in the beam. Everything else in profound warm shadow. Maximum drama. One catchlight in the eye from the upper-right.",
    "**CANDLE PORTRAIT LIGHT — INTIMATE AND WARM:** Warm candlelight, 2700K, from BELOW-FRONT — as if a single candle sits at desk level. This temperature is UNIFIED across the entire painting — the warmest, most intimate palette in the catalog. The MEDALLION catches the flame first — the brightest point in the composition. The face second. Eyes receive a single small warm catchlight from below. Everything else in deep warm shadow. Ancient. Irreplaceable."
  ];

  const poses_dog = [
    "seated 3/4 position emerging from darkness — the body barely defined in warm shadow, the face and chest fully illuminated. Head slightly toward the light. Mouth CLOSED. Dignified. The pose of a dog painted by a master.",
    "seated full-face forward — direct unflinching gaze into the light. Mouth CLOSED. The animal confronts the viewer across centuries. Maximum psychological presence.",
    "slightly relaxed seated pose — settled, not stiff. One ear slightly forward. Mouth CLOSED. The light catches the eyes first, then the medallion. Everything else shadow."
  ];

  const poses_cat = [
    "seated with characteristic feline stillness, half-turned toward the light — one eye in full light, one in soft shadow. Mouth CLOSED. The classic Rembrandt portrait angle. Deeply psychological.",
    "direct frontal seated pose: the cat emerges from darkness, face fully to viewer. Mouth CLOSED. Eyes carrying maximum intensity. The gaze of a creature that understands everything.",
    "slightly elevated seated position, chin raised slightly — looking past the viewer with aristocratic intelligence. Mouth CLOSED. One eye brilliantly lit, the other in shadow."
  ];

  const props = [
    "a dark mahogany and velvet cushion — the velvet near-black, absorbing light completely in its depths, catching warm candlelight only on the raised surface peaks. Simple. Serious. Museum-grade.",
    "a heavy dark velvet cushion with minimal oxidized gold trim — the darkness of the prop merges into the background, making the subject appear to emerge from the dark itself",
    "an antique carved dark oak surface — simple, historical, anatomically grounding. The wood grain barely visible in raking light at the edges."
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
    ? "**MASCULINE BAROQUE ENERGY:** The scholar-patriarch. Serious, weighty. A figure of consequence. Mouth closed."
    : gender === 'feminine'
      ? "**FEMININE BAROQUE ENERGY:** Intelligent, composed, luminous against the dark. The light favors her face. Mouth closed."
      : "";

  return {
    name: "Gran Maestro Oscuro",
    role: "**GRAN MAESTRO OSCURO — Dutch Golden Age Master Portrait, 17th Century**\nMood: The most artistically serious style. Technically magnificent. Museum-grade.\nReference: Rembrandt van Rijn's late self-portraits — technically unmatched, psychologically profound, physically present.",
    palette: pick(palettes),
    backdrop: pick(backdrops),
    wardrobe: selectedWardrobe,
    accessory: selectedAccessory,
    lighting: pick(lighting),
    poses_dog: poses_dog,
    poses_cat: poses_cat,
    props: pick(props),
    genderNote: genderPoseNote,
    mood: `**STYLE SIGNATURE & HERO DETAIL:** The single most important element in this painting is the GOLD MEDALLION — a heavy antique disc on a thick chain, painted with layered ochre glazes building to a single warm impasto highlight where the candlelight strikes it most directly. Oxidized dark umber at the edges. When the owner zooms in, they see individual engraving lines catching the flame. This is the detail that makes them screenshot. The owner should think: "this belongs in the Rijksmuseum." This style converts on artistic aspiration — the buyer who chooses Baroque wants art, not a cute portrait. Give them Rembrandt.`
  };
};
