// ATM
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let times = input[1].split(" ").map((v) => Number(v));
times.sort((a, b) => a - b);
let temp = 0;
let answer = 0;

times.forEach((time) => {
  answer += temp + time;
  temp += time;
});

console.log(answer);
