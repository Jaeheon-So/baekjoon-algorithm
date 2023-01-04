// 주유소
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let n = Number(input[0]);
let distance = input[1].split(" ").map((v) => BigInt(v));
let price = input[2].split(" ").map((v) => BigInt(v));
let result = price[0] * distance[0];
let priceTemp = price[0];
for (let i = 1; i < n - 1; i++) {
  if (price[i] < priceTemp) priceTemp = price[i];
  result += priceTemp * distance[i];
}
console.log(String(result));
