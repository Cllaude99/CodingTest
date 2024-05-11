/*
    문제 분석 및 설계
    
    
*/
function solution(numbers, target) {
    var answer = 0;
    const result = [];
    
    DFS(numbers, 0, numbers.length, 0, result);
    
    answer = result.filter((value) => value === target).length
    return answer;
}

function DFS(numbers, cur, last, sumValue, result){
    if(cur === last){
        result.push(sumValue);
    }else{
        DFS(numbers, cur + 1, last, sumValue + numbers[cur], result);
        DFS(numbers, cur + 1, last, sumValue - numbers[cur], result);
    }
}