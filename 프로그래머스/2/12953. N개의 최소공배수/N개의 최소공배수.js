/* 문제 접근 */

/*
    1. arr배열을 순차적으로 확인해가면서 앞의 2개의 숫자를 뽑아 두 수의 최소공배수를 구해 arr배열에 추가한다.
    1-1. 1번과정에서 두 수의 최소공배수를 구할때에는 두수를 곱한 후 최대공약수로 나누어 구한다.
    
    2. 만약 1번의 과정에서 arr배열에 오직 한개의 숫자가 있다면 해당 수가 구하고자 하는 정답임으로, 해당 값을 answer에 대입하고 종료한다.
*/

// 최대 공약수를 구하는 함수
function gcd(a,b){
    if(b === 0) return a;
    else return gcd(b, a%b);
}

function solution(arr) {
    var answer = 0;
    
    while(arr.length > 1){
        const first = arr.shift();
        const second = arr.shift();
        
        const value = (first*second) / gcd(first, second);
        
        arr.push(value);
    }
    
    answer = arr[0];
    
    return answer;
}
