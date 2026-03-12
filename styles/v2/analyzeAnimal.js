// analyzeAnimal.js
// Paso 1 de 2: Gemini analiza la foto y describe la cara con precisión quirúrgica.
// El resultado se inyecta en el prompt de generación como instrucción específica.

async function analyzeAnimal(genAI, modelId, imagesBase64) {
  try {
    const model = genAI.getGenerativeModel({ model: modelId });

    const parts = [
      {
        text: `You are a forensic portraitist preparing to paint this specific animal.
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
- Any discoloration or pigmentation around the mouth

SKULL & FACE:
- Width-to-height ratio of the skull (wide/narrow/square)
- Depth of the stop (forehead-to-muzzle indent)
- Prominence of cheekbones
- Any tilt or asymmetry of the face
- Ear position and shape

BODY:
- Leg length relative to body (short/normal/long)
- Chest width (barrel-chested/narrow/normal)
- Overall mass and weight impression
- Any distinctive physical features

Respond ONLY with the clinical description. No preamble, no "I see a dog", no explanation.
Write as if you are leaving notes for a painter who cannot see the photo.`
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
      generationConfig: { maxOutputTokens: 1000 }
    });

    const text = result.response.candidates[0].content.parts
      .filter(p => p.text)
      .map(p => p.text)
      .join('');

    console.log(`🔬 ANÁLISIS FACIAL:\n${text}`);
    return text.trim();

  } catch (err) {
    console.error('⚠️ Error en análisis facial:', err.message);
    return null; // Si falla, el sistema sigue sin el análisis
  }
}

module.exports = analyzeAnimal;
