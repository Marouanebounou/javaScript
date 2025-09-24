const prompt = require("prompt-sync")();
let base ,exposant;;
do{
  base = Number(prompt("entrez une base: "));
  exposant = Number(prompt("entrez l'exposant: "));
}while (base < 0 && exposant <= 0)
let puissance = Math.pow(base, exposant);
console.log(" la puissance est: ",puissance);