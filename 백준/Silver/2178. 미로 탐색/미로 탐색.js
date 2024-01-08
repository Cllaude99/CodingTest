const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const graph = [];
for (let i = 0; i < N; i++) {
  graph[i] = input[i].split('').map(Number);
}
const visited = Array.from(Array(N), () => Array(M).fill(false));

function BFS(x, y, route) {
  const BFS_Arr = [];
  BFS_Arr.push([x, y, route]);
  visited[x][y] = true;

  while (BFS_Arr.length > 0) {
    const [s, e, r] = BFS_Arr.shift();
    if (s === N - 1 && e === M - 1) {
      console.log(r);
      break;
    }
    if (e - 1 >= 0 && graph[s][e - 1] === 1 && !visited[s][e - 1]) {
      visited[s][e - 1] = true;
      BFS_Arr.push([s, e - 1, r + 1]);
    }
    if (s - 1 >= 0 && graph[s - 1][e] === 1 && !visited[s - 1][e]) {
      visited[s - 1][e] = true;
      BFS_Arr.push([s - 1, e, r + 1]);
    }
    if (e + 1 < M && graph[s][e + 1] === 1 && !visited[s][e + 1]) {
      visited[s][e + 1] = true;
      BFS_Arr.push([s, e + 1, r + 1]);
    }
    if (s + 1 < N && graph[s + 1][e] === 1 && !visited[s + 1][e]) {
      visited[s + 1][e] = true;
      BFS_Arr.push([s + 1, e, r + 1]);
    }
  }
}

BFS(0, 0, 1);
