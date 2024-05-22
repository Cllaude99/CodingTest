/*
    문제분석 및 설계
    
    1. 
*/
function solution(p) {
    let answer = '';
    
    answer = Check(p);
    return answer;
}

function Check(letter){
    if(letter.length === 0) return '';
    
    let u = '';
    let v = '';
    let open_arrow_num = 0;
    let close_arrow_num = 0;
    
    for(let i=0; i<letter.length; i++){
        if(open_arrow_num > 0 && close_arrow_num >0 && open_arrow_num === close_arrow_num){
            v = letter.slice(i);
            break;
        }
        else{
            if(letter[i] === '(') open_arrow_num += 1;
            else close_arrow_num += 1;
            u += letter[i];
        }
    }
    
    if(isCorrect(u)){
        u += Check(v);
        console.log("u", u);
        return u;
    }
    
    else{
        let temp = '(';
        temp += Check(v);
        temp += ')';
        u = u.slice(1);
        u = u.slice(0, -1);
        temp += Flip_letter(u);
        return temp;
    }
}

function Flip_letter(letter){
    let filped = '';
    
    for(let i=0; i<letter.length; i++){
        if(letter[i] === '(') filped += ')';
        else filped += '(';
    }
    
    return filped;
}

// 균형잡인 괄호 문자열 letter를 입력으로 받아 해당 letter가 올바른 괄호 문자열인지 확인하는 함수
function isCorrect(letter){
    const stack = [];
    
    for(let i=0; i<letter.length; i++){
        if(letter[i] === '('){
            stack.push('(');
        }
        else{
            if(stack.length > 0){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    return true;
}