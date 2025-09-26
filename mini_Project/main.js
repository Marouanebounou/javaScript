const prompt = require("prompt-sync")();

// variabels
let hestoric = [];

//execution:

choice();

// Les functions:

function choice() {
  let number 
 do{
    console.log("Entrez \n le numéro 1 pour executer \n le numéro 2 pour hestoric \n le numéro 3 pour exit\n ");
    
    number = Number(
    prompt(
      "Entrez: "
    )
  );
  console.log("*".repeat(20));
  if(number !== 1 && number !== 2 && number !== 3 ){
    console.log("Invalide input");
  }
 }while(number !== 1 && number !== 2 && number !== 3)
  console.log("*".repeat(20));
  
  switch (number) {
    case 1:
      operation();
      break;
    case 2:
      showHestoric();
      
      break;
    case 3:
      exit();
      break;
    default:
      console.log("Entrez une valide numero: ");
  }
}

function operation() {
  let number1, number2;
  let result = 0;
  let operationNumero;
  console.log(" Entrez: \n 0 pour retourner \n 1 pour l'addition (+) \n 2 pour la soustraction (-) \n 3 pour la multiplication (*) \n 4 pour la division (/) \n 5 pour calculer la puissance \n 6 pour calculer le racine carree \n 7 pour calculer la factorielle");
  
  operationNumero = Number(prompt("Entrez: "));
console.log("*".repeat(20));

  switch (operationNumero) {
    case 0 :
        choice()
        console.log("*".repeat(20));
    break
    case 1:
      do {
        number1 = Number(prompt("Entrez la numero 1: "));
        number2 = Number(prompt("Entrez la numero 2: "));
      } while ((typeof number1 && typeof number2) !== "number");
      Addition(number1, number2);
      console.log("*".repeat(20));
      operation();
      break;
    case 2:
      do {
        number1 = Number(prompt("Entrez la numero 1: "));
        number2 = Number(prompt("Entrez la numero 2: "));
      } while ((typeof number1 && typeof number2) !== "number");
      Soustraction(number1, number2);
      console.log("*".repeat(20));
      operation();
      break;
    case 3:
      do {
        number1 = Number(prompt("Entrez la numero 1: "));
        number2 = Number(prompt("Entrez la numero 2: "));
      } while ((typeof number1 && typeof number2) !== "number");
      Multiplication(number1, number2);
      console.log("*".repeat(20));
      operation();
      break;
    case 4:
      do {
        number1 = Number(prompt("Entrez la numero 1: "));
        number2 = Number(prompt("Entrez la numero 2: "));
        if (number2 == 0) {
          console.log("Division impossible par 0");
        }
      } while ((typeof number1 && typeof number2) !== "number" || number2 == 0);
      Division(number1, number2);
      console.log("*".repeat(20));
      operation();
      break;
    case 5:
      do {
        number1 = Number(prompt("Entrez la numero 1: "));
        number2 = Number(prompt("Entrez la numero 2: "));
      } while ((typeof number1 && typeof number2) !== "number");
      Puissanc(number1, number2);
      console.log("*".repeat(20));
      operation();
      break;
    case 6:
      do {
        number1 = Number(prompt("Entrez la numero : "));
        if (number1 < 0) {
          console.log(
            "la racine carrée n'est pas possible pour les nombres négatifs"
          );
        }
      } while (typeof number1 !== "number" || number1 < 0);
      RacineCarrée(number1);
      console.log("*".repeat(20));
      operation();
      break;
    case 7:
      do {
        number1 = Number(prompt("Entrez la numero : "));
        if (number1 < 0) {
          console.log(
            "la factorielle n'est pas possible pour les nombres négatifs"
          );
        }
      } while (typeof number1 !== "number" || number1 < 0);
      Factorielle(number1);
      console.log("*".repeat(20));
      operation();
      break;
    default:
      console.log("Invalide numero réessayer ");
      operation();
  }

  function Addition(number1, number2) {
    result = number1 + number2;
    console.log(number1 + " + " + number2 + " = " + result);
    hestoric.push(`${number1} + ${number2} = ${result}`);
    result = 0;
    console.log("*".repeat(20));
}

  function Soustraction(number1, number2) {
    result = number1 - number2;
    console.log(number1 + " - " + number2 + " = " + result);
    hestoric.push(`${number1} - ${number2} = ${result}`);
    result = 0;
    console.log("*".repeat(20));
  }

  function Multiplication(number1, number2) {
    result = number1 * number2;
    console.log(number1 + " * " + number2 + " = " + result);
    hestoric.push(`${number1} * ${number2} = ${result}`);
    result = 0;
    console.log("*".repeat(20));
  }

  function Division(number1, number2) {
    result = number1 / number2;
    console.log(number1 + " / " + number2 + " = " + result);
    hestoric.push(`${number1} / ${number2} = ${result}`);
    result = 0;
    console.log("*".repeat(20));
  }

  function Puissanc(number1, number2) {
    result = Math.pow(number1, number2);
    console.log(number1 + " ^ " + number2 + " = " + result);
    hestoric.push(`${number1} ^ ${number2} = ${result}`);
    result = 0;
    console.log("*".repeat(20));
  }

  function RacineCarrée(number1) {
    result = Math.sqrt(number1);
    console.log(`Le racine carree de numbre ${number1} est : ` + result);
    hestoric.push(`le racine carree de numbre ${number1} est: ${result} .`);
    result = 0;
    console.log("*".repeat(20));
  }

  function Factorielle(number1) {
    result = 1;
    for (let i = 1; i <= number1; i++) {
      result = result * i;
    }
    console.log(`Le factorielle de numbre ${number1} est : ` + result);
    hestoric.push(`le factorielle de numbre ${number1} est: ${result} .`);
    console.log("*".repeat(20));
  }
}
function showHestoric() {
    let hestoricChoice
  do {
    console.log("Entre: \n 0 pour retourner \n 1 pour afficher tout les historic. \n 2 pour afficher une hestoric \n");
    
    hestoricChoice = Number(
      prompt(
        " :"
      )
    );
    console.log("*".repeat(20));
    if (
      typeof hestoricChoice !== "number" &&
      hestoricChoice !== 1 &&
      hestoricChoice !== 2
    ) {
      console.log("Entrez une valide numero!");
    }
  } while (
    typeof hestoricChoice !== "number" &&
    hestoricChoice !== 1 &&
    hestoricChoice !== 2
  );

  switch (hestoricChoice) {
    case 1:
      for (let i = 0; i < hestoric.length; i++) {
        console.log("Operation numero " + (i + 1) + " : ");
        console.log(hestoric[i]);
        console.log("-".repeat(20));
        
      }
      console.log("*".repeat(20));
      showHestoric()
      break;
    case 2:
        let hestoricNumber
      do {
        hestoricNumber = Number(prompt("Entrez operation numero: "));
        console.log("*".repeat(20));
        if (hestoricNumber > hestoric.length) {
          console.log("Invalide operation numero!");
        }
      } while (hestoricNumber > hestoric.length);

      console.log(
        `Operation numero ${hestoricNumber} : ` + hestoric[hestoricNumber - 1]
      );
      console.log("*".repeat(20));
      showHestoric()
      
      break
    case 0:
        choice()
        console.log("*".repeat(20));
      default:
        showHestoric()
  }
}
function exit() {
  process.exit(1);
}
