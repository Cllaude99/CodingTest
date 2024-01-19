const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [A, B] = input.shift().split(' ').map(Number);
const dv = Math.ceil(Math.sqrt(B));
const primes = new Array(dv + 1).fill(true);
primes[1] = false;
for (let i = 2; i < dv + 1; i++) {
  if (primes[i]) {
    if (i * i > dv) {
      break;
    }
    for (let j = Math.pow(i, 2); j < dv + 1; j += i) {
      primes[j] = false;
    }
  }
}

let cnt = 0;

for (let i = 1; i < primes.length; i++) {
  if (primes[i]) {
    let result = i * i;
    while (true) {
      if (result < A) {
        result *= i;
        continue;
      }
      if (result > B) {
        break;
      }
      result *= i;
      cnt += 1;
    }
  }
}
console.log(cnt);
