const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const dr = [0, -1, -1, -1, 0, 1, 1, 1];
  const dc = [-1, -1, 0, 1, 1, 1, 0, -1];
  const copy_dr = [-1, -1, 1, 1];
  const copy_dc = [-1, 1, -1, 1];

  let cloud = [];
  for (let i = 1; i <= N; i++) {
    cloud[i - 1] = input[i].split(' ').map(Number);
  }

  // 비구름이 존재하는 위치
  let cloudSpot = [
    [N - 1, 0],
    [N - 1, 1],
    [N - 2, 0],
    [N - 2, 1],
  ];

  for (let i = N + 1; i < N + M + 1; i++) {
    const [direction, move] = input[i].split(' ').map(Number);
    let cloud_exists = Array.from({ length: N }, () =>
      new Array(N).fill(false)
    );

    cloudSpot = cloudSpot.map(([r, c]) => {
      let new_r = r;
      let new_c = c;
      for (let i = 0; i < move; i++) {
        new_r += dr[direction - 1];
        new_c += dc[direction - 1];

        if (new_r === N) new_r = 0;
        if (new_c === N) new_c = 0;
        if (new_r < 0) new_r = N - 1;
        if (new_c < 0) new_c = N - 1;
      }

      cloud_exists[new_r][new_c] = true;
      return [new_r, new_c];
    });

    cloudSpot.forEach(([r, c]) => {
      cloud[r][c] += 1;
    });

    cloudSpot.forEach(([r, c]) => {
      let count = 0;

      for (let i = 0; i < 4; i++) {
        const new_r = r + copy_dr[i];
        const new_c = c + copy_dc[i];

        if (new_r >= 0 && new_c >= 0 && new_r < N && new_c < N) {
          if (cloud[new_r][new_c] !== 0) {
            count += 1;
          }
        }
      }

      cloud[r][c] += count;
    });

    let new_cloudSpot = [];

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (!cloud_exists[i][j] && cloud[i][j] >= 2) {
          new_cloudSpot.push([i, j]);
          cloud[i][j] -= 2;
        }
      }
    }

    cloudSpot = new_cloudSpot;
  }

  const answer = cloud.flat().reduce((acc, cur) => acc + cur, 0);
  return answer;
}

console.log(solution(input));
