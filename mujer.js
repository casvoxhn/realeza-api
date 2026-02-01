// ARCHIVO: mujer.js
// Lógica V91: EQUILIBRIO TOTAL (Cara Idéntica + Pose Nueva y Dramática + No Filtro)

module.exports = function(style, numSubjects, isGroup) {
    
    // --- 1. LÓGICA DE ENCUADRE INTELIGENTE ---
    let framingInstruction = "";
    if (numSubjects > 1) {
        framingInstruction = "**COMPOSITION RULE:** GROUP SHOT. Use a **Medium Shot (Waist Up)** or **Three-Quarter Shot** to include everyone comfortably. Create a cohesive, loving group arrangement.";
    } else {
        framingInstruction = `
        **COMPOSITION RULE:** **BEST AESTHETIC CHOICE FOR THE POSE.**
        - If the new pose is powerful (e.g., hands on hips, swishing dress) -> **Medium Shot** or **Three-Quarter Shot**.
        - If the new pose is intimate (e.g., looking over shoulder) -> **Close-Up Portrait**.
        `;
    }

    // --- 2. ESTILOS DE MUSEO (Con Poses Sugeridas) ---
    let stylePrompt = "";

    if (style === 'musa') {
        stylePrompt = `
        **STYLE:** **Pre-Raphaelite Masterpiece** (Waterhouse style). 100% Oil.
        **POSE SUGGESTION:** Dreamy, gentle. Looking slightly away, touching hair or a flower, relaxed shoulders. Ethereal.
        **SETTING:** Magical Garden, Twilight Lake, or Ancient Balcony.
        **ATTIRE:** Flowing silk robes, flower crowns. Pastel or Jewel tones.
        **LIGHTING:** Soft Magical Glow. Flattering.
        `;
    } 
    else if (style === 'realeza') {
        stylePrompt = `
        **STYLE:** **Royal Court Portrait** (Winterhalter style). High-finish Oil.
        **POSE SUGGESTION:** Majestic, proud. Chin slightly up, straight back, one hand elegantly resting on the dress volume or holding a fan.
        **SETTING:** Opulent Palace Interior or Bright Balcony.
        **ATTIRE:** Massive Royal Ballgown, Tiara, Diamonds.
        **LIGHTING:** Luxurious Daylight. Sparkling.
        `;
    } 
    else if (style === 'empoderada') {
        stylePrompt = `
        **STYLE:** **High-Fashion Historical Portrait** (Boldini / Sargent). Dynamic Oil.
        **POSE SUGGESTION:** Dynamic, confident. Hand on hip, intense gaze at the viewer, body turned slightly to show silhouette.
        **SETTING:** Dramatic Studio or Luxurious Interior (Velvet/Gold).
        **ATTIRE:** Structured Power Fashion (Black Velvet, Red Silk).
        **LIGHTING:** Studio Beauty Lighting. High contrast, sculpting.
        `;
    }

    // --- 3. PROMPT MAESTRO (EL CEREBRO) ---
    return `
    You are a Master Painter creating a **MUSEUM-QUALITY OIL PAINTING**.

    **🔴 CRITICAL TECHNICAL REQUIREMENT:**
    **ASPECT RATIO:** **VERTICAL 4:5**. DO NOT MAKE IT SQUARE.

    **STEP 1: THE ACTOR (IDENTITY LOCK)**
    - Input: **${numSubjects} subject(s)**. Paint them all.
    - **BIOMETRIC FIDELITY:** You must keep the **EXACT facial features** (nose, eyes, mouth) of the source photo. The person must be instantly recognizable.
    - **BEAUTIFICATION:** Improve skin texture and lighting, but do NOT change the facial structure to look generic.

    **STEP 2: THE PERFORMANCE (DYNAMIC TRANSFORMATION - CRITICAL)**
    - **NO "FILTER" EFFECT:** Do NOT just paint over the original photo's pose. That is boring.
    - **RE-POSE THE SUBJECT:** The face remains the same, but you must **change the body pose, head angle, and hands** to match a dramatic, historical painting style.
    - **ELEVATE THE IMAGE:** Make the posture elegant and royal. The composition must be much better than the original snapshot.

    **STEP 3: STYLE & FRAMING**
    ${stylePrompt}
    ${framingInstruction}
    - **TEXTURE:** Rich Oil Painting canvas texture.

    **⛔ NEGATIVE CONSTRAINTS:**
    - **DO NOT CHANGE THE FACE IDENTITY.**
    - **DO NOT USE THE ORIGINAL PHOTO'S BORING POSE.**
    - NO PICTURE FRAMES, NO BORDERS.
    - NO CARTOON, NO 3D RENDER.
    `;
};
