const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function DFS(num, computer, visited, virus_computer) {
  visited[num] = true;
  virus_computer.push(num);

  const connected = computer[num];

  for (let i = 0; i < connected.length; i++) {
    if (!visited[connected[i]]) {
      DFS(connected[i], computer, visited, virus_computer);
    }
  }
}

function solution(input) {
  const N = parseInt(input[0]);
  const M = parseInt(input[1]);
  let computer = new Array(N + 1);
  for (let i = 1; i <= N; i++) {
    computer[i] = [];
  }
  let visited = new Array(N + 1).fill(false);

  for (let i = 2; i < 2 + M; i++) {
    const [f, s] = input[i].split(' ').map(Number);
    computer[f].push(s);
    computer[s].push(f);
  }

  const virus_computer = [];

  DFS(1, computer, visited, virus_computer);

  return virus_computer.length - 1;
}

console.log(solution(input));
