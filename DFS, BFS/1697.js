// 숨바꼭질
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let [n, k] = input.map((v) => Number(v));
let graph = Array(100001).fill(0);

bfs();
console.log(graph[k]);

function bfs() {
  if (n === k) return;
  let q = [];
  q.push(n);
  while (q.length) {
    let x = q.shift();
    for (let nx of [x - 1, x + 1, 2 * x]) {
      if (0 <= nx && nx <= 100000 && graph[nx] === 0) {
        graph[nx] = graph[x] + 1;
        q.push(nx);
      }
    }
  }
}
