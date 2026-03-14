// buildPrompt.js
// ENSAMBLADOR MAESTRO v10.0 — Calidad de Museo / Anti-IA / Fix Export

module.exports = function buildPrompt(analisis, pose, fondo, vestuario, cojin) {
  return `An exquisite masterpiece oil painting in the tradition of Dutch Golden Age portraiture (Rembrandt van Rijn and Diego Velázquez). 

MASTER MATERIALITY & BRUSHWORK (ANTI-AI OVERRIDE): 
This must NOT look like digital art, 3D render, or modern photography. Render with extreme tactile heavy oil materiality on canvas. Show visible raw canvas weave beneath the paint. Use thick, directional impasto brushwork with sculpted relief ridges on the velvet folds, fur, and gold details. Apply a microscopic, sparse, organic craquelure network (fine age cracks) integrated naturally into the paint layer, concentrating in background shadow areas and away from the subject's face. 

AGED PATINA: 
The entire composition is veiled by a thick, ancient, warm amber-yellowed varnish patina that unifies and mutes all colors with authentic centuries-old tonality. Restrained painterly economy — no digital clarity, zero plastic sheen, zero gloss. Muted earthy palette: reds become deep burgundy-brown, golds become antique bronze-ochre, whites become warm ivory-cream. No pure saturated hues.

LIGHTING HARMONY: 
A single soft diffused light source from the upper left — enveloping and warm, never harsh or raking. It eliminates all specular plastic-like highlights on skin, eyes, and fur. Deep chiaroscuro achieved through profound shadow depth, not highlight brightness.

---------------------------------------------------------
SUBJECT FORENSIC ANALYSIS (1:1 ANATOMICAL MATCH):
${analisis}

---------------------------------------------------------
${pose}

---------------------------------------------------------
${vestuario}

---------------------------------------------------------
${cojin}

---------------------------------------------------------
${fondo}

---------------------------------------------------------
FINAL DIRECTIVE: 
Ensure all elements (fur, velvet, cushion) interact physically with real gravity. The outer edges of the mantle and the deepest shadows MUST dissolve into the background via masterful sfumato. The portrait must exude absolute dynastic majesty and supreme high-ticket artistic quality.`;
};
