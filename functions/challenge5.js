const prompt = require('prompt-sync')()

let tab = []

for(let i = 0 ; i < 5 ; i++){
   tab[i] = Number(prompt("Entre numero "+ (i+1) + ": ")) 
}


function filtrerPairs(table){
    let pairTable = []
    for(let i = 0 ; i < 5 ; i++){
        if ((table[i] % 2) == 0) {
            pairTable.push(table[i]) 
        }
    }
    return pairTable
}

console.log(filtrerPairs(tab));
