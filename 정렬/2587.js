// 대표값2
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));
input.sort((a, b) => a - b);
let mean = input.reduce((a, b) => a + b) / input.length;
let median = input[parseInt(input.length / 2)];
console.log(`${mean}\n${median}`);
