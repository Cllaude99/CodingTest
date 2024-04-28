/* 문제 접근 */

/*
    1. 스택배열 stack을 선언하고 [] 로 초기화합니다.
    2. 문자열 s를 처음부터 끝까지 확인합니다.
    2-1. s[i] 값이 '(' 인 경우 stack에 삽입합니다.
    2-2. s[i] 값이 ')' 인 경우 stack에서 pop합니다.
    
    3. false가 되는 조건
    3-1. 2-2에서 stack의 값을 pop할때에 스택이 비어있을 경우 false를 리턴합니다.
    3-2. 문자열 s를 모두 다 돌았는데에도 stack에 값이 남아있는 경우 false를 리턴합니다.
    
    4. 3번 조건에 부합하지 않는 경우 true를 리턴합니다.
*/
function solution(s){
    var answer = true;

    let stack = []; // 스택을 나타내는 배열
    
    for(let i=0; i<s.length; i++){
        if(s[i] === '('){ // 2-1 조건을 코드로 나타낸 부분
            stack.push('(');
        }else{ // 2-2 조건을 코드로 나타낸 부분
            if(stack.length > 0){
                stack.pop();
            }else{ // 3-1 조건에 해당되는 부분
                answer = false;
                break;
            }
        }
    }
    
    if(stack.length > 0){ // 3-2 조건에 해당되는 부분
        answer = false;
    }

    return answer;
}