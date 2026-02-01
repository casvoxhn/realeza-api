module.exports = function(style, numSubjects, isGroup) {

let stylePrompt = "";

if (style === 'musa') {
stylePrompt = `
ARTISTIC DIRECTION: Ethereal Pre-Raphaelite Muse inspired by John William Waterhouse.
Mood: poetic, luminous, timeless beauty.
Wardrobe: flowing silk and chiffon robes, botanical embroidery, floral crown or hair accents.
Palette: emerald green, rose quartz, antique gold.
Lighting: diffused golden-hour glow, painterly soft edges, atmospheric haze.
Background: dreamlike lake garden, twilight foliage, soft depth of field.
`;
}

else if (style === 'realeza') {
stylePrompt = `
ARTISTIC DIRECTION: Imperial Grand Portrait in the style of Winterhalter court paintings.
Mood: absolute authority, luxury, dynastic elegance.
Wardrobe: heavy satin and velvet royal gown, jewel embroidery, diamond tiara, royal sash.
Palette: sapphire blue, crimson, ivory, gold leaf.
Lighting: high-key palace daylight, reflective silk highlights, sculpted facial light.
Background: baroque palace interior, marble columns, drapery, chandeliers.
`;
}

else if (style === 'empoderada') {
stylePrompt = `
ARTISTIC DIRECTION: Historical Vogue Power Portrait inspired by Sargent and Boldini.
Mood: dominance, confidence, magnetic presence.
Wardrobe: sculptural couture dress, velvet blazer silhouette, silk gloves.
Palette: obsidian black, oxblood red, champagne highlights.
Lighting: Rembrandt lighting, dramatic chiaroscuro, studio falloff.
Background: dark aristocratic curtains or abstract luxury textures.
`;
}

let framing = "";

if (numSubjects > 1) {
framing = `
COMPOSITION: multi-figure museum portrait.
Include ALL ${numSubjects} subjects and pets from the reference image.
Main woman centered and dominant in lighting and posture.
Secondary figures arranged in triangular Renaissance composition.
Framing: waist-up to three-quarter length.
Depth staging: protagonist in foreground, others slightly behind.
`;
} else {
framing = `
COMPOSITION: solo masterpiece portrait.
Framing: three-quarter length or intimate head-and-shoulders.
Lens logic: 85mm portrait compression equivalent.
Pose: elegant contrapposto, relaxed shoulders, lifted chin.
`;
}

return `
You are a world-class classical portrait painter producing a **museum-grade oil painting on canvas** intended for private collectors.

ASPECT RATIO: vertical 4:5.

PRIMARY GOAL:
The woman must instantly recognize herself and feel elevated, powerful and beautiful enough to purchase the artwork.

SUBJECT FIDELITY — CRITICAL:
Preserve exact facial proportions from the reference:
jaw width, cheekbone height, nose bridge shape, eye spacing, eyelid fold, lip curvature.
Keep age consistent.
Do not stylize into a generic face.
Enhance skin realism only through painterly light and texture, never reshaping anatomy.

If pets are present: render with anatomical realism, fine fur brushwork and personality.

SCENE:
${stylePrompt}
${framing}

PAINTING EXECUTION:
Medium: oil on linen canvas.
Visible layered brushwork.
Subsurface skin glow.
Textured impasto highlights on fabric and jewelry.
Soft edge control around hair and background.
Ultra-detailed eyes and hands.

WARDROBE TRANSFORMATION:
Replace modern clothing with historically appropriate couture that matches the selected style.
Natural draping physics.
No costume look.

NEGATIVE RULES:
Do not alter identity.
No cartoon.
No CGI.
No anime.
No 3D render.
No plastic skin.
No face swapping artifacts.
No extra people.
No missing limbs.
No distorted hands.
No modern clothing.
`;
};
