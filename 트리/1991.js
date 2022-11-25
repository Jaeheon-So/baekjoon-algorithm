// 트리 순회 *
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let tree = {};
for (let i = 1; i < input.length; i++) {
  let temp = input[i].split(" ");
  tree[temp[0]] = [temp[1], temp[2]];
}

let answer = ``;
preOrder("A");
answer += "\n";

inOrder("A");
answer += "\n";

postOrder("A");
console.log(answer);

function preOrder(pNode) {
  if (pNode === ".") return;
  let [lNode, rNode] = tree[pNode];
  answer += pNode;
  preOrder(lNode);
  preOrder(rNode);
}

function inOrder(pNode) {
  if (pNode === ".") return;
  let [lNode, rNode] = tree[pNode];
  inOrder(lNode);
  answer += pNode;
  inOrder(rNode);
}

function postOrder(pNode) {
  if (pNode === ".") return;
  let [lNode, rNode] = tree[pNode];
  postOrder(lNode);
  postOrder(rNode);
  answer += pNode;
}
