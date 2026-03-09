// ARCHIVO: styles/renacimiento.js
// ESTILO: "Jardín Dorado" — V8.2
// Mood: noble, cálido, accesible — el más regalable del catálogo
// Referencia: Gainsborough, Thomas Lawrence — jardines aristocráticos siglo XVIII

const { pick } = require('../utils/pick');

module.exports = function renacimiento(gender) {

  const palettes = [
    "Muted Emerald (sap green + raw umber) + Antique Gold (ochre + burnt sienna) + Ivory (lead white + yellow ochre) + Warm Umber shadows — all colors desaturated and earth-toned, as if seen through centuries of amber varnish",
    "Dusty Sage (viridian + raw sienna + white) + Champagne Gold (yellow ochre + white + burnt sienna) + Pearl Cream + Warm Brown shadows — Gainsborough's muted English palette",
    "Forest Green (sap green + ivory black + ochre) + Burnished Gold (raw sienna + burnt umber highlights) + Bone White + Rich Earth tones — all pigment-based, no pure digital colors"
  ];

  const backdrops = [
    "a sunlit palace garden backdrop — entirely soft focus, an atmospheric haze of warm green and gold. Stone balustrade barely suggested. Ancient oak trees as pure color mass, no detail. The background is AIR, not a scene. Painted with loose atmospheric strokes of muted green and gold, the paint thinning toward the edges revealing canvas texture.",
    "a luminous garden terrace — warm ivory stone columns as pure atmospheric suggestion in deep bokeh. Dappled golden morning light as abstract warm patches. Zero sharp background detail. Pure Gainsborough atmosphere — green, warm, enveloping.",
    "a romantic manor garden — ancient oaks as soft color masses, warm golden backlight creating a glowing corona behind the subject. The background is a painting of light and air, not of trees and architecture."
  ];

  const wardrobe_neutral = [
    "a rich forest-green velvet cape draped open across the shoulders — fully revealing the chest and natural fur. The velvet is painted in muted sap-green mixed with raw umber, NOT saturated green. Pile direction visible in brushstrokes. Deep fold shadows in warm dark umber glaze. ONE antique gold leaf brooch at the shoulder — ochre and burnt sienna, not bright yellow gold.",
    "a deep emerald velvet mantle pinned at the throat, cascading open behind — front entirely open showing the natural chest. Antique gold chain border painted in raw sienna with umber recesses. The fabric weight pulls it down naturally.",
    "a dark olive-green brocade cape worn open — chest fully visible. Subtle gold embroidery at collar. The animal's natural fur is the centerpiece. The cape merely frames it."
  ];

  const wardrobe_masculine = [
    "a deep forest-green velvet doublet OPEN at the chest — natural fur fully visible underneath. Heavy gold epaulettes in ochre and burnt sienna. Masculine, commanding. The velvet in muted olive-green, not saturated.",
    "a hunter-green brocade coat, open front — gold button details and heavy medallion. The brocade pattern visible but not dominating."
  ];

  const wardrobe_feminine = [
    "a soft sage-green silk cape trimmed with delicate gold leaf embroidery — draped elegantly, open at front. Single pearl-and-gold brooch. The silk sheen painted with long smooth strokes contrasting the fur's texture.",
    "an emerald velvet mantle with champagne gold lace trim — feminine and noble, open front. Muted, desaturated palette — elegant not flashy."
  ];

  const accessories_neutral = [
    "a delicate antique gold chain with a single sun-motif medallion — painted in warm ochre with burnt sienna shadows. The gold looks OLD, not new. Slightly oxidized at the edges.",
    "a small oak-leaf gold brooch as the single accent — each carved leaf catching morning light in warm impasto, shadows in umber glaze",
    "a thin woven gold cord collar — a single glinting line of warmth against the fur, minimal and refined"
  ];

  const accessories_masculine = [
    "a heavy antique gold medallion on the chest — the center of visual gravity. Ochre and raw sienna in the light, deep burnt umber in the recesses. It looks like it has been worn for generations.",
    "a gold and leather collar with shield pendant — the leather matte and dark, the gold catching a single warm highlight"
  ];

  const accessories_feminine = [
    "a delicate pearl-and-gold collar — each pearl a small sphere of ivory light, painted with a single warm highlight and cool shadow beneath. Light and elegant.",
    "a small floral gold coronet if anatomy allows — refined, not costume. Muted gold tones."
  ];

  const lighting = [
    "**GAINSBOROUGH MORNING LIGHT — UNIFIED WARM TEMPERATURE:** A single soft directional light source from the UPPER-LEFT (10 o'clock position). Warm golden temperature, 4500K, consistent across the ENTIRE painting — no zone has a different color temperature. The light is large and soft, not harsh. It models the face gently. The FUR in the light zone glows with individual strand translucence. The shadow side of the face is warm luminous umber — never dead, never cool-grey. Background receives LESS light than subject. The subject GLOWS relative to everything around it. A single small catchlight in the eye at the upper-left position.",
    "**GOLDEN HOUR GARDEN LIGHT — CONSISTENT AMBER TEMPERATURE:** Warm angled morning sun from upper-left, 4200K throughout the entire painting. Crowns the top of the head and one shoulder. The shadow side stays warm — cool shadows are forbidden in this style. Eyes alive with one small warm catchlight. The medallion or brooch catches a single bright impasto highlight.",
    "**SOFT DIFFUSED GARDEN DAYLIGHT:** Large beautiful diffused light — slightly stronger from the left, 4000K warm throughout. Reveals fur texture in extraordinary detail. Even modeling, no harsh shadows. The most flattering and intimate light in the catalog. Eyes fully readable and alive with biological depth."
  ];

  const poses_dog = [
    "seated with alert noble posture — head held high, mouth CLOSED, calm dignified expression. One front paw slightly advanced. The CHEST open and forward. The subject knows it is being painted.",
    "3/4 seated — body angled slightly, face turning directly toward viewer with serene authority. Mouth closed. The classic aristocratic portrait pose.",
    "relaxed sphinx pose on the garden cushion — front paws extended elegantly, chest visible, head erect. Mouth closed. The pose of a dog that has always known its worth."
  ];

  const poses_cat = [
    "seated upright with perfect natural posture — tail wrapped around front paws, chest open, gaze direct and calm. Mouth closed. The natural regal cat pose.",
    "3/4 seated, body turned slightly, head angled toward viewer — one ear slightly forward, the other relaxed. Composed and quietly commanding. Mouth closed.",
    "loaf position elevated on the garden cushion — paws tucked, perfectly composed, gaze level and confident. Serene authority."
  ];

  const props = [
    "a large garden cushion in deep burgundy velvet with antique gold tassel trim — the velvet in muted madder-red, not bright red. Tassels in ochre and burnt sienna. Painted with directional pile brushstrokes.",
    "an ornate stone garden bench with velvet cushion — weathered stone in warm grey-umber, the velvet seat in muted green. The stone has moss suggestions in the shadow crevices.",
    "a plush emerald velvet cushion with gold fringe — substantial, throne-like, muted palette. The fringe in antique gold, not bright yellow."
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
    ? "**MASCULINE ENERGY:** Posture projects strength. Broad chest forward. Direct authoritative gaze. Mouth closed."
    : gender === 'feminine'
      ? "**FEMININE ENERGY:** Posture graceful and composed. Warm serene gaze with quiet dignity. Mouth closed."
      : "";

  return {
    name: "Jardín Dorado",
    role: "**JARDÍN DORADO — Aristocratic Garden Portrait, 18th Century**\nMood: Noble, warm, emotionally accessible. The most giftable style in the catalog.\nReference: Thomas Gainsborough — muted palette, warm light, atmospheric garden background, profound intimacy with the subject.",
    palette: pick(palettes),
    backdrop: pick(backdrops),
    wardrobe: selectedWardrobe,
    accessory: selectedAccessory,
    lighting: pick(lighting),
    poses_dog: poses_dog,
    poses_cat: poses_cat,
    props: pick(props),
    genderNote: genderPoseNote,
    mood: `**STYLE SIGNATURE & HERO DETAIL:** A single ray of warm morning light travels visibly through the scene and lands across the subject's fur — illuminating individual strands in translucent warm gold, painted as thin glaze strokes over a lighter ground. This ray of light should make the owner want to reach through the screen and touch their animal. The painting should feel like it has hung in a manor house for two hundred years. The owner should feel their pet belongs in Versailles. This style converts on pure emotion.`
  };
};
