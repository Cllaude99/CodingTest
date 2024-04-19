function solution(X, Y) {
    var answer = '';
    
    const xCount = new Array(10).fill(0);
    const yCount = new Array(10).fill(0);
    const common = [];
    
    for(let i=0; i<X.length; i++){
        xCount[+X[i]] += 1;
    }
    for(let i=0; i<Y.length; i++){
        yCount[+Y[i]] += 1;
    }
    
    for(let i=0; i<10; i++){
        if(xCount[i] >= 1 && yCount[i] >= 1){
            const small = xCount[i] < yCount[i] ? xCount[i] : yCount[i];
            for(let j=0; j<small; j++){
                common.push(i);
            }
        }
    }
    if(common.length === 0){
        answer = "-1";
    }
    else if(common[common.length-1] === 0){
        answer = '0';
    }else{
        answer = common.reverse().join("");
    }
    
    return answer;
}
