// DFS와 BFS
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [n, m, root] = input[0].split(" ").map((v) => Number(v));
let graph = Array.from(Array(n + 1), () => Array());
let visited = Array(n + 1).fill(0);
let result = ``;

for (let i = 1; i < input.length; i++) {
  let temp = input[i].split(" ").map((v) => Number(v));
  graph[temp[0]].push(temp[1]);
  graph[temp[1]].push(temp[0]);
}
graph.map((v) => v.sort((a, b) => a - b));
dfs(root);
result += "\n";
visited = visited.map((v) => 0);
bfs(root);
console.log(result);

function dfs(v) {
  result += `${v} `;
  visited[v] = 1;
  for (let nv of graph[v]) {
    if (!visited[nv]) {
      dfs(nv);
    }
  }
}

function bfs(v) {
  let q = [];
  visited[v] = 1;
  q.push(v);
  result += `${v} `;
  while (q.length) {
    let n = q.shift();
    for (let nv of graph[n]) {
      if (!visited[nv]) {
        visited[nv] = 1;
        q.push(nv);
        result += `${nv} `;
      }
    }
  }
}
