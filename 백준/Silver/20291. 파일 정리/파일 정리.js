const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = null;
const files = [];
let count = 0;

rl.on('line', function (line) {
  if (N === null) {
    N = +line;
  } else {
    files.push(line);
    count++;
  }

  if (count === N) {
    rl.close();
  }
}).on('close', function () {
  console.log(solution(N, files));
  process.exit();
});

function solution(N, files) {
  const fileInfo = {}; // 파일의 확장자에 대한 정보
  const answer = [];

  // 파일확장자를 저장하는 과정
  files.forEach((fName) => {
    const [name, ext] = fName.split('.');
    fileInfo[ext] === undefined ? (fileInfo[ext] = 1) : fileInfo[ext]++;
  });

  // 확장자이름의 사전순으로 출력하는 과정
  Object.keys(fileInfo)
    .sort((a, b) => a.localeCompare(b))
    .forEach((ext) => {
      answer.push(`${ext} ${fileInfo[ext]}`);
    });

  return answer.join('\n');
}
