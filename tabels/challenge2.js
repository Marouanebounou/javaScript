const prompt = require('prompt-sync')()

let table = []
let somme = 0
let moyenne
for(let i = 0 ; i <10 ; i++){
    table[i] = Number(prompt('Entre nr'+ (i+1) + " "))
    somme = somme + table[i]
}
moyenne = somme / 10

console.log("La somme est :" , somme);
console.log("La moyenne est :", moyenne);
