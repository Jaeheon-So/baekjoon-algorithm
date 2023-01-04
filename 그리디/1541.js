// 잃어버린 괄호
let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let flag = false;
let answer = "";
for (let i = 0; i < input.length; i++) {
  if (input[i] === "-") flag = true;
  if (input[i] === "+" && flag) answer += "-";
  else answer += input[i];
}

let equation = answer.split("-");
equation = equation
  .map((v, idx) => {
    if (idx === 0) {
      let sum = v
        .split("+")
        .map((n) => Number(n))
        .reduce((a, b) => a + b);
      return sum;
    } else return Number(v);
  })
  .join("-");
console.log(eval(equation));
