// 좌표 정렬하기 2
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));
input.shift();
input.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});
let result = "";
input.forEach((item) => {
  result += `${item[0]} ${item[1]}\n`;
});
console.log(result);
