const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function DFS(num, computer, visited, hacked) {
  visited[num] = true;
  const connected = computer[num];

  for (let i = 0; i < connected.length; i++) {
    if (!visited[connected[i]]) {
      hacked.push(connected[i]);
      DFS(connected[i], computer, visited, hacked);
    }
  }
}

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  let computer = new Array(N + 1);
  for (let i = 1; i <= N; i++) {
    computer[i] = [];
  }

  for (let i = 1; i <= M; i++) {
    const [f, s] = input[i].split(' ').map(Number);
    computer[s].push(f);
  }

  let result = [];

  for (let i = 1; i <= N; i++) {
    let hacked = [];

    let visited = new Array(N + 1).fill(false);

    DFS(i, computer, visited, hacked);

    if (hacked.length > 0) {
      result.push([i, hacked.length]);
    }
  }

  result = result.sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0] - b[0];
    } else return b[1] - a[1];
  });

  const max_virus = result[0][1];

  result = result.filter(([_, virus]) => virus === max_virus);

  answer = result.map(([num, _]) => num);

  return answer.join(' ');
}

console.log(solution(input));
