// 단지번호붙이기
// let input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");
let input = `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`.split("\n");

let n = Number(input[0]);
let graph = [];
for (let i = 1; i < input.length; i++) {
  let temp = input[i].split("").map((v) => Number(v));
  graph.push(temp);
}

let total = 0;
let results = [];
let homes = 1;
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j]) {
      total++;
      graph[i][j] = 0;
      //   dfs(i, j);
      bfs(i, j);
      results.push(homes);
      homes = 1;
    }
  }
}
results.sort((a, b) => a - b);
console.log(total + "\n" + results.join("\n"));

function dfs(x, y) {
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (0 <= nx && nx < n && 0 <= ny && ny < n && graph[nx][ny]) {
      graph[nx][ny] = 0;
      homes++;
      dfs(nx, ny);
    }
  }
}

function bfs(x, y) {
  let q = [];
  q.push([x, y]);
  while (q.length) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (0 <= nx && nx < n && 0 <= ny && ny < n && graph[nx][ny]) {
        graph[nx][ny] = 0;
        homes++;
        q.push([nx, ny]);
      }
    }
  }
}
