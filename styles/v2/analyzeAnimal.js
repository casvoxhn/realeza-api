// analyzeAnimal.js
// Análisis forense de cada animal por separado.
// Single: analiza la única foto y devuelve string.
// Multi: analiza cada foto individualmente en paralelo y devuelve texto etiquetado.

const PROMPT_ANALISIS = `You are a forensic portraitist preparing to paint this specific animal.
Your job is to write a precise, clinical description of this individual's face and body
so that another painter can replicate it exactly — with all its imperfections.

Describe the following in exact, specific terms:

EYES:
- Shape of the eye opening (narrow slit, wide oval, almond, etc.)
- Weight of the eyelids — are they heavy, drooping, half-closed?
- Lower lid condition — does it sag? Does it show red or pink tissue?
- Exact gaze direction — straight, down-left, up-right, etc.
- Emotional quality of the gaze — sad, indifferent, alert, tired, curious

MUZZLE & NOSE:
- Exact coloration of the nose — black, pink, mottled, spotted pattern
- Shape of the nostrils
- Wrinkle pattern around the muzzle — describe each major fold and its position
- Lip shape and any asymmetry
- Any discoloration, staining, or unique pigmentation around the mouth

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
- Any distinctive physical features

Respond ONLY with the clinical description. No preamble, no "I see a dog", no explanation.
Write as if you are leaving notes for a painter who cannot see the photo.`;

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
