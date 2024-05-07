/*
    문제 분석
    
    1. 주어진 문제의 조건을 보면, 실행대기 큐에서 값을 하나 꺼내고, 해당 값의 우선순위가 실행 대기 큐에 있는
       다른 값의 우선순위보다 크거나 같은 경우, 해당 프로세스를 실행하고, 그렇지 않을 경우 실행대기 큐에 다시 
       넣어주는 과정을 진행하는 것을 확인 할 수 있다.
    2. 이 말인 즉슨, 실행 대기 큐의 최댓값을 확인해 나가야 하며, 현재 실행 대기 큐에서 뽑은 값의 우선순위가
       최댓값 이상인지 확인하는 과정이 필요하다
*/

/*
    문제 설계
    
    1. 실행대기큐를 다음과 같이 수정해준다.
       [2,1,3,2] -> [[2,0], [1,1], [3,2], [2,3]]
       ([우선순위값, 인덱스]의 형태로 수정하여 다시 실행대기큐 초기화해준다)
       
    2. 실행대기큐에 값이 존재하는지 확인하고, 값이 존재하는 경우 실행대기큐에 있는 프로세스를 맨 처음부터 하나씩          뽑는다. 만약 실행대기큐가 비어있다면, 종료한다
    
    3. 1번과정에서 뽑은 프로세스의 우선순위와 나머지 실행대기큐에 있는 우선순위의 최댓값을 비교한다.
    3-1. 뽑은 프로세스의 우선순위 >= 나머지 실행대기큐에 있는 우선순위 인경우
         sequence배열에 뽑은 프로세스의 인덱스 값을 맨뒤에 넣는다.
    3-2. 뽑은 프로세스의 우선순위 < 나머지 실행대기큐에 있는 우선순위 인경우
         뽑은 프로세스의 값을 실행대기큐의 마지막에 넣고 2번 과정으로 돌아간다.
    
    4. 최종적으로 sequence배열에서 location에 해당하는 값이 몇번째 인덱스에 존재하는 지를 answer에 대입하고
       answer를 반환한다.
         
*/
function solution(priorities, location) {
    var answer = 0;
    const sequence = [];
    
    priorities = priorities.map((priority, index) => [priority, index]);
    
    while(priorities.length > 0){
        const [priority, index] = priorities.shift();
        if(priority >= getMaxValue(priorities)){
            sequence.push(index);
        }else{
            priorities.push([priority, index]);
        }
    }
    
    answer = sequence.findIndex((where) => where === location) + 1;
    
    return answer;
}

function getMaxValue(arr){
    let maxValue = -1;
    
    for(let i=0; i<arr.length; i++){
        maxValue = arr[i][0] > maxValue ? arr[i][0] : maxValue;
    }
    
    return maxValue;
}