// ARCHIVO: mujer.js
// V94: ADAPTACIÓN ORGÁNICA (Cero Plantillas). La foto original MANDA.

module.exports = function(style, numSubjects, isGroup) {

    // --- 1. ESTILOS ADAPTATIVOS (No aleatorios) ---
    // La IA debe "leer" la foto y mejorarla, no inventar de cero.
    let stylePrompt = "";

    if (style === 'musa') {
        stylePrompt = `
        **STYLE:** **Pre-Raphaelite / Romanticism** (Waterhouse style).
        **ADAPTATION STRATEGY:**
        - **Analyze the input background:** Transform it into a magical, artistic version. If she is indoors, turn it into a lush conservatory or ancient room. If outdoors, turn it into a magical garden.
        - **Analyze the outfit:** Transform her current clothes into flowing, ethereal silk robes that follow the same drape and movement.
        - **Vibe:** Soft, poetic, dreamy. Keep the gentleness of the original photo.
        `;
    } 
    else if (style === 'realeza') {
        stylePrompt = `
        **STYLE:** **Grand Manner Royal Portrait** (Winterhalter style).
        **ADAPTATION STRATEGY:**
        - **Analyze the input posture:** Elevate her current pose to be more majestic. Straighten the back slightly.
        - **Background:** Transform the surroundings into a Palace interior or terrace that MATCHES the lighting direction of the original photo.
        - **Attire:** Upgrade her current outfit into a Pompous Royal Ballgown. Add a Tiara that fits her head angle naturally.
        `;
    } 
    else if (style === 'empoderada') {
        stylePrompt = `
        **STYLE:** **High-Fashion Historical Portrait** (Boldini / Sargent style).
        **ADAPTATION STRATEGY:**
        - **Analyze the attitude:** Capture the exact energy/vibe she is projecting. Amplify it.
        - **Background:** Create a luxurious, dramatic atmosphere (Dark Velvet / Studio) that complements the subject's coloring.
        - **Attire:** Transform her clothes into a "Power Outfit" (Velvet, Silk, Structured) but respect the original silhouette if it's strong.
        `;
    }

    // --- 2. ENCUADRE ORGÁNICO ---
    // Ya no forzamos nada. Dejamos que la foto original dicte el mejor encuadre.
    let framingInstruction = "";
    if (numSubjects > 1) {
        framingInstruction = "**COMPOSITION:** Include ALL subjects comfortably. Use the original photo's arrangement as a guide but improve the spacing/balance.";
    } else {
        framingInstruction = `
        **COMPOSITION:** **RESPECT THE ORIGINAL FRAMING CUES.**
        - If the user uploaded a Close-Up -> Keep it intimate and detailed.
        - If the user uploaded a Full Body/Pose -> Keep the framing wide to show the outfit.
        - **IMPROVE, DON'T CROP:** You may widen the shot slightly to add artistic context, but do not lose the essence of the original crop.
        `;
    }

    // --- 3. PROMPT MAESTRO (ADAPTACIÓN TOTAL) ---
    return `
    You are a Master Painter performing a **HIGH-END STYLE TRANSFER**.
    
    **🔴 TECHNICAL:** ASPECT RATIO VERTICAL 4:5.

    **STEP 1: ANALYZE & RESPECT (THE BASE)**
    - Input: **${numSubjects} subject(s)**. Paint them ALL.
    - **IDENTITY:** Keep the facial features 100% IDENTICAL.
    - **ORGANIC BASIS:** Do NOT treat the input as a loose reference. Use the **lighting direction, pose, and composition** of the source image as the FOUNDATION.
    - **Avoid the "Sticker" effect:** The subject must feel like they are *actually* in the scene, not pasted on top. Match the lighting of the face to the background perfectly.

    **STEP 2: THE TRANSFORMATION**
    ${stylePrompt}
    ${framingInstruction}

    **STEP 3: ARTISTIC FINISH**
    - **Medium:** Oil on Canvas.
    - **Texture:** Realistic brushwork.
    - **Goal:** It should look like the user traveled back in time and posed for a painter, NOT like a Photoshop collage.

    **⛔ NEGATIVE CONSTRAINTS:**
    - **NO GENERIC TEMPLATES.**
    - NO CHANGING THE FACE.
    - NO DISCONNECTED LIGHTING (Subject and background must match).
    - NO CARTOON/3D.
    - NO MISSING PEOPLE/PETS.
    `;
};
