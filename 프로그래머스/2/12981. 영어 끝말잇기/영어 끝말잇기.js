/* 문제 접근 */

/*
    1. 문제를 통해 탈락조건을 세분화 하면 다음과 같다.
    1-1. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말하지 않은 경우
    1-2. 이전에 등장했던 단어를 사용한 경우
    1-3. 단어의 글자수가 한 글자인 경우
    
    2. words배열을 순차적으로 확인하면서 1번 조건에 부합하는 지를 확인해나간다.
    
    2-1. 만약 words배열을 모두 돌았음에도 1번조건에 부합하는 사례가 없다면 [0,0]을 리턴한다.
    2-2. 만약 2번과정에서 1번조건에 부합한다면 탈락하는 사람의 번호와 몇 번째 차례에 탈락하는지를 리턴한다.
         이때 참고하고 있는 words배열의 인덱스가 i라고 할때,
         탈락하는 사람의 번호 = Math.floor(i%n) + 1
         몇 번째에 탈락하는 지 = Math.floor(i/n) + 1
         로 구할 수 있다.
*/

function solution(n, words) {
    var answer = [];
    
    let before_last_letter = words[0].charAt(words[0].length - 1); // 이전 글자의 마지막 문자에 해당하는 변수
    const before_said = []; // 이전에 등장했던 단어를 저장하는 변수
    let success = true;

    before_said.push(words[0]);
    
    for(let i=1; i<words.length; i++){
        if(isOneLetter(words[i]) || alreay_said(before_said, words[i]) || words[i].charAt(0) !== before_last_letter){
            answer.push(Math.floor(i%n) + 1);
            answer.push(Math.floor(i/n) + 1);
            success = false;
            break;
        }
        else{
            before_last_letter = words[i].charAt(words[i].length-1);
            before_said.push(words[i]);
        }
    }
    
    if(success){
        answer = [0,0];
    }
    return answer;
}

// 한글자 인지 확인하는 함수로, 한 글자로만 이루어져 있다면 true, 그렇지 않다면 false를 리턴한다.
function isOneLetter(s){
    return s.length <= 1 ? true : false;
}

// 이전에 말했는지 확인하는 함수로 이전에 말했다면 true, 그렇지 않다면 false를 리턴한다
function alreay_said(before_said, word){
    return before_said.includes(word);
}