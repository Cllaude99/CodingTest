const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const graph = [];
for (let i = 0; i < N; i++) {
  graph[i] = [];
}
const visited = new Array(N).fill(false);
let success = false;

for (let i = 0; i < M; i++) {
  const [s, e] = input[i].split(' ').map(Number);
  graph[s].push(e);
  graph[e].push(s);
}
function DFS(num, depth) {
  if (depth === 4) {
    success = true;
    return;
  }
  visited[num] = true;
  for (let n of graph[num]) {
    if (!visited[n]) {
      DFS(n, depth + 1);
    }
  }
  visited[num] = false;
}
for (let i = 0; i < N; i++) {
  DFS(i, 0);
  if (success) break;
}

if (success) console.log(1);
else console.log(0);
