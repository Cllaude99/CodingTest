const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const times = input.map((line) => line.split(' ').map(Number));
const buildTime = Array(N).fill(0);
const prerequisites = Array.from({ length: N }, () => []);
const degree = Array(N).fill(0);

times.forEach((time, index) => {
  buildTime[index] = time[0];
  for (let i = 1; i < time.length - 1; i++) {
    prerequisites[time[i] - 1].push(index);
    degree[index]++;
  }
});

const result = [...buildTime];
const queue = [];

for (let i = 0; i < N; i++) {
  if (degree[i] === 0) queue.push(i);
}

while (queue.length) {
  const current = queue.shift();

  for (const next of prerequisites[current]) {
    result[next] = Math.max(result[next], result[current] + buildTime[next]);
    degree[next]--;

    if (degree[next] === 0) queue.push(next);
  }
}

console.log(result.join('\n'));
