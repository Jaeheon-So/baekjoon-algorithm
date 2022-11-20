// 중량제한 ***
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number);
let [startNode, endNode] = input[m + 1].split(" ").map(Number);
let graph = new Array(n + 1).fill(null).map((_) => []);
let weights = [];
for (let i = 1; i <= m; i++) {
  let [x, y, weight] = input[i].split(" ").map(Number);
  weights.push(weight);
  graph[x].push([y, weight]);
  graph[y].push([x, weight]);
}
let answer = 0;
let lt = Math.min(...weights);
let rt = Math.max(...weights);
while (lt <= rt) {
  let mid = parseInt((lt + rt) / 2);
  if (bfs(mid)) {
    answer = mid;
    lt = mid + 1;
  } else rt = mid - 1;
}
console.log(answer);

function bfs(mid) {
  let visited = new Array(n + 1).fill(false);
  let q = [];
  q.push(startNode);
  while (q.length !== 0) {
    let node = q.shift();
    visited[node] = true;
    if (node === endNode) return true;

    for (let i = 0; i < graph[node].length; i++) {
      let [nextNode, nextWeight] = graph[node][i];
      if (!visited[nextNode] && nextWeight >= mid) {
        visited[nextNode] = true;
        q.push(nextNode);
      }
    }
  }
  return false;
}
