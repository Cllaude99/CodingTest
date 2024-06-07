const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const [N, L, R] = input[0].split(' ').map(Number);
  const A = [];
  for (let i = 1; i <= N; i++) {
    A.push(input[i].split(' ').map(Number));
  }
  const dr = [0, 0, 1, -1];
  const dc = [1, -1, 0, 0];
  let moved = 0;

  const bfs = (r, c, visited) => {
    const queue = [[r, c]];
    const union = [[r, c]];
    let totalPopulation = A[r][c];
    visited[r][c] = true;

    while (queue.length > 0) {
      const [curR, curC] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const newR = curR + dr[i];
        const newC = curC + dc[i];

        if (
          newR >= 0 &&
          newC >= 0 &&
          newR < N &&
          newC < N &&
          !visited[newR][newC]
        ) {
          const diff = Math.abs(A[curR][curC] - A[newR][newC]);
          if (diff >= L && diff <= R) {
            queue.push([newR, newC]);
            union.push([newR, newC]);
            totalPopulation += A[newR][newC];
            visited[newR][newC] = true;
          }
        }
      }
    }

    const averagePopulation = Math.floor(totalPopulation / union.length);
    for (const [uR, uC] of union) {
      A[uR][uC] = averagePopulation;
    }

    return union.length > 1;
  };

  while (true) {
    let visited = Array.from({ length: N }, () => new Array(N).fill(false));
    let isMoved = false;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
          if (bfs(i, j, visited)) {
            isMoved = true;
          }
        }
      }
    }

    if (!isMoved) break;
    moved += 1;
  }

  return moved;
}

console.log(solution(input));
