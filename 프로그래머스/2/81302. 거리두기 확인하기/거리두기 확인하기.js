/*
    문제분석 및 설계
    
    1. 입력으로 주어지는 places를 참고하여, 응시자들 사이에 거리두기가 올바르게 지켜지고 있는지를 
       확인하고, 올바르게 지켜졌다면 1을, 그렇지 않다면 0을 반환해야한다. 
    
    1. 응시자의 수만큼 탐색을 시작한다. (예를 들어 A,B,C,D 4명의 응시자가 있다면,
       첫번째로 A응시자와 B,C,D응시자를 탐색, 두번째로 B응시자와 C,D응사자를 탐색, 
       세번째로 C응시자와 D응시자를 탐색)
    
    2. 두 응시자의 맨해튼 거리를 구해 해당 거리를 기준으로 아래와 같은 과정을 거친다.
    
    3. 맨해튼 거리가 1인 경우
       거리두기를 지키고 있지 않은 경우이므로 0을 리턴하고 탐색을 종료한다.
    4. 맨해튼 거리가 2인 경우
       두 응시자가 같은 행, 같은 열, 또는 둘다 아닌 경우(대각선)를 확인하고, 두 응시자의 맨해튼 거리 사이에 
       파티션이 존재하는 지 확인한다.
       2-1. 이때 파티션이 존재해야 하며, 사이에 빈 테이블이 있게 되는 경우 0을 리턴하고 탐색을 종료한다.
       2-2. 그렇지 않고 파티션으로 되어 있는 경우 다음 탐색을 수행한다.
    5. 맨해튼 거리가 3이상인 경우
       거리두기를 지키고 있는 경우 이므로 다음 탐색을 수행한다. (다음 탐색이 없는 경우 1을 리턴하고 종료한다)
    
*/
function solution(places) {
    var answer = [];
    
    let candidate = []; // 응시자들의 위치를 나타내는 좌표 (예. [x좌표, y좌표])
    
    places.forEach((place, index) => {
        place.forEach((info, row) => {
            for(let col=0; col<5; col++){
                if(info[col] === 'P'){
                    candidate.push([row, col]);
                }
            }
        });
        
        let success = true;
        
        if(candidate.length > 0){
            for(let i=0; i<candidate.length; i++){
                for(let j=i+1; j<candidate.length; j++){
                    if(!isCorrect(candidate[i], candidate[j], places[index])){
                        success = false;
                        break;
                    }
                }
                if(!success) break;
            }
            
            if(success) answer.push(1);
            else answer.push(0);
        }
        else{
            answer.push(1);
        }
            
        candidate = [];
    })
    
    return answer;
}

// 입력으로 두 지점의 좌표가 주어지고, 
function isCorrect(location_1, location_2, waiting_room){
    const distance =  Math.abs(location_1[0] - location_2[0]) + Math.abs(location_1[1] - location_2[1]);
    
    if(distance === 1){
        return false;
    }
    if(distance > 2){
        return true;
    }
    if(distance === 2){
        const [first_x, first_y] = location_1;
        const [second_x, second_y] = location_2;
        
        // 같은 행인 경우
        if(first_x === second_x){
            const smaller_y = first_y < second_y ? first_y : second_y;
            if(waiting_room[first_x][smaller_y + 1] === 'X'){
                return true;
            }
            else return false;
        }
        // 같은 열인 경우
        else if(first_y === second_y){
            const smaller_x = first_x < second_x ? first_x : second_x;
            if(waiting_room[smaller_x+1][first_y] === 'X'){
                return true;
            }
            else return false;
        }
        // 둘다 아닌 경우
        else{
            if(first_x + 1 === second_x && first_y-1 === second_y){
                if(waiting_room[first_x][first_y-1] === 'X' && waiting_room[first_x+1][first_y] === 'X') return true;
                else return false;
            }
            else{
                if(waiting_room[first_x][first_y+1] === 'X' && waiting_room[first_x+1][first_y] === 'X') return true;
                else return false;
            }
        }
        }
    
}