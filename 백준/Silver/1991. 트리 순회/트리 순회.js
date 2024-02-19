const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());
const graph = {};
const preorderList = [];
const inorderList = [];
const postorderList = [];

input.forEach((element) => {
  const [current, left, right] = element.split(' ');
  graph[current] = [left, right];
});

function preorder(node) {
  if (node !== '.') {
    const [left, right] = graph[node];
    preorderList.push(node);
    if (left !== '.') preorder(left.toString());
    if (right !== '.') preorder(right.toString());
  }
}

function inorder(node) {
  if (node !== '.') {
    const [left, right] = graph[node];
    if (left !== '.') inorder(left.toString());
    inorderList.push(node);
    if (right !== '.') inorder(right.toString());
  }
}

function postorder(node) {
  if (node !== '.') {
    const [left, right] = graph[node];
    if (left !== '.') postorder(left.toString());
    if (right !== '.') postorder(right.toString());
    postorderList.push(node);
  }
}

preorder('A');
inorder('A');
postorder('A');

console.log(preorderList.join(''));
console.log(inorderList.join(''));
console.log(postorderList.join(''));
