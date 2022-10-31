// 피보나치 수
let input = require("fs").readFileSync("/dev/stdin").toString().trim();
input = Number(input);
console.log(fibonacci(input));

function fibonacci(n) {
  let fibonacci = [0, 1, 1];
  if (n <= 2) {
    return 1;
  } else {
    for (let i = 3; i <= n; i++) {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci[n];
  }
}

// function fibonacci(n) {
//   if (n <= 2) {
//     return 1;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
