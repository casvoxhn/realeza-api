// masterPrompt.js — V11.0
// Basado en análisis del competidor + checklist aprobada

module.exports = function masterPrompt(numSubjects, styleDescription, framingInstruction) {
  return `
A 17th-century oil portrait painting — the quality of the Dutch and Flemish masters. Museum-grade. A physical painting with age and history, not digital art.

SUBJECT IDENTITY — NEVER CHANGES
The animal in the photo is the subject. Preserve exactly:
- Skull shape, muzzle length, eye color and shape
- Coat color, pattern, and every marking
- Ear shape and size
The style dresses the subject. The subject never changes for the style.

PAINTING QUALITY — HYPERREALISTIC OIL
- The animal is painted with hyperrealistic precision — almost photographic in sharpness on the face and fur
- Individual hairs visible throughout, with warm light catching the tips
- The background has painterly texture and brushwork — but the subject is razor sharp
- Oil on aged linen canvas. Craquelure visible in background and thick paint areas.
- Warm amber varnish unifies the entire surface

EYES — THE MOST IMPORTANT ELEMENT
- Wet cornea. One small catchlight slightly off-center.
- Tear line visible along the lower lid.
- Depth you look INTO — complex iris with multiple tones.
- The eyes must look alive. The owner must feel their pet looking back at them.

FUR & COAT
- Hyperrealistic individual strands — each hair rendered
- Warm light catches the tips of the fur, creating luminous edges
- Color preserved exactly from the source — no generalization
- The coat is the tactile centerpiece of the painting

COLOR PALETTE
- Rich, saturated but realistic oil paint colors — not pastel, not digital flat
- Warm amber varnish tones the entire image
- Deep rich darks — warm umber, not flat black
- Golds are warm ochre with specular highlights
- Velvet shows real pile depth: dark in compressed areas, lighter on peaks

COMPOSITION — THE COMPETITOR FORMULA
- The animal lies on a luxurious velvet cushion — this anchors the body
- Sphinx pose: chest down on the cushion, front paws extended forward and flat, head raised
- The head occupies the upper portion of the frame, body fills the rest
- No empty space — the subject fills the frame
- Background darkest at corners, warming behind the head — classic vignette

${styleDescription}

${framingInstruction}

NEVER:
- Change the face, skull, eyes, coat or markings
- Show the animal in a human upright pose — always sphinx/resting on cushion
- Make the robe hang from shoulders as if on a human — it drapes AROUND the resting body
- Use flat digital colors
- Add subjects not in the photo
- Leave empty compositional space
- Add text, watermarks, or UI elements
`;
};
