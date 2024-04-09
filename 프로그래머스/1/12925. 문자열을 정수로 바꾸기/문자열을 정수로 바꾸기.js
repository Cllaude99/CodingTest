function solution(s) {
    var answer = 0;
    let count = 10;
    let isNegative = false;
    
    if(s[0] === '-') isNegative = true;
    else if (s[0] === '+') isNegative = false
    else{
        answer += Number(s[0]);
    }
    
    for(let i=1;i<s.length;i++){
        answer *= count;
        answer += Number(s[i]);
    }
    
    if(isNegative) answer *= -1;
    
    return answer;
}