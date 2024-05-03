/* 문제 접근 */

/*
    1. 문자열 s를 0부터 (s문자열의 길이 - 1) 만큼 회전할 수 있다.
    
    2. 올바른 문자열인지 확인하기 위해서는 스택을 이용하며, 다음과 같은 전략을 사용한다.
    
    -전략-
    1. 문자열 s를 처음부터 확인하면서 ']',')','}' 문자가 아닌 경우 스택에 저장한다.
    2. ']',')','}' 문자가 나온 경우, 바로 직전에 넣어준 문자가 '[','(','{' 가 아닌 경우 or 스택이
        비어 있는 경우에 해당 할 경우 올바른 괄호 문자열이 아님을 의미하므로 종료한다.
    3. 만약 문자열 s를 끝까지 확인하였는데, 2번 과정에서 문제가 없었다면 올바른 괄호 문자열임을 의미한다.
*/

function solution(s) {
    var answer = 0; // 올바른 문자열의 개수
    
    for(let i=0; i<s.length; i++){
        if(isCorrect(s)){
            answer += 1;
        }
        s = rotate(s);
    }
    
    return answer;
}


// 올바른 괄호 문자열인지 확인하는 함수
function isCorrect(s){
    
    const match = {']' : '[', ')' : '(','}':'{' }; // 각각의 문자에 올바르게 대응되는 괄호
    const stack = []; // 스택 변수
    
    for(let i=0; i<s.length; i++){
        if(s[i] === ']' || s[i] === ')' || s[i] === '}'){
            if(stack.length === 0 || stack[stack.length - 1] !== match[s[i]]){
                return false;
            }
            stack.pop();
        }else{
            stack.push(s[i]);
        }
    }
    
    return stack.length === 0 ? true : false;
}
    
function rotate(s){
    const arr = s.split("");
    arr.push(arr.shift());
    return arr.join("");
}