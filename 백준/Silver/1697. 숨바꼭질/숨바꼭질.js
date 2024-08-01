const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let K = null;

rl.on('line', function (line) {
  [N, K] = line.split(' ').map(Number);
  rl.close();
}).on('close', function () {
  console.log(solution(N, K));
  process.exit();
});

/*
 요구사항 분석

 수빈이의 위치를 X라고 했을 때

 1. 걷는경우 (1초)
  - 수빈이의 위치는 (X-1) 또는 (X+1)


 2. 순간이동을 하는 경우 (1초)
  - 수빈이의 위치는 2*X
 - 
*/

function solution(N, K) {
  if (N === K) return 0; // 수빈이와 동생이 같은 위치일 때

  const visited = new Array(100001).fill(false);
  const queue = [];
  queue.push([N, 0]);
  visited[N] = true;

  while (queue.length > 0) {
    const [current, time] = queue.shift();

    for (const next of [current - 1, current + 1, current * 2]) {
      if (next === K) {
        return time + 1;
      }

      if (next >= 0 && next <= 100000 && !visited[next]) {
        visited[next] = true;
        queue.push([next, time + 1]);
      }
    }
  }
}
