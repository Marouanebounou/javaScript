const prompt = require('prompt-sync')()

let mots = []

for(let i = 0 ; i < 5 ; i++){
    mots[i] = prompt("Entre une mot nr "+(i+1) + ": ")
    
}

let n =0

n = prompt("Entre le longueur ")


function motsLongs(tabMots, longueur){
    for(let i = 0 ; i < 5 ; i++){
        if(tabMots[i].length == longueur){
            console.log(tabMots[i]);
            
        }
    }
}

motsLongs(mots , n)



