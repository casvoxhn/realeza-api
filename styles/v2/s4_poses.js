// SECCIÓN 4 — POSES
// Poses pre-definidas para TODOS los animales.
// El modelo NO decide la pose — asignada automáticamente por especie/raza.

const poses = {

  // ─── PERRO RAZA GRANDE ───────────────────────────────────────────────────
  perro_grande: [
    `POSE: The dog lies fully reclined on the cushion like the classic Landseer royal portrait — complete body visible from nose to tail. Chest and belly pressed into the velvet, both front legs extended forward with paws at the cushion edge. The hindquarters and haunches are clearly visible behind the front legs — the dog has full body depth and volume. The cushion supports the entire length of the dog. Head erect, chin slightly raised, gaze straight at viewer.`,
    `POSE: The dog reclines on the cushion showing its complete body — from the extended front paws all the way back to the visible haunches and hindquarters. Left front leg forward, right slightly back. The full silhouette of the dog is visible: broad chest, torso, and rear end all supported on the cushion. Head turned 3/4 toward the viewer.`,
    `POSE: The dog lies in a full sphinx recline across the entire cushion — front legs extended forward, full torso resting on the velvet, haunches and rear legs visible behind. The complete body of the dog occupies the cushion from front to back. Head erect, one paw slightly over the other, gaze forward.`,
    `POSE: The dog is fully reclined showing complete body volume — broad chest at the front, full torso in the middle, haunches clearly visible at the back. Both front paws extended forward. The dog fills the cushion entirely from nose to tail. Head raised 20 degrees off center to meet the viewer.`
  ],

  // ─── PERRO RAZA MEDIANA ──────────────────────────────────────────────────
  perro_mediano: [
    `POSE: The dog lies fully reclined on the cushion showing its complete body — chest and belly on the velvet, front paws extended forward, full torso visible, haunches and rear clearly visible behind. The entire dog from nose to tail is painted. Head erect, gaze straight at viewer.`,
    `POSE: The dog sits upright on the cushion showing full body — hindquarters seated on the cushion, torso upright, full body volume visible. Head elevated, gaze straight at viewer.`,
    `POSE: The dog sits on the cushion showing complete body in 3/4 view — full silhouette visible including haunches, torso and chest. Head turned to face viewer directly. One front paw slightly forward.`,
    `POSE: The dog sits on the cushion in 3/4 profile — complete body visible from nose to tail, full volume and depth. Head turned completely to face the viewer.`
  ],

  // ─── PERRO RAZA PEQUEÑA ──────────────────────────────────────────────────
  perro_pequeno: [
    `POSE: The dog sits upright — back perfectly straight, both front paws placed neatly together. Head slightly elevated, gaze straight at the viewer.`,
    `POSE: The dog sits upright — body turned 3/4, head turned to face the viewer. One front paw slightly forward.`,
    `POSE: The dog lies in sphinx position — chest slightly elevated, front legs extended forward, one paw lightly over the other. Head erect.`,
    `POSE: The dog sits — body in 3/4 profile, head turned completely to face the viewer. Direct, confident gaze.`
  ],

  // ─── GATO ────────────────────────────────────────────────────────────────
  gato: [
    `POSE: The cat sits with natural weight settled into the cushion — body slightly relaxed, not rigid. One front paw very slightly ahead of the other, creating subtle asymmetry. Tail curled loosely to one side. Head turned 15 degrees off-center, chin slightly elevated. Gaze directed just past the viewer — 10 degrees to the side — the indifferent confidence of a cat that knows it is being painted but has better things to think about.`,
    `POSE: The cat lies in sphinx position — chest slightly raised, both front legs extended forward, parallel. Head fully erect, gaze directed straight at the viewer. One front paw very slightly ahead of the other.`,
    `POSE: The cat sits upright — both front paws placed perfectly together, tail wrapped neatly around the front feet. Head turned very slightly — 10 degrees — giving a composed, evaluating gaze.`,
    `POSE: The cat sits — body turned 3/4, head turned back to face the viewer directly. One front paw slightly forward. The posture of a cat that has just decided you are worth its attention.`,
    `POSE: The cat sits perfectly upright — front paws together, back straight. Head tilted very slightly — 8 degrees. Gaze direct and penetrating.`,
    `POSE: The cat lies in loaf position — front paws tucked completely under the chest, body compact and round. Head erect, gaze directed straight at the viewer. Maximum authority with minimum effort.`,
    `POSE: The cat lies with its chest resting directly on the cushion — front paws folded completely underneath the body, hidden from view. Body low, wide and settled deeply into the cushion. Head fully erect and elevated, gaze direct and commanding. The royal mantle drapes over the back and falls down both sides of the cushion, pooling dramatically on the stone ledge below. The cat owns every inch of the frame.`
  ],

  // ─── CONEJO ──────────────────────────────────────────────────────────────
  conejo: [
    `POSE: The rabbit sits upright in a natural alert pose — front paws resting neatly on the cushion, ears tall and erect. Head level, gaze directed toward the viewer with calm dignity.`,
    `POSE: The rabbit sits in a relaxed loaf position — front paws tucked slightly under the chest, ears upright. Head elevated, gaze forward. Compact and regal.`,
    `POSE: The rabbit sits upright — body slightly turned 3/4, head facing the viewer directly. Front paws placed neatly. A noble, composed posture.`
  ],

  // ─── AVE ─────────────────────────────────────────────────────────────────
  ave: [
    `POSE: The bird perches upright on the cushion — body erect, wings folded naturally at its sides. Head turned slightly toward the viewer, one eye visible and alert. Feet gripping the cushion surface naturally.`,
    `POSE: The bird stands on the cushion — full upright posture, wings folded, tail feathers visible behind. Head facing forward directly toward the viewer. Dignified and still.`,
    `POSE: The bird perches — body in 3/4 profile, head turned fully to face the viewer. Wings folded tight. A composed, regal stance.`
  ],

  // ─── CABALLO ─────────────────────────────────────────────────────────────
  caballo: [
    `POSE: The horse stands in a proud square stance — all four hooves planted firmly, body facing 3/4 toward the viewer. Head held high and slightly turned to face the viewer directly. Mane falling naturally. Tail visible behind. The cushion and ledge are large and monumental to accommodate the horse's stature.`,
    `POSE: The horse stands — body in profile, head turned fully toward the viewer. Noble posture, ears forward, eyes alert. The royal mantle drapes across the back and falls to one side. The composition is monumental.`,
    `POSE: The horse stands at 3/4 angle — front legs slightly staggered, one forward. Head elevated and turned toward the viewer. Mane and tail caught in a slight movement. Powerful and regal.`
  ],

  // ─── REPTIL ──────────────────────────────────────────────────────────────
  reptil: [
    `POSE: The reptile rests in a composed sphinx-like position — body low and horizontal on the cushion, legs relaxed at its sides, tail extending behind. Head fully erect and elevated, gaze directed straight at the viewer with ancient authority.`,
    `POSE: The reptile sits upright — body elevated on its front legs, head raised high. Gaze directed toward the viewer. The posture is alert and commanding.`,
    `POSE: The reptile rests on the cushion — body in natural resting position, head turned directly toward the viewer. Still, dignified, and utterly regal.`
  ],

  // ─── ANIMAL PEQUEÑO (hamster, cobaya, etc) ───────────────────────────────
  pequeno: [
    `POSE: The small animal sits upright on the cushion — body compact, front paws resting neatly together. Head elevated, gaze toward the viewer. Surprisingly dignified.`,
    `POSE: The small animal sits in a natural alert pose — front paws on the cushion, head erect and facing the viewer directly. Small but commanding.`
  ],

  // ─── DEFAULT (animal desconocido) ────────────────────────────────────────
  default: [
    `POSE: The animal rests naturally on the cushion in the most dignified position its anatomy allows — body composed, head erect and elevated, gaze directed straight at the viewer with calm authority.`,
    `POSE: The animal sits or reclines on the cushion in its most natural resting pose — head raised, eyes meeting the viewer. The posture is noble and composed.`
  ]
};

// ─── DETECCIÓN DE CATEGORÍA ──────────────────────────────────────────────────
function detectarCategoria(especie, raza) {
  const e = (especie || '').toLowerCase();
  const r = (raza || '').toLowerCase();

  if (e.includes('cat') || e.includes('gato') || e.includes('feline')) return 'gato';
  if (e.includes('rabbit') || e.includes('conejo') || e.includes('bunny')) return 'conejo';
  if (e.includes('bird') || e.includes('ave') || e.includes('parrot') ||
      e.includes('loro') || e.includes('canary') || e.includes('cockatiel') ||
      e.includes('parakeet')) return 'ave';
  if (e.includes('horse') || e.includes('caballo') || e.includes('pony') ||
      e.includes('mare') || e.includes('stallion')) return 'caballo';
  if (e.includes('reptile') || e.includes('reptil') || e.includes('lizard') ||
      e.includes('iguana') || e.includes('snake') || e.includes('serpiente') ||
      e.includes('gecko') || e.includes('tortoise') || e.includes('turtle') ||
      e.includes('chameleon')) return 'reptil';
  if (e.includes('hamster') || e.includes('guinea') || e.includes('cobaya') ||
      e.includes('gerbil') || e.includes('ferret') || e.includes('chinchilla') ||
      e.includes('rat') || e.includes('mouse') || e.includes('hedgehog')) return 'pequeno';

  if (e.includes('dog') || e.includes('perro') || e.includes('canine')) {
    const razasGrandes = ['doberman', 'dalmatian', 'golden', 'labrador', 'german shepherd',
      'husky', 'rottweiler', 'great dane', 'saint bernard', 'mastiff',
      'bernese', 'boxer', 'weimaraner', 'vizsla', 'pointer', 'setter',
      'greyhound', 'akita', 'malamute', 'newfoundland', 'leonberger'];
    const razasPequenas = ['chihuahua', 'yorkshire', 'yorkie', 'maltese', 'pomeranian',
      'shih tzu', 'dachshund', 'miniature', 'toy', 'papillon',
      'pug', 'french bulldog', 'boston terrier', 'cavalier', 'bichon',
      'schnauzer mini', 'jack russell', 'corgi', 'beagle'];

    if (razasGrandes.some(x => r.includes(x))) return 'perro_grande';
    if (razasPequenas.some(x => r.includes(x))) return 'perro_pequeno';
    return 'perro_mediano';
  }

  return 'default';
}

function asignarPose(especie, raza, indexHero = null) {
  const categoria = detectarCategoria(especie, raza);
  const pool = poses[categoria] || poses.default;
  if (indexHero !== null && indexHero < pool.length) return pool[indexHero];
  return pool[Math.floor(Math.random() * pool.length)];
}

module.exports = { asignarPose, poses, detectarCategoria };
