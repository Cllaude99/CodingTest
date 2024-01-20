const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

let N = Number(input.shift());
const isPrime = new Array(10 ** 7 + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i < Math.ceil(Math.sqrt(10 ** 7 + 1)); i++) {
  if (isPrime[i]) {
    for (let j = 2 * i; j < 10 ** 7 + 1; j += i) {
      isPrime[j] = false;
    }
  }
}

function isPalineDrom(num) {
  if (Number(num.toString().split('').reverse().join('')) === num) return true;
  else return false;
}

while (true) {
  if (isPrime[N] && isPalineDrom(N)) {
    console.log(N);
    return;
  }
  N += 1;
}
