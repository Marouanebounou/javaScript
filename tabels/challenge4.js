const prompt = require('prompt-sync')()

let table = []
for(let i = 0 ; i <3 ; i++){
    table[i] = prompt('Entre noms '+ (i+1) + " ")
}

let rechercher = prompt("Entre un nom pour rechercher: ")

if(!(table.includes(rechercher))){
    console.log("Nom introuvee");
}else{
    console.log("La chaîne" , `"${rechercher}"` , "a été trouvée à la position " +(table.indexOf(rechercher) +1));
    
}

