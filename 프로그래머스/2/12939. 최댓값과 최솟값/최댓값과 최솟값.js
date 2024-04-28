/* 문제 접근 */

/*
    1. 주어진 문자열 s를 공백으로 구분하고, 각각의 요소를 Number로 변환하여 리스트의 형태로 반환한다.
    2. 반환된 리스트를 Math.min, Math.max를 통해 최솟값과 최댓값을 구하여 answer에 저장한다.
    3. answer를 반환한다.
*/

function solution(s) {
    var answer = '';
    
    const numbers = s.split(" ").map(Number);
    
    answer += Math.min(...numbers).toString();
    answer += " ";
    answer += Math.max(...numbers).toString();
    
    return answer;
}