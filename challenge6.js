const prompt = require("prompt-sync")()


let distance =  Number(prompt("Entre le Distance : "))
let vittesse = Number(prompt("Entre le Vitesse : "))

let temp = distance / vittesse

console.log("Le temps est : " , temp , "H")