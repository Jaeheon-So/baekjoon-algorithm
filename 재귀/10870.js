// 피보나치 수 5
let input = require("fs").readFileSync("/dev/stdin").toString().trim();
input = Number(input);
console.log(fibonacci(input));

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
