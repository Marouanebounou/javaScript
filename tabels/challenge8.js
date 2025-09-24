const prompt = require('prompt-sync')()

let word = prompt("Entrer une chaîne: ")
const vowels = ["a", "e", "i", "o", "u", "y"];

console.log(word.toLowerCase().split('').filter(char => vowels.includes(char)).length);


