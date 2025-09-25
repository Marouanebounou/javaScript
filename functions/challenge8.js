const prompt = require('prompt-sync')()

let tab = []

for(let i = 0 ; i < 5 ; i++){
   tab[i] = Number(prompt("Entre numero "+ (i+1) + ": ")) 
}

function doubler(tab){
    let doubleTabe = []
    for(let i = 0 ; i < 5 ; i++ ){
        doubleTabe[i] = tab[i] * 2
    }
    return doubleTabe
}

console.log(doubler(tab));
