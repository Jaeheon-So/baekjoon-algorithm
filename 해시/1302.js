// 베스트셀러
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();
let result = [];
let obj = {};
input.forEach((item) => {
  obj[item] = (obj[item] || 0) + 1;
});
let maxValue = Math.max(...Object.values(obj));
for (let x in obj) {
  if (obj[x] === maxValue) {
    result.push(x);
  }
}

console.log(result.sort()[0]);
