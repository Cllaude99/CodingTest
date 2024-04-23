function find_most(background, location){
    if(location ==='left'){
        for(let i=0; i<background[0].length; i++){
            for(let j=0; j < background.length; j++){
                if(background[j][i] === '#'){
                    return [j,i];
                }
            }
        }
    }
    else if(location === 'right'){
        for(let i=background[0].length-1; i >= 0; i--){
            for(let j=0; j < background.length; j++){
                if(background[j][i] === '#'){
                    return [j,i];
                }
            }
        }
    }
    else if(location === "top"){
        for(let i=0; i<background.length; i++){
            for(let j=0; j < background[0].length; j++){
                if(background[i][j] === '#'){
                    return [i,j];
                }
            }
        }
    }else if(location === "bottom"){
       for(let i=background.length - 1; i>=0 ;i--){
            for(let j=0; j < background[0].length; j++){
                if(background[i][j] === '#'){
                    return [i,j];
                }
            }
        } 
    }
}

function solution(wallpaper) {
    var answer = [];
    
    const background = []; // 배경화면 상태를 나타내는 배열
    
    // 입력으로 주어진 wallpaper를 참고하여 background배열을 초기화하는 과정
    wallpaper.forEach((files) => {
        background.push(files.split(""));
    })
    
    let leftmost = find_most(background, "left"); // 가장 왼쪽에 위치한 파일의 좌표
    let rightmost = find_most(background, "right"); // 가장 오른쪽 위치한 파일의 좌표
    let topmost = find_most(background, "top"); // 가장 위에 위치한 파일의 좌표
    let bottommost = find_most(background, "bottom"); // 가장 아래에 위치한 파일의 좌표
    
    
    answer.push(topmost[0]);
    answer.push(leftmost[1]);
    answer.push(bottommost[0]+1);
    answer.push(rightmost[1]+1);
    
    return answer;
}

// 가장왼쪽과 가장위쪽이 일치할때까지 각각 위로, 왼쪽으로 이동하면서 겹치는 좌표를 찾는다
// 가장오른쪽과 가장아래가 일치할때까지 각각 아래로, 오른쪽으로 이동하면서 겹치는 좌표를 찾는다.
// 하나밖에 존재하지 않는 경우 해당 위치의 왼쪽위좌표, 오른쪽 아래 좌표를 리턴한다. 존재좌표, 존재x좌표+1, 존재y좌표 +1