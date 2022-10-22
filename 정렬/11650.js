// 좌표 정렬하기
// console.log() 적게 사용하기
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();
input = input.map((item) => item.split(" "));
input.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});
let result = "";
input.forEach((item) => {
  result += `${item[0]} ${item[1]}\n`;
});
console.log(result);
