// ARCHIVO: mujer.js
// V116: MASTERPIECE ENGINE (Contexto + Identidad Blindada + Inclusión Absoluta + WOW Poses)
// Agrega reinterpretación de pose sin tocar la cara. Diseñado para Nano Banana Pro.

module.exports = function(style, numSubjects, isGroup) {

    // --- 0. MOTOR DE MICRO-VARIACIONES ---
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const wowDetails = pick([
        "gold-leaf accents in ornamental details",
        "museum-grade oil glazing on skin and silk highlights",
        "ultra-detailed gemstone reflections",
        "soft atmospheric depth behind the subjects",
        "controlled chiaroscuro with luminous facial planes",
        "sfumato edges around cheeks and hair (no distortion)"
    ]);

    const brushwork = pick([
        "layered glazing + gentle impasto highlights",
        "visible confident brushstrokes on fabrics with ultra-refined faces",
        "old-master textured canvas grain",
        "collector-grade conservation finish"
    ]);

    // --- 0.1 POSE ENGINE (reinterpretar sin cambiar identidad) ---
    const poseEngine = `
    **POSE ENGINE — WOW EFFECT (FACE MUST STAY IDENTICAL):**
    - You may reinterpret the body posture to elevate the portrait into a heroic, elegant museum pose.
    - Keep head proportions and facial angle recognizable.
    - Improve posture: elongated spine, open shoulders, regal neck line.
    - Avoid selfie posture or casual slouching.

    **SOLO WOW POSES (choose what fits the style):**
    - seated throne-like posture with calm authority
    - standing contrapposto with flowing garments
    - three-quarter turn with lifted chin and soft dominance
    - graceful hand resting on armrest / book / sash
    - subtle forward lean creating presence

    **GROUP WOW POSES:**
    - classical triangular dynasty arrangement
    - seated-standing mix with queen centered
    - symmetrical noble lineup with depth layers
    - protective arrangement around pets or children
    - mirrored posture between friends

    Faces remain untouched. Bodies may be elevated.
    `;

    // --- 0.2 CONTEXT ENGINE ---
    const contextEngine = `
    **CONTEXT INTELLIGENCE (READ PHOTO, DO NOT INVENT):**
    - Infer relationships only from the reference.
    - Express it visually through spacing, gaze and touch.
    - Friends: warm symmetry.
    - Family: protective closeness.
    - Couple: subtle touch.
    - Colleagues: power-duo spacing.
    `;

    const petEngine = `
    **PET RULES:**
    - Include ALL pets.
    - Place them visibly and proudly.
    - Dogs = loyal guardian vibe.
    - Cats = regal elegance.
    `;

    // --- 1. ESTILOS ---
    let stylePrompt = "";

    if (style === 'musa') {
        const scenes = [
            "Ancient Garden with fireflies",
            "Twilight lake shore",
            "Misty forest clearing",
            "Rose terrace at sunset"
        ];
        const fabrics = ["Sheer chiffon", "Flowing silk", "Antique lace"];
        const colors = ["Ivory & Champagne", "Lavender & Pearl", "Dusty Rose & Gold"];

        stylePrompt = `
        **ARTISTIC VISION:** Mythical Muse.
        **VIBE:** poetic, luminous, ethereal.
        **SCENE:** ${pick(scenes)}.
        **ATTIRE:** ${pick(fabrics)} in ${pick(colors)}.
        **LIGHTING:** soft sfumato glow.
        `;
    } 
    else if (style === 'realeza') {
        const scenes = [
            "Opulent throne room",
            "Hall of mirrors",
            "Royal balcony",
            "Gilded palace chamber"
        ];
        const colors = ["Crimson & Gold", "Royal Blue & Diamonds", "Emerald & Gold"];
        const gowns = [
            "brocade court gown with cathedral train",
            "ermine-trimmed velvet mantle",
            "architectural imperial ballgown"
        ];

        stylePrompt = `
        **ARTISTIC VISION:** Absolute Monarch.
        **VIBE:** dynastic, imperial, opulent.
        **SCENE:** ${pick(scenes)}.
        **ATTIRE:** ${pick(gowns)} in ${pick(colors)}.
        **MANDATORY:** crown, heavy jewels, royal regalia.
        `;
    } 
    else if (style === 'empoderada') {
        const scenes = [
            "Renaissance council hall",
            "Royal library",
            "Torch-lit stone chamber",
            "Court staircase"
        ];
        const outfits = [
            "Renaissance brocade gown with ruff collar",
            "velvet noble dress with slashed sleeves",
            "high-collar court gown with gold chains"
        ];

        stylePrompt = `
        **ARTISTIC VISION:** Renaissance Power Woman.
        **VIBE:** commanding, intelligent, intimidating elegance.
        **SCENE:** ${pick(scenes)}.
        **ATTIRE:** ${pick(outfits)}.
        **RULE:** no modern clothing.
        `;
    }

    // --- 2. ENCUADRE ---
    let framing = "";
    
    if (numSubjects > 1) {
        framing = `
        **GROUP DYNASTY FRAMING:**
        - Include ALL ${numSubjects} humans and pets.
        - Wide three-quarter portrait.
        - Keep all heads visible.
        - Woman is focal point, others fully present.
        ${contextEngine}
        ${petEngine}
        `;
    } else {
        framing = `
        **ICONIC SOLO FRAMING:**
        - Three-quarter or waist-up portrait.
        - Regal reinterpretation pose.
        `;
    }

    // --- 3. PROMPT MAESTRO ---
    return `
    You are a master painter creating a museum-grade oil portrait.

    ASPECT RATIO: vertical 4:5.

    **IDENTITY FIRST:**
    - Preserve EXACT facial features.
    - No face replacement.
    - Beautify only with lighting and texture.
    - Haircut and length locked.

    **SUBJECT COUNT:**
    Paint exactly ${numSubjects} humans plus any pets.

    ${poseEngine}

    ${stylePrompt}
    ${framing}

    **EXECUTION:**
    - Oil on canvas.
    - ${brushwork}.
    - Collector-grade finish.
    - Wow-worthy living-room artwork.

    **NEGATIVES:**
    No new faces. No missing subjects. No cartoon. No 3D.
    No plastic skin. No text or watermarks.
    `;
};
