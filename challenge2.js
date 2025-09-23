const prompt = require("prompt-sync")()

let c = prompt("Entre température en Celsius")

let f = (c * 1.8) + 32

console.log(f)