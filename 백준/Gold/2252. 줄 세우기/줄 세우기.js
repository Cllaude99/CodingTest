const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [NM, ...info] = input;
const [N, M] = NM.split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const D = Array.from({ length: N + 1 }, () => 0);
let line = [];

for (let i = 0; i < M; i++) {
  const [f, s] = info[i].split(' ').map(Number);
  graph[f].push(s);
  D[s] += 1;
}

const queue = [];

for (let i = 1; i <= N; i++) {
  if (D[i] === 0) queue.push(i);
}

while (queue.length > 0) {
  const value = queue.shift();
  line.push(value);

  for (let v of graph[value]) {
    D[v] -= 1;
    if (D[v] === 0) queue.push(v);
  }
}

console.log(line.join(' '));
