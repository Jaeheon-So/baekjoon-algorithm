// 토마토
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [m, n, h] = input[0].split(" ").map((v) => Number(v));
let graph = [];
let temp = [];
let cnt = 0;
for (let i = 1; i < input.length; i++) {
  temp.push(input[i].split(" ").map((v) => Number(v)));
  if (i % n === 0) {
    graph.push(temp);
    temp = [];
  }
}

let q = [];
for (let i = 0; i < h; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < m; k++) {
      if (graph[i][j][k] === 1) q.push([i, j, k]);
    }
  }
}
bfs();
for (let i = 0; i < h; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < m; k++) {
      if (graph[i][j][k] === 0) return console.log(-1);
    }
  }
}
console.log(cnt);

function bfs() {
  const dx = [-1, 0, 1, 0, 0, 0];
  const dy = [0, 1, 0, -1, 0, 0];
  const dz = [0, 0, 0, 0, 1, -1];
  let idx = 0;
  while (q.length !== idx) {
    let [x, y, z] = q[idx];
    for (let i = 0; i < 6; i++) {
      let [nx, ny, nz] = [x + dx[i], y + dy[i], z + dz[i]];
      if (
        0 <= nx &&
        nx < h &&
        0 <= ny &&
        ny < n &&
        0 <= nz &&
        nz < m &&
        graph[nx][ny][nz] === 0
      ) {
        cnt = graph[x][y][z];
        graph[nx][ny][nz] = graph[x][y][z] + 1;
        q.push([nx, ny, nz]);
      }
    }
    idx++;
  }
}
