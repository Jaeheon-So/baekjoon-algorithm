// 하노이 탑 이동 순서
let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let n = Number(input);

let cnt = 0;
let result = ``;

hanoi(n, 1, 2, 3);

console.log(cnt);
console.log(result);

function hanoi(n, from, rest, to) {
  if (n === 1) {
    result += `${from} ${to}\n`;
    cnt++;
    return;
  }
  hanoi(n - 1, from, to, rest);
  result += `${from} ${to}\n`;
  cnt++;
  hanoi(n - 1, rest, from, to);
}
