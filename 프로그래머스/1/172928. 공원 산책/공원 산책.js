function solution(park, routes) {
    const H = park.length;
    const W = park[0].length;
    const park_map = [];
    let current_coord = [];
    
    park.forEach((element, index) => {
        const row = element.split("");
        const target = row.findIndex((value) => value === 'S');
        if(target !== -1){
            current_coord = [index, target];
        }
        park_map.push(row);
    })
    
    routes.forEach((element) => {
        let [direction, move] = element.split(" ");
        move = +move;
        let [x, y] = current_coord;
        
        if(direction === 'E' && y + move < W){
             let success = true;
            for(let i=0; i<move; i++){
                if(park_map[x][y+i+1] === 'X'){
                    success = false;
                    break;
                }
            }
            console.log("E", current_coord);
            if(success) current_coord = [x, y+move];
        }else if(direction === 'W' && y - move >= 0){
             let success = true;
            for(let i=0; i<move; i++){
                if(park_map[x][y-i-1] === 'X'){
                    success = false;
                    break;
                }
            }
            console.log("W",current_coord);
            if(success) current_coord = [x, y-move];
        }else if(direction === 'S' && x + move < H){
             let aa = true;
            for(let i=0; i<move; i++){
                if(park_map[x+i+1][y] === 'X'){
                    aa = false
                    break;
                }
            }
            console.log("S", current_coord);
            if(aa) current_coord = [x+move, y];
        }else if(direction === 'N' && x - move >= 0){
             let success = true;
            for(let i=0; i<move; i++){
                if(park_map[x-i-1][y] === 'X'){
                    success = false
                    break;
                }
            }
            console.log("N",current_coord);
            if(success) current_coord = [x-move, y];
        }
        console.log(current_coord);
    });
    
    
    
    return current_coord;
}