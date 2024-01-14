const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let [N, K] = input.shift().split(' ').map(Number);
const coins = [];
let minCoinNumber = 0;
for (let i = 0; i < N; i++) {
  coins.unshift(Number(input[i]));
}

for (let coin of coins) {
  if (coin <= K) {
    minCoinNumber += Math.floor(K / coin);
    K %= coin;
  }
  if (K === 0) break;
}

console.log(minCoinNumber);
