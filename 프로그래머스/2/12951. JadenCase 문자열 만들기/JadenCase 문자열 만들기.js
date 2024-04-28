/* 문제 접근 */

/*
    1. 주어진 문자열 s를 공백을 기준으로 나눈다.
    2. 1번과정에서 나누어진 문자열을 확인한다.
    2-1. 첫 문자가 숫자가 아닌경우에만 해당 문자열을 모두 소문자로 바꾼 후, 해당 문자열의 첫문자를 대문자로 바꾸어 answer배열에 넣어준다
    2-2. 첫 문자가 숫자인 경우, 별도의 수정사항 없이 answer배열에 넣어준다
*/  


function solution(s) {
   let answer = '';

    // 1)
    s = s.toLowerCase();

    // 2)
    s = s.split(' ');
    for(let i=0; i<s.length; i++) {
        s[i] = s[i].charAt(0).toUpperCase() + s[i].slice(1);

        // 3)
        answer += s[i];    
        answer += ' ';
    }


    answer = answer.slice(0, -1);
    
    return answer
}