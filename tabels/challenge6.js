const prompt = require('prompt-sync')()

let table = []

for(let i = 0 ; i < 5 ; i++){
    table[i] = Number(prompt("Entre number nr "+(i+1) +": "))
}

table.forEach((item => console.log(item * 2)))
