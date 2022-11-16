// 문서 검색
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let str = input[0];
let word = input[1];
let cnt = 0;
while (str.includes(word)) {
  str = str.replace(word, " ");
  cnt++;
}
console.log(cnt);
