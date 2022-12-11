// 나이트의 이동
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let t = Number(input[0]);
let idx = 1;
let dx = [-2, -1, 1, 2, 2, 1, -1, -2];
let dy = [1, 2, 2, 1, -1, -2, -2, -1];

for (let v = 0; v < t; v++) {
  let n = Number(input[idx++]);
  let [sx, sy] = input[idx++].split(" ").map((v) => Number(v));
  let [gx, gy] = input[idx++].split(" ").map((v) => Number(v));
  let graph = Array.from(Array(n), () => Array(n).fill(0));
  bfs(graph, n, sx, sy, gx, gy);
  console.log(graph[gx][gy]);
}

function bfs(graph, n, sx, sy, gx, gy) {
  if (sx === gx && sy === gy) return;
  let q = [];
  q.push([sx, sy]);
  while (q.length) {
    let [x, y] = q.shift();
    for (let i = 0; i < 8; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (0 <= nx && nx < n && 0 <= ny && ny < n && graph[nx][ny] === 0) {
        graph[nx][ny] = graph[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }
}
