const prompt = require('prompt-sync')()

let tab = []

for(let i = 0 ; i < 5 ; i++){
   tab[i] = Number(prompt("Entre numero "+ (i+1) + ": ")) 
}

function moyenne(tab){
    let somme = 0
    let moyenne = 0
    for(let i = 0 ; i < 5 ; i++){
        somme = somme + tab[i]
    }
    moyenne = somme / 5
    return moyenne
}

console.log(moyenne(tab));
