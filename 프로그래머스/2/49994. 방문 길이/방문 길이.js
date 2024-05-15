/*
    문제분석 및 설계
    
    1. 
*/
function solution(dirs) {
    let [curX, curY] = [0,0]; // 현재 좌표를 의미하는 변수
    let moved = 0; // 이동한 횟수를 의미하는 변수
    const visited = []; // 방문한 좌표를 저장하는 배열로, [시작 X좌표, 시작 Y좌표, 도착 X좌표, 도착 Y좌표]의 형식으로 저장된다.
    const directions = {"U" : [0, 1], "D":[0, -1], "R": [1, 0], "L": [-1,0]};
    
    dirs.split("").forEach((direction) => {
        const [moveX, moveY] = directions[direction];
        if(curX + moveX >= -5 && curX + moveX <= 5 && curY+moveY >= -5 && curY+moveY <= 5){
            // 처음 가본 경로인 경우
            if(!IsBefore(visited, curX, curY, curX+moveX, curY+moveY)){
                moved += 1;
                visited.push([curX, curY, curX+moveX, curY+moveY]);
            }
            
            curX += moveX;
            curY += moveY;
        }
    })
    return moved;
}

function IsBefore(visited, curX, curY, endX, endY){
    let isVisited = false;

    for(let i=0; i<visited.length; i++){
        const [startX, startY, arriveX, arriveY] = visited[i];
        if(endX === arriveX && endY === arriveY && curX === startX && curY === startY || endX === startX && endY === startY && curX === arriveX && curY === arriveY){
            isVisited = true;
            break;
        }
    }
    
    return isVisited;
}