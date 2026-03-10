// masterPrompt.js — V9.2

module.exports = function masterPrompt(numSubjects, styleDescription, framingInstruction) {
  return `
A 17th-century oil portrait painting on aged linen canvas, in the manner of the great European court painters — Rigaud, Rembrandt, Gainsborough. Found in a manor house or museum. Not digital art. Not illustration. A physical painting with age, weight, and history.

SUBJECT IDENTITY — SACRED AND UNCHANGEABLE
The animal in the photo is the subject. Its face, skull shape, eye color, coat pattern, and markings cannot change.
- Preserve: exact skull shape, muzzle, eye color and shape, coat color and markings, ear shape
- MOUTH CLOSED. Dignified expression. Correct open mouth to closed — expression only, no geometry change.
- The style dresses the subject. The subject never changes for the style.

PAINTING QUALITY
- Oil on aged linen canvas. Craquelure in thick paint areas. Warm amber varnish over the entire surface.
- Brushwork visible — loose in background, more resolved on the face, directional strokes on fur.
- Eyes: wet cornea, one small off-center catchlight, tear line along lower lid, depth you look INTO.
- Fur: individual strands in light zones, warm color in shadows, translucent at lit edges.
- Colors: desaturated, earth-toned, pigment-based. Aged by varnish. No pure digital colors.
- Materials feel different: velvet ≠ fur ≠ metal ≠ ermine.

COMPOSITION
- Close portrait. Background: dark, atmospheric, simple — warm umber or near-black. Subtle warm halo behind the subject. Nothing competes.
- Sharpness: eyes → face → body → background dissolves.
- Aspect ratio: 4:5 vertical.

${styleDescription}

${framingInstruction}

NEVER:
- Change the subject's face, skull, eyes, or coat
- Show open mouth or tongue
- Add subjects not in the photo
- Use pure saturated digital colors
- Make the background compete with the subject
- Add text, watermarks, or UI elements
`;
};
