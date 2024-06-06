const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function checkFileType(dict, folder, fileType) {
  const temp = dict[folder];

  if (temp !== undefined && temp.length > 0) {
    for (let i = 0; i < temp.length; i++) {
      const [fileName, option] = dict[folder][i];
      if (option === '0') {
        if (!fileType.includes(fileName)) {
          fileType.push(fileName);
        }
      }
      if (option === '1') {
        checkFileType(dict, fileName, fileType);
      }
    }
  }
}

function checkFileNum(dict, folder) {
  let fileNum = 0;
  const temp = dict[folder];

  if (temp !== undefined && temp.length > 0) {
    for (let i = 0; i < temp.length; i++) {
      const [fileName, option] = dict[folder][i];
      if (option === '0') {
        fileNum += 1;
      }
      {
        if (option === '1') {
          fileNum += checkFileNum(dict, fileName);
        }
      }
    }
  }

  return fileNum;
}

function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const dict = {};

  for (let i = 1; i < N + M + 1; i++) {
    const [parent, child, option] = input[i].split(' ');
    if (dict[parent] === undefined) {
      dict[parent] = [[child, option]];
    } else {
      dict[parent].push([child, option]);
    }
  }

  const Q = parseInt(input[N + M + 1]);
  const result = [];

  for (let i = N + M + 2; i < N + M + 2 + Q; i++) {
    const structure = input[i].split('/');
    const last = structure[structure.length - 1];

    let fileType = [];
    checkFileType(dict, last, fileType);

    const fileNum = checkFileNum(dict, last);

    result.push(fileType.length + ' ' + fileNum);
  }

  return result.join('\n');
}

console.log(solution(input));
