/*
    문제 분석 및 설계
    
    
*/
function solution(n, t, m, p) {
    var answer = '';
    let index = 0;
    let start = 0;
    
    while(answer.length <= t){
        const number = change_number(start, n);
        for(let i=0; i<number.length; i++){
            if(index === p-1){
                answer += number[i].toString();
            }
            index = (index+1) % m;
        }
        start += 1;
    }
    
    answer = answer.slice(0, t);
    
    
    
    return answer;

}

// 입력으로 number(숫자) 와 n(몇진수 인지에 대한 정보)이 주어지며, number를 n진수로 변환해서 반환한다.
function change_number(number, n){
    const result = [];
    const dict = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: 'A',
        11: 'B',
        12: 'C',
        13: 'D',
        14: 'E',
        15: 'F'
    }
    
    while(number >= n){
        result.push(dict[number%n]);
        number = Math.floor(number/n);
    }
    result.push(dict[number]);
    
    return result.reverse().join('');
}