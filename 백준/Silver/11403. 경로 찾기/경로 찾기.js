const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const route = Array.from({ length: N });

input.forEach((element, idx) => {
  route[idx] = element.split(' ').map(Number);
});

for (let k = 0; k < N; k++) {
  for (let s = 0; s < N; s++) {
    for (let e = 0; e < N; e++) {
      if (!route[s][e] && route[s][k] === 1 && route[k][e] === 1) {
        route[s][e] = 1;
      }
    }
  }
}

route.forEach((element) => {
  console.log(...element);
});
