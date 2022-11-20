// 공유기 설치 *
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let c = Number(input.shift().split(" ")[1]);
let nums = input.map((v) => Number(v)).sort((a, b) => a - b);
let answer = 0;
let lt = 1;
let rt = Math.max(...nums) - Math.min(...nums);
while (lt <= rt) {
  let mid = parseInt((lt + rt) / 2);
  if (count(mid) >= c) {
    answer = mid;
    lt = mid + 1;
  } else rt = mid - 1;
}
console.log(answer);

function count(mid) {
  let cnt = 1;
  let temp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= temp + mid) {
      cnt++;
      temp = nums[i];
    }
  }
  return cnt;
}
