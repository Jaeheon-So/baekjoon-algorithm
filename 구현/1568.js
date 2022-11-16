// 새
let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let n = Number(input);
let cnt = 1;
let result = 0;
while (n > 0) {
  if (n < cnt) cnt = 1;
  n -= cnt;
  cnt++;
  result++;
}

console.log(result);
