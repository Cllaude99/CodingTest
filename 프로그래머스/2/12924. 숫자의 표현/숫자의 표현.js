/*
    문제분석 및 설계
    
    1. 연속된 자연수들로 n을 표현하기 위해서는 1,2,3, ... n까지의 값들에 대해, 특정 부분의 합을 
       확인해 나가야 하며, 이때 특정 부분을 이루고 있는 수는 연속된 수이어야 한다.
       
    1. 특정 부분을 나타내기 위해 두 개의 포인터(start_ptr, end_ptr)를 이용해서 문제에 접근한다.
    2. start_ptr와 end_ptr의 값은 1로 초기화 한다.
    3. 특정 부분의 합을 의미하는 변수인 partial_sum과 n을 아래와 같은 기준에 따라 비교한다.
    3-1. partial_sum이 n보다 작은 경우
         end_ptr의 값을 1증가하고 partial_sum에 end_ptr의값을 더한다.
         이후, 3번으로 돌아간다
    3-2. partial_sum이 n보다 큰 경우
         partial_sum에 start_ptr의값을 뺀후, start_ptr의 값을 1증가시킨다.
         이후, 3번으로 돌아간다.
    3-3. partial_sum의 값이 n과 동일한 경우
         answer값을 1증가시키고, 
         partial_sum에 start_ptr의값을 뺀후, start_ptr의 값을 1증가시킨다.
         end_ptr의 값을 1증가하고 partial_sum에 end_ptr의값을 더한다. 
         3번으로 돌아간다
    4. 위 과정을 start_ptr값이 n보다 작거나 같을 때 까지 진행한다.
    
    
*/

function solution(n) {
     const answer = [];
    let numbers = [];
    let i = 1,
        j = 1;

    while(i <= n){
        if(i > n) break;        
        numbers.push(i);
        let total = 0;
        for(const num of numbers) total += num;
        if(total === n){ 
            answer.push(numbers.shift());                 
            i = j++;             
        }else if(total > n){
            numbers = [];
            i = j++;
        }        
        i++;
    }

    return answer.length;
}