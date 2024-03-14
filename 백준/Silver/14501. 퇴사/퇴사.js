const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());

const times = new Array(N + 1);
const D = new Array(N + 2).fill(0);

input.forEach((element, idx) => {
  times[idx + 1] = element.split(' ').map(Number);
});

for (let i = N; i > 0; i--) {
  if (i + times[i][0] > N + 1) D[i] = D[i + 1];
  else {
    D[i] = Math.max(D[i + 1], times[i][1] + D[i + times[i][0]]);
  }
}

console.log(Math.max(...D));
