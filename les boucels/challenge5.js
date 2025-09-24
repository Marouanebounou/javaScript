const prompt = require("prompt-sync")();

let number = parseInt(prompt("Entre un number: "));

for (let i = 2; i <= number; i++) {
    let isPremier = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPremier = false;
            break;
        }
    }
    if (isPremier) {
        console.log("le nombre " + i + " est premier");
    }
}