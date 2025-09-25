const prompt = require('prompt-sync')()

let table = []

for(let i = 0 ; i < 5 ; i++){
   table[i] = Number(prompt("Entre numero "+ (i+1) + ": ")) 
}

function compterOccurrences(tab, valeur){
    let counter = 0
    valeur = Number(prompt("Entre la valeur"))
    for(let i = 0 ; i < 5 ; i++){
        if(tab[i] == valeur){
            ++counter
        }
    }
    return counter
}

console.log(compterOccurrences(table));


