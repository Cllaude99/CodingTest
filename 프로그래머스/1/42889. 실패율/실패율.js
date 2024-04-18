function solution(N, stages) {
    var answer = [];
    const fail = [];
    
    const stage = new Array(501).fill(0);
    
    stages.forEach((element) => {
        stage[element] += 1;
    })
    
    for(let i=1; i<= N; i++){
        const bottom = stages.filter((element) => element >= i).length;
        const top = stage[i];
        
        if(bottom === 0){
            fail.push([0,i]);
        }else{
            fail.push([top/bottom, i]);
        }
    }
    
    fail.sort((a,b) => {
        if(a[0] === b[0]){
            return a[1] - b[1];
        }else{
            b[0]-a[0];
        }
    })
    
    fail.sort((a,b) => {
        if(a[0] === b[0]){
            return a[1] - b[1];
        }else{
            return b[0] - a[0];
        }
    })
   
    fail.forEach(([_,element]) => {
        answer.push(element);
    });
    
    return answer;
}
