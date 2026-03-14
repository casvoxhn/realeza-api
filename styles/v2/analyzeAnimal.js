// analyzeAnimal.js
// Análisis de identidad del animal orientado a retrato premium.
// Single: analiza una foto y devuelve string.
// Multi: analiza cada foto por separado y devuelve texto etiquetado.

const PROMPT_ANALISIS = `You are a master portrait analyst preparing notes for a historical oil painter.
Your job is to identify the unique physical identity of this specific animal with precision,
while describing it in a way that supports a noble, flattering, painterly portrait.

PRISTINE CLEANLINESS OVERRIDE (CRITICAL):
When analyzing the animal, you must completely ignore and omit any tear stains, eye discharge, saliva stains, food stains, dirt, crusting, wetness, redness, irritated tissue, or unflattering messiness.
Describe the animal as perfectly clean, healthy, and well-kept.
Do NOT output words like "staining", "crusting", "dirt", "discharge", "dirty", "red tissue", "messy", or "wet fur".

IMPORTANT PORTRAIT RULE:
Capture the subject's recognizable identity, anatomy, proportions, markings, and facial structure,
but do NOT overcommit to the accidental pose, temporary expression, or exact gaze direction from the source photo.
The final notes must help create a more noble, composed painted portrait—not a literal frozen snapshot.

Describe the following in clear, precise terms:

EYES:
- Eye shape (almond, round, oval, narrow, etc.)
- Eyelid weight (open, soft, slightly heavy, drooping, etc.)
- Iris color and clarity
- General expression quality in flattering portrait terms (gentle, noble, alert, soulful, calm, affectionate)
- Do NOT lock the final portrait to the exact eye direction seen in the photo

MUZZLE & NOSE:
- Nose color and overall shape
- Nostril shape and width
- Major muzzle folds and their placement
- Lip line and any natural asymmetry
- Fur pattern around the muzzle, described cleanly and attractively

SKULL & FACE:
- Skull width and overall head shape
- Forehead-to-muzzle transition (stop)
- Brow prominence
- Cheek and jaw structure
- Ear placement, size, and shape
- Any distinctive asymmetry that is truly part of the animal's identity

BODY & COAT:
- Neck thickness and chest presence
- Body proportions in broad portrait terms
- Coat type (short, dense, fluffy, silky, etc.)
- Distinctive coat markings, patches, blaze, eyebrows, mask, mane, or tail characteristics

OUTPUT RULES:
Respond ONLY with the descriptive notes.
No preamble.
No explanation.
No species announcement.
Write as if these are notes for a painter creating a premium historical portrait of this exact animal.
Prioritize identity, elegance, and recognizability.`;

async function analizarUna(model, imageBase64) {
  const parts = [
    { text: PROMPT_ANALISIS },
    {
      inlineData: {
        data: imageBase64.replace(/^data:image\/\w+;base64,/, ""),
        mimeType: "image/jpeg"
      }
    }
  ];

  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    generationConfig: { maxOutputTokens: 1000 }
  });

  return result.response.candidates[0].content.parts
    .filter(p => p.text)
    .map(p => p.text)
    .join('')
    .trim();
}

async function analyzeAnimal(genAI, modelId, imagesBase64) {
  try {
    const model = genAI.getGenerativeModel({ model: modelId });

    if (imagesBase64.length === 1) {
      const texto = await analizarUna(model, imagesBase64[0]);
      console.log(`🔬 ANÁLISIS FACIAL (1 animal):\n${texto}`);
      return texto;
    }

    const resultados = await Promise.all(
      imagesBase64.map((img, i) =>
        analizarUna(model, img).catch(err => {
          console.error(`⚠️ Error analizando animal ${i + 1}:`, err.message);
          return null;
        })
      )
    );

    const textoMulti = resultados
      .map((desc, i) =>
        desc
          ? `ANIMAL ${i + 1}:\n${desc}`
          : `ANIMAL ${i + 1}: description unavailable`
      )
      .join('\n\n---\n\n');

    console.log(`🔬 ANÁLISIS FACIAL (${imagesBase64.length} animales):\n${textoMulti}`);
    return textoMulti;

  } catch (err) {
    console.error('⚠️ Error en análisis facial:', err.message);
    return null;
  }
}

module.exports = analyzeAnimal;
