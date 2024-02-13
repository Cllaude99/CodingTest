const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [NM, ...relations] = input;
const [N, M] = NM.split(' ').map(Number);
const graph = Array.from({ length: N }, () => new Array(N).fill(Infinity));

relations.forEach((element) => {
  const [s, e] = element.split(' ').map(Number);
  graph[s - 1][e - 1] = 1;
  graph[e - 1][s - 1] = 1;
});

for (let k = 0; k < N; k++) {
  for (let s = 0; s < N; s++) {
    for (let e = 0; e < N; e++) {
      graph[s][e] = Math.min(graph[s][e], graph[s][k] + graph[k][e]);
    }
  }
}

const values = [];
let kevenBacon = Infinity;

graph.forEach((element, idx) => {
  let sumValue = 0;
  element.forEach((v, i) => {
    if (idx !== i) sumValue += v;
  });
  values.push(sumValue);
  kevenBacon = Math.min(kevenBacon, sumValue);
});

console.log(values.findIndex((element) => element === kevenBacon) + 1);
