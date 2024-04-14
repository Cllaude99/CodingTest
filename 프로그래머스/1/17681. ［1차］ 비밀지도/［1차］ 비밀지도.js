function num_to_2(number, n){
    let result = [];
    
    while(number > 0){
        result.push(number % 2);
        number = Math.floor(number/2);
    }
    
    while(result.length < n){
        result.push(0);
    }
   
    return result.reverse();
}

function solution(n, arr1, arr2) {
    var answer = [];
    
    let solved_arr1 = [];
    let solved_arr2 = [];
    
    arr1.forEach((element) => {
        solved_arr1.push(num_to_2(element, n));
    })
    arr2.forEach((element) => {
        solved_arr2.push(num_to_2(element, n));
    })
    
    for(let i=0; i<n; i++){
        let map = "";
        const first_map = solved_arr1[i];
        const second_map = solved_arr2[i];
        
        first_map.forEach((element,index) => {
            if(element === 0 &&  second_map[index] === 0){
                map += " ";
            }else map += "#"
        })
        
        answer.push(map);
    }
    
    return answer;
}
// number를 2진법으로 표현해서 반환하는 함수
// arr1,arr2의 각 배열값이 2진법으로 변환된 값들을 저장하는 변수 2개
// arr1, arr2를 n번돌면서 각각의 배열값에 있는 값들을 비교하면서 #," "을 넣어주는 과정 필요