const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());
const D = new Array(N + 1).fill(0);

for (let i = 2; i <= N; i++) {
  const firstValue = i % 3 === 0 ? D[i / 3] + 1 : Number.MAX_VALUE;
  const secondValue = i % 2 === 0 ? D[i / 2] + 1 : Number.MAX_VALUE;
  const thirdValue = D[i - 1] + 1;

  D[i] = Math.min(firstValue, secondValue, thirdValue);
}

console.log(D[N]);
