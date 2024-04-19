function solution(n, lost, reserve) {
    var answer = 0;
    
    const clothes = new Array(n+1).fill(1);
    
    lost.sort((a,b) => a-b);
    reserve.sort((a,b) => a-b);
    
    lost.forEach((person) => {
        clothes[person] -= 1;
    });
    
    reserve.forEach((person) => {
        clothes[person] += 1;
    });
    
    lost.forEach((person) => {
        if(clothes[person] === 0){
            if(clothes[person-1] >= 2){
                clothes[person-1] -= 1;
                clothes[person] += 1;
            }else if(clothes[person+1] >= 2){
                clothes[person+1] -= 1;
                clothes[person] += 1;
        }
        }
    });
    
    for(let i=1; i<=n; i++){
        if(clothes[i] >= 1) answer+=1;
    }
    
    return answer;
}