const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  if (line === 'end') {
    rl.close();
  } else {
    input.push(line);
  }
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});

function solution(input) {
  const answer = [];

  for (let i = 0; i < input.length; i++) {
    // 모음 (a,e,i,o,u) 하나를 반드시 포함하는지 확인하는 과정
    const conditionOne_Result = condition_one(input[i] + '');

    if (!conditionOne_Result) {
      answer.push('<' + input[i] + '>' + ' is not acceptable.');
      continue;
    }

    // 모음이 3개 혹은 자음이 3개 연속으로 오는지 확인하는 과정
    const conditionTwo_Result = condition_two(input[i]);

    if (!conditionTwo_Result) {
      answer.push('<' + input[i] + '>' + ' is not acceptable.');
      continue;
    }

    // 같은 글자가 연속적으로 두번 오는지 확인하는 과정
    const conditionThree_Result = condition_three(input[i]);

    if (!conditionThree_Result) {
      answer.push('<' + input[i] + '>' + ' is not acceptable.');
      continue;
    }

    answer.push('<' + input[i] + '>' + ' is acceptable.');
  }

  return answer.join('\n');
}

// 모음 (a,e,i,o,u) 중 하나를 적어도 포함하는 지 확인하는 함수
function condition_one(word) {
  const vowel = ['a', 'e', 'i', 'o', 'u']; // 모음

  for (let i = 0; i < vowel.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (word[j] === vowel[i]) return true;
    }
  }

  return false;
}

// 입력인수 word에 모음이 3개 혹은 자음이 3개 연속으로 오는지 확인하고 연속이라면 false, 연속이 아니라면 true를 리턴한다
function condition_two(word) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  let vowelNum = 0; // 연속된 모음의 수
  let consonantNum = 0; // 연속된 자음의 수

  for (let i = 0; i < word.length; i++) {
    if (vowel.includes(word[i])) {
      consonantNum = 0;
      vowelNum += 1;

      if (vowelNum === 3) return false;
    } else {
      vowelNum = 0;
      consonantNum += 1;

      if (consonantNum === 3) return false;
    }
  }

  return true;
}

// 입력인수 word에서 ee 와 oo를 제외한 다른 문자가 연속인 경우 false를 리턴, 그렇지 않은 경우 true를 리턴한다
function condition_three(word) {
  let before = word[0];

  for (let i = 1; i < word.length; i++) {
    if (word[i] !== 'e' && word[i] !== 'o' && before === word[i]) {
      return false;
    }
    before = word[i];
  }

  return true;
}
