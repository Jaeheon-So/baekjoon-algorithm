// 커트라인
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input = input.map((item) => item.split(" "));
let [cutLine, score] = [input[0][1], input[1]];
score.sort((a, b) => b - a);
console.log(score[cutLine - 1]);
