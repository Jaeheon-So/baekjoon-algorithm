// N과 M (3)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));
let [n, m] = input;
let answer = [];
let temp = [];

dfs(0);
console.log(answer.map((v) => v.join(" ")).join("\n"));

function dfs(k) {
  if (k === m) {
    answer.push(temp.slice());
  } else {
    for (let i = 1; i <= n; i++) {
      temp.push(i);
      dfs(k + 1);
      temp.pop();
    }
  }
}
