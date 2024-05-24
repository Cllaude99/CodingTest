const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  let [robot_x, robot_y, robot_direction] = input[1].split(' ').map(Number);

  // 북, 동, 남, 서 (0, 1, 2, 3)
  const directions = [
    [-1, 0], // 북
    [0, 1], // 동
    [1, 0], // 남
    [0, -1], // 서
  ];

  const room = [];
  for (let i = 0; i < N; i++) {
    room.push(input[2 + i].split(' ').map(Number));
  }

  let cleaned_room = 0;

  function isCleanable(x, y) {
    return x >= 0 && y >= 0 && x < N && y < M && room[x][y] === 0;
  }

  function clean() {
    let cleaned = true;
    while (cleaned) {
      if (room[robot_x][robot_y] === 0) {
        room[robot_x][robot_y] = 2; // 청소 완료 표시
        cleaned_room += 1;
      }

      cleaned = false;
      for (let i = 0; i < 4; i++) {
        robot_direction = (robot_direction + 3) % 4; // 반시계 방향으로 회전
        const [dx, dy] = directions[robot_direction];
        const new_x = robot_x + dx;
        const new_y = robot_y + dy;

        if (isCleanable(new_x, new_y)) {
          robot_x = new_x;
          robot_y = new_y;
          cleaned = true;
          break;
        }
      }

      if (!cleaned) {
        const back_direction = (robot_direction + 2) % 4;
        const [dx, dy] = directions[back_direction];
        const back_x = robot_x + dx;
        const back_y = robot_y + dy;

        if (
          back_x >= 0 &&
          back_y >= 0 &&
          back_x < N &&
          back_y < M &&
          room[back_x][back_y] !== 1
        ) {
          robot_x = back_x;
          robot_y = back_y;
          cleaned = true;
        }
      }
    }
  }

  clean();
  return cleaned_room;
}

console.log(solution(input));
