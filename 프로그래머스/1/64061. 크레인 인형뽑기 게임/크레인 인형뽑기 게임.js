function init_column(board, column){
    let new_column = [];
    
    for(let i=board.length-1; i>=0; i--){
        if(board[i][column] !== 0){
            new_column.push(board[i][column]);
        }
    }
    
    return new_column;
}

function check_basket(basket){
    const last_index = basket.length-1;
    
    if(basket.length >= 2 && basket[last_index-1] === basket[last_index]){
        return true;
    }
    return false;
}

function solution(board, moves) {
    var answer = 0;
    
    let stack = [];
    let basket = [];
    
    for(let i=0; i<board.length; i++){
        stack.push(init_column(board, i));
    }
    
    moves.forEach((crain) => {
        if(stack[crain-1].length > 0){
            basket.push(stack[crain-1].pop());
            if(check_basket(basket)){
                basket.splice(-2);
                answer += 2;
            }
        }
    })
    
    return answer;
}