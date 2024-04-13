function solution(t, p) {
    var answer = 0;
    
    for(let i=0; i<= t.length-p.length; i++){
        let temp ="";
        for(let j=i; j<i+p.length;j++){
            temp += t[j];
        }
        if(parseInt(temp) <= parseInt(p)) answer += 1;
    }
    return answer;
}