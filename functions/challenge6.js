const prompt = require('prompt-sync')()

let tab = []

for(let i = 0 ; i < 5 ; i++){
   tab[i] = Number(prompt("Entre numero "+ (i+1) + ": ")) 
}
function produitTableau(tab){
    let produit = 1

    for(let i = 0 ; i < 5 ; i++){
        produit = produit * tab[i]
    }
    return produit
}

console.log(produitTableau(tab));

