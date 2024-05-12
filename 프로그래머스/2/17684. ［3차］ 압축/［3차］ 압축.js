function solution(msg) {
    const dict = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    var answer = [];
    let stack = [];
    
    
    for(let i=0; i<msg.length; i++){
        stack.push(msg.charAt(i));
        
        if(dict.includes(stack.join(''))) continue;
        
        answer.push(dict.indexOf(stack.slice(0, -1).join('')) + 1);
        dict.push(stack.join(''));
        i -= 1;
        stack = [];
    }
    
    if(stack.length > 0){
        answer.push(dict.indexOf(stack.join('')) + 1)
    }
    
    return answer;
}