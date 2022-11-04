// 알고리즘 수업 - 병합 정렬 1 **
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

let arr = input[1].map((item) => Number(item));
let k = Number(input[0][1]);
let count = 0;
let target = 0;
mergeSort(arr);
console.log(count > k ? target : -1);

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.ceil(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let [i, j] = [0, 0];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
    count++;
    if (count === k) target = result[result.length - 1];
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
    count++;
    if (count === k) target = result[result.length - 1];
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
    count++;
    if (count === k) target = result[result.length - 1];
  }
  return result;
}
