// Z **
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((item) => Number(item));
let [n, r, c] = input;
let count = 0;
z(n, r, c);
console.log(count);

function z(n, r, c) {
  if (n === 0) {
    return;
  }
  let a = 2 ** n / 2;
  if (r < a && c < a) {
    // 1사분면
    count += 0;
    z(n - 1, r, c);
  } else if (r < a && c >= a) {
    // 2사분면
    count += 1 * 4 ** (n - 1);
    z(n - 1, r, c - a);
  } else if (r >= a && c < a) {
    // 3사분면
    count += 2 * 4 ** (n - 1);
    z(n - 1, r - a, c);
  } else {
    // 4사분면
    count += 3 * 4 ** (n - 1);
    z(n - 1, r - a, c - a);
  }
}
