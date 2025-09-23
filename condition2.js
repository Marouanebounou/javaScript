const prompt = require("prompt-sync")()

let num = Number(prompt("Entre un valeur "))

if(num >= 0 ){
    console.log("Positif")
}else{
    console.log("Negatif");
}
