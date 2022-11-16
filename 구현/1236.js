// 성 지키기
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let [r, c] = input
  .shift()
  .split(" ")
  .map((v) => Number(v));
let graph = input.map((v) => v.split(""));
let emptyR = 0;
let emptyC = 0;

for (let i = 0; i < r; i++) {
  let flag = true;
  for (let j = 0; j < c; j++) {
    if (graph[i][j] === "X") {
      flag = false;
      break;
    }
  }
  if (flag) emptyR++;
}
for (let j = 0; j < c; j++) {
  let flag = true;
  for (let i = 0; i < r; i++) {
    if (graph[i][j] === "X") {
      flag = false;
      break;
    }
  }
  if (flag) emptyC++;
}
console.log(Math.max(emptyR, emptyC));
