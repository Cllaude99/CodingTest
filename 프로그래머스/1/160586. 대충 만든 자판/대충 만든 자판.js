function find_min_index(keymap, word){
    let index = [];
    
    for(let i=0; i<keymap.length; i++){
        let idx = keymap[i].split("").findIndex((element) => element === word);
        if(idx !== -1){
            index.push(idx+1);
        }
    }
    if(index.length === 0) return -1;
    return Math.min(...index);
}

function solution(keymap, targets) {
    var answer = [];
    
    for(let i=0; i<targets.length; i++){
        let count = 0;
        let success = true;
        for(let j=0; j<targets[i].length; j++){
            const value = find_min_index(keymap, targets[i][j])
            if(value === -1){
                answer.push(-1);
                success = false;
                break;
            }
            count += value;
        }
       if(success){
            answer.push(count);
       }
    }
    
    return answer;
}

