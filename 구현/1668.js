// 트로피 진열
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));
input.shift();

let ltResult = 1;
let rtResult = 1;
let ltMax = input[0];
let rtMax = input[input.length - 1];
for (let i = 1; i < input.length; i++) {
  if (input[i] > ltMax) {
    ltMax = input[i];
    ltResult++;
  }
}
for (let i = input.length - 2; i >= 0; i--) {
  if (input[i] > rtMax) {
    rtMax = input[i];
    rtResult++;
  }
}
console.log(ltResult);
console.log(rtResult);
