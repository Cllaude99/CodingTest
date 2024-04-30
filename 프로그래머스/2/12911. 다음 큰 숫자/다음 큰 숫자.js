/* 문제 접근 */

/*
    1. n에서 1씩 증가해간다.
    2. 1번에서 증가된 숫자를 2진수로 변환하고 변환된 2진수의 1의 개수가 n의 2진수 변환의 1의 개수와 동일한지 확인한다.
    3. 2번에서 만약동일하다면 해당 숫자를 리턴한다.
    4. 2번에서 동일하지 않을 경우 다시 1번으로 돌아간다.
*/

// 입력인수로 받은 number를 이진수 표현으로 바꾸어 리스트의 형태로 반환하는 함수
function make_binary(number){
    const result = [];
    
    while(number > 1){
        result.push(number % 2);
        number = Math.floor(number / 2);
    }
    result.push(1);
    
    return result.reverse();
}


function solution(n) {
    const n_one_count = make_binary(n).filter((element) => element === 1).length;
    let target = n+1;
    
    while(true){
        let target_one_count = make_binary(target).filter((e) => e === 1).length;
        if(target_one_count === n_one_count) break;
        target += 1;
    }
    
    return target;
}