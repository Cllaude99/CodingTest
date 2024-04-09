function solution(s){
    var answer = true;

    let pCount = 0; // p 또는 P의 개수
    let yCount = 0; // y 또는 Y의 개수
    
    for(let i=0;i<s.length;i++){
        if(s[i] === 'p' || s[i] === 'P') pCount += 1;
        else if (s[i] === 'y' || s[i] === 'Y') yCount += 1;
    }
    
    if((pCount === 0 && yCount ===0) || pCount === yCount) answer = true;
    else answer = false;
    

    return answer;
}