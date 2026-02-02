// ARCHIVO: mujer.js
// ESTILO: Mujer (Se conecta con masterPrompt para la identidad)

const masterPrompt = require('./masterPrompt'); // Importamos el cerebro

module.exports = function(style, numSubjects, isGroup) {

    // --- 0. MOTOR DE ALEATORIEDAD (Variedad Visual) ---
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // --- 1. DEFINICIÓN DEL ROL (ESTILO) ---
    let styleDescription = "";

    if (style === 'musa') {
        const scenes = [
            "a mysterious Ancient Forest with dappled sunlight",
            "a serene Crystal Lake at twilight",
            "a Secret Garden filled with magical mist"
        ];
        const colors = ["Dusty Rose & Gold", "Deep Emerald", "Ethereal White"];
        
        styleDescription = `
        **ROLE:** **The Ethereal Muse (Nature Goddess).**
        **SCENE:** ${pick(scenes)}.
        **COSTUME:** A flowing gown made of Silk/Chiffon in ${pick(colors)}. Adorned with flowers.
        **LIGHTING:** Soft, magical "Sfumato" glow. Dreamy atmosphere.
        `;
    } 
    else if (style === 'realeza') {
        const scenes = [
            "a Grand Hall of Mirrors",
            "a Royal Terrace overlooking an empire",
            "an Opulent Palace Throne Room"
        ];
        const colors = ["Royal Blue & Diamonds", "Crimson Velvet & Gold", "Champagne Silk"];
        
        styleDescription = `
        **ROLE:** **The Absolute Queen.**
        **SCENE:** ${pick(scenes)}.
        **COSTUME:** A massive Royal Ballgown in ${pick(colors)}. **MANDATORY:** A Sparkling Tiara on her head.
        **LIGHTING:** Luxurious, crisp daylight. High-end sparkle.
        `;
    } 
    else if (style === 'empoderada') {
        const scenes = [
            "a Luxurious Renaissance Library",
            "a Grand Stone Staircase",
            "a Venetian Balcony"
        ];
        const outfits = [
            "Structured Gold Brocade Gown",
            "Deep Red Velvet Power-Dress",
            "Navy Blue Silk gown with a cape"
        ];
        
        styleDescription = `
        **ROLE:** **The Renaissance Matriarch (Power & Ego).**
        **SCENE:** ${pick(scenes)}.
        **COSTUME:** ${pick(outfits)}. Historical, expensive, structured.
        **LIGHTING:** "Butterfly" Studio Lighting. Dramatic contrast, sculpting the face.
        `;
    }

    // --- 2. ENCUADRE (Composición) ---
    let framing = "";
    if (numSubjects > 1) {
        framing = `**GROUP COMPOSITION:** Medium Shot (Waist Up). Zoom out to fit everyone (partners/pets). The main woman is the CENTERPIECE.`;
    } else {
        framing = `**SOLO COMPOSITION:** Intelligent Framing. If the face is expressive -> Close-Up. If the dress is big -> Medium Shot.`;
    }

    // --- 3. LLAMADA AL MAESTRO ---
    // Aquí ocurre la magia: Enviamos el estilo y el encuadre al Maestro para que aplique las reglas de identidad.
    return masterPrompt(numSubjects, styleDescription, framing);
};
