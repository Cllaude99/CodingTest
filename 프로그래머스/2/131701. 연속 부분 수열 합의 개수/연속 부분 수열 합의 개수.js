/* 문제 접근 */

/*
    1. elements배열의 길이를 N이라고 할때, 길이가 1부터 N까지 배열의 요소값을 순차적으로 확인해야한다.
    
    2. 예를 들어 배열 [1,2,3,4,5]가 있을 경우에 길이가 1인 경우 1 -> 2 -> ... -> 5순서로 확인한다.
    
    3. 길이가 2인 경우 [1,2] -> [2,3] -> [3,4] -> ... [5,1] 순서로 확인한다.
    
    4. 길이가 3인 경우 [1,2,3] -> [2,3,4] -> ... [4,5,1] -> [5,1,2] 순서로 확인한다
    
    5. 위의 과정을 길이가 1부터 N까지 확인해 가며 이때 나온 배열들의 합을 구해 해당 값이 
       answer 배열에 존재하지 않는 경우에만 answer배열에 넣어준다.
*/

function solution(elements) {
    var answer = [];
    
    const N = elements.length; // elements 배열의 길이
    
    for(let i=0; i<N; i++){
        let sumValue = 0;
        for(let j=i; j< i + N; j++){
            sumValue += elements[j%N];
            answer.push(sumValue);
        }
    }
    
    const set = new Set(answer);
    return set.size;
}