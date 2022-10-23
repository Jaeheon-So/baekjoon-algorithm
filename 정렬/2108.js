// 통계학
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));
let num = input.shift();
input.sort((a, b) => a - b);
let mean = Math.round(input.reduce((a, b) => a + b) / num);
let median = input[parseInt(num / 2)];
let range = input.at(-1) - input[0];
let modes = [];
let objCounts = input.reduce((obj, item) => {
  obj[item] = obj[item] ? obj[item] + 1 : 1;
  return obj;
}, {});
let keys = Object.keys(objCounts);
let maxCount = Math.max(...Object.values(objCounts));
for (let i = 0; i < keys.length; i++) {
  if (objCounts[keys[i]] == maxCount) {
    modes.push(keys[i]);
  }
}
modes.sort((a, b) => a - b);
let mode = modes.length > 1 ? modes[1] : modes[0];
console.log(`${mean}\n${median}\n${mode}\n${range}`);
