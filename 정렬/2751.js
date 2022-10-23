// 수 정렬하기 2
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();
input.sort((a, b) => a - b);
console.log(input.join("\n"));
