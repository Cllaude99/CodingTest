const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const edges = input.map(line => line.split(' ').map(Number));

const distance = Array(N + 1).fill(Infinity);
distance[1] = 0;

let cycle = false; // 사이클 존재 여부를 체크하는 변수

for (let i = 1; i <= N; i++) {
  for (let j = 0; j < M; j++) {
    const [from, to, cost] = edges[j];
    if (distance[from] !== Infinity && distance[to] > distance[from] + cost) {
      distance[to] = distance[from] + cost;
      if (i === N) {
        cycle = true; // N번째 라운드에서도 갱신이 일어난다면 음의 사이클이 존재하는 것
        break;
      }
    }
  }
  if (cycle) break; // 음의 사이클이 감지되면 루프를 빠져나옴
}

if (cycle) {
  console.log(-1);
} else {
  for (let i = 2; i <= N; i++) {
    if (distance[i] === Infinity) {
      console.log(-1);
    } else {
      console.log(distance[i]);
    }
  }
}
