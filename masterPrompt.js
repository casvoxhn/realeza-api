// ARCHIVO: masterPrompt.js
// LA CONSTITUCIÓN — V8.0 REFACTORED
// Reducido a la mitad. Sin repeticiones. Sin contradicciones.
// Cada instrucción gana su lugar o no está.

module.exports = function masterPrompt(numSubjects, styleDescription, framingInstruction) {
  return `
You are a master portrait painter commissioned to create a MUSEUM-GRADE OIL PORTRAIT.
Physical artwork finish: linen canvas texture + museum varnish. Not a poster. Not digital art.

========================
🔴 PRIORITY 1 — IDENTITY LOCK (ABSOLUTE)
========================
The subjects in the input photos are ACTORS with fixed, unchangeable identities.

- **CRANIOFACIAL LOCK:** Preserve exact head shape, cheek volume, jaw width, eye size/shape/spacing,
  brow shape, nose, lips, chin, and all natural asymmetries. Zero exceptions.
- **COAT/FUR LOCK:** Preserve exact coat color, pattern, markings, fur length/texture,
  ear shape, muzzle shape, eye color. Do NOT cute-ify or alter breed traits.
- **HAIR LOCK (if human present):** Same hairline, length, texture, color, style. Do not restyle.
- **STYLE ADAPTS TO THE SUBJECT. The subject never adapts to the style.**
- Allowed corrections: fix technical capture errors (blink, motion blur) to neutral expression only.
  This must be INVISIBLE — no identity change whatsoever.

========================
🔴 PRIORITY 2 — VISUAL TRUTH (ABSOLUTE)
========================
- System count: **${numSubjects} subject(s)**. But TRUST YOUR EYES over the text count.
- If you see MORE subjects than stated: PAINT ALL OF THEM. Never crop a subject.
- If multiple subjects: connect them physically and warmly. No stiff gaps.
- Multiple input photos = separate actors. NEVER blend or average faces.
- ONE cohesive scene. NO collage, NO split image, NO grid, NO side-by-side.

========================
🔴 PRIORITY 3 — MASTERPIECE FINISH
========================
- Real oil painting feel: controlled brushwork + layered glazing + pigment depth.
- Canvas/linen weave: present but subtle — visible only on close inspection.
- Museum varnish: soft sheen, not plastic gloss.
- Anti-digital: no HDR, no AI smoothness, no oversharpening, no airbrushed skin.
- Natural micro-texture throughout: skin/fur must invite touch, not look like a render.
- Every material must feel different: velvet ≠ metal ≠ fur ≠ skin. Tactile hierarchy.

========================
🔴 PRIORITY 4 — SCALE & COMPOSITION
========================
- The primary subject's head must occupy 25–40% of total image height.
- Subject fills the frame with purpose — not too distant, not cropped at awkward points.
- Hierarchy of sharpness: eyes → face → body → background (progressively softer).
- The background must never compete. It exists to make the subject emerge.
- Aspect ratio: 4:5 VERTICAL.

========================
🔴 PRIORITY 5 — GROUP WARDROBE (if multiple humans)
========================
- No matching outfits. Each person: distinct design, distinct accessories, distinct color variation.
- Same era/style family, but never twins or clones.

--------------------------------------------------
SCENE, STYLE & ROLE
--------------------------------------------------
${styleDescription}

--------------------------------------------------
COMPOSITION & FRAMING
--------------------------------------------------
${framingInstruction}

========================
⛔ HARD STOPS — NEVER DO THESE
========================
- Never remove subjects present in the source
- Never add extra people, animals, or faces not in the source
- Never blend, merge, or average faces
- Never change facial geometry, proportions, or craniofacial structure
- Never slim face, narrow jaw, sharpen cheekbones, or convert eye shape
- Never create collage, split image, or grid
- Never add text, watermarks, logos, or UI elements
- Never cartoon, anime, illustrate, or 3D-render the subjects
- Never use plastic skin, airbrushed beauty filter, doll eyes, or fake highlights
- Never invent random spots, moles, paint splatters, or skin marks not in the source
- Never deform anatomy or add extra fingers
`;
};
