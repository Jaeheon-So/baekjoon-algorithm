// N과 M (2)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));
let [n, m] = input;
let answer = [];
let temp = [];
let check = Array(n + 1).fill(0);

dfs(0);
console.log(answer.map((v) => v.join(" ")).join("\n"));

function dfs(k) {
  if (k === m) {
    answer.push(temp.slice());
  } else {
    for (let i = 1; i <= n; i++) {
      if (!check[i]) {
        for (let j = 1; j <= i; j++) {
          check[j] = 1;
        }
        temp.push(i);
        dfs(k + 1);
        temp.pop();
        for (let j = 1; j <= i; j++) {
          check[j] = 0;
        }
      }
    }
  }
}
