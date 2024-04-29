/* 문제 접근 */

/*
    1. 문자열에서 모든 0을 제거하고 새롭게 문자열을 반환한다.
    2. 1번에서 반환된 문자열의 길이를 확인하고 해당 길이에 해당하는 숫자를 2진법으로 반환한다.
    2-1. 2번에서 반환된 값이 '1'인 경우 종료한다.
    2-2. 2번에서 반환된 값이 '1'이 아닌 경우 1~2과정을 반복한다.
*/

// 입력으로 받은 문자열에서 모든 0을 제거하고 새로운 문자열을 반환하는 함수
function delete_zero(s){
    return s.split("").map(Number).filter((value) => value !== 0).join(''); 
}

// 입력으로 받은 길이를 2진법으로 표현하여 리턴하는 함수
function make_binary(length){
    const result = [];
    
    while(length > 1){
        result.push(length % 2);
        length = Math.floor(length / 2);
    }
    
    result.push(length);
    
    return result.reverse().join('');
}

function solution(s) {
    var answer = [];
    let deleted_zero_count = 0;
    let binary_count = 0;
    
    while(s !== '1'){
        const deleted_zero = delete_zero(s);
        deleted_zero_count += s.length - deleted_zero.length;
        s = make_binary(deleted_zero.length);
        binary_count += 1;
    }
    
    answer.push(binary_count);
    answer.push(deleted_zero_count);
    
    return answer;
}