// 팩토리얼
let input = require("fs").readFileSync("/dev/stdin").toString().trim();
input = Number(input);
console.log(factorial(input));

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
