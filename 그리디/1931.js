// 회의실 배정
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();

let times = input.map((v) => v.split(" ").map((i) => Number(i)));
times.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});
let answer = 0;
let temp = 0;
for (let time of times) {
  if (time[0] >= temp) {
    temp = time[1];
    answer++;
  }
}
console.log(answer);
