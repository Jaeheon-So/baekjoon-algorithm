// 좌표 압축
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));
let numbers = input[1].map((item) => Number(item));
let result = [];
let set = [...new Set(numbers)].sort((a, b) => a - b);
let indexObj = set.reduce((obj, item, index) => {
  obj[item] = index;
  return obj;
}, {});
numbers.forEach((item) => result.push(indexObj[item]));
console.log(result.join(" "));
