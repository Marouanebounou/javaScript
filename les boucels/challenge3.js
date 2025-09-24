
const prompt = require("prompt-sync")()
let somme = 0
let maximum = 0
let num = 0

do{
    num = Number(prompt("Entre un number entre 0 et 100 et 0 pour stop: "))
    if(num !== 0){
        switch(num){
            case 10:
                somme = somme + 10
                if(maximum < 10){
                    maximum = 10
                }
                break
            case 20:
                somme = somme + 20
                if(maximum < 20){
                    maximum = 20
                }
                break
            case 30:
                somme = somme + 30
                if(maximum < 30){
                    maximum = 30
                }
                break
            case 40:
                somme = somme + 40
                if(maximum < 40){
                    maximum = 40
                }
                break
            case 50:
                somme = somme + 50
                if(maximum < 50){
                    maximum = 50
                }
                break
            case 60:
                somme = somme + 60
                if(maximum < 60){
                    maximum = 60
                }
                break
            case 70:
                somme = somme + 70
                if(maximum < 70){
                    maximum = 70
                }
                break
            case 80:
                somme = somme + 80
                if(maximum < 80){
                    maximum = 80
                }
                break
            case 90:
                somme = somme + 90
                if(maximum < 90){
                    maximum = 90
                }
                break
            default:
                if( num > 100 && num < 0){
                   console.log("The application stopped")
                }
            break
        }
    }else if(num == 0 ){
        console.log("Application stoped")
    }

}while(num > 0 && num < 100)


console.log("maximum : " ,maximum);
console.log("somme : " ,somme);

