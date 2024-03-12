const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());

const arr = new Array(N + 1);
const temp = new Array(N + 2).fill(0);
input.forEach((schedule, index) => {
  const [day, cost] = schedule.split(' ').map(Number);
  arr[index + 1] = [day, cost, index + 1];
});

for (let i = N; i > 0; i--) {
  if (i + arr[i][0] > N + 1) {
    temp[i] = temp[i + 1];
  } else {
    temp[i] = Math.max(temp[i + 1], arr[i][1] + temp[i + arr[i][0]]);
  }
}

console.log(Math.max(...temp));
