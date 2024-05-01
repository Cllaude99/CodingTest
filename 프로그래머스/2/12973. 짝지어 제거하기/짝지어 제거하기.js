function solution(s)
{
    var answer = -1;

    const stack = [];
    
    for(let i=0; i<s.length; i++){
        if(stack.length > 0 && stack[stack.length - 1] === s.charAt(i)){
            stack.pop();
        }else{
            stack.push(s.charAt(i));
        }
    }
    answer = stack.length === 0 ? 1 : 0;
    
    return answer;
}