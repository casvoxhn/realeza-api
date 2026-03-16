// ARCHIVO: utils/pick.js
// Funciones de selección aleatoria compartidas

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const weightedPick = (items) => {
  const total = items.reduce((sum, it) => sum + (it.weight || 1), 0);
  let r = Math.random() * total;
  for (const it of items) {
    r -= (it.weight || 1);
    if (r <= 0) return it.value;
  }
  return items[items.length - 1].value;
};

module.exports = { pick, weightedPick };
