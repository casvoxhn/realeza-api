// detectAnimales.js
// Llama a Gemini con las fotos del cliente y detecta especie + raza de cada animal.
// Retorna array: [{ especie, raza }, ...]

async function detectarAnimales(genAI, modelId, imagesBase64) {
  try {
    const model = genAI.getGenerativeModel({ model: modelId });

    const parts = [
      {
        text: `Look at the photo(s) provided. For each animal visible, identify:
1. The species (dog, cat, rabbit, bird, horse, reptile, hamster, guinea pig, or other)
2. The breed if identifiable (or empty string if unknown)

Respond ONLY with a valid JSON array. No explanation, no markdown, no backticks.
Example: [{"especie":"dog","raza":"golden retriever"},{"especie":"cat","raza":"persian"}]
If you cannot identify an animal, use: {"especie":"unknown","raza":""}
`
      },
      ...imagesBase64.map(img => ({
        inlineData: {
          data: img.replace(/^data:image\/\w+;base64,/, ""),
          mimeType: "image/jpeg"
        }
      }))
    ];

    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig: { maxOutputTokens: 200 }
    });

    const text = result.response.candidates[0].content.parts
      .filter(p => p.text).map(p => p.text).join('');

    // Limpiar y parsear
    const clean = text.replace(/```json|```/g, '').trim();
    const animales = JSON.parse(clean);

    console.log(`🔍 Animales detectados:`, animales);
    return animales;

  } catch (err) {
    console.error('⚠️ Error detectando animales:', err.message);
    // Fallback seguro
    return imagesBase64.map(() => ({ especie: 'dog', raza: '' }));
  }
}

module.exports = detectarAnimales;
