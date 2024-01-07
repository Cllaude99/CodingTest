const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M, V] = input.shift().split(' ').map(Number);
const graph = [];
for (let i = 1; i <= N; i++) {
  graph[i] = [];
}
const visited_DFS = new Array(N + 1).fill(false);
const visited_BFS = new Array(N + 1).fill(false);

const answer_DFS = [];
const answer_BFS = [];

for (let i = 0; i < M; i++) {
  const [s, e] = input[i].split(' ').map(Number);
  graph[s].push(e);
  graph[e].push(s);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

function DFS(number) {
  visited_DFS[number] = true;
  answer_DFS.push(number);
  for (let num of graph[number]) {
    if (!visited_DFS[num]) DFS(num);
  }
}

function BFS(number) {
  visited_BFS[number] = true;
  answer_BFS.push(number);
  let arr = [];
  for (let num of graph[number]) {
    arr.push(num);
  }
  while (arr.length > 0) {
    const value = arr.shift();
    if (!visited_BFS[value]) {
      visited_BFS[value] = true;
      answer_BFS.push(value);
    }
    for (let num of graph[value]) {
      if (!visited_BFS[num]) arr.push(num);
    }
  }
}

DFS(V);
BFS(V);

console.log(answer_DFS.join(' '));
console.log(answer_BFS.join(' '));
