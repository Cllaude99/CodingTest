const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const arr = input.slice(0, N).map(Number);
const area = input.slice(N);
const answer = [];
let k = 0;

while (2 ** k < N) {
  k += 1;
}

const tree = Array.from({ length: 2 ** (k + 1) });

arr.forEach((element, idx) => {
  tree[idx + 2 ** k] = element;
});

for (let i = 2 ** k - 1; i > 0; i -= 1) {
  tree[i] = Math.min(tree[2 * i], tree[2 * i + 1]);
}

function findMin(from, to) {
  let startIdx = from + 2 ** k - 1;
  let endIdx = to + 2 ** k - 1;
  const temp = [];
  while (startIdx <= endIdx) {
    if (startIdx % 2 === 1) temp.push(tree[startIdx]);
    if (endIdx % 2 === 0) temp.push(tree[endIdx]);
    startIdx = Math.floor((startIdx + 1) / 2);
    endIdx = Math.floor((endIdx - 1) / 2);
  }
  return Math.min(...temp);
}
area.forEach((element) => {
  const [from, to] = element.split(' ').map(Number);
  answer.push(findMin(from, to));
});

console.log(answer.join('\n'));
