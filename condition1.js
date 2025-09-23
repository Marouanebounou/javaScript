const prompt = require("prompt-sync")()

let num  = Number(prompt("Entre number "))

if((num % 2) == 0){
    console.log("Pair");
}else{
    console.log("impair");
}