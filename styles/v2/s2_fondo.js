// SECCIÓN 2 — FONDO (V_MUSEUM_BACKGROUND)

module.exports = function s2_fondo(estilo) {
  if (estilo === 'barroco') {
    return `BACKGROUND:
A dark old-master oil portrait background with deep warm brown-black atmosphere, softly modulated shadow, and subtle smoky transitions.
The background must feel painted, aged, and museum-like—not like a modern photo studio backdrop.
No visible room, no architecture, no props competing with the face.
Allow soft atmospheric depth behind the head and shoulders, with peripheral darkness swallowing edges elegantly.`;
  }

  if (estilo === 'renacimiento') {
    return `BACKGROUND:
A refined classical painted backdrop with warm muted earth tones, aged olive-brown transitions, and gentle historical atmosphere.
The background must feel like hand-painted portrait canvas, not a digital gradient and not a studio wall.
No distracting elements.
No scenery competing with the subject.
Keep it noble, quiet, and softly atmospheric.`;
  }

  return `BACKGROUND:
A grand historical oil portrait background in deep umber, warm brown-black, and muted antique amber transitions.
It must feel like an old museum painting backdrop: atmospheric, painted by hand, softly aged, and visually quiet.
No modern studio look.
No decorative objects.
No architectural distractions.
The face and upper body should emerge from shadow with elegant old-master depth.`;
};
