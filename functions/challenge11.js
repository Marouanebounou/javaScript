const prompt = require('prompt-sync')()

let n 

n =  Number(prompt('Entre une numero: '))

function tableMultiplication(n){
    let multyTable = []
    for(let i = 0 ; i < 10 ; i++ ){
        multyTable[i] = n * (i+1)

        
    }
    return multyTable
}

console.log(tableMultiplication(n))
