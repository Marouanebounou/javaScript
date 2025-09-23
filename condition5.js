const prompt = require("prompt-sync")();

let A = Number(prompt("entrer la note : "));

switch (true){
        case  A>=90 && A<=100:
             console.log("A")
           break;
        case  A>=80 && A<=89:
           console.log("B")
           break;
        case  A>=70 && A<=79:
           console.log("C")
           break;
        case  A>=60 && A<=69:
           console.log("D")
           break;
        case  A<60 :
           console.log("F")
           break;
        }
