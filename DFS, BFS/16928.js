// 뱀과 사다리 게임
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map((v) => Number(v));
let graph = Array(101).fill(0);
let visited = Array(101).fill(0);
for (let i = 1; i < input.length; i++) {
  let [x, y] = input[i].split(" ").map((v) => Number(v));
  graph[x] = y;
}
console.log(bfs());

function bfs() {
  let q = [[1, 0]];
  let idx = 0;
  visited[1] = 1;
  while (q.length !== idx) {
    let [x, cnt] = q[idx];
    if (x === 100) return cnt;
    for (let i = 1; i <= 6; i++) {
      let nx = x + i;
      if (0 < nx && nx < 101 && !visited[nx]) {
        if (graph[nx] !== 0) {
          visited[graph[nx]] = 1;
          q.push([graph[nx], cnt + 1]);
        } else {
          visited[nx] = 1;
          q.push([nx, cnt + 1]);
        }
      }
    }
    idx++;
  }
}
