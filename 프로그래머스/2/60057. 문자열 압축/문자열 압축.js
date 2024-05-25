/*
    문제분석 및 설계

    1. 문자열 s에 대해 문자열을 1개부터 s의 길이만큼 자르는 과정을 수행한다.
       (즉 문자열 s의 길이가 5인 경우, 1,2, ... 5의 크기만큼 문자열 s를 잘라가며 확인해나간다.)
       
    2. 문자열 s를 
*/

function solution(s) {
    let answer = s;
    let before_cnt = 0;
    let before_str = "";
    let sliced_str = "";
    
    for(let i=0; i<s.length; i++){
        const slice_length = i+1;
        before_cnt = 0;
        before_str = "";
        sliced_str = "";
        for(let j=0; j<s.length; j+=slice_length){
            const sliced = s.slice(j, j+slice_length);
            if(sliced.length === slice_length){
                if(before_str === sliced){
                    before_cnt += 1;
                }else{
                    if(before_cnt > 1){
                        sliced_str += before_cnt.toString();
                    }
                    if(j !== 0) sliced_str += before_str;
                    before_str = sliced;
                    before_cnt = 1;
                }
            }else{
                if(before_str !== ""){
                    if(before_cnt > 1){
                     sliced_str += before_cnt.toString();   
                    }
                    sliced_str += before_str;
                }
                sliced_str += sliced;
                before_str = "";
            }
        }
        
        if(before_str !== ""){
            if(before_cnt > 1){
                sliced_str += before_cnt.toString();
            }
            sliced_str += before_str;
        }
        
        if(sliced_str.length < answer.length){
            answer = sliced_str;
        }
    }
    
    return answer.length;
}