/* 문제 접근 */

/*
    1. A배열의 최솟값과 B배열의 최댓값을 구해서 두 값을 곱한 후 answer변수에 더해준다.
    1-1. 이때 A배열에서는 해당 최솟값을, B배열에서는 해당 최댓값을 삭제해준다.
    2. 배열의 요소가 존재하지 않을 때 까지 1번 과정을 진행한다.
*/


function solution(A,B){
    var answer = 0;
    
    A.sort((a,b) => a-b); // 오름차순으로 정렬
    B.sort((a,b) => b-a); // 내림차순으로 정렬

    while(A.length > 0){
        answer += (A.shift() * B.shift());
    }
    
    return answer;
}


