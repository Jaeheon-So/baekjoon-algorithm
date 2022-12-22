// 토마토
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let q = [];
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let cnt = 0;
let [m, n] = input[0].split(" ").map((v) => Number(v));
let graph = [];
for (let i = 1; i < input.length; i++) {
  let tmp = input[i].split(" ").map((v) => Number(v));
  graph.push(tmp);
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 1) {
      q.push([i, j]);
    }
  }
}
bfs();
for (let x of graph) {
  if (x.includes(0)) return console.log(-1);
}
console.log(cnt);

function bfs() {
  let idx = 0;
  while (q.length !== idx) {
    let [x, y] = q[idx];
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (0 <= nx && nx < n && 0 <= ny && ny < m && graph[nx][ny] === 0) {
        graph[nx][ny] = graph[x][y] + 1;
        cnt = graph[nx][ny] - 1;
        q.push([nx, ny]);
      }
    }
    idx++;
  }
}
