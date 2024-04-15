function solution(cards1, cards2, goal) {
    var answer = 'No';
    let success = true;
    
    for(let i=0; i<goal.length; i++){
        if(cards1[0] === goal[i]){
            cards1.shift();
        }else if(cards2[0] === goal[i]){
            cards2.shift();
        }else {
            success = false;
            break;
        }
    }
    
    if(success) answer = 'Yes';
    
    return answer;
}