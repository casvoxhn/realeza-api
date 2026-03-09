// ARCHIVO: masterPrompt.js
// LA CONSTITUCIÓN — V8.2
// Norte: el dueño ve la imagen y reconoce a su mascota. Ese es el único objetivo.
// Todo lo demás — técnica, luz, textura — sirve a ese objetivo.

module.exports = function masterPrompt(numSubjects, styleDescription, framingInstruction) {
  return `
This is an oil painting on linen canvas, executed in the manner of the great European portrait masters of the 17th and 18th centuries — Rembrandt, Gainsborough, Rigaud, Velázquez. It is a physical object. It has age, weight, and texture. It is not digital art. It is not an illustration. It is not a render. It is a painting that has existed for centuries.

========================
🔴 PRIORITY 1 — IDENTITY LOCK (THE ONLY THING THAT MATTERS)
========================
The subject in the input photo is a specific, unique individual with an identity that cannot be altered in any way.

The owner of this animal knows their face with absolute intimacy. They know the exact shape of the skull, the precise color of the eyes, the specific pattern of the coat, the way the ears sit, the geometry of the muzzle. If any of these details are wrong, the painting has failed — regardless of how beautiful it is.

- **SKULL & FACE:** Preserve exact head shape, cheek volume, jaw width, muzzle length and width, brow structure, ear shape and position, nose shape. Every natural asymmetry is preserved. Zero idealization. Zero cute-ification.
- **EYES:** Preserve exact eye color, eye shape, eye size, the specific expression. The eyes are the soul of this portrait. If the eyes are wrong, everything is wrong.
- **COAT:** Preserve exact coat color, every marking, every pattern, fur length and texture, the specific lie of the fur on different parts of the body. Do not average. Do not generalize.
- **THE STYLE SERVES THE SUBJECT. THE SUBJECT NEVER ADAPTS TO THE STYLE.**
- **EXPRESSION:** The subject must have a serene, dignified, noble expression — mouth closed, calm. If the source photo shows an open mouth or tongue out, correct this to a composed closed-mouth expression. This correction must be invisible — no change to face geometry, only to expression.

========================
🔴 PRIORITY 2 — VISUAL TRUTH
========================
- System count: **${numSubjects} subject(s)**. TRUST YOUR EYES over the text count.
- If you see MORE subjects than stated: PAINT ALL OF THEM. Never crop a subject.
- If multiple subjects: connect them physically and warmly. No stiff gaps.
- Multiple input photos = separate individuals. NEVER blend or average faces.
- ONE cohesive scene. NO collage. NO split image. NO grid. NO side-by-side.

========================
🔴 PRIORITY 3 — PHYSICAL PAINTING SURFACE (NON-NEGOTIABLE)
========================
This painting must look like it was created centuries ago and has physically aged.

**CRAQUELURE (AGING CRACKS):**
Fine networks of aged cracks in the paint surface — natural, not uniform, not exaggerated. Cracks appear more densely in zones of thick impasto (highlights, heavy pigment areas) and are nearly absent in thin glaze zones (deep shadows). The cracks follow the underlying brushstroke direction. They are a sign of age and authenticity, not damage.

**CANVAS TEXTURE:**
The linen weave is subtly visible — most visible in the background where paint is thinner, barely visible in heavily painted areas like the subject's face. The grain of the canvas shows through in the dark atmospheric zones.

**AGED VARNISH:**
A layer of yellowed amber varnish unifies the entire surface — it slightly warms the lights, deepens the shadows, and gives the whole painting a cohesive golden-brown tonality. This is what makes the painting look old. No zone of the painting escapes this varnish layer.

**BRUSHWORK — INTENTIONAL AND VISIBLE:**
- Background: loose atmospheric strokes, paint applied with confidence and economy
- Fur/coat: directional strokes following the exact lie of the fur — each stroke has a beginning and end, they are not blended to smooth
- Face/muzzle: subtle impasto on highest highlights (nose tip, brow ridge), glazed transparent darks in the shadow zones
- Fabric: broad flat strokes for velvet, final glaze layer for depth. Gold and metal: thick impasto on light-struck surfaces, deep dark glaze in recesses
- Zones of deliberate incompletion: the background and lower body are less resolved than the face — this is intentional, as in all great portraiture

**COLOR PALETTE — PERIOD ACCURATE (DESATURATED, PIGMENT-BASED):**
No pure digital colors. All colors are mixed with earth tones:
- Blacks are warm umber-black, never pure digital black
- Whites are ivory-cream, never pure white — with cool blue-grey in shadows
- Golds are ochre and raw sienna, not yellow — with dark brown in recesses
- Reds are deep madder and burnt sienna, not bright red
- Greens are muted olive and sap green, not saturated green
The overall tonality is WARM and SLIGHTLY DESATURATED — as if seen through centuries of varnish

========================
🔴 PRIORITY 4 — EYES (THE SOUL OF THE PORTRAIT)
========================
The eyes must look biologically alive. This is the detail that makes the owner feel "that is my animal."

- **Iris:** Deep layered color — not flat, not uniform. A darker limbal ring at the outer edge. The color shifts slightly from center to edge.
- **Pupil:** Deep black at center, not a flat circle.
- **Wet cornea:** ONE controlled catchlight — small, slightly off-center, not a perfect circle, not symmetrical. This single point of light is what makes the eye appear alive and wet.
- **Tear line:** A thin bright highlight along the lower eyelid margin — the wet edge of the eye. This biological detail is what separates a painted-from-life portrait from an illustration.
- **Depth:** The iris must recede — you feel you could look INTO the eye, not just at a flat surface painted to look like an eye.
- **Upper lid shadow:** The eyelid casts a slight shadow into the top of the iris. This is anatomically correct and essential.
- **NO:** No glassy eyes. No doll eyes. No perfectly symmetrical catchlights. No HDR eye glow.

========================
🔴 PRIORITY 5 — FUR TEXTURE (TACTILE REALITY)
========================
The fur must look like it could be touched. The owner must feel they recognize the specific texture of their animal's coat.

- **Root to tip:** Fur grows from the skin. In the light zones, individual hairs are visible following their natural direction. In the shadow zones, fur is softly suggested — warm color, not black.
- **Directional inconsistency:** Fur changes direction across the body — the chest goes one way, the neck another. This inconsistency is what makes it look real.
- **Translucent edges:** Where light hits fur from behind or from the side, the hair edges glow individually — painted as thin warm glaze strokes over a lighter ground.
- **Short fur zones:** Around the muzzle, above the eyes, inside the ears — the fur is nearly invisible, suggested with thin transparent strokes, not drawn with individual lines.
- **If it looks like a texture applied on top, it has failed. Fur must look like it grows.**

========================
🔴 PRIORITY 6 — SCALE, COMPOSITION & PROXIMITY
========================
- **The subject is CLOSE.** The primary subject's head must occupy 35–45% of total image height. This is a portrait, not a scene. The subject fills the frame with presence.
- **Crown/hat, if present, must fit within the frame** — include breathing room above it (5–8% of image height).
- **Proximity creates intimacy** — the viewer should feel they could reach out and touch the subject.
- **Hierarchy of detail:** Eyes → face → body → accessories → background. Each zone progressively less resolved.
- **The background exists to make the subject emerge, not to be admired.**
- **Aspect ratio: 4:5 VERTICAL.**

========================
🔴 PRIORITY 7 — PHYSICAL WEIGHT & GRAVITY
========================
Every object in this painting must obey gravity and have physical mass.
- The crown or hat PRESSES DOWN on the fur beneath it — the fur compresses slightly under its weight, the crown sits INTO the head, not floating above it.
- The mantle or robe PULLS DOWNWARD — the fabric weight is visible in how it falls and pools.
- The medallion or chain HANGS with mass — it does not float against the chest.
- Objects cast real shadows on the surfaces beneath them.
- Nothing floats. Nothing is weightless. Everything has been painted by someone who understood physical reality.

========================
🔴 PRIORITY 8 — PORTRAIT GRAVITY (MOOD & PRESENCE)
========================
This subject knows it is being painted. There is an awareness, a stillness, a dignity in the pose that does not exist in a casual photograph.
- The gaze is direct, calm, and slightly above the viewer's eye level — the traditional portrait gaze that conveys authority without aggression.
- The posture has intentional weight — this is not a snapshot, it is a sitting.
- The overall mood is: timeless, dignified, quietly powerful.

========================
🔴 PRIORITY 9 — GROUP WARDROBE (if multiple subjects)
========================
- No matching outfits. Each subject: distinct design, distinct accessories, distinct color variation.
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
⛔ HARD STOPS — NEVER
========================
- Never alter the subject's facial geometry, skull shape, or craniofacial proportions
- Never cute-ify, idealize, or beautify the subject beyond their actual appearance
- Never add subjects not present in the source photo
- Never crop a subject who is present in the source
- Never blend or average multiple subjects' faces
- Never create collage, split image, or grid layout
- Never add text, watermarks, logos, or UI elements
- Never use pure digital colors — all colors are pigment-based and earth-toned
- Never generate plastic-looking fur, glassy eyes, or airbrushed surfaces
- Never make objects float — gravity is mandatory
- Never generate a uniform level of detail across the entire image — hierarchy is mandatory
- Never make the background compete with the subject
`;
};
