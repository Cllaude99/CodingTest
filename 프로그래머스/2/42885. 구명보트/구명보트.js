/* 문제 접근 */

/*
    1. people 배열에 저장되어 있는 사람들의 몸무게를 내림차순 정렬합니다.
*/

function solution(people, limit) {
    var minimum_boat = people.length; // 구명 보트의 개수를 의미하는 변수
    
    people.sort((a,b) => a-b); // 사람들의 몸무게 오름차순 정렬
    
    let left = 0;
    let right = people.length - 1;
    
    while(left < right){
        if(people[left] + people[right] <= limit){
            minimum_boat -= 1;
            left += 1;
            right -= 1;
        }else{
            right -= 1;
        }
    }
    
    return minimum_boat;
}
