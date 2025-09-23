const prompt = require("prompt-sync")()

let r = Number(prompt("Entre le rayon: "))

const pi = 3.14

let c = 2 * pi * r

console.log("Le rayon est : " , c)
