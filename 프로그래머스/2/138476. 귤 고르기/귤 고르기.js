/* 문제 접근 */

function solution(k, tangerine) {
    var answer = 0;
    
    const tangerineInfo = {}; //  귤의 크기에 따른 개수정보
    const tangerine_num = []; // 귤의 크기 정보
    
    tangerine.forEach((element) => {
        if(!tangerine_num.includes(element)){
            tangerine_num.push(element);
            tangerineInfo[element] = 1;
        }else{
            tangerineInfo[element] += 1;
        }
    });
    
    const new_arr = [];
    
    tangerine_num.forEach((element) => {
        new_arr.push([tangerineInfo[element], element]);
    });
    
    new_arr.sort((a,b) => b[0] - a[0]);
    
    for(let i=0; i<new_arr.length; i++){
        k -= new_arr[i][0];
        answer += 1;
        if(k <= 0) break;
    }
    
    return answer;
}