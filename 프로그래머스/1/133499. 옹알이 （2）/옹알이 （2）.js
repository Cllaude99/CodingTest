function solution(babbling) {
    var answer = 0;
    let before = '';
    
    babbling.forEach((word) => {
        let success = true;
        before = '';
        for(let i=0; i<word.length; i++){
            if(before !== 'a' && word[i] === 'a'){
                if(i+2 < word.length){
                    if(word[i+1] === 'y' && word[i+2] === 'a'){
                        i+=2;
                        before = 'a';
                    }else{
                        success = false;
                        break;
                    }
                }else{
                    success = false;
                    break;
                }
            }else if(before !== 'y' && word[i] === 'y'){
                if(i+1 < word.length){
                    if(word[i+1] === 'e'){
                        i += 1;
                        before = 'y';
                    }else{
                        success = false;
                        break;
                    }
                }else{
                    success = false;
                    break;
                }
                
            }else if(before !== 'w' && word[i] === 'w'){
                if(i+2 < word.length){
                    if(word[i+1] === 'o' && word[i+2] === 'o'){
                        i += 2;
                        before = 'w';
                    }else{
                        success = false;
                        break;
                    }
                }else{
                    success = false;
                    break;
                }
                
            }else if(before !== 'm' && word[i] === 'm'){
                if(i+1 < word.length){
                    if(word[i+1] === 'a'){
                        i += 1;
                        before = 'm';
                    }else{
                        success = false;
                        break;
                    }
                }else{
                    success = false;
                    break;
                }
            }else{
                success = false;
                break;
            }
        }
        if(success) answer += 1;
    })
    return answer;
}