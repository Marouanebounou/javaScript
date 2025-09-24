const prompt = require('prompt-sync')()

let numbers = []

for(let i = 0 ; i <5 ; i++){
    numbers[i] = Number(prompt('Entre nr'+ (i+1) + " "))
}

console.log(numbers.reverse());

