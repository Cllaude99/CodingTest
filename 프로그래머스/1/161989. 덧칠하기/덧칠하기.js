function solution(n, m, section) {
    var answer = 0;
    let start = section[0];
    
    for(let i=1; i<section.length; i++){
        if(section[i] - start < m) continue;
        else{
            answer += 1;
            start = section[i];
        }
    }
    answer += 1;
    
    return answer;
}


