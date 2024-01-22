const fs = require('fs');

const [NMKX, ...roads] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, K, X] = NMKX.split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

roads.forEach(road => {
  const [from, to] = road.split(' ').map(Number);
  graph[from].push(to);
});

const distances = new Array(N + 1).fill(-1);
distances[X] = 0;

const queue = [];
let queuePointer = 0;
queue.push(X);

while (queuePointer < queue.length) {
  const current = queue[queuePointer++];
  
  graph[current].forEach(next => {
    if (distances[next] === -1) {
      distances[next] = distances[current] + 1;
      queue.push(next);
    }
  });
}

const result = [];
for (let i = 1; i <= N; i++) {
  if (distances[i] === K) {
    result.push(i);
  }
}

if (result.length === 0) {
  console.log(-1);
} else {
  console.log(result.join('\n'));
}
