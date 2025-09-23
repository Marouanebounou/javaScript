
const prompt = require("prompt-sync")()

const user = prompt("Entre votre Nom : ")

const password = prompt("Entre votre Mot de pass : ")

if((user == "admin") && (password == 1234) ){
    console.log("Bienvenue Admin")
}else if(user !== "admin"){
    console.log("Utilisateur introuvable");
}else{
    console.log("Mot de passe incorrect");
    
}

