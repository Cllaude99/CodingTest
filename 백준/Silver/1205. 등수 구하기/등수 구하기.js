const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
let newNum = null;
let P = null;
let rankingList = [];

rl.on('line', function (line) {
  if (!N && !newNum && !P) {
    [N, newNum, P] = line.split(' ').map(Number);
    if (N === 0) {
      rl.close();
    }
  } else {
    rankingList = line.split(' ').map(Number);
    rl.close();
  }
}).on('close', function () {
  console.log(solution(newNum, rankingList, P));
  process.exit();
});

/*
  문제설계

  1. 입력으로 주어지는 태수의 새로운 점수를 기존 랭킹리스트에 저장한다.

  2. 기존 랭킹 리스트를 내림차순 정렬한다.

  3. 기존 랭킹 리스트의 길이에 따라 아래의 과정을 수행한다.
    a. 기존 랭킹 리스트의 길이 > P
        1. 태수의 새로운 점수 > 기존 랭킹 리스트의 최소값
          태수의 새로운 점수의 랭킹을 구하고 출력한다.

        2. 태수의 새로운 점수 <= 기존 랭킹 리스트의 최솟값
          -1을 출력한다.

    b. 기존 랭킹 리스트의 길이 <= P
      1. 기존 랭킹 리스트에서 태수의 새로운 점수의 랭킹을 구한다.
      2. 태수의 새로운 점수의 랭킹은 기존 랭킹 리스트에서 태수의 새로운 점수보다 큰 점수값의 개수 + 1로 한다.
*/

function solution(newNum, rankingList, P) {
  let answer = null;
  rankingList.push(newNum);
  rankingList.sort((a, b) => b - a);

  if (rankingList.length <= P) {
    const rank = rankingList.filter((score) => score > newNum).length + 1;
    answer = rank;
  } else {
    if (newNum <= rankingList[rankingList.length - 1]) {
      answer = -1;
    } else {
      const rank = rankingList.filter((score) => score > newNum).length + 1;
      answer = rank;
    }
  }

  return answer;
}
