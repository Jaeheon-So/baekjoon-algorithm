// K번째 수
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));
let index = Number(input[0][1]) - 1;
let numbers = input[1].map((item) => Number(item)).sort((a, b) => a - b);
console.log(numbers[index]);
