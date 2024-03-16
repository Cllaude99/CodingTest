const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());

const arr = new Array(N + 1).fill(0);
arr[1] = 1 % 10007;
arr[2] = 2 % 10007;

for (let i = 3; i < N + 1; i++) {
  arr[i] = ((arr[i - 2] % 10007) + (arr[i - 1] % 10007)) % 10007;
}

console.log(arr[N]);
