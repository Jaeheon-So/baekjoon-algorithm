// 0 만들기 ***
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

input.shift();
let operatorList = [];
for (let n of input) {
  operatorList = [];
  recursive([], n - 1);
  let numbers = [];
  let strList = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  for (let operator of operatorList) {
    let str = ``;
    for (let i = 0; i < n - 1; i++) {
      str = str + String(numbers[i]) + operator[i];
    }
    str = str + String(numbers[n - 1]);
    if (eval(str.replaceAll(" ", "")) === 0) strList.push(str);
  }
  console.log(strList.sort().join("\n"));
  console.log("");
}

function recursive(arr, n) {
  if (arr.length === n) {
    operatorList.push(arr.map((item) => item));
    return;
  }
  arr.push("+");
  recursive(arr, n);
  arr.pop();

  arr.push("-");
  recursive(arr, n);
  arr.pop();

  arr.push(" ");
  recursive(arr, n);
  arr.pop();
}
