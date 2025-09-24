const prompt = require("prompt-sync")();
let A = [];
let i = 0;
let max;
let min;
while (i < 7) {
  A[i] = prompt("enter un nombre  : ");

  i++;
}
max = A[0];
for (i = 0; i < 7 - 1; i++) {
  if (max < A[i + 1]) {
    max = A[i + 1];
  }
}

min = A[0];
for (i = 0; i < 7; i++) {
  if (min > A[i + 1]) {
    min = A[i + 1];
  }
}
console.log("max est : " + max);
console.log("min est : " + min);
