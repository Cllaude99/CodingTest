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
  # 요구사항 분석

  수빈이의 위치를 X라고 했을 때

  1. 걷는경우 (1초)
    - 수빈이의 위치는 (X-1) 또는 (X+1)

  2. 순간이동을 하는 경우 (1초)
    - 수빈이의 위치는 2*X
 
  # 문제설계

  - visited: 방문확인 배열
  - queue: 수빈이의 위치와 시간의 흐름을 배열값으로 저장하고 있는 배열
  
  수빈이의 위치를 X라고 했을 때, 수빈이가 이동할 수 있는 위치는 다음과 같다.
  -> X-1 또는 X+1 또는 2*X

  - 동작과정 - 
  1. queue에서 값을 shift하여, [위치, 소요시간]의 정보를 받는다.
  2. 위치가 K값과 동일한지 확인한다.
    2-1. 위치 === K인 경우 -> 소요시간을 반환하고 종료한다.
    2-2. 위치 !== K인 경우
      a. 가능한 위치는 [위치-1, 위치+1, 2*위치]이므로 이 값들에 대해 방문하지 않았을 경우에만 queue에 삽입한다.
      b. 삽입시에는 [새로운 위치, 소요시간+1] 형태로 삽입한다.
  3. 2번과정을 queue의 길이가 0보다 큰 경우 계속해서 반복한다.
*/

function solution(N, K) {
  if (N === K) return 0; // 수빈이와 동생이 같은 위치일 때

  const queue = [[N, 0]];
  const visited = new Array(100001).fill(false);
  visited[N] = true;

  while (queue.length > 0) {
    const [current, time] = queue.shift();

    const possible = [current - 1, current + 1, current * 2]; // 수빈이가 이동가능한 범위

    for (const next of possible) {
      if (next === K) return time + 1;

      if (next >= 0 && next <= 100000 && !visited[next]) {
        visited[next] = true;
        queue.push([next, time + 1]);
      }
    }
  }
}
