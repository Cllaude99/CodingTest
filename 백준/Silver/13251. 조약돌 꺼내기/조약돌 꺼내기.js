const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const M = parseInt(input[0]);
const stones = input[1].split(' ').map(Number);
const K = parseInt(input[2]);

let totalWays = 0; // 같은 색상의 조약돌 K개를 뽑는 경우의 수
let totalCombinations = 0; // 전체 조약돌에서 K개를 뽑는 경우의 수

function combination(n, r) {
  let result = 1;
  for (let i = 1; i <= r; i++) {
    result *= (n - i + 1) / i;
  }
  return result;
}

stones.forEach(stoneCount => {
  if (stoneCount >= K) {
    totalWays += combination(stoneCount, K);
  }
});

const totalNum = stones.reduce((acc, curr) => acc + curr, 0);
totalCombinations = combination(totalNum, K);

console.log((totalWays / totalCombinations).toFixed(9));
