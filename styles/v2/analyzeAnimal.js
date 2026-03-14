// analyzeAnimal.js
// v10 — Análisis Forense de Alta Precisión Anatómica (Anti-Deformación)

const PROMPT_ANALISIS = `You are an elite forensic portraitist preparing a clinical anatomical guide for a master oil painter. Your job is to describe THIS SPECIFIC animal's exact physical structure so it can be replicated 1:1. 

PRISTINE CLEANLINESS OVERRIDE (CRITICAL): Completely ignore and omit any tear stains, eye discharge, saliva, food stains, or dirt. Describe the facial fur, eyes, and skin as perfectly clean, pristine, and healthy matching the natural coat color. DO NOT use words like "staining", "crusting", "dirt", or "discharge".

Describe the following with extreme forensic precision:

1. EXACT ANATOMICAL PROPORTIONS (CRITICAL):
- Head-to-body ratio (Is the head massive compared to the chest? Is the neck thick/short/long?)
- Snout/Muzzle length and width (Crucial for breed accuracy).
- Ear size and exact placement on the skull.

2. EYES & SOUL:
- Exact shape of the eye opening.
- Eyelid weight (heavy, drooping, alert).
- Emotional quality (regal, tender, indifferent, loyal).
- (Describe eyes as 100% clean, clear, and biologically healthy).

3. ASYMMETRY & UNIQUE IDENTITY:
- Note any natural asymmetry (e.g., one ear slightly lower, a crooked lip, an uneven fur patch). Perfection is fake; capture the real, slightly asymmetrical identity.
- Exact coat colors, specific patterns, and precise location of markings.

4. BONE STRUCTURE & MASS:
- Width of the chest and shoulders.
- Leg bone thickness (stout/heavy/delicate).
- The overall physical weight and presence of the animal.

Respond ONLY with the clinical description. No preamble. Write as a strict anatomical blueprint for a classical painting.`;

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
  return result.response.candidates[0].content.parts.filter(p => p.text).map(p => p.text).join('').trim();
}

async function analyzeAnimal(genAI, modelId, imagesBase64) {
  try {
    const model = genAI.getGenerativeModel({ model: modelId });
    if (imagesBase64.length === 1) {
      const texto = await analizarUna(model, imagesBase64[0]);
      console.log(`🔬 ANÁLISIS FACIAL (1 animal):\n${texto}`);
      return texto;
    } else {
      const resultados = await Promise.all(
        imagesBase64.map((img, i) => analizarUna(model, img).catch(err => {
            console.error(`⚠️ Error analizando animal ${i + 1}:`, err.message);
            return null;
          })
        )
      );
      const textoMulti = resultados.map((desc, i) => desc ? `ANIMAL ${i + 1}:\n${desc}` : `ANIMAL ${i + 1}: description unavailable`).join('\n\n---\n\n');
      console.log(`🔬 ANÁLISIS FACIAL (${imagesBase64.length} animales):\n${textoMulti}`);
      return textoMulti;
    }
  } catch (err) {
    console.error('⚠️ Error en análisis facial:', err.message);
    return null;
  }
}

module.exports = analyzeAnimal;
