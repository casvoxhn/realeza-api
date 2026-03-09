// ARCHIVO: utils/wowLayer.js
// El hero detail por estilo.
// UN elemento tan bien ejecutado que el usuario hace zoom y llama a alguien para mostrarlo.
// Este detalle no es accidental — está instruido con precisión quirúrgica.

module.exports = function wowLayer(style) {
  const layers = {

    renacimiento: `
========================
✨ WOW LAYER — JARDÍN DORADO SIGNATURE
========================
**HERO DETAIL (THE CONVERSION DRIVER):**
A single ray of warm golden morning light breaking through soft garden foliage,
landing precisely on the subject's head and upper chest — catching individual
hairs/fur like luminous filaments of spun gold. This light feels miraculous,
not artificial. The fur at that contact point glows from within.

**EYES (LIFE DRIVER):**
The eyes must hold a soft reflection of the garden light — a warm, diffuse
catchlight (not a hard white dot). The iris shows genuine depth: darker ring
at the outer edge, lighter core, wet cornea with a visible lower wet-line.
The gaze is alert, warm, and intelligent. The owner must feel seen.

**MATERIAL LUXURY:**
The velvet of the cushion shows pile direction — lighter where the pile
catches the garden light, slightly darker in the compressed areas.
Gold accessories carry the warmth of the scene, not a metallic chrome shine.

**THE 2-SECOND TEST:**
Someone scrolling on their phone must stop and say
"wait — is that a painting or a photo?" That tension is the goal.
========================
`,

    realeza: `
========================
✨ WOW LAYER — REY/REINA ABSOLUTO SIGNATURE
========================
**HERO DETAIL (THE CONVERSION DRIVER):**
The crown's central gemstone appears to have its own internal light source —
deep, saturated color (ruby / sapphire / emerald depending on palette)
with a controlled specular highlight that immediately pulls the eye.
The metal of the crown shows weight: warm gold at the peaks,
slightly oxidized in the recesses, ermine fur casting a shadow across the lower band.

**EYES (LIFE DRIVER):**
The eyes carry absolute authority. Direct gaze at the viewer — the animal
looks like it owns the room. Hard, controlled catchlight (one point, not two circles).
Deep iris color. The wet cornea reflects a hint of the throne room's golden light.
This is the gaze of a ruler.

**MATERIAL LUXURY:**
The ermine must show individual fur texture — the black tail-tips against
pure white, the weight of the fur pulling the mantle down naturally.
The velvet of the throne reads as crushed: pile direction visible,
highlight streaks catching the directional light.
The scene must look like it would cost $2,000 commissioned from a human painter.

**THE 2-SECOND TEST:**
The owner must think "my pet looks more majestic than actual royalty."
That emotional reaction — pride mixed with humor mixed with awe — is what sells.
========================
`,

    barroco: `
========================
✨ WOW LAYER — GRAN MAESTRO OSCURO SIGNATURE
========================
**HERO DETAIL (THE CONVERSION DRIVER):**
A heavy gold medallion resting on the subject's chest catches a single candle
reflection — warm amber specular highlight on the face of the medallion,
oxidized darker edges that show age and weight, a subtle engraved detail
visible only on close inspection. It looks like it belongs in the Louvre.

**EYES (LIFE DRIVER):**
This is the most important eye treatment in the entire catalog.
The eyes emerge from shadow with maximum intensity — deep, glossy,
with a single controlled warm catchlight (candle position, slightly above center).
The iris is rich and complex: multiple tones, genuine depth.
The lower wet-line is visible and adds emotion.
The gaze must feel like the animal has a soul and is thinking about something
profound. Rembrandt's subjects look like they have inner lives. So does this one.

**MATERIAL LUXURY:**
The background is not just black — it is atmospheric darkness with
subtle warm haze that gives depth without detail.
Brushwork is visible only in the background: long, confident strokes
that suggest rather than describe.
The dark velvet of the cape absorbs light with realistic pile depth.

**THE 2-SECOND TEST:**
The owner must think "this looks like it belongs in a museum."
The sophistication of this style attracts a specific buyer —
someone who wants art, not just a cute portrait.
========================
`
  };

  return layers[style] || layers.barroco;
};
