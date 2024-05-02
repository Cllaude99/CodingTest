/* 문제 접근 */

/*
    
*/

function solution(n,a,b)
{
    var answer = 1;
    
    let meet = false;
    let currentA = a < b ? a : b;
    let currentB = a < b ? b : a;
    
    while(!meet){
        for(let i=1; i<=n; i+=2){
            if(currentA === i && currentB === i+1){
                meet = true;
                break;
            }
            if(i === currentA || i+1 === currentA){
               currentA = Math.floor(i / 2) + 1; 
            }
            
            if(i === currentB || i+1 === currentB){
                currentB = Math.floor(i / 2) + 1;
            }
        }
        if(!meet){
            answer += 1;
            n /= 2;
        }
    }
    

    return answer;
}