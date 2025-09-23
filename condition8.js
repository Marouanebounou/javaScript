const prompt = require("prompt-sync")()

let color = prompt("Entre = 'rouge', 'jaune' ou 'vert'")


switch(color){
    case "rouge":
        console.log("Arrêt");
    break
    case "jaune":
        console.log("Préparez-vous");
    break
    case "vert":
        console.log("Allez");
    break
    default : console.log("Incorrect");
    
        

}
