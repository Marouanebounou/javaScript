const prompt = require("prompt-sync")()

let age = Number(prompt("Entre votre age "))

if(age>=18){
    console.log("Eligible au vote");
    
}else{
    console.log("Non Eligible");
    
}
