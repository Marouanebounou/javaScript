const prompt = require("prompt-sync")();

let tab = [];
let tab2 = [];
for (let i = 0; i < 5; i++) {
  tab[i] = Number(prompt("Entre numero " + (i + 1) + ": "));
}

for (let i = 0; i < 5; i++) {
  tab2[i] = Number(prompt("Entre numero " + (i + 1) + ": "));
}
function fusionner(tab1, tab2) {
  let tab3 = [];
  let i = 0
  for ( i = 0; i < 5; i++) {
    tab3[i] = tab1[i];
  }
  i = 0
  for (let j = 5; j < 10; j++) {
    tab3[j] = tab2[i];
    i++
  }

  return tab3;
}

console.log(fusionner(tab, tab2));
