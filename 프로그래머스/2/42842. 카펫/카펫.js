function solution(brown, yellow) {
    var answer = [];
    
    const total_tiles = brown + yellow;
    let width = 3;
    
    while(true){
        if(total_tiles % width === 0 && total_tiles / width <= width){
            const height = total_tiles / width;
            const b = 2*width + 2*(height-2);
            const y = total_tiles - b;
            
            if(b === brown && y === yellow){
                answer.push(width);
                answer.push(height);
                break;
            }
        }
        width += 1;
    }
    
    return answer;
}
