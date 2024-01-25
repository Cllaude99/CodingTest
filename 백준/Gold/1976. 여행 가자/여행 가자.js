const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const M = Number(input.shift());
const infos = input;

const graph = Array.from({ length: N + 1 }, (_, idx) => idx);

function union(a, b) {
  graph[find(b)] = find(a);
}
function find(idx) {
  if (idx === graph[idx]) return idx;
  else {
    graph[idx] = find(graph[idx]);
    return graph[idx];
  }
}

for (let i = 0; i < N; i++) {
  const arr = infos.shift().split(' ').map(Number);
  for (let j = 0; j < N; j++) {
    if (arr[j] === 1) union(i + 1, j + 1);
  }
}

const plan = infos.shift().split(' ').map(Number);
let success = true;
for (let i = 0; i < M - 1; i++) {
  if (find(plan[i]) !== find(plan[i + 1])) {
    success = false;
    break;
  }
}

if (success) console.log('YES');
else console.log('NO');
