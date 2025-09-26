const prompt = require('prompt-sync')()

function maxTableau(table){
    let max = 0
    for(let i = 0 ; i < 5 ; i++){
        if(max < table[i]){
            max = table[i]
        }
    }
    return max
}

let tab = []

for(let i = 0 ; i < 5 ; i++){
   tab[i] = Number(prompt("Entre numero "+ (i+1) + ": ")) 
}


console.log(maxTableau(tab));

