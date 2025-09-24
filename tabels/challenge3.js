const prompt = require('prompt-sync')()

let table = []

for(let i = 0 ; i <8 ; i++){
    table[i] = Number(prompt('Entre nr'+ (i+1) + " "))
}

let recherch = Number(prompt("Entre number pour rechercher: "))

if(table.indexOf(recherch) == -1){
    console.log("Number incconu");
}else{
    console.log('Number trouver ,' ,(table.indexOf(recherch) +1) );
}
