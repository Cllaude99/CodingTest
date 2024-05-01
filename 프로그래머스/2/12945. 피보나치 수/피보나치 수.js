/* 문제 접근 */

/*
    1. 문제에서 주어진 피보나치 수열의 공식에 따라 함수를 만든다.
*/

function solution(n) {
    var answer = 0;
    
    const fibo = [0,1];
    
    for(let i=2; i<n+1; i++){
        fibo[i] = (fibo[i-2] + fibo[i-1]) % 1234567
    }
    
    return fibo[n];
}