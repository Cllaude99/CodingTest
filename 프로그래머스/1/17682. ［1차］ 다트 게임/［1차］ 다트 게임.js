function solution(dartResult) {
    var answer = 0;
    let index = 0;
    let scores = [];
    
    for(let i=0; i<dartResult.length; i++){
        let value = +dartResult[i];
        
        if(dartResult[i] === '1' && dartResult[i+1] === '0'){
            value = 10;
            i += 1;
        }
        
        if(dartResult[i+1] === 'D'){
            value = value*value;  
        }else if(dartResult[i+1] === 'T'){
            value = value*value*value;
        }
            
        if(dartResult[i+2] === '*' || dartResult[i+2] === '#'){
            if(dartResult[i+2] === '*'){
                value = 2*value;
                if(index !== 0){
                    scores[index-1] = 2*scores[index-1];
                }
            }else if(dartResult[i+2] === '#'){
                value = -1*value;
            }
            i += 2;    
        }else{
            i += 1;
        }
             
        scores[index] = value;
        index += 1;     
    }
    
    answer = scores.reduce((acc,cur) => acc+cur);
    return answer;
}