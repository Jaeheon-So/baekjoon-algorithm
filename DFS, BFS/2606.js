// 바이러스
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0]);
let graph = Array.from(Array(n + 1), () => Array());
let visited = Array(n + 1).fill(0);
let cnt = 0;

for (let i = 2; i < input.length; i++) {
  let temp = input[i].split(" ").map((v) => Number(v));
  graph[temp[0]].push(temp[1]);
  graph[temp[1]].push(temp[0]);
}
visited[1] = 1;
dfs(1);
console.log(cnt);

function dfs(v) {
  for (let nv of graph[v]) {
    if (!visited[nv]) {
      cnt++;
      visited[nv] = 1;
      dfs(nv);
    }
  }
}
