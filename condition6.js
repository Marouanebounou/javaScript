const prompt = require("prompt-sync")()

let anne = Number(prompt("Entre un anne "))

if((anne % 4 ) == 0 && ((anne % 100 ) == 1 && (anne % 400) == 0)){
    console.log("bissextile");
}else{
    console.log("Non Bissextile");
    
}