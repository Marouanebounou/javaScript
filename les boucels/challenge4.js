const prompt = require('prompt-sync')()

let num = prompt("Entre numbers: ")

let reversed =  String(num).split('').reverse().join('')

console.log("reversed: ",reversed);

