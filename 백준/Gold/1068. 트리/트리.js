const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const deleteNode = Number(input.pop());
const nodeInfo = input[0].split(' ').map(Number);

const graph = Array.from({ length: N }, () => []);
let rootIdx = -1;
let count = 0;

nodeInfo.forEach((element, idx) => {
  if (element === -1) rootIdx = idx;
  else graph[element].push(idx);
});

function DFS(node) {
  for (let n of graph[node]) {
    DFS(n);
  }
  graph[node] = [];
  count += 1;
}

DFS(deleteNode);

let leafCount = 0;

for (let i = 0; i < N; i++) {
  if (graph[i].length === 0) leafCount += 1;
  else if (graph[i].length === 1 && graph[i][0] === deleteNode) leafCount += 1;
}
console.log(leafCount - count);
