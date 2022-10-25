// 단어 정렬
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();
input = [...new Set(input)];
input.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  } else {
    if (a > b) return 1;
    else if (a < b) return -1;
    // return a.localeCompare(b);
  }
});
console.log(input.join("\n"));
