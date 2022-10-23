// 나이순 정렬
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();
input = input.map((item) => item.split(" "));
input.sort((a, b) => a[0] - b[0]);
let result = ``;
input.forEach((item) => {
  result += `${item[0]} ${item[1]}\n`;
});
console.log(result);
