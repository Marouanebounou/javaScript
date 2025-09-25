const prompt = require('prompt-sync')()

let tab = []

for(let i = 0 ; i < 5 ; i++){
   tab[i] = Number(prompt("Entre numero "+ (i+1) + ": ")) 
}

function inverserTableau(table){
    return table.reverse()
}

console.log(inverserTableau(tab));

