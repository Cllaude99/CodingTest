function solution(d, budget) {
    var answer = 0;
    
    let sorted_d = d.sort((a,b) => a-b);
    
    for(let i=0;i<sorted_d.length;i++){
        if(budget - sorted_d[i] >= 0){
            answer += 1;
            budget -= sorted_d[i];
        }
    }
    return answer;
}