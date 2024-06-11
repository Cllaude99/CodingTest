const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let R = null;
let C = null;
let T = null;
let count = 0;
let room = [];

rl.on('line', function (line) {
  if (!R) {
    const input = line.split(' ').map(Number);
    R = input[0];
    C = input[1];
    T = input[2];
  } else {
    room.push(line.split(' ').map(Number));
    count++;
  }
  if (count === R) {
    rl.close();
  }
}).on('close', function () {
  console.log(solution(R, C, T, room));
  process.exit();
});

/*
  문제 설계

  1. 2차원 배열 room을 참고하여, 미세먼지가 있는 칸의 인덱스를 미세먼지가 존재하는 칸의 위치를 의미하는 dust배열에 추가한다.(dust배열 예. [[1,2], [3,4]])
  2. 모든 dust배열의 값에 대해 확산을 진행한다.
  3. 공기청정기를 아래와 같은 과정으로 작동시킨다.
  3-1. 위쪽 공기청정기의 경우
    공기청정기로 부터 반시계방향으로 돌면서 room배열에서의 해당위치의 값을 0으로 수정한다.
  3-2. 아래쪽 공기청정기의 경우
    공기청정기로 부터 시계방향으로 돌면서 room배열에서의 해당위치의 값을 0으로 수정한다.
  
  4. 1~3번과정을 T번 반복하며 최종적으로 room배열에 있는 미세먼지의 양의 합을 구하고 반환한다.
*/
function solution(R, C, T, room) {
  // 공기청정기의 위치
  const [cleaner_top, cleaner_bottom] = findCleanerSpot(room);

  for (let i = 0; i < T; i++) {
    const dust = findDustSpot(room);

    spread(room, dust);

    cleaner_start(cleaner_top, cleaner_bottom, room);
  }

  return room.flat().reduce((acc, cur) => acc + cur, 0) + 2;
}

function findCleanerSpot(room) {
  for (let r = 0; r < room.length; r++) {
    for (let c = 0; c < room[0].length; c++) {
      if (room[r][c] === -1) {
        const cleaner_top = [r, c];
        const cleaner_bottom = [r + 1, c];
        return [cleaner_top, cleaner_bottom];
      }
    }
  }
}
function findDustSpot(room) {
  const dust = [];

  for (let r = 0; r < room.length; r++) {
    for (let c = 0; c < room[0].length; c++) {
      if (room[r][c] > 0) {
        dust.push([r, c]);
      }
    }
  }

  return dust;
}
function spread(room, dust) {
  const copy_room = JSON.parse(JSON.stringify(room));
  const R = room.length;
  const C = room[0].length;
  const dr = [0, 0, 1, -1];
  const dc = [1, -1, 0, 0];

  for (let i = 0; i < dust.length; i++) {
    const [r, c] = dust[i];

    let spread_count = 0; // 확산된 방향의 개수
    const spread_value = parseInt(copy_room[r][c] / 5); // 확상된 미세먼지의 양

    for (let j = 0; j < 4; j++) {
      const spread_r = r + dr[j];
      const spread_c = c + dc[j];

      if (
        spread_r >= 0 &&
        spread_c >= 0 &&
        spread_r < R &&
        spread_c < C &&
        room[spread_r][spread_c] !== -1
      ) {
        room[spread_r][spread_c] += spread_value;
        spread_count++;
      }
    }

    room[r][c] -= spread_value * spread_count;
  }
}
function cleaner_start(cleaner_top, cleaner_bottom, room) {
  const copy_room = JSON.parse(JSON.stringify(room));
  const R = room.length;
  const C = room[0].length;
  const [topR, topC] = cleaner_top;
  const [botR, botC] = cleaner_bottom;

  room[topR][topC + 1] = 0;
  for (let i = topC + 2; i < C; i++) {
    room[topR][i] = copy_room[topR][i - 1];
  }
  for (let i = topR - 1; i >= 0; i--) {
    room[i][C - 1] = copy_room[i + 1][C - 1];
  }
  for (let i = C - 2; i >= 0; i--) {
    room[0][i] = copy_room[0][i + 1];
  }
  for (let i = 1; i < topR; i++) {
    room[i][0] = copy_room[i - 1][0];
  }

  room[botR][botC + 1] = 0;
  for (let i = botC + 2; i < C; i++) {
    room[botR][i] = copy_room[botR][i - 1];
  }
  for (let i = botR + 1; i < R; i++) {
    room[i][C - 1] = copy_room[i - 1][C - 1];
  }
  for (let i = C - 2; i >= 0; i--) {
    room[R - 1][i] = copy_room[R - 1][i + 1];
  }
  for (let i = R - 2; i > botR; i--) {
    room[i][0] = copy_room[i + 1][0];
  }
}
