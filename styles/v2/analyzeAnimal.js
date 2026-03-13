// analyzeAnimal.js
// Análisis forense de cada animal por separado.
// Single: analiza la única foto y devuelve string.
// Multi: analiza cada foto individualmente en paralelo y devuelve texto etiquetado.

const PROMPT_ANALISIS = `You are a forensic portraitist preparing to paint this specific animal.
Your job is to write a precise, clinical description of this individual's face and body
so that another painter can replicate its anatomy exactly.

PRISTINE CLEANLINESS OVERRIDE (CRITICAL): When analyzing and describing the animal's face, you MUST completely ignore and omit any tear stains, eye discharge (epiphora), saliva stains, food stains, dirt, or crusting. You must describe the facial fur, eyes, and skin as perfectly clean, pristine, and healthy. DO NOT output words like "staining", "crusting", "dirt", "discharge", "discoloration", or "red tissue" around the eyes or mouth. If the animal has tear stains or dirt in the photo, describe that area as having clean, pure fur matching its natural coat color.

Describe the following in exact, specific terms:

EYES:
- Shape of the eye opening (narrow slit, wide oval, almond, etc.)
- Weight of the eyelids — are they heavy, drooping, half-closed?
- Exact gaze direction — straight, down-left, up-right, etc.
- Emotional quality of the gaze — sad, indifferent, alert, tired, curious
- (REMEMBER: Eyes and lower lids must be described as 100% clean and healthy)

MUZZLE & NOSE:
- Exact coloration of the nose — black, pink, mottled, spotted pattern (no dirt or crusts)
- Shape of the nostrils
- Wrinkle pattern around the muzzle — describe each major fold and its position
- Lip shape and any asymmetry
- (REMEMBER: Muzzle and mouth area must be described as 100% clean fur)

SKULL & FACE:
- Width-to-height ratio of the skull (wide/narrow/square)
- Depth of the stop (forehead-to-muzzle indent)
- Prominence of the cheekbones
- Any tilt or asymmetry of the face
- Ear position and shape

BODY:
- Leg length relative to body (short/normal/long)
- Chest width (barrel-chested/narrow/normal)
- Overall mass and weight impression
- Any distinctive physical features (e.g. fluffy tail, dense mane)

Respond ONLY with the clinical description. No preamble, no "I see a dog", no explanation.
Write as if you are leaving notes for a painter who cannot see the photo, ensuring the subject sounds immaculate.`;

// Analiza UNA sola imagen
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

// Exportado — maneja single y multi automáticamente
async function analyzeAnimal(genAI, modelId, imagesBase64) {
  try {
    const model = genAI.getGenerativeModel({ model: modelId });

    if (imagesBase64.length === 1) {
      // ── SINGLE ─────────────────────────────────────────────────────────
      const texto = await analizarUna(model, imagesBase64[0]);
      console.log(`🔬 ANÁLISIS FACIAL (1 animal):\n${texto}`);
      return texto;

    } else {
      // ── MULTI — cada foto analizada por separado en paralelo ────────────
      const resultados = await Promise.all(
        imagesBase64.map((img, i) =>
          analizarUna(model, img).catch(err => {
            console.error(`⚠️ Error analizando animal ${i + 1}:`, err.message);
            return null;
          })
        )
      );

      // Texto etiquetado: ANIMAL 1, ANIMAL 2, etc.
      const textoMulti = resultados
        .map((desc, i) =>
          desc
            ? `ANIMAL ${i + 1}:\n${desc}`
            : `ANIMAL ${i + 1}: description unavailable`
        )
        .join('\n\n---\n\n');

      console.log(`🔬 ANÁLISIS FACIAL (${imagesBase64.length} animales):\n${textoMulti}`);
      return textoMulti;
    }

  } catch (err) {
    console.error('⚠️ Error en análisis facial:', err.message);
    return null; // No es fatal — el sistema sigue sin el análisis
  }
}

module.exports = analyzeAnimal;
