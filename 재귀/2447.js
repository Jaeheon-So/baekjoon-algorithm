// 별 찍기 - 10 ***
let input = require("fs").readFileSync("/dev/stdin").toString().trim();
input = Number(input);
let result = ``;

for (let i = 0; i < input; i++) {
  for (let j = 0; j < input; j++) {
    printStar(i, j);
  }
  if (i !== input - 1) {
    result += "\n";
  }
}
console.log(result);

function printStar(i, j) {
  if (i % 3 === 1 && j % 3 === 1) {
    result += " ";
  } else {
    if (Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) {
      result += "*";
    } else {
      printStar(Math.floor(i / 3), Math.floor(j / 3));
    }
  }
}
