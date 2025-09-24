const prompt = require('prompt-sync')()

let number ,somme = 0
for(let i = 1 ; i <= 10 ;i++){
    number = Number(prompt("Entre number nr" + i +": "))
    if(number > 0){
        somme += number
    }
}
console.log(somme);

