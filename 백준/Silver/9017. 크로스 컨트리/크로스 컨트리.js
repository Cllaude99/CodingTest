const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let T = null;
let count = 0;
const info = [];

rl.on('line', function (line) {
  if (T === null) {
    T = +line;
  } else if (count % 2 === 0) {
    count++;
  } else {
    info.push(line.split(' ').map(Number));
    count++;
  }

  if (count === 2 * T) {
    rl.close();
  }
}).on('close', function () {
  console.log(solution(info));
  process.exit();
});

function solution(info) {
  const result = [];

  for (let i = 0; i < info.length; i++) {
    const group = info[i];
    let point = 1;
    let groupInfo = {};

    group.forEach((teamNo) => {
      if (isTeamSix(group, teamNo)) {
        if (groupInfo[teamNo] === undefined) {
          groupInfo[teamNo] = [point];
        } else {
          groupInfo[teamNo].push(point);
        }
        point += 1;
      }
    });

    let groupPoints = [];

    Object.keys(groupInfo).forEach((teamNo) => {
      groupPoints.push([teamNo, getSum(groupInfo[teamNo])]);
    });

    groupPoints.sort((a, b) => {
      if (a[1] === b[1]) return groupInfo[a[0]][4] - groupInfo[b[0]][4];
      return a[1] - b[1];
    });

    result.push(groupPoints[0][0]);
  }

  return result.join('\n');
}

function isTeamSix(arr, teamNo) {
  return arr.filter((no) => no === teamNo).length === 6;
}

function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < 4; i++) {
    sum += arr[i];
  }
  return sum;
}
