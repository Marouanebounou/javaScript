const prompt = require("prompt-sync")()

let num = Number(prompt("Entre un number"))

for(let i = 1 ; i <= 10 ; i++ ){
    console.log(i , '*' , num , '=' ,num * i )
}