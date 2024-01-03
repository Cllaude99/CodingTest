const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
let graph = [];
for (let i = 1; i <= N; i++) {
  graph[i] = [];
}
let visited = new Array(N + 1).fill(false);
let result = 0;

for (let i = 0; i < M; i++) {
  let [s, e] = input[i].split(' ').map(Number);
  graph[s].push(e);
  graph[e].push(s);
}

function DFS(start) {
  visited[start] = true;
  for (let num of graph[start]) {
    if (!visited[num]) DFS(num);
  }
}
for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    result += 1;
    DFS(i);
  }
}
console.log(result);
