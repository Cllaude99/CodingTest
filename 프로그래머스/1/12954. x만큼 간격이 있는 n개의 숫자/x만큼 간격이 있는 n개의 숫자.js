function solution(x, n) {
    var answer = [];
    let increaseNum = x;
    
    for(let i=0; i<n; i++){
        answer.push(x);
        x = x + increaseNum;
    }
    
    return answer;
}