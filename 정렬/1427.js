// 소트인사이드
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");
input = input.sort().reverse().join("");
console.log(input);
