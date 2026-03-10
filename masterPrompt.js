// masterPrompt.js — V10.0
// Basado en checklist aprobada

module.exports = function masterPrompt(numSubjects, styleDescription, framingInstruction) {
  return `
A 17th-century oil portrait painting on aged linen canvas — Rigaud, Rembrandt, Gainsborough. A physical painting found in a manor house or museum. Not digital art. Not illustration.

SUBJECT IDENTITY
The animal in the photo is the subject. Its face, skull, eye color, coat pattern and markings are fixed and sacred.
- Preserve exactly: skull shape, muzzle, eye color and shape, coat color and every marking, ear shape
- The style dresses the subject. The subject never changes for the style.
- Expression: natural and dignified — whatever is appropriate for the portrait

PAINTING SURFACE
- Aged linen canvas with visible weave texture, especially in the background
- Craquelure visible in thick paint areas — natural, not exaggerated
- Warm amber varnish over the entire surface — unifies everything, ages everything
- Brushwork visible and intentional: loose in background, more resolved on the face

EYES
- Wet cornea with one small off-center catchlight
- Tear line visible along the lower lid
- Depth you look INTO — not a flat surface
- Iris color preserved exactly from the source photo

FUR
- Individual strands visible in light zones, direction changes naturally across the body
- Warm color in shadows — never flat black
- Translucent at lit edges
- Tactile — looks touchable

COLOR & PALETTE
- Desaturated, earth-toned, pigment-based throughout
- Unified warm temperature — no zone has a different color temperature
- Everything slightly aged and tinted by the amber varnish
- Blacks are warm umber. Whites are ivory. Golds are ochre. Never pure digital colors.

COMPOSITION
- The subject's face is large and fills the frame naturally
- Background: pure atmospheric color — completely out of focus, no sharp details, no competing architecture
- Warm halo of light behind the subject's head — separates subject from background
- Sharpness hierarchy: eyes → face → body → background dissolves
- Aspect ratio: 4:5 vertical

PHYSICAL REALITY
- Wardrobe falls with gravity — heavy fabric, natural drape
- Chest open — the garment opens at the front showing the animal's natural fur
- Garment closes with a simple clasp or cord — no excessive jewelry or medallions hanging
- Everything has weight and casts shadows

${styleDescription}

${framingInstruction}

NEVER:
- Change the subject's face, skull, eyes, coat or markings
- Add subjects not in the source photo
- Show sharp architectural details or competing background elements
- Use pure saturated digital colors
- Make objects float or appear weightless
- Show the animal in a human upright pose
- Add rings on paws, earrings, or absurd accessories
- Add text, watermarks, or UI elements
`;
};
