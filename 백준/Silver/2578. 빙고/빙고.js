const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let map = [];
let input = [];

rl.on('line', function (line) {
  if (count < 5) {
    map.push(line.split(' ').map(Number));
    count++;
  } else {
    input.push(line.split(' ').map(Number));
    count++;
  }
  if (count === 10) {
    rl.close();
  }
}).on('close', function () {
  console.log(solution(map, input));
  process.exit();
});

function solution(map, input) {
  input = input.flat();

  for (let i = 0; i < input.length; i++) {
    // 빙고판에 해당 값을 0으로 바꾸는 과정
    map = map.map((m) => {
      return m.map((num) => {
        if (num === input[i]) return 0;
        else return num;
      });
    });

    if (i < 11) continue;
    if (isBingo(map)) return i + 1;
  }

  return 25;
}

// 입력이 12개 이상부터 해당 함수로 확인할것
function isBingo(map) {
  let bingoCnt = 0; // 빙고의 개수

  // [0,0]
  if (map[0][0] === 0) {
    // 가로 확인
    let x = true;
    for (let i = 1; i < 5; i++) {
      if (map[0][i] !== 0) {
        x = false;
        break;
      }
    }

    // 세로 확인
    let y = true;
    for (let i = 1; i < 5; i++) {
      if (map[i][0] !== 0) {
        y = false;
        break;
      }
    }

    // 대각선 확인
    let z = true;
    for (let i = 1; i < 5; i++) {
      if (map[i][i] !== 0) {
        z = false;
        break;
      }
    }

    if (x) bingoCnt++;
    if (y) bingoCnt++;
    if (z) bingoCnt++;
  }
  // [0,1],[0,2],[0,3],[0,4] -> 세로 확인
  for (let i = 1; i <= 4; i++) {
    if (map[0][i] === 0) {
      let success = true;

      for (let j = 1; j < 5; j++) {
        if (map[j][i] !== 0) {
          success = false;
          break;
        }
      }

      if (success) bingoCnt++;
    }
  }
  // [0,4] -> 대각선 확인
  if (map[0][4] === 0) {
    let success = true;

    for (let i = 3; i >= 0; i--) {
      if (map[5 - i - 1][i] !== 0) {
        success = false;
        break;
      }
    }

    if (success) bingoCnt++;
  }
  // [1,0],[2,0],[3,0],[4,0] -> 가로 확인
  for (let i = 1; i <= 4; i++) {
    if (map[i][0] === 0) {
      let success = true;

      for (let j = 1; j < 5; j++) {
        if (map[i][j] !== 0) {
          success = false;
          break;
        }
      }

      if (success) bingoCnt++;
    }
  }
  return bingoCnt >= 3;
}
