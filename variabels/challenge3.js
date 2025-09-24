const prompt = require("prompt-sync")()

let A , B , C

A = 5
B = 10

console.log(A)
console.log(B)
console.log("-----------------------------------")

C = A
A = B
B = C

console.log(A)
console.log(B)