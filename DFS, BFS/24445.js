// 알고리즘 수업 - 너비 우선 탐색 2
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [n, m, root] = input[0].split(" ").map((v) => Number(v));
let graph = Array.from(Array(n + 1), () => Array());
let visited = Array(n + 1).fill(0);
let cnt = 1;

for (let i = 1; i < input.length; i++) {
  let [a, b] = input[i].split(" ").map((v) => Number(v));
  graph[a].push(b);
  graph[b].push(a);
}
graph = graph.map((v) => v.sort((a, b) => b - a));

bfs(root);
visited.shift();
console.log(visited.join("\n"));

function bfs(v) {
  let q = [];
  q.push(v);
  visited[v] = cnt++;
  while (q.length) {
    let node = q.shift();
    for (let nv of graph[node]) {
      if (!visited[nv]) {
        visited[nv] = cnt++;
        q.push(nv);
      }
    }
  }
}
