// ARCHIVO: styles/realeza.js
// ESTILO: "Rey / Reina Absoluto" — V8.1
// Mood: poder intimidante, máxima ostentación, el más dramático del catálogo
// Referencia visual: Hyacinthe Rigaud, Velázquez — coronation portraits

const { pick } = require('../utils/pick');

module.exports = function realeza(gender) {

  const palettes = [
    "Deep Crimson Velvet + Heavy Antique Gold + Pure White Ermine + Warm Umber shadows",
    "Imperial Royal Blue + Burnished Gold + Ivory + Deep Shadow Brown",
    "Rich Burgundy + Gold Bullion + Stark White + Candlelight warmth"
  ];

  const backdrops = [
    "a grand throne room interior: massive marble columns suggested in deep shadow on either side, heavy crimson velvet drapes barely visible at the edges, the background dark and atmospheric. ALL architectural detail soft and out of focus — the subject is the only sharp element in a sea of expensive shadow. Painted with loose confident atmospheric strokes.",
    "a palatial hall backdrop: gilded ceiling details caught in warm torchlight at the very top of frame, heavy darkness below — the subject is the only illuminated element. Background is pure atmosphere, painted as warm dark glazes with barely suggested architectural forms.",
    "a royal chamber setting: dark paneled walls with barely visible tapestry suggestion, a hint of a gilded throne edge in the background — everything in shadow except the subject, who commands the light absolutely"
  ];

  const wardrobe_neutral = [
    "a magnificent crimson velvet coronation mantle lined with white ermine fur — black tail-tips clearly visible as individual painted strokes against the white. The mantle is OPEN at the front revealing the subject's natural chest. REAL WEIGHT: the velvet pile is painted with directional brushstrokes, deep fold shadows with dark cool glazes, the ermine border painted with careful individual tip-marks in near-black.",
    "a royal blue velvet coronation robe with thick ermine collar — open at the front, the ermine collar painted with individual hair strokes, each black tail-tip a deliberate mark. Gold brocade interior lining visible where the robe opens.",
    "a deep burgundy velvet throne mantle with ivory ermine trim — open-front construction. Gold tassel fastenings at the shoulder painted in warm impasto. The velvet has visible weight and pile direction."
  ];

  const wardrobe_masculine = [
    "a king's crimson velvet coronation mantle — wide open at the front showing the broad chest, heavy ermine lining with visible black tail-tips individually painted, thick gold chain of state across the chest. Masculine, dominant, absolute.",
    "a royal commander's mantle: deep navy velvet with gold military braiding at the shoulders, ermine border, open front — the garment of a ruler who is also a warrior."
  ];

  const wardrobe_feminine = [
    "a queen's coronation gown: deep crimson velvet with delicate gold embroidery at the neckline, ermine-trimmed cape draping from the shoulders — open and elegant, revealing the graceful chest. A queen's bearing.",
    "a royal blue satin court gown with gold brocade bodice, ermine-trimmed mantle cascading behind — the garment of a queen regnant. Elegant, powerful, unmistakably feminine and royal."
  ];

  const crown_neutral = [
    "a substantial imperial crown sitting naturally and securely on the head — NOT floating, NOT tilted. Heavy gold base with alternating ruby and sapphire cabochons painted with deep color glazes and bright facet highlights. White ermine band at the base. Each gemstone is painted as a window of light: dark core, bright edge catchlight. The crown casts a real shadow on the fur beneath it.",
    "a royal crown with a CENTRAL LARGE GEMSTONE — a deep ruby cabochon that appears lit from within: dark violet-red at the core lightening to bright ruby at the edges, a single bright impasto catchlight at the top. Flanked by smaller diamonds painted as points of pure white light. Gold filigree between the points painted in warm impasto.",
    "a golden state crown: alternating fleur-de-lis and cross points, large central emerald painted with deep green glazes and a bright surface highlight, smaller gem accents. Museum-authentic weight and proportion."
  ];

  const crown_masculine = [
    "a king's imperial crown: tall heavy gold structure with LARGE CENTRAL RUBY — the ruby is the hero of the painting, painted with deep crimson glaze at its heart lightening to bright warm red at the rim, a single brilliant catchlight. Ermine base band. Unambiguously a ruler's crown.",
    "a warrior-king crown: gold with laurel relief detail and central sapphire — powerful and masculine. The gold is painted in warm impasto, the sapphire a deep blue glaze with bright surface highlight."
  ];

  const crown_feminine = [
    "an elegant queen's crown: lower profile than a king's crown but unmistakably regal — delicate gold filigree with central diamond painted as a point of pure white light with a subtle prismatic halo. Small gem accents throughout. Graceful authority.",
    "a tiara-crown hybrid: arched gold setting with graduated pearl and diamond points — each pearl a luminous sphere with a single impasto highlight, each diamond a point of white fire. Museum-authentic, not costume."
  ];

  const lighting = [
    "**THRONE ROOM GLORY LIGHT:** A powerful directional beam from the UPPER-RIGHT illuminates the crown first — the gold catches fire, the gemstones appear internally lit. The beam then falls on the shoulders and face with warm golden light (3200K). The ERMINE FUR catches the light on each individual tip, painted as tiny warm impasto marks against the cool white base. The background recedes into expensive shadow. A very subtle fill from the left prevents the shadow side from going dead — just enough warm ambient to see the velvet depth.",
    "**CORONATION PORTRAIT LIGHT:** Dramatic top-front lighting emphasizing the CROWN above all else — the gold is the hottest point in the painting, rendered in thick warm impasto with deep glaze recesses. The face is fully readable beneath it. Warm candlelight temperature (3200K) throughout. Deep clean shadows on either side create maximum three-dimensional presence.",
    "**ROYAL CHIAROSCURO:** Strong directional key light from the LEFT-FRONT — sculpts the face powerfully. The crown glows. The ermine glows. The subject emerges from shadow like a monarch stepping into history. The shadow side is warm umber — you can still see the velvet's depth and color."
  ];

  const poses_dog = [
    "seated upright on the throne cushion with maximum authority — chest forward and proud, head held high with the crown perfectly centered and level (it BELONGS there), front paws placed firmly side by side, tail positioned neatly. The pose of a dog that has always been royalty.",
    "3/4 seated royal pose — body slightly angled, face turned toward the viewer with regal directness. One paw slightly forward. The crown tilts not at all.",
    "enthroned seated pose — deep in the throne cushion, slight forward lean of the head, gaze absolutely direct and commanding. Every element communicates: this is the ruler."
  ];

  const poses_cat = [
    "seated perfectly upright — natural cat posture that already reads as royal. Crown centered and level. Tail wrapped precisely around front paws. Gaze direct and imperious. A cat that has always known it was royalty.",
    "sphinx-adjacent seated pose: upright with natural commanding cat stillness. Front paws forward, chest open, crown perfectly balanced. The gaze sees everything.",
    "elevated seated pose on the throne cushion — slightly above the viewer's eye level, looking down with benevolent authority. The angle emphasizes the crown."
  ];

  const props = [
    "a massive throne cushion: deep crimson velvet with heavy gold tassels at all four corners, deep button tufting painted with dark round shadows, the fabric clearly expensive — the subject sits upon it as upon a throne",
    "a royal velvet cushion in deep purple with gold rope trim and large corner tassels — opulent and throne-like, painted with deep cool-violet shadows and warm gold impasto highlights on the tassels",
    "a gold-legged throne chair partially visible: crimson velvet seat, carved gold armrests — the subject seated front and center, the throne framing them from behind"
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
    ? "**MASCULINE ROYAL ENERGY:** The king. Broad, dominant, unquestionable authority. Direct gaze that commands. The crown is a statement of absolute power."
    : gender === 'feminine'
      ? "**FEMININE ROYAL ENERGY:** The queen regnant. Elegant authority — power expressed through composure. The crown is worn with natural grace."
      : "";

  return {
    name: "Rey / Reina Absoluto",
    role: "**REY / REINA ABSOLUTO — Coronation Portrait**\nMood: Intimidating opulence. Absolute power. The most dramatic style in the catalog.\nReference energy: Hyacinthe Rigaud's Louis XIV — but it is their pet.",
    palette: pick(palettes),
    backdrop: pick(backdrops),
    wardrobe: selectedWardrobe,
    crown: selectedCrown,
    lighting: pick(lighting),
    poses_dog: poses_dog,
    poses_cat: poses_cat,
    props: pick(props),
    genderNote: genderPoseNote,
    mood: `**STYLE SIGNATURE & HERO DETAIL:** The single most important element in this painting is the CROWN'S CENTRAL GEMSTONE — a large precious stone (ruby, sapphire, or emerald depending on the palette) painted with layered glazes that give it internal depth and a single brilliant catchlight that appears to come from within. When the owner zooms in, they see the gem glowing. The crown must look like it weighs something real. The ermine must look touchable — individual tail-tips painted as deliberate marks. This style converts on pride: "my pet, the king/queen."`
  };
};
