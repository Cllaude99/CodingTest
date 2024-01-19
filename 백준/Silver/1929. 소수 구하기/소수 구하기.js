const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [M, N] = input.shift().split(' ').map(Number);
let visited = new Array(N + 1).fill(false);
let answer = [];

for (let i = 2; i <= N; i++) {
  if (!visited[i]) {
    if (i >= M) answer.push(i);
    for (let j = 2 * i; j <= N; j += i) {
      visited[j] = true;
    }
  }
}

console.log(answer.join('\n'));
