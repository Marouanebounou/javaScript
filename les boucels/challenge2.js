const prompt = require("prompt-sync")()

let num = Number(prompt("Entre un number: "))
let isPremier = true

for(let i = 1 ; i <= num ; i++ ){
    if(num % i == 0){
        if(i !== 1 && i !== num){
            isPremier = false
            break
        }
    }else{
        isPremier = true
    }
}

if(isPremier){
    console.log("Premier");
}else{
    console.log("Non Premier");
}