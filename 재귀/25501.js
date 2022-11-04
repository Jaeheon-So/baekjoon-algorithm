// 재귀의 귀재
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();

let result = ``;
input.forEach((item) => (result += isPalindrome(item).join(" ") + "\n"));
console.log(result);

function recursion(s, l, r, cnt) {
  cnt++;
  if (l >= r) return [1, cnt];
  else if (s[l] != s[r]) return [0, cnt];
  else return recursion(s, l + 1, r - 1, cnt);
}

function isPalindrome(s) {
  let cnt = 0;
  return recursion(s, 0, s.length - 1, cnt);
}
