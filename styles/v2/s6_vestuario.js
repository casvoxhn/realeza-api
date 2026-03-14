// SECCIÓN 6 — VESTUARIO v9 (NO HIDE BODY)

const { pick } = require('./utils');

const mantos = {
  realeza: {
    masculine: [
      { descripcion: 'a king’s heavy muted antique crimson velvet coronation mantle with deep historical drape' },
      { descripcion: 'a rich weighty dark burgundy matte velvet coronation mantle with solemn royal gravity' },
      { descripcion: 'a deep faded Prussian blue velvet court mantle with noble heavy folds' }
    ],
    feminine: [
      { descripcion: 'a queen’s heavy dusty antique rose velvet royal mantle with graceful weight' },
      { descripcion: 'a warm aged ivory velvet mantle with refined aristocratic softness' },
      { descripcion: 'a regal dark plum velvet court mantle with luxurious historical volume' }
    ],
    neutral: [
      { descripcion: 'a heavy desaturated crimson velvet royal mantle with dignified folds' },
      { descripcion: 'a rich aged burgundy velvet royal mantle draping with convincing gravity' },
      { descripcion: 'a weighty muted navy blue velvet mantle with museum-like richness' }
    ]
  },

  barroco: {
    masculine: [
      { descripcion: 'a dark wine-red baroque velvet mantle with somber old-master richness' },
      { descripcion: 'a near-black brown velvet court mantle with dramatic depth' },
      { descripcion: 'a heavy burnt-crimson velvet mantle with shadow-rich baroque folds' }
    ],
    feminine: [
      { descripcion: 'a deep garnet velvet mantle with old-master dramatic softness' },
      { descripcion: 'a dark muted plum velvet mantle with historical shadow depth' },
      { descripcion: 'a warm antique cream velvet mantle with subdued baroque elegance' }
    ],
    neutral: [
      { descripcion: 'a dark burgundy baroque velvet mantle with solemn painterly depth' },
      { descripcion: 'a deep brown-black velvet mantle with heavy dramatic folds' },
      { descripcion: 'a rusted crimson velvet mantle with aged old-world richness' }
    ]
  },

  renacimiento: {
    masculine: [
      { descripcion: 'a muted olive-brown velvet mantle with refined classical elegance' },
      { descripcion: 'a soft faded burgundy velvet mantle with noble restraint' },
      { descripcion: 'a warm dark bronze velvet mantle with graceful court drape' }
    ],
    feminine: [
      { descripcion: 'a warm faded rose velvet mantle with classical refinement' },
      { descripcion: 'a pale aged gold velvet mantle with elegant historical softness' },
      { descripcion: 'a soft muted berry velvet mantle with balanced noble folds' }
    ],
    neutral: [
      { descripcion: 'a softly aged burgundy velvet mantle with refined classical weight' },
      { descripcion: 'a muted olive-gold velvet mantle with painterly historical drape' },
      { descripcion: 'a warm bronze-brown velvet mantle with restrained aristocratic richness' }
    ]
  }
};

const gemas = {
  masculine: ['deep aged emerald', 'dark opaque sapphire', 'oxidized topaz'],
  feminine: ['aged pearl', 'darkened ruby', 'muted amethyst'],
  neutral: ['aged sapphire', 'dark ruby', 'antique topaz', 'muted amethyst', 'deep emerald', 'warm antique pearl']
};

module.exports = function s6_vestuario(estilo, genero, indexHero = null, hasLace = false) {
  const generoKey = genero === 'masculine'
    ? 'masculine'
    : genero === 'feminine'
      ? 'feminine'
      : 'neutral';

  const pool = mantos[estilo]?.[generoKey] || mantos.realeza.neutral;
  const manto = indexHero !== null ? pool[indexHero % pool.length] : pick(pool);
  const gema = pick(gemas[generoKey]);

  let laceDesc = '';
  if (hasLace) {
    laceDesc = `
PART 2a — OPTIONAL LACE DETAIL:
A subtle aged antique lace trim may appear beneath the inner edge of the ermine collar. It must sit naturally, remain secondary, and be painted with historical oil texture. Never bright white, never sharp, never digitally crisp.`;
  }

  return `WARDROBE DIRECTION:
${manto.descripcion}.

MATERIAL EXECUTION:
All fabrics must read as hand-painted historical textiles with a completely matte oil-painted finish.
No glossy velvet.
No synthetic fabric shine.
No CGI metallic reflections.

GARMENT STRUCTURE — PAINT THESE AS DISTINCT LAYERS:
PART 1 — ERMINE COLLAR:
Warm aged ivory ermine with distinct dark tail markings forms elegant open lapels framing the upper chest and neck. The ermine must feel soft, noble, historical, and painted in thick creamy brushwork. Never glowing white.

PART 2 — VELVET MANTLE:
The velvet rests over the shoulders and falls backward and outward with natural historical gravity. It frames the subject and enhances nobility, but must NOT conceal the hips, hindquarters, rear silhouette, or tail base. The full body must remain readable beneath and around the garment. Deep folds, broad painterly shadows, and visible oil texture are essential.

${laceDesc}

CHEST ORNAMENT:
A single antique gold chain spans from one ermine lapel to the other, holding a ${gema} pendant at the center. The chain and jewel must feel painted, aged, restrained, and elegant—never flashy, never jewelry-product photography.

BODY VISIBILITY RULE:
The garment must work with a full seated or reclining animal portrait.
Do NOT use drapery to hide the rear body.
Do NOT swallow the animal into fabric.
The subject must remain a complete readable body, not only a front-facing upper half.`;
};
