// masterPrompt.js — V9.0
// Norte: que parezca una pintura del siglo XVII encontrada en un ático. Nada más.

module.exports = function masterPrompt(numSubjects, styleDescription, framingInstruction) {
  return `
A 17th-century oil portrait painting on aged linen canvas, in the manner of the great European court painters — Rigaud, Largillière, Rembrandt. The kind of painting found in a manor house or museum. Not digital art. Not illustration. A physical painting with age, weight, and history.

SUBJECT IDENTITY — ABSOLUTE AND SACRED
The animal in the photo is the subject of this portrait. Its face, skull shape, eye color, coat pattern, and markings are fixed and cannot change. The owner knows this animal's face with complete intimacy. If the face is wrong, the painting has failed.
- Preserve: exact skull shape, muzzle geometry, eye color and shape, coat color and pattern, ear shape
- MOUTH CLOSED. Serene, dignified expression. If the source shows open mouth or tongue, correct to closed mouth — change only the expression, nothing else.
- The style dresses the subject. The subject never changes for the style.

PAINTING QUALITY
- Oil on aged linen canvas. Craquelure visible in the thick paint areas. Warm amber varnish over the entire surface.
- Brushwork visible and intentional — loose in the background, more resolved on the face, individual directional strokes on the fur
- Eyes: biologically alive. Wet cornea with one small off-center catchlight. Tear line along the lower lid. Depth you can look into — not a flat painted surface.
- Fur: individual strands in the light, warm color in the shadows, translucent at the edges where light passes through. Looks touchable.
- Colors: desaturated, pigment-based, earth-toned. No pure digital colors. Everything slightly aged by varnish.
- Every material feels different: velvet ≠ fur ≠ metal ≠ ermine

COMPOSITION
- The subject fills the frame. Head occupies 40–55% of image height. This is a close portrait, not a scene.
- Background: dark, atmospheric, simple. Warm umber or near-black. A subtle warm halo behind the subject's head. No competing details.
- Sharpness hierarchy: eyes sharpest → face → body → background dissolves into atmosphere
- Aspect ratio: 4:5 vertical

PHYSICAL REALITY
- The crown or hat presses INTO the fur — real weight, real shadow beneath it
- The mantle falls with gravity — heavy fabric, natural drape
- The medallion hangs with mass against the chest
- Nothing floats. Everything obeys gravity.

${styleDescription}

${framingInstruction}

NEVER:
- Change the subject's face, skull, eyes, or coat
- Open mouth, tongue out, or non-dignified expression
- Add subjects not in the source photo
- Create collage or split image
- Use pure saturated digital colors
- Make objects float or appear weightless
- Make the background compete with the subject
- Add text, watermarks, or UI elements
`;
};
