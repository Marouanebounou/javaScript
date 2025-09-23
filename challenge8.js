const prompt = require("prompt-sync")()
let numbers = []

for(let i = 0 ; i < 3 ; i++){
    numbers[i] = Number(prompt("Entre Number: "))
}
console.log(numbers);


numbers.reverse()

console.log(numbers)

