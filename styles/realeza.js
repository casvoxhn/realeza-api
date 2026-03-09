// ARCHIVO: styles/realeza.js
// ESTILO: "Rey / Reina Absoluto"
// Mood: poder intimidante, máxima ostentación, el más dramático del catálogo
// Referencia visual: Hyacinthe Rigaud, Velázquez, retratos de coronación
// Hora de luz: tarde gloriosa (3200K) — luz de salón del trono

const { pick } = require('../utils/pick');

module.exports = function realeza(gender) {

  const palettes = [
    "Deep Crimson Velvet + Heavy Antique Gold + Pure White Ermine + Warm Umber shadows",
    "Imperial Royal Blue + Burnished Gold + Ivory + Deep Shadow Brown",
    "Rich Burgundy + Gold Bullion + Stark White + Candlelight warmth"
  ];

  const backdrops = [
    "a grand throne room interior: massive marble columns suggested in deep shadow on either side, heavy crimson velvet drapes partially visible behind, the background dark and atmospheric — all architectural detail soft and out of focus so the subject dominates absolutely",
    "a palatial hall backdrop: gilded ceiling details caught in warm torchlight at the very top of frame, heavy darkness below — the subject is the only illuminated element in a sea of expensive shadow",
    "a royal chamber setting: dark paneled walls with barely visible tapestry, a hint of a throne's gilded edge in the background — everything in shadow except the subject, who commands the light entirely"
  ];

  const wardrobe_neutral = [
    "a magnificent coronation mantle: heavy crimson velvet lined with white ermine fur (black tail-tips clearly visible), draped wide over the shoulders and cascading behind — OPEN at the front to fully reveal the subject's chest. The weight of the fabric pulls it down naturally. Heavy gold embroidered border.",
    "a royal blue velvet coronation robe with thick ermine collar and lining — the mantle falls open at the front, revealing the natural chest. Gold brocade interior lining. The robe pools slightly on the surface behind the subject.",
    "a deep burgundy velvet throne mantle with ivory ermine trim — open-front construction showing the subject's full chest and natural form. Heavy gold tassel fastenings at the shoulder. Fabric has visible weight and pile."
  ];

  const wardrobe_masculine = [
    "a king's crimson velvet coronation mantle — wide open at the front showing the broad chest, heavy ermine lining with visible black tail-tips, thick gold chain of state across the chest. Masculine, dominant, absolute.",
    "a royal commander's mantle: deep navy velvet with gold military braiding at the shoulders, ermine border, open front — the garment of a ruler who is also a warrior. Gold scepter or orb suggested at the side."
  ];

  const wardrobe_feminine = [
    "a queen's coronation gown: deep crimson velvet with delicate gold embroidery at the neckline, ermine-trimmed cape draping from the shoulders — open and elegant, revealing the graceful chest. A queen's bearing, not a costume.",
    "a royal blue satin court dress with gold brocade bodice, ermine-trimmed mantle cascading behind — the garment of a queen regnant. Elegant, powerful, unmistakably feminine and royal."
  ];

  const crown_neutral = [
    "a substantial imperial crown sitting naturally and securely — heavy gold base with alternating ruby and sapphire cabochons, white ermine band at the base. The crown has real weight. It does NOT float.",
    "a royal crown with a central large gemstone (deep ruby) flanked by smaller diamonds — gold filigree work between the points, clearly expensive and ancient. Positioned naturally on the head.",
    "a golden state crown: alternating fleur-de-lis and cross points, large central emerald, smaller gem accents — museum-authentic weight and proportion"
  ];

  const crown_masculine = [
    "a king's imperial crown: tall, heavy gold structure with large central ruby, alternating gem points, ermine base band — unambiguously a ruler's crown. Massive, authoritative.",
    "a warrior-king crown: gold with laurel relief detail and central sapphire — powerful and masculine, worn at a slight forward angle suggesting command"
  ];

  const crown_feminine = [
    "an elegant queen's crown: lower profile than a king's crown but unmistakably regal — delicate gold filigree with central diamond or pearl, small gem accents throughout. Graceful authority.",
    "a tiara-crown hybrid: arched gold setting with graduated pearl and diamond points — distinctly feminine and royal. Museum-authentic, not costume."
  ];

  const lighting = [
    "**THRONE ROOM GLORY LIGHT:** A powerful directional beam from the upper-right illuminates the crown, the shoulders, and the subject's face with warm golden light (3200K). The ermine fur catches the light on each individual tip. The gems in the crown appear lit from within. The background recedes into expensive shadow. A very subtle fill from the left prevents the shadow side from going dead — just enough to see the velvet depth.",
    "**CORONATION PORTRAIT LIGHT:** Dramatic top-front lighting that emphasizes the crown above all else — the gold catches fire. The face is fully readable beneath it. Warm candlelight temperature throughout. Deep, clean shadows on either side of the subject create maximum three-dimensional presence.",
    "**ROYAL CHIAROSCURO:** Strong directional key light from the left front — sculpts the face powerfully. The crown glows. The ermine glows. The subject emerges from shadow like a monarch stepping into history. Controlled fill keeps the identity readable while preserving maximum drama."
  ];

  const poses_dog = [
    "seated upright on the throne cushion with maximum authority — chest forward and proud, head held high with the crown centered perfectly, front paws placed firmly side by side, tail positioned neatly. The pose of a dog that has always been royalty.",
    "3/4 seated royal pose — body slightly angled, face turned toward the viewer with regal directness. One paw slightly forward. The crown tilts not at all — it belongs there.",
    "enthroned seated pose — deep in the throne cushion, slightly forward lean of the head, gaze absolutely direct and commanding. Every element of the body language communicates: this is the ruler."
  ];

  const poses_cat = [
    "seated perfectly upright — natural cat posture that already reads as royal without adjustment. Crown centered. Tail wrapped precisely around the front paws. Gaze direct and imperious. A cat that has always known it was royalty.",
    "sphinx-adjacent seated pose: upright with the natural commanding cat stillness. Front paws forward, chest open, crown perfectly balanced. The gaze sees everything and judges accordingly.",
    "elevated seated pose on the throne cushion — slightly above the viewer's eye level, looking down with benevolent authority. The angle emphasizes the crown and the commanding presence."
  ];

  const props = [
    "a massive throne cushion: deep crimson velvet with heavy gold tassels at all four corners, deep button tufting, the fabric clearly expensive and substantial — the subject sits upon it as on a throne",
    "a royal velvet cushion in deep purple with gold rope trim and large corner tassels — opulent and throne-like, clearly a surface fit for royalty",
    "a gold-legged throne chair partially visible: crimson velvet seat, carved gold armrests — the subject seated front and center, the throne framing them from behind"
  ];

  // Select wardrobe, crown, and accessories based on gender
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
      ? "**FEMININE ROYAL ENERGY:** The queen regnant. Elegant authority — power expressed through composure, not aggression. The crown is worn with natural grace."
      : "";

  return {
    name: "Rey / Reina Absoluto",
    role: "**REY / REINA ABSOLUTO — Coronation Portrait**\nMood: Intimidating opulence. Absolute power. The most dramatic style in the catalog.\nReference energy: Hyacinthe Rigaud's Louis XIV — but it's their pet.",
    palette: pick(palettes),
    backdrop: pick(backdrops),
    wardrobe: selectedWardrobe,
    crown: selectedCrown,
    lighting: pick(lighting),
    poses_dog: poses_dog,
    poses_cat: poses_cat,
    props: pick(props),
    genderNote: genderPoseNote,
    mood: `**STYLE SIGNATURE:** Maximum luxury, maximum drama. The owner should feel their pet is more majestic than actual royalty. The crown must look like it weighs something. The ermine must look touchable. This style converts on pride — "my pet, the king/queen."`
  };
};
