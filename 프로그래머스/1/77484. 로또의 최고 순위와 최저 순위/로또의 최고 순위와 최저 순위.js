function solution(lottos, win_nums) {
    var answer = [];
    
    let minRank = 0;
    let maxRank = 0;
    let correctNum = 0;
    let zeroNum = 0;
    
    lottos.forEach((element) => {
        if(element === 0){
            zeroNum += 1;
        }
        else if(win_nums.includes(element)){
            correctNum += 1;
        }
    });
    
    minRank = correctNum <= 1 ? 6 : 6-correctNum+1;
    maxRank = zeroNum > 0 ? 6-(correctNum+zeroNum)+1 : minRank;
    
    answer.push(maxRank);
    answer.push(minRank);
    
    return answer;
}