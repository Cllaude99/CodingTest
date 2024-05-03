/* 문제 접근 */

/*
    1. 먼저 주어진 tangerine을 참고하여 아래와 같은 형식의 새로운 배열을 만든다.
    1-1. 새로운 배열은 [귤의 개수, 귤의 크기]를 값으로 가지는 배열이다. 
         (예를 들어, 1번 크기의 귤이 3개, 2번 크기의 귤이 5개인 경우, 새로운 배열은 [[3,1], [5,2]]) 
         가 된다.
    
    2. 1-1에서 도출한 새로운 배열을 귤의 개수에 따라 내림차순 정렬한다.
       (1-1을 예시로 보면, 새로운 배열은 [[5,2], [3,1]]로 정렬된다.)
       
    3. 2번에서 얻어낸 배열을 처음부터 확인해 가면서 k와 귤의 개수를 빼주는 과정을 진행하고, 
       귤의 종류에 해당하는 변수인 answer 값을 1증가한다.
    3-1. 3번과정 직후, (k <= 0) 인지 확인하여 참이 되는 경우 반복문을 빠져나오고, 그렇지 않다면
         3번 과정을 계속해서 진행한다.
*/

function solution(k, tangerine) {
    var answer = 0;
    
    const tangerineInfo = {}; //  귤의 크기에 따른 개수정보
    const tangerine_num = []; // 귤의 크기 정보
    
    tangerine.forEach((element) => {
        if(!tangerine_num.includes(element)){
            tangerine_num.push(element);
            tangerineInfo[element] = 1;
        }else{
            tangerineInfo[element] += 1;
        }
    });
    
    const new_arr = [];
    
    tangerine_num.forEach((element) => {
        new_arr.push([tangerineInfo[element], element]);
    });
    
    new_arr.sort((a,b) => b[0] - a[0]);
    
    for(let i=0; i<new_arr.length; i++){
        k -= new_arr[i][0];
        answer += 1;
        if(k <= 0) break;
    }
    
    return answer;
}