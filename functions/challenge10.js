const prompt = require("prompt-sync")();

let tab = [];

for (let i = 0; i < 10; i++) {
  tab[i] = Number(prompt("Entre numero " + (i + 1) + ": "));
}

function supprimerDoublons(tab){
  let newTab = [...new Set(tab)]
  return newTab
}

console.log(supprimerDoublons(tab));
