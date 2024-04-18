function solution(k, m, score) {
    var answer = 0;
    let temp = [];
    score.sort((a,b) => b-a);
    
    for(let i=0; i<score.length; i++){
        temp.push(score.slice(i, i+m));
        i+=m-1;
    }
    
    temp.forEach((element) => {
        if(element.length === m){
            answer += Math.min(...element) * m;
        }
    })
    return answer;
}
