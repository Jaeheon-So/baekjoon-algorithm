// 트리의 높이와 너비 *
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let tree = {};
let nodes = [];
let root;
for (let i = 1; i < input.length; i++) {
  let temp = input[i].split(" ");
  tree[temp[0]] = [temp[1], temp[2]];
  if (temp[1] !== "-1") nodes.push(temp[1]);
  if (temp[2] !== "-1") nodes.push(temp[2]);
}

let levels = {};
let cnt = Number(input[0]);
for (let i = 1; i <= cnt; i++) {
  if (!nodes.includes(String(i))) {
    root = String(i);
    break;
  }
}
let x = 1;
dfs(root, 1);

let cord = Array(cnt + 1).fill(0);
inOrder(root);

let maxWidthLevel = 0;
let maxWidth = 0;

for (let x in levels) {
  if (
    maxWidth <
    cord[levels[x][levels[x].length - 1]] - cord[levels[x][0]] + 1
  ) {
    maxWidth = cord[levels[x][levels[x].length - 1]] - cord[levels[x][0]] + 1;
    maxWidthLevel = x;
  }
}
console.log(maxWidthLevel, maxWidth);

function dfs(pNode, level) {
  if (pNode === "-1") return;
  let [lNode, rNode] = tree[pNode];
  levels[level] = levels[level] ? [...levels[level], pNode] : [pNode];
  dfs(lNode, level + 1);
  dfs(rNode, level + 1);
}

function inOrder(pNode) {
  if (pNode === "-1") return;
  let [lNode, rNode] = tree[pNode];
  inOrder(lNode);
  cord[Number(pNode)] = x++;
  inOrder(rNode);
}
