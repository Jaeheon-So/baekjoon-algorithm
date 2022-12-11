// 유가농 배추
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let t = Number(input[0]);
let idx = 1;
let total = 0;
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

for (let v = 0; v < t; v++) {
  let [m, n, k] = input[idx++].split(" ").map((v) => Number(v));
  let graph = Array.from(Array(m), () => Array(n).fill(0));
  for (let i = 0; i < k; i++) {
    let [x, y] = input[idx++].split(" ").map((v) => Number(v));
    graph[x][y] = 1;
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j]) {
        total++;
        graph[i][j] = 0;
        bfs(i, j, m, n, graph);
      }
    }
  }
  console.log(total);
  total = 0;
}

function bfs(x, y, m, n, graph) {
  let q = [];
  q.push([x, y]);
  while (q.length) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (0 <= nx && nx < m && 0 <= ny && ny < n && graph[nx][ny]) {
        graph[nx][ny] = 0;
        q.push([nx, ny]);
      }
    }
  }
}
