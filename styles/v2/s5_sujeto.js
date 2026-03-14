// SECCIÓN 5 — SUJETO (V_FULL_BODY_LOCK)

module.exports = function s5_sujeto(especie) {
  const e = (especie || 'animal').toLowerCase();

  return `SUBJECT EXACT LIKENESS & PAINTERLY IDENTITY:
You must preserve the unmistakable identity of this exact ${e} from the reference photo.
Protect the recognizable structure of the eyes, muzzle, brow ridge, ears, forehead, cheeks, fur pattern, markings, and overall expression.

ANATOMY LOCK:
The animal must have completely natural anatomy.
Exactly one head.
Exactly one tail.
Exactly two front legs and two rear legs where appropriate.
No duplicate paws.
No extra limbs.
No twisted anatomy.
No malformed joints.
No merged paws.
No mutated appendages.

FULL BODY PRESENCE LOCK:
The animal must feel like a complete living body from head through hindquarters.
The hips, rear body mass, hind legs, and tail base must remain anatomically present and readable.
Do NOT let the subject appear cut off behind the chest.
Do NOT let the back half disappear into the cushion, cape, or shadow.
Even in a premium portrait composition, the full seated or reclining body structure must remain believable.

PHOTO CLEANUP RULE:
Remove all modern collars, leashes, harnesses, tags, clothing, human hands, and original background elements from the source image.
Replace them seamlessly with historically appropriate painted garments and portrait staging.

PAINTERLY EXECUTION RULE:
Do not reproduce the reference as a photo.
Do not create hyperreal photographic fur.
Do not render every tiny hair.
Translate the animal into authentic oil painting language using grouped forms, painterly edges, and selective detail.
The eyes must feel alive but painted.
The nose must feel natural but matte, not glossy plastic.
The face must feel modeled in paint, not digitally composited.

NEGATIVE QUALITY LOCK:
No AI-smooth finish.
No beauty-retouched softness.
No CGI sheen.
No posterized gradients.
No over-clean symmetry.
No slick digital polish.
No modern pet-photo aesthetic.`;
};
