const prompt = require("prompt-sync")()

let a = Number(prompt("Entre la 1 Valeur: "))
let b = Number(prompt("Entre la 2 Valeur: "))
let c = Number(prompt("Entre la 2 Valeur: "))
let d = Number(prompt("Entre la 2 Valeur: "))

let somme = (a + b + c + d)
let moyenne = (a + b + c + d ) / 2

console.log("La somme : " , somme)
console.log("La moyenne : " , moyenne)
