// ARCHIVO: styles/realeza.js
// ESTILO: "Rey / Reina Absoluto" — V8.2
// Mood: poder, ostentación, el más dramático del catálogo
// Referencia: Hyacinthe Rigaud, Velázquez — retratos de coronación

const { pick } = require('../utils/pick');

module.exports = function realeza(gender) {

  const palettes = [
    "Deep Crimson Velvet (madder + burnt umber, NOT pure red) + Antique Gold (ochre + raw sienna, oxidized edges in burnt umber) + Ivory Ermine (lead white + yellow ochre, NOT pure white) + Warm Umber shadows — all desaturated and earth-toned",
    "Imperial Blue (ultramarine + ivory black + white, muted and deep) + Burnished Gold (raw sienna + burnt umber highlights) + Ivory + Deep Shadow Brown — period-accurate pigments",
    "Rich Burgundy (alizarin + burnt umber + ivory black) + Antique Gold (ochre, never pure yellow) + Warm Ivory + Candlelight warmth — Rigaud's actual palette"
  ];

  const backdrops = [
    "a grand throne room — massive columns suggested in warm umber shadow, crimson drapes barely visible at edges. The background is pure ATMOSPHERE — warm dark, painted in loose confident strokes of burnt umber and warm black. NO sharp architectural detail. The subject is the only element in focus. Canvas texture visible in the darkest zones.",
    "a palatial hall — gilded ceiling detail as a warm gold smear at the very top of frame, heavy darkness everywhere else. The background is a painting of expensive darkness. The subject is illuminated. Everything else recedes.",
    "a royal chamber — dark paneled walls as warm brown atmosphere, a barely suggested gilded throne edge in deep shadow. Everything in warm dark. The subject commands the light absolutely."
  ];

  const wardrobe_neutral = [
    "a magnificent crimson velvet coronation mantle — painted in madder mixed with burnt umber, NOT pure red. Lined with white ermine: the ermine is ivory-cream (white + yellow ochre), NOT pure white. The black tail-tips are painted as individual deliberate marks in warm near-black. The mantle OPEN at the front revealing the subject's natural chest and fur. REAL WEIGHT: pile direction in the velvet brushstrokes, deep fold shadows in dark madder-umber glaze.",
    "a royal blue velvet coronation robe — ultramarine + ivory black, muted and deep, NOT saturated blue. Thick ermine collar with individually painted tail-tips. Open at front. Gold brocade interior lining in ochre and raw sienna.",
    "a deep burgundy velvet throne mantle — alizarin + burnt umber + black. Ivory ermine trim. Gold tassel fastenings in raw sienna with burnt umber shadows. Open front. The velvet has real weight and pile direction."
  ];

  const wardrobe_masculine = [
    "a king's crimson velvet coronation mantle — wide open at front, broad chest visible. Ermine with individually painted black tail-tips. Thick gold chain of state: each link in warm ochre impasto with umber recesses. Masculine, dominant, absolute.",
    "a royal commander's mantle: deep navy velvet (muted, not saturated) with gold military braiding at shoulders, ermine border, open front — the garment of a ruler who is also a warrior."
  ];

  const wardrobe_feminine = [
    "a queen's coronation gown: deep crimson velvet with delicate gold embroidery at neckline — the gold threads in ochre, not bright yellow. Ermine-trimmed cape from shoulders, open and elegant. A queen's bearing, not a costume.",
    "a royal blue satin court gown with gold brocade bodice — the blue muted (ultramarine + ivory black), the gold in raw sienna. Ermine-trimmed mantle cascading behind. Elegant, powerful, unmistakably feminine and royal."
  ];

  const crown_neutral = [
    "a substantial imperial crown sitting NATURALLY on the head — pressing slightly into the fur with real weight, casting a real shadow beneath it. NOT floating. Heavy gold base in ochre + raw sienna. Central gemstone (deep ruby): painted with layered transparent glazes — dark crimson at the core, brightening to warm ruby-red at the rim, a single brilliant impasto catchlight at the highest point. This gemstone appears lit from within. Each smaller gem painted with the same layered approach. Ermine base band with individually painted black tail-tips.",
    "a royal crown with a LARGE CENTRAL RUBY as the hero of the painting — this ruby must appear to glow with internal fire. Painted in multiple transparent glaze layers: deep alizarin at core, mid-value crimson at mid-tone, bright warm red at the rim, single impasto highlight. The gold in ochre and raw sienna, filigree details visible in raking light.",
    "a golden state crown: alternating fleur-de-lis and cross points, large central emerald painted with deep viridian glaze layers and bright surface highlight. Museum-authentic weight. Sits INTO the head with real mass."
  ];

  const crown_masculine = [
    "a king's imperial crown — tall, heavy gold structure (ochre + raw sienna, never bright yellow). LARGE CENTRAL RUBY: the hero of the painting, painted with layered crimson glazes building to a single brilliant warm highlight. Ermine base band with individual tail-tip marks. Unambiguously a ruler's crown. It has real weight.",
    "a warrior-king crown: gold with laurel relief (ochre impasto, umber shadows) and central deep sapphire — painted with ultramarine glaze layers and bright blue-white surface highlight. Powerful, masculine, earned."
  ];

  const crown_feminine = [
    "an elegant queen's crown — lower profile than a king's, unmistakably regal. Delicate gold filigree in ochre. Central diamond: painted as a point of near-white light with subtle prismatic warm-to-cool transition. Each small gem a layered glaze with single catchlight. Graceful authority without excess.",
    "a tiara-crown hybrid: arched gold setting with graduated pearl and diamond points. Each pearl painted as a luminous ivory sphere — warm impasto highlight at top, cool grey shadow beneath. Each diamond a point of refracted white fire. Museum-authentic."
  ];

  const lighting = [
    "**THRONE ROOM GLORY LIGHT — UNIFIED WARM TEMPERATURE:** Powerful directional beam from UPPER-RIGHT, 3200K warm throughout the ENTIRE painting — no zone has a different color temperature. The CROWN catches the light first: gold fires up, gemstone appears internally lit. Then the shoulders, then the face. The ERMINE in the light zone: individual tips painted as warm ivory impasto marks. The shadow side in rich warm umber — still showing velvet depth and color. One small warm catchlight in the eye from the upper-right position.",
    "**CORONATION PORTRAIT LIGHT — WARM AND UNIFIED:** Dramatic top-front lighting, 3200K throughout. The CROWN is the hottest point in the painting — thick warm impasto on the gold, deep umber glaze in the recesses, gemstone glowing. Face fully readable beneath it. Clean warm shadows on either side. One catchlight in the eye at the top position.",
    "**ROYAL CHIAROSCURO — RIGAUD LIGHT:** Strong directional key from LEFT-FRONT, 3200K warm throughout. Sculpts the face powerfully. The crown glows. The ermine glows. The subject emerges from warm shadow like a monarch entering history. Shadow side in warm umber — form visible, never dead. One catchlight in the eye from the upper-left."
  ];

  const poses_dog = [
    "seated upright on throne cushion with maximum authority — chest forward and proud, head high, crown perfectly centered and level (it BELONGS there, it PRESSES into the fur). Front paws firmly side by side. Tail positioned neatly. Mouth CLOSED. Calm, dominant expression. The pose of a dog that has always been royalty.",
    "3/4 seated royal pose — body slightly angled, face turned toward viewer with regal directness. Crown centered. Mouth CLOSED. One paw slightly forward.",
    "enthroned seated pose — deep in the throne cushion, slight forward lean of the head, gaze absolutely direct. Mouth CLOSED. Every element of the body language communicates: this is the ruler."
  ];

  const poses_cat = [
    "seated perfectly upright — natural cat posture that already reads as royal. Crown centered, pressing naturally into the fur. Tail wrapped around front paws. Gaze direct and imperious. Mouth CLOSED. A cat that has always known it was royalty.",
    "sphinx-adjacent seated pose: upright with commanding cat stillness. Front paws forward, chest open, crown perfectly balanced and weighted. Mouth CLOSED. The gaze sees everything and judges accordingly.",
    "elevated seated pose — slightly above viewer's eye level, looking down with benevolent authority. Crown within frame. Mouth CLOSED. The angle emphasizes the crown and commanding presence."
  ];

  const props = [
    "a massive throne cushion: deep crimson velvet (madder + burnt umber, not pure red) with heavy antique gold tassels (ochre + burnt sienna) at all four corners, deep button tufting with dark round shadow pools. The subject sits upon it with real weight.",
    "a royal velvet cushion in deep purple-burgundy with antique gold rope trim and large corner tassels — opulent and throne-like. Painted in muted, earth-toned palette — not saturated digital colors.",
    "a gold-legged throne chair partially visible: crimson velvet seat in madder-umber, carved gold armrests in ochre — the subject seated front and center, the throne framing from behind in warm dark shadow."
  ];

  const selectedWardrobe = gender === 'masculine'
    ? pick(wardrobe_masculine)
    : gender === 'feminine'
      ? pick(wardrobe_feminine)
      : pick(wardrobe_neutral);

  const selectedCrown = gender === 'masculine'
    ? pick(crown_masculine)
    : gender === 'feminine'
      ? pick(crown_feminine)
      : pick(crown_neutral);

  const genderPoseNote = gender === 'masculine'
    ? "**MASCULINE ROYAL ENERGY:** The king. Broad, dominant, unquestionable authority. Direct commanding gaze. Mouth closed."
    : gender === 'feminine'
      ? "**FEMININE ROYAL ENERGY:** The queen regnant. Elegant authority — power through composure. Crown worn with natural grace. Mouth closed."
      : "";

  return {
    name: "Rey / Reina Absoluto",
    role: "**REY / REINA ABSOLUTO — Coronation Portrait, 17th–18th Century**\nMood: Absolute power. Intimidating opulence. The most dramatic style in the catalog.\nReference: Hyacinthe Rigaud's Louis XIV portrait — the most powerful royal portrait ever painted. But it is their pet.",
    palette: pick(palettes),
    backdrop: pick(backdrops),
    wardrobe: selectedWardrobe,
    crown: selectedCrown,
    lighting: pick(lighting),
    poses_dog: poses_dog,
    poses_cat: poses_cat,
    props: pick(props),
    genderNote: genderPoseNote,
    mood: `**STYLE SIGNATURE & HERO DETAIL:** The single most important element in this painting is the CROWN'S CENTRAL GEMSTONE — painted with multiple transparent glaze layers that give it internal depth and luminosity, culminating in a single brilliant impasto catchlight that appears to radiate from within the stone. When the owner zooms in, the gem glows. The ermine tail-tips are painted as individual deliberate marks — the owner can count them. The crown presses into the fur — it has real weight. This style converts on pride: the owner sees their pet and thinks "my animal, the king." They will buy this on first sight.`
  };
};
