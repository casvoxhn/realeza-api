// utils/wowLayer.js — V11.0

module.exports = function wowLayer(style) {
  const layers = {

    renacimiento: `
WOW DETAIL — JARDÍN DORADO:
The animal's fur catches the warm garden light at the tips — individual hairs glow like spun gold where the light strikes them. This is the conversion moment: the fur looks so real and warm that the owner wants to reach through the screen and touch it. The eyes hold a soft warm garden reflection — diffuse, not a hard dot. The velvet of the cushion shows pile compression under the animal's weight.`,

    realeza: `
WOW DETAIL — REY/REINA:
The crown's central gemstone glows with internal light — deep saturated color at the core, a single brilliant specular highlight at the surface. This is what stops the scroll. The ermine tail-tips are painted individually — each small black dot precise against the pure white fur. The velvet pile direction is visible, lighter at the peaks, deeper in the compressed valleys. The eyes hold the candlelight with absolute authority.`,

    barroco: `
WOW DETAIL — GRAN MAESTRO:
The gold chain or accessory catches the single candle source — warm amber light on the raised surfaces, oxidized darkness in the recesses. This is the hero detail that makes someone zoom in. The background is not flat black — it has subtle warm brushwork that gives it atmosphere and depth. The eyes emerge from shadow with maximum intensity — one small warm catchlight, deep iris, visible wet lower line. This animal has an inner life.`
  };

  return layers[style] || layers.barroco;
};
