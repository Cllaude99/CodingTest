function solution(new_id) {
    var answer = '';
    
    answer = first_check(new_id);
    answer = second_check(answer);
    answer = third_check(answer);
    answer = fourth_check(answer);
    answer = fifth_check(answer);
    answer = sixth_check(answer);
    answer = seventh_check(answer);
    
    return answer;
}

function first_check(new_id){
    return new_id.toLowerCase();
}

function second_check(new_id){
    let confirm_id =  new_id.replaceAll(/[^a-z0-9-_.]/g, ''); 
    return confirm_id;
}

function third_check(new_id){
    let stack = [];
    
    for(let i=0; i<new_id.length; i++){
        stack.push(new_id[i]);
        
        if(stack.slice(-2).join('') === '..'){
            stack.splice(-1);
        }
    }
    
    return stack.join('');
}

function fourth_check(new_id){
    let confirm_id = new_id.split('');
    
    if(confirm_id[0] === '.'){
        confirm_id.splice(0,1);
    }
    if(confirm_id[confirm_id.length - 1] === '.'){
        confirm_id.splice(-1);
    }
    
    return confirm_id.join('');
}

function fifth_check(new_id){
    if(new_id.length === 0){
        return "a";
    }
    return new_id;
}

function sixth_check(new_id){
    let confirm_id = new_id;
    
    if(new_id.length >= 16){
        confirm_id = new_id.slice(0,15);
        if(confirm_id[14] === '.'){
            confirm_id = confirm_id.slice(0,14);
        }
    }
    
    return confirm_id;
}

function seventh_check(new_id){
    let confirm_id = new_id;
    let last_word = new_id[new_id.length - 1];
    
    while(confirm_id.length <= 2){
        confirm_id += last_word;
    }
    
    return confirm_id;
}