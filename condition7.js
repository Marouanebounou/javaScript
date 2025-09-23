const prompt = require("prompt-sync")()
let password = prompt("Entre votre mot de pass")
let passwordLenght = password.length()
const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
const isHaveSpecialCharacters = false
if(regex.test(password)){
    isHaveSpecialCharacters = true
}

if(passwordLenght >= 8 && isHaveSpecialCharacters){
    console.log("Fort");
    
}else if(passwordLenght >= 6){
    console.log("Moyenne");
    
}else{
    console.log("Faible");
    
}
