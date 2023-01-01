// 동전 0
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let [n, k] = input[0].split(" ").map((v) => Number(v));
let coins = [];
for (let i = input.length - 1; i > 0; i--) {
  coins.push(Number(input[i]));
}
let answer = 0;
coins.forEach((coin) => {
  if (k < coin) return;
  answer += Math.floor(k / coin);
  k = k % coin;
});

console.log(answer);
