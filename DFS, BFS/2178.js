// 미로 탐색
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map((v) => Number(v));
let graph = [];
for (let i = 1; i < input.length; i++) {
  let temp = input[i].split("").map((v) => Number(v));
  graph.push(temp);
}

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

bfs();
console.log(graph[n - 1][m - 1]);

function bfs() {
  let q = [];
  q.push([0, 0]);
  while (q.length) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (0 <= nx && nx < n && 0 <= ny && ny < m && graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }
}
