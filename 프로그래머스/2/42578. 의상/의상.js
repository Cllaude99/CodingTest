/*
    문제 분석
    
    1. 
*/

/*
    문제 설계
*/
function solution(clothes) {
    var answer = 0;
    
    const clothes_obj = {};
    let cloth_number = 1;
    
    clothes.forEach(([cloth, type]) => {
        if(clothes_obj[type] === undefined){
            clothes_obj[type] = [cloth];
        }else{
            clothes_obj[type].push(cloth);
        }
    });
    
    Object.keys(clothes_obj).forEach((type) => {
        cloth_number *= (clothes_obj[type].length + 1) ;
    })
    
    answer += cloth_number;
    answer -= 1;
    
    return answer;
}


    
